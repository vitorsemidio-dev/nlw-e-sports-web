import './styles/main.css';

import { MagnifyingGlassPlus } from 'phosphor-react';

import logoImg from './assets/logo-nlw-esports.svg';
import { CardLink } from './components/CardLink';
import { GradientText } from './components/GradientText';

export function App() {
  const gamers = [
    {
      title: 'League of Legends',
      subtitle: '4 anúncios',
      imageUrl: '/public/image 1.png',
    },
    {
      title: 'Dota 2',
      subtitle: '4 anúncios',
      imageUrl: '/public/image 2.png',
    },
    { title: 'CS Go', subtitle: '4 anúncios', imageUrl: '/public/image 3.png' },
    {
      title: 'World of Warcraft',
      subtitle: '4 anúncios',
      imageUrl: '/public/image 4.png',
    },
    { title: 'Apex', subtitle: '4 anúncios', imageUrl: '/public/image 5.png' },
    {
      title: 'Fortnite',
      subtitle: '4 anúncios',
      imageUrl: '/public/image 6.png',
    },
  ];
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20 px-4">
      <img src={logoImg} alt="logo escrito 'eSport nlw'" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <GradientText>duo</GradientText> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 w-full">
        {gamers.map((game) => (
          <CardLink
            key={game.title}
            title={game.title}
            subtitle={game.subtitle}
            imageUrl={game.imageUrl}
          />
        ))}
      </div>

      <div className="bg-nlw-gradient self-stretch rounded-lg pt-1 overflow-hidden mt-8">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl font-black block text-white">
              Não encontrou o seu duo?
            </strong>
            <span className="block  text-white">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
            <MagnifyingGlassPlus size={24} weight="bold" />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}
