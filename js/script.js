// Inizializzo VueJS
const { createApp } = Vue;

// All'interno di data, inserisco l'array di oggetti che mi era stato fornito
createApp({
  data() {
    return {
      slides: [
        {
          image: 'img/01.webp',
          title: "Marvel's Spiderman Miles Morale",
          text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        },
        {
          image: 'img/02.webp',
          title: 'Ratchet & Clank: Rift Apart',
          text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        },
        {
          image: 'img/03.webp',
          title: 'Fortnite',
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: 'img/04.webp',
          title: 'Stray',
          text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city.',
        },
        {
          image: 'img/05.webp',
          title: "Marvel's Avengers",
          text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        },
      ],
      currentIndex: 0,
    };
  },

  methods: {
    prevSlide(){
        this.currentIndex--
        if (this.currentIndex < 0) {
                this.currentIndex = this.slides.length - 1;
            }
    },
    nextSlide(){
        this.currentIndex++
        if (this.currentIndex >= this.slides.length) {
                this.currentIndex = 0;
            }
    },
    setSlide(thumbnail) {
        this.currentIndex = thumbnail;
    },
    stopSlideshow() {
        clearInterval(this.interval);
        this.interval = null;
    },
    startSlideshow(){
        if (!this.interval) {
            this.interval = setInterval(this.nextSlide, 3000);
        }

    }
    // consoleofSlides() {
    //   console.log(this.slides);
    // },
  },
  mounted() {
    // Creo un intervallo per settare un timer per lo slideshow all'avvio del programma
    this.interval = setInterval(this.nextSlide, 3000);
    // this.consoleofSlides();
  },
}).mount('#app');