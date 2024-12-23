import BodyCards from '@/components/BodyCards';
import { DATOCOLLARES } from '@/mock/datoProducts';


const Collares = () => {

const info = DATOCOLLARES

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 mt-3"> 
    <div className="m-5">
      <BodyCards info={info.productos} /> 
    </div>
    </div>
  );
}
export default Collares