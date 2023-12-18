window.onload = () => {
  console.log('window.onload')

  // Работа мобильного меню
  let btnToggle = document.querySelector("#btnToggle");
  let mobItems = document.querySelector("#mobItems");

  btnToggle.addEventListener("click", () => {
    mobItems.classList.toggle('showItems')
  })

  // Валидация формы
  let inputName = document.querySelector('#inputName')
  let inputAddres = document.querySelector('#inputAddres')
  let inputPhone = document.querySelector('#inputPhone')
  //let inputName = document.querySelectorAll('.footer-form-input')

  inputName.addEventListener("keyup", () => {
    if (inputName.value[inputName.value.length - 1] === '.') {
      inputName.value = inputName.value.substring(0, [inputName.value.length - 1])
    }
  })



  // Отправка формы 
  let sendOrder = document.querySelector("#sendOrder");
  sendOrder.addEventListener("click", () => {
    if (!inputName.value || !inputAddres.value || !inputPhone.value) {
      alert('Пожалуйста, заполните все поля')
    } else {
      alert('Спасибо за заказ')
    }
  })

  // Просмотр изображений
  let modalWindow = document.querySelector("#modalWindow");
  let selectItemImage = document.querySelectorAll('.select-item-image')

  selectItemImage.forEach(image => {
    image.addEventListener("click", () => {
      modalWindow.classList.toggle('showItems')
      modalWindow.firstChild.setAttribute('src', image.src);
    })
  })
}