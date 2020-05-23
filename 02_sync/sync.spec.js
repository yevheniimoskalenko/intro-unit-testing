const Lodash = require('./sync');

describe('Lodash: compact', () => {
   const _ = new Lodash();

   test('should be defined', () => {
      expect(_.compact).toBeDefined(); // должна быть определена
      expect(_.compact).not.toBeUndefined(); // not undefined
   });
   test('should remove falsy value from array', () => {
      const array = [false, 42, 0, '', true, null, 'hello'];
      const result = [42, true, 'hello'];
      expect(_.compact(array)).toEqual(result);
   });
});
