import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';


import App from './components/App/App';


const props = { title: 'Hello world from App' };

const render = (Component, properties) => {
  ReactDOM.render(
    <AppContainer>
      <Component {...properties} />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(App, props);


if (module.hot) {
  module.hot.accept('./components/App/App', () => render(App, props));
}
