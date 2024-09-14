// src/components/Dictionary/RemoveWordModal.tsx
import React, { useState } from 'react';

type RemoveWordModalProps = {
  onClose: () => void;
  onRemoveWord: (word: string) => void;
};

const RemoveWordModal: React.FC<RemoveWordModalProps> = ({ onClose, onRemoveWord }) => {
  const [word, setWord] = useState('');

  const handleRemove = () => {
    if (word) {
      onRemoveWord(word);
      onClose();
    } else {
      alert('Por favor, ingresa la palabra a eliminar.');
    }
  };

  return (
    <div className="modal">
      <h2>Eliminar Palabra</h2>
      <input 
        value={word} 
        onChange={(e) => setWord(e.target.value)} 
        placeholder="Palabra a eliminar" 
      />
      <button onClick={handleRemove}>Eliminar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default RemoveWordModal;