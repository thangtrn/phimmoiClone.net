var header = document.querySelector('#header');

header.innerHTML = `
    <div class="header-container">
        <div class="header-logo" href="#">
            <a href="#">
                <img src="./img/logo.png" alt="">
            </a>
        </div>
        <div class="search-box">
            <input name="search-value" type="text" placeholder="Tìm: tên phim, đạo diễn, diễn viên">
            <button id="submit"><img src="./img/spotlight.png" alt=""></button>
        </div>
    </div>
`