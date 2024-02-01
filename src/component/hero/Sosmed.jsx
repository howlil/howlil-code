import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sosmed = ()=>{
    return(
        <div className='flex gap-4'>
            <FontAwesomeIcon  icon={faGithub}  size="2x" className="text-gray-300" />
            <FontAwesomeIcon icon={faInstagram}  size="2x" className="text-gray-300" />
            <FontAwesomeIcon icon={faLinkedin}  size="2x" className="text-gray-300" />
            <FontAwesomeIcon icon={faTwitter}  size="2x"className="text-gray-300"  />
        </div>
    )

}

export default Sosmed