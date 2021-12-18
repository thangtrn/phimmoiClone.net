var navBar = document.querySelector('#nav-bar');

navBar.innerHTML = `
<div class="container nav-container">
    <ul class="nav-menu-list">
        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                Phim mới
            </a>
        </li>
        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Thể loại
            </a>
            <ul class="sub-menu">
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Chiến tranh</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Cổ trang</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Gia đình</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Hài hước</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Hành động</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Hình sự</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Võ thuật</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Kinh dị</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Tâm lý</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Viễn tưởng</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Hoạt hình</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Thần thoại</a>
                </li>
            </ul>
        </li>
        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Quốc gia
            </a>
            <ul class="sub-menu">
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Việt Nam</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Ấn Độ</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Hồng Kông</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Nhật Bản</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Thái Lan</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Hàn Quốc</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Trung Quốc</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Mỹ</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Singapore</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Đài Loan</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phillippines</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Châu Âu</a>
                </li>
            </ul>
        </li>

        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Phim lẻ
                </a>
            <ul class="sub-menu">
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2021</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2020</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2019</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2018</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2017</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2016</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2015</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2014</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2013</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2012</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2011</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim lẻ 2010</a>
                </li>
            </ul>
        </li>

        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Phim bộ
            </a>
            <ul class="sub-menu">
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Hàn Quốc</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Trung Quốc</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Đài Loan</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Hồng Kông</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Mỹ</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Thái Lan</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Nhật bản</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Ấn Độ</a>
                </li>
                <li class="sub-item">
                    <a href="#" class="sub-item-link">Phim bộ Phillippines</a>
                </li>
            </ul>
        </li>

        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Phim thuyết minh
                </a>
        </li>
        <li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Phim chiếu rạp
                </a>
        </li><li class="nav-menu-item">
            <a href="#" class="menu-item-link">
                    Trailer
                </a>
        </li>
    </ul>
</div>`


