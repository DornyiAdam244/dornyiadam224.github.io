
function calculate() {
          input = document.querySelector("input").value
          fok = document.querySelector(".fok")
          halmazallapot = document.querySelector(".halmaz")
          fok.innerHTML = "Hőmérséklete:" + input + "°C"
          halmazallapot.innerHTML = ""
          if (input >= 100) {
                    halmazallapot.innerHTML += "Gőz"
          }
          else if (0 >= input) {
                    halmazallapot.innerHTML += "Jég"
          }
          else {
                    halmazallapot.innerHTML += "Cseppfolyós"
          }

}
var select = document.querySelector("select")
for (var i = 2; i <= 99; i++) {
          var option = document.createElement("option")
          option.value = i;
          option.innerHTML = i;
          //select.appendChild(option)
}
function szorzotabla() {

          var szorzando = document.querySelector(".szorzando")
          szorzando.innerHTML = ""
          var szorzo = select[select.selectedIndex].value;
          for (var i = 1; i < 20; i++) {
                    szorzando.innerHTML += i + "*" + select[select.selectedIndex].value + "=" + select[select.selectedIndex].value * i + " <br>"
          }
}
var student_list = [];
var new_grade = document.querySelector(".new-grade")

function new_student() {
          var nev = document.querySelector(".new-student").value;
          if (nev != "" && nev != null && nev != undefined) {

                    student_list.push(nev);
                    document.querySelector("tbody");
                    names = document.querySelector(".name")
                    names.innerHTML = nev

                    new_grade.style.display = "inline"
          }


}
var student_grades = []

function fasz() {
          grade = document.querySelector(".new-grades").value
          student_grades.push(grade)
          document.querySelector(".table-grades").innerHTML += grade + " ";

          document.querySelector(".count-grades").innerHTML = student_grades.length;
          var highest_grade = student_grades[0]
          var lowest_grade = student_grades[0];
          for (var i = 0; i < student_grades.length; i++) {
                    if (student_grades[i] > highest_grade) {
                              highest_grade = student_grades[i]
                    }
          }
          for (var i = 0; i < student_grades.length; i++) {
                    if (lowest_grade > student_grades[i]) {
                              lowest_grade = student_grades[i]
                    }
          }
          document.querySelector(".highest-grade").innerHTML = highest_grade;
          document.querySelector(".worst-grade").innerHTML = lowest_grade;
          var overall_sum = 0;
          for (var i = 0; i < student_grades.length; i++) {
                    overall_sum += student_grades[i]
          }
          document.querySelector(".average").innerHTML = overall_sum / student_grades.length;





}
var nevek = [];
function manualis() {
          do {
                    var nev = prompt("Adjon meg egy nevet: ");
                    nevek.push(nev);
          } while (nev != "" && nev != null);
          nevek.pop();
}

function eloreGeneral(n) {
          var adottNevek = ["Anna", "Laci", "Máté", "Ádám", "Kinga", "Jamal", "Adrián", "Szabolcs", "Péter", "Mike", "Ferenc"];
          for (var i = 0; i < n; i++) {
                    var j = Math.floor(Math.random() * adottNevek.length);
                    nevek.push(adottNevek[j]);
          }
}
function general(n) {
          var generaltNev;
          for (var i = 0; i < n; i++) {
                    generaltNev = "";
                    var nevHossz = Math.floor(4 + Math.random() * 5)
                    for (var j = 0; j < nevHossz; j++) {
                              generaltNev += String.fromCharCode(65 + Math.floor(Math.random() * 26));
                              if (j == 0) {
                                        generaltNev += String.fromCharCode(65 + Math.floor(Math.random() * 26));
                              } else {
                                        generaltNev += String.fromCharCode(97 + Math.floor(Math.random() * 26));
                              }
                    }
                    nevek.push(generaltNev);

          }
}
function ellenoriz() {
          var nevek = document.querySelector(".nevek");
          var gombok = document.querySelectorAll(".btn-warning");
          if (nevek.options.length == 0) {
                    for (var i = 0; i < gombok.length; i++) {
                              gombok[i].style.display = "block";
                    }
          } else {
                    for (var i = 0; i < gombok.length; i++) {
                              gombok[i].style.display = "none";
                    }
          }
}

function rendez(lista) {
          var mit = document.querySelector("." + lista);
          for (var i = 0; i < mit.options.length - 1; i++) {
                    for (var j = i + 1; j < mit.options.length; j++) {
                              if (mit.options[i].text > mit.options[j].text) {
                                        var csere = mit.options[i];
                                        mit.options[i] = mit.options[j];
                                        mit.options[j] = csere;
                              }
                    }
          }
}
tomb = [7, 11, 15, 18]
function kiir() {
          document.write("<h2>A tömb elemei:</h2>")
          for (var i = 0; i < tomb.length; i++) {
                    document.write(tomb[i] + " ")
          }
}
kiir()
var paros = [];
var paratlan = [];
for (var i = 0; i < tomb.length; i++) {
          if (tomb[i] % 2 == 0) {
                    paros.push(tomb[i])
          }
          else {
                    paratlan.push(tomb[i])
          }
}
document.write("<h2>A tömb páros elemei:</h2>")
for (var i = 0; i < paros.length; i++) {
          document.write(paros[i] + " ")
}
document.write("<h2>A tömb páratlan elemei:</h2>")
for (var i = 0; i < paratlan.length; i++) {
          document.write(paratlan[i] + " ")
}
var sum = 0;
var szorzat = 1
for (var i = 0; i < tomb.length; i++) {
          sum += tomb[i];
          szorzat *= tomb[i];
}
var atlag = sum / tomb.length;
document.write("<h2>A tömb összege,átlaga,szorzata:</h2>")
document.write("<p>A tömb összege " + sum + "</p>")
document.write("<p>A tömb átlaga " + atlag + "</p>")
document.write("<p>A tömb szorzata " + szorzat + ":</p>")
var max = tomb[0];
var maxi = 0;
for (var i = 0; i < tomb.length; i++) {
          if (tomb[i] > max) {
                    max = tomb[i];
                    maxi = i;
          }
}
var min = tomb[0];
var mini = 0;
for (var i = 0; i < tomb.length; i++) {
          if (min > tomb[i]) {
                    min = tomb[i];
                    mini = i;
          }
}
document.write("<h2>A tömb legkisebb, legnagyobb száma és azok előfordulásai:</h2>")
document.write("<p>A legnagyobb szám:   " + max + " és annak indexe: " + maxi + " </p>")
document.write("<p>A legkisebb szám:   " + min + " és annak indexe : " + mini + " </p>")
document.write("<h2>A tömb elemei fordított sorrendben: </h2>")

for (var i = tomb.length - 1; i >= 0; i--) {
          document.write(tomb[i] + " ")
}
var szamtani = true;
var diff = tomb[1] - tomb[0];

for (var i = 1; i < tomb.length; i++) {
          if ((tomb[i] - tomb[i - 1]) !== diff) {
                    szamtani = false;
                    break;
          }


}
tomb = [7, 34, 12, 4, 1, 2, 6]
document.write("<h2>A tömb számtani sorozat-e? </h2>")
if (szamtani) {
          document.write("Számtani sorozat.")
}
else {
          document.write("Nem az!")
}
for (var i = 0; i < tomb.length; i++) {
          for (var j = i + 1; j < tomb.length; j++) {
                    if (tomb[i] > tomb[j]) {
                              var csere = tomb[i]
                              tomb[i] = tomb[j]
                              tomb[j] = csere

                    }
          }
}
kiir()
document.write("<h2>A tömb mediánja</h2>")
if (tomb.length % 2 == 0) {
          var kozepso = tomb[tomb.length / 2];
          var kozepso2 = tomb[tomb.length / 2 - 1]
          document.write(kozepso + " " + kozepso2)
}
else if (tomb.length % 2 != 0) {
          var kozepso = tomb[Math.floor(tomb.length / 2)];
          document.write(kozepso)
}

const MAX = 6;
const N = 100;
const MIN = 1;
tomb = []
for (var i = 0; i < N; i++) {
          var szam = (MIN + Math.floor(Math.random() * (MAX - MIN + 1)))
          tomb.push(szam)
}
var statisztika = {

}
for (var i = 0; i < N; i++) {
          if (!statisztika[tomb[i]]) {
                    statisztika[tomb[i]] = 1
          }
          else {
                    statisztika[tomb[i]]++
          }

}
console.log(statisztika)
document.write("<h2>Statisztika tömb</h2>")
for (var key in statisztika) {
          document.write(JSON.stringify(key) + ":" + JSON.stringify(statisztika[key] + "<br>"))
}
tomb = []
document.write("<h2>Másik tömb</h2>")
const MAX2 = 100;
const N2 = 10;
const MIN2 = -30;
for (var i = 0; i < N2; i++) {
          var szam = (MIN2 + Math.floor(Math.random() * (MAX2 - MIN2 + 1)))
          tomb.push(szam)
}
for (var i = 0; i < N2; i++) {
          document.write(tomb[i] + " ")
}
var statisztika2 = {

}
for (var i = 0; i < N2; i++) {
          if (!statisztika2[tomb[i]]) {
                    statisztika2[tomb[i]] = 1
          }
          else {
                    statisztika2[tomb[i]]++
          }

}
console.log(statisztika2)
document.write("<h2>Statisztika tömb</h2>")
for (var key in statisztika2) {
          document.write(JSON.stringify(key) + ":" + JSON.stringify(statisztika2[key] + "<br>"))
}
var statisztika3 = {}
for (var i = 0; i < tomb.length; i++) {
          if (!statisztika3[tomb[i]]) {
                    statisztika3[tomb[i]] = 1;
          }
          else {
                    statisztika3[tomb[i]]++
          }
}
console.log("fasz")
console.log(statisztika3)
document.write("try <br>")
for (key in statisztika3) {
          document.write(JSON.stringify(key) + ":" + JSON.stringify(statisztika3[key]) + "<br>")
}
const MAX3 = 90;
const N3 = 5;
const MIN3 = 1;
lista = []
var szam = (MIN3 + Math.floor(Math.random() * (MAX3 - MIN3 + 1)))
while (lista.length != 5) {
          if (!lista.includes(szam)) {
                    lista.push(szam)
          }
          szam = (MIN3 + Math.floor(Math.random() * (MAX3 - MIN3 + 1)))
}
console.log(lista)
const MAX4 = 9;
const MIN4 = 0;
var szam = (MIN4 + Math.floor(Math.random() * (MAX4 - MIN4 + 1)))
while (lista.length != 9) {
          szam = (MIN4 + Math.floor(Math.random() * (MAX4 - MIN4 + 1)))
          lista.push(szam)
}
console.log(lista)
for (var i = 0; i < lista.length; i++) {
          if (lista[i] == 0) {
                    lista.splice(i, 1)
          }
}
console.log(lista)

lista = [1, 2, 3, 4, 5]
var lista2 = [3, 4, 5, 6, 7]
var unio = []
var metszet = []
for (var i = 0; i < lista.length; i++) {
          for (var j = 0; j < lista2.length; j++) {
                    if (lista[i] == lista2[j]) {
                              metszet.push(lista[i])
                    }
          }
}
for (var i = 0; i < lista.length; i++) {
          if (!unio.includes(lista[i])) {
                    unio.push(lista[i])
          }
}
for (var j = 0; j < lista2.length; j++) {
          if (!unio.includes(lista2[j])) {
                    unio.push(lista2[j])
          }
}
document.write("A lista uniója:")
for (var i = 0; i < unio.length; i++) {
          document.write(" " + unio[i])
}
document.write(" <br> A lista metszete:")
for (var i = 0; i < metszet.length; i++) {
          document.write(" " + metszet[i])
}

function generalas() {
          full_name = document.querySelector(".full-name").value
          nevreszek = full_name.split(" ")
          szdatum = document.querySelector(".szdatum").value
          var generaltEmail = document.querySelector(".email")
          var email = ""

          for (var i = 0; i < nevreszek.length; i++) {
                    if(nevreszek[i].length < 3) {
                              email += nevreszek[i].toLowerCase();
                    }
                    else {
                              email += nevreszek[i].substring(0,3).toLowerCase();
                    }
          }
          if(szdatum.length > 0) {
                    if(szdatum.charAt(3) != '0') {
                              email+= szdatum.charAt(3);
                    }
          }
          email = email.concat("@", "duck.com");
          generaltEmail.value = ekezettelenit(email)

}
function ekezettelenit(mit) {
          let ekezetes = "áéőíúúöüű";
          let nemEkezet = "aeiooouuu"
          for(var i = 0;i< ekezetes.length;i++) {
                    mit = mit.replaceAll(ekezetes.charAt(i), nemEkezet.charAt(i));
          }
          return mit;
}
var honapok = [
          "Hosszasan ölelkeztem",
          "Boldogan sírtam",
          "Bukfenceztem",
          "Megbuktam",
          "Egész nap mapoztam",
          "Edzettem",
          "Aludtam",
          "Cipőt vásároltam",
          "Fát vágtam",
          "Programoztam",
          "Tanultam",
          "PC-n játszottam"
      ];
      
      var napok = [
          "egy majommal",
          "egy kiscicával",
          "egy majommal",
          "egy majommal",
          "egy majommal",
          "egy eggérrel",
          "egy majommal",
          "egy majommal",
          "egy majommal",
          "egy bohóccal",
          "egy majommal",
          "egy majommal",
          "egy majommal",
          "egy majommal",
          "egy mamámmal",
          "egy majommal",
          "egy majommal",
          "egy majommal",
          "egy kaktusszal",
          "egy majommal",
          "egy majommal",
          "egy majommal",
          "egy hetnessel",
          "egy majommal",
          "egy majommal",
          "egy tesómmal",
          "egy majommal",
          "egy majommal",
          "egy szomszéddal",
          "egy majommal",
          "egy majommal"
      ];
      
      var felsok = [
          "mert én ilyen vagyok",
          "mert szingli vagyok",
          "mert cuki vagyok",
          "mert csak",
          "mert nyűgös vagyok",
          "mert 1-est kaptam",
          "mert tökéletes vagyok",
          "mert projekteztem",
          "mert boldog vagyok",
          "mert nincs jobb dolgom",
          "mert büszke vagyok"
      ];
      
      function general(){
          var honap = document.querySelector(".honap").value;
          var nap = document.querySelector(".nap").value;
          var felso = document.querySelector(".felso").value;
          var p = document.querySelector(".generaltMondat");
      
          p.innerHTML=honapok[honap] + " " + napok[nap] + " " + felsok[felso] + ".";
      }