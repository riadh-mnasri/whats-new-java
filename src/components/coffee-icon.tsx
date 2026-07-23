export function CoffeeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 9h13v5.5A4.5 4.5 0 0 1 12.5 19h-4A4.5 4.5 0 0 1 4 14.5V9Z" />
      <path d="M17 10.5h1.5a2.25 2.25 0 0 1 0 4.5H17" />
      <path d="M7.5 6c-.5-.8-.5-1.4 0-2.2" />
      <path d="M11 6c-.5-.8-.5-1.4 0-2.2" />
    </svg>
  );
}
