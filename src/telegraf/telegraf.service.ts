import { Injectable } from "@nestjs/common";
import { Hears, Help, On, Start, Update, Command, InjectBot, Ctx } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";

@Update()
@Injectable()
export class TelegrafService {
  constructor(@InjectBot() private readonly bot: Telegraf<Context>) {
    this.setBotCommands();
  }

  setBotCommands() {
    this.bot.telegram.setMyCommands([
      { command: "start", description: "Button 1" },
      { command: "help", description: "Button 2" },
      { command: "list", description: "Button 3" },
      { command: "invite", description: "Button 4" }
    ]).then(() => {
      console.log("Set Bot Commands Successfully");
    });
  }

  @Start()
  async startCommand(@Ctx() ctx: Context) {
    const user = ctx.message?.from;
    const message: any = ctx.message;
    const code = message.text.split(" ")[1];
    console.log(code);
    // console.log(user);
    const gameUrl = "https://mini-clicking-game.onrender.com/";  // Replace with your game URL
    // await ctx.reply(`Welcome!`,
    //   Markup.inlineKeyboard([
    //     Markup.button.url("Play the Game", gameUrl)
    //   ])
    // );
    // await ctx.reply("Welcome");
    await ctx.telegram.sendMessage(user.id, `Congratulate, play game please!`, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Play Game 🎮",
              web_app: { url: gameUrl }
            }
          ]
        ]
      }
    });
  }

  @Help()
  async helpCommand(@Ctx() ctx: Context) {
    await ctx.reply("Send me a sticker");
  }

  @Command("list")
  async onList(@Ctx() ctx: Context) {
    await ctx.reply("Here is the list.");
  }

  @Command("invite")
  async inviteCommand(@Ctx() ctx: Context) {
    const user = ctx.message?.from;
    const inviteLink = `https://t.me/phong_first_game_bot?start=${user.id}`;
    await ctx.reply(`Share this link to invite others to the bot: ${inviteLink}`);
  }


  @On("sticker")
  async onSticker(@Ctx() ctx: Context) {
    await ctx.reply("👍");
  }

  @Hears("hi")
  async hearsHi(@Ctx() ctx: Context) {
    await ctx.reply("Hey there");
  }

  //? Catch-all handler for any text that doesn't match other handlers
  @On("text")
  async onText(@Ctx() ctx: Context) {
    await ctx.reply("Sorry, I did not understand that command.");
  }
}