const { app, BrowserWindow, globalShortcut, Tray, Menu } = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 1095,
        height: 422,
        resizable: false,
        transparent: true,
        frame: false,
        x: 250,
        y: 280,

        webPreferences: {
            nodeIntegration: true,
            experimentalFeatures: true
        }
    })

    win.loadFile('index.html')
    win.on('close', (ev) => {
        if (win?.isVisible()) {
            ev.preventDefault();
            win.hide();
        }
    });
}


app.whenReady().then(createWindow)

let tray = null
app.whenReady().then(() => {
    tray = new Tray('./tray_icon.ico')
    const contextMenu = Menu.buildFromTemplate([{
        label: 'Quit',
        click: () => {
            BrowserWindow.getAllWindows().forEach((w) => w.destroy());
            app.quit();
        }
    }])
    tray.on('click', () => {
        BrowserWindow.getAllWindows().shift().show();
    });
    tray.setToolTip('Shortcutter')
    tray.setContextMenu(contextMenu)
})




app.whenReady().then(() => {
    // Register a 'CommandOrControl+X' shortcut listener.
    const ret = globalShortcut.register('Alt+Shift+?', () => {
        BrowserWindow.getAllWindows().shift().show();
    })

    if (!ret) {
        console.log('ошибка регистрации')
    }
})





app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();

    }
})
