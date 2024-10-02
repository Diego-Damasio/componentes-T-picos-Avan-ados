// src/app/page.tsx
'use client';
import React, { useState } from 'react';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import { Item } from './types';

const Page: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const items: Item[] = [
    { id: 1, name: 'Maçã', description: 'A maçã é rica em fibras.', status: 'available' },
    { id: 2, name: 'Banana', description: 'A banana é ótima para energia.', status: 'unavailable' },
    { id: 3, name: 'Laranja', description: 'A laranja é cheia de vitamina C.', status: 'available' },
    { id: 4, name: 'Pêra', description: 'A pêra é deliciosa e suculenta.', status: 'available' },
  ];

  const handleItemSelect = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <h1>Lista de Frutas</h1>
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <ItemDetail selectedItem={selectedItem} />
    </div>
  );
};

export default Page;
