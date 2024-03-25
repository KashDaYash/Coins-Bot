/*CMD
  command: *
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

if(!request){ return }

let new_members = request.new_chat_members;
let msg = "Hello, ";
let comma = "";

if(new_members.length > 0){
   for(var i=0; i<new_members.length; i++){
      msg = msg + comma + Libs.commonLib.getNameFor(new_members[i])
      comma = ", ";
   }
   msg = msg + "\n\nPlease ask public questions in this chat only. Do not write to admin.";
   Bot.sendMessage(msg, { is_reply: true });
   Bot.runCommand("/welcome-msg");
}
