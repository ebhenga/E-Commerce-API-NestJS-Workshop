import { Injectable } from '@nestjs/common';

@Injectable()
export class ProduitService {
    private products: any[] = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
    ];

    getAllProducts(): any[] {
        return this.products;
    }

    getProductById(id: number): any {
        return this.products.find(product => product.id === id);
    }

    getProductNames(): string[] {
        return this.products.map(product => product.name);
    }
}
