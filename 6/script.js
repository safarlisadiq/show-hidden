let inp = document.getElementById("pass");
let btn = document.getElementById("btn");
let test = document.getElementById('test')

// console.log(btn.className);



function show(){
    if(inp.type == 'password'){
        inp.type = 'text';
        btn.textContent = "Hide";
        btn.className = 'btn btn-danger btn-sm';

    }else{
        inp.type = 'password';
        btn.textContent = "Show";
        btn.className = 'btn btn-success btn-sm'
    }
}
function long(){
    if(inp.value.length<8){
        test.innerHTML= 'zeif'

    }
    // btn.className='btn btn-success btn-sm'

else( inp.value.length>8 ) 
   
        test.innerHTML='guclu'
        btn.className='btn btn-success btn-sm'
    }






// let inp2 = document.getElementById("test");

// function test(){
//     alert(inp2.value);
// }
