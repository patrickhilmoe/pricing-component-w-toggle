const toggleArea = document.querySelector(".switch");
const toggleButton = document.querySelector(".checkbox");
const basicPrice = document.querySelector(".price1");
const mediumPrice = document.querySelector(".price2");
const profPrice = document.querySelector(".price3");

toggleArea.addEventListener("click", function(e) {
    e.preventDefault();
    if (toggleArea.classList.contains("monthly")) {
        toggleArea.classList.remove("monthly");
        toggleArea.classList.add("annually");
        basicPrice.innerHTML = `<h2 class="price1"><span class="span-size">$</span>19.99</h2>`
        mediumPrice.innerHTML = `<h2 class="price1"><span class="span-size">$</span>24.99</h2>`
        profPrice.innerHTML = `<h2 class="price1"><span class="span-size">$</span>39.99</h2>`
    } else {
        toggleArea.classList.remove("annually");
        toggleArea.classList.add("monthly");
        basicPrice.innerHTML = `<h2 class="price1"><span class="span-size">$</span>199.99</h2>`
        mediumPrice.innerHTML = `<h2 class="price1"><span class="span-size">$</span>249.99</h2>`
        profPrice.innerHTML = `<h2 class="price1"><span class="span-size">$</span>399.99</h2>`
    }
})