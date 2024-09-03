import { TelegrafModule } from "nestjs-telegraf";
import { Global, Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Global()
@Module({
  imports: [
    TelegrafModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        token: configService.getOrThrow("TELEGRAM_BOT_TOKEN")
      }),
      inject: [ConfigService],
    })
  ]
})

export class TelegramProvider {
}