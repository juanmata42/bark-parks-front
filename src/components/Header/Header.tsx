import './HeaderStyles.scss';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import barkingIcon from 'assets/barking.svg';
import kennel from 'assets/kennel.svg';
import park from 'assets/park.svg';
import sheltersIcon from 'assets/shelter.svg';
import pawPrintIcon from 'assets/paw_print.svg';
import exitIcon from 'assets/exit.svg';
import { useSelector } from 'react-redux';
import { State } from 'src/models/state';
import { routesWithSubheader, routesWithSession } from 'utils/routeConstants';
import SubHeader from './SubHeader';

const Header = (): JSX.Element => {
  const literals = useSelector((state: State) => state.i18n.literals.header);
  const location = useLocation();
  const isLogged = localStorage.getItem('logged');

  // Helper function to check if NavLink should be rendered based on routesWithSession and isLogged
  const shouldRenderNavLink = (to: string) => {
    if (routesWithSession.includes(to)) {
      return isLogged === 'true';
    }
    return true;
  };

  return (
    <header className='main-header'>
      <nav className='main-nav'>
        <ul className='main-nav__items'>
          {shouldRenderNavLink('/pawpost') && (
            <li className='main-nav__item'>
              <NavLink to='/pawpost' className='main-nav__link pawPost'>
                <img src={barkingIcon} alt='barking' className='main-nav__icon' />
                {literals.pawPost}
              </NavLink>
            </li>
          )}
          {shouldRenderNavLink('/kennel/friends') && (
            <li className='main-nav__item'>
              <NavLink to='/kennel/friends' className='main-nav__link kennel'>
                <img src={kennel} alt='kennel' className='main-nav__icon' />
                {literals.kennel}
              </NavLink>
            </li>
          )}
          {shouldRenderNavLink('/home') && (
            <li className='main-nav__item'>
              <NavLink to='/home' className='main-nav__link home'>
                <img src={park} alt='park' className='main-nav__icon' />
                {literals.home}
              </NavLink>
            </li>
          )}
          {shouldRenderNavLink('/shelters') && (
            <li className='main-nav__item'>
              <NavLink to='/shelters' className='main-nav__link shelters'>
                <img src={sheltersIcon} alt='shelters' className='main-nav__icon' />
                {literals.shelters}
              </NavLink>
            </li>
          )}
          {shouldRenderNavLink('/profile/settings') && (
            <li className='main-nav__item'>
              <NavLink to='/profile/settings' className='main-nav__link profile'>
                <img src={pawPrintIcon} alt='paw print' className='main-nav__icon' />
                {literals.profile}
              </NavLink>
            </li>
          )}
          {shouldRenderNavLink('/auth/login') && (
            <li className='main-nav__item'>
              <NavLink to='/auth/login' className='main-nav__link login'>
                <img src={pawPrintIcon} alt='paw print' className='main-nav__icon' />
                {literals.login}
              </NavLink>
            </li>
          )}
          {shouldRenderNavLink('/auth/logout') && (
            <li className='main-nav__item'>
              <NavLink to='/auth/login' className='main-nav__link login'>
                <img src={exitIcon} alt='paw print' className='main-nav__icon' />
                {literals.logout}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
      {routesWithSubheader.includes(location.pathname) && <SubHeader />}
    </header>
  );
};

export default Header;
