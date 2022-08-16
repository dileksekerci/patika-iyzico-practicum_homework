//ekranda popap açılmasını sağlayan bölüm
let fullName = prompt("Lütfen Adınızı Giriniz: ")

//açılan popap ekrandan gelen değeri Html koda dönüştürerek gönderen bölüm
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} <strong>${fullName}</strong>`

//date isminde bir değiken oluşturduk 
let date = new Date();

//Tarih ve saati o günün tarih saatini ayarlayan fonsiyon
function dateTime() {
    var date = new Date();
    var days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    hour = date.toLocaleTimeString();
    document.getElementById("myClock").innerHTML = hour + "  " + days[date.getDay()];
}


// her 1 saniyede dateTime fonksiyonunu yeniden çalıştır
setInterval(dateTime, 1000);