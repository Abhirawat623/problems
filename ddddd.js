function volume(a){
    let vol;
    if ( a >=0 && a<=100) {
       vol =a**3;
    }
    
    }
    function volume(l,b,h){
    let volu;
    if ( l >=0 && l<=100 && b >=0 && b<=100 && h >=0 && h<=100) {
       vol =l*b*h;
    }
   
    }

    console.log(volume(3));
    console.log(volume(1,2,3));