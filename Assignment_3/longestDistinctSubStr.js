

let str = "habilelabas";
const longestSubString = (str) => {
    try {
      
        let longestStr = "";
        let checkStr = "";
        let length = str.length;
        for (let i = 0; i < length; i++) {
            if (!checkStr.includes(str[i])) {

                checkStr += str[i];

            } else {

                if (checkStr.length > longestStr.length) {

                    longestStr = checkStr;
                }
                checkStr = "";
            }
        }
        return longestStr;
    
    } catch (error) {

        console.log(error);
    }
}
console.log(longestSubString(str))