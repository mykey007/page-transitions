// Function to add and remove the page transition screen
function pageTransition() {

  var tl = gsap.timeline();
  // tl.set('.loading-screen', { transformOrigin: "bottom left"});
  tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: 'bottom left', stagger: .2});
  tl.to('ul.transition li', { duration: .5, scaleY: 0, skewX: 0, transformOrigin: "bottom left", stagger: .2, delay: .1 });
}

// Function to animate the content of each page
function contentAnimation() { 

  var tl = gsap.timeline();
  tl.from('.is-animated', { duration: 1.5, translateY: 30, opacity: 0, stagger: 0.4 });
  tl.from('.main-navigation', { duration: .5, translateY: -10, opacity: 0});

  // todo: get image to work too
  // tl.to('img', { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }, "-=1.1")

  // $('.green-heading-bg').addClass('show');

}

$(function() {

  barba.init({

    sync: true,

    transitions: [{

      async leave(data) {
        
        const done = this.async();
        
        pageTransition();
        await delay(1500);
        done();

      },

      async enter(data) {
        contentAnimation();
      },

      async once(data) {
        contentAnimation();
      }

    }]
  });

});