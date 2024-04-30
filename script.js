var tl1 = gsap.timeline();
var tl2 = gsap.timeline();
tl1.from("#logo", {
    y:"-10vh",
    duration:.7,
},"anim")

tl2.from("#link1",{
    y:"-7vh",
    duration:.2,
     
},"anim")

tl2.from("#link2",{
    y:"-7vh",
    duration:.2,
})

tl2.from("#link3",{
    y:"-7vh",
    duration:.2,
})

tl2.from("#link4",{
    y:"-7vh",
    duration:.2,
})

gsap.from("#left-text h2",{
    y : "-10vh",
    delay:.4,
    opacity : 0
})
gsap.from("#left-text h1",{
    x : "-10vh",
    delay:.4,
    opacity : 0
})
gsap.from("#left-text h3",{
    x : "10vh",
    delay:.4,
    opacity : 0
})

gsap.from("#right-image",{
    x:"25vh",
    
})

gsap.from("#get-i-t",{
    y : "10vh",
    delay : .4,
    opacity : 0
})


gsap.to(".about-heading, #about-pera, #about-illis>img ",{  
    scrollTrigger:{
        trigger:".about-heading, #about-pera, #about-illis>img",
        scroller:"body",
        start:`-10% 65%`,
        scrub:.15,
        end:`50% top`,
        // markers: true,
        stagger:1,
      },
      opacity:1,
    
})

gsap.to(".project-heading, #project-1, #project-2 ",{  
    scrollTrigger:{
        trigger:".project-heading, #project-1, #project-2",
        scroller:"body",
        start:`-10% 65%`,
        scrub:.15,
        end:`50% top`,
        // markers: true,
        stagger:1,
      },
      opacity:1,
    
})

gsap.to(".contect-heading, #left-side, #right-side, #social-cntct,#copy-right ",{  
    scrollTrigger:{
        trigger:".contect-heading, #left-side, #right-side, #social-cntct,#copy-right",
        scroller:"body",
        start:`-10% 65%`,
        scrub:.15,
        end:`50% top`,
        // markers: true,
        stagger:1,
      },
      opacity:1,
    
})



var nav2 = document.querySelector("#nav2")

function hideMenu(){
    nav2.style.display ="none"
}

function showMenu(){
    nav2.style.display ="initial"
}

        // massage form

        const form = document.querySelector("form");
const Fname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


function sendMsg(){
    const bodyMessage = `Name : ${Fname.value}  <br> email : ${email.value} <br> phone : ${phone.value} <br> message : ${message.value}`;
    const subject = document.getElementById("subject");
    Email.send({
        SecureToken : "1be258a9-d5e2-4a97-9f8e-f85050a0829e",
        To : 'portfoliomayur716@gmail.com',
        From : "portfoliomayur716@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK") {
          Swal.fire({
            title: "success",
            text: "Message sent successfully!",
            icon: "success"
          });
        }
      }
      
    );
}

form.addEventListener("submit", (e) => {
     e.preventDefault();

     sendMsg();

     form.reset();
     return false;
});

var msgForm = document.getElementById("msg-form")
var getinbtn = document.getElementById("get-i-t")

function hideMform(){
  msgForm.style.display ="none"
  getinbtn.style.display ="initial"
}
function showMform(){
    getinbtn.style.display ="none"
    msgForm.style.display ="initial"
  }