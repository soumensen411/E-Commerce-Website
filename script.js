function locomotive(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
// locomotive();

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
click();

function swiper(){        
        var swiper = new Swiper(".mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });

}
swiper();

function localStorage(){
    const proBtn = document.querySelector('#cart-btn');
    const ProName = document.querySelector('#pro-name');
    proBtn.addEventListener('click', function () {
        localStorage.setItem("FoodItem: ", ProName.innerHTML);
        console.log(ProName.innerHTML)
    })
}
localStorage();

function email(){
    const subsbtn = document.querySelector('#subs');
    const emailInput = document.querySelector('#email-input');  
    const writediv = document.querySelector("#showemail")       
    // emailInput.addEventListener('')
    subsbtn.addEventListener('click', function() {
        // alert('Subscribe Successfull!')
        writediv.innerText = `"Email: ${emailInput.value} subscribe successfull"`; 
        writediv.style.color= "#fff";
    });
    
}
email();
function moemail() {
    const subsbtn = document.querySelector('#mosubs');
    const emailInput = document.querySelector('#moemail-input');  
    const writediv = document.querySelector("#mo-subs"); 
    
    subsbtn.addEventListener('click', function() {
        writediv.innerText = `Email: ${emailInput.value} subscribe successful`; 
        writediv.style.color = "#000";
    });
}

moemail();