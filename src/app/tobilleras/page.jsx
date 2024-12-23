import BodyCards from '@/components/BodyCards';
import { DATOCOTOBILLERAS } from '@/mock/datoProducts';


const Tobilleras = () => {

const info = DATOCOTOBILLERAS

  return (
    <div className="container flex flex-col justify-center items-center md:ml-12 mt-3"> 
    <div className="m-5">
      <BodyCards info={info.productos} /> 
    </div>
    </div>
  );
}
export default Tobilleras