import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configureStore';
import  ScrolToTop  from "./app/common/util/ScrolToTop";

const store = configureStore();
const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
    <BrowserRouter> 
    <ScrolToTop>
    <App />
    </ScrolToTop>
    </BrowserRouter>  
    </Provider>,
    rootEl)

}

if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
            setTimeout(render)
    })

}
render( );

serviceWorker.unregister();
