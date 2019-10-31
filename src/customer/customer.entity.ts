import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customer')
export class CustomerEntity {
	@PrimaryGeneratedColumn('increment') id: string;
	@Column('text') nome: string;
	@Column('text') sobrenome: string;
	@Column('text') cpf: string;
	@Column({ type: 'timestamp without time zone', nullable: true })
	datanascimento: Date;
}
