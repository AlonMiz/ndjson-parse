const ndjsonParser = require('./index');

describe('Parse Ndjson', () => {
  it('should parse regular json', () => {
    const jsonObject = { some: 'thing' };
    const parsed = ndjsonParser(JSON.stringify(jsonObject));
    expect(parsed[0]).toEqual(jsonObject);
  });

  it('should parse \\n seperator', () => {
    const jsonObject = { some: 'thing' };

    const jsonString = JSON.stringify(jsonObject);
    const parsed = ndjsonParser(`${jsonString}\n${jsonString}`);
    expect(parsed[0]).toEqual(jsonObject);
    expect(parsed[1]).toEqual(jsonObject);
  });

  it('should parse \\r\\n seperator', () => {
    const jsonObject = { some: 'thing' };

    const jsonString = JSON.stringify(jsonObject);
    const parsed = ndjsonParser(`${jsonString}\n\r${jsonString}`);
    expect(parsed[0]).toEqual(jsonObject);
    expect(parsed[1]).toEqual(jsonObject);
  });

  it('should parse json with numbers and booleans', () => {
    const jsonObjectWithNumber = { some: 1 };
    const jsonObjectWithBoolean = { some: false };

    const parsed = ndjsonParser(`${JSON.stringify(jsonObjectWithNumber)}\n${JSON.stringify(jsonObjectWithBoolean)}`);
    expect(parsed[0]).toEqual(jsonObjectWithNumber);
    expect(parsed[1]).toEqual(jsonObjectWithBoolean);
  });

  it('should parse json with nested objects', () => {
    const jsonObject = { some: { nested: 'object' } };

    const jsonString = JSON.stringify(jsonObject);
    const parsed = ndjsonParser(`${jsonString}\n${jsonString}`);
    expect(parsed[0]).toEqual(jsonObject);
    expect(parsed[1]).toEqual(jsonObject);
  });

  it('should parse json with arrays', () => {
    const jsonObject = { some: ['a', 'r', 'r', 'a', 'y'] };

    const jsonString = JSON.stringify(jsonObject);
    const parsed = ndjsonParser(`${jsonString}\n${jsonString}`);
    expect(parsed[0]).toEqual(jsonObject);
    expect(parsed[1]).toEqual(jsonObject);
  });

  it('should parse combinations of all primitives', () => {
    const jsonObject = {
      number: 1,
      bool: false,
      some: { nested: 'object' },
      arr: ['a', 'r', 'r', 'a', 'y'],
    };
    const jsonString = JSON.stringify(jsonObject);
    const parsed = ndjsonParser(`${jsonString}\n${jsonString}`);
    expect(parsed[0]).toEqual(jsonObject);
    expect(parsed[1]).toEqual(jsonObject);
  });

  it('should parse json with empty lines', () => {
    const jsonObject = { some: { nested: 'object' } };
    const jsonString = JSON.stringify(jsonObject);
    const parsed = ndjsonParser(`\n\r${jsonString}\n\n\n\r${jsonString}\n`);

    expect(parsed.length).toEqual(2);
    expect(parsed[0]).toEqual(jsonObject);
    expect(parsed[1]).toEqual(jsonObject);
  });

  it('should throw error on invalid json', (done) => {
    try {
      ndjsonParser('{someBadJson,');
    } catch (e) {
      expect(e).toBeTruthy();
      done();
    }
  });

  it('should throw error when input is not string', (done) => {
    try {
      ndjsonParser({});
    } catch (e) {
      expect(e).toBeTruthy();
      done();
    }
  });
});
