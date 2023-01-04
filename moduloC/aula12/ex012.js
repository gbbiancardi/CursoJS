var agora = new Date()
var hora = agora.getHours() // pegar hora do sistema

if (hora < 12 && hora >= 0) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log(`Bom dia!`)
} else if (hora < 18 && hora >= 12) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log(`Boa tarde!`)
} else if (hora < 24 && hora >= 18) {
    console.log(`Agora são exatamente ${hora} horas.`)
    console.log(`Boa noite!`)
} else {
    console.log(`${hora} não é um horário válido.`)
}