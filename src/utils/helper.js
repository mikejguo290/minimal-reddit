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

// helper function to unescape html strings with &lt; for tags.
export function htmlDecode(input){
    var doc = new DOMParser().parseFromString(input,'text/html');
    return doc.documentElement.textContent;
}

// helper function to return object with __html property to set innerHTML in react. 
export function createMarkup(htmlInput){
    return {
        __html: htmlDecode(htmlInput),
    }
}