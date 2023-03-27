(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btnz');
    let clearBtn = document.querySelector('.btn-clear');
    let equalBtn = document.querySelector('.btn-equal');

/*
    buttons.forEach(function(btn){
        btn.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value;
            alert(value);
        })

    });
*/

screen.value = '';

    buttons.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            let value = e.target.dataset.num;
            screen.value += value;
            
        })
    });

    /*
    equalBtn.addEventListener('click',(e)=>{
        if(screen.value === ''){
            screen.value = "";
        }else{
            
            let result = eval(screen.value); //from string to actual numbers and computes it ...
            //console.log('screen.value:', screen.value);
            if (result === undefined) {
                screen.value = "Error";
              } else {
                screen.value = result;
              }
        }

    })
    */

    equalBtn.addEventListener('click', (e) => {
        if (screen.value === '') {
          screen.value = "";
        } else {
          try {
            const expression = new Function('return ' + screen.value);
            const result = expression();
            screen.value = result;
          } catch (error) {
            screen.value = "Error";
            
          }
        }
      });

      clearBtn.addEventListener('click', (e) => {
        screen.value='';
      });


})();