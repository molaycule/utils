// flatten nested object
// link to replit: https://replit.com/talk/share/Nested-Object-Flattener/133000
let flattenNestedObject = (obj, key = null) => {
  return Object.keys(obj).reduce((acc, cur) => {
    let nestedKey = key ? `${key}.${cur}` : cur;
    
    if (typeof obj[cur] === "object" && obj[cur] !== null) {
      return {...acc, ...flattenNestedObject(obj[cur],  nestedKey)};
    }

    return {...acc, [nestedKey]: obj[cur]};
  }, {});
};

// Example
let obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
    e: 5,
    f: {
      g: 7,
      h: 8,
      i: {
        j: 10,
        k: 11,
        l: {
          m: 13,
          n: 14,
          o: {
            p: 16, 
            q: 17,
            r: {
              s: 19,
              t: 20,
              u: {
                v: 22,
                w: 23,
                x: null
              }
            }
          }
        }
      }
    }
  }
}

console.log(flattenNestedObject(obj));
