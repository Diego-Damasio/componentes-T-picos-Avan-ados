// src/app/components/ItemListContainer.tsx
'use client';

import React, { useState } from 'react';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';
import { Item } from '../types';

const ItemListContainer: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    // Lista de itens
    const items: Item[] = [
        { id: 1, name: 'Maçã', description: 'A maçã é rica em fibras.', status: 'available' },
        { id: 2, name: 'Banana', description: 'A banana é ótima para energia.', status: 'unavailable' },
        { id: 3, name: 'Laranja', description: 'A laranja é cheia de vitamina C.', status: 'available' },
        { id: 4, name: 'Pêra', description: 'A pêra é deliciosa e suculenta.', status: 'available' },
    ];

    // Função para lidar com a seleção de um item
    const handleItemSelect = (item: Item) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <h1>Gerenciador de Itens</h1>
            
            {/* Diretiva if usando IIFE para renderização condicional */}
            {(() => {
                if (selectedItem) {
                    return <ItemDetail selectedItem={selectedItem} />;
                } else {
                    return <p>Por favor, selecione um item para ver os detalhes.</p>;
                }
            })()}

            {/* Diretiva for usando map para iterar sobre a lista de itens */}
            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
    );
};

export default ItemListContainer;
