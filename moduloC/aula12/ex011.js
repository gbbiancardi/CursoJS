var idade = 66

if (idade < 16) {
    console.log(`Sua idade é ${idade}, você não pode votar.`)
} else if (idade < 18 || idade > 65) {
    console.log(`Sua idade é ${idade}, você pode votar, mas não é obrigado.`)
} else {
    console.log(`Sua idade é ${idade}, é obrigatório que você vote.`)
}