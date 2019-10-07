//Twój kod
const fs = require('fs');

fs.readFile('./data/zadanie01/input.json', 'utf8', (err, data) => {
    if (err === null){
        let sum = JSON.parse(data).reduce((a,b)=>{
            return a+b
        })
        console.log(sum);
        fs.writeFile('./data/zadanie01/sum.txt', sum, (err) => {
            if(err === null) {
                console.log("zapis zakonczony powodzeniem")
            }
            else {
                console.log("Błąd podczas zapisu pliku", err)
            }
        })
    } else {
        console.log('Błąd podczas odczytu pliku!', err);
    }
});