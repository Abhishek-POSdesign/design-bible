import React from 'react';

/**
 * AIChatOverlay — Context-bound AI Chat Panel (Bible Ch.19).
 * Non-blocking, right-docked, shifts content left by 240px on viewports >= 1536px.
 * Message bubble tails indicating user (right, teal) vs assistant (left, stone-8%).
 * Exposes quick-actions, context title, custom input textarea, and "Save last answer".
 */
export function AIChatOverlay({
  open = false,
  onClose,
  topicTitle = '',
  messages = [],
  onSendMessage,
  onQuickAction,
  onSaveLastAnswer,
  inputValue = '',
  onInputChange,
  providerName = 'Ollama',
  modelName = 'llama3',
  isGenerating = false,
}) {
  const messagesEndRef = React.useRef(null);

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isGenerating]);

  // Effect to handle left-shift body class on large displays
  React.useEffect(() => {
    if (open) {
      document.body.classList.add('ai-open');
    } else {
      document.body.classList.remove('ai-open');
    }
    return () => {
      document.body.classList.remove('ai-open');
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100%',
        width: 'min(480px, 92vw)',
        backgroundColor: 'var(--card-surface)',
        borderLeft: '1px solid var(--border-hairline)',
        zIndex: 60,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: 'var(--shadow-card)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
        transition: 'transform 300ms var(--ease-premium)',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-md) var(--space-lg)',
          borderBottom: '1px solid var(--border-hairline)',
          flexShrink: 0,
        }}
      >
        <div style={{ minWidth: 0 }}>
          <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 700 }}>✨ AI Study Buddy</h3>
          <p
            style={{
              margin: 0,
              fontSize: '11px',
              color: 'var(--text-secondary)',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {topicTitle ? (
              <>
                About: <b>{topicTitle}</b>
              </>
            ) : (
              'General study help'
            )}
          </p>
        </div>
        <button
          onClick={onClose}
          title="Close"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 28,
            height: 28,
            background: 'none',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xs)',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
          }}
        >
          ✕
        </button>
      </div>

      {/* Quick Actions Row */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          padding: '12px 16px 8px',
          flexShrink: 0,
        }}
      >
        <button
          onClick={() => onQuickAction && onQuickAction('explain')}
          style={{
            fontSize: '11px',
            padding: '6px 12px',
            borderRadius: 'var(--radius-xs)',
            background: 'rgba(13, 148, 136, 0.1)',
            color: 'var(--text-accent)',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Explain it simply
        </button>
        <button
          onClick={() => onQuickAction && onQuickAction('quiz')}
          style={{
            fontSize: '11px',
            padding: '6px 12px',
            borderRadius: 'var(--radius-xs)',
            background: 'rgba(13, 148, 136, 0.1)',
            color: 'var(--text-accent)',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Quiz me (5 Qs)
        </button>
        <button
          onClick={() => onQuickAction && onQuickAction('apply')}
          style={{
            fontSize: '11px',
            padding: '6px 12px',
            borderRadius: 'var(--radius-xs)',
            background: 'rgba(13, 148, 136, 0.1)',
            color: 'var(--text-accent)',
            border: 'none',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          Relate to prototypes
        </button>
      </div>

      {/* Messages Window */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '12px 16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {messages.length === 0 ? (
          <p
            style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              textAlign: 'center',
              marginTop: '24px',
            }}
          >
            Pick a quick action above, or type your own question below.
          </p>
        ) : (
          messages.map((msg, index) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={index}
                style={{
                  maxWidth: isUser ? '88%' : '92%',
                  marginLeft: isUser ? 'auto' : '0',
                  marginRight: isUser ? '0' : 'auto',
                  backgroundColor: isUser
                    ? 'var(--text-accent)'
                    : 'rgba(120, 120, 120, 0.08)',
                  color: isUser ? '#ffffff' : 'var(--text-primary)',
                  borderRadius: isUser ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  padding: '8px 12px',
                  fontSize: '14px',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {msg.text}
              </div>
            );
          })
        )}

        {isGenerating && (
          <div
            style={{
              maxWidth: '92%',
              marginRight: 'auto',
              backgroundColor: 'rgba(120, 120, 120, 0.08)',
              borderRadius: '14px 14px 14px 4px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '3px',
            }}
          >
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div
        style={{
          padding: '12px',
          borderTop: '1px solid var(--border-hairline)',
          flexShrink: 0,
        }}
      >
        <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
          <textarea
            value={inputValue}
            onChange={onInputChange}
            rows={2}
            placeholder="Ask a follow-up… (Enter to send)"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                onSendMessage && onSendMessage(inputValue);
              }
            }}
            style={{
              flex: 1,
              fontSize: '14px',
              borderRadius: 'var(--radius)',
              border: '1px solid var(--border-hairline)',
              backgroundColor: 'transparent',
              padding: '12px',
              resize: 'none',
              outline: 'none',
              color: 'inherit',
            }}
          />
          <button
            onClick={() => onSendMessage && onSendMessage(inputValue)}
            style={{
              padding: '10px 16px',
              borderRadius: 'var(--radius)',
              background: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
              border: 'none',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              height: '42px',
            }}
          >
            Ask
          </button>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '8px',
          }}
        >
          <p style={{ margin: 0, fontSize: '10px', color: 'var(--text-muted)' }}>
            Provider: {providerName} · model: {modelName}
          </p>
          {messages.length > 0 && messages[messages.length - 1].sender === 'assistant' && (
            <button
              onClick={onSaveLastAnswer}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-accent)',
                fontSize: '11px',
                cursor: 'pointer',
                padding: 0,
                textDecoration: 'underline',
              }}
            >
              💾 Save last answer
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
