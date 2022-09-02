function validation(){
//recuperation des valeurs des inputs
    let input_nom =document.getElementById('nom').value
    let input_prenom =document.getElementById('prenom').value
    let input_birthday=document.getElementById('birthday').value
    let input_mail=document.getElementById('mail').value
    let input_phone=document.getElementById('phone').value
    let input_sexe=document.getElementById('sexe').value
    let inputs_values=`${input_nom} ${input_prenom} ${input_birthday} ${input_mail} ${input_phone} ${input_sexe}`
//creation du champ de selection et des boutons d'action
    let x = document.createElement("INPUT")
        x.setAttribute("type", "checkbox");
    var afficher = document.createElement("a");
        afficher.setAttribute("class", "fas fa-eye");
        afficher.style.margin='10px'
    var comment = document.createElement("a");
        comment.style.margin='10px'
        comment.setAttribute("class", "fa-solid fa-comment");
    var supp = document.createElement("a");
        supp.setAttribute("class", "fa-solid fa-square-xmark");
        supp.style.margin='10px'
    var modifier =document.createElement("a");
        modifier.setAttribute("class", "fa-solid fa-pencil");
        modifier.style.margin='10px'



//creation des balise tr et td dans le tbody
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

//creattion des noeuds contenant les valeurs des inputs
    const node_nom = document.createTextNode(input_nom);
    const node_prenom= document.createTextNode(input_prenom);
    const node_birthday = document.createTextNode(input_birthday);
    const node_mail = document.createTextNode(input_mail);
    const node_phone = document.createTextNode(input_phone);
    const node_sexe = document.createTextNode(input_sexe);

//mise des noeuds dans les tds ; le checkbox dans le champ A et les bouttons dans d'action dans le champ qction
    td1.appendChild(x)
    actions.appendChild(afficher)
    actions.appendChild(comment)
    actions.appendChild(supp)
    actions.appendChild(modifier)
    nom.appendChild(node_nom);
    prenom.appendChild(node_prenom);
    birthday.appendChild(node_birthday);
    mail.appendChild(node_mail)
    phone.appendChild(node_phone)
    sexe.appendChild(node_sexe)

//mise des tds dans le tr
    ligne.appendChild(td1)
    ligne.appendChild(td2)
    ligne.appendChild(nom)
    ligne.appendChild(prenom)
    ligne.appendChild(birthday)
    ligne.appendChild(mail)
    ligne.appendChild(phone)
    ligne.appendChild(sexe)
    ligne.appendChild(actions)

//mise du tr dans le tbody

    tbody.appendChild(ligne)
    tableau.push(ligne)
    let LIGNE_string =JSON.stringify(tableau)
   localStorage.setItem('LIGNE', LIGNE_string)

// let tbody_string =JSON.stringify(inputs_values)
// localStorage.setItem('tbody', tbody_string)
let table =JSON.parse(localStorage.getItem("Value"))
tableau.push(inputs_values)
localStorage.setItem('Value', JSON.stringify(table ))

}
