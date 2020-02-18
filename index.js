const NEWLINES_REGEX = /(\n|\r\n)/;

function lastIndexOfRegex(str, regex) {
  const match = str.match(regex);
  return match ? str.lastIndexOf(match[match.length - 1]) : -1;
}

const parse = (jsonString, ignoreLastIncompleteLine = false) => {
  const type = typeof jsonString;
  if (type !== 'string') throw new Error(`Input have to be string but got ${type}`);
  let jsonData = jsonString;
  if (ignoreLastIncompleteLine) {
    jsonData = jsonData.substr(0, lastIndexOfRegex(jsonString, NEWLINES_REGEX));
  }
  const jsonRows = jsonData.split(/\n|\n\r/).filter(Boolean);
  return jsonRows.map(jsonStringRow => JSON.parse(jsonStringRow));
};

module.exports = parse;
