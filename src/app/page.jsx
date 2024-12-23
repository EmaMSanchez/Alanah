import Carrousel from '@/components/Carrousel'
import BodyCards from '@/components/BodyCards';
import { DATOCARDSINIT } from '@/mock/datoInit'
export default function Home() {

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 mt-3">
     <Carrousel/>
    <div className='m-7'>
      Inicio
    </div>
    <div className='m-4 '>
      <BodyCards info={DATOCARDSINIT}/>
    </div>
    </div>
  );
}
