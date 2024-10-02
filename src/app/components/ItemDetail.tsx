// src/components/ItemDetail.tsx
'use client';

import React, { useEffect } from 'react';
import { Item } from '../types';

interface ItemDetailProps {
  selectedItem: Item | null;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ selectedItem }) => {
  useEffect(() => {
    if (selectedItem) {
      console.log(`Item selecionado: ${selectedItem.name}`);
    }
    return () => {
      if (selectedItem) {
        console.log(`Item deselecionado: ${selectedItem.name}`);
      }
    };
  }, [selectedItem]);

  if (!selectedItem) {
    return <p>Nenhum item selecionado.</p>;
  }

  let statusMessage: string;

  switch (selectedItem.status) {
    case 'available':
      statusMessage = 'Disponível';
      break;
    case 'unavailable':
      statusMessage = 'Indisponível';
      break;
    default:
      statusMessage = 'Desconhecido';
  }

  return (
    <div>
      <h2>Detalhes do Item</h2>
      <p>ID: {selectedItem.id}</p>
      <p>Nome: {selectedItem.name}</p>
      <p>Descrição: {selectedItem.description}</p>
      <p>Status: {statusMessage}</p>
    </div>
  );
};

export default ItemDetail;
