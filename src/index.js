import React from 'react';
import ReactDOM from 'react-dom/client';


const div = React.createElement('div', null , [React.createElement('h1', null ,'hi'),
  React.createElement('p', null ,'hello'),
  React.createElement('p', null ,'hey')]);
const RootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(RootEl);

root.render(div);

