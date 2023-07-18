import './HeaderStyles.scss';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import barkingIcon from 'assets/barking.svg';
import happyDogIcon from 'assets/happy_dog.svg';
import mainLogo from 'assets/logo.svg';
import sheltersIcon from 'assets/shelter.svg';
import pawPrintIcon from 'assets/paw_print.svg';
import { useSelector } from 'react-redux';

const Header = (): JSX.Element => {
  const location = useLocation();
  return (
    <header className='main-header'>
      <nav className='main-nav'>
        <ul className='main-nav__items'>
          <li className='main-nav__item'>
            <NavLink
              to='/pawpost'
              className='main-nav__link pawPost'
            >
              <img src={barkingIcon} alt='barking' />
              PawPost
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/kennel'
              className='main-nav__link kennel'
            >
              <img src={happyDogIcon} alt='happy dog' />
              Kennel
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/home'
              className='main-nav__link home'
            >
              <img src={mainLogo} alt='logo' />
              Home
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/shelters'
              className='main-nav__link shelters'
            >
              <img src={sheltersIcon} alt='shelters' />
              Shelters
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/profile'
              className='main-nav__link profile'
            >
              <img src={pawPrintIcon} alt='paw print' />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
