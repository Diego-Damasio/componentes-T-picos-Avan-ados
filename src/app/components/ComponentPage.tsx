// src/app/components/ComponentPage.tsx
//'use client';

import React from 'react';
import ItemListContainer from './ItemListContainer';

const ComponentPage: React.FC = () => {
    return (
        <div>
            <h1>Página de Componentes</h1>
            <ItemListContainer />
        </div>
    );
};

export default ComponentPage;
