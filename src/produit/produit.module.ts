import { Module } from '@nestjs/common';
import { ProduitController } from './produit.controller';
import { ProduitService } from './produit.service';

@Module({
    controllers: [ProduitController], // Déclarez le contrôleur
    providers: [ProduitService], // Déclarez le service
    exports: [ProduitService], // Si vous avez besoin d'exporter le service pour une utilisation en dehors du module
})
export class ProduitModule {}
