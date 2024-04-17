gsap.from(".header",{
    scrollTrigger: ".header",
    x:-200,
    opacity:0,
    duration:2,
     
})

gsap.from(".home-content",{
    scrollTrigger: ".home-content",
    x:100,
    delay:0.4,
    opacity:0,
    duration:2,
    
});

gsap.from(".about-content",{
    x:-100,
    delay:0.4,
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger:".about-content",
      
        start:"top 20%",
    }
})

gsap.from(".about-img",{

    x:100,
    delay:0.4,
    opacity:0,
    duration:2,
    scrollTrigger: {
        trigger:".about-img",
        
        start:"top 20%",
    }
})
gsap.from(".input-box",{
    scrollTrigger: ".input-box",
    y:200,
    delay:0.3,
    stagger:0.2,
    opacity:0,
    duration:2,
})
gsap.from(".project-info",{
    
    y:500,
    duration:2,
    opacity:0,
    ease:"bounce",
    stagger:0.2,
    scrollTrigger:{
        trigger:".project-info",
       
        start:"top 120%"
    } 
})

gsap.from(".footer",{
    
    y:100,
    delay:1,
    duration:2,
    opacity:0,
    ease:"bounce",
    stagger:0.2,
    scrollTrigger: {
        trigger:".footer",
        scrub:2
    }
})
