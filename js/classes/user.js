class User {

	header() {
		return `	<header class="header">
						<div class="container top-radius">
							<div class="user-top-line">
								<a href="index.html">
									<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
									Contacts</a>
									<a href="edit-contact.html">Edit</a>
								</div>
						</div>
					</header>`;
	}
	main() {
		return `<main class="main">
					<div class="container">
						<div class="img-box">
							<img src="images/user-face.png" alt="#" class=" user-img center-block">
						</div>
						<div class="user-name">User Name</div>
						<div class="options-line">
							<div class="message">
								<div class= "options-icon"><span class="icon glyphicon glyphicon-comment" aria-hidden="true"></span></div>
								<span class = "options-text">message</span>
							</div>
							<div class="call">
								<div class= "options-icon"><span class="icon glyphicon glyphicon-earphone" aria-hidden="true"></span></div>
								<span class = "options-text">call</span>
							</div>
							<div class="video">
								<div class= "options-icon"><span class="icon glyphicon glyphicon-facetime-video" aria-hidden="true"></span></div>
								<span class = "options-text">video</span>
							</div>
							<div class="mail">
								<div class= "options-icon"><span class="icon glyphicon glyphicon-envelope" aria-hidden="true"></span></div>
								<span class = "options-text">mail</span>
							</div>
						</div>
						<div class="tel-number">
							<h3>mobile</h3>
							<div> +38 (093) 989 89 89</div>
						</div>
						<div class="tel-number">
							<h3>home</h3>
							<div> +38 (093) 989 89 89</div>
						</div>
						<div class="options-table">
							<div class ="options-item"><a href="#">Notes</a></div>
							<div class ="options-item"><a href="#">Send message</a></div>
							<div class ="options-item"><a href="#">Share contact</a></div>
							<div class ="options-item"><a href="#">Add to favorites</a></div>
							<div class ="options-item"><a href="#">Share my location</a></div>
							<div class ="options-item"><a href="#">Block this caller</a></div>
						</div>
					</div>
				</main>`
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

let user = new User();