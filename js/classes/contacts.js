class Contacts {

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
					<input type="text" class="form-control" id= "search" placeholder="Search">
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
				<tbody>
					
				</tbody>
			</table>
		</div>
	</main>`
	}
	footer() {
		return `<footer class="footer">
		<div class="container bottom-radius">
			<nav class="main-nav">
				<a href="index.html" class="tab active">
					<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
					<span class = "tab-text">Contacts</span>
				</a>
				<a href="keypad.html" class="tab">
					<span class="glyphicon glyphicon-th" aria-hidden="true"></span>
					<span class = "tab-text">Keypad</span>
				</a>
				<a href="edit-contact.html" class="tab">
					<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
					<span class = "tab-text">Edit contact</span>
				</a>
				<a href="user.html" class="tab">
					<span class="glyphicon glyphicon-user" aria-hidden="true"></span>
					<span class = "tab-text">User</span>
				</a>
				<a href="add-user.html" class="tab">
					<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
					<span class = "tab-text">Add user</span>
				</a>
			</nav>
		</div>
	</footer>`;
	}
	render() {
		var app = document.getElementsByClassName('app')[0];
		app.innerHTML = `${this.header()}${this.main()}${this.footer()}`;
	}
}

let contacts = new Contacts();
contacts.render();

// сортировка таблицы
// использовать делегирование!
// должно быть масштабируемо:
// код работает без изменений при добавлении новых столбцов и строк

var grid = document.getElementById('table');
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