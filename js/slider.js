const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderInicio = document.querySelector(".slider-inicio");
const sliderControlador = document.querySelector(".slider-controlador");

 // Un solo elemento

// Función para actualizar la posición y tamaño del indicador de tabulación
const updateInicio = (tab, index) => {
  sliderInicio.style.transform = `translateX(${tab.offsetLeft-20}px)`;
  sliderInicio.style.width = `${tab.getBoundingClientRect().width}px`;

//calCular la posicion del indicador
  const scrollLeft = sliderTabs[index].offsetLeft - sliderControlador. offsetWidth / 2 + sliderTabs[index].offsetWidth / 2;
  sliderControlador.scrollTo({ left: scrollLeft, behavior: "smooth" });
};

// Inicializar Swiper
  const swiper = new Swiper(".slider-contenedor", {
  effect: "fade",
  speed: 1300,
  // autoplay: { delay: 4000 }, // Descomentar si necesitas autoplay
  navigation: {
    prevEl: "#slider-prev",
    nextEl: "#slider-next",
  },
  on: {
    slideChange: () => {
      const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex]); // Obtener la pestaña activa
      updateInicio(sliderTabs[swiper.activeIndex], currentTabIndex); // Actualizar la posición del indicador
    },
  },
});


// Añadir el evento de clic a cada tab
sliderTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    swiper.slideTo(index); // Mover Swiper al índice correspondiente
    updateInicio(tab, index); // Actualizar la posición del indicador
  });
});

// Inicializar la posición del indicador
updateInicio(sliderTabs[0],0);
// Actualizar la posición del indicador al redimensionar la ventana
window.addEventListener("resize", () => updateInicio(sliderTabs[swiper.activeIndex], 0));
