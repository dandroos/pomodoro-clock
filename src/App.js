import React from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
  return (
    <Provider store={store}>
    <div id="app">
      <div id="app-content">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
    </Provider>
      );
}
}

export default App;
