

/*This file drives the navigation , built by kiwalabyebash@gmail.com*/ 
var refresher;


    const threshold = 700;
    const navbar = document.querySelector('.navbar-nav');
    const navigation = document.querySelector('.navbar-expand-md');
    var border = 'solid 2px red';


    

    class Div{
        constructor(width,height,color,text,position){
            this.width = width;
            this.height = height;
            this.color = color;
            this.text = text;
            this.position = position;
        }

        make(){
           const div = document.createElement('div');
           div.style.width = `${this.width}vw`;
           div.style.height = `${this.height}vh`;
           div.style.backgroundColor = this.color;
           div.style.position = 'relative';
           //div.innerHTML = `Hello world`;
           return div;
        }
    }
    const div2 = new Div(28,100,'none','relative')
    const createdDiv = div2.make();
    navigation.appendChild(createdDiv);
    //alert(div2.make().outerHTML);


    const bar = document.createElement("div");
    //bar.style.border = 'solid 2px red';
    bar.style.backgroundColor = 'none';
    bar.innerHTML = '&#9776;';
    bar.style.position = 'relative';
    bar.style.zIndex = '1000';
    bar.style.marginTop = '-450px';
    bar.style.color = 'white';
    bar.style.width = '10%';
    bar.style.height = '100%';
    bar.style.display = 'flex';
    bar.style.textAlign = 'center';
    bar.style.justifyContent = 'center';
    bar.style.alignItems = 'center';
    bar.style.fontSize = '20px';

    
    


    



// window.onload = function animate() {
//     refresher = window.requestAnimationFrame(animate);}

    if(window.innerWidth < threshold){

    
        navbar.style.marginLeft = -2000 + 'px';
    
        if(navigation.firstChild){
            navigation.insertBefore(bar,navigation.firstChild);
            //navigation.appendChild(bar);
        }


    bar.addEventListener('click',()=>{
        navbar.style.marginLeft = "-18.7%";
        //navbar.style.border = border;
        createdDiv.style.display = 'block';
        bar.style.translate = 'rotate(x)'
        bar.innerHTML = 'X';
        createdDiv.style.zIndex = 2000;
        navbar.style.zIndex = 3000;
    })

        bar.addEventListener('mouseover', function () {
            bar.style.color = 'red';

        })

        bar.addEventListener('mouseout', function () {
            bar.style.color = 'white';
        })





        createdDiv.addEventListener('click', () => {
            navbar.style.marginLeft = -2000 + 'px';
            bar.innerHTML = '&#9776;'
            createdDiv.style.zIndex = -20000;
            //createdDiv.style.marginLeft = '200000px';
        })


    } else if (window.innerWidth > threshold){
        createdDiv.style.display = 'none';
    }















