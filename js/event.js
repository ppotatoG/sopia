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
// header depth slideToggle
$('.depth_wrap .gnb >li').on('click', function(){
    if($(this).find('.depth').css(('display')) == 'block') {
        $(this).find($('.depth')).slideUp();
    }else {
        $('.depth').slideUp();
        $(this).find($('.depth')).slideDown();
    }
})
// mobile header
if(window.innerWidth < 1024){
    $('.menu_open').on('click', function(){
        $('.depth_wrap').slideDown( 300, 'swing', function(){
            $('.menu li').fadeOut();
            $('.menu_hide').fadeIn();
        });
    })

    $('.menu_hide button').on('click', function(){
        $('.depth_wrap').slideUp( 300, 'swing', function(){
            $('.menu li').fadeIn();
            $('.menu_hide').fadeOut();
        });
    })
}



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