interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}
export function GradientText({ children }: GradientTextProps) {
  return (
    <span className="text-transparent bg-nlw-gradient bg-clip-text">
      {children}
    </span>
  );
}
