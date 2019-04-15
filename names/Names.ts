import {Name} from './Name';

export class Names {
    /**
     * Name of 'Addsubtr' games group.
     * This name is not included in summary game names collection.
     * Is is because 'Addsubtr' is not independent game.
     */
    static readonly ADDSUBTR:string = 'Addsubtr';

    static get():Array<string> {
        return [
            Name.ANZAN,
            Name.AS_EASY,
            Name.AS_BR,
            Name.AS_FR,
            Name.AS_CROSS,
            Name.AS_BRFR,
            Name.FLASHCARDS,
            Name.MULTIPLICATION,
            Name.DIVISION,
            Name.MTABLE
        ];
    }

    /**
     * Returns games names of 'Addsubtr' group.
     * Games of 'Addsubtr' group are games that
     * have similar features but considered as different games.
     */
    static getAddsubtr():Array<string> {
        return [
            Name.AS_EASY,
            Name.AS_BR,
            Name.AS_FR,
            Name.AS_CROSS,
            Name.AS_BRFR,
        ];
    }

    /**
     * Says if game is part of 'Addsubtr' games group.
     */
    static isAddsubtr(name:string):boolean {
        return this.getAddsubtr().includes(name);
    }
}

class NamesError extends Error {
    constructor(message:string) {
        super(message);

        Object.setPrototypeOf(this, NamesError.prototype);
    }
}