setInterval(function(){
    let date_contener =document.getElementsByClassName('dte_bar')[0];
    let date = new Date()
    let dt =('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getMinutes()).slice(-2) + ":" + ('0'+date.getSeconds()).slice(-2);
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    date_contener.innerHTML= (`${date.toLocaleDateString("fr-FR", options)} ${dt}`)
},1000)