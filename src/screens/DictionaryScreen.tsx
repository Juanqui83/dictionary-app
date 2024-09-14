// DictionaryScreen.tsx
import React from 'react';
import Dictionary from '../components/Dictionary/Dictionary';

const DictionaryScreen: React.FC = () => {
  return (
    <div>
      <h1>Diccionario Traductor</h1>
      <Dictionary />
    </div>
  );
};

export default DictionaryScreen;