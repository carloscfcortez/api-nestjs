import { IsString, IsCurrency, IsBoolean } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export default class CustomerDTO {
	@ApiModelProperty()
	@IsString()
	readonly nome: string;
	@ApiModelProperty()
	@IsString()
	readonly sobrenome: string;
	@ApiModelProperty()
	@IsString()
	readonly cpf: string;
}

export class CustomerRO {
	id: number;
	nome: string;
	sobrenome: string;
	cpf: string;
}
