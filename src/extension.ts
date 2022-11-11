import * as vscode from 'vscode';

import { fetchData } from './fetchData';
import helloWorld from './helloWorld';

export function activate(context: vscode.ExtensionContext): void {
    context.subscriptions.push(
        vscode.commands.registerCommand('VSCodeExtensionBoilerplate.helloVSCode', () =>
            helloWorld(),
        ),
        vscode.commands.registerCommand('VSCodeExtensionBoilerplate.fetchData', () => fetchData()),
    );
}

export function deactivate(): void {
    // recycle resource...
}
