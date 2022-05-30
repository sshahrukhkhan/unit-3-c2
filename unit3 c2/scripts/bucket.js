// On clicking remove button the item should be removed from DOM as well as localstorage.


var bucketData=JSON.parse(localStorage.getItem("coffee"))
console.log(bucketData)

var total=bucketData.reduce(function(sum,elem,index,arr){
    console.log(elem)
    return sum;Number(elem,price)
})
document.getElementById("total_amount"),innertext=(total)

bucketData.map(function(el,index){
    let div=document.createElement("div")
    div.setAttribute("class","menu")
    let image=document.createElement("img")
image.src=el.image;

let name=document.createElement("p")
name.innerText=el.name;

let price=document.createElement("p")
price.innerText=el.price;

let btn=documet.createElement("button")
btn.setAttribute("id","remove")
btn.addEventListner("click",function(){
 removeItem(el,index)
})

div.append(image,name,price,btn)

document.getElementById("bucket").append(div)
})
function removeItem(el,index){
console.log(el,index);
bucketData.splice(index,1)
console.log(bucketData)
localStorage.setItem("coffee",JSON.stringify(bucketData))
window.location.reload();
}
