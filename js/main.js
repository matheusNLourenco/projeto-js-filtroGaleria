// Filtro de galeria
const btn = document.querySelectorAll('.btn')
const div = document.querySelectorAll('.div')

btn.forEach(filter)
  

function filter(btn){
  btn.addEventListener('click', ()=>{
    let select = btn.className.split(' ')[1]

    div.forEach(n => {
      if(n.classList.contains(select)){
        n.style.display = 'block'
      }else{
        n.style.display = 'none'
      }

      if(select == 'all'){
        n.style.display = 'block'
      }
    })
  })
 }

btn.forEach(btn => btn.addEventListener('click', menuActive))

function menuActive(){
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}

