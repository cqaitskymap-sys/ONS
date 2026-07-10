"use client";

import { Download } from "lucide-react";
import { toast } from "sonner";

export function ResourceDownloadButton({ title }: { title: string }) {
  const handleDownload = () => {
    toast.success(`"${title}" — contact us at info@lomarspharma.com to receive this resource.`);
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
    >
      <Download className="w-3 h-3" /> Request
    </button>
  );
}
