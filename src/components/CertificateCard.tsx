import { useEffect, useRef, useState } from 'react';
import { Award, Upload, X, File, Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface CertificateCardProps {
  cert: string;
  certKey: string;
  accent: 'teal' | 'emerald' | 'slate';
  uploadable?: boolean;
}

const accentStyles = {
  teal: {
    iconBg: 'bg-teal-50 group-hover:bg-teal-100',
    iconColor: 'text-teal-600',
    hoverBorder: 'hover:border-teal-300',
    badgeBg: 'bg-teal-50',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200',
    removeBtn: 'bg-teal-500 hover:bg-teal-600',
    fileIconBg: 'bg-teal-50 text-teal-600',
  },
  emerald: {
    iconBg: 'bg-emerald-50 group-hover:bg-emerald-100',
    iconColor: 'text-emerald-600',
    hoverBorder: 'hover:border-emerald-300',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200',
    removeBtn: 'bg-emerald-500 hover:bg-emerald-600',
    fileIconBg: 'bg-emerald-50 text-emerald-600',
  },
  slate: {
    iconBg: 'bg-slate-100 group-hover:bg-slate-200',
    iconColor: 'text-slate-700',
    hoverBorder: 'hover:border-slate-400',
    badgeBg: 'bg-slate-50',
    badgeText: 'text-slate-700',
    badgeBorder: 'border-slate-200',
    removeBtn: 'bg-slate-600 hover:bg-slate-700',
    fileIconBg: 'bg-slate-100 text-slate-600',
  },
};

interface UploadedFile {
  name: string;
  path: string;
  isImage: boolean;
  fileType: string;
}

export default function CertificateCard({ cert, certKey, accent, uploadable = true }: CertificateCardProps) {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(uploadable);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const s = accentStyles[accent];

  useEffect(() => {
    if (!uploadable) return;
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from('certificate_uploads')
        .select('file_name, file_path, is_image, file_type')
        .eq('cert_key', certKey)
        .maybeSingle();

      if (cancelled) return;

      if (data) {
        const file: UploadedFile = {
          name: data.file_name,
          path: data.file_path,
          isImage: data.is_image,
          fileType: data.file_type ?? '',
        };
        setUploadedFile(file);

        if (file.isImage) {
          const { data: urlData } = supabase.storage
            .from('certificates')
            .getPublicUrl(file.path);
          setPreviewUrl(urlData.publicUrl);
        }
      }
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [certKey, uploadable]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const isImage = file.type.startsWith('image/');
      const ext = file.name.split('.').pop() || 'file';
      const filePath = `${certKey}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from('certificates')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { error: upsertError } = await supabase
        .from('certificate_uploads')
        .upsert({
          cert_key: certKey,
          file_name: file.name,
          file_path: filePath,
          file_type: file.type,
          is_image: isImage,
        }, { onConflict: 'cert_key' });

      if (upsertError) throw upsertError;

      const newFile: UploadedFile = {
        name: file.name,
        path: filePath,
        isImage,
        fileType: file.type,
      };
      setUploadedFile(newFile);

      if (isImage) {
        const { data: urlData } = supabase.storage
          .from('certificates')
          .getPublicUrl(filePath);
        setPreviewUrl(urlData.publicUrl);
      } else {
        setPreviewUrl(null);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleRemove = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!uploadedFile) return;

    try {
      await supabase.storage.from('certificates').remove([uploadedFile.path]);
      await supabase.from('certificate_uploads').delete().eq('cert_key', certKey);
      setUploadedFile(null);
      setPreviewUrl(null);
    } catch (err) {
      console.error('Remove failed:', err);
    }
  };

  return (
    <div className="group bg-white rounded-xl border border-slate-100 p-5 hover:shadow-lg hover:border-teal-200 transition-all duration-300">
      <div className="flex items-start gap-3 mb-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${s.iconBg} flex items-center justify-center transition-colors`}>
          <Award size={18} className={s.iconColor} />
        </div>
        <p className="text-sm font-medium text-slate-700 leading-snug pt-1">{cert}</p>
      </div>

      {uploadable && (
        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
      )}

      {!uploadable ? null : loading ? (
        <div className="mt-3 border-2 border-dashed border-slate-200 rounded-lg py-6 flex items-center justify-center">
          <Loader2 size={20} className="animate-spin text-slate-400" />
        </div>
      ) : uploadedFile ? (
        <div className="mt-3 relative rounded-lg overflow-hidden border border-slate-200 group/img">
          {uploadedFile.isImage && previewUrl ? (
            <img src={previewUrl} alt={cert} className="w-full h-40 object-cover" />
          ) : (
            <div className="w-full h-40 flex flex-col items-center justify-center bg-slate-50 px-4">
              <div className={`w-12 h-12 rounded-lg ${s.fileIconBg} flex items-center justify-center mb-3`}>
                <File size={24} />
              </div>
              <p className="text-sm font-medium text-slate-700 text-center truncate max-w-full">{uploadedFile.name}</p>
              <p className="text-xs text-slate-400 mt-1">File uploaded</p>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={handleRemove}
              className={`opacity-0 group-hover/img:opacity-100 transition-all duration-300 ${s.removeBtn} text-white rounded-full p-2 shadow-lg`}
              aria-label="Remove file"
            >
              <X size={18} />
            </button>
          </div>
          <div className={`absolute bottom-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${s.badgeBg} ${s.badgeText} ${s.badgeBorder} border`}>
            Certificate uploaded
          </div>
        </div>
      ) : (
        <button
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className={`mt-3 w-full border-2 border-dashed border-slate-200 ${s.hoverBorder} rounded-lg py-6 flex flex-col items-center justify-center text-slate-400 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {uploading ? (
            <Loader2 size={20} className="mb-1.5 animate-spin" />
          ) : (
            <Upload size={20} className="mb-1.5" />
          )}
          <span className="text-xs">{uploading ? 'Uploading...' : 'Upload certificate file'}</span>
          <span className="text-[10px] text-slate-400 mt-0.5">PDF, image, or any file — click to browse</span>
        </button>
      )}
    </div>
  );
}
