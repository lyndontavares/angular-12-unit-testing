// funções criadas a partir da extenão copilot

export function calculateDaysBetweenDates(begin, end) {
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const diffTime = Math.abs(endDate.getTime() - beginDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export function ultimoDiaDomes(data) {
  const dia = new Date(data);
  dia.setDate(dia.getDate() + 1);
  return dia.getDate();
}

export function sumValues(...values) {
  return values.reduce((acc, value) => acc + value, 0);
}

export function getCountry() {

  return ['India', 'Russia', 'Japan', 'israel', 'France'];

}
