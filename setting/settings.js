// BASE RUZTANXD 

require("../all/module.js")

//========== Setting Owner ==========//
global.owner = "6285771756455"
global.namaowner = "xv.sydz"
global.namabot = "Ofc.SyadBotz"

//========== Setting Event ==========//
global.autoread = true
global.anticall = true
global.autoreadsw = false

//========== Setting Foto ===========//
global.imgreply = "https://files.catbox.moe/o4zbyj.png"
global.thumb = "https://files.catbox.moe/o4zbyj.png"
//global.imgmenu = fs.readFileSync("./media/Menu.jpg")

global.domainn = "-"
global.apikeyy = "-"
global.capikeyy = "-"

//========== Setting Panell ==========//
global.eggsnya = '15' // id eggs yang dipakai kalo id nya 5 biarin aja ini jangan di ubah
global.location = '1' // id location
global.limitawal = 5

global.domain = '-' // Isi Domain 
global.apikey = '-' // Isi Apikey Plta 
global.capikey = '-' // Isi Apikey Pltc 

//========= Setting Payment =========//
global.dana = "085883225704"
                             

//========= Setting Message =========//

global.msg = {
    done: '🤗 Done, Oke ~',
    wait: '⏳Memproses . . .',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    adminbot: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 15k Permanen* 😋',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 15k Permanen',
    developer: 'Command Ini Hanya Untuk Developer Bot!'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})