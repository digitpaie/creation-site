import { useState, useEffect } from 'react';
import { MODULES, LEVELS, TOTAL_MAX_SCORE } from './data/modules';
import ModuleCard from './components/ModuleCard';
import LessonModal from './components/LessonModal';

const STORAGE_KEY = 'wma_progress_v1';

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch {
    return {};
  }
}

function ProgressBar({ score, maxScore, completed, total }) {
  if (completed === 0) return null;
  const pct = Math.round((score / maxScore) * 100);

  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
      padding: '12px 40px',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <span style={{ fontWeight: 700, color: '#e8e8f0', fontSize: '0.9rem', flexShrink: 0 }}>
          WebMaster Academy
        </span>
        <div style={{ flex: 1, minWidth: '120px' }}>
          <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${pct}%`,
              background: 'linear-gradient(90deg, #7c5cfc, #fc5c7d)',
              borderRadius: '3px',
              transition: 'width 0.5s ease',
            }} />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px', flexShrink: 0 }}>
          <Stat label="Score" value={`${score} / ${maxScore}`} color="#7c5cfc" />
          <Stat label="Progression" value={`${pct}%`} color="#fc5c7d" />
          <Stat label="Modules" value={`${completed} / ${total}`} color="#00e5a0" />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '0.95rem', fontWeight: 700, color }}>{value}</div>
      <div style={{ fontSize: '0.7rem', color: '#555', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  );
}

function Congrats({ score, maxScore, onReset }) {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: '24px', padding: '40px', textAlign: 'center',
    }}>
      <div style={{ fontSize: '5rem', lineHeight: 1 }}>🏆</div>
      <h1 style={{
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        fontWeight: 800,
        background: 'linear-gradient(135deg, #f5c842, #fc5c7d)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Félicitations !
      </h1>
      <p style={{ color: '#bbb', fontSize: '1.1rem', maxWidth: '500px', lineHeight: 1.6 }}>
        Vous avez complété les 12 modules de WebMaster Academy.<br />
        Vous êtes officiellement <strong style={{ color: '#f5c842' }}>WebMaster Pro</strong> !
      </p>
      <div style={{
        background: 'rgba(245,200,66,0.08)',
        border: '1px solid rgba(245,200,66,0.3)',
        borderRadius: '16px', padding: '24px 48px',
      }}>
        <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f5c842' }}>{score} pts</div>
        <div style={{ color: '#888', fontSize: '0.9rem' }}>sur {maxScore} pts possibles</div>
      </div>
      <button
        onClick={onReset}
        style={{
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.1)',
          color: '#aaa', padding: '12px 28px',
          borderRadius: '12px', cursor: 'pointer',
          fontSize: '0.9rem', fontFamily: 'inherit',
        }}
      >
        Recommencer depuis le début
      </button>
    </div>
  );
}

const LEVEL_GROUPS = [
  { key: 'debutant', ids: [1, 2, 3] },
  { key: 'intermediaire', ids: [4, 5, 6] },
  { key: 'avance', ids: [7, 8, 9] },
  { key: 'expert', ids: [10, 11, 12] },
];

export default function App() {
  const [progress, setProgress] = useState(loadProgress);
  const [activeModule, setActiveModule] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const totalScore = Object.values(progress).reduce((a, v) => a + v, 0);
  const completedCount = Object.keys(progress).filter(k => k.startsWith('module_')).length;
  const allDone = completedCount === MODULES.length;

  const handleComplete = (moduleId, pts) => {
    setProgress(prev => ({ ...prev, [`module_${moduleId}`]: pts }));
  };

  const handleQuizScore = (pts) => {
    setProgress(prev => ({ ...prev, [`quiz_extra_${Date.now()}`]: pts }));
  };

  if (allDone) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e8f0', fontFamily: "'Syne', sans-serif" }}>
        <Congrats score={totalScore} maxScore={TOTAL_MAX_SCORE} onReset={() => setProgress({})} />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#e8e8f0', fontFamily: "'Syne', sans-serif" }}>
      {/* Grid background */}
      <div style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <ProgressBar score={totalScore} maxScore={TOTAL_MAX_SCORE} completed={completedCount} total={MODULES.length} />

        {/* Hero */}
        <div style={{
          textAlign: 'center', padding: 'clamp(60px, 10vw, 100px) 40px clamp(40px, 6vw, 60px)',
          maxWidth: '900px', margin: '0 auto',
          animation: 'fadeUp 0.6s ease both',
        }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(124,92,252,0.1)',
            border: '1px solid rgba(124,92,252,0.3)',
            color: '#a78bfa',
            padding: '6px 16px', borderRadius: '20px',
            fontSize: '0.8rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            marginBottom: '24px',
          }}>
            Cours complet · 12 modules · {TOTAL_MAX_SCORE} pts max
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #e8e8f0 0%, #a78bfa 50%, #fc5c7d 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            WebMaster Academy
            <br />
            <span style={{ fontSize: '0.7em', opacity: 0.8 }}>Du Zéro au Pro</span>
          </h1>
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: '#777', maxWidth: '580px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Maîtrisez le développement web de A à Z — HTML, CSS, JavaScript, React, Node.js, bases de données, DevOps et sécurité. À votre rythme, avec des projets pratiques.
          </p>

          {/* Level legend */}
          <div style={{
            display: 'flex', gap: '12px', justifyContent: 'center',
            flexWrap: 'wrap', marginTop: '32px',
          }}>
            {Object.entries(LEVELS).map(([key, level]) => (
              <div key={key} style={{
                background: `${level.color}10`,
                border: `1px solid ${level.color}30`,
                color: level.color,
                padding: '5px 14px', borderRadius: '20px',
                fontSize: '0.8rem', fontWeight: 600,
              }}>
                {level.label} · {level.pts} pts/module
              </div>
            ))}
          </div>
        </div>

        {/* Module grid by level */}
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 80px' }}>
          {LEVEL_GROUPS.map(({ key, ids }) => {
            const level = LEVELS[key];
            const levelModules = MODULES.filter(m => ids.includes(m.id));

            return (
              <div key={key} style={{ marginBottom: '56px' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  marginBottom: '24px',
                }}>
                  <div style={{
                    width: '10px', height: '10px', borderRadius: '50%',
                    background: level.color,
                    boxShadow: `0 0 12px ${level.color}`,
                  }} />
                  <h2 style={{
                    fontSize: '1.1rem', fontWeight: 700,
                    color: level.color,
                    textTransform: 'uppercase', letterSpacing: '0.06em',
                    margin: 0,
                  }}>
                    {level.label}
                  </h2>
                  <div style={{ flex: 1, height: '1px', background: `${level.color}20` }} />
                  <span style={{ color: '#555', fontSize: '0.8rem' }}>
                    {level.pts} pts · {ids.length} modules
                  </span>
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '16px',
                }}>
                  {levelModules.map(mod => (
                    <ModuleCard
                      key={mod.id}
                      module={mod}
                      completed={!!progress[`module_${mod.id}`]}
                      onClick={() => setActiveModule(mod)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {activeModule && (
        <LessonModal
          module={activeModule}
          completed={!!progress[`module_${activeModule.id}`]}
          onComplete={handleComplete}
          onClose={() => setActiveModule(null)}
        />
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0f; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: rgba(255,255,255,0.02); }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 3px; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
