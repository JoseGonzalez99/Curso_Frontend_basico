const cardsContainer = document.querySelector('.cards-container');



const btn_personal_profile= document.querySelector('.navbar-email');
const profile_menu= document.querySelector('.desktop-menu');


//componen de mobile
const btn_BurgerMenu= document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

//componentes del carrito
const btn_cart= document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('.shoping-product-detail');



//Componentes del detalle de productos
const btn_closeProductDetail=document.querySelector('.product-detail-close');
const productDetail =document.querySelector('.product-detail');





//-------------------------------------------

btn_personal_profile.addEventListener('click',toggle_profile_menu);

function toggle_profile_menu(){
   profile_menu.classList.toggle('inactive');
   productDetail.classList.add("inactive");
}

btn_BurgerMenu.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

btn_cart.addEventListener('click',toggleshoppingCartContainer);
function toggleshoppingCartContainer(){
    mobileMenu.classList.add('inactive');
    profile_menu.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}



btn_closeProductDetail.addEventListener('click',toggleProductDetail);
function toggleProductDetail(){
  productDetail.classList.toggle('inactive');
  profile_menu.classList.add('inactive');
  shoppingCartContainer.classList.add('inactive');

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




function  mostrardetallesdeproducto(){
  productDetail.classList.remove('inactive');
}


function renderProductlist(arr){

    for(product of arr){
        
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        //Creo el elemento de la imagen del producto
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);

        productImg.addEventListener('click',mostrardetallesdeproducto);

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