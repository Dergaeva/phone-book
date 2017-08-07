class Keypad {

	header() {
		return `<header class="header">
					<div class="container top-radius">
						<h2>Keypad</h2>
					</div>
				</header>`;
	}
	main() {
		return `<main class="main">
		<div class="container">
			<div class="number">
				<span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
				<input id="phoneNumber" class ="numbers" tabindex="0" placeholder="(050)5005050" onkeypress="return numberPressed(event);">
				<span class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
			</div>
			<div class="keypad-holder">
				<button class="key">1</button>
				<button class="key">2</button>
				<button class="key">3</button>
				<button class="key">4</button>
				<button class="key">5</button>
				<button class="key">6</button>
				<button class="key">7</button>
				<button class="key">8</button>
				<button class="key">9</button>
				<button class="key">*</button>
				<button class="key">0</button>
				<button class="key">#</button>
				<button class="key"> <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span></button>
			</div>
		</div>
	</main>`
	}

	events() {
		//Функция набора номера
		let but = document.querySelectorAll('.key');
		var phoneNumber = document.getElementById('phoneNumber');

		// Формат телефоного номера
		phoneNumber.addEventListener('keyup',function(evt){
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			phoneNumber.value = phoneFormat(phoneNumber.value);
		});

		phoneNumber.value = phoneFormat(phoneNumber.value);

		function numberPressed(evt){
			var charCode = (evt.which) ? evt.which : evt.keyCode;
			if(charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 36 || charCode > 40)){
				return false;
			}
			return true;
		}

		function phoneFormat(input){
			input = input.replace(/\D/g,'');
			input = input.substring(0,10);
			var size = input.length;
			for (let i = 0; i < but.length - 1; i++) {
				let num = but[i].textContent;//1,2,3,..
				but[i].addEventListener("click", function(){
					size += num;
					phoneNumber.value = size;
				})
			}
			if(size == 0){
				input = input;
			}else if(size < 4){
				input = '('+input;
			}else if(size < 7){
				input = '('+input.substring(0,3)+') '+input.substring(3,6);
			}else{
				input = '('+input.substring(0,3)+') '+input.substring(3,6)+' - '+input.substring(6,10);
			}
			return input;
		}
		// end формат
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

let keypad = new Keypad();