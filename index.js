const heroName = 'Link'
let experiencePoints = 100

let level = 'Ferro'

if (experiencePoints > 10001) {
  level = 'Radiante'
} else if (experiencePoints > 9001) {
  level = 'Imortal'
} else if (experiencePoints > 8001) {
  level = 'Ascendente'
} else if (experiencePoints > 7001) {
  level = 'Platina'
} else if (experiencePoints > 5001) {
  level = 'Ouro'
} else if (experiencePoints > 2001) {
  level = 'Prata'
} else if (experiencePoints > 1001) {
  level = 'Bronze'
}

console.log(`O Herói de nome ${heroName} está no nível de ${level}`) 
