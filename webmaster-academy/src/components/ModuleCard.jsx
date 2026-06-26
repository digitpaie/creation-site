import { LEVELS } from '../data/modules';

export default function ModuleCard({ module, completed, onClick }) {
  const level = LEVELS[module.level];

  return (
    <div
      onClick={onClick}
      style={{
        background: completed
          ? 'rgba(0,229,160,0.04)'
          : 'rgba(255,255,255,0.03)',
        border: `1px solid ${completed ? 'rgba(0,229,160,0.35)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '14px',
        padding: '24px',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.4)`;
        e.currentTarget.style.borderColor = completed ? 'rgba(0,229,160,0.5)' : `${level.color}44`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = completed ? 'rgba(0,229,160,0.35)' : 'rgba(255,255,255,0.07)';
      }}
    >
      {/* Accent gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: completed
          ? 'linear-gradient(90deg, #00e5a0, transparent)'
          : `linear-gradient(90deg, ${level.color}88, transparent)`,
      }} />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '1.8rem' }}>{module.emoji}</span>
          <div>
            <span style={{
              display: 'inline-block',
              background: `${level.color}18`,
              color: level.color,
              border: `1px solid ${level.color}44`,
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '0.7rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '4px',
            }}>
              {level.label}
            </span>
          </div>
        </div>
        {completed && (
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: 'rgba(0,229,160,0.15)',
            border: '2px solid #00e5a0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#00e5a0', fontSize: '0.85rem', flexShrink: 0,
          }}>
            ✓
          </div>
        )}
      </div>

      {/* Module number */}
      <div style={{ fontSize: '0.75rem', color: '#555', marginBottom: '4px', fontWeight: 600 }}>
        MODULE {String(module.id).padStart(2, '0')}
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e8e8f0', marginBottom: '8px', lineHeight: 1.3 }}>
        {module.titre}
      </h3>

      {/* Description */}
      <p style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.5, marginBottom: '16px' }}>
        {module.description}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          color: level.color,
          fontSize: '0.8rem',
          fontWeight: 700,
          background: `${level.color}12`,
          padding: '3px 10px',
          borderRadius: '20px',
          border: `1px solid ${level.color}30`,
        }}>
          +{level.pts} pts
        </span>
        <span style={{ color: '#555', fontSize: '0.8rem' }}>
          5 questions quiz
        </span>
      </div>
    </div>
  );
}
