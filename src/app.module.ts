import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitController } from './produit/produit.controller';
import { ProduitService } from './produit/produit.service';

@Module({
  imports: [],
  controllers: [AppController, ProduitController],
  providers: [AppService, ProduitService],
})
export class AppModule {}
