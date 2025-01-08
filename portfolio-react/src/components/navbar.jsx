import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import {faSquareXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import logo from "../assets/logo.png";
import { SOCIAL } from '../constants';

export default function Navbar(){
  return <nav className="mb-20 flex item-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center text-2xl text-white">
        <img src={logo} alt="logo" height={40} width={40}/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} style={{color:'white'}} href=''/>
    </a>
    <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} style={{color:'white'}}/>
    </a> 
    <a href={SOCIAL.twitter} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSquareXTwitter} style={{color:'white'}}/>
    </a>
    <a href={SOCIAL.insta} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{color:'white'}}/>
    </a>
    </div>
  </nav>;
}


