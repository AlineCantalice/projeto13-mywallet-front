import ReactDom from 'react-dom';
import App from './App.js';

const app = <App />;
const element = document.querySelector(".root");
ReactDom.render(app, element);