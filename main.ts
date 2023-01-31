// Main Process (app)
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Render Process (window)
  const window = new BrowserWindow({
    width: 800,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      // feature that ensures that both, your preload scripts and Electrons
      // internal logic run in seperate context.
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
    },
  });
  window.loadFile("index.html");
  window.webContents.openDevTools();
}

app.whenReady().then(createWindow);
// Event listeners for the main process

app.on("window-all-closed", () => {
  // Not complete quit when X is pressed (only MAC)
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows.length === 0) {
    createWindow();
  }
});

// const N = new Notification(title: '', body: '')
// N.show()

// Chromium: Web engine for rendering the UI
// V8 Engine: provides capibilities to execute JS Code inside browser enviroment
// Node JS: built on V8 Engine, runs JS + more features

// Babel: Compiler for high level of javascript
