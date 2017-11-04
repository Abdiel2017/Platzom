
function platzon(str) {
  let translation = str

  //-Si la palabra termina en "ar" se le quita esos dos caracteres.
  if (str.toLowerCase().endsWith('ar')){
  // Si el str convierte-a-minuscula y finaliza en "ar"
      translation = str.slice(0, -2)
  }
  //-Si la palabra inicia con Z, se le añade "pe" al finaliza
  if (str.toLowerCase().startsWith('z')) {
    translation = translation + 'pe'
  }
  //-Si la palabra traducida tiene 10 o más letras
  // se debe partir a la mitad y unir con un guión del medio
  if (translation.length >= 10) {
    const firstHalf = translation.slice(0, Math.round(translation.length/2))
    const secondHalf = translation.slice(Math.round(translation.length/2))
    translation = `${firstHalf}-${secondHalf}`
  }
  /* Si la palabra es un palídromo,
  ninguna regla anterior cuenta y se devuelve
  la misma palabra intercalando mayúsculas y minúsculas */
  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }
    return translation
  }
  if (str == reverse(str)){
    return minMay(str)
  }
  return translation
}

console.log(platzon("Programar"))
console.log(platzon("Zorro"))
console.log(platzon("Zarpar"))
console.log(platzon("murcielago"))
console.log(platzon("sometemos"))
