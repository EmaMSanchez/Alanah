import BodyCards from '@/components/BodyCards';
import { DATOCOLLARES } from '@/mock/datoProducts';


const Collares = () => {

const info = DATOCOLLARES

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 2xl:ml-48 mt-3"> 
      <div className='m-7'>
    <h4 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r to-[#966720a4] from-[#f3dcb9a4]">Collares</h4>
    </div>
    <div className="m-5">
      <BodyCards info={info.productos} /> 
    </div>
    </div>
  );
}
export default Collares