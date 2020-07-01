import { Injectable } from '@angular/core';
import { HEROES } from 'src/db-data';
import { Heroe } from 'src/app/interfaces/heroes.interface';


@Injectable()
export class HeroesService {
    
    private heroes:Heroe[] = HEROES;

    constructor() { 
        console.log("Service ready to use");
    }


    getHeroes():Heroe[] {
        return this.heroes.sort((a, b) => {
            return a === b ? 0 : a < b ? -1 : 1;
          });
        
    }


    getHeroe( idx: string ) {
        return this.heroes[idx];
        
    }


    buscarHeroes( termino: string ){

        let heroesArr:Heroe[] = [];

        termino = termino.toLowerCase();

        for ( let i = 0; i < this.heroes.length; i++ ){

            let heroe = this.heroes[i];

            let nombre = heroe.nombre.toLowerCase();

            if( nombre.indexOf( termino ) >= 0 ){
                heroe.idx = i;
                heroesArr.push( heroe )
            }

        }

        return heroesArr;

    }

    /*
    getDcHeroes() {
        const dcHeroes = this.heroes;
        return dcHeroes.filter(dc => dc.casa === "DC");

    }


    getMarvelHeroes() {
        let marvel = this.heroes;
        return marvel.filter(marvel => marvel.casa === "Marvel");

    }
    */


}