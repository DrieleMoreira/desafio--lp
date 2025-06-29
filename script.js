let heroi = ["Ana", "Diogo", "Luna", "Tiago", "Zara", "Bruno", "Maria", "Pedro", "Isaac", "Lucas"]

function gerarHeroi() {
      const nomeAleatorio = heroi[Math.floor(Math.random() * heroi.length)];
      const xpHerois = Math.floor(Math.random() * 10001); 
      let categoria = "";

if ( xpHerois < 1000){
    categoria = "ferro"
}else if (xpHerois >1001 && xpHerois <=2000){
    categoria = "Bronze"
}else if (xpHerois >2001 && xpHerois <=5000){
    categoria = "Prata"
}else if (xpHerois >5001 && xpHerois <=7000){
    categoria = "Ouro"
}else if (xpHerois >7001 && xpHerois <=8000){
    categoria = "Platina"
}else if (xpHerois >8001 && xpHerois <=9000){
    categoria = "Ascendente"
}else if (xpHerois >9001 && xpHerois <=10000){
    categoria = "Imortal"
}else{ (xpHerois >= 10001)
    categoria = "Radiante"
}
const resultadoDiv = document.getElementById("resultado");
      resultadoDiv.innerHTML += `
        <div class="card">
          O Herói de nome <strong>${nomeAleatorio}</strong> está no nível de <strong>${categoria}</strong> (Xp: ${xpHerois})
        </div>
      `;
}

