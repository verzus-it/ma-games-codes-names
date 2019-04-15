import {Code} from '../codes';
import {Name} from '../names';

export class CodesToNames {
    static get():{[key:number]:string} {
        return {
            [Code.ANZAN]: Name.ANZAN,
            [Code.AS_BR]: Name.AS_BR,
            [Code.AS_FR]: Name.AS_FR,
            [Code.MTABLE]: Name.MTABLE,
            [Code.AS_BRFR]: Name.AS_BRFR,
            [Code.AS_EASY]: Name.AS_EASY,
            [Code.AS_CROSS]: Name.AS_CROSS,
            [Code.DIVISION]: Name.DIVISION,
            [Code.FLACHCARDS]: Name.FLASHCARDS,
            [Code.MULTIPLICATION]: Name.MULTIPLICATION
        };
    }
}