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
	  	<a href="payment.html"><img src="img/cart.png" alt="" style="width:50px; height:50px;"></a>
	  	</li>
	  	<li class="nav-item-item">
	  	<a style ="color: #000000; font-size:18px;" href="payment.html">Buy Now</a>
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






function getfirst() {
  axios.get('https://fakestoreapi.com/products/1')
    .then((response) => {
      console.log(response);
      let first = response.data;
      let output = `

    <div class="col d-flex justify-content-center">
        <div class="content-card" style="width: 10rem;">
            <h2>Checkout</h2>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height: 10rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style="margin-bottom: 0px;">Delivery Address</p>
                <p class="text-left"> Name: XXXXXXX
                    <br> block number :XXXX
                    <br> Singapore : 123456
                </p>
            </div>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                  <img class="card-img-top" style="height :150px;width:130px;" src = " ${first.image}" alt="">
                    <div class="d-flex flex-column">
                        <div class="p-2">
                        <h5 class="card-title"> ${first.title}</h5>
                        </div>
                        <div class="p-2"> <p class="text-center">price:$${first.price}</p></div>
                        <div class="p-2"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height:3rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style=" color: rgb(22, 137, 245);  margin-bottom: 0px;"><b>Shipping Method</b></p>
                </p>
            </div>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card"
            style="background-color:#FFF9F6; width: 30rem;height:5rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style=" margin-bottom: 0px;">Ninja Van
                    <br>
                    (receive in 1-2 days)
                </p>
                </p>
            </div>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height:3rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style=" color: #219F58;  margin-bottom: 0px;"><b>Remarks</b></p>
                </p>
            </div>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height:3rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style=" margin-bottom: 0px;"><b>Total Order:</b></p>
                </p>
            </div>
        </div>
    </div>

    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height:3rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style="margin-bottom: 0px;"><b>My Vouchers:</b></p>
                </p>
            </div>
        </div>
    </div>
    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height:3rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style="margin-bottom: 0px;"><b>Payment Option</b></p>
                </p>
            </div>
        </div>
    </div>
    <div class="col d-flex justify-content-center">
        <div class="card" style="width: 30rem;height:8rem;box-shadow: 6px 5px 7px rgba(126, 126, 126, 0.144);">
            <div class="card-body">
                <p class="text-left" style="  margin-bottom: 0px;">product subtotal : <br> Shipping subtotal <br>Total
                </p>
                </p>
            </div>
        </div>
    </div>

    <ul class="nav fixed-bottom nav-pills nav-justified">
        <li class="nav-item-items">
            <p style="font-size: 20px;margin-bottom: 0px;">$109.95</p>
            <p style="font-size: 15px;margin-bottom: 0px;">Gst included where applicable</p>
        </li>
        <li class="nav-item-item">
        <a href=#" style="color:black; font-size: 20px;margin-bottom: 0px;">Place Order</a>
        </li>
    </ul>
    <br>
    <br>
    <br>
    <br>

    

      `;
      $('#firsts').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

getfirst();