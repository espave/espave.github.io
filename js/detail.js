$(document).ready(() => {
    getProducts(' ');
  });
  
  function getProducts(searchText){
  
  // Replace ./data.json with your JSON feed
  fetch('/js/datadb.json').then(response => {
    return response.json();
  }).then(data => {

    let products = data;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
productid = urlParams.get('productid');

console.log(productid);

    let output = '';
    $.each(products, (_index, product) => {

                if (product.PID != null) {
                  if (product.PID.toLowerCase().includes(productid.toLowerCase())) {

                    if(product.Offer != "")
                    {
                        output += `
                        <div class="container-fluid py-5">
                        <div class="row px-xl-5">
                            <div class="col-lg-5 pb-5">
                                <div id="product-carousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner border">
                                        <div class="carousel-item active">
                                            <img class="w-100 h-100" src="img/${product.PID}.jpg" alt="Image">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100 h-100" src="img/${product.PID}-1.jpg" alt="Image">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100 h-100" src="img/${product.PID}-2.jpg" alt="Image">
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                        <i class="fa fa-2x fa-angle-left text-dark"></i>
                                    </a>
                                    <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                                        <i class="fa fa-2x fa-angle-right text-dark"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-7 pb-5">
                                <h3 class="font-weight-semi-bold">${product.Name}</h3>
                                <h3 class="text-muted ml-2"><del>$${product.Price}</del></h3>
                                <h3 class="font-weight-semi-bold mb-4">Oferta: $${product.Offer}</h3>
                                <p class="mb-4">${product.Detail}</p>
                                <div class="d-flex align-items-center mb-4 pt-2">
                                    <div class="input-group quantity mr-3" style="width: 130px;">
                                        <div class="input-group-btn">
                                            <button class="btn btn-primary btn-minus" >
                                            <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control bg-secondary text-center" value="1">
                                        <div class="input-group-btn">
                                            <button class="btn btn-primary btn-plus">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>    
                                    <a href="https://wa.me/+50767029915?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.Name}"><i class="fa fa-whatsapp" style="font-size:48px;color:green"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                          `;
                    }
                    else {
                        output += `
                        <div class="container-fluid py-5">
                        <div class="row px-xl-5">
                            <div class="col-lg-5 pb-5">
                                <div id="product-carousel" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner border">
                                        <div class="carousel-item active">
                                            <img class="w-100 h-100" src="img/${product.PID}.jpg" alt="Image">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100 h-100" src="img/${product.PID}-1.jpg" alt="Image">
                                        </div>
                                        <div class="carousel-item">
                                            <img class="w-100 h-100" src="img/${product.PID}-2.jpg" alt="Image">
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                        <i class="fa fa-2x fa-angle-left text-dark"></i>
                                    </a>
                                    <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                                        <i class="fa fa-2x fa-angle-right text-dark"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-7 pb-5">
                                <h3 class="font-weight-semi-bold">${product.Name}</h3>
                                <h3 class="font-weight-semi-bold mb-4">$${product.Price}</h3>
                                <p class="mb-4">${product.Detail}</p>
                                <div class="d-flex align-items-center mb-4 pt-2">
                                    <div class="input-group quantity mr-3" style="width: 130px;">
                                        <div class="input-group-btn">
                                            <button class="btn btn-primary btn-minus" >
                                            <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control bg-secondary text-center" value="1">
                                        <div class="input-group-btn">
                                            <button class="btn btn-primary btn-plus">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>    
                                    <a href="https://wa.me/+50767029915?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.Name}"><i class="fa fa-whatsapp" style="font-size:48px;color:green"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                        `;
                    }
          return false;

                  }
              }
      
        });
  
    $('#productdetail').html(output);
  
  }).catch(err => {
    // Do something for an error here
    console.log(err);
  });
  
  }