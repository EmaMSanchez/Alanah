import BodyCards from '@/components/BodyCards';
import { DATOCOPULSERAS } from '@/mock/datoProducts';


const Pulseras = () => {

const info = DATOCOPULSERAS

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 mt-3"> 
    <div className='m-7'>
    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#966720a4] from-[#f3dcb9a4]">Pulseras</h4>
    </div>
    <div className="m-5">
      <BodyCards info={info.productos} /> 
    </div>
    </div>
  );
}
export default Pulseras