import { Module } from "@nestjs/common";
import { ProviderModule } from "@provider/provider.module";
import { TelegrafService } from "@telegraf/telegraf.service";
import { ConfigModule } from "@nestjs/config";
import { ModelModule } from "@model/model.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ProviderModule,
    ModelModule
  ],
  controllers: [],
  providers: [TelegrafService]
})
export class AppModule {
}
