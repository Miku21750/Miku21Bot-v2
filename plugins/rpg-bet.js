async function handler(m, { conn, args }) {
    let user = global.db.data.users[m.sender]
    let count = (args[0] && Number(args[0]) ? Math.max(parseInt(args[0]), 1) : 0) * 1
    if ((user.miko * 1) < count) return m.reply('💹 Miko kamu tidak cukup!!')
    let Bot = (Math.ceil(Math.random() * 91)) * 1
    let Kamu = (Math.floor(Math.random() * 71)) * 1
    let status = 'Kalah'
    if (Bot < Kamu) {
        user.miko += count * 1
        status = 'Menang'
    } else if (Bot > Kamu) {
        user.miko -= count * 1
    } else {
        status = 'Seri'
        user.miko += (Math.floor(count / 1.5)) * 1
    }
    m.reply(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*👤 KAMU:*    ${Kamu}

Kamu *${status}*, kamu ${status == 'Menang' ? `Mendapatkan *+${count * 2}*` : status == 'Kalah' ? `Kehilangan *-${count * 1}*` : `Mendapatkan *+${Math.floor(count / 1.5)}*`} MIKO 💹
`.trim())
}

handler.help = ['judi [jumlah]']
handler.tags = ['rpg']
handler.command = /^(judi|bet)$/i

export default handler
