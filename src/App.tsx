import './styles/main.css';

import { useEffect, useState } from 'react';

import { CardLink } from './components/CardLink';
import { GradientText } from './components/GradientText';
import { DialogPublishAd } from './components/DialogPublishAd';
import { Logo } from './components/Logo';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [gamers, setGamers] = useState<Game[]>([]);

  useEffect(() => {
    const loadGames = async () => {
      fetch('http://localhost:3333/games')
        .then((response) => response.json())
        .then((data) => setGamers(data));
    };

    loadGames();
  }, []);
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 px-4">
      <Logo />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <GradientText>duo</GradientText> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 w-full">
        {gamers.map((game) => (
          <CardLink
            key={game.title}
            title={game.title}
            adsCount={game._count.ads}
            bannerUrl={game.bannerUrl}
          />
        ))}
      </div>

      <DialogPublishAd />
    </div>
  );
}
