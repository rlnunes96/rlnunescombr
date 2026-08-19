/**
 * The macOS-style terminal chrome used for the hero's `whoami` output and for
 * the embedded project previews. `action` renders at the right of the title
 * bar; `flush` drops the body padding for content that fills the frame.
 */
export default function TerminalWindow({ title, action, wide = false, flush = false, children }) {
  return (
    <div className={`terminal${wide ? ' terminal--wide' : ''}`}>
      <div className="terminal-bar">
        <span className="dot dot--red" />
        <span className="dot dot--amber" />
        <span className="dot dot--green" />
        <span className="terminal-title">{title}</span>
        {action ? <div className="terminal-action">{action}</div> : null}
      </div>
      <div className={`terminal-body${flush ? ' terminal-body--flush' : ''}`}>{children}</div>
    </div>
  );
}
