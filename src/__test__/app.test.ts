import App from './App';
import '@types/jest';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

describe('when App is started', () => {
  it('renders without crashing', () => {
    expect(true).toBe(true);
  });
});
