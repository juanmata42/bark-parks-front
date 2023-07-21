import React from 'react';
import { State } from 'models/state';
import { useAppSelector } from 'store';
import './SheltersStyles.scss';

const Shelters: React.FC = () => {
  /* how to bring redux state into component const literals = useAppSelector((state: State) => state.i18n.literals.error); */
  /* const loadingState = useAppSelector((state: State) => state.loading); */
  const literals = useAppSelector((state: State) => state.i18n.literals.error);
  return (
    <div className='Shelters'>
      Shelters
    </div>
  );
};

Shelters.displayName = 'Shelters';

export default Shelters;
