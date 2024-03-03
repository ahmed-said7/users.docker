import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule
    .forRoot({envFilePath:"src/.env",isGlobal:true}),
    UserModule,MongooseModule.forRootAsync({
    useFactory:function(config:ConfigService){
      return { uri:config.get<string>('url') }
    },imports:[ConfigModule]
    ,inject:[ConfigService]
  }
  )]
})
export class AppModule {}
