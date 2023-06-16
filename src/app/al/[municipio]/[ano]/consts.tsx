import { municipios } from '../municipios'

export const ano = municipios.flatMap(municipio => {
  const years = [];
  for (let year = 2014; year <= 2023; year++) {
    years.push({ ...municipio, ano: year.toString() });
  }
  return years;
});


