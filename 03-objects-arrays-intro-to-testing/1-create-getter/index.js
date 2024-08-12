/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const arr = path.split(".");
    return function (obj) {
    let value = obj;
    for (const prop of arr) {
        if (Object.hasOwn(value, prop)){
            value = value[prop];
        } else 
            {
            return;
            }
        }
        return value;
        }
    }