import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { linkMe } from '../../data/linkMe';

// Mendefinisikan pemetaan dari nama ikon ke komponen FontAwesomeIcon yang sesuai
const iconMapping = {
  faGithub: faGithub,
  faInstagram: faInstagram,
  faLinkedin: faLinkedin,
  faTwitter: faTwitter, // Menggunakan faEnvelope untuk email
};

const Sosmed = () => {
  return (
    <div className='flex gap-4'>
      {linkMe.map((item) => (
        <Link to={ item.href } target="_blank" key={item.name}>
          <FontAwesomeIcon icon={iconMapping[item.icon]} size="2x" className="text-gray-300 hover:text-lime-300 transition-all duration-500 ease-in-out" />
        </Link>
      ))}
    </div>
  );
}

export default Sosmed;
