import { useState, useEffect } from 'react';
import { LEVELS } from '../data/modules';
import ContentRenderer from './ContentRenderer';
import QuizBlock from './QuizBlock';
import ChecklistBlock from './ChecklistBlock';

export default function LessonModal({ module, completed, onComplete, onClose }) {
  const [tab, setTab] = useState('cours');
  const [quizScore, setQuizScore] = useState(0);
  const level = LEVELS[module.level];

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const tabs = [
    { id: 'cours', label: '📖 Cours' },
    { id: 'reference', label: module.checklist ? '✅ Checklist' : '⚡ Référence' },
    { id: 'quiz', label: '🧠 Quiz' },
  ];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#0f0f18',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '18px',
          width: '100%',
          maxWidth: '780px',
          maxHeight: '88vh',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Modal header */}
        <div style={{
          padding: '20px 24px 0',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontSize: '2rem' }}>{module.emoji}</span>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{
                    background: `${level.color}18`, color: level.color,
                    border: `1px solid ${level.color}40`,
                    padding: '2px 8px', borderRadius: '4px',
                    fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
                  }}>
                    {level.label}
                  </span>
                  <span style={{ color: '#555', fontSize: '0.75rem' }}>Module {module.id}</span>
                  {completed && (
                    <span style={{ color: '#00e5a0', fontSize: '0.75rem', fontWeight: 600 }}>✓ Complété</span>
                  )}
                </div>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#e8e8f0', margin: 0 }}>
                  {module.titre}
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
                color: '#888', width: '34px', height: '34px', borderRadius: '8px',
                cursor: 'pointer', fontSize: '1.1rem', display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                fontFamily: 'inherit',
              }}
            >
              ✕
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px' }}>
            {tabs.map(t => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                style={{
                  background: tab === t.id ? 'rgba(124,92,252,0.15)' : 'transparent',
                  border: 'none',
                  borderBottom: `2px solid ${tab === t.id ? '#7c5cfc' : 'transparent'}`,
                  color: tab === t.id ? '#a78bfa' : '#666',
                  padding: '10px 16px',
                  cursor: 'pointer',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                  borderRadius: '6px 6px 0 0',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modal body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {tab === 'cours' && <ContentRenderer blocks={module.content} />}

          {tab === 'reference' && (
            module.checklist
              ? <ChecklistBlock items={module.checklist} />
              : <ContentRenderer blocks={module.reference} />
          )}

          {tab === 'quiz' && (
            <QuizBlock
              questions={module.quiz}
              onScoreUpdate={(pts) => setQuizScore(prev => prev + pts)}
            />
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255,255,255,0.02)',
          flexShrink: 0,
        }}>
          <div style={{ fontSize: '0.85rem', color: '#666' }}>
            {quizScore > 0 && (
              <span style={{ color: '#00e5a0', fontWeight: 600 }}>
                +{quizScore} pts quiz gagnés
              </span>
            )}
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#888', padding: '10px 20px', borderRadius: '10px',
                cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'inherit',
              }}
            >
              Fermer
            </button>
            {!completed && (
              <button
                onClick={() => { onComplete(module.id, level.pts + quizScore); onClose(); }}
                style={{
                  background: 'linear-gradient(135deg, #7c5cfc, #fc5c7d)',
                  border: 'none', color: '#fff',
                  padding: '10px 24px', borderRadius: '10px',
                  cursor: 'pointer', fontSize: '0.9rem', fontWeight: 700,
                  fontFamily: 'inherit',
                  boxShadow: '0 4px 20px rgba(124,92,252,0.4)',
                }}
              >
                ✓ Terminer le module (+{level.pts} pts)
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
