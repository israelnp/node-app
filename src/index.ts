export function fatorial(numero: number): number | null {
    if (numero < 0) {
      return 1;
    }
  
    let acumulador = 1, resultado = 1;
  
    while(acumulador<=numero){
      resultado *= acumulador;
      acumulador++;
     }
  
    return resultado;
  }