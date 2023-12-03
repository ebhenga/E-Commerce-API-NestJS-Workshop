import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProduitController } from './produit/produit.controller';
import { ProduitService } from './produit/produit.service';
import { UsersModule } from './users/users.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [AppController, ProduitController],
  providers: [AppService, ProduitService],
})
export class AppModule {}
