import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './customer.entity';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
	imports: [ TypeOrmModule.forFeature([ CustomerEntity ]) ],
	controllers: [ CustomerController ],
	providers: [ CustomerService ],
	exports: [ CustomerModule ]
})
export class CustomerModule {}
