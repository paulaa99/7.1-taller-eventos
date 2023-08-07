const div = document.getElementById("diverde");

div.addEventListener("click", () => {
  alert("Hola! Soy el div");
});

const saludarBoton = document.getElementById("saludarBoton");
saludarBoton.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!");
  });