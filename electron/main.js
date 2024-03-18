const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL('http://localhost:8000/');
}

function createIpcMain(){
    const response = spawnSync('./path/to/cFrameworkExecutable') // 替换为你的 C++ 框架可执行文件路径
    ipcMain.on('cFunction', (event) => {
        // 调用 C++ 框架的函数并接收返回值
        const result = response.stdout.toString().trim()

        // 将返回值发送给渲染进程
        event.reply('cFunctionResponse', result)
    });
}

app.whenReady().then(() => {
  createWindow();

  createIpcMain();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});