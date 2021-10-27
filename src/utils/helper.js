export function convertNumberToStringThousands(num){
    if(typeof num==='number'){
        if(num>1000){
            const roundedNum = (num/1000).toFixed(1) // rounds number to two decimals and returns a str.
            return `${roundedNum}k`;
        }else{
            return `${num}`
        }
    }
    else{
        return('input has to be a number');
    }
}