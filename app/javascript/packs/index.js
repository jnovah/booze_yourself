import React from 'react';
import ReactDOM from 'react-dom';
import BoozeYourself from '../react/src/boozeYourself';
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <BoozeYourself />
    </BrowserRouter>
  ), document.getElementById('app'));
})
