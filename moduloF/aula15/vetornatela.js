let valores = [9, 1, 4, 5, 3, 8]

// Maneira nova, mais enxuta
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


// Maneira tradicional, "antiga"
/*
for (let pos=0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} 
*/