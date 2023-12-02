import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitController } from './produit/produit.controller';

@Module({
  imports: [],
  controllers: [AppController, ProduitController],
  providers: [AppService],
})
export class AppModule {}
