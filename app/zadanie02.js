//Twój kod

const fs = require('fs');

fs.readdir('./data/zadanie02', (err, files) =>{
    if (err === null){
        console.log("Lista plików:")
        files.forEach(file =>{
            fs.readFile(`./data/zadanie02/${file}`, 'utf8', (err, data)=>{
                if(err === null){
                    console.log("zawartość:", data)
                }
                else {
                    console.log("błąd odczytu pliku", err)
                }

            })
        })
    } else {
        console.log("błąd przy odczycie", err)
    }
})