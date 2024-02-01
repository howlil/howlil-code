import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Sosmed = ()=>{
    return(
        <div className='flex gap-4'>
            <FontAwesomeIcon icon={faGithub} color="#ffff" size="2x" />
            <FontAwesomeIcon icon={faInstagram} color="#ffff" size="2x" />
            <FontAwesomeIcon icon={faLinkedin} color="#ffff" size="2x" />
            <FontAwesomeIcon icon={faTwitter} color="#ffff" size="2x" />
        </div>
    )

}

export default Sosmed