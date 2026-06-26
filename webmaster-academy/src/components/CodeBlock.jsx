import { useState } from 'react';

export default function CodeBlock({ code, language }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      position: 'relative',
      margin: '16px 0',
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 16px',
        background: 'rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            background: copied ? 'rgba(0,229,160,0.15)' : 'rgba(255,255,255,0.06)',
            border: `1px solid ${copied ? 'rgba(0,229,160,0.4)' : 'rgba(255,255,255,0.1)'}`,
            color: copied ? '#00e5a0' : '#aaa',
            padding: '4px 12px',
            borderRadius: '6px',
            fontSize: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
          }}
        >
          {copied ? '✓ Copié' : 'Copier'}
        </button>
      </div>
      <pre style={{
        margin: 0,
        padding: '16px',
        background: '#0d0d14',
        overflowX: 'auto',
        fontSize: '0.85rem',
        lineHeight: '1.6',
        fontFamily: '"Fira Code", "Cascadia Code", monospace',
        color: '#e2e8f0',
        whiteSpace: 'pre',
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
