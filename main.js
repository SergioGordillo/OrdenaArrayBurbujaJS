function principal3(){
    let array=[9,5,2,3,1,4,7,10,8,6]; 

    let original=document.getElementById("original");
    original.innerHTML=""; //Con esto limpio el array
    for (let i = 0; i < array.length; i++) {
        let element=array[i]; 
        if(i==array.length-1){
            original.innerHTML+=element;//Aquí ya muestro el array ordenado sin haber creado una variable para ello
        } else {
            original.innerHTML+=element+",";//Aquí ya muestro el array ordenado sin haber creado una variable para ello
        }
       
    }

    array=ordenarArray(array); 
    let ordenado=document.getElementById("ordenado");
    ordenado.innerHTML="";  //Con esto limpio el array
    for (let i = 0; i < array.length; i++) {
        let element=array[i]; 
        if(i==array.length-1){
            ordenado.innerHTML+=element;//Aquí ya muestro el array ordenado sin haber creado una variable para ello
        } else {
            ordenado.innerHTML+=element+",";//Aquí ya muestro el array ordenado sin haber creado una variable para ello
        }
    }


}


function ordenarArray(arr) {
    const l = arr.length;
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( arr[ j ] > arr[ j + 1 ] ) {
          [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
        }
      }
    }
  
    return arr;
  }