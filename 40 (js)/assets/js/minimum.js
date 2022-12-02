window.addEventListener('DOMContentLoaded', () => {
let form = document.getElementById('search-form');

if(form) {
  form.addEventListener('submint', (e) => {
      e.perventDefault();

      console.log(e)
      let titleField = e.target.querySelector('input[type=search]');
          typeField = e.target.querySelector('select[name=type]');
      
      if(titleField.value.Lenght ===0) {
        return;
      }

      axios ({
        url:e.target.action, //e.target.getAttribute('action'),
        method: e.target.method, //e.target.getAttribute('method)'
      })
  })
}

  /* axios ({
    url:
  }) */
})
