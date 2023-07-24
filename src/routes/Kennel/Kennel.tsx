import React from 'react';
/* import { State } from 'models/state';
import { useAppSelector } from 'store'; */
import './KennelStyles.scss';

const Kennel: React.FC = () => {
  /* how to bring redux state into component const literals = useAppSelector((state: State) => state.i18n.literals.error); */
  /* const loadingState = useAppSelector((state: State) => state.loading); */
  /* const literals = useAppSelector((state: State) => state.i18n.literals.error); */
  return (
    <div className='Kennel'>
      Kennel
    </div>
  );
};

Kennel.displayName = 'Kennel';

export default Kennel;
