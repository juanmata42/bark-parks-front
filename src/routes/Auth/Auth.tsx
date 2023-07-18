import React, { useState } from 'react';
import { State } from 'models/state';
import { useSelector } from 'react-redux';
import './AuthStyles.scss';

const Auth: React.FC = () => {
  const literals = useSelector((state: State) => state.i18n.literals.login);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  /* const handleUsernameChange = (event: ) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login or submit logic here
    console.log('Username:', username);
    console.log('Password:', password);
  }; */

  return (
    <div className='auth'>
      <div className='center'>
        <div className='ear ear--left' />
        <div className='ear ear--right' />
        <div className='face'>
          <div className='eyes'>
            <div className='eye eye--left'>
              <div className='glow' />
            </div>
            <div className='eye eye--right'>
              <div className='glow' />
            </div>
          </div>
          <div className='nose'>
            <svg width='38.161' height='22.03'>
              <path d='M2.017 10.987Q-.563 7.513.157 4.754C.877 1.994 2.976.135 6.164.093 16.4-.04 22.293-.022 32.048.093c3.501.042 5.48 2.081 6.02 4.661q.54 2.579-2.051 6.233-8.612 10.979-16.664 11.043-8.053.063-17.336-11.043z' fill='#243946' />
            </svg>
            <div className='glow' />
          </div>
          <div className='mouth'>
            <svg className='smile' viewBox='-2 -2 84 23' width='84' height='23'>
              <path d='M0 0c3.76 9.279 9.69 18.98 26.712 19.238 17.022.258 10.72.258 28 0S75.959 9.182 79.987.161' fill='none' strokeWidth='3' strokeLinecap='square' strokeMiterlimit='3' />
            </svg>
            <div className='mouth-hole' />
            <div className='tongue breath'>
              <div className='tongue-top' />
              <div className='line' />
              <div className='median' />
            </div>
          </div>
        </div>
        <div className='hands'>
          <div className='hand hand--left'>
            <div className='finger'>
              <div className='bone' />
              <div className='nail' />
            </div>
            <div className='finger'>
              <div className='bone' />
              <div className='nail' />
            </div>
            <div className='finger'>
              <div className='bone' />
              <div className='nail' />
            </div>
          </div>
          <div className='hand hand--right'>
            <div className='finger'>
              <div className='bone' />
              <div className='nail' />
            </div>
            <div className='finger'>
              <div className='bone' />
              <div className='nail' />
            </div>
            <div className='finger'>
              <div className='bone' />
              <div className='nail' />
            </div>
          </div>
        </div>
        <div className='login'>
          <label>
            <div className='fa fa-phone' />
            <input className='username' type='text' autoComplete='on' placeholder='username' />
          </label>
          <label>
            <div className='fa fa-commenting' />
            <input className='password' type='password' autoComplete='off' placeholder='password' />
            <button className='password-button' type='button'>
              aa
              {/* <i className='bx bx-show' /> */}
            </button>
          </label>
          <button className='login-button' type='button'>Login</button>
        </div>
      </div>
    </div>
  );
};

Auth.displayName = 'Auth';

export default Auth;
