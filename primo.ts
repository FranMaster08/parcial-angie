export const PRIMO = (numeroSospechoso: number): number => {
  if (numeroSospechoso <= 1) {
    return 0;
  }
  for (let index = 2; index < numeroSospechoso; index++) {
    if (numeroSospechoso % index === 0) {
      return 0;
    }
  }
  return 1;
};

