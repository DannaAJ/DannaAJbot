var TelegramBot = require('node-telegram-bot-api');
var token = ' ';

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

bot.onText(/^\/alerta (.+)$/, function (msg, match) {
    var name = match[1];
    var foto = msg.chat.id;
    console.log(msg);
   file = "assets/images/imprimir.png";
   bot.sendPhoto(foto, `${file}`).then(function (){
   console.log(`Enviando ${name}`);
});
});

bot.onText(/^\/adventure (.+)$/, function (msg, match) {
    var name = match[1];
    var au = msg.chat.id;
    console.log(msg);
   fileAu = "assets/audio/adventure.mp3";
   bot.sendAudio(au, `${fileAu}`).then(function (){
   console.log(`Enviando ${name}`);
});
});  

bot.onText(/^\/ubicacion (.+)$/, function (msg, match) {
     var name = match[1];
    var loc = msg.chat.id;
    console.log(msg);
   bot.sendLocation(loc, 20.0752211, -98.4064796).then(function (){
   console.log(`Enviando ${name}`);
});
}); 

