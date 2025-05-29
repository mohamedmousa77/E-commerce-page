let thumbnail = document.querySelectorAll(".product-thumbnail");
let mainImg = document.getElementById("mainProductImg");

//? the following logic is to chnage the main cover img once thumbnail selected:
thumbnail.forEach((element, index) => {
    element.addEventListener('click', ()=> {
        mainImg.src = `images/image-product-${index+1}.jpg`;
        thumbnail.forEach(t => t.classList.remove('active'));
        element.classList.add("active");
    });
});
//? The following function is occupiad to open the lightbox
mainImg.addEventListener('click',()=>openLightbox());
function openLightbox () {
    document.getElementById('lightbox-img').src = mainImg.src;
    document.getElementById("lightbox").style.display = 'flex';
}
function closeLightbox () {
    document.getElementById("lightbox").style.display = 'none';
}
let index = 1;
let nextBtn= document.getElementById("next");
nextBtn.addEventListener('click', () => nextSlide());

function nextSlide () {
    index++;
    if(index > thumbnail.length){index = 1};
    document.getElementById('lightbox-img').src = `images/image-product-${index}.jpg`;
}
function prevSlide () {
    index--;
    if(index > thumbnail.length || index<1){index = 4};
    document.getElementById('lightbox-img').src = `images/image-product-${index}.jpg`;
}
// TODO: The following function is occupiad to the cart logic
cartItems = 0;
function addToCart () {

}
function toggleCart (){

}
function checkout() {
    alert('Checked out!');
}

let itemCount = document.getElementById("itemCount");
let incrementBtn = document.querySelector(".increment-icon");
let decrementBtn = document.querySelector(".decrement-icon");

incrementBtn.addEventListener('click', ()=> {
    let count = Number.parseInt(itemCount.textContent);
    count = count +1;
    itemCount.textContent = count;
});
decrementBtn.addEventListener('click', ()=> {
    
    let count = Number.parseInt(itemCount.textContent);
    if(count ===0 ){return;}else{

    count = count -1;
    itemCount.textContent = count;
    }

});