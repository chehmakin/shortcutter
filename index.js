
let shift = document.querySelector('.shift')
let ctrl = document.querySelector('.ctrl')
let alt = document.querySelector('.alt')
let alt_s = document.querySelectorAll('.alt_s')
let shift_s = document.querySelectorAll('.shift_s')

console.log(shift_s.length)

document.addEventListener('keydown', (event) => {
    if(event.keyCode == 16){
        shift.classList.add('shift_anim')
        for(var i = 0; i < shift_s.length; i++) {
        shift_s[i].style.color = 'rgba(237, 78, 45, 1)'
        }
    }

    if(event.keyCode == 17){
    ctrl.classList.add('ctrl_anim')
    }

    if(event.keyCode == 18){
        alt.classList.add('alt_anim')
        for(var i = 0; i < alt_s.length; i++) {
            alt_s[i].style.color = 'rgba(10, 207, 132, 1)'
        }
        
        }

})

document.addEventListener('keyup', (event) => {
    if(event.keyCode == 16){
        shift.classList.remove('shift_anim')
        for(var i = 0; i < shift_s.length; i++) {
        shift_s[0].style.color = 'rgba(237, 78, 45, 0.5)'
        }
    }

    if(event.keyCode == 17){
        ctrl.classList.remove('ctrl_anim')
    }

    if(event.keyCode == 18){
        alt.classList.remove('alt_anim')
        for(var i = 0; i < alt_s.length; i++) {
            alt_s[i].style.color = 'rgba(10, 207, 132, 0.5)'
        }
    }
})



const exec = require('child_process').exec

function isRunning(win, mac){
    return new Promise(function(resolve, reject){
        const plat = process.platform
        const cmd = plat == 'win32' ? 'tasklist' : (plat == 'darwin' ? 'ps -ax | grep ' + mac : (plat == 'linux' ? 'ps -A' : ''))
        const proc = plat == 'win32' ? win : (plat == 'darwin' ? mac : (plat == 'linux' ? linux : ''))
        if(cmd === '' || proc === ''){
            resolve(false)
        }

        exec(cmd, function(err, stdout, stderr) {
            resolve(stdout.toLowerCase().indexOf(proc.toLowerCase()) > -1)
        })
    })
}

isRunning('Calculator.exe').then((a) => {
    console.log(a);
    // if(a){
    //     let space = document.querySelector('.space')

    //     space.innerHTML = test.developer;
    // }else{
    //   console.log('Калькулятор закрыт!')
    // }
  })

