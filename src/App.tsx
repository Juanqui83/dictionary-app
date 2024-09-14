// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DictionaryScreen from './screens/DictionaryScreen';
import './styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dictionary" element={<DictionaryScreen />} />
        <Route path="/" element={<Navigate to="/dictionary" replace />} />
      </Routes>
    </Router>
  );
};

export default App;