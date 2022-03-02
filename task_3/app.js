const url = 'wss://echo-ws-service.herokuapp.com/';
let btnSend = document.querySelector('.btn-sent');
let btnLocation = document.querySelector('.btn-geo-location');
let textArea = document.querySelector('.text-area');
let websocket = new WebSocket(url);

btnSend.addEventListener('click', () => {
    let input = document.querySelector('input').value;
    let messageBox = document.createElement('div');
    textArea.append(messageBox);
    messageBox.textContent = input;

    websocket.send(input);
    websocket.onmessage = (e) => {
        let messageBox = document.createElement('div');
        messageBox.classList.add('right');
        textArea.append(messageBox);
        messageBox.textContent = `Ответ от сервера: ${e.data}`;
    }
})

btnLocation.addEventListener('click', () => {
    let messageBox = document.createElement('div');
    let link = document.createElement('a');
    textArea.append(messageBox);

    const success = (position) => {
        
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;

        messageBox.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °, `;
        messageBox.append(link);
        link.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        link.textContent += 'Ссылка на карту';
    }

    const error = () => {
        messageBox.textContent = 'Невозможно получить ваше местоположение';
    }
    
    if (!navigator.geolocation) {
        messageBox.textContent = 'Geolocation не поддерживается вашим браузером';
      } else {
        messageBox.textContent = 'Определение местоположения…';
        navigator.geolocation.getCurrentPosition(success, error);
      }
})


