import React, { useState } from 'react';

import {Router} from './src/navigation/Router';
import {AuthProvider} from './src/context/Auth';

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;