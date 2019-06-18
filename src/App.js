import React from 'react';
import { Provider } from 'react-redux';
import './scss/styles.scss';
import store from './state/store';
import Header from './components/header/header-container';
import Main from './routes/root';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Main />
    </Provider>
  );
}

export default App;
