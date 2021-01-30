// $.getJSON("index.json", function(json) {
//     console.log(json); 
// });

// fetch('https://fakestoreapi.com/products')
//   .then(response => response.json())
//   .then(data => console.log(data));

document.getElementById('product-details').addEventListener
function getProduct() {
  fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((data) => {
      let output = '<h2>Recommended Items </h2>'
      console.log(data);
      data.forEach(function (product) {
        output += `
      <div class="card">
      <div class="card-body">
    Name: ${product.title}
    <img src = " ${product.image}" alt="" width="200" height="260">
    </div>
    </div>`;



      });
      document.getElementById('product-details').innerHTML = output;
    })


}
getProduct();


