import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import CustomComponent from './CustomComponent.jsx';
//const iframe = '<iframe src="http://localhost:3000/game/crystal/" width="405" height="720"></iframe>'; 
const iframe = '<iframe src="http://localhost/crystal/" width="405" height="720"></iframe>'; 
ReactDOM.render(<CustomComponent iframe={iframe} />,document.getElementById('container'));
ReactDOM.render(<App />, document.getElementById('root'));