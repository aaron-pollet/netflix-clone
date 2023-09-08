import './App.css';
import { Route, Routes } from 'react-router-dom';
import SelectProfile from './selectProfile/SelectProfile';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' />
        <Route
          path='/browse'
          element={<SelectProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;
