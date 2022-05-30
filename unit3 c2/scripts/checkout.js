





let id;
function checkout(e){
    e.preventfault()
    alert("Your order is accepted")

    const myTimeout=setTimeout(myGreeting,3000)
    function mygreeting(){
        alert("Your order is preparing")
    }
    
        function mystop(){
            clearTimeout(myTimeout)
        }
        const cooking=setTimeout(myGreeting,8000)
        function cooking(){
            alert("Your order is packed")
        }
        
            function mystop(){
                clearTimeout(cooking)
            }
        const deliver=setTimeout(myGreeting,10000)
        function deliver(){
             alert("Your order is out for delivery")
        }
            
            function mystop(){
                    clearTimeout(deliver)
            }
            const delivery=setTimeout(myGreeting,12000)
            function delivery(){
                 alert("Your order is delivered")
            }
                
                function mystop(){
                        clearTimeout(delivery)
                }

            
    
}