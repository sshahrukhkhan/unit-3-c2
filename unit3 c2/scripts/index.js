// Add the coffee to local storage with key "coffee"



const url="https://masai-mock-api.herokuapp.com/coffee/menu";
  const menu=document.getElementById("menu")
   var bucketData=JSON.parse(localStorage.getItem("coffee"))

   fetch(url)
   .then(function(res){
       return res.json()
   })
   .then(function(res){
       console.log("res:",err);
     appendData(res)
   })
   .catch(function(err){
       console.log("err:",err);
   })

   function appendData(res){
       res.data.forEach(function(el,index){
           let div =document.createElement("div")
           div.setAttribute("class","menu")
           console.log(el);
           
           let image=document.createElement("img")
           image.src=el.image;

           let name=document.createElement("p")
           name.innerText=el.name;

           let price=document.createElement("p")
           price.innerText=el.price;

           let btn=document.createElement("button")
           btn.setAttribute("id","add_to_bucket")
           btn.innerHTML="add_to_bucket";
           btn.addEventListener("click",function(){
               addTobucket(el)
            })
            div.append(image,name,price,btn)

            menu.append(div)

        })

        }

        function addTobucket(el){
            console.log(el)
            bucketData.push(el)
            localStorage.setItem("coffee",JSON.stringify(bucketData))
            document.getElementById("coffee_count").innerText=bucketData.length
            console.log(bucketData.lenght)
        }
