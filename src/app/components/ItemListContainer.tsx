// src/components/ItemListContainer.tsx
'use client';

import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import { Item } from '../types';

const ItemListContainer: React.FC = () => {
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
      <ItemList items={items} onItemSelect={handleItemSelect} />
      <ItemDetail selectedItem={selectedItem} />
    </div>
  );
};

export default ItemListContainer;
