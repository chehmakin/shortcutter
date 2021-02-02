// // let shift = document.el
// document.addEventListener('keydown', (event) => {
//     if (event.keyCode == 16) {
//         shift.style.width = '168px';
//         shift.style.height = '60px';
//     }
// })

// document.addEventListener('keyup', (event) => {
//     if (event.keyCode == 16) {
//         shift.style.width = '42px';
//         shift.style.height = '24px';
//     }
// })

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

// isRunning('Calculator.exe').then((a) => {
//     console.log(a);
//     if(a){
//         let space = document.querySelector('.space')

//         space.innerHTML = test.developer;
//     }else{
//       console.log('Калькулятор закрыт!')
//     }
//   })

