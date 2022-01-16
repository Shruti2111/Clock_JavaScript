setInterval(() => {
    date=new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();

    hr=30*h+m/2;
    min=6*m;
    sec=6*s;
    
    
    hours.style.transform = `rotate(${hr}deg)`;
    minutes.style.transform = `rotate(${min}deg)`;
    seconds.style.transform = `rotate(${sec}deg)`;
},1000);