const electron = require('electron');
const {app, BrowserWindow} = electron;

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        width: 615,
        height: 500,
        icon: 'imgs/radio.png',
        webPreferences:{
            nodeIntegration: true
        }
    })
    win.loadFile('index.html');
})