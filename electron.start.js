// BEST ELECTRON TUTORIAL
// https://www.youtube.com/watch?v=kN1Czs0m1SU

const electron = require("electron");
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;
const execa = require("execa");
const LocalStore = require('./LocalStore');

const localStore = new LocalStore({
	// We'll call our data file 'user-preferences'
	configName: 'user-preferences',
	defaults: {
		// 800x600 is the default size of our window
		windowBounds: { width: 800, height: 600 }
	}
});

function runParcel() {
	return new Promise(resolve => {
		let output = "";
		const parcelProcess = execa("parcel", ["index.html"]);
		const concat = chunk => {
			output += chunk;
			//console.log(output);
			if (output.includes("Built in ")) {
				parcelProcess.stdout.removeListener("data", concat);
				console.log(output);
				resolve();
			}
		};
		parcelProcess.stdout.on("data", concat);
	});
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

async function createWindow() {
	// Create the browser window.
	const { width, height } = localStore.get('windowBounds');
	mainWindow = new BrowserWindow({ width: width, height: height });

	await runParcel();
	// and load the index.html of the app.
	mainWindow.loadURL(`http://localhost:1234`);

	// Open the DevTools.
	// mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on("closed", () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	mainWindow.on('resize', () => {
		// The event doesn't pass us the window size, so we call the `getBounds` method which returns an object with
		// the height, width, and x and y coordinates.
		let { width, height } = mainWindow.getBounds();
		// Now that we have them, save them using the `set` method.
		localStore.set('windowBounds', { width, height });
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
