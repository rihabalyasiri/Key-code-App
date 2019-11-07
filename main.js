document.body.addEventListener('keydown', function(e) {
    let heading = document.getElementById('heading')
    let keyResult = document.getElementById('keyResult')
    let keyCodeResult = document.getElementById('keyCodeResult')
    let codeResult = document.getElementById('codeResult')
    let codeE = e.code;
    let keyCodeE = e.keyCode;
    let keyE = e.key

    console.log(codeE)
    console.log(keyCodeE)
    console.log(keyE)

    heading.innerHTML = keyCodeE;
    keyResult.innerHTML = keyE;
    keyCodeResult.innerHTML = keyCodeE;
    codeResult.innerHTML = codeE
    



})