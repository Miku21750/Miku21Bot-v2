
let handler = async (m, { conn, args, usedPrefix }) => {
    let info = `${htki} NOT FOUND ${htka}\n\n*➞ ᴇxᴀᴍᴘʟᴇ:* ${usedPrefix}feed kucing
- - - - - - - - - - - - - - - - - - - - - - - - - 
${htki} LIST PET ${htka}
🐈 • CAT
🐕 • DOG
🦊 • FOX
🐎 • HORSE
🎠 • CENTAUR
🐉 • DRAGON
🦒 • GRIFFIN
🦊 • KYUBI
🦅 • PHONIX`
    let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊' : '' || type == 'cat' ? '🐈' : '' || type == 'dog' ? '🐕' : '' || type == 'horse' ? '🐴' : '' || type == 'centaur' ? '🎠' : '' || type == 'dragon' ? '🐉' : '' || type == 'griffin' ? '🦒' : '' || type == 'kyubi' ? '🦊' : '' || type == 'phonix' ? '🦅' : '')
    let user = global.db.data.users[m.sender]
    let rubah = global.db.data.users[m.sender].fox
    let kuda = global.db.data.users[m.sender].horse
    let kucing = global.db.data.users[m.sender].cat
    let anjing = global.db.data.users[m.sender].dog
    let centaur = global.db.data.users[m.sender].centaur
    let dragon = global.db.data.users[m.sender].dragon
    let griffin = global.db.data.users[m.sender].griffin
    let kyubi  = global.db.data.users[m.sender].kyubi 
    let phonix  = global.db.data.users[m.sender].phonix 
    switch (type) {
        case 'fox':
            if (rubah == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (rubah == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
            break
        case 'cat':
            if (kucing == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (kucing == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (600000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.catngexp += 20
                    user.catlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)

                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catngexp -= (kucing * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
            break
        case 'dog':
            if (anjing == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (anjing == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (600000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
            break
        case 'horse':
            if (kuda == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (kuda == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 600000) {
                if (user.petFood > 0) {
                    user.petFood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!*  ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
            break
        case 'centaur':
            if (centaur == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (centaur == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktuce = (new Date - user.centaurlastfeed)
            let _waktuce = (600000 - __waktuce)
            let waktuce = clockString(_waktuce)
            if (new Date - user.centaurlastfeed > 600000) {
                if (user.makanancentaur > 0) {
                    user.makanancentaur -= 1
                    user.centaurexp += 20
                    user.centaurlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (centaur > 0) {
                        let naiklvl = ((centaur * 100) - 1)
                        if (user.centaurexp > naiklvl) {
                            user.centaur += 1
                            user.centaurexp -= (centaur * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!*  ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuce}*`)
            break
        case 'dragon':
            if (dragon == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (dragon == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktudr = (new Date - user.dragonlastfeed)
            let _waktudr = (600000 - __waktudr)
            let waktudr = clockString(_waktudr)
            if (new Date - user.dragonlastfeed > 600000) {
                if (user.makanannaga > 0) {
                    user.makanannaga -= 1
                    user.dragonexp += 20
                    user.dragonlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (dragon > 0) {
                        let naiklvl = ((dragon * 100) - 1)
                        if (user.dragonexp > naiklvl) {
                            user.dragon += 1
                            user.dragonexp -= (dragon * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!*  ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktudr}*`)
            break
        case 'griffin':
            if (griffin == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (griffin == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktugr = (new Date - user.griffinlastfeed)
            let _waktugr = (600000 - __waktugr)
            let waktugr = clockString(_waktugr)
            if (new Date - user.griffinlastfeed > 600000) {
                if (user.makanangriffin > 0) {
                    user.makanangriffin -= 1
                    user.griffinexp += 20
                    user.griffinlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (griffin > 0) {
                        let naiklvl = ((griffin * 100) - 1)
                        if (user.griffinexp > naiklvl) {
                            user.griffin += 1
                            user.griffinexp -= (griffin * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!*  ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktugr}*`)
            break
        case 'kyubi':
            if (kyubi == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (kyubi == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktukyu = (new Date - user.kyubilastfeed)
            let _waktukyu = (600000 - __waktukyu)
            let waktukyu = clockString(_waktukyu)
            if (new Date - user.kyubilastfeed > 600000) {
                if (user.makanankyubi > 0) {
                    user.makanankyubi -= 1
                    user.kyubiexp += 20
                    user.kyubilastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kyubi > 0) {
                        let naiklvl = ((kyubi * 100) - 1)
                        if (user.kyubiexp > naiklvl) {
                            user.kyubi += 1
                            user.kyubiexp -= (kyubi * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!*  ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktukyu}*`)
            break
        case 'phonix':
            if (phonix == 0) return m.reply(`${htki} NOT FOUND ${htka}\n\nʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!`)
            if (phonix == 10) return m.reply(`${htki} LEVEL MAX ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !`)
            let __waktuph = (new Date - user.phonixlastfeed)
            let _waktuph = (600000 - __waktuph)
            let waktuph = clockString(_waktuph)
            if (new Date - user.phonixlastfeed > 600000) {
                if (user.makananphonix > 0) {
                    user.makananphonix -= 1
                    user.phonixexp += 20
                    user.phonixlastfeed = new Date * 1
                    m.reply(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 100) - 1)
                        if (user.phonixexp > naiklvl) {
                            user.phonix += 1
                            user.phonixexp -= (phonix * 100)
                            m.reply(`${htki} LEVELUP ${htka}\n\n*ᴄᴏɴɢʀᴀᴛs!*  ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else m.reply(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else m.reply(`${htki} COOLDOWN ${htka}\n\nʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuph}*`)
            break
        default:
            return m.reply(info)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i

export default handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
