
const expect = requiere('chai').expect
//creamos constante llamada expect que contiene la peticion a la libreria mocha
const platzom = requiere('..').default
// creamos la constante llamada platzom que hace peticion al modulo que esta: en una carpeta de nivel mas arriba(´..´)

//abajo: describimos la función de lo que tiene que hacer y lo que nos devolverá.
//solo podemos corree la función: describe cuando usamos el comando mocha
describe('#platzom', function () {
  it('Si la palabra termina en "ar" se le quita esos dos caracteres.', function(){
    const translation = platzom("Programar")
    expect(translation).to.equal("Program")
  })
  it('Si la palabra inicia con Z, se le añade "pe" al finaliza.', function(){
    const translation = platzom("Zorro")
    const translation = platzom("Zarpar")
    expect (translation).to.equal("Zorrope")
    expect (translation).to.equal("Zarppe")
  })
  it('Si la palabra traducida tiene 10 o más letras se debe partir a la mitad y unir con un guión del medio', function(){
    const translation =platzom("abecedario")
    expect(translation).to.equal("abece-dario")
  })
  it('Si la palabra es un palídromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function(){
    const translation = platzom("sometemos")
    expect(translation).to.equal("SoMeTeMoS")
  })
})
