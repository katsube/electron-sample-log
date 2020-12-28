const { app, BrowserWindow } = require('electron')
const log = require('electron-log')
const fs = require('fs')

log.info('start electron');

let mainWin;

// ログファイル名を変更
/*
(() => {
  const d = new Date();
  const prefix = d.getFullYear() +
                 ('00' + (d.getMonth() + 1)).slice(-2) +
                 ('00' + (d.getDate())).slice(-2);

  const curr = log.transports.file.fileName;
  log.transports.file.fileName = `${prefix}_${curr}`;
})();
*/

// 例外を捕捉する
/*
(() => {
  process.on('uncaughtException', (err) => {
    log.error(process.pid, err);
    app.quit();
  });
})();

// 例外をわざと起こす
buff = fs.readFileSync('foobar.txt')
*/

/**
 * ウィンドウを作成する
 */
function createWindow () {
  // ウィンドウを新たに開く
  mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // ファイルを開く
  mainWin.loadFile('public/index.html')
  log.info({status:true, code:200, message:'open windows'});
}

// 初期化が終了したらウィンドウを新規に作成する
app.whenReady().then(createWindow)


// すべてのウィンドウが閉じられたときの処理
app.on('window-all-closed', () => {
  // macOS以外はアプリを終了する
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// アプリがアクティブになった時の処理
// (macOSはDocのアイコンがクリックされたとき）
app.on('activate', () => {
  // ウィンドウがすべて閉じられている場合は新しく開く
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
