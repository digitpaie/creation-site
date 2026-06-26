import { useState } from 'react';

export default function ChecklistBlock({ items }) {
  const [checked, setChecked] = useState({});

  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const count = Object.values(checked).filter(Boolean).length;

  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '16px',
      }}>
        <h3 style={{ color: '#e8e8f0', fontSize: '1rem', fontWeight: 600, margin: 0 }}>
          Checklist de production
        </h3>
        <span style={{
          background: count === items.length ? 'rgba(0,229,160,0.15)' : 'rgba(124,92,252,0.15)',
          color: count === items.length ? '#00e5a0' : '#7c5cfc',
          border: `1px solid ${count === items.length ? 'rgba(0,229,160,0.3)' : 'rgba(124,92,252,0.3)'}`,
          padding: '3px 10px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600,
        }}>
          {count} / {items.length}
        </span>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '12px', overflow: 'hidden',
      }}>
        {items.map((item, i) => (
          <div
            key={item.id}
            onClick={() => toggle(item.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              padding: '14px 18px',
              borderBottom: i < items.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
              cursor: 'pointer',
              background: checked[item.id] ? 'rgba(0,229,160,0.04)' : 'transparent',
              transition: 'background 0.2s',
            }}
          >
            <div style={{
              width: '20px', height: '20px', borderRadius: '5px', flexShrink: 0,
              border: `2px solid ${checked[item.id] ? '#00e5a0' : 'rgba(255,255,255,0.2)'}`,
              background: checked[item.id] ? 'rgba(0,229,160,0.15)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}>
              {checked[item.id] && (
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                  <path d="M1 5L4.5 8.5L11 1.5" stroke="#00e5a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
            <span style={{
              fontSize: '0.9rem', lineHeight: 1.4,
              color: checked[item.id] ? '#888' : '#ccc',
              textDecoration: checked[item.id] ? 'line-through' : 'none',
              transition: 'all 0.2s',
            }}>
              {item.text}
            </span>
          </div>
        ))}
      </div>

      {count === items.length && (
        <div style={{
          marginTop: '16px', padding: '12px 16px',
          background: 'rgba(0,229,160,0.08)',
          border: '1px solid rgba(0,229,160,0.25)',
          borderRadius: '10px', textAlign: 'center',
          color: '#00e5a0', fontSize: '0.9rem', fontWeight: 600,
        }}>
          🎉 Checklist complète — votre application est prête pour la production !
        </div>
      )}
    </div>
  );
}
