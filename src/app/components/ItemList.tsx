// src/app/components/ItemList.tsx
//'use client';

import React from 'react';
import { Item } from '../types';

interface ItemListProps {
    items: Item[];
    onItemSelect: (item: Item) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onItemSelect }) => {
    return (
        <div>
            <h2>Lista de Itens</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <button onClick={() => onItemSelect(item)}>
                            {item.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
