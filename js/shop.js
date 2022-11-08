$(document).ready(() => {
    getProducts(' ');
  });
  
// $(document).ready(() => {
//     $('#searchForm').on('submit', (e) => {
//       let searchText = $('#searchText').val();
//       getMovies(searchText);
//       e.preventDefault();
//     });
//   });

/* <div class="col-md-3">
<div class="well text-center">
  <img src="${movie.PicUrl}">
  <h5>${movie.Title}</h5>
  <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">${movie.Year} ${movie.Drive}</a>
</div>
</div> */

/* <h6>$${product.Price}</h6><h6 class="text-muted ml-2"><del>$123.00</del></h6> */
  
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
                                <a href="https://wa.me/+50769044732?text=ProductID=${product.PID}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
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
                    <a href="https://wa.me/+50769044732?text=ProductID=${product.PID}"><i class="fa fa-whatsapp" style="font-size:24px;color:green"></i></a>
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
  
 
  function movieSelected(id){
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
  }
  
  function getProduct(){
    let movieId = sessionStorage.getItem('movieId');
  
    axios.get('http://www.omdbapi.com?i='+movieId)
      .then((response) => {
        console.log(response);
        let movie = response.data;
  
        let output =`
          <div class="row">
            <div class="col-md-4">
              <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-md-8">
              <h2>${movie.Title}</h2>
              <ul class="list-group">
                <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="well">
              <h3>Plot</h3>
              ${movie.Plot}
              <hr>
              <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
              <a href="index.html" class="btn btn-default">Go Back To Search</a>
            </div>
          </div>
        `;
  
        $('#productlist').html(output);
      })
      .catch((err) => {
        console.log(err);
      });
  }