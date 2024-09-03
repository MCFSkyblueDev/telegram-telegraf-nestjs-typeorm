import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("accounts")
export class AccountEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "address" })
  address: string;

  @Column({ name: "telegram_id" })
  telegramId: string;

  @Column({ name: "network" })
  network: number;

  @Column({ name: "first_name" })
  firstName: string;

  @Column({ name: "last_name" })
  lastName: string;

  @Column({ name: "username" })
  username: string;

  @Column({ name: "ref_code" })
  refCode: string;

  @Column({ name: "invite_code" })
  inviteCode: string;

  @Column({ name: "is_bot" })
  isBot: boolean;

  @Column({ name: "status" })
  status: number;

  @Column({ name: "last_mint" })
  lastMint: number;

  @Column({ name: "level" })
  level: number;

  @CreateDateColumn({ name: "created_at", type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp" })
  updatedAt: Date;
}
