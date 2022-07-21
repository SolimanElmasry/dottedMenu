let box= document.createElement('div');
box.setAttribute('id','box')
document.body.appendChild(box);
for(let i=0;i<9;i++)
{
    let dot=document.createElement('span');
    dot.setAttribute('id','dots');
    box.appendChild(dot);
}
let dot1=dots.item(0);
dot1.setAttribute('style','--i:0;--x:-1;--y:0')
let dot2=dots.item(1);
dot2.setAttribute('style','--i:1;--x:1;--y:0')
let dot3=dots.item(2);
dot3.setAttribute('style','--i:2;--x:0;--y:-1')
let dot4=dots.item(3);
dot4.setAttribute('style','--i:3;--x:0;--y:1')
let dot5=dots.item(4);
dot5.setAttribute('style','--i:4;--x:1;--y:1')
let dot6=dots.item(5);
dot6.setAttribute('style','--i:5;--x:-1;--y:-1')
let dot7=dots.item(6);
dot7.setAttribute('style','--i:6;--x:0;--y:0')
let dot8=dots.item(7);
dot8.setAttribute('style','--i:7;--x:-1;--y:1')
let dot9=dots.item(8);
dot9.setAttribute('style','--i:8;--x:1;--y:-1')
box.onclick=()=>{
    box.classList.toggle('active');
};

let img1=document.createElement("img");
dot1.appendChild(img1);
img1.setAttribute('src','../img/icon/icon1.png')
let img2=document.createElement("img");
dot2.appendChild(img2);
img2.setAttribute('src','img/icon/icon2.png')
let img3=document.createElement("img");
dot3.appendChild(img3);
img3.setAttribute('src','../img/icon/icon3.png')
let img4=document.createElement("img");
dot4.appendChild(img4);
img4.setAttribute('src','../img/icon/icon4.png')
let img5=document.createElement("img");
dot5.appendChild(img5);
img5.setAttribute('src','../img/icon/icon5.png')
let img6=document.createElement("img");
dot6.appendChild(img6);
img6.setAttribute('src','../img/icon/icon6.png')
let img7=document.createElement("img");
dot7.appendChild(img7);
img7.setAttribute('src','../img/icon/icon7.png')
let img8=document.createElement("img");
dot8.appendChild(img8);
img8.setAttribute('src','../img/icon/icon8.png')
let img9=document.createElement("img");
dot9.appendChild(img9);
img9.setAttribute('src','../img/icon/icon9.png')



