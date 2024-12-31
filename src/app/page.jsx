import Carrousel from '@/components/Carrousel'
import BodyCards from '@/components/BodyCards';
import { DATOCARDSINIT } from '@/mock/datoInit'
export default function Home() {

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 2xl:ml-24 mt-3 ">
     <Carrousel/>
    <div className='m-7'>
    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#966720a4] from-[#f3dcb9a4]">Inicio</h4>
    </div>
    <div className='m-4 '>
      <BodyCards info={DATOCARDSINIT}/>
    </div>
    </div>
  );
}
