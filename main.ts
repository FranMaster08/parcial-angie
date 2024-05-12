import { GOLDBATCH } from "./goldbach";

const main = () => {
  const extremoIzquierdo = 101;
  const extremoDerecho = 199;
  for (let index = extremoIzquierdo; index <= extremoDerecho; index++) {
    const result: string = GOLDBATCH(index);
    if (result.length > 0) console.log(result);
  }
};

main();
