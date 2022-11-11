import fetch from 'node-fetch';
import vscode from 'vscode';

export const fetchData = async (): Promise<void> => {
    const data = await fetch('https://api.github.com/users/himself65');
    const json = (await data.json()) as any;
    console.log('data', json);
    vscode.window
        .showInformationMessage(`get data from user: ${json.login}`, 'Open in browser', 'OK')
        .then((selection) => {
            if (selection === 'Open in browser') {
                vscode.env.openExternal(vscode.Uri.parse(json.html_url));
            }
        });
};
