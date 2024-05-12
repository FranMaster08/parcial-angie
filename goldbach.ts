import { PRIMO } from "./primo";

const cantidadPrimos = (numero: number): number => {
  let cantidadDePrimosEnImpar = 0;
  for (let index = 2; index < numero; index++) {
    if (PRIMO(index)) cantidadDePrimosEnImpar++;
  }
  return cantidadDePrimosEnImpar;
};

export const GOLDBATCH = (numero: number): string => {
  let contador = 0;
  if (PRIMO(numero) < 1) return "";
  for (let a = 2; a < numero; a++) {
    for (let b = 2; b < numero; b++) {
      for (let c = 2; c < numero; c++) {
        if (PRIMO(a) === 1 && PRIMO(b) === 1 && PRIMO(c) === 1) {
          contador++;
          if (a + b + c === numero) {
            const result = `${a}+${b}+${c}= ${numero}`;
            return result;
          }
        }
      }
    }
  }
  return "no hizo nada";
};
