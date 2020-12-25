"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// slick slider
$(function () {
  $('.section-content-row-2').slick({
    dots: true,
    arrow: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000
  });
});
$(function () {
  $('.section-content-row-4').slick({
    arrows: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000
  });
});

var Typewritter =
/*#__PURE__*/
function () {
  function Typewritter(_ref) {
    var text = _ref.text,
        _ref$time = _ref.time,
        time = _ref$time === void 0 ? 300 : _ref$time;

    _classCallCheck(this, Typewritter);

    this.texts = text.split(",");
    this.sT = document.querySelector(".secondary__title");
    this.realTime = time; // tiempo real

    this.wait = time + 1000; // tiempo de espera

    this.changeTime = 0; // tiempo que usara el intervalo

    this.length = this.texts.length; // cantidad de letras

    this.countChar = 0; // contador de letras escritas

    this.current = 0;
    this.flag = false;
    this.cutText();
  }

  _createClass(Typewritter, [{
    key: "cutText",
    value: function cutText() {
      var _this = this;

      var text = this.texts[this.current];
      var tLength = this.texts[this.current].length; // tiempo de espera al finalizar la palabra

      if (this.countChar === tLength) {
        this.changeTime = this.wait;
      } // cambio de tiempo de retorno


      if (this.flag && this.countChar === tLength - 1) {
        this.changeTime = this.realTime / 4;
      } // tiempo real para cada letra desde que comienza la palabra


      if (this.countChar === 0) {
        this.changeTime = this.realTime;
      }

      this.drawText(text.substr(0, this.countChar)); // Si flag es false aumenta el contador para seguir escribiendo

      if (!this.flag) {
        this.countChar++;

        if (this.countChar === tLength) {
          this.flag = true;
        } // Si flag es true disminuye el contador para eliminar letras  

      } else if (this.flag) {
        this.countChar--;

        if (this.countChar === 0) {
          this.flag = false;
          this.current = ++this.current % this.length;
        }
      }

      setTimeout(function () {
        return _this.cutText();
      }, this.changeTime);
    }
  }, {
    key: "drawText",
    value: function drawText(chars) {
      this.sT.innerHTML = chars;
    }
  }]);

  return Typewritter;
}();

new Typewritter({
  text: "Предвидеть нужды,Избегать профицитов и дефицитов,Повысить точность и прогнозов и планирования бизнеса,Автоматизировать формирование заказов,Сократить операционные расходы,Формировать финансовые планы,Обеспечить эффективную и прозрачную коллаборацию отделов планирования и продаж для лучших результатов",
  time: 150 // velocidad de escritura

});
$('.card').on('click', function () {
  $('.container').toggleClass('container-origin');
});