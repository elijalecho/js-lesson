const addition = (a, b) => a + b

addition(2, 5)

/**
 * UNDERSTANDING JS DOM
 */

const box = document.getElementById("dom")
console.log(box)
box.style.background = "red"
box.style.width = "300px"
box.style.height = "300px"

box.addEventListener("click", (e) => {
  console.log("---- iam clicked ---")
  box.style.background = "blue"
})
