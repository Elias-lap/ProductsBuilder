

/**
 * 
 * @param txt{string} The input string that you want to slice.
 * @param max {number} The maximum length of the sliced string. If not provided, it defaults to 50. 
 * @returns It then checks if the length of the input string txt is greater than 
 * or equal to the max length. If it is, it slices the string from
 *  the beginning up to the max length and appends
 *  "..." to indicate that it has been truncated. Otherwise, it returns the original string.
 */
export function txtSlicer ( txt : string , max : number =50){
  if( txt.length >=  max ) return `${txt.slice(0,max)} ...`
}
