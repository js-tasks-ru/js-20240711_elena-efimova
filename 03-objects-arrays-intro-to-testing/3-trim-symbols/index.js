/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(stroka, size) {
 let res ="";
 let preres="";
 let i=1;
 if (size === undefined) {
    res = stroka;
  } else {
     if (size>0) {
        for (let char of stroka)
         {
        if (i<size || preres!=char) {
            res=res+char;
            if (preres!=char){
                preres=char;
                i=1;
 }          else if (i<size) {
                i=i+1;
                    }
                }        
            }
        }
    }
    return res;
}