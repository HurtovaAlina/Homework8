//====== Task 1 =============
function upperCase(str){
let regExp = /[A-Z]/y;
regExp.lastIndex = 0;
let result = regExp.test(str);
return result;
};

let str = 'AlIna'
if (upperCase(str)){
    console.log("String's starts with uppercase character");
} else {
    console.log("String's not starts with uppercase character");
}

//====== Task 2 =============
function checkEmail(mail){
    let regExp = /^\w+@[\w]+\.([a-z]{3})$/gi;
    let result = regExp.test(mail);
    return result;
    };
    
let mail = 'qma2il@miagl.moC'
checkEmail(mail);

//====== Task 3 =============


//====== Task 4 =============



//====== Task 5 =============
let string ="Java Script"
let result1= string.replace(/(\w+) (\w+)/i, '$2, $1');
console.log(result1);

//====== Task 6 =============
function checkmail(mail){
    let regExp = /^[^_-][\w-\d*]+@[\w\d]+(\.\w{2,4})$/;
     //   ^  beginig of the line,
    // \w  matches any alphanumeric character (plus underscore), equivalent to [A-Za-z_0-9]
    // - matches "-"
    // \. matches "."
    // \d matches any digit
    // * means zero or more (digit)
    // + match one or more
    // {2,4}   – matches 2 to 4 repetitions of the previous character
    // $ end of line
    let result = regExp.test(mail);
    return result;
    };
    
    let mail = 'my_mail@gmail.com'
if (checkmail(mail)){
    console.log("Email is correct!");
} else {
    console.log("Email is not correct!");
};

//====== Task 7 =============
function checklogin(login){
    let regExp = /^[A-Za-z]+(([0-9]+)(\.[0-9]+)*)?(([A-Za-z0-9]*)(([0-9]+)(\.[0-9]+)*)?)$/  
    let result = regExp.test(login);
    console.log(result);
    return result;
    };
    
function findNumbers(login){
   let regExpNum = /(\d\.\d)|\d/g;
   console.log(login.match(regExpNum));
}
    let login ='ee1*1ret3';
    checklogin(login);
    findNumbers(login);