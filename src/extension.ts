// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {

	let d = new Date();

	function myTimer() {
		d = new Date();
		vscode.window.setStatusBarMessage(d.toLocaleTimeString());
	}

	let disposable = vscode.commands.registerCommand('clock.show', () => {
		setInterval(myTimer, 1000);
		vscode.window.showInformationMessage('Clock is active on Status Bar');
	});

	context.subscriptions.push(disposable);
}


// this method is called when your extension is deactivated
export function deactivate(context: vscode.ExtensionContext) {
	
	let commands = vscode.commands.getCommands();
	let values;
	commands.then( command => 
		values = command.find(data => data == 'clock.show')
	);
	

}
