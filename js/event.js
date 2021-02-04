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

let figure=document.querySelectorAll('figure'),
    PopWrap=document.querySelector('.popup');

for(let i=0; i<figure.length; i++){
    figure[i].addEventListener('click', function(){
        
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

let GnbBtn=document.querySelectorAll('header .menu-wrap .menu >ul >li >a'),
    GnbBox=document.querySelector('header .menu-wrap');

for(let i=0; i<GnbBtn.length; i++){
    GnbBtn[i].addEventListener('click', function(){
        if(this.parentNode.classList=='on'){
            this.parentNode.classList.remove('on')
        }else if(this.parentNode.classList!=='on'){
            for(let j=0; j<GnbBtn.length; j++){
                GnbBtn[j].parentNode.classList.remove('on')
            }
            this.parentNode.classList.add('on')
        }
    })
}

document.querySelector('header .js-menu').addEventListener('click', function(){
    GnbBox.classList.add('on')
})

document.querySelector('header .hide-btn').addEventListener('click', function(){
    GnbBox.classList.remove('on')
})

let DepthBtn=document.querySelectorAll('header .pc-header .depth >li >a');

for(let i=0; i<DepthBtn.length; i++){
    DepthBtn[i].addEventListener('click', function(){
        console.log(this)
        if(this.parentNode.classList=='on'){
            this.parentNode.classList.remove('on')
        }else if(this.parentNode.classList!=='on'){
            for(let j=0; j<GnbBtn.length; j++){
                DepthBtn[j].parentNode.classList.remove('on')
            }
            this.parentNode.classList.add('on')
        }
    })
}
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
        }else if(viewBtn[0].classList!=='on') {
            NoteBox.style.flexDirection='column-reverse'
            document.querySelector('.note-box .box:last-child').style.marginTop='0'
            // document.querySelector('.note-box .box:first-child').style.marginTop='3rem'
        }
    })
}

// ripple
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
