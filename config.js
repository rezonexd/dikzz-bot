
//~~~~~Setting Global~~~~~//
global.owner = ["6285358367670"],// Nomor Pemilik
global.bot = "6281361418407",// Nomor Bot
global.namabot = "Weer-Wabot",// Nama Bot
global.namaowner = "Dikzz-xD",
global.footer = "Dikzz",
global.onlygrub = true
global.mess = {
    wait: "⧽ *Wait* ⧼ Masih Proses Ya Bang",
    owner: "⧽ *Fitur* ⧼ Khusus Developer",
    group: "⧽ *Fitur* ⧼ Khusus Di Dalam Group",
    private: "⧽ *Fitur* ⧼ Khusus Private Chat",
    murbug: "⧽ *Fitur* ⧼ Khusus Pengguna Murbug",
    admin: "⧽ *Fitur* ⧼ Khusus Admin Group",
    botadmin: "⧽ *Bot* ⧼ Harus Admin Terlebih Dahulu"
    
}

//~~~~~Setting Saluran~~~~~//
//~~~~~Status Diperbarui~~~~~//
let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})