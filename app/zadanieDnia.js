//Twój kod

const fs = require('fs');


process.argv.forEach((val, index) => {
    if(index>1) {
        fs.readFile(`./data/zadanieDnia/${val}`, "utf8", (err,data)=>{
            if(err === null) {
                console.log("zawartość pliku: ", data)
                let res = data.split("");
                for(let i=0; i<res.length; i++){
                    if(!(i%2)) {
                        res[i] = res[i].toUpperCase()
                    }
                    else {
                        res[i] = res[i].toLowerCase()
                    }
                }
                res = res.join("")
                console.log(res)
                fs.writeFile(`./data/zadanieDnia/${val}`, res, err => {
                    if(err === null){
                        console.log("zapisano pomyślnie")
                    }
                    else {
                        console.log("Błąd podczas zapisu", err)
                    }
                })
            }
            else {
                console.log("Błąd poczas odczytu pliku:", err)
            }

        })
    }
});
