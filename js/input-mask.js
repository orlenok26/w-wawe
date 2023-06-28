new JustValidate('.about__form', {
  errorLabelStyle: {
    color: '#FF5C00'
  },

  rules: {
    message: {
      required: true,
      minLength: 10
    },
    name: {
      required: true,
      minLength: 2
    },
    mail: {
      required: true,
      email: true
    },
    data_check: {
      required:true
    },
  },
  messages: {
    message: {
      required: 'Введите текст',
      minLength: 'Введите более 10 символов'
    },
    name: {
        required: 'Вы не ввели имя',
        minLength: 'Ввидите минимум 2 символа'
    },
    mail: {
      required: 'Вы не ввели e-mail',
      email: 'Неверный формат e-mail'

    }
  }
});


(function agreement(){
	var checkbox = document.querySelectorAll('.about__form-checkbox');
	var buttonSubmit = document.querySelectorAll('.about__form-btn');
  var textArea = document.querySelector('#message');
  var inputName = document.querySelector('#name');
  var inputEmail = document.querySelector('#email');


	for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", function () {
			if (this.checked){
				for (var i = 0; i < buttonSubmit.length; i++) {
					buttonSubmit[i].classList.remove('lock');
				};
    }else{
				for (var i = 0; i < buttonSubmit.length; i++) {
					buttonSubmit[i].classList.add('lock');
				};
			};
    }, false);
  }

})()


// (function() {
//   $('form > input').keyup(function() {

//       var empty = false;
//       $('form > input').each(function() {
//           if ($(this).val() == '') {
//               empty = true;
//           }
//       });

//       if (empty) {
//           $('#send-data').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
//       } else {
//           $('#send-data').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
//       }
//   });
// })()

// function checkParams() {
//   var textArea = $('#message').val();
//   var inputName = $('#name').val();
//   var inputEmail = $('#email').val();
//   if(textArea.length != 0 && inputName.length != 0 && inputEmail.length != 0)
//       $('#send-data').classList.remove('lock');
//     else
//       $('#send-data').classList.add('lock');
// }





