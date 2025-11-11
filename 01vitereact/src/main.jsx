import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const username = 'sandy';

const anotherElement = React.createElement(
  'a',
  {href:'https://google.com', target: '_blank'},
  'click me ',
  username // evaluated epression
);

createRoot(document.getElementById('root')).render(
  anotherElement
)
