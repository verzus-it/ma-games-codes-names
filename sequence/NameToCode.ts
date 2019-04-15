import {CodesToNames} from './';
import {Code, Security} from '../codes';

export class NameToCode {
    static get(name:string):Code {
        const codesToNames = CodesToNames.get();

        for (let gameCode in codesToNames)
            if (codesToNames.hasOwnProperty(gameCode))
                if (codesToNames[gameCode] === name)
                    return Security.validateGameCode(gameCode);

        throw new NameToCodeError(`Failed to look for game code by game name: ${name}.`);
    }
}

class NameToCodeError extends Error {
    constructor(message:string) {
        super(message);

        Object.setPrototypeOf(this, NameToCodeError.prototype);
    }
}