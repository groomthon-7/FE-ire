import './App.css';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path='/' />
          <Route path='/research' />
          <Route path='/campingList/all' />
          <Route path='/campingList/jeju' />
          <Route path='/campingList/seongwipo' />
          <Route path='/campingDetail/:id' />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
