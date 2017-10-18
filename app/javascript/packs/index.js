import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import BoozeYourself from '../react/src/boozeYourself';
import { BrowserRouter } from 'react-router-dom'
=======
import BoozeYourself from '../react/src/BoozeYourself';
>>>>>>> 0f801766cfc0dad0609813a525a98cfe8ac088a5

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <BoozeYourself />
    </BrowserRouter>
  ), document.getElementById('app'));
})
