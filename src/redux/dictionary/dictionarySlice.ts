// src/redux/dictionary/dictionarySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WordTranslations {
  es: string;
  en: string;
  pt: string;
}

interface DictionaryState {
  words: { [key: string]: WordTranslations };
}

const initialState: DictionaryState = {
  words: {},
};

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState,
  reducers: {
    addWord(state, action: PayloadAction<{ word: string; translations: WordTranslations }>) {
      state.words[action.payload.word] = action.payload.translations;
    },
    removeWord(state, action: PayloadAction<string>) {
      delete state.words[action.payload];
    },
  },
});

export const { addWord, removeWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;