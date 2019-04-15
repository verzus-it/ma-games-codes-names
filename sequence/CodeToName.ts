import {Code} from '../codes';
import {CodesToNames} from './CodesToNames';

export class CodeToName {
    /**
     * @throws {CodeToNameError}
     */
    static get(gameCode:Code):string|null {
        const gameName:string = CodesToNames.get()[gameCode];

        if (!gameName)
            throw new CodeToNameError(`Failed to look for game name by code.`, gameCode);

        return gameName;
    }
}

class CodeToNameError extends Error {
    constructor(message:string, gameCode:Code) {
        super(message);

        Object.setPrototypeOf(this, CodeToNameError.prototype);

        this.gameCode = gameCode;
    }

    readonly gameCode:Code;
}