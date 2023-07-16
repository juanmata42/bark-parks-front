import React from 'react';
import { connect } from 'react-redux';
import { RotatingLines } from 'react-loader-spinner';
import './LoadingStyles.scss';

const Loading: React.FC<{ isLoading: number}> = (props) => {
  const { isLoading } = props;
  return (
    <div className={`loader__container ${isLoading <= 0 ? 'loader__hidden' : ''}`}>
      <RotatingLines
        width='100'
        strokeColor='#c4c4c4'
        strokeWidth='1'
        animationDuration='2'
      />
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
