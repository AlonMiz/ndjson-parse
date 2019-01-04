
const parse = (jsonString) => {
  const type = typeof jsonString;
  if (type !== 'string') throw new Error(`Input have to be string but got ${type}`);

  const jsonRows = jsonString.split(/\n|\n\r/);
  return jsonRows.map(jsonStringRow => JSON.parse(jsonStringRow));
};


module.exports = parse;
