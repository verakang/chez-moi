"use strict";

$(document).ready(function () {
  //swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  }); //scroll

  $(function () {
    $(window).scroll(function () {
      var scrollVal = $(this).scrollTop();

      if (scrollVal > 400) {
        $('.gotop').removeClass('d-none');
      } else {
        $('.gotop').addClass('d-none');
      }
    });
  }); //form check

  (function () {
    'use strict'; // Fetch all the forms we want to apply custom Bootstrap validation styles to

    var forms = document.querySelectorAll('.needs-validation'); // Loop over them and prevent submission

    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
  })(); //json資料輸出 


  var xhr = new XMLHttpRequest();
  xhr.open('get', 'https://verakang.github.io/AJAX_practice/js/data.json', true);
  xhr.send(null);

  xhr.onload = function () {
    var str = JSON.parse(xhr.responseText); // show出所有資訊-公司

    for (var i = 0; i < str.length; i++) {
      $('.company-list').append("<li class=\"company-item card border-0 col-12 col-lg-4 position-relative bg-transparent\">\n      <div class=\"card-img\"><img src=\"".concat(str[i].works[0].photos[0], "\" class=\"card-img-top\" alt=\"photo\"></div>\n      <div class=\"card-body\">\n          <h5 class=\"card-title\"><a href=\"#\" class=\"stretched-link\">").concat(str[i].company, "</a></h5>\n      </div></li>"));
    } // show出所有資訊-設計


    for (var _i = 0; _i < str.length; _i++) {
      for (var j = 0; j < 3; j++) {
        $('.works-list').append("<li class=\"work-item card border-0 col-12 col-lg-4 position-relative bg-transparent\">\n        <div class=\"card-img\"><img src=\"".concat(str[_i].works[j].photos[1], "\" class=\"card-img-top\" alt=\"photo\"></div>\n        <div class=\"card-body\">\n            <h5 class=\"card-title\"><a href=\"#\" class=\"stretched-link\">").concat(str[_i].works[j].title, "<span class=\"separate px-3\">|</span>").concat(str[_i].company, "</a></h5>\n        </div></li>"));
      }
    } // 公司搜尋


    $('.company-search').click(function (e) {
      // company-input值的抓取
      // 搜尋前先清空內容
      $('.company-item').remove();
      $('.notfound').remove();
      $('.target').css("opacity", "0");
      e.preventDefault();
      var key = $('.company-input').val();

      if (key.length != 0) {
        $('.target>span').text(key);
        $('.target').css("opacity", "1");
      } // 撈出含關鍵字的資料


      var count = 0;

      for (var _i2 = 0; _i2 < str.length; _i2++) {
        var item = str[_i2].company;

        if (item.indexOf(key) >= 0) {
          count += 1;
          $('.company-list').append("<li class=\"company-item card border-0 col-12 col-lg-4 position-relative bg-transparent\">\n          <div class=\"card-img\"><img src=\"".concat(str[_i2].works[0].photos[0], "\" class=\"card-img-top\" alt=\"photo\"></div>\n          <div class=\"card-body\">\n              <h5 class=\"card-title\"><a href=\"#\" class=\"stretched-link\">").concat(str[_i2].company, "</a></h5>\n          </div></li>"));
        }
      }

      if (count == 0) {
        $('.company-result').append("<p class=\"notfound\">\u67E5\u8A62\u4E0D\u5230\u76F8\u95DC\u8CC7\u8A0AQQ</p>");
      }
    }); // 設計搜尋

    $('.work-search').click(function (e) {
      // company-input值的抓取
      // 搜尋前先清空內容
      // $('.result-item').remove();
      $('.work-item').remove();
      $('.notfound').remove();
      $('.target').css("opacity", "0");
      e.preventDefault();
      var key = $('.work-input').val();

      if (key.length != 0) {
        $('.target>span').text(key);
        $('.target').css("opacity", "1");
      } // 撈出含關鍵字的資料


      var count = 0;

      for (var _i3 = 0; _i3 < str.length; _i3++) {
        for (var _j = 0; _j < 3; _j++) {
          // console.log(str.length)
          var item = str[_i3].works[_j].title; // console.log(item)

          if (item.indexOf(key) >= 0) {
            count += 1;
            console.log(count);
            $('.works-list').append("<li class=\"work-item card border-0 col-12 col-lg-4 position-relative bg-transparent\">\n            <div class=\"card-img\"><img src=\"".concat(str[_i3].works[_j].photos[1], "\" class=\"card-img-top\" alt=\"photo\"></div>\n            <div class=\"card-body\">\n                <h5 class=\"card-title\"><a href=\"#\" class=\"stretched-link\">").concat(str[_i3].works[_j].title, "<span class=\"px-3 text-primary\">|</span>").concat(str[_i3].company, "</a></h5>\n            </div></li>"));
          }
        }
      }

      if (count == 0) {
        $('.work-result').append("<p class=\"notfound\">\u67E5\u8A62\u4E0D\u5230\u76F8\u95DC\u8CC7\u8A0AQQ<p>");
      }
    });
  };
});
//# sourceMappingURL=all.js.map
