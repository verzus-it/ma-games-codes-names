import {Code, Codes} from './';

export class Security {
    /**
     * @throws {GameCodeSecurityError}
     */
    static validateGameCodes(gameCodes:Code[]):Code[]|never {
        return gameCodes.map(gameCode =>
            this.validateGameCode(gameCode)
        );
    }

    /**
     * @throws {GameCodeSecurityError}
     */
    static validateGameCode(gameCode:any):Code|never {
        gameCode = parseInt(gameCode, 10);
        
        if (Codes.getAll().includes(gameCode))
            return <Code>gameCode;

        throw new GameCodeSecurityError(`Got invalid game code: ${gameCode}.`);
    }
}

class GameCodeSecurityError extends Error {
    constructor(message:string) {
        super(message);

        Object.setPrototypeOf(this, GameCodeSecurityError.prototype);
    }
}