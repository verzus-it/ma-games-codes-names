import {ArrayUtils} from 'ts-data-structures-utils';

import {Code} from './Code';

export class Codes {
    static getAll():Array<Code> {
        return Object.values(Code)
            .filter(code => typeof code === 'number');
    }

    static getRandom(availableCodes:Code[]|null = null):Code {
        const codes:Array<Code> = availableCodes && availableCodes.length > 0
            ? availableCodes
            : this.getAll();

        return ArrayUtils.getRandom<Code>(codes);
    }
}