// homepage layout and product page layout for using get request
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
        <p class="text-center">$ ${products.price}
        <br>
        <a onclick="productselected('${products.id}')" class="btn btn-dark" href="#">Details</a>
        </p>

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
      <img class="card-img-top" src = " ${product.image}" alt="">
      <h5 class="card-title"> ${product.title}</h5>
      <p class="text-center">$ ${product.price}</p>
      <div class="btn-group">
      <button class="btn btn-default btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Product descriptions
      </button>
      <div class="dropdown-menu">
      <p class="text-center">${product.description}</p>
      </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      `;
      $('#product-info').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
