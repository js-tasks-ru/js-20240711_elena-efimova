/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(stroka, size) {
    const res="";
    const i = 0;
    if (size === undefined) {
        res == stroka;
    }
    else 
    {
    while (i < stroka.length) {
        const current_str = stroka[i];
        const r = i;
        while (stroka[i] === current_str)
            {
                i = i++;
            }   
        res += current_str.repeat(i - r).slice(0, size);    
    }
        return res;
}
}
