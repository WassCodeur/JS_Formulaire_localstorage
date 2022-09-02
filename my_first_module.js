 exports.MyModule= function () {
    var date = new Date();
    let time = ('0'+date.getHours()).slice(-2) + ":" + ('0'+date.getMinutes()).slice(-2) + ":" + ('0'+date.getSeconds()).slice(-2); 
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
    
    return (`${date.toLocaleDateString("fr-FR", options)} ${time}`)


}







        
     

        



