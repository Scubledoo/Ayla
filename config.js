const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6282298952644']
global.premium = ['6282298952644']
global.ownername = 'Gmstar685'
global.botname = 'NactBot'
global.packname = '© by NactBot'
global.gc = 'https://chat.whatsapp.com/Ky4LkH45m5f6TIXIP4S8EN'
global.linkyt = 'https://youtube.com/channel/UC9Si3U0o9dGS9MDfJR5iF6Q'
global.linkgc = 'https://chat.whatsapp.com/Ky4LkH45m5f6TIXIP4S8EN'
global.limitawal = '100'
global.author = '2022'
global.sessionName = 'polo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '❏'
global.mess = {
    success: 'Berhasil',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu sebentar, sedang di proses',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.gambar = 'https://telegra.ph/file/ddf67b6cec944aac06750.jpg' //disini gambar bot nya lu bisa ganti pink gambar ini dengan link gambar punya lu
global.sc = fs.readFileSync('./media/sc.jpg')
global.tq = fs.readFileSync('./media/tq.jpg')
global.menu = fs.readFileSync('./media/menu.jpg')
global.allmenu = fs.readFileSync('./media/allmenu.jpg')
global.thumb = { url: 'https://telegra.ph/file/ddf67b6cec944aac06750.jpg' }
global.visoka = { url: 'https://telegra.ph/file/769d88bb8c8357546a149.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
