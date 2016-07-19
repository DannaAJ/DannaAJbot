var TelegramBot = require('node-telegram-bot-api');
var token = '';

var bot = new TelegramBot(
   token, {
   polling:true
});

bot.getMe().then(function (me) {
   console.log('Hi my name is %s!', me.username);
});

bot.onText(/^\/soy (.+)$/, function (msg, match) {
    var name = match[1];
    console.log(msg);
   bot.sendMessage(msg.chat.id, `¡Hola, como has estado ${name} !?`).then(function (){
   console.log(`Saludando a ${name}`);
});
});


