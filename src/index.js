import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Esim() {
  return <div>
    <h1>Hello</h1>
    <h5>World</h5>
  </div>
}

function App2() {
  return <div className="app2H">
   Hello World
   <br />
    <input type="text" />
    <Esim />
  </div>
}

ReactDOM.render(
  <React.StrictMode>
   <div>
     <App2 />
     <App />
   </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
