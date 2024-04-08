export const IconFuse = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    className={className}
    style={{ transform: "rotate(45deg)" }}
  >
    <path
      fill="currentColor"
      d="M8 7v10h7V7zm3.16 9v-3.13H9.41L11.91 8v3.14h1.68zM16 2v4H7V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m0 16v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4z"
    />
  </svg>
);
