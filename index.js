// class user{
//     constructor(nom, prenom) {
//         this.nom = nom;
//         this.prenom = prenom;
//     }
//     login(){
//         console.log(`${this.nom} connecté`);
//     };
//     logout(){
//         console.log(`${this.nom} connecté`);
//     }
// }


// let user1 = new user('WassCoseur','Desamos');
// let user2 = new user('Ali','Rabi')
// let UseList =[user1, user2]

// console.log(UseList);
let dates =document.getElementById('date')
var date = new Date();
let time = date.getHours() + ":" + ('0'+date.getMinutes()).slice(-2) + ":" + ('0'+date.getSeconds()).slice(-2); 
var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
// let diplayDate =(`${date.toLocaleDateString("fr-FR", options)} ${time}`);
dates.innerHTML= (`${date.toLocaleDateString("fr-FR", options)} ${time}`)