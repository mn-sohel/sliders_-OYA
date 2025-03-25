// document.addEventListener('DOMContentLoaded', function(){
//     let slides =  document.querySelector('.slides');
//     let dotsContainer =  document.querySelector('.dots');
//     let prevButton =  document.querySelector('.prev');
//     let nextButton =  document.querySelector('.next');
//     let slide =  document.querySelectorAll('.slide');
//     let slideCount =  slide.length;

//     let currentSlide = 0;

//     // Create dots 
    
//     for(i = 0; i < slideCount; i++){
//         let dot = document.createElement('span');
//         if(i === 0){
//             dot.classList.add('active')
//         }
//         dot.classList.add('dot');
//         dot.setAttribute('data-index', i)
//         dotsContainer.appendChild(dot);
//     }
    
//     let dots = document.querySelectorAll('.dot');

//     function updateSlider(index){
//         if(index >= slideCount){
//             currentSlide = 0;
//         }else if(index < 0 ){
//             currentSlide = slideCount - 1;
//         }else{
//             currentSlide = index;
//         }

//         slides.style.transform = `translateX(${-currentSlide * 100}%)`;
//         dots.forEach(dot => dot.classList.remove('active'));
//         dots[currentSlide].classList.add('active')
//     }
//     setInterval(()=>{
//         updateSlider(currentSlide + 1)
//     },1000)

//     prevButton.addEventListener('click', function(){
//         updateSlider(currentSlide - 1);
//     })

//     nextButton.addEventListener('click', function(){
//         updateSlider(currentSlide + 1);
//     })
    
//     dots.forEach(dot => {
//         dot.addEventListener('click', function(){
//             let index = parseInt(dot.getAttribute('data-index'));
//             updateSlider(index)
//         })
//     })

// })


document.addEventListener('DOMContentLoaded', function(){
    let slides = document.querySelector('.slides');
    let slide = document.querySelectorAll('.slide');
    let dotsContainer = document.querySelector('.dots');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let slideCont = document.querySelector('.slideCont');

    let currentSlide = 0;

    for(i = 0; i < slide.length; i++){
        let createDot = document.createElement('div')
        if(i===0){
            createDot.classList.add('active')
        }
        createDot.classList.add('dot')
        createDot.setAttribute("data-index", i)
        dotsContainer.appendChild(createDot)
    }

    let dots = document.querySelectorAll('.dot')
 

    function updateSlide(index){
        if(index >= slide.length){
            currentSlide = 0;
        }else if(index < 0){
            currentSlide = slide.length - 1;
        }else{
            currentSlide = index;
        }
        slides.style.transform = `translateX(${-currentSlide * 100}%)`;
        dots.forEach((dot) => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active')
        slideCont.innerHTML = `${currentSlide + 1} / ${slide.length}`
    }

    prevButton.addEventListener('click', function(){
        updateSlide(currentSlide - 1);   
    })

    nextButton.addEventListener('click', function(){
        updateSlide(currentSlide + 1);   
    })

    dots.forEach((dot)=>{
        dot.addEventListener('click', function(){
            updateSlide(+dot.getAttribute('data-index'))        
        })
    })

    setInterval(()=>{
        updateSlide(currentSlide + 1);
    },1000)

})


