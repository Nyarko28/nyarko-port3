
const kibab=document.querySelector('.kibab')
const mobile_nav=document.querySelector('aside')
let toggled = false;

kibab.addEventListener('click', function(){
  if(toggled){
  
    
    mobile_nav.style.width='10%';
    mobile_nav.style.transition=' all 1s ease ';

      this.innerHTML = "&#9776"
      toggled=false;
      }
      else{
      
        mobile_nav.style.width='20%';
        mobile_nav.style.display='flex';
          
         
          mobile_nav.style.transition='all 2s ease';
          this.innerHTML = "&#x2715;"
          
         

    toggled=true;
  }
})
window.addEventListener('load',()=>{
  document.querySelector('section').innerHTML+=`<!-- this is the work of emmanuel nyarko 0534086538 
     emmanuelnyarko284@gmail.com
     -->`;
     console.log(`<!-- this is the work of emmanuel nyarko 0534086538 
     emmanuelnyarko284@gmail.com
     -->`)
})