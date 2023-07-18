import './SubHeaderStyles.scss';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import heartPaw from 'assets/heart_paw.svg';
import group from 'assets/group.svg';
import settings from 'assets/settings.svg';
import about from 'assets/about.svg';
import logout from 'assets/paw_exit.svg';
import { useSelector } from 'react-redux';
import { State } from 'src/models/state';

const SubHeader = (): JSX.Element => {
  const literals = useSelector((state: State) => state.i18n.literals.header);
  const location = useLocation();
  return (
    <header className='subHeader'>
      <nav className='subHeader-nav'>
        <ul className='subHeader-nav__items'>
          {location.pathname.includes('/kennel') ? (
            <>
              <li className='subHeader-nav__item'>
                <NavLink
                  to='/kennel/friends'
                  className='subHeader-nav__link friends'
                >
                  <img src={heartPaw} alt='heart paw' className='subHeader-nav__icon' />
                  {literals.friends}
                </NavLink>
              </li>
              <li className='subHeader-nav__item'>
                <NavLink
                  to='/kennel/groups'
                  className='subHeader-nav__link groups'
                >
                  <img src={group} alt='dogs barking' className='subHeader-nav__icon' />
                  {literals.groups}
                </NavLink>
              </li>
            </>
          )
            : (
              <>
                <li className='subHeader-nav__item'>
                  <NavLink
                    to='/profile/settings'
                    className='subHeader-nav__link settings'
                  >
                    <img src={settings} alt='logo' className='subHeader-nav__icon' />
                    {literals.settings}
                  </NavLink>
                </li>
                <li className='subHeader-nav__item'>
                  <NavLink
                    to='/profile/about'
                    className='subHeader-nav__link about'
                  >
                    <img src={about} alt='about' className='subHeader-nav__icon' />
                    {literals.about}
                  </NavLink>
                </li>
                <li className='subHeader-nav__item'>
                  <NavLink
                    to='/profile/logout'
                    className='subHeader-nav__link logout'
                  >
                    <img src={logout} alt='paw print' className='subHeader-nav__icon' />
                    {literals.logout}
                  </NavLink>
                </li>
              </>
            )}
        </ul>
      </nav>
    </header>
  );
};
export default SubHeader;