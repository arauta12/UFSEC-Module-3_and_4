// console.log('testing!')
//https://npmjs.com

// package.json: manages metadata and dependencies
// can do npm install: looks at package.json to find what to install
// npm i nodemon -D : add as a dependency

// package versions:
// "uuid": "8.3.2" (only this version)
// "uuid": "^8.3.2" (up date minor changes/patches)
// "uuid": "~8.3.2" (only last number - only patches)
// "uuid": "*" (update everything - latest version)

// installing a specific version
// npm i package_name@version_number

// check for updates
// npm update

// uninstall packages
// npm rm package_name (-D if dev_dependency or -g if global)

const { format } = require('date-fns')
const { v4: uuid } = require('uuid')
const fs = require('fs')
const fsPromises = require('fs').promises
const path = require('path')

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`
    console.log(logItem)
    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        // testing save
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem)
    } catch (err) {
        console.log(err)
    }
}

module.exports = logEvents

// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
// console.log(uuid())