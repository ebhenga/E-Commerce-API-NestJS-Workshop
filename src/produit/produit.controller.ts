import { Controller, Get, Param } from '@nestjs/common';
import { ProduitService } from './produit.service';

@Controller('produit')
export class ProduitController {
    constructor(private readonly produitService: ProduitService) {}

    @Get()
    getAllProducts(): any[] {
        return this.produitService.getAllProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: number): any {
        return this.produitService.getProductById(id);
    }

    @Get('productNames') // Nouvelle route pour obtenir les noms des articles
    getProductNames(): string[] {
        return this.produitService.getProductNames();
    }
}

