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
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRRdUFrcUVFNkxjNUVFckxtam5FdXkyb0UrSVdsbUhCZFZxSW53c1BYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmExZFlzQ2p1ZmNxeHhEK3BNWFFuN1dkcWo5L3VyRkc3Q2pNY2dMTmhIYz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTEM1NW43MDhFOW9iQ20vY295RlZCeXdrZkVCNkwvbFBLOU5IVmFtTkhVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhNlA5cUhRSmViMmlqcUppVzIzeThlMzRqeDV2NUJBOUpRSFpidTFHUGxJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNBdUFMVTIzeFZmZjhoMmw3SDlwSzBUYndMVkdoMFovU2lyUDVCd1ZIbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJ4VHBlTHNzR2VJSXZvRlFLN094ZFdhN1dqR210R0NWUFk5Z0E2WDdHZ1E9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2S3VGVDBCb2loWCs1Ui9Hd3Job2xGcENBUTRjblBabmlTNVZYLzc0VlRncWlQUVNEQnhZY2h4N0FCVGs2V28xTjJmUWp0V0xIZHM5SlAvaC9WeWhpQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjIxNCwiYWR2U2VjcmV0S2V5IjoiOVQwVXZpL3dhMCszSWI2bjZGQzR0NVU1WitZVnhZVHNXaHJxbHM1RFJlbz0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiTHd6OTgxV2pRSEtfdHZrSFkxa3FZZyIsInBob25lSWQiOiI2ODdiZTYxYi1iMGUxLTQxZWQtYjgwMS1mYjBjZjU4N2JhYWEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTN3VFVJZnh4V3dLWk5EMGxwMUNtT2l5SytZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZzZVdElwbkpFd29MendQN2lGT05sczZYOVk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMZkQrYlVHRUluVitLMEdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJpZ1VrS2JvODczWUJlQ1k1YzcyWktmNWxJL283eW53T3VKYUpjZ3U3aUFRPSIsImFjY291bnRTaWduYXR1cmUiOiJweTJrbzhBTW1tZUpPM0MwUUtmTjF6bUFVMnJ0SkR5czFORzZ5NC9KeEVGbmlaQi9aL2pOMUhzcnZZTmVPd3hsWmVGa2FNUmkwUDdoNU56aENQd2ZDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOEloZlozN3JvdHhmMjBxbnlpdmhGOVdYY0FxRnBvdHl1Vk5aSlVrdFlTZmZiQVI4dHpVZ3lFYmIrRGN1V0ZuWW5LSCsvUmg5ZU1VK0wrbGx0WE9IaWc9PSJ9LCJtZSI6eyJpZCI6Ijk0NzYwNDA1MTAyOjE0QHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYwNDA1MTAyOjE0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllvRkpDbTZQTzkyQVhnbU9YTzltU24rWlNQNk84cDhEcmlXaVhJTHU0Z0UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDY5NjE1NDl9",      //Put Your Session Id Here
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
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
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
 
