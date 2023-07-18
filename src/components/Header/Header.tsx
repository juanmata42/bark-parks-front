import './HeaderStyles.scss';
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import barkingIcon from 'assets/barking.svg';
import kennel from 'assets/kennel.svg';
import park from 'assets/park.svg';
import sheltersIcon from 'assets/shelter.svg';
import pawPrintIcon from 'assets/paw_print.svg';
import { useSelector } from 'react-redux';
import { State } from 'src/models/state';

const Header = (): JSX.Element => {
  const location = useLocation();
  const literals = useSelector((state: State) => state.i18n.literals.header);
  return (
    <header className='main-header'>
      <nav className='main-nav'>
        <ul className='main-nav__items'>
          <li className='main-nav__item'>
            <NavLink
              to='/pawpost'
              className='main-nav__link pawPost'
            >
              <img src={barkingIcon} alt='barking' className='main-nav__icon' />
              {literals.pawPost}
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/kennel'
              className='main-nav__link kennel'
            >
              <img src={kennel} alt='happy dog' className='main-nav__icon' />
              {literals.kennel}
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/home'
              className='main-nav__link home'
            >
              <img src={park} alt='logo' className='main-nav__icon' />
              {literals.home}
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/shelters'
              className='main-nav__link shelters'
            >
              <img src={sheltersIcon} alt='shelters' className='main-nav__icon' />
              {literals.shelters}
            </NavLink>
          </li>
          <li className='main-nav__item'>
            <NavLink
              to='/profile'
              className='main-nav__link profile'
            >
              <img src={pawPrintIcon} alt='paw print' className='main-nav__icon' />
              {literals.profile}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
