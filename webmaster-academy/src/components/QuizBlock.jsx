import { useState } from 'react';

export default function QuizBlock({ questions, onScoreUpdate }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState({});

  const handleAnswer = (qIdx, optIdx) => {
    if (submitted[qIdx]) return;
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = (qIdx, question) => {
    if (submitted[qIdx] || answers[qIdx] === undefined) return;
    const correct = answers[qIdx] === question.answer;
    setSubmitted(prev => ({ ...prev, [qIdx]: true }));
    if (correct) onScoreUpdate(10);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <span style={{ color: '#888', fontSize: '0.9rem' }}>
          {questions.length} questions · +10 pts par bonne réponse
        </span>
      </div>
      {questions.map((q, qIdx) => {
        const isSubmitted = submitted[qIdx];
        const chosen = answers[qIdx];
        const isCorrect = chosen === q.answer;

        return (
          <div key={qIdx} style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${isSubmitted ? (isCorrect ? 'rgba(0,229,160,0.3)' : 'rgba(252,92,125,0.3)') : 'rgba(255,255,255,0.08)'}`,
            borderRadius: '12px',
            padding: '20px',
            transition: 'border-color 0.3s',
          }}>
            <p style={{ fontWeight: 600, marginBottom: '16px', fontSize: '1rem', color: '#e8e8f0', lineHeight: 1.5 }}>
              <span style={{ color: '#7c5cfc', marginRight: '8px' }}>{qIdx + 1}.</span>
              {q.question}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {q.options.map((opt, oIdx) => {
                let bg = 'rgba(255,255,255,0.04)';
                let border = 'rgba(255,255,255,0.08)';
                let color = '#ccc';

                if (chosen === oIdx) { bg = 'rgba(124,92,252,0.12)'; border = 'rgba(124,92,252,0.5)'; color = '#e8e8f0'; }
                if (isSubmitted) {
                  if (oIdx === q.answer) { bg = 'rgba(0,229,160,0.1)'; border = 'rgba(0,229,160,0.5)'; color = '#00e5a0'; }
                  else if (chosen === oIdx && oIdx !== q.answer) { bg = 'rgba(252,92,125,0.1)'; border = 'rgba(252,92,125,0.4)'; color = '#fc5c7d'; }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleAnswer(qIdx, oIdx)}
                    disabled={isSubmitted}
                    style={{
                      background: bg,
                      border: `1px solid ${border}`,
                      color,
                      padding: '12px 16px',
                      borderRadius: '8px',
                      cursor: isSubmitted ? 'default' : 'pointer',
                      textAlign: 'left',
                      fontSize: '0.9rem',
                      transition: 'all 0.2s',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <span style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      border: `1px solid ${border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', flexShrink: 0, color,
                    }}>
                      {isSubmitted && oIdx === q.answer ? '✓' : isSubmitted && chosen === oIdx && oIdx !== q.answer ? '✗' : String.fromCharCode(65 + oIdx)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {!isSubmitted && (
              <button
                onClick={() => handleSubmit(qIdx, q)}
                disabled={chosen === undefined}
                style={{
                  background: chosen !== undefined ? 'rgba(124,92,252,0.2)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${chosen !== undefined ? 'rgba(124,92,252,0.5)' : 'rgba(255,255,255,0.08)'}`,
                  color: chosen !== undefined ? '#7c5cfc' : '#555',
                  padding: '8px 20px',
                  borderRadius: '8px',
                  cursor: chosen !== undefined ? 'pointer' : 'not-allowed',
                  fontSize: '0.85rem',
                  fontFamily: 'inherit',
                  transition: 'all 0.2s',
                }}
              >
                Valider ma réponse
              </button>
            )}

            {isSubmitted && (
              <div style={{
                marginTop: '12px',
                padding: '12px',
                background: isCorrect ? 'rgba(0,229,160,0.06)' : 'rgba(252,92,125,0.06)',
                borderRadius: '8px',
                borderLeft: `3px solid ${isCorrect ? '#00e5a0' : '#fc5c7d'}`,
              }}>
                <p style={{ fontWeight: 600, marginBottom: '4px', color: isCorrect ? '#00e5a0' : '#fc5c7d', fontSize: '0.85rem' }}>
                  {isCorrect ? '✓ Bonne réponse ! +10 pts' : '✗ Pas tout à fait…'}
                </p>
                <p style={{ color: '#bbb', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{q.explanation}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
