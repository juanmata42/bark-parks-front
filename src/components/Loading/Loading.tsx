import React from 'react';
import { connect } from 'react-redux';
import './LoadingStyles.scss';
import loadingDog from 'assets/loading_dog.gif';

const Loading: React.FC<{ isLoading: number}> = (props) => {
  const { isLoading } = props;
  return (
    <div className={`loader__container ${isLoading <= 0 ? 'loader__hidden' : ''}`}>
      <img src={loadingDog} alt='loading' />
    </div>
  );
};

interface LoadingState {
  loading: {
    count: number
  }
}

function mapStateToProps(state: LoadingState) {
  return {
    isLoading: state.loading.count,
  };
}

export default connect(mapStateToProps)(Loading);
