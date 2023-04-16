
function processData(input){


    const separaDados = input.trim().split('\n');
    const senhaCorreta = separaDados[0];
    const senhaDigitada = separaDados[1];

    const caracteres = senhaDigitada.split('');
    const senhaDigitadaSanitizada = caracteres.reduce(
      (acumulador, valorAtual) => {
        const letraSenhaCorreta = senhaCorreta[acumulador.length]
        if(valorAtual === letraSenhaCorreta) {
            return acumulador + valorAtual
        }
    
        return acumulador
      },'');
    
    if(senhaDigitadaSanitizada === senhaCorreta){
        console.log('SIM');
    } else{
        console.log('NAO');
    }
}

processData('cubos\ncuggbyos');