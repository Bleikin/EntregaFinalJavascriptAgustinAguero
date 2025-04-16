//se declara variables
let playerScore = 0
let computerScore = 0

//opciones con funciones

function playGame(userChoice) {
    const choices = ['piedra', 'papel', 'tijera']
    const computerChoice = choices [Math.floor(Math.random() * 3)]

//aqui los resultados posibles del juego

    let result  = ''

    if(userChoice === computerChoice) {
        result = `Empate. 😱 Ambos jugadores eligieron ${userChoice}`
    } else if (
        (userChoice === 'piedra' && computerChoice === 'tijera')  ||
        (userChoice === 'papel' && computerChoice === 'piedra')  ||
        (userChoice === 'tijera' && computerChoice === 'papel') 
    )    {
        result = `Ganaste. 💪🏻 ${userChoice} gana a ${computerChoice}`
        playerScore++
    } else {
        result = `Perdiste. 😟 ${computerChoice} gana a ${userChoice}`
        computerScore++
    }

    document.getElementById('result').textContent = result
    document.getElementById('score').textContent = `Jugador: ${playerScore} | Enemigo: ${computerScore}`

    if(playerScore === 3 || computerScore === 3) {
        endGame()
    }
}

function endGame() {
    const finalResult = playerScore === 3 ? '¡Felicidades has ganado! 😎' : 'Ha ganado el enemigo. 😭'
    document.getElementById('result').textContent = finalResult

    document.getElementById('btnPiedra').disabled = true
    document.getElementById('btnPapel').disabled = true
    document.getElementById('btnTijera').disabled = true

const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 6000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        imageUrl: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTdpbDU5eDNlY2poOTNudWd4dHJrZG90YTNiM3h2eWJtM2hxdWN4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7j3UoXzbjvaIo/giphy.gif",
        title: "¡Juego terminado!",
      });
}

