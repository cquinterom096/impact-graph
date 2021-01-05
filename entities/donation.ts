import { Field, ID, ObjectType } from 'type-graphql'
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  BaseEntity,
  ManyToOne,
  ColumnOptions,
  RelationId
} from 'typeorm'
import { Project } from './project'
import { User } from './user'

@Entity()
@ObjectType()
export class Donation extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  transactionId: string
  
  @Field()
  @Column()
  toWalletAddress: string

  @Field()
  @Column()
  fromWalletAddress: string

  @Field()
  @Column()
  currency: string

  @Field({ nullable: true })
  @Column({ nullable: true })
  anonymous: boolean

  @Field()
  @Column({type: 'real'})
  amount: number
  
  @Field()
  @Column({type: 'real'})
  valueUsd: number
  
  @Field(type => Project)
  @ManyToOne(type => Project, { eager: true })
  project: Project
  @RelationId((donation: Donation) => donation.project)
  projectId: number
  
  @Field(type => User,{ nullable: true })
  @ManyToOne(type => User, { eager: true, nullable: true })
  user: User
  @RelationId((donation: Donation) => donation.user)
  userId: number

  @Field(type => Date)
  @Column()
  createdAt: Date
}