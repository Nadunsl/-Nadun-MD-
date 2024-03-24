const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94781352903'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:51cf5426bEf12BHfd6C66bHbdfH32eFa@roundhouse.proxy.rlwy.net:35783"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Nadunsl/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94781352903"
global.devs = '94761516805';
global.website = 'https://github.com/Nadunsl/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0V4N1haNEozTkxKanYva1RHeWQ5WVBySmVybnpLQmMvRSt5VkUrNWhYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGFKVzhWK29WNlI2RWU1RFNpaXpoZEtQbTBUVVZqeGZIREtlUEhjZzFWdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQS9jZmNMUHVEb3Q4a2RrblQzcTNJdFBLWVJhbW42SmFkTU1OUXBFWm1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoZVRkVndLYlp1aUUrNUV1c1I5ekJDbEV5TDZUblRHZmUwWlZLNWFuY2tjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBBeWFzWERjaTRaMXpvTXRDM3NyZmM4UEQwOWxIS2YxQm95S284Wjg0VWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBPbTl0TGRYaml5b0cyNDMvd1F2NjBtWW5PdkVqaWhlekh2Q3N3b2NualU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtQYkhYN0QyOUFiVWFmalh6SndYd1ZUOS82Mk5iK3g4QVRqZ1ZzMUVWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEgzTUxJUFg5RS9pU0Z5R3RqU1M5YmNXeXZLQ2V6OEVnbkxvdFczSzVTST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlR1WG9oam1jOU9CTGV4VUFwUWRMOFd6Mkd2UjlvSWdLSVMxTUVJQ1BkQ1lOSG1JclZJRmRWRStuUm5LT0lkNWM3RTY5VlVPRXRGNFV3M0tmQUFQbmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE0LCJhZHZTZWNyZXRLZXkiOiJ3YlREbG5kbFdSY1NFNFZuY0Q5Z3NrQTE3TU92eHdWMUpFMkY5cjVtVVA0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwdmttbzlLZFRFUzlsSl9YQVNrYTVnIiwicGhvbmVJZCI6ImU0MzdjOWQxLThkNmMtNDlmNS05YTkzLWNkNmZhZmE3NTgxNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYQ0NlbXJTZFFjNHUyQkZSTEpYTTlJdklJdFU9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFNa0svWE1OYnMzSHVVQjg0ckw0M2JrYk9xST0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wzSjkvNEdFUHZjOWE4R0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlltdnlrUDFuQUNFNTJUQmFYcmROV21YSUtFMHR1dTJDcmtHWXI4QzJsMHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imlsdm5PRkcyTDhoQ1BhQml0ZENuWDNvSSsrV25CNk1kTG9iMWQrMEtUOVRIZDVpWmlNcjYzZkxLOERKeGNNVDJxaUxjS0k0TUQrSlN3eENKZXpLT0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJnTzNmRjlweGF6bFRlL3hwYkoyRkwxMmxoUjBiNi9zckZDbjRlTEtxc3FNQ3B3YlhyRDRLeTFWMlJERlMrM1ptL0dwK2ZiUkZ1aVZrMGdDeGJ0ZE9nQT09In0sIm1lIjp7ImlkIjoiOTQ3NjA0MDUxMDI6MjlAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA0MDUxMDI6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0pyOHBEOVp3QWhPZGt3V2w2M1RWcGx5Q2hOTGJydGdxNUJtSy9BdHBkTCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxMTEwNzcxMn0="
author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
 packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? true : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '👋Hey there im online🥳☘' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '3b2f7680-ce96-401a-b525-bd386344c9f4' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'sithuwa-gx2' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
