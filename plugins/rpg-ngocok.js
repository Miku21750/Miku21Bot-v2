let toM = a => '@' + a.split('@')[0]

let handler = async (m, { 
conn, usedPrefix, text, participants, groupMetadata
}) => {

    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastngocok)
    let _timers = (1800000 - __timers)
    let timers = clockString(_timers) 
    let pengocok = global.db.data.users[m.sender].registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    
    if (user.stamina < 20) return m.reply(`Stamina anda tidak cukup\nharap isi stamina anda dengan *${usedPrefix}eat*`)
    if (user.lastngocok !== 0){
      if (new Date - global.db.data.users[m.sender].lastngocok < 1800000) throw m.reply(`Kamu masih kelelahan\nHarap tunggu ${timers} lagi`)
    }
    
    
    let rndm1 = `${Math.floor(Math.random() * 10)}`
		let rndm2 = `${Math.floor(Math.random() * 10)}`
		let rndm3 = `${Math.floor(Math.random() * 10)}`
		let rndm4 = `${Math.floor(Math.random() * 10)}`
		let rndm5 = `${Math.floor(Math.random() * 10)}`
		let rndm6 = `${Math.floor(Math.random() * 10)}`
		let rndm7 = `${Math.floor(Math.random() * 10)}`
		let rndm8 = `${Math.floor(Math.random() * 10)}`
		let rndm9 = `${Math.floor(Math.random() * 100)}`
.trim()

let ran1 = (rndm1 * 10)
let ran2 = (rndm2 * 10)
let ran3 = (rndm3 * 10)
let ran4 = (rndm4 * 10)
let ran5 = (rndm5 * 10)
let ran6 = (rndm6 * 10)
let ran7 = (rndm7 * 10)
let ran8 = (rndm8 * 10)
let ran9 = (rndm9 * 10)

let hmsil1 = `${ran1}`
let hmsil2 = `${ran2}`
let hmsil3 = `${ran3}`
let hmsil4 = `${ran4}`
let hmsil5 = `${ran5}`
let hmsil6 = `${ran6}`
let hmsil7 = `${ran7}`
let hmsil8 = `${ran8}`
let hmsil9 = `${ran9}`

let jln = `
⬛⬛⬛⬛⬛⬛⬛⬛🚶⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

✔️ ${pengocok} Mencari Target....
`

let jln2 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛🚶
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🌳

➕ ${pengocok} Menemukan Target....
`

let jln3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🌳🌳🚶

➕ ${pengocok} Mulai Mengocok Bersama Target....
`

let jln4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳🌳🏘️ 🚶

➕ ${pengocok}
💹 Menerima Gaji Ngocok....
`

let hsl = `
*《 Hasil Ngocok ${pengocok} 》*

 *💎 = [ ${hmsil1} ] Diamond*
 *⛓️ = [ ${hmsil2} ] Iron*
 *🪙 = [ ${hmsil3} ] Gold*
 *💚 = [ ${hmsil4} ] Emerald*
 *🪨 = [ ${hmsil5} ] Rock*
 *🌕 = [ ${hmsil6} ] Clay*
 *🕳️ = [ ${hmsil7} ] Coal*
 *🌑 = [ ${hmsil8} ] Sand*
 *✉️ = [ ${hmsil9} ] Exp*
 
 Stamina anda berkurang -20
 *Korban Ngocok:* ${toM(a)}
`

user.diamond += ran1
		user.iron += ran2
		user.gold += ran3
		user.emerald += ran4
		user.batu += ran5
		user.clay += ran6
		user.coal += ran7
		user.sand += ran8
		user.exp += ran9
		user.stamina -= 20
	
setTimeout(() => {
    conn.reply(m.chat, hsl, m, { mentions: conn.parseMention(hsl) })
                     }, 27000) 
               
                     setTimeout(() => {
                     conn.reply(m.chat, jln4, m)
                      }, 25000)
                
                     setTimeout(() => {
                     conn.reply(m.chat, jln3, m)
                     }, 20000) 
                        
                     setTimeout(() => {
                     conn.reply(m.chat, jln2, m)
                     }, 15000) 
                    
                     setTimeout(() => {
                     conn.reply(m.chat, jln, m)
                     }, 10000) 
                     
                     setTimeout(() => {
                     conn.reply(m.chat, `🔍 ${pengocok} Mencari Area ngocok.....`, m)
                     }, 0) 
  user.lastngocok = new Date * 1
}
handler.help = ['ngocok']
handler.tags = ['rpg']
handler.command = /^(ngocok|mengocok)$/i
handler.group = true
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return ['\n' + d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}
