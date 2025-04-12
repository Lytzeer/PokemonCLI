import chalk from 'chalk';
import inquirer from 'inquirer';
import { displayCredits, displayExitMessage } from './display';


export function displayMainMenuPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'Start Game',
                'Credits',
                'Exit'
            ]
        }
    ]).then((answers) => {
        switch (answers.action) {
            case 'Start Game':
                console.log(chalk.green('Starting the game...'));
                break;
            case 'Credits':
                displayCredits();
                break;
            case 'Exit':
                displayExitMessage();
                process.exit(0);
        }
    }).catch((error) => {
        console.error(chalk.red('An error occurred while displaying the menu:', error));
    });
}