import Image from 'next/image';
import Mockup from '@/public/Mockup.png';
import ShinyButton from './components/DownloadButton';
import { AiFillStar } from 'react-icons/ai';
import VolkanHoca from '@/public/TS Koseoglu.png'

export default function Home() {
  return (
    <main className="px-4 md:px-10 md:h-screen py-16 justify-center flex">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 w-full items-center justify-center relative">
          <Image alt="Telefon" width={720} height={480} src={Mockup} placeholder="blur" className='object-cover w-[55%] md:w-[22%]' />
          <div className='flex flex-col gap-3 items-center'>
          <h1 className="text-6xl md:text-7xl font-semibold bg-gradient-to-r from-white to-[#7b7a7a] bg-clip-text text-transparent">
            Quizzler
          </h1>
          <p className="animate-pulse text-xl md:text-2xl 2xl:text-3xl mx-auto  text-center mb-3 text-[#858585] font-medium">
            Dünyanın <span className='font-semibold'>en iyi</span> mobil uygulaması.
          </p>
          <ShinyButton/>


          <h1 className='text-xl font-semibold mt-12'>Kullanıcılarımızdan yorumlar</h1>
          <div className='bg-[#1d1d1d] p-4 rounded-lg flex flex-col gap-3 max-w-xs'>
            <div className='flex gap-2 items-center'>
            <Image alt='Volkan Koseoglu Profil Foto' src={VolkanHoca} width={100} height={100} className='w-10 h-10 rounded-full' />
            <div className='flex flex-col gap-1 w-full'>
              <div className='flex justify-between items-between gap-2 items-center'>
                <h1 className='font-bold text-sm md:text-lg'>Volkan Köseoğlu</h1>
                <h4 className='text-[#858585] font-light text-xs'>1 gün önce</h4>
              </div>
                <div className='flex gap-2'>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                  <AiFillStar/>
                </div>
              </div>
            </div>
            <h4>Cok iyiymis asiri begendim allah razi olsun yapandan</h4>
          </div>
          </div>
      </div>
    </main>
  );
}