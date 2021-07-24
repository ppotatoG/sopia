const once = {once: true};
const Wrap = document.querySelector("#wrap");

window.onscroll = function() {headerFunction()};

const header = document.querySelector("header");
const sticky = header.offsetTop;

function headerFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("fix");
    } else {
        header.classList.remove("fix");
    }
}

const depthBtns = document.querySelectorAll('header button:not(.menu-hide)');

depthBtns.forEach((depthBtn) => {
    depthBtn.addEventListener('click', function(){     
        if(this.classList == 'on') {
            this.classList.remove('on');
        }else {
            for(item of depthBtns) item.classList.remove('on')
            this.classList.add('on')
        }
    })
})

//slideToggle
const Menu=document.querySelector('header .menu');
const MoblieMenuBtn=document.querySelector('.open-menu');

window.addEventListener('load', function(){
    if(window.innerWidth<1024) {
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
    if(window.innerWidth<1024) {
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

// openPopup
const Figure = document.querySelectorAll('figure:not(.disable)');
const PopWrap=document.querySelector('.popup');

Wrap.addEventListener('click', function(event){
    const imgNode=event.target; 
    if(imgNode.dataset.hasOwnProperty("viewer")){
        PopWrap.classList.add('on');
        PopWrap.querySelector('img').src=imgNode.src;
        PopWrap.querySelector('img').alt=imgNode.alt;
    }
})

// closePopup
PopWrap.addEventListener('click', function(e){
    if(e.target.tagName!=="IMG"){
        this.classList.remove('on');
    }
})

const noteLists = document.querySelectorAll('.note-box h3');

noteLists.forEach((noteList) => {
    noteList.addEventListener('click', function(){
        this.classList.toggle('on');
    })
})


//slideToggle
const viewBtn=document.querySelectorAll('.view span');
const NoteBox=document.querySelector('.note-box');

for(let i=0; i<viewBtn.length; i++){
    viewBtn[i].addEventListener('click', function(){
        viewBtn[0].classList.remove('on');
        viewBtn[1].classList.remove('on');
        this.classList.add('on');
        if(viewBtn[0].classList=='on') {
            NoteBox.style.flexDirection='column';
            document.querySelector('.note-box .box:first-child').style.marginTop='0';
            document.querySelector('.note-box .box:last-child').style.marginTop='3rem';
        }else if(viewBtn[0].classList!=='on') {
            NoteBox.style.flexDirection='column-reverse';
            document.querySelector('.note-box .box:last-child').style.marginTop='0';
            document.querySelector('.note-box .box:first-child').style.marginTop='3rem';
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