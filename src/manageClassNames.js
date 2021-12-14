export function manageClassNames() {
  


  /*==================================================================
  [ Focus Create Recipe Form ]*/
  document.querySelector('.input').each(function(){
      document.querySelector(this).addEventListener('blur', () =>{
          if(document.querySelector(this).value.trim() !== "") {
              document.querySelector(this).classList.add('has-val');
          }
          else {
              document.querySelector(this).removeClass('has-val');
          }
      })    
  })
          

  
  /*==================================================================
  [ Validate ]*/
  let title = document.querySelector('.validate-input input[name="title"]');
  let ingredients = document.querySelector('.validate-input input[name="ingredients"]');
  let instructions = document.querySelector('.validate-input textarea[name="instructions"]');


  document.querySelector('.validate-form').addEventListener('submit',function(){
      let check = true;

      if(document.querySelector(title).value.trim() === ''){
          showValidate(title);
          check=false;
      }


      if(document.querySelector(ingredients).value.trim() === '') {
          showValidate(ingredients);
          check=false;
      }

      if(document.querySelector(instructions).value.trim() === ''){
          showValidate(instructions);
          check=false;
      }

      return check;
  });


  document.querySelector('.validate-form .input').each(function(){
      document.querySelector(this).focus(function(){
        hideValidate(this);
    });
  });

  function showValidate(input) {
      let thisAlert = document.querySelector(input).parent();

      document.querySelector(thisAlert).classList.add('alert-validate');
  }

  function hideValidate(input) {
      let thisAlert = document.querySelector(input).parent();

      document.querySelector(thisAlert).removeClass('alert-validate');
  }
  
  

};