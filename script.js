// $.getJSON("index.json", function(json) {
//     console.log(json); 
// });

// fetch('https://fakestoreapi.com/products/1')
//   .then(res => res.json())
//   .then(json => console.log(json))


// fetch doc product details 
document.getElementById('product-details').addEventListener
function getProduct() {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      let output = ' '
      // console.log(data);
      data.forEach(function (product) {
        output += `    
        <div class="card">
        <img class="card-img-top" src = " ${product.image}" alt="">
        <div class="card-body">
        <div class="card-footer bg-transparent border-success">
        <h5 class="card-title"> ${product.title}</h5>
        <p class="text-center">$ ${product.price}</p>
        <a onclick="productselected('${product.id}')" class="btn btn-dark" href="#">Movie Details</a>


        </div>
        </div>
        </div>
        `;
        
      });
      document.getElementById('product-details').innerHTML = output;
    })
  }
  
  getProduct();

  function productselected(id){
    sessionStorage.setItem('productId', id);
    window.location = 'product.html';
    return false;
  }


  // product details more infos
function productinfos(){
   let productId = sessionStorage.getItem('productId');
   fetch('https://fakestoreapi.com/products/'+productId)
    .then((response) => response.json())
    .then((data) => {
      let output = ' '
       console.log(data);
       data.forEach(function (product) {
        output += `    
        <div class="card">
        <img class="card-img-top" src = " ${product.image}" alt="">
        <div class="card-body">
        <div class="card-footer bg-transparent border-success">
        <h5 class="card-title"> ${product.title}</h5>
        <p class="text-center">$ ${product.price}</p>
        <a onclick="productselected('${product.id}')" class="btn btn-dark" href="#">Movie Details</a>

        </div>
        </div>
        </div>
        `;
        
      });
      document.getElementById('product-infos').innerHTML = output;
    })

  }


  // function productinfos() {
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
  //         <a onclick="productselected('${product.id}')" class="btn btn-dark" href="#">Movie Details</a>
  
  
  //         </div>
  //         </div>
  //         </div>
  //         `;
          
  //       });
  //       document.getElementById('product-details').innerHTML = output;
  //     })
  //   }
    
