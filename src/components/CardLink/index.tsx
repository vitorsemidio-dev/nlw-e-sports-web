interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  adsCount: number;
  bannerUrl: string;
}

export function CardLink({
  title,
  adsCount,
  bannerUrl,
  ...rest
}: CardLinkProps) {
  return (
    <a href="#" className="relative rounded-lg overflow-hidden" {...rest}>
      <img src={`${bannerUrl}`} alt="game 01" />
      <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
}
