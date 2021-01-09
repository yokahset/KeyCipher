// Some program to encode or decode a string 

function keyArrayPrepare(string){
    // Takes a sentence, strips all non alpha characters, makes it lower case, converts that into an array
    var a = string.replace(/[^A-Za-z]/g, '');
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    a = a.toLowerCase();
    // Making an array fron the alphabet, adding it to the end of our key string
    // When this gets stripped into a set this makes the proper order for the keyphgrase cypher
    alpha = Array.from(alpha);
    var keyString = Array.from(a);
    keyString = keyString.concat(alpha);

    // Removes duplicates from array,
    var cipherKey = [...new Set(keyString)];

    // makes that array into a [[a, ?], [b, ?]] coded array
    var alphaKeyRel = [['a', 'a'], ['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'], ['f', 'f'], ['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'], ['k', 'k'], ['l', 'l'], ['m', 'm'], 
    ['n', 'n'], ['o', 'o'], ['p', 'p'], ['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'], ['u', 'u'], ['v', 'v'], ['w', 'w'], ['x', 'x'], ['y', 'y'], ['z', 'z'], [' ', ' ']];
    for (let index = 0; index < cipherKey.length; index++) {
        alphaKeyRel[index][1] = cipherKey[index];
    }
    return alphaKeyRel; 
}

// Takes a string to be encoded and a coded array and encrptys them
function encrpytIt(encodeString, codeArray) {
    var a = encodeString.replace(/[^A-Za-z ]/g, '');
    a = a.toLowerCase();
    var tilt = Array.from(a);
    var newArray = [];
    var i = 0;
    var x = 0;
    while (i < tilt.length) {
        if (tilt[i] == codeArray[x][0]) {
            newArray.push(codeArray[x][1]);
            x = 0;
            i++;
        } else if (tilt[i] != codeArray[x][0]) {
            x++;
        }
        
    } 
    var newString = newArray.join('');
    return newString;
}

function unEncrpytIt(gibberish, codeArray) {
    var a = gibberish.replace(/[^A-Za-z ]/g, '');
    a = a.toLowerCase();
    var tilt = Array.from(a);
    var newArray = [];
    var i = 0;
    var x = 0;
    while (i < tilt.length) {
        if (tilt[i] == codeArray[x][1]) {
            newArray.push(codeArray[x][0]);
            x = 0;
            i++;
        } else if (tilt[i] != codeArray[x][1]) {
            x++;
        }
        
    } 
    var newString = newArray.join('');
    return newString;
}

// Takes everything needed to encode
function encryptSentence(codePhrase, stringToTranslate) {
    const key = keyArrayPrepare(codePhrase);
    const b = encrpytIt(stringToTranslate, key);
    return b;
}

// Takes everything needed to decode
function unEncryptSentence(codePhrase, stringToTranslate) {
    const key = keyArrayPrepare(codePhrase);
    const b = unEncrpytIt(stringToTranslate, key);
    return b;
}

var phrase = "God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.";
var testString = "If you use this program, it can automate what is called a key phrase cipher. This cipher uses a phrase to reindex the alphabet and make an encryption.";

var encryptedMessage = encryptSentence(phrase, testString);

var x = document.getElementById("key-phrase").value; 
var z = document.getElementById("output").value;


// console.log(encryptSentence(phrase, testString)); // out: ru sl tuasrwh elrwy rrhet wlw ru hlrwh tl nro iwn lr sryy uysoyt

// console.log("\nI will now seek to translate this line.\n");

// console.log(unEncrpytSentence(phrase, encryptedMessage));

function test() {
  alert("FUUUUUUUCCCKKKKK");
}

function encrypt(){
    var x = document.getElementById("key-phrase").value; 
    var z = document.getElementById("output").value;
    var a = encryptSentence(x, z);
    document.getElementById("translate").innerHTML = a;
    document.getElementById("output").value = " ";
    
}

function decrypt(){
    var x = document.getElementById("key-phrase").value; 
    var z = document.getElementById("output").value;
    var a = unEncryptSentence(x, z);
    document.getElementById("translate").innerHTML = a;
    document.getElementById("output").value = " ";
    
    
}

function copyToClipboard() {
    var textBox = document.getElementById("translate");
    textBox.select();
    document.execCommand("copy");
}




















