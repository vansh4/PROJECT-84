canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_hight=70;
car1_image="car (1).png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_hight=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
backgroundimg="racing.jpg"
function appe(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbg;
    background_imgtag.src=backgroundimg;
    car1_imgtag=new Image();
    car1_imgtag.onload=uploadcar1;
    car1_imgtag.src=car1_image;
    car2_imgtag=new Image();
    car2_imgtag.onload=uploadcar2;
    car2_imgtag.src=car2_image;
    }
    function uploadbg(){
        ctx.drawImage(backgroundtag,0,0,canvas.width,canvas.height);
    }
    function uploadcar1(){
        ctx.drawImage(car1_imgtag,car1_x,car1_y,car1_width,car1_hight);
    }
    function uploadcar2(){
        ctx.drawImage(car2_imgtag,car2_x,car2_y,car2_width,car2_hight);
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(){
        keyPressed=e.keyCode;
        console.log(keyPressed);
        if(keyPressed=='38'){
            up();
            console.log("up");
        }
        if(keyPressed=='40'){
            Down();
            console.log("Down");
        }
        if(keyPressed=='37'){
            left();
            console.log("left");
        }
        if(keyPressed=='39'){
            right();
            console.log("right");
        }
    }