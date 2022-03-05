getNews();
function getNews() {
  $("#load").show();
  $('.posts').text('');
  var keyword = $("#keyword").val();
  if(keyword=='') {
    keyword = 'latest';
  }
  var url = `https://gnews.io/api/v4/search?q=${keyword}&token=c19ec240b11a0cab8cb7a745eacd4d1f`;
  fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      $("#load").hide();
        var getArticles = data.articles;
        for(var i = 0; i < getArticles.length;i++) {
            var html = `<div class="card m-3 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${getArticles[i].image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${getArticles[i].title}</h5>
                  <p class="card-text">${getArticles[i].description}</p>
                  <p class="card-text"><small class="text-muted">${getArticles[i].publishedAt}</small></p>
              <a href="${getArticles[i].url}" target = "_blank" class="btn btn-secondary">Read More</a>
              <p></p>
                </div>
              </div>
            </div>
          </div>`;
          $('.posts').append(html);
        }
    });
}
$(document).ready(function() {
    fetch('https://gnews.io/api/v4/top-headlines?&token=c19ec240b11a0cab8cb7a745eacd4d1f]')
    .then(function (response) {
        return response.json();
        
    })
    .then(function (data) {
      $("#load").hide();
        var getArticles = data.articles;
        for(var i = 0; i < getArticles.length;i++) {
            var html = `<div class="card m-3 shadow">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${getArticles[i].image}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${getArticles[i].title}</h5>
                  <p class="card-text">${getArticles[i].description}</p>
                  <p class="card-text"><small class="text-muted">${getArticles[i].publishedAt}</small></p>
              <a href="${getArticles[i].url}" target = "_blank" class="btn btn-secondary">Read More</a>
              <p></p>
                </div>
              </div>
            </div>
          </div>`;
          $('.posts').append(html);
        }
    });
});

