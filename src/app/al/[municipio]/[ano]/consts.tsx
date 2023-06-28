import { municipios } from '../municipios'

const currentYear = new Date().getFullYear();

export const ano = municipios.flatMap(municipio => {
  const years = [];
  for (let year = 2014; year <= currentYear; year++) {
    years.push({ ...municipio, ano: year.toString() });
  }
  return years;
});


