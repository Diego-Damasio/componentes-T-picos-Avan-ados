// src/app/components/ItemDetail.tsx
//'use client';

import React from 'react';
import { Item } from '../types';

interface ItemDetailProps {
    selectedItem: Item | null;
}

const ItemDetail: React.FC<ItemDetailProps> = ({ selectedItem }) => {
    // Função para renderizar o status usando switch
    const renderStatus = (status: Item['status']) => {
        switch (status) {
            case 'available':
                return <span style={{ color: 'green' }}>Disponível</span>;
            case 'unavailable':
                return <span style={{ color: 'red' }}>Indisponível</span>;
            default:
                return <span>Desconhecido</span>;
        }
    };

    return (
        <div>
            <h2>Detalhes do Item</h2>
            {selectedItem ? (
                <div>
                    <p><strong>ID:</strong> {selectedItem.id}</p>
                    <p><strong>Nome:</strong> {selectedItem.name}</p>
                    <p><strong>Descrição:</strong> {selectedItem.description}</p>
                    <p><strong>Status:</strong> {renderStatus(selectedItem.status)}</p>
                </div>
            ) : (
                // Diretiva if usando operador ternário
                <p>Nenhum item selecionado.</p>
            )}
        </div>
    );
};

export default ItemDetail;
