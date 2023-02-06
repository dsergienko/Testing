const sklonenie = require('sklonenie')

const bulgakov = sklonenie('Михаил', 'Афанасьевич', 'Булгаков')

console.log(
    bulgakov[1], // получение по названию
    bulgakov[2],
    bulgakov[3],
    bulgakov[4],
    bulgakov[5]           // получение по индексу (0–5)
)

