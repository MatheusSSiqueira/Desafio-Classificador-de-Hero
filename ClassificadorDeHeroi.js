//entrada de dados
let hero = "Super Dev"
let xp = 1000
let nivel
//variáveis para contabilizar a fase e o xp do jogador
let boss = 50
let bonus = 20
let fase 

//Processamento (Laço de repetição para contabilizar o xp por fase e estrutura de decisão para definir o nível do jogador)
for(let i = 0; i < 8; i++){
    fase = i + 1
    if(i == 5){
        boss = 100
        bonus = 50
    }
    xp += bonus - boss
    boss += 2
    bonus *= fase + 1

    if (xp <= 1000) {
        nivel = "Ferro"
    } else if (xp <= 2000) {
        nivel = "Bronze"
    } else if (xp <= 5000) {
        nivel = "Prata"
    } else if (xp <= 7000) {
        nivel = "Ouro"
    } else if (xp <= 8000) {
        nivel = "Platina"
    } else if (xp <= 9000) {
        nivel = "Ascendente"
    } else if (xp <= 10000) {
        nivel = "Imortal"
    } else {
        nivel = "Radiante"
    }

    // Saída de dados
    console.log(`O Herói de nome ${hero}, com xp de ${xp}, na fase ${fase}, está no nível ${nivel}`)
}
