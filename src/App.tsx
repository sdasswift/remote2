import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Test } from './test.component';

const App = () => {
  return (
    <Routes>
      <Route path="/test-2" element={<Test />} />
    </Routes>
  );
};

export default App;
