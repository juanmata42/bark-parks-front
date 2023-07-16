import React from 'react';
import { State } from 'models/state';
import { useSelector } from 'react-redux';
import './MainStyles.scss';

const Main: React.FC = () => {
  /* how to bring redux state into component const literals = useSelector((state: State) => state.i18n.literals.error); */
  /* const loadingState = useSelector((state: State) => state.loading); */
  const literals = useSelector((state: State) => state.i18n.literals.error);
  return (
    <div className='main'>
      parks
    </div>
  );
};

Main.displayName = 'Main';

export default Main;
