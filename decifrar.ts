import { password } from "./contraSecreta";
import {
  compararCodigosAscii,
  obtenerCaracterAscii,
  obtenerCodigoAscii,
} from "./codigoAscii";
let contador = 0;

// BASE ( POR EL NUMERO DE COMBINACIONES POSIBLES )
// EXPONENTE ( NUMERO DE CIFRAS)

for (let a = 0; a <= 127; a++) {
  for (let b = 0; b <= 127; b++) {
    // for (let c = 0; c <= 127; c++) {
    //   for (let d = 0; d <= 127; d++) {
    //     for (let e = 0; e <= 127; e++) {
    //       for (let f = 0; f <= 127; f++) {
            contador++;
            const cifra1 = obtenerCaracterAscii(a);
            const cifra2 = obtenerCaracterAscii(b);
            // const cifra3 = obtenerCaracterAscii(c);
            // const cifra4 = obtenerCaracterAscii(d);
            // const cifra5 = obtenerCaracterAscii(e);
            // const cifra6 = obtenerCaracterAscii(f);

            if (
              compararCodigosAscii(
                `${cifra1}${cifra2}`,
                // ${cifra3}${cifra4}${cifra5}${cifra6}`,
                password
              )
            ) {
             
              console.log(`su contraseña es `, password);
              break;
            }
          }
        }
//       }
//     }
//   }
// }
console.log("numero de iteraciones :", contador);
