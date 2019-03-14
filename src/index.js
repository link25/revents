import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import ReduxToastr from "react-redux-toastr";
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './app/store/configureStore';
import  ScrolToTop  from "./app/common/util/ScrolToTop";
import { loadEvents } from "./features/event/eventActions";

const store = configureStore();
store.dispatch(loadEvents());
const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
        <Provider store={store}>
    <BrowserRouter> 
    <ScrolToTop>
    <ReduxToastr
    position='bottom-right'
    transitionIn='fadeIn'
    transitionOut='fadeOut'
    />
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
