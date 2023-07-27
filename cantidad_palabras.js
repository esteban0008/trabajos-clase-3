function recortar (cantidadLetras, palabras){
    const word = palabras.map((numPalabra)=>{
     return numPalabra.slice(0, cantidadLetras)
     
 })
 console.log(word) 
 }
 
 console.log(recortar(3,["hola", "elefante"]))