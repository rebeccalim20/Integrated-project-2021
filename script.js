// $.getJSON("index.json", function(json) {
//     console.log(json); 
// });

// fetch('https://fakestoreapi.com/products/1')
//   .then(res => res.json())
//   .then(json => console.log(json))


// fetch doc product details 
// $(document).ready(() => {
//     getProduct();
   
//     e.preventDefault();
//   });

// function getProduct() {
//   fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => {
//       let output = ' '
//       // console.log(data);
      
//       data.forEach(function (product) {
//         output += `    
//         <div class="card">
//         <img class="card-img-top" src = " ${product.image}" alt="">
//         <div class="card-body">
//         <div class="card-footer bg-transparent border-success">
//         <h5 class="card-title"> ${product.title}</h5>
//         <p class="text-center">$ ${product.price}</p>
//         <a onclick="productselected('${product.id}')" class="btn btn-dark" href="#">Details</a>


//         </div>
//         </div>
//         </div>
//         `;
        
//       });
//       document.getElementById('product-details').innerHTML = output;
//     })
//   }
  

//   function productselected(id){
//     sessionStorage.setItem('productId', id);
//     window.location = 'product.html';
//     return false;
//   }

//   document.getElementById('product-infos').addEventListener




$(document).ready(() => {
    getProducts();
});


function getProducts(){
 
  axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      console.log(response);
      let products = response.data;
      let output = ' ';

      $.each(products, (index,products) => {
        output += `
        <div class="card">
        <img class="card-img-top" src = " ${products.image}" alt="">
        <div class="card-body">
        <div class="card-footer bg-transparent border-success">
        <h5 class="card-title"> ${products.title}</h5>
        <p class="text-center">$ ${products.price}</p>
        <a onclick="productselected('${products.id}')" class="btn btn-dark" href="#">Details</a>

        </div>
        </div>
        </div>
        `;
      });

      $('#product-details').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function productselected(id){
  sessionStorage.setItem('productId', id);
  window.location = 'product.html';
  return false;
}

function productinfos(){
  let productId = sessionStorage.getItem('productId');

  axios.get('https://fakestoreapi.com/products/'+productId)
    .then((response) => {
      console.log(response);
      let product = response.data;

      let output =`
      <div class="card">
      <img class="card-img-top" src = " ${product.image}" alt="">
      <div class="card-body">
      <div class="card-footer bg-transparent border-success">
      <h5 class="card-title"> ${product.title}</h5>
      <p class="text-center">$ ${product.price}</p>

      </div>
      </div>
      </div>
      `;

      $('#product-info').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
