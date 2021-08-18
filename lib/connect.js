const { WAConnection } = require("@adiwajshing/baileys")
const chalk = require('chalk')
const fs = require("fs")
const exec = require('child_process')

const broz = new WAConnection()
exports.broz = broz

exports.connect = async() => {
    broz.version = [2, 2119, 6]
    console.log(chalk.keyword("blue")('◦ Conectando ◦'))
    let auth = './Broz.json'
    samu330.logger.level = 'warn'
    samu330.on("qr", () => {
        console.log(chalk.keyword("yellow")('🌀 Escanea el codigo...'))
    })
    fs.existsSync(auth) && broz.loadAuthInfo(auth)
    broz.on('connecting', () => {
        console.log(chalk.whiteBright("⌛"), chalk.keyword("red")("□ Estado de TenaBot"), chalk.keyword("aqua")("Connecting..."))
    })
        broz.on('open', () => {
        console.log(chalk.keyword("green")('╒═══ '), chalk.keyword("blue")('⌈ '), chalk.keyword("aqua")('CONECTADO'), chalk.keyword("blue")(' ⌉'), chalk.keyword("green")(' ═══'))
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("WA Version : "), chalk.whiteBright(broz.user.phone.wa_version))
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Version : "), chalk.whiteBright(broz.user.phone.os_version))
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Device : "), chalk.whiteBright(broz.user.phone.device_manufacturer))
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("Model : "), chalk.whiteBright(broz.user.phone.device_model))
        console.log(chalk.keyword("green")("├"), chalk.keyword("aqua")("OS Build Number : "), chalk.whiteBright(broz.user.phone.os_build_number))
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╮'))
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("yellow")('       BIENVENIDO'))
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("aqua")(' Creditos:'))
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('│'), chalk.keyword("magenta")(' Broz | MankBarBar'))
        console.log(chalk.keyword("green")("│"), chalk.keyword("red")('╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╯'))
        const authInfo = samu330.base64EncodedAuthInfo()
        fs.writeFileSync(auth, JSON.stringify(authInfo, null, '\t'))
    })
    await broz.connect({ timeoutMs: 30 * 1000 })
    return broz
}
