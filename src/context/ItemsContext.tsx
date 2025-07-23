import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

interface Item {
  id: string;
  name: string;
  reportingCategory?: string;
  stock: string | number;
  price: string;
  image?: string;
  description?: string;
  itemType?: string;
  category?: string;
  locations?: string;
  unit?: string;
  sku?: string;
  gtin?: string;
  weight?: string;
  skipItemDetails?: boolean;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
  error: string | null;
}

interface ItemsContextType {
  state: ItemsState;
  addItem: (item: Omit<Item, 'id'>) => void;
  updateItem: (id: string, item: Partial<Item>) => void;
  deleteItem: (id: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

const initialState: ItemsState = {
  items: [
    {
      id: '1',
      name: 'Consulting',
      reportingCategory: '',
      stock: '-',
      price: '$100.00/ea'
    }
  ],
  loading: false,
  error: null,
};

interface ItemsProviderProps {
  children: ReactNode;
}

export function ItemsProvider({ children }: ItemsProviderProps) {
  const [state, setState] = useState<ItemsState>(initialState);

  const addItem = useCallback((newItem: Omit<Item, 'id'>) => {
    const item: Item = {
      ...newItem,
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    };
    
    setState(prev => ({
      ...prev,
      items: [...prev.items, item]
    }));
  }, []);

  const updateItem = useCallback((id: string, updatedItem: Partial<Item>) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    }));
  }, []);

  const deleteItem = useCallback((id: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  }, []);

  const setLoading = useCallback((loading: boolean) => {
    setState(prev => ({ ...prev, loading }));
  }, []);

  const setError = useCallback((error: string | null) => {
    setState(prev => ({ ...prev, error }));
  }, []);

  const contextValue: ItemsContextType = {
    state,
    addItem,
    updateItem,
    deleteItem,
    setLoading,
    setError,
  };

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);
  if (context === undefined) {
    throw new Error('useItems must be used within an ItemsProvider');
  }
  return context;
}
