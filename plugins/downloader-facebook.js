import fetch from 'node-fetch'
import api from 'hxz-api'
import { fetchJson } from '../lib/scrape.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `🚩 *Example:* ${usedPrefix+command} https://www.facebook.com/ngakakocak/videos/video-lucu-dan-gokil/607085686836013`
// let f = await api.fbdown(text)
let anu = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=keymikulolhuman21&url=${text}`)
if (anu.status === "false") return 'Link tidak dapat didownload, coba lagi'
await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })   
let hasil = `*DOWNLOADER FACEBOOK*`
conn.sendFile(m.chat, anu.result[0], 'mp4', hasil, m)
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler