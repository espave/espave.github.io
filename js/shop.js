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

    if (producttype == "silverr") 
    {
        document.getElementById('OrderRequest').innerHTML = ' Plata 925 Solo Por Pedido';
        document.getElementById('OrderRequestDescription').innerHTML = 'Las piezas de plata 925 solo se venden por pedido. El cual debe ser abonado 50% y cancelar el día de la entrega. El tiempo de entrega es de 15 a 18 días.';
    }

    let output = '';
    $.each(products, (_index, product) => {

      if(producttype == null)
      {

        if(product.Offer != "")
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
                        <h6 class="text-muted ml-2"><del>$${product.Price}</del></h6>
                        <h6 class="font-weight-semi-bold mb-4">&nbsp;$${product.Offer}</h6>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light border">
                        <a href="detail.html?productid=${product.PID}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Detalle</a>
                        <a href="https://wa.me/+50767029915?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.PID}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
                    </div>
                </div>
            </div>
          `;
        }
        else {
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
                    <a href="https://wa.me/+50767029915?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.PID}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
                </div>
            </div>
        </div>
          `;
        }
      }
      else
      {
                if (product.PType != null) {
                  if (product.PType.toLowerCase().includes(producttype.toLowerCase()) &&
                      (product.Category.toLowerCase().includes(category.toLowerCase()))) {

                        if(product.Offer != "")
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
                                        <h6 class="text-muted ml-2"><del>$${product.Price}</del></h6>
                                        <h6 class="font-weight-semi-bold mb-4">&nbsp;$${product.Offer}</h6>
                                        </div>
                                    </div>
                                    <div class="card-footer d-flex justify-content-between bg-light border">
                                        <a href="detail.html?productid=${product.PID}" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>Detalle</a>
                                        <a href="https://wa.me/+50767029915?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.Name}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
                                    </div>
                                </div>
                            </div>
                        `;
                        }
                        else {
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
                                            <a href="https://wa.me/+50767029915?text=Hola%20Estoy%20Interesado%20en%20este%20producto:%20${product.Name}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
                                        </div>
                                    </div>
                                </div>
                                `;
                        }
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