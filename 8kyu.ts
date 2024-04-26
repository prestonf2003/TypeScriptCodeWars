export function setAlarm(employed: boolean, vacation: boolean) {
return(employed && !vacation)
}

export const fakeBin = (x:string):string => {
    let result = "";
  for (let char of x) {
    result += parseInt(char) > 5 ? "0" : "1";
  }
  return result;
  };
  
  console.log(fakeBin('45385593107843568'))