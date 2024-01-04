import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-slate-200 text-center shadow-md'>
      <div>
        <h1 className='font-bold pt-2'>Follow Us</h1>
        <div className='flex justify-center mt-4'>
          <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FontAwesomeIcon icon={faFacebook} size='2x' />
          </a>
          <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FontAwesomeIcon icon={faTwitter} size='2x'/>
          </a>
          <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='mx-2'>
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
        </div>
      </div>
      <p className='mt-4'>&copy; 2023 BeeData</p>
    </footer>
  );
}
export default Footer;
