import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersModule } from 'src/members/members.module';
import { AppController } from './app.controller';

@Module({
  // imports: [
  //   ConfigModule.forRoot(),
  //   MongooseModule.forRootAsync({
  //     imports: [ConfigModule],
  //     useFactory: async (configService: ConfigService) => {
  //       return {
  //         uri: configService.get('MONGODB_URL'),
  //       };
  //     },
  //     inject: [ConfigService],
  //   }),
  //   MembersModule,
  // ],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const url = configService.get('MONGODB_URL');
        const bd = configService.get('MONGODB_NAME');
        const username = configService.get('MONGODB_USERNAME');
        const password = configService.get('MONGODB_PASSWORD');

        return {
          uri: `mongodb://${username}:${password}@${url}/${bd}?authSource=admin`,
        };
      },
      inject: [ConfigService],
    }),
    MembersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
