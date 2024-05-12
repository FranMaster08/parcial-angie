export function obtenerCodigoAscii(cadena: string): number[] {
  const codigosAscii: number[] = [];
  for (let i = 0; i < cadena.length; i++) {
    const codigo = cadena.charCodeAt(i);
    codigosAscii.push(codigo);
  }
  return codigosAscii;
}

export function compararCodigosAscii(cadena1: string, cadena2: string): boolean {
  const codigosAsciiCadena1 = obtenerCodigoAscii(cadena1);
  const codigosAsciiCadena2 = obtenerCodigoAscii(cadena2);

  // Comparar los códigos ASCII de ambas cadenas
  return (
    JSON.stringify(codigosAsciiCadena1) === JSON.stringify(codigosAsciiCadena2)
  );
}
export function obtenerCaracterAscii(numero: number): string {
    // Asegúrate de que el número esté dentro del rango ASCII válido (0-127)
    if (numero < 0 || numero > 127) {
        throw new Error('El número debe estar dentro del rango ASCII válido (0-127).');
    }
    
    // Usa String.fromCharCode para obtener el carácter ASCII
    const caracterAscii = String.fromCharCode(numero);
    return caracterAscii;
}

