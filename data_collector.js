function validation(){
   
    let input_nom =document.getElementById('nom').value
    let input_prenom =document.getElementById('prenom').value
    let input_birthday=document.getElementById('birthday').value
    let input_mail=document.getElementById('mail').value
    let input_phone=document.getElementById('phone').value
    let input_sexe=document.getElementById('sexe').value
    
let tbody =document.getElementsByClassName('tbody')[0];
let ligne =document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
let nom = document.createElement('td');
let prenom = document.createElement('td');
let birthday = document.createElement('td');
let mail = document.createElement('td');
let phone = document.createElement('td');
let sexe = document.createElement('td');
let actions = document.createElement('td');
//collection des données

const node_nom = document.createTextNode(input_nom);
const node_prenom= document.createTextNode(input_prenom);
const node_birthday = document.createTextNode(input_birthday);
const node_mail = document.createTextNode(input_mail);
const node_phone = document.createTextNode(input_phone);
const node_sexe = document.createTextNode(input_sexe);


nom.appendChild(node_nom);
prenom.appendChild(node_prenom);
birthday.appendChild(node_birthday);
mail.appendChild(node_mail)
phone.appendChild(node_phone)
sexe.appendChild(node_sexe)
ligne.appendChild(td1)
ligne.appendChild(td2)
ligne.appendChild(nom)
ligne.appendChild(prenom)
ligne.appendChild(birthday)
ligne.appendChild(mail)
ligne.appendChild(phone)
ligne.appendChild(sexe)
tbody.appendChild(ligne)

}