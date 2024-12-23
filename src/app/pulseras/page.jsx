import BodyCards from '@/components/BodyCards';
import { DATOCOPULSERAS } from '@/mock/datoProducts';


const Pulseras = () => {

const info = DATOCOPULSERAS

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 mt-3"> 
    <div className="m-5">
      <BodyCards info={info.productos} /> 
    </div>
    </div>
  );
}
export default Pulseras