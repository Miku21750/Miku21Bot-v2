let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '20'
let sp = '35'
let sv = '70'
//premium
let ph = '2'
let pn = '5'
let pp = '20'
let pv = '35'
let ppm = '100'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 minggu)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Pro:* _${pp}k (4 bulan)_
┊⫹⫺ *Vip:* _${pv}k (8 bulan)_                                               
┊⫹⫺ *Permanent (jual script bot):* = _${ppm}k (Unlimited)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa Telkomsel:* [${ppulsa}]
• *Dana:* [${pdana}]
• *Gopay:* [${pgopay}]
• *Shopee:* [${povo}]
• *Saweria:* https://saweria.co/Miku21Margareth

–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌

*example*
*.order text*
`
m.reply(info)
}

handler.help = ['sewa', 'premium']
handler.tags = ['info']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
