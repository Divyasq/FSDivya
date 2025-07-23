import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { LibraryState, Component, ComponentCategory } from '../types/component';

interface LibraryContextType {
  state: LibraryState;
  dispatch: React.Dispatch<LibraryAction>;
  setSearchTerm: (term: string) => void;
  setSelectedCategory: (category: string | null) => void;
  setSelectedComponent: (component: Component | null) => void;
  getFilteredComponents: () => Component[];
}

type LibraryAction =
  | { type: 'SET_SEARCH_TERM'; payload: string }
  | { type: 'SET_SELECTED_CATEGORY'; payload: string | null }
  | { type: 'SET_SELECTED_COMPONENT'; payload: Component | null }
  | { type: 'SET_COMPONENTS'; payload: Component[] }
  | { type: 'SET_CATEGORIES'; payload: ComponentCategory[] };

const initialState: LibraryState = {
  components: [],
  categories: [],
  searchTerm: '',
  selectedCategory: null,
  selectedComponent: null,
};

const LibraryContext = createContext<LibraryContextType | undefined>(undefined);

function libraryReducer(state: LibraryState, action: LibraryAction): LibraryState {
  switch (action.type) {
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'SET_SELECTED_COMPONENT':
      return { ...state, selectedComponent: action.payload };
    case 'SET_COMPONENTS':
      return { ...state, components: action.payload };
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(libraryReducer, initialState);

  const setSearchTerm = (term: string) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  };

  const setSelectedCategory = (category: string | null) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
  };

  const setSelectedComponent = (component: Component | null) => {
    dispatch({ type: 'SET_SELECTED_COMPONENT', payload: component });
  };

  const getFilteredComponents = () => {
    let filtered = state.components;

    if (state.selectedCategory) {
      filtered = filtered.filter(component => component.category === state.selectedCategory);
    }

    if (state.searchTerm) {
      const searchLower = state.searchTerm.toLowerCase();
      filtered = filtered.filter(component =>
        component.name.toLowerCase().includes(searchLower) ||
        component.description.toLowerCase().includes(searchLower) ||
        component.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  };

  return (
    <LibraryContext.Provider
      value={{
        state,
        dispatch,
        setSearchTerm,
        setSelectedCategory,
        setSelectedComponent,
        getFilteredComponents,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  const context = useContext(LibraryContext);
  if (context === undefined) {
    throw new Error('useLibrary must be used within a LibraryProvider');
  }
  return context;
}