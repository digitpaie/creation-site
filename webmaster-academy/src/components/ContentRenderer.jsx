import CodeBlock from './CodeBlock';

export default function ContentRenderer({ blocks }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'section':
            return (
              <h2 key={i} style={{
                fontSize: '1.2rem', fontWeight: 700, color: '#e8e8f0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                paddingBottom: '8px', marginTop: i > 0 ? '16px' : 0,
              }}>
                {block.title}
              </h2>
            );

          case 'text':
            return (
              <p key={i} style={{ color: '#bbb', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {block.content}
              </p>
            );

          case 'list':
            return (
              <ul key={i} style={{ paddingLeft: '0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {block.items.map((item, j) => (
                  <li key={j} style={{
                    display: 'flex', gap: '10px', alignItems: 'flex-start',
                    color: '#bbb', fontSize: '0.9rem', lineHeight: 1.5,
                  }}>
                    <span style={{ color: '#7c5cfc', marginTop: '3px', flexShrink: 0 }}>▸</span>
                    <code style={{
                      fontFamily: item.startsWith('<') || item.includes('(') ? '"Fira Code", monospace' : 'inherit',
                      fontSize: '0.88rem',
                    }}>{item}</code>
                  </li>
                ))}
              </ul>
            );

          case 'code':
            return <CodeBlock key={i} code={block.code} language={block.language} />;

          case 'tip':
            return (
              <div key={i} style={{
                padding: '14px 16px',
                background: 'rgba(92,184,255,0.06)',
                border: '1px solid rgba(92,184,255,0.25)',
                borderLeft: '3px solid #5cb8ff',
                borderRadius: '8px',
              }}>
                <p style={{ margin: 0, color: '#a8d8ff', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 700, marginRight: '8px' }}>💡 Conseil</span>
                  {block.content}
                </p>
              </div>
            );

          case 'warn':
            return (
              <div key={i} style={{
                padding: '14px 16px',
                background: 'rgba(252,92,125,0.06)',
                border: '1px solid rgba(252,92,125,0.25)',
                borderLeft: '3px solid #fc5c7d',
                borderRadius: '8px',
              }}>
                <p style={{ margin: 0, color: '#ffb3c6', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <span style={{ fontWeight: 700, marginRight: '8px' }}>⚠️ Attention</span>
                  {block.content}
                </p>
              </div>
            );

          case 'project':
            return (
              <div key={i} style={{
                padding: '20px',
                background: 'rgba(124,92,252,0.06)',
                border: '1px solid rgba(124,92,252,0.25)',
                borderRadius: '12px',
                marginTop: '8px',
              }}>
                <p style={{ fontWeight: 700, color: '#a78bfa', marginBottom: '8px', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  🛠️ Projet pratique
                </p>
                <p style={{ fontWeight: 600, color: '#e8e8f0', marginBottom: '8px', fontSize: '1rem' }}>
                  {block.title}
                </p>
                <p style={{ color: '#bbb', fontSize: '0.9rem', lineHeight: 1.6, margin: 0 }}>
                  {block.description}
                </p>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
