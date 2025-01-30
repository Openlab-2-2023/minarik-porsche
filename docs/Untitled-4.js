function    findChar(str, char) {
for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
    return `${char} nachadza sa na pozicii ${i}`;
}
}
return `${char} nachadza sa v texte $`;
}

console.log(findChar("hello","l"));

function countString(str){

}




function slovoPoZnakoch(slovo) {
    for (var i = 0; i < slovo.length; i++) {
        if (slovo[i] === "H") {
            console.log("JE TO ONO");
        }
        console.log(slovo[i]);
    }
}

slovoPoZnakoch("HELLO");



function najdiZnakVSlove(slovo, znak) {
    for(var i = 0; i < slovo.length; i++) {

        if(slovo[i] === znak) return "Znak " + znak + " sa nasiel na pozicii - " + i;
    }
    return "Znak sa nenasiel";
}

console.log(najdiZnakVSlove("Daniel", "n"))


function otocSlovo(slovo) {
    return slovo.split('').reverse().join('');
  }
  
  let slovo = "HELLO";
  let otocene = otocSlovo(slovo);
  console.log(otocene); 
  