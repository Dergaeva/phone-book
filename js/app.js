class App {

	header() {
		return `<header class="header">
					<div class="container top-radius">
						<h2>Contacts</h2>
					</div>
				</header>`;
	}

	main() {
		return `<main>
		<div class="container">
			<form class="form-inline search-form">
				<div class="form-group">
					<label class="sr-only" for="search">Search</label>
					<input type="text" class="form-control" id="search" placeholder="Search">
				</div>
			</form>
			<table id="table" class="table table-hover contacts">
				<thead>
					<tr>
						<th data-type="string">Name</th>
						<th data-type="string">Last name</th>
						<th data-type="number">Phone</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</div>
			</main>`;
	}

	events() {
		//Сортировка таблицы
		let grid = document.getElementById('table');
		grid.onclick = function(e) {
			if (e.target.tagName != 'TH') return;
			// Если TH -- сортируем
			sortGrid(e.target.cellIndex, e.target.getAttribute('data-type'));
		};
		function sortGrid(colNum, type) {
			var tbody = grid.getElementsByTagName('tbody')[0];
			// Составить массив из TR
			var rowsArray = [].slice.call(tbody.rows);
			// определить функцию сравнения, в зависимости от типа
			var compare;
			switch (type) {
				case 'number':
					compare = function(rowA, rowB) {
						return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
					};
					break;
				case 'string':
					compare = function(rowA, rowB) {
						return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
					};
					break;
			}
			// сортировать
			rowsArray.sort(compare);
			// Убрать tbody из большого DOM документа для лучшей производительности
			grid.removeChild(tbody);
			// добавить результат в нужном порядке в TBODY
			// они автоматически будут убраны со старых мест и вставлены в правильном порядке
			for (var i = 0; i < rowsArray.length; i++) {
				tbody.appendChild(rowsArray[i]);
			}
			grid.appendChild(tbody);
		}
		//end table sort

		//Поиск users по имени
		let search = document.getElementById('search');

		search.addEventListener('keyup', e => {
			var input = document.getElementById("search");
			var filter = input.value.toUpperCase();
			var table = document.getElementById("table");
			var tr = table.getElementsByTagName("tr");
			for (let i = 0; i < tr.length; i++) {
				let td = tr[i].getElementsByTagName("td")[0];
				if (td) {
					if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
						tr[i].style.display = "";
					} else {
						tr[i].style.display = "none";
					}
				}
			}
		});
		//end поиск по имени

	}

	request() {
		let url = 'https://easycode-js.herokuapp.com/';
		let app = document.getElementById('app');

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
        // Добавляем пользователей в таблицу
		var table = document.querySelector("#table > tbody");

		serverRequest(url + 'deel/users', 'GET', data => {
			data = JSON.parse(data);
			return data.map((data) => {
				let firstName = data.fullName.split(' ', 1);
				let secondName = data.fullName.split(' ', 2).splice(1, 1);
				let tableUsers =  `<tr>
			<td>${firstName}</td>
			<td>${secondName}</td>
			<td>${data.phone}</td>
				</tr>`;
				table.innerHTML += tableUsers;
			})
		});
	}

	render() {
		this.app = document.getElementById('app');
		if (this.app) {
			this.app.innerHTML = this.header() + this.main();
			this.events();
		} else {
			this.app = document.createElement('div');
			document.body.prepend(this.app);
			this.app.id = 'app';
			this.app.innerHTML = this.header() + this.main();
			this.events();
		}
	}
}

let myApp = new App();
myApp.render();
myApp.request();



//--Router
let mainLinks = [...document.querySelectorAll('.main-nav > a')];

mainLinks.forEach(link => {
	link.addEventListener('click', event => {
		event.preventDefault();
		let href = link.href;
		this.state = this.app.innerHTML;
		mainLinks.forEach(elem => {
			elem.classList.remove('active');
		});

		if (link.getAttribute('href') == 'index.html') {
			myApp.render();
			myApp.request();
			history.pushState(this.state, href, href);
		}

		if (link.getAttribute('href') == 'keypad.html') {
			keypad.render();
			history.pushState(this.state, href, href);
		}

		if (link.getAttribute('href') == 'add-user.html') {
			userAdd.render();
			history.pushState(this.state, href, href);
		}
	})
});

window.addEventListener('popstate', event => {
	updateState(event.state);
});