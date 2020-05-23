const Ajax = require('./async');

describe('Ajax: echo', () => {
   test('should return value async', async () => {
      const result = await Ajax.echo('some data');
      expect(result).toBe('some data');
   });
});
