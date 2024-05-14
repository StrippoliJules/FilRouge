"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const database_1 = require("./database");
function createWindow() {
    let win = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile('./dist/index.html');
}
electron_1.app.on('ready', () => {
    (0, database_1.initializeDatabase)();
    createWindow();
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
