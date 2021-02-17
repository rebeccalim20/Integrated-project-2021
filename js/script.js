// homepage layout and product page layout for using get request
$(document).ready(() => {
  getProducts();
});

function getProducts() {

  axios.get('https://fakestoreapi.com/products')
    .then((response) => {
      console.log(response);
      let products = response.data;
      let output = ' ';

      $.each(products, (index, products) => {
        output += `
        <a onclick="productselected('${products.id}')" class = "products" href="#">
        <div class="card">
        <img class="card-img-top" src = " ${products.image}" alt="">
        <div class="card-body">
        <div class="card-footer bg-transparent border-success">
        <h5 class="card-title"> ${products.title}</h5>
        <p class="text-center">$ ${products.price}
        <br>
        </p>
        </div>
        </div>
        </div>
        </a>
        `;
      });

      $('#product-details').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function productselected(id) {
  sessionStorage.setItem('productId', id);
  window.location = 'product.html';
  return false;
}

function productinfos() {
  let productId = sessionStorage.getItem('productId');

  axios.get('https://fakestoreapi.com/products/' + productId)
    .then((response) => {
      console.log(response);
      let product = response.data;

      let output = `
      <img class="card-img-top" src = " ${product.image}" alt="">
      <h5 class="card-title"> ${product.title}</h5>
      <p class="text-center">$ ${product.price}</p>

      <button class="btn btn-outline-dark btn-lg btn-block dropdown-toggle" type="button"  aria-haspopup="true" aria-expanded="false">
      Voucher 
      </button>
      <button class="btn btn-outline-dark btn-lg btn-block dropdown-toggle" type="button"  aria-haspopup="true" aria-expanded="false">
      Shipping Method
      </button>
      
      <div class="btn-group">
      <button class="btn btn-outline-dark btn-lg btn-block dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Product descriptions
      </button>
      <div class="dropdown-menu">
      <p class="text-center">${product.description}</p>
      </div>
      </div>

      <ul class="nav fixed-bottom nav-pills nav-justified">
		  <li class="nav-item-items">
	  	<a href="#"><img src="img/cart.png" alt="" style="width:50px; height:50px;"></a>
	  	</li>
	  	<li class="nav-item-item">
	  	<a style ="color: #000000; font-size:18px;" href="#">Buy Now</a>
	  	</li>
	    </ul>
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
