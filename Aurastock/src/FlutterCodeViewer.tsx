import React, { useState } from 'react';
import { FLUTTER_MAIN_DART, FLUTTER_PUBSPEC_YAML } from '../utils/flutterCode';
import { Copy, Check, Download, FileCode, Layers, ShieldCheck, Sparkles } from 'lucide-react';

export const FlutterCodeViewer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dart' | 'yaml'>('dart');
  const [copied, setCopied] = useState(false);

  const currentContent = activeTab === 'dart' ? FLUTTER_MAIN_DART : FLUTTER_PUBSPEC_YAML;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = activeTab === 'dart' ? 'main.dart' : 'pubspec.yaml';
    const blob = new Blob([currentContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-6">
      
      {/* Intro Header (Frosted Glass Panel) */}
      <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-4 shadow-[0_12px_40px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-[10px] font-mono font-bold tracking-wider">
                FLUTTER & DART 3.0+
              </span>
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider font-mono">
                Native Android Source Code
              </span>
            </div>
            <h2 className="text-xl md:text-3xl font-extrabold text-white tracking-tight">
              Production Flutter & Dart Architecture
            </h2>
            <p className="text-xs text-slate-300/80 max-w-2xl leading-relaxed">
              Complete, ready-to-run Flutter codebase configured for Android devices with Material 3 dark mode, gold/orange palette, low-stock red highlights, bulk adjustment modal, and PDF/CSV export.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-amber-500/40 text-amber-300 text-xs font-bold transition-all shadow-sm cursor-pointer backdrop-blur-md active:scale-95"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied to Clipboard' : 'Copy Code'}</span>
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold transition-all shadow-[0_4px_20px_rgba(234,88,12,0.4)] cursor-pointer active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download {activeTab === 'dart' ? 'main.dart' : 'pubspec.yaml'}</span>
            </button>
          </div>
        </div>

        {/* Feature Implementation checklist */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 pt-3 border-t border-white/[0.06] text-xs text-slate-300">
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>1. Financial Valuation KPI</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>2. Product Name, Qty & Price</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>3. Steppers + Bulk Adjust Sheet</span>
          </div>
          <div className="flex items-center gap-1.5 text-rose-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>4. Automatic Red Rows (&lt; 5 Qty)</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>5. Name & Barcode Search</span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>6. CSV & PDF Document Exporter</span>
          </div>
        </div>
      </div>

      {/* Code Viewer Panel (Frosted IDE Glass) */}
      <div className="rounded-3xl glass-panel overflow-hidden shadow-2xl">
        
        {/* Sub-tabs: main.dart vs pubspec.yaml */}
        <div className="flex items-center justify-between px-5 py-3 bg-black/40 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('dart')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'dart'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>lib/main.dart</span>
            </button>

            <button
              onClick={() => setActiveTab('yaml')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeTab === 'yaml'
                  ? 'bg-orange-500/20 text-orange-300 border border-orange-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>pubspec.yaml</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-slate-400">
            Dart 3.0+ · Flutter 3.20+ Material 3
          </span>
        </div>

        {/* Code Block */}
        <pre className="p-5 md:p-7 text-xs font-mono text-slate-200 overflow-x-auto max-h-[620px] leading-relaxed select-all no-scrollbar">
          <code>{currentContent}</code>
        </pre>
      </div>

    </div>
  );
};
