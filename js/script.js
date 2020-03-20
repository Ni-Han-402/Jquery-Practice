$(document).ready(function(){

particlesJS("particles-js", {"particles":{"number":{"value":180,"density":{"enable":true,"value_area":1183.721462448409}},"color":{"value":"#000000"},"shape":{"type":"polygon","stroke":{"width":1,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5451601006942778,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":140,"color":"#ffffff","opacity":0.2805971106514665,"width":1.9240944730386271},"move":{"enable":true,"speed":8.017060304327615,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":641.3648243462092,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

})
$(document).ready(function(){
var images = document.querySelectorAll('img');
new simpleParallax(images);

})

$(document).ready(function(){

    AOS.init();

})

$(document).ready(function(){

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,

        loop: true,
      });

})
