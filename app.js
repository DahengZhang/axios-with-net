const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
    const win = new BrowserWindow({
        x: 0,
        y: 0,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.webContents.openDevTools()
    win.loadURL(`http://localhost:8080`)
})
