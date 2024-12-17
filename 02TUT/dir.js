const fs = require('fs')
if (!fs.existsSync('./new')) {  // if does not exist
    fs.mkdir('./new', (err) => {  // create new directory
        if (err) throw err
        console.log('Directory created')
    })
}

if (fs.existsSync('./new')) {  // if does not exist
    fs.rmdir('./new', (err) => {  // remove the directory
        if (err) throw err
        console.log('Directory removed')
    })
}

