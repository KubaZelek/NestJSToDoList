import { Task } from 'src/modules/task/entities/task.entity';
import { Entity, Column, PrimaryGeneratedColumn,  OneToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: "name"})
  name: string;

  @OneToMany(() => Task, (task) => task.catId )
  task: Task[];



  @Column({ nullable: true })
  dateSend: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
  })
  updatedAt: Date;  
}   