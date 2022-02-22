export interface Product {
    id: string;
    image: string;
    price: number;
    name: string;
    description: string;
    options:[{
        label: string;
        values: string[];
    }]
}