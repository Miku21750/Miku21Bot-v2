
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `⛊━─┈────────┈─━⛊
*🌱 Hewan   | 💲 Harga Jual*\n⛊━─┈────────┈─━⛊\n
🦀 Kepiting:      ${Skepiting} MIKO
🦞 Lobster:       ${Slobster} MIKO
🦐 Udang:         ${Sudang} MIKO
🦑 Cumi:           ${Scumi} MIKO
🐙 Gurita:         ${Sgurita} MIKO
🐡 Buntal:         ${Sbuntal} MIKO
🐠 Dory:            ${Sdory} MIKO
🐳 Orca:            ${Sorca} MIKO
🐬 Lumba:        ${Slumba} MIKO
🐋 Paus:           ${Spaus} MIKO
🦈 Hiu:              ${Shiu} MIKO
⛊━─┈────────┈─━⛊
🐃 Banteng:      ${Sbanteng} MIKO
🐅 Harimau:      ${Sharimau} MIKO
🐘 Gajah:           ${Sgajah} MIKO
🐐 Kambing:     ${Skambing} MIKO
🐼 Panda:         ${Spanda} MIKO
🐃 Kerbau:        ${Skerbau} MIKO
🐊 Buaya:         ${Sbuaya} MIKO
🐂 Sapi:            ${Ssapi} MIKO
🐒 Monyet:       ${Smonyet} MIKO
🐗 Babi Hutan: ${Sbabihutan} MIKO
🐖 Babi:             ${Sbabi} MIKO
🐔 Ayam:           ${Sayam} MIKO\n⛊━─┈────────┈─━⛊\n⛊━─┈────────┈─━⛊
🧪 *Contoh penggunaan :*
#pasar jual ayam
`.trim()
    try {
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'jual': 
                switch (_type) {                  
                     case 'banteng':
                        if (global.db.data.users[m.sender].banteng >= count * 1) {
                            global.db.data.users[m.sender].miko += Spaus * count
                            global.db.data.users[m.sender].banteng -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Banteng Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'harimau':
                        if (global.db.data.users[m.sender].harimau >= count * 1) {
                            global.db.data.users[m.sender].miko += Sharimau * count
                            global.db.data.users[m.sender].harimau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Harimau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gajah':
                        if (global.db.data.users[m.sender].gajah >= count * 1) {
                            global.db.data.users[m.sender].miko += Sgajah * count
                            global.db.data.users[m.sender].gajah -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Gajah Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kambing':
                        if (global.db.data.users[m.sender].kambing >= count * 1) {
                            global.db.data.users[m.sender].miko += Skambing * count
                            global.db.data.users[m.sender].kambing -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Kambing Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'panda':
                        if (global.db.data.users[m.sender].panda >= count * 1) {
                            global.db.data.users[m.sender].miko += Spanda * count
                            global.db.data.users[m.sender].panda -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Panda Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buaya':
                        if (global.db.data.users[m.sender].buaya >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbuaya * count
                            global.db.data.users[m.sender].buaya -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Buaya Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kerbau':
                        if (global.db.data.users[m.sender].kerbau >= count * 1) {
                            global.db.data.users[m.sender].miko += Skerbau * count
                            global.db.data.users[m.sender].kerbau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Kerbau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'sapi':
                        if (global.db.data.users[m.sender].sapi >= count * 1) {
                            global.db.data.users[m.sender].miko += Ssapi * count
                            global.db.data.users[m.sender].sapi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Sapi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'monyet':
                        if (global.db.data.users[m.sender].monyet >= count * 1) {
                            global.db.data.users[m.sender].miko += Smonyet * count
                            global.db.data.users[m.sender].monyet -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Monyet Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babi':
                        if (global.db.data.users[m.sender].babi >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].babi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Babi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babihutan':
                        if (global.db.data.users[m.sender].babihutan >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbabihutan * count
                            global.db.data.users[m.sender].babihutan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Babi Hutan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ayam':
                        if (global.db.data.users[m.sender].ayam >= count * 1) {
                            global.db.data.users[m.sender].miko += Sayam * count
                            global.db.data.users[m.sender].ayam -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ayam Kamu Tidak Cukup`.trim(), m)
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.data.users[m.sender].kepiting >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].kepiting -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Kepiting Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ikan':
                        if (global.db.data.users[m.sender].ikan >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].ikan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'dory':
                        if (global.db.data.users[m.sender].dory >= count * 1) {
                            global.db.data.users[m.sender].miko += Sdory * count
                            global.db.data.users[m.sender].dory -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Dory Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gurita':
                        if (global.db.data.users[m.sender].gurita >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].gurita -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Gurita Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buntal':
                        if (global.db.data.users[m.sender].buntal >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbuntal * count
                            global.db.data.users[m.sender].buntal -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Buntal Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'hiu':
                        if (global.db.data.users[m.sender].hiu >= count * 1) {
                            global.db.data.users[m.sender].miko += Shiu * count
                            global.db.data.users[m.sender].hiu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Hiu Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'orca':
                        if (global.db.data.users[m.sender].orca >= count * 1) {
                            global.db.data.users[m.sender].miko += Sorca * count
                            global.db.data.users[m.sender].orca -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Paus Orca Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'lumba':
                        if (global.db.data.users[m.sender].lumba >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].lumba -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Lumba Lumba Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'paus':
                        if (global.db.data.users[m.sender].paus >= count * 1) {
                            global.db.data.users[m.sender].miko += Spaus * count
                            global.db.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
                  case 'lobster':
                        if (global.db.data.users[m.sender].lobster >= count * 1) {
                            global.db.data.users[m.sender].miko += Slobster * count
                            global.db.data.users[m.sender].lobster -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Lobster Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'udang':
                        if (global.db.data.users[m.sender].udang >= count * 1) {
                            global.db.data.users[m.sender].miko += Sudang * count
                            global.db.data.users[m.sender].udang -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Udang Kamu Tidak Cukup`.trim(), m)
                        break
                      case 'cumi':
                        if (global.db.data.users[m.sender].cumi >= count * 1) {
                            global.db.data.users[m.sender].miko += Scumi * count
                            global.db.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Cumi Kamu Tidak Cukup`.trim(), m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }

        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
                       case 'banteng':
                        if (global.db.data.users[m.sender].banteng >= count * 1) {
                            global.db.data.users[m.sender].miko += Spaus * count
                            global.db.data.users[m.sender].banteng -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Banteng Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'harimau':
                        if (global.db.data.users[m.sender].harimau >= count * 1) {
                            global.db.data.users[m.sender].miko += Sharimau * count
                            global.db.data.users[m.sender].harimau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Harimau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gajah':
                        if (global.db.data.users[m.sender].gajah >= count * 1) {
                            global.db.data.users[m.sender].miko += Sgajah * count
                            global.db.data.users[m.sender].gajah -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Gajah Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kambing':
                        if (global.db.data.users[m.sender].kambing >= count * 1) {
                            global.db.data.users[m.sender].miko += Skambing * count
                            global.db.data.users[m.sender].kambing -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Kambing Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'panda':
                        if (global.db.data.users[m.sender].panda >= count * 1) {
                            global.db.data.users[m.sender].miko += Spanda * count
                            global.db.data.users[m.sender].panda -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Panda Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buaya':
                        if (global.db.data.users[m.sender].buaya >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbuaya * count
                            global.db.data.users[m.sender].buaya -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Buaya Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'kerbau':
                        if (global.db.data.users[m.sender].kerbau >= count * 1) {
                            global.db.data.users[m.sender].miko += Skerbau * count
                            global.db.data.users[m.sender].kerbau -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Kerbau Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'sapi':
                        if (global.db.data.users[m.sender].sapi >= count * 1) {
                            global.db.data.users[m.sender].miko += Ssapi * count
                            global.db.data.users[m.sender].sapi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Sapi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'monyet':
                        if (global.db.data.users[m.sender].monyet >= count * 1) {
                            global.db.data.users[m.sender].miko += Smonyet * count
                            global.db.data.users[m.sender].monyet -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Monyet Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babi':
                        if (global.db.data.users[m.sender].babi >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbabi * count
                            global.db.data.users[m.sender].babi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Babi Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'babihutan':
                        if (global.db.data.users[m.sender].babihutan >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbabihutan * count
                            global.db.data.users[m.sender].babihutan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Babi Hutan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ayam':
                        if (global.db.data.users[m.sender].ayam >= count * 1) {
                            global.db.data.users[m.sender].miko += Sayam * count
                            global.db.data.users[m.sender].ayam -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ayam Kamu Tidak Cukup`.trim(), m)
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.data.users[m.sender].kepiting >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].kepiting -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Kepiting Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'ikan':
                        if (global.db.data.users[m.sender].ikan >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].ikan -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'dory':
                        if (global.db.data.users[m.sender].dory >= count * 1) {
                            global.db.data.users[m.sender].miko += Sdory * count
                            global.db.data.users[m.sender].dory -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Dory Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'gurita':
                        if (global.db.data.users[m.sender].gurita >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].gurita -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Gurita Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'buntal':
                        if (global.db.data.users[m.sender].buntal >= count * 1) {
                            global.db.data.users[m.sender].miko += Sbuntal * count
                            global.db.data.users[m.sender].buntal -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Ikan Buntal Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'hiu':
                        if (global.db.data.users[m.sender].hiu >= count * 1) {
                            global.db.data.users[m.sender].miko += Shiu * count
                            global.db.data.users[m.sender].hiu -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Hiu Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'orca':
                        if (global.db.data.users[m.sender].orca >= count * 1) {
                            global.db.data.users[m.sender].miko += Sorca * count
                            global.db.data.users[m.sender].orca -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Paus Orca Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'lumba':
                        if (global.db.data.users[m.sender].lumba >= count * 1) {
                            global.db.data.users[m.sender].miko += Skepiting * count
                            global.db.data.users[m.sender].lumba -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Lumba Lumba Kamu Tidak Cukup`.trim(), m)
                        break
                        case 'paus':
                        if (global.db.data.users[m.sender].paus >= count * 1) {
                            global.db.data.users[m.sender].miko += Spaus * count
                            global.db.data.users[m.sender].paus -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Paus Kamu Tidak Cukup`.trim(), m)
                        break
                  case 'lobster':
                        if (global.db.data.users[m.sender].lobster >= count * 1) {
                            global.db.data.users[m.sender].miko += Slobster * count
                            global.db.data.users[m.sender].lobster -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Lobster Kamu Tidak Cukup`.trim(), m)
                        break
                     case 'udang':
                        if (global.db.data.users[m.sender].udang >= count * 1) {
                            global.db.data.users[m.sender].miko += Sudang * count
                            global.db.data.users[m.sender].udang -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Udang Kamu Tidak Cukup`.trim(), m)
                        break
                      case 'cumi':
                        if (global.db.data.users[m.sender].cumi >= count * 1) {
                            global.db.data.users[m.sender].miko += Scumi * count
                            global.db.data.users[m.sender].cumi -= count * 1
                            conn.reply(m.chat, `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} MIKO `.trim(), m)
                        } else conn.reply(m.chat, `Cumi Kamu Tidak Cukup`.trim(), m)
                        break                                        
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}

handler.help = ['pasar <jual> <args>']
handler.tags = ['rpg']
    
handler.command = /^(pasar|jual)$/i
export default handler 
