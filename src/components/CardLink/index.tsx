interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function CardLink({
  title,
  subtitle,
  imageUrl,
  ...rest
}: CardLinkProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden" {...rest}>
      <img src={`${imageUrl}`} alt="game 01" />
      <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 block mt-1">{subtitle}</span>
      </div>
    </a>
  );
}
