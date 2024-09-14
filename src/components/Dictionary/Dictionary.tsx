// src/components/Dictionary/Dictionary.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWord, removeWord } from '../../redux/dictionary/dictionarySlice';
import AddWordModal from './AddWordModal';
import RemoveWordModal from './RemoveWordModal';
import TranslateWordModal from './TranslateWordModal';

const Dictionary: React.FC = () => {
  const dispatch = useDispatch();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [showTranslateModal, setShowTranslateModal] = useState(false);

  const handleAddWord = (word: string, translations: { es: string; en: string; pt: string }) => {
    dispatch(addWord({ word, translations }));
    setShowAddModal(false);
  };

  const handleRemoveWord = (word: string) => {
    dispatch(removeWord(word));
    setShowRemoveModal(false);
  };

  return (
    <div className="dictionary-container">
      <h1>Diccionario Traductor</h1>
      <button onClick={() => setShowAddModal(true)}>Agregar Palabra</button>
      <button onClick={() => setShowRemoveModal(true)}>Eliminar Palabra</button>
      <button onClick={() => setShowTranslateModal(true)}>Traducir</button>

      {showAddModal && (
        <AddWordModal 
          onClose={() => setShowAddModal(false)} 
          onAddWord={handleAddWord} 
        />
      )}
      {showRemoveModal && (
        <RemoveWordModal 
          onClose={() => setShowRemoveModal(false)} 
          onRemoveWord={handleRemoveWord} 
        />
      )}
      {showTranslateModal && (
        <TranslateWordModal 
          onClose={() => setShowTranslateModal(false)} 
        />
      )}
    </div>
  );
};

export default Dictionary;