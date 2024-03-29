import {ArrayUtils} from 'ts-data-structures-utils';

import {Code} from './Code';

export class Codes {
    static getAll() {
        return Object.values(Code)
            .filter(code => typeof code === 'number');
    }

    static getRandom(availableCodes:any = null):any {
        const codes = availableCodes && availableCodes.length > 0
            ? availableCodes
            : this.getAll();

        return ArrayUtils.getRandom(codes);
    }
}