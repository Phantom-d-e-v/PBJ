const { app, BrowserWindow, Menu } = require("electron");
const isDev = require("electron-is-dev");
const path = require("path");
const { windowsStore } = require("process");

let templateWindow;
let detailWindow;
let adminWindow;

function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {},
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
  win.loadURL("http://localhost:3000");
}

function createTemplateWindow() {
  templateWindow = new BrowserWindow({
    width: 800,
    height: 900,
    title: "Choose Template",
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {},
  });

  templateWindow.loadURL("http://localhost:3000/template");
}

function createDetailWindow() {
  detailWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {},
  });

  detailWindow.loadURL("http://localhost:3000/details");
}

function createAdminWindow() {
  adminWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    autoHideMenuBar: false,
    resizable: false,
    webPreferences: {},
  });

  adminWindow.loadURL("http://localhost:3000/admin");
}
const mainMenuTemplate = [
  {
    label: "Template",
    click() {
      createTemplateWindow();
    },
  },
  {
    label: "Details",
    click() {
      createDetailWindow();
    },
  },
  {
    label: "Admin",
    click() {
      createAdminWindow();
    },
  },
];

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
