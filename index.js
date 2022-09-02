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

//Affichage de la date et l'heure
function displayDte(){

}
setInterval(function () {
    let dates =document.getElementById('date')
var date = new Date();
let time = ('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getMinutes()).slice(-2) + ":" + ('0'+date.getSeconds()).slice(-2); 
var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
dates.innerHTML= (`${date.toLocaleDateString("fr-FR", options)} ${time}`)
}, 1000);

//Boites modales
let Modal1 =document.getElementById('modal')
let profile_btn=document.getElementsByClassName('profile')[0]
let close_btn1 =document.getElementsByClassName('close')[0];
profile_btn.addEventListener('click', displayModal1);
close_btn1.addEventListener('click', displayModal1);
function displayModal1(){
    if(Modal1.style.visibility =='hidden'){
        Modal1.style.visibility ='visible'
    }else{
        Modal1.style.visibility ='hidden'
    }}

    let Modal2 =document.getElementById('modal2');
    let add_btn=document.getElementsByClassName('add')[0];
    let close_btn2 =document.getElementsByClassName('close')[1];
    add_btn.addEventListener('click', displayModal2);
    close_btn2.addEventListener('click', displayModal2);
    function displayModal2(){
        if(Modal2.style.visibility =='hidden'){
            Modal2.style.visibility ='visible'
        }else{
            Modal2.style.visibility ='hidden'
        }
    };

//localstorage 
    //Saving data as key/value pair
    


