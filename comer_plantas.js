function comer(plantas) {
    const indiceConejo = plantas.indexOf('🐰');
    const indiceProhibido = plantas.indexOf('🚫');
  
    if (indiceConejo === -1 || indiceProhibido === -1) {
      
      return plantas;
    }
  
    const plantasSobrevivientes = plantas.slice(0, indiceConejo) + plantas.slice(indiceProhibido + 1);
  
    return plantasSobrevivientes;
  }
  
  const plantasEjemplo = '🌿🌿🌿🐰🌿🌿🚫🌿🌿'; 
  const resultado = comer(plantasEjemplo);
  
  console.log(resultado);