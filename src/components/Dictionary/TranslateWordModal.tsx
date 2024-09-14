// src/components/Dictionary/TranslateWordModal.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TranslateWordModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [word, setWord] = useState('');
  const [language, setLanguage] = useState<'es' | 'en' | 'pt'>('es');

  // Selecciona todas las traducciones del estado de Redux
  const allTranslations = useSelector((state: RootState) => state.dictionary.words);

  // Función para obtener la traducción
  const getTranslation = (inputWord: string, targetLanguage: 'es' | 'en' | 'pt') => {
    // Busca la palabra en el diccionario
    for (const key in allTranslations) {
      // Compara la palabra ingresada con las claves del diccionario
      if (key.toLowerCase() === inputWord.toLowerCase()) {
        return allTranslations[key][targetLanguage]; // Devuelve la traducción
      }
      // Compara las traducciones en el idioma seleccionado
      if (allTranslations[key][targetLanguage].toLowerCase() === inputWord.toLowerCase()) {
        return allTranslations[key][targetLanguage]; // Devuelve la traducción
      }
    }
    return null; // Si no encuentra la traducción
  };

  return (
    <div className="modal">
      <h2>Traducir Palabra</h2>
      <input 
        value={word} 
        onChange={(e) => setWord(e.target.value)} 
        placeholder="Palabra a traducir" 
      />
      <select onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'pt')} value={language}>
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="pt">Portugués</option>
      </select>
      <textarea 
        readOnly 
        value={getTranslation(word, language) || ''} 
        placeholder="Traducción aparecerá aquí"
      />
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default TranslateWordModal;