import { Module } from "@nestjs/common";
import { AccountModule } from "@model/postgres/account/account.module";


@Module({
  imports: [AccountModule],
  exports: [AccountModule]
})
export class ModelModule {
}