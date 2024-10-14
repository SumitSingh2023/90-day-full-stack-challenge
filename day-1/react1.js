let root = document.getElementById("root")
let title = document.createElement('h1')

title.innerHTML="I Love Javascript"



let pageTitle = document.createElement('h1')
pageTitle.innerHTML ="I love react"
pageTitle.classList.add('page-title','blue')

let like = document.createElement('h3')
like.innerHTML = "Likes"
let count = 0

let counting = document.createElement('p')
counting.innerHTML=count

let btn = document.createElement('button')
btn.innerHTML="likes"
btn.addEventListener("click",()=>{
    count++
    counting.innerHTML=count
})

root.append(title,pageTitle,like,counting,btn)