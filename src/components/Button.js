export default function Button({ value, onClick, children, className = "" }) {
  return (
    <button className={`btn ${className}`} onClick={() => onClick(value)}>
      {children}
    </button>
  );
}
