window.onload = () => {
  console.log('Hi')

  let btnToggle = document.querySelector("#btnToggle");
  let mobItems = document.querySelector("#mobItems");

  btnToggle.addEventListener("click", (e) => {
    // if (mobItems.classList(showItems)) {

    // }
    console.log('Hi')
    mobItems.classList.toggle('showItems')
  })
}