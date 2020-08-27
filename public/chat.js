const socket = io();

socket.on('connect', () => {
  console.log('Socket connected');

  socket.on('server-client', (data) => {
    let resultDiv = document.getElementById('resultDiv');
    resultDiv.innerHTML += `<h2>Data: ${data}</h2>`
  });
} );

document.getElementById('submitBtn').addEventListener('click', () => {
  let inputText = document.getElementById('inputText');
  socket.emit('hey', inputText.value);
  inputText.value = '';
})

