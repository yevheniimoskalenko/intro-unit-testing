function expect(val) {
   return {
      toBe: exp => {
         if (val === exp) {
            console.log('success');
         } else {
            console.error(`error ${val}`);
         }
      },
   };
}

const sum = (a, b) => a + b;
const nativeNull = () => null;
console.log(sum(1, 2));
module.exports = { sum, nativeNull };
// expect(sum(1, 3)).toBe(3)
