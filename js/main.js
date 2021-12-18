function handleNavBar(){
    var menuItem = Array.from(document.querySelectorAll('.nav-menu-item'));

    menuItem.forEach((item,index)=>{
        item.onmouseover = function(){
            item.classList.add('drop-down');
        }
        item.onmouseout = function(){
            item.classList.remove('drop-down');
        }
    })
}
handleNavBar()

// ---------------Slider---------------
var topMovie = [
    {
        movieImage: 'https://ephimmoi.net/wp-content/uploads/2021/10/venom-2-doi-mat-tu-thu-54064-thumbnail.jpg',
        movieDescription: 'HD Vietsub + TM | 90 phút',
        movieName1: 'Venom 2: Đối mặt tử thù',
        movieName2: 'Venom: Let There Be Carnage',
        movieLink: 'https://ephimmoi.net/venom-2-doi-mat-tu-thu/'
    },
    {
        movieImage: 'https://ephimmoi.net/wp-content/uploads/2021/09/shang-chi-va-huyen-thoai-thap-nhan-51239-thumbnail.jpg',
        movieDescription: 'HD Vietsub + TM | 132 phút',
        movieName1: 'Shang-Chi Và Huyền Thoại Thập Nhẫn',
        movieName2: 'Shang-Chi and the Legend of the Ten Rings',
        movieLink: 'https://ephimmoi.net/shang-chi-va-huyen-thoai-thap-nhan/'
    },
    {
        movieImage: 'https://ephimmoi.net/wp-content/uploads/2021/08/611727c62b3cf.jpg',
        movieDescription: 'HD Vietsub | ',
        movieName1: 'Giải Cứu ‘Guy’',
        movieName2: 'Free Guy',
        movieLink: 'https://ephimmoi.net/giai-cuu-guy/'
    },
    {
        movieImage: 'https://ephimmoi.net/wp-content/uploads/2021/08/dao-hai-tac-34373-thumbnail.jpg',
        movieDescription: 'HD Vietsub | Tập 999',
        movieName1: 'Đảo Hải Tặc',
        movieName2: 'One Piece',
        movieLink: 'https://ephimmoi.net/dao-hai-tac/'
    },
    {
        movieImage: 'https://vungtv.org/wp-content/uploads/2021/07/18834-250x350.jpg',
        movieDescription: 'HD Vietsub | Full 12/12',
        movieName1: 'Bạn Trai Thuê',
        movieName2: 'Boy For Rent',
        movieLink: 'https://ephimmoi.net/ban-trai-thue/'
    },
    {
        movieImage: 'https://ephimmoi.net/wp-content/uploads/2021/07/goa-phu-den-250x350.jpg',
        movieDescription: 'HD Vietsub | 143 phút',
        movieName1: 'Góa Phụ Đen',
        movieName2: 'Black Widow',
        movieLink: 'https://ephimmoi.net/goa-phu-den/'
    },
  
]


var movieContainer = document.querySelector('.movie-carousel');

// render giao dien cho slide movie top
var topMovieHtmls = topMovie.map((movie)=>{
    return `
    <div class="movie-item">
        <a href="${movie.movieLink}">
            <span class="ribbon">
                ${movie.movieDescription}
            </span>
            <div class="movie-item-img">
                <img src="${movie.movieImage}" alt="">
            </div>
            <div class="movie-info">
                <h3 class="movie-name-1">${movie.movieName1}</h3>
                <h4 class="movie-name-2">${movie.movieName2}</h4>
            </div>
        </a>
    </div>
    `
})

movieContainer.innerHTML = topMovieHtmls.join(' ');

$('.movie-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-chevron-left"></i></button>`,
    nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-chevron-right"></i></button>`,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: `35%`
            }
        }
      ]
});

// --------------Phan Movie Content--------------
function handleMovieTabs(){
    var tabBlock = [...document.querySelectorAll('.movie-tab-block ul li')];
    var tabList = [...document.querySelectorAll('.movie-tab-list')];

    var currentTab = 0;
    var currentList = 0;
    function changeTabListMovie(index){
        tabList[currentList].classList.remove('mv-active');
        tabList[index].classList.add('mv-active');
        currentList = index;
    }
    tabBlock.forEach((tab,i)=>{
        tab.onclick = ()=>{
            tabBlock[currentTab].classList.remove('isActive');
            tab.classList.add('isActive');
            currentTab = i;
            changeTabListMovie(i);
        }
    })
    

}
handleMovieTabs()

//---------Movie dashboard-----
function handleMovieBlock() {
    function handleMovieTheaters(){
        var movieTheatersWrapper = document.querySelector('#movie-theaters .movie-wrapper')
        var seeMore = document.querySelector('#movie-theaters .see-more');
        seeMore.href = 'https://ephimmoi.net/category/chieu-rap/';
        var length = 0;
        var movieHTML = dataMovie.map(function(movie) {
            if(movie.category.includes('Chiếu Rạp') && length < 12) {
                length++;
                return `
                <div class="movie-card">
                    <span class="ribbon">${movie.status}</span>
                    <a href="${movie.link}">
                        <div class="movie-card-img">
                            <img src="${movie.image}" alt="">
                        </div>
                        <div class="movie-card-name">
                            <span class="movie-name-vn">${movie.nameVn}</span>
                            <span class="movie-name-en">${movie.nameEng}</span>
                        </div>
                    </a>
                </div>
                `
            }
        })
        movieTheatersWrapper.innerHTML = movieHTML.join(' ');
    }
    handleMovieTheaters();

    function handleMovieSeries() {
        var seeMore = document.querySelector('#movie-series .see-more');
        seeMore.href = 'https://ephimmoi.net/phim-bo/';
        var movieSeriesWrapper = document.querySelector('#movie-series .movie-wrapper')
        var length = 0;
        var movieHTML = dataMovie.map(function(movie) {
            if(movie.category.includes('Phim Bộ') && length < 8) {
                length++;
                return `
                <div class="movie-card">
                    <span class="ribbon">${movie.episode} ${movie.status}</span>
                    <a href="${movie.link}">
                        <div class="movie-card-img">
                            <img src="${movie.image}" alt="">
                        </div>
                        <div class="movie-card-name">
                            <span class="movie-name-vn">${movie.nameVn}</span>
                            <span class="movie-name-en">${movie.nameEng}</span>
                        </div>
                    </a>
                </div>
                `
            }
        })
        movieSeriesWrapper.innerHTML = movieHTML.join(' ');
    }
    handleMovieSeries();

    function handleMovieOddNew() {
        var seeMore = document.querySelector('#movie-odd-new .see-more');
        seeMore.href = 'https://ephimmoi.net/phim-le/';
        var movieOddWrapper = document.querySelector('#movie-odd-new .movie-wrapper')
        var length = 0;
        var movieHTML = dataMovie.map(function(movie) {
            if(movie.category.includes('Phim Lẻ') && length < 8) {
                length++;
                return `
                <div class="movie-card">
                    <span class="ribbon">${movie.status}</span>
                    <a href="${movie.link}">
                        <div class="movie-card-img">
                            <img src="${movie.image}" alt="">
                        </div>
                        <div class="movie-card-name">
                            <span class="movie-name-vn">${movie.nameVn}</span>
                            <span class="movie-name-en">${movie.nameEng}</span>
                        </div>
                    </a>
                </div>
                `
            }
        })
        movieOddWrapper.innerHTML = movieHTML.join(' ');
    }
    handleMovieOddNew();
}
handleMovieBlock()