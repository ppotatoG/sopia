let once={once: true};

window.onscroll = function() {headerFunction()};

let header = document.querySelector("header"),
    sticky = header.offsetTop;


function headerFunction() {
    if (window.pageYOffset > sticky) {
    header.classList.add("fix");
    } else {
    header.classList.remove("fix");
    }
}

let DepthBtn=document.querySelectorAll('header button:not(.menu-hide)');
for(let i=0; i<DepthBtn.length; i++){
    DepthBtn[i].addEventListener('click', function(){
        
        if(this.classList=='on'){
            this.classList.remove('on')
        }else if(this.classList!=='on'){
            for(let j=0; j<DepthBtn.length; j++){
                DepthBtn[j].classList.remove('on')
            }
            this.classList.add('on')
        }
    })
}

let Menu=document.querySelector('header .menu'),
    MoblieMenuBtn=document.querySelector('.open-menu');

window.addEventListener('load', function(){
    let Width=window.innerWidth;
    if(Width<1024) {
        MoblieMenuBtn.addEventListener('click', function(){
            header.classList.add('on')
            Menu.style.display="block";
            Menu.style.marginTop="-8rem";
            Menu.style.transition="margin "+"1s";
            setTimeout(function(){
                Menu.style.marginTop="0";
                Menu.style.visibility="visible";
            }, 90);  
        }, once)
    }
})

window.addEventListener('resize', function(){
    let Width=window.innerWidth;
    if(Width<1024) {
        MoblieMenuBtn.addEventListener('click', function(){
            header.classList.add('on')
            Menu.style.display="block";
            Menu.style.marginTop="-8rem";
            Menu.style.transition="margin "+"1s";
            setTimeout(function(){
                Menu.style.marginTop="0";
                Menu.style.visibility="visible";
            }, 90);
        })
    }
})


let Figure = document.querySelectorAll('figure:not(.disable)'), 
    PopWrap=document.querySelector('.popup');

for(let i=0; i<Figure.length; i++){
    Figure[i].addEventListener('click', function(){
        let ThisSrc=this.querySelector('img').src,
        ThisAlt=this.querySelector('img').alt;

        PopWrap.classList.add('on')

        if(PopWrap.classList.contains('on')){
            PopWrap.querySelector('img').src=ThisSrc
            PopWrap.querySelector('img').alt=ThisAlt

            PopWrap.addEventListener('click', function(){
                this.classList.remove('on')
            })
        }
    })
}

PopWrap.addEventListener('click', function(e){
    if(e.target.tagName!=="IMG"){
        this.classList.remove('on')
    }
})

let NoteList=document.querySelectorAll('.note-box h3');

for(let i=0; i<NoteList.length; i++){
    NoteList[i].addEventListener('click', function(){
        this.classList.toggle('on')
    })
}

let viewBtn=document.querySelectorAll('.view span'),
    NoteBox=document.querySelector('.note-box');

for(let i=0; i<viewBtn.length; i++){
    viewBtn[i].addEventListener('click', function(){
        viewBtn[0].classList.remove('on')
        viewBtn[1].classList.remove('on')
        this.classList.add('on')
        if(viewBtn[0].classList=='on') {
            NoteBox.style.flexDirection='column'
            document.querySelector('.note-box .box:first-child').style.marginTop='0'
            document.querySelector('.note-box .box:last-child').style.marginTop='3rem'
        }else if(viewBtn[0].classList!=='on') {
            NoteBox.style.flexDirection='column-reverse'
            document.querySelector('.note-box .box:last-child').style.marginTop='0'
            document.querySelector('.note-box .box:first-child').style.marginTop='3rem'
        }
    })
}

Array.from(document.querySelectorAll(".ripple")).forEach(a => {
    a.addEventListener("click", function (e) {
        const ripple = document.createElement("div"),
            rect = a.getBoundingClientRect();
        ripple.className = "animate",
        ripple.style.left = `${e.x - rect.left}px`,
        ripple.style.top = `${e.y - rect.top}px`,
        ripple.style.background = `#${a.dataset.color !== undefined ? a.dataset.color : "fff"}`,
        ripple.style.setProperty("--material-scale", a.offsetWidth),
        a.append(ripple),
        setTimeout(function () {
            ripple.parentNode.removeChild(ripple)
        }, 500)
    })
})
