/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let arr_f = [...arr];
  return arr_f = Sort( (a, b) => {
  if param === 'asc' 
    return a.localeCompare(b,  ["ru", "en"], {caseFirst: 'upper'} );
  if param === 'desc
    return b.localCompare(a, ["ru", "en"], {caseFirst: 'lower'} );
  })
}

