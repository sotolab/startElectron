const { app, BrowserWindow } = require("electron");

//Function to create a window
function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  //Grants access to use NodeJS API
    },
  });
  mainWindow.loadFile("index.html");
}

//Loads the created window
app.whenReady().then(createWindow);

//Quits the app on closing all the windows
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//Prevents re-launching of an already running app
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});