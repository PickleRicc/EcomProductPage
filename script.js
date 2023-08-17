const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num"),
    addToCartBtn = document.querySelector(".add-to-cart"),
    cartInfo = document.querySelector(".cart-info"),
    navLinks = document.querySelector(".navbar-links"),
    cartIcon = document.querySelector(".cart-icon"),
    cartIconWrapper = document.querySelector(".cart-icon-wrapper"),
    cartWrapper = document.querySelector(".cart-wrapper"),
    lightboxCloseBtn = document.querySelector(".popup-image span"),
    hamburgerBtn = document.getElementById("hamburger-menu")

let cartCount = document.getElementById("cart-count");
let a = 0;


hamburgerBtn.addEventListener('click', () => {
    const mobileNav = document.getElementById("mobilenav")
    mobileNav.style.display = "block"

    const containerOpacity = document.querySelector(".container")
    containerOpacity.style.opacity = "0.3"
    containerOpacity.style.zindex = "-1"


    console.log("hammy")
})

document.querySelector(".closenav").addEventListener("click", () => {
    const mobileNav = document.getElementById("mobilenav")
    mobileNav.style.display = "none"

    const containerOpacity = document.querySelector(".container")
    containerOpacity.style.opacity = "1"
})

lightboxCloseBtn.addEventListener("click", () => {
    document.querySelector('.popup-image').style.display = 'none';
})

navLinks.addEventListener("click", (e) => {
    if (e.target.classList.contains('nav-item')) {
        
        // Define activeBorder inside the scope where you're going to use it
        const activeBorder = document.querySelector('.nav-item.border-bottom');
        
        if (activeBorder) {
            activeBorder.classList.remove('border-bottom');
        }

        e.target.classList.add('border-bottom');
    }
});

cartIcon.addEventListener("click", (e)=>{
    if(cartWrapper.style.display === "none"){
        cartWrapper.style.display = "block";
    } else {
        cartWrapper.style.display = "none";
    }
});

    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    });
    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
      }
    });

addToCartBtn.addEventListener("click", ()=>{
    cartCount.innerText = a;
    cartCount.classList.add('cart-count')
    cartInfo.innerHTML = `<p>Fall Limited Edition Sneakers $125.00 x ${a} <span>$${a * 125.00}</span> </p>`
});


document.querySelectorAll('.image').forEach(img => {
    img.onclick = () => {
        const popupID = document.getElementById('popup-id');
        if (img.src.includes('1')) {
            popupID.src = '/images/image-product-1.jpg';
        document.querySelector('.popup-image').style.display = 'flex';
        } else if (img.src.includes('2')) {
            popupID.src = '/images/image-product-2.jpg';
            document.querySelector('.popup-image').style.display = 'flex';
        }
    }
});