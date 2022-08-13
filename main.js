const menu_email= document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


const carritobutton= document.querySelector('.navbar-shopping-cart');
const carritoMenu = document.querySelector('.product-detail');


const cardsContainer = document.querySelector('.cards-container');


menu_email.addEventListener('click',toggleDesktopMenu);
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

burgerMenu.addEventListener('click',toggleMobileMenu);
function toggleMobileMenu(){
    
    const isAsideClosed= carritoMenu.classList.contains('inactive');

    if(!isAsideClosed){
        carritoMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

carritobutton.addEventListener('click',togglecarritoMenu);
function togglecarritoMenu(){
    const ismobileMenuClosed= mobileMenu.classList.contains('inactive');
    

    if(!ismobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    carritoMenu.classList.toggle('inactive');
}


const productList = [];
productList.push({
  name: 'Bike',
  price: 100,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Balls',
    price: 44,
    image: 'https://5.imimg.com/data5/YY/ZS/OR/SELLER-11100852/football-500x500.jpg',
  });
  productList.push({
    name: 'Figure Naruto',
    price: 48,
    image: 'https://cdn.shopify.com/s/files/1/1140/8354/products/TNM-11900-CA_dc573b0d-a7c5-42ae-8fd7-6c0f9a5c5374_407x.jpg?v=1647693145',
  });
  productList.push({
    name: 'Weed',
    price: 10,
    image: 'https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/04/Weed-Terms-Gear-Patrol-Lead-Full.jpg?crop=0.6701030927835051xw:1xh;center,top&resize=640:*',
  });



function renderProductlist(arr){

    for(product of arr){
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Creo el elemento de la imagen del producto
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');


        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;



        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);


        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
        productInfoFigure.appendChild(productImgCart);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
  
       productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
  
        cardsContainer.appendChild(productCard);
    }

}

renderProductlist(productList);