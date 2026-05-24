import { useState } from 'react';
import { Copy, Check, Code } from 'lucide-react';

const SITE_URL = 'https://calculador-calentadores.netlify.app';

export default function EmbedCodeSnippet() {
  const [copied, setCopied] = useState(false);

  const embedCode = `<div style="max-width:900px; margin:0 auto;">
  <iframe
    id="rheem-calculator"
    src="${SITE_URL}/embed.html"
    width="100%"
    height="620"
    frameborder="0"
    style="border:none; border-radius:24px; overflow:hidden;"
    allow="clipboard-write"
    title="Rheem Water Heater Calculator"
  ></iframe>
  <script>
    window.addEventListener("message", function(e) {
      if (e.data && e.data.type === "rheem-widget-resize") {
        document.getElementById("rheem-calculator").style.height = e.data.height + "px";
      }
    });
  </script>
</div>`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(embedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-4xl mt-12">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <Code className="w-5 h-5 text-rheem-red" />
            <h3 className="font-display font-bold text-rheem-dark text-lg">Código para Embeber</h3>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-2 bg-rheem-red text-white text-sm font-bold rounded-full hover:bg-red-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copiado' : 'Copiar'}
          </button>
        </div>
        <div className="p-6 bg-slate-50">
          <pre className="text-sm text-slate-600 font-mono whitespace-pre-wrap break-all leading-relaxed">
            {embedCode}
          </pre>
        </div>
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
          <p className="text-xs text-slate-400 font-medium">
            Pega este código en tu sitio web o página de Facebook para mostrar la calculadora de calentadores Rheem.
          </p>
        </div>
      </div>
    </div>
  );
}
