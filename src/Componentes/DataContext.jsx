import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho(prev => {
      const existe = prev.find(i => i.id === produto.id);
      if (existe) {
        return prev.map(i => i.id === produto.id ? { ...i, quantidade: i.quantidade + 1 } : i);
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  };

  const incrementarItem = (id) =>
    setCarrinho(prev =>
      prev.map(i => i.id === id ? { ...i, quantidade: i.quantidade + 1 } : i)
    );

  const decrementarItem = (id) =>
    setCarrinho(prev =>
      prev.map(i => i.id === id ? { ...i, quantidade: i.quantidade - 1 } : i).filter(i => i.quantidade > 0)
    );

  const esvaziarCarrinho = () => setCarrinho([]);

  return (
    <DataContext.Provider
      value={{ carrinho, adicionarAoCarrinho, incrementarItem, decrementarItem, esvaziarCarrinho }}>
      {children}
    </DataContext.Provider>
  );
}
