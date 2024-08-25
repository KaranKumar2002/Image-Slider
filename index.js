const b=document.querySelector('.start');
const images=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7mmNmFdqySURhihlbYVRvRtoyIzjPNGKAw&s','https://static1.srcdn.com/wordpress/wp-content/uploads/2023/07/iron-man-in-comic-book-armor-art.jpg','https://ew.com/thmb/7dvGbywmpUKbrvb0GrgSCWUyTL4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/0002509893242534535-2000-d9a970916e114345979cc48256338b05.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUT3puS06scewKXnlmjTJBNkOjxB-EgI7sg&s','https://wallpapers.com/images/hd/captain-america-android-0aqaztdwgpz41epy.jpg','https://cdn.marvel.com/content/1x/042_bluebayou_digital_keyart_teaser_r16_lg.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dJnP2tQa3M4Vx9Sn7UA36xcNYfleqF0VZA5MzVy3-GQJZPRBd2taLHWTGrmA0YbsmA0&usqp=CAU'];
const div=document.querySelectorAll('.displayer');
const stop=document.querySelector('.stop');
let n=0;
let i=0;
let IntervalId=null;
b.addEventListener('click',(e)=>{
   clearInterval(IntervalId);
   const p=document.createElement('img');
   p.style.width='300px';
   p.style.height='400px';
   IntervalId=setInterval(() => {
    p.src=images[i];
    i=(i+1)%images.length;
    div[n].appendChild(p);
    n=(n+1)%div.length;
   }, 1000);
})
stop.addEventListener('click',()=>{
   clearInterval(IntervalId);

})
