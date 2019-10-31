import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import CustomerDTO, { CustomerRO } from './customer.dto';

@Injectable()
export class CustomerService {
	constructor(@InjectRepository(CustomerEntity) private customerRepository: Repository<CustomerEntity>) {}

	getHello(): string {
		return 'Hello World!';
	}

	async getById(id: number): Promise<CustomerRO> {
		console.log(id);
		const data = await this.customerRepository.findOne(id);

		const retorno: any = { ...data };
		return retorno;
	}

	addCustomer(data: CustomerDTO): Promise<CustomerRO> {
		this.customerRepository.save(data);
		const retorno: any = { ...data };
		return retorno;
	}
}
