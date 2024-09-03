import { Module } from "@nestjs/common";
import { TelegramProvider } from "@provider/telegraf.provider";
import { JwtProvider } from "@provider/jwt.provider";
import { PostgresProvider } from "@provider/typeorm.provider";


@Module({
  imports: [JwtProvider, PostgresProvider, TelegramProvider],
  exports: [JwtProvider, PostgresProvider, TelegramProvider]
})
export class ProviderModule {
}