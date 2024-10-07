// src/app/types.ts

export interface Item {
    id: number;
    name: string;
    description: string;
    status: 'available' | 'unavailable';
}
