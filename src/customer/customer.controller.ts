import { Controller, Get, Post, Body, Query, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from './customer.service';
import CustomerDTO, { CustomerRO } from './customer.dto';
import { ApiModelProperty, ApiUseTags, ApiImplicitParam } from '@nestjs/swagger';

@ApiUseTags('Customer')
@Controller('customer')
export class CustomerController {
	constructor(private readonly customerService: CustomerService) {}

	@Get(':id')
	@ApiImplicitParam({ name: 'id' })
	getBigetById(@Param() id: number) {
		return this.customerService.getById(id);
	}

	@Post()
	addCustomer(@Body() body: CustomerDTO) {
		return this.customerService.addCustomer(body);
	}
}
