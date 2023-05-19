let nevem = "Betti"
let korom = "21"
console.log("Betöltött a javascript")
console.log(korom)


let szovegOldalt = $("h1").text()
console.log(szovegOldalt)

console.log($("h1").text("Ezt a scriptből változtattuk meg"))



function mégegyli(){
    $("ul").append('<li>még egy li</li>')
}

$('#plus').click(mégegyli())




for(let i=0; i<100; i = i + 1) {

}