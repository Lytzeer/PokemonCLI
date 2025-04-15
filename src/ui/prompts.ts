import chalk from 'chalk';
import inquirer from 'inquirer';
import { displayCredits, displayExitMessage, displayChooseFirst } from './display';


export function mainMenuPrompt() {
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
                displayChooseFirst();
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

export function chooseFirstPokemonPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'firstPokemon',
            message: 'Choose your first Pokemon:',
            choices: [
                'Bulbasaur',
                'Charmander',
                'Squirtle'
            ]
        }
    ]).then((answers) => {
        switch (answers.firstPokemon) {
            case 'Bulbasaur':
                console.log(chalk.green('You chose Bulbasaur!'));
                break;
            case 'Charmander':
                console.log(chalk.green('You chose Charmander!'));
                break;
            case 'Squirtle':
                console.log(chalk.green('You chose Squirtle!'));
                break;
        }
    }).catch((error) => {
        console.error(chalk.red('An error occurred while choosing the first Pokemon:', error));
    });
}