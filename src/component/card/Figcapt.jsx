import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Figcapt = ()=>{
  return(
    <>
    <div className='flex justify-between  items-center'>
    <h1 className='text-gray-50 font-semibold text-xl'>Title</h1>
    <FontAwesomeIcon  icon={faGithub}   className="text-gray-300 text-xl" />
    </div>
    <p className='text-xs text-gray-400 text-opacity-50 text-justify leading-4 py-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam autem voluptates expedita dolore consequuntur repellat magni commodi quaerat, eligendi, iusto pariatur ab molestiae consequatur id natus odio explicabo? Facere, veritatis.</p>
 
    </>
  )
}
export default Figcapt