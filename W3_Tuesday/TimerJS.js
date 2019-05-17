/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var f = (function (){
    var timer  ; 
    
    function click(){
        if(timer != null){
            clearInterval(timer) ; 
            timer = null  ; 
        }
        else{
            timer = setInterval(repeat ,  1000);
        }
    }
    
    function repeat(){
        
        data.innerHTML +=" repeat" ;  
    }
    
    return {
        x: click
    };
})(); 
