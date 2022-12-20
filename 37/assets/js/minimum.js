/* function checkTrueOrFalse(value, yes, no) {
    if(value) {
      yes()
    } else {
      no()
    }
}


function showTrue() {
  console.log('True state')
}

function showFAlse () {
  console.log('False state')
}

checkTrueOrFalse(confirm('Press ok or cancel') showTrue, showFAlse ) */


loadPage();

function loadPage() {
    let xhr = new XMLHttpRequest;

    xhr.open('GET', 'pages/main.html')
    xhr.send()


    /* console.log(xhr)
    console.log(xhr.response) */

    xhr.onreadystatechange = function() {
        console.log(xhr)
        if(xhr.readyState === 4) {
          console.log(xhr.response)
        }
    }
}

