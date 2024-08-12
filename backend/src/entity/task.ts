import { Entity, Column,PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  projectId: number;  // 关联项目的ID

  @Column()
  ownerId: number;  // 关联用户的ID

  @Column()
  content: string;  // 任务内容

  @Column()
  status: string;  // 任务状态(todo | doing | done)

  //附件
  @Column()
  attachment: string;
  //评论
  @Column()
  comment: string;

  
}