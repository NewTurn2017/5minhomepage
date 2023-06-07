// Function to load content
function loadContent(page) {
  var content = document.getElementById('content')

  switch (page) {
    case 'home':
      content.innerHTML =
        '<div class="d-flex justify-content-center align-items-center" style="height: 80vh;"><iframe width="70%" height="70%" src="https://www.youtube.com/embed/oJLm6Fa6wCY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
      break
    case 'portfolio':
      content.innerHTML =
        '<div class="card"><div class="card-body"><h5 class="card-title">Portfolio</h5><p class="card-text">이 웹사이트 서비스는 미드저니 이미지 프롬프트를 자동으로 생성해주는 서비스를 제공합니다.</p><a href="https://www.imagicrafter.shop/" class="btn btn-primary">Go to website</a></div></div>'
      break
    case 'gallery':
      content.innerHTML =
        '<div class="container"><div class="row justify-content-center"><div class="col-lg-4"><img src="img/image1.png" class="img-fluid"></div><div class="col-lg-4"><img src="img/image2.png" class="img-fluid"></div><div class="col-lg-4"><img src="img/image3.png" class="img-fluid"></div></div></div>'
      break
    case 'sns':
      content.innerHTML =
        '<a href="https://www.youtube.com/channel/UC8Xo4z90lBkCyn-WDXp7qlw"><i class="material-icons">play_circle_outline</i></a><a href="https://www.instagram.com/jaehyundevhub/"><i class="material-icons">photo_camera</i></a><a href="https://developer-here.com/"><i class="material-icons">desktop_mac</i></a>'
      break
    default:
      content.innerHTML = '<h1>Welcome to My Homepage!</h1>'
  }
}

// Add event listeners to nav links
document.getElementById('home').addEventListener('click', function () {
  loadContent('home')
})
document.getElementById('portfolio').addEventListener('click', function () {
  loadContent('portfolio')
})
document.getElementById('gallery').addEventListener('click', function () {
  loadContent('gallery')
})
document.getElementById('sns').addEventListener('click', function () {
  loadContent('sns')
})

// Load default page
loadContent('home')
