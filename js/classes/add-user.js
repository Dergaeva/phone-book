class addUser {
	constructor() {
		this.newUser = {};
	}

	header() {
		return `<header class="header">
					<div class="container top-radius">
						<nav class="user-top-line">
							<a href="user.html">Cansel</a>
							<button class = "done-btn">Done</button>
						</nav>
					</div>
				</header>`;
	}
	main() {
		return `<main class="main">
				<div class="container">
					<div class="edit-main-info">
						<div class="edit-foto">
							<button class="add-foto-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
								<span>add foto</span></button>
							</div>
							<div class="main-info-holder">
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>First Name</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>Last Name</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>Company</span>
									</button>
								</div>
							</div>
						</div>
						<div class="scroll-holder">
							<div class="edit-info">
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add mobile phone</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add  home phone</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add email</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add address</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add birthday</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add social profile</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="add-btn"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
										<span>add field</span>
									</button>
								</div>
								<div class="edit-field">
									<button href="#" class="delete-contact">delete contact</button>
								</div>
							</div>
						</div>
					</div>
				</main>`
	}

	events(){}

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

let userAdd = new addUser();