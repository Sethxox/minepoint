// const truncatesText = (str: string) => {
//   if (str.length < 25) {
//     return str.substring(0, 25) + "...";
//   }
// };

// export default truncatesText;


export const truncatesText = (str: string) =>
{
    if (str.length < 25) return str;
    
    return str.substring(0, 25) + "...";
  
}