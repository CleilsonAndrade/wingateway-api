import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    name: 'winthor_conn',
    type: 'oracle',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    serviceName: process.env.DB_SERVICE_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],

    synchronize: false,

    logging: process.env.NODE_ENV === 'development',

    extra: {
      poolMin: 2,
      poolMax: 10,
      poolIncrement: 1,
      poolTimeout: 60,
    },
  }),
);
