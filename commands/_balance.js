/*CMD
  command: /balance
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let res = Libs.ResourcesLib.userRes("money");
if (request.chat.type == "private"){
  res.set(10);
  Bot.sendMessage(user.first_name + " money: " + res.value());
  }else{
let chatres = Libs.ResourcesLib.chatRes("money");
chatres.set(100);
Bot.sendMessage(request.chat.title + " money: " + chatres.value());
}
