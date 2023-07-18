/* eslint-disable react/function-component-definition */
import React from 'react';
import LogoImg from 'assets/logo.svg';
import dogGif from 'assets/loading_dog.gif';
import en from 'i18n/EN';
import './maintenanceStyles.scss';

const Maintenance: React.FC = () => {
  const literals = en.maintenance;
  return (

    <div className='maint'>
      <img src={LogoImg} className='maint__logo' alt='Main Logo' />
      <h1 className='maint__title'>{literals.welcome}</h1>
      <h2 className='maint__subtitle'>{literals.doingBestBringStable}</h2>
      <img src={dogGif} className='maint__gif' alt='Dog Gif' />
      <footer className='maint__footer'>
        <p className='maint__copyright'>{literals.copyright}</p>
      </footer>
    </div>
  );
};

Maintenance.displayName = 'Maintenance';

export default Maintenance;
