import React from 'react';
import LogOut from './user/LogOut';

const App = ({ children }) => (
  <main>
    { children }
    <LogOut />
  </main>
);

export default App;
