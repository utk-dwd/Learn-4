// gsap.from("#page1 #circle",{
//     scale:0,
//     delay:1,  
//     duration:2,
//     rotate:720
// })

// gsap.from("#page2 #circle",{
//     scale:0,
//     delay:1,  
//     duration:2,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #circle",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:2  // true or false or 1-5 koi bhi number
//         }
// })

// gsap.from("#page3 #circle",{
//     scale:0,
//     delay:1,  
//     duration:2,
//     rotate:720,
// })

gsap.to("#page2 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",  //jab aap pin ka use kr rhe ho to hamesha elememnt na trigger krke parent ko trigger krna
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:2,
        pin:true
    }

})

gsap.to("#page3 h1",{
    tranform:"translateX(-125%)",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        scrub:2,
        markers:true,
        start:"top 0",
        end:"top -100%",
        pin:true
    }
})