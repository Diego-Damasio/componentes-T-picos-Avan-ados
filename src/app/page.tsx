// src/app/page.tsx
//'use client';

import React from 'react';
import ComponentPage from './components/ComponentPage';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Bem-vindo ao Meu Projeto</h1>
            <ComponentPage />
        </div>
    );
};

export default HomePage;
