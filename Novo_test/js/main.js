class Typewritter {
    constructor({ text, time = 300 }) {
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
  
    cutText() {
      const text = this.texts[this.current];
      const tLength = this.texts[this.current].length;
      
      // tiempo de espera al finalizar la palabra
      if (this.countChar === tLength){
        this.changeTime = this.wait;
      } 
      
      // cambio de tiempo de retorno
      if (this.flag && this.countChar === tLength - 1){
        this.changeTime = this.realTime / 4;
      }
        
      // tiempo real para cada letra desde que comienza la palabra
      if (this.countChar === 0) {
        this.changeTime = this.realTime;
      }
  
      this.drawText(text.substr(0, this.countChar));
   
      // Si flag es false aumenta el contador para seguir escribiendo
      if (!this.flag) {
        this.countChar++;
        if (this.countChar === tLength) {
          this.flag = true;
        }
        
      // Si flag es true disminuye el contador para eliminar letras  
      } else if (this.flag) {
        this.countChar--;
        if (this.countChar === 0) {
          this.flag = false;
          this.current = ++this.current % this.length;
        }
      }
  
      setTimeout(() => this.cutText(), this.changeTime);
    }
  
    drawText(chars) {
      this.sT.innerHTML = chars;
    }
  }
  
  new Typewritter({
    text: "Предвидеть нужды,Избегать профицитов и дефицитов,Повысить точность и прогнозов и планирования бизнеса,Автоматизировать формирование заказов,Сократить операционные расходы,Формировать финансовые планы,Обеспечить эффективную и прозрачную коллаборацию отделов планирования и продаж для лучших результатов",
    time: 150 // velocidad de escritura
  });

  $('.card').on('click', function() {
    $('.container').toggleClass('container-origin');
})

TweenMax.to(".hu__hu__", 1.5, {y:30, yoyo: true, repeat:-1, ease: Sine.easeInOut});

