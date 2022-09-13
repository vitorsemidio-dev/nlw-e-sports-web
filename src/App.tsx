import './styles/main.css';

import logoImg from './assets/logo-nlw-esports.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

export function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex items-center flex-col my-20">
      <img src={logoImg} alt="logo escrito 'eSport nlw'" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{' '}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/public/image 1.png" alt="game 01" />
          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/public/image 2.png" alt="game 02" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/public/image 3.png" alt="game 03" />

          <div className="w-full pt-16 px -4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">CS Go</strong>
            <span className="text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/public/image 4.png" alt="game 04" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/public/image 5.png" alt="game 05" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex</strong>
            <span className="text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
        <a href="#" className="relative rounded-lg overflow-hidden">
          <img src="/public/image 6.png" alt="game 06" />

          <div className="w-full pt-16 px-4 pb-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 block mt-1">4 anúncios</span>
          </div>
        </a>
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
