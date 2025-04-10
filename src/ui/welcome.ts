import figlet from 'figlet';
import chalk from 'chalk';
import { clear } from 'console';
import inquirer from 'inquirer';

export function displayWelcomeMessage() {
    clear();
    console.log(chalk.magenta(figlet.textSync('PokemonCLI!')));
    console.log(chalk.red('Welcome to the Pokemon CLI!'));
    console.log(chalk.blue('Explore the world of Pokemon right from your terminal!'));
    console.log(chalk.gray('Game created by: Lytzeer'));
}

export function displayWelcomeMenu() {
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
            case 'View Pokemon List':
                console.log(chalk.green('Starting the game...'));
                break;
            case 'Credits':
                console.log(chalk.yellow('Displaying Credits'));
                break;
            case 'Exit':
                console.log(chalk.red('Exiting the application...'));
                process.exit(0);
        }
    }).catch((error) => {
        console.error(chalk.red('An error occurred while displaying the menu:', error));
    });
}
