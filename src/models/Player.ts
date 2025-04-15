import { Pokemon } from './Pokemon';

export class Player {
    name: string;
    pokemon_list: Pokemon[];
    current_pokemon?: Pokemon;

    constructor(name: string) {
        this.name = name;
        this.pokemon_list = [];
    }
}