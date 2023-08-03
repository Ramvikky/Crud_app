import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from './user.models';

@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://ramasokan12:a4qqZT2Q61LdArvj@cluster0.wagdxco.mongodb.net/'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}])
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}