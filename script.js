var models = [
    {
        name : '1) Bmw 418d',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : '2) Mazda CX-3',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : '3) Volvo S60',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance'
    },
    {
        name : '4) Skoda Superb',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : '5) Honda Civic',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];


var index = 2;
var slideCount = models.length;
var settings = {
    duration: '1000', //2000 ms
    random: true
}

init(settings);


document.querySelector('.fa-caret-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);

});


document.querySelector('.fa-caret-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);

});



function init(settings){

    var previous;
    setInterval(() => {
        
        if(settings.random){
            do {
                index = Math.floor(Math.random()*slideCount);  
            }while(index == previous)
            previous = index;
        }else{

        }
        showSlide(index);
        console.log(index);

    }, settings.duration);
}


function showSlide(i){
    
    if(i<0){
        i = slideCount-1;
    } else if (i>=slideCount){
        i = 0;
    };
    index = i;

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}