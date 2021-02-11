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
    DepthBtn[i].addEventListener('click', function(e){
        console.log(this)
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
let Header=document.querySelector('header');
let Menu=document.querySelector('header .menu')
function headerView(){
    console.log("viewBtn")
    Header.classList.add('on')
    Menu.style.display="block";
    Menu.style.marginTop="-8rem";
    Menu.style.transition="margin "+"1s";
    setTimeout(function(){
        console.log("viewDelayBtn")
        Menu.style.marginTop="0";
        Menu.style.visibility="visible";
    }, 90);
}
// let figure=document.querySelectorAll('figure')
let Figure = document.querySelectorAll('figure:not(.disable)'), 
    PopWrap=document.querySelector('.popup');

[].forEach.call(Figure,function(col){ 
    col.addEventListener("click",click,false); 
}); 
function click(e){
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
