function promesa(bye) {
    return 'Saludos ' + bye;
    
  }
  
  Promise.resolve('Adiós')
  
    .then(promesa)
    .then(console.log);