// src/components/Dictionary/AddWordModal.tsx
import React, { useState } from 'react';

type AddWordModalProps = {
  onClose: () => void;
  onAddWord: (word: string, translations: { es: string; en: string; pt: string }) => void;
};

const AddWordModal: React.FC<AddWordModalProps> = ({ onClose, onAddWord }) => {
  const [word, setWord] = useState('');
  const [translations, setTranslations] = useState({ es: '', en: '', pt: '' });

  const handleSubmit = () => {
    // Verifica que la palabra y las traducciones estén completas
    if (word && translations.es && translations.en && translations.pt) {
      onAddWord(word, translations); // Llama a la función para agregar la palabra
      setWord(''); // Limpia el campo de la palabra
      setTranslations({ es: '', en: '', pt: '' }); // Limpia los campos de traducción
      onClose(); // Cierra el modal
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div className="modal">
      <h2>Agregar Palabra</h2>
      <input 
        value={word} 
        onChange={(e) => setWord(e.target.value)} 
        placeholder="Palabra" 
      />
      <input 
        value={translations.es} 
        onChange={(e) => setTranslations({ ...translations, es: e.target.value })} 
        placeholder="Español" 
      />
      <input 
        value={translations.en} 
        onChange={(e) => setTranslations({ ...translations, en: e.target.value })} 
        placeholder="Inglés" 
      />
      <input 
        value={translations.pt} 
        onChange={(e) => setTranslations({ ...translations, pt: e.target.value })} 
        placeholder="Portugués" 
      />
      <button onClick={handleSubmit}>Agregar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default AddWordModal;