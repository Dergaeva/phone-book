const url = 'http://easycode-js.herokuapp.com/';
const button = document.querySelector('button');
const button2 = document.querySelector('.btn2');
const app = document.querySelector('.app');

const serverRequest = (url, requestType, callback) => {
	let xhr = new XMLHttpRequest();
	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === 4 && xhr.DONE === 4) {
			return callback(xhr.responseText);
		}
	});

	xhr.open(requestType, url , true);
	xhr.send();
};

// Добавляем пользователя в базу данных при клике на кнопку
// метод POST
//button2.addEventListener('click', () => {
// 	let xhrPOST = new XMLHttpRequest();
//
// 	xhrPOST.addEventListener('readystatechange', () => {
// 		if (xhrPOST.readyState === 4) {
// 			//console.log('response: ', JSON.parse(xhrPOST.response));
// 			console.log('responseText: ', xhrPOST.responseText);
// 		}
// 	});
//
// 	xhrPOST.open('POST', url + 'deel/users', true);
// 	const newUser = {
// 		fullName: 'Царевна Лягушка',
// 		email: 'frog@mail.ru',
// 		phone: '0501698753'
// 	};
// 	xhrPOST.setRequestHeader('Content-Type', 'application/json');
//
// 	xhrPOST.send(JSON.stringify(newUser));
//});

// разбиваем fullName на два элемента в массиве
// serverRequest(url + 'deel/users', 'GET', data => {
// 	data = JSON.parse(data);
// 	for(var i=0; i<=data.length; i++) {
// 		let elem = data[i].fullName.split(" ");
// 		console.log(elem);
// 	}
// });


// Добавляем пользователей в таблицу
var table = document.querySelector("#table > tbody");

serverRequest(url + 'deel/users', 'GET', data => {
	data = JSON.parse(data);

		return data.map((data) => {
			let tableUsers =  `<tr> 
			<td>${data.fullName.split(' ', 1)}</td>
			<td>${data.fullName.split(' ', 2).splice(1, 1)}</td>
			<td>${data.phone}</td>
				</tr>`;

			table.innerHTML += tableUsers;
		})

});