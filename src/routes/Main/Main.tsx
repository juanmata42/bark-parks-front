import React from 'react';
/* import { State } from 'models/state';
import { useAppSelector } from 'store'; */
import './MainStyles.scss';

const Main: React.FC = () => {
  /* how to bring redux state into component const literals = useAppSelector((state: State) => state.i18n.literals.error); */
  /* const loadingState = useAppSelector((state: State) => state.loading); */
  /* const literals = useAppSelector((state: State) => state.i18n.literals.error); */
  return (
    <div className='BarkParks'>
      parks
    </div>
  );
};

Main.displayName = 'Main';

export default Main;
