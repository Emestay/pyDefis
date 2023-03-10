// Les pouvoirs psychiques de Psystigri
// Planquez-vous, Psystigri se déchaine

let objetPsytigri = [-98, -66, 74, -85, 97, 38, 34, -14, 29, -58, 21, 2, 1, 35, 32, 50, -52, 3, -73, -13, -99, 86, -71, -86, 50, 8, -78, 89, -41, 77, 34, -59, -57, 49, 43, 100, 25, 14, -80, -17, 42, -73, -81, 19, -77, -85, -100, 3, 17, 72, 9, 34, 11, 1, 60, 96, 40, 54, 76, -77, -52, 19, -54, -92, -92, 27, 48, -43, 59, 94, 72, -17, -88, 18, 2, -77, 86, 66, -67, 51, 14, 79, -58, -1, -21, 76, 60, 51, -26, -91, 32, 79, 36, 11, -9, 34, -95, -92, -89, -76, 55, 69, -21, -1, 51, 85, 28, 15, -70, 15, 4, -72, 70, -86, 57, -22, -53, -64, 9, 63, 26, 30, -71, -67, -94, 9, 53, -80, 55, -52, -30, 55, 11, 99, 51, -48, 46, -56, -64, 50, -38, 34, 64, 71, -92, 79, -53, -2, 88, -8, 96, 14, 14, -89, -90, -19, -26, 17, 97, 70, 62, 83, 28, 96, -55, -72, -37, 20, -12, -49, 65, 28, -11, -40, 61, -67, 7, -32, 13, -81, -53, -92, 43, -92, -3, 1, -15, -72, 64, -53, -16, 90, -47, -91, 68, 78, -67, 15, -68, -92, -97, -18, -6, 10, -37, -47, 60, -17, -2, -51, -46, 65, 81, 46, 33, -15, 82, 96, 28, -21, -41, -87, -52, -68, 55, -75, 57, -94, -16, -1, -28, 67, 35, 81, 78, -47, 93, -1, 52, -53, 14, 2, -15, 14, -82, 43, -48, -53, 52, -7, -27, -89, 80, 22, 90, -29, -53, -22, -42, 35, -9, 36, 29, -85, 19, -20, 33, -93, 50, 36, -37, -28, -94, -61, -32, -53, -30, -97, -4, -100, -88, -44, 68, 29, -2, 53, -62, -81, -89, 74, 80, 80, 88, -13, -90, 15, 1, -45, 3, 4, 81, 55, -94, -91, -62, -60, -52, 45, -52, 77, 10, -63, 43, -36, -90, 58, 26, -76, -2, -76, -51, 60, 64, 5, 32, 14, 22, 1, -80, -52, -33, 39, 74, -60, 32, 42, -83, -62, 0, -43, -61, 77, -96, -63, -60, 92, 68, -53, -53, 5, 39, -4, 51, 72, -23, 86, 31, 70, 77, 38, -51, 25, -51, 33, -94, -17, 20, -47, 93, 60, 61, 80, -54, -54, -88, -75, 34, 11, 53, 7, -2, 2, -55, -78, 23, -78, -31, -7, 10, 85, 41, 20, -93, -7, -31, 55, -62, -54, -35, -66, -70, -98, -13, 98, -15, 70, 78, 21, -87, -79, -67, 22, 89, 84, -49, 96, 63, 94, 74, 46, 82, -34, 73, 42, 70, 26, -2, 68, -48, -63, -86, 55, 42, 16, -32, -98, 14, 70, -68, -88, -21, 75, 45, 18, 10, 71, 93, 99, -58, 42, 14];
let energiePsytigri = 78;


// Function decompose de Léo

function decompose(n,base){
    if(n == 0){
        return [];
    }
    let digit = n%base;
    let n2 = (n-digit)/base;
    let tab = decompose(n2,base);
    tab.push(digit);

    return tab;
}

// Dicothomie Wass

function dichotomie(tab,n,i1,i2){

    if(i1>i2) {
        return false; 
    }
    let middle=(i1+i2)/2; 
    if(tab[middle]==n) {
        return true; 
    } else if (n>tab[middle]){
        return dichotomie(tab,n,middle+1, i2); 
    } else {
        return dichotomie(tab,n,i2,middle-1); 
    }
}


//traducteur chiffre romain


let dicoRomain = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanTrad(word){
    let sum = 0;
    for(let i =0 ; i < word.length ; i++){
        if(dicoRomain[word[i]] < dicoRomain[word[i+1]]){
            sum -= dicoRomain[word[i]];
        }else{
            sum += dicoRomain[word[i]];
        }
    }
    return sum;
}


console.log(romanTrad('XVI'));
console.log(romanTrad('MMM'));
console.log(romanTrad('IX'));



window.requestAnimFrame = (function () {
    return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

Math.randMinMax = function(min, max, round) {
    var val = min + (Math.random() * (max - min));
    
    if( round ) val = Math.round( val );
    
    return val;
};
Math.TO_RAD = Math.PI/180;
Math.getAngle = function( x1, y1, x2, y2 ) {
    
    var	dx = x1 - x2,
        dy = y1 - y2;
    
    return Math.atan2(dy,dx);
};
Math.getDistance = function( x1, y1, x2, y2 ) {
    
    var 	xs = x2 - x1,
        ys = y2 - y1;		
    
    xs *= xs;
    ys *= ys;
     
    return Math.sqrt( xs + ys );
};

var 	FX = {};

(function() {
    
    var	canvas = document.getElementById('myCanvas'),
        ctx = canvas.getContext('2d'),
        lastUpdate = new Date(),
        mouseUpdate = new Date(),
        lastMouse = [],
        width, height;

    FX.particles = [];

    setFullscreen();
    document.getElementById('button').addEventListener('mousedown', buttonEffect);

    function buttonEffect() {

        var button = document.getElementById('button'),
            height = button.offsetHeight,
            left = button.offsetLeft,
            top = button.offsetTop,
            width = button.offsetWidth,
            x, y, degree;

        for(var i=0;i<40;i=i+1) {

            if( Math.random() < 0.5 ) {

                y = Math.randMinMax(top, top+height);

                if( Math.random() < 0.5 ) {
                    x = left;
                    degree = Math.randMinMax(-45,45);
                } else {
                    x = left + width;
                    degree = Math.randMinMax(135,225);
                }
      
            } else {

                x = Math.randMinMax(left, left+width);

                if( Math.random() < 0.5 ) {
                    y = top;
                    degree = Math.randMinMax(45,135);
                } else {
                    y = top + height;
                    degree = Math.randMinMax(-135, -45);
                }
                
            }
            createParticle({
                x: x,
                y: y,
                degree: degree,
                speed: Math.randMinMax(100, 150),
                vs: Math.randMinMax(-4,-1)
            });
        }
    }
    window.setTimeout(buttonEffect, 100); 

    loop();

    window.addEventListener('resize', setFullscreen );

    function createParticle( args ) {

        var options = {
            x: width/2,
            y: height/2,
            color: 'hsla('+ Math.randMinMax(160, 290) +', 100%, 50%, '+(Math.random().toFixed(2))+')',
            degree: Math.randMinMax(0, 360),
            speed: Math.randMinMax(300, 350),
            vd: Math.randMinMax(-90,90),
            vs: Math.randMinMax(-8,-5)
        };

        for (key in args) {
          options[key] = args[key];
        }

        FX.particles.push( options );
    }

    function loop() {

        var 	thisUpdate = new Date(),
            delta = (lastUpdate - thisUpdate) / 1000,
            amount = FX.particles.length,
            size = 2,
            i = 0,
            p;

        ctx.fillStyle = 'rgba(15,15,15,0.25)';
        ctx.fillRect(0,0,width,height);

        ctx.globalCompositeStyle = 'lighter';

        for(;i<amount;i=i+1) {

            p = FX.particles[ i ];

            p.degree += (p.vd * delta);
            p.speed += (p.vs);// * delta);
            if( p.speed < 0 ) continue;

            p.x += Math.cos(p.degree * Math.TO_RAD) * (p.speed * delta);
            p.y += Math.sin(p.degree * Math.TO_RAD) * (p.speed * delta);

            ctx.save();
        
            ctx.translate( p.x, p.y );
            ctx.rotate( p.degree * Math.TO_RAD );

            ctx.fillStyle = p.color;
            ctx.fillRect( -size, -size, size*2, size*2 );

            ctx.restore();
        }

        lastUpdate = thisUpdate;

        requestAnimFrame( loop );
    }

    function setFullscreen() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    };
})();