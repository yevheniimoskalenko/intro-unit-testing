const Lodash = require('./sync');

const _ = new Lodash();

describe('Lodash: compact', () => {
   let array;
   beforeEach(() => {
      array = [false, 42, 0, '', true, null, 'hello'];
   });
   afterAll(() => {
      _ = new Lodash();
   });
   test('should be defined', () => {
      expect(_.compact).toBeDefined(); // должна быть определена
      expect(_.compact).not.toBeUndefined(); // not undefined
   });
   test('should remove falsy value from array', () => {
      const result = [42, true, 'hello'];
      expect(_.compact(array)).toEqual(result); // метод для сравнивание массивов обектов
   });
   test('should NOT contain falsy values', () => {
      expect(_.compact(array)).not.toContain(false); // не должен содржать такие значение false
      expect(_.compact(array)).not.toContain(0); // не должен содржать такие значение 0
      expect(_.compact(array)).not.toContain(''); // не должен содржать такие значение ''
      expect(_.compact(array)).not.toContain(null); // не должен содржать такие значение null
   });
   test('should working array values from array', () => {
      array.push(...['one', 'two']);
      expect(array).toContain('one');
      expect(array).toContain('two');
   });
});
describe('Lodash: grouBy', () => {
   test('should be defined', () => {
      expect(_.groupBy).toBeDefined(); // должна быть определена
      expect(_.groupBy).not.toBeUndefined(); // not undefined
   });
});
