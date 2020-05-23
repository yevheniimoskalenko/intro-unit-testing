const axios = require('axios');
const Ajax = require('./async');

jest.mock('axios');
describe('Ajax: echo', () => {
   test('should return value async', async () => {
      const result = await Ajax.echo('some data');
      expect(result).toBe('some data');
   });
   test('should return value with promise', () =>
      Ajax.echo('some data').then(data => {
         expect(data).toBe('some data');
      }));

   test('should catch value with promise', () => {
      Ajax.echo().catch(error => {
         expect(error).toBeInstanceOf(Error);
      });
   });
   test('should catch value with async', async () => {
      try {
         await Ajax.echo();
      } catch (e) {
         expect(e.message).toBe('error');
      }
   });
});

describe('ajax get', () => {
   let response;
   let comments;
   beforeEach(() => {
      comments = [{ id: 1, title: 'Todo 1', completed: false }];
      response = {
         data: {
            comments,
         },
      };
   });

   test('should return data from backend', () => {
      axios.get.mockReturnValue(response);

      Ajax.get().then(data => {
         expect(data.comments).toEqual(comments);
      });
   });
});
