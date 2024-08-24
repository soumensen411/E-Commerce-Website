function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
function click() {
    const toggleBtn = document.querySelector('#pro-btn');
    let currentItem = 6; 
    let isSeeMore = true; 

    toggleBtn.onclick = () => {
        let box = [...document.querySelectorAll('.pro-cart')];
        
        if (isSeeMore) {
            for (let i = currentItem; i < currentItem + 6 && i < box.length; i++) {
                box[i].style.display = 'inline-block';
            }
            currentItem += 6;
            toggleBtn.textContent = 'See Less Products';
        } else {
            
            currentItem = Math.max(currentItem - 6, 6);
            for (let i = currentItem; i < box.length; i++) {
                box[i].style.display = 'none';
            }
            toggleBtn.textContent = 'See More Products';
        }
        isSeeMore = !isSeeMore;
    }
} 

function swiper(){
    const subsbtn = document.getElementById('subs');
        const emailInput = document.querySelector('#email-input');         
        subsbtn.addEventListener('click', function() {
            alert('Subscribe Successfull!')
        });
        

        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

}

function addCart(){
    // const proBtn = document.getElementById('cart-btn');
    // const ProName = document.getElementById('pro-name');
    // proBtn.addEventListener('click',function(){
    //     localStorage.setItem("FoodItem: ",ProName.innerHTML);
    //     console.log(ProName.innerHTML)
    // })
}
// addCart();
click();
swiper();
// locomotive();


// let key = prompt("Your Name: ")
// let value = document.querySelectorAll('.pro-1 h1')
// localStorage.setItem(key,value)
// console.log(`${key} is ${localStorage.getItem(key)}`)
