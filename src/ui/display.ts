import figlet from 'figlet';
import chalk from 'chalk';
import { clear } from 'console';
import { displayMainMenuPrompt } from './prompts';

function createFigletText(text: string): string {
    return figlet.textSync(text);
}

export function displayWelcomeMessage() {
    clear();
    console.log(chalk.magenta(createFigletText('PokemonCLI!')));
    console.log(chalk.red('Welcome to the Pokemon CLI!'));
    console.log('\n')
    displayMainMenuPrompt();
}

export function displayCredits() {
    clear();
    console.log(chalk.magenta(figlet.textSync('PokemonCLI!')));
    console.log(chalk.blue('Developed by: Lytzeer'));
    console.log(chalk.yellow('Thanks for playing!'));
    console.log(chalk.green('Version: 1.0.0'));
}

export function displayExitMessage() {
    clear();
    console.log(chalk.magenta(createFigletText('PokemonCLI')));
    console.log(chalk.red('Thank you for playing!'));
    console.log(chalk.blue('Goodbye!'));
}