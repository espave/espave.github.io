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
producttype = urlParams.get('producttype');
category = urlParams.get('category');

    let output = '';
    $.each(products, (_index, product) => {

      if(producttype == null)
      {
              output += `
                        <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
                        <div class="card product-item border-0 mb-4">
                            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                                <img class="img-fluid w-100" src="${product.PicUrl}" alt="">
                            </div>
                            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 class="text-truncate mb-3">${product.Name}</h6>
                                <div class="d-flex justify-content-center">
                                    <h6>$${product.Price}</h6>
                                </div>
                            </div>
                            <div class="card-footer d-flex justify-content-between bg-light border">
                                <a href="detail.html?productid=${product.PID}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Detalle</a>
                                <a href="https://wa.me/+50769044732?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.PID}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
                            </div>
                        </div>
                    </div>
                      `;
      }
      else
      {
                if (product.PType != null) {
                  if (product.PType.toLowerCase().includes(producttype.toLowerCase()) &&
                      (product.Category.toLowerCase().includes(category.toLowerCase()))) {
                      output += `
            <div class="col-lg-4 col-md-6 col-sm-12 pb-1">
            <div class="card product-item border-0 mb-4">
                <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                    <img class="img-fluid w-100" src="${product.PicUrl}" alt="">
                </div>
                <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                    <h6 class="text-truncate mb-3">${product.Name}</h6>
                    <div class="d-flex justify-content-center">
                        <h6>$${product.Price}</h6>
                    </div>
                </div>
                <div class="card-footer d-flex justify-content-between bg-light border">
                    <a href="detail.html?productid=${product.PID}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Detalle</a>
                    <a href="https://wa.me/+50769044732?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.Name}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
                </div>
            </div>
        </div>
          `;
                  }
              }
      }
        });
  
    $('#productlist').html(output);
  
  }).catch(err => {
    // Do something for an error here
    console.log(err);
  });
  
  }