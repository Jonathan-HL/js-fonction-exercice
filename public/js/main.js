// Exo 1
let inverse = (nb) => {
    nb = nb + "";
    return Number(nb.split("").reverse().join(""));
}
console.log(inverse(815));
// Exo 2
let divPar2 = (nb1) => {
    switch (nb1%2==0) {         
        case true:             
                return(`Le num ${nb1} est divisible par 2 ${nb1}:2 =${nb1/2}`);           
        break;         
        case false:          
                return(`Le num ${nb1} 'nest pas divisible par 2`);               
        default:
            break;              
        } 
        }
        console.log(divPar2(6));
// Exo 3
let mdp = prompt("Introduit le bon mdp :");
let boucle = 0;
let logIn = (mdp) => {

                if (mdp == "admin") {
                    return("vous est connectes");
                }else{
                    return("mauvais mdp");
                }
            }
console.log(logIn(mdp));

