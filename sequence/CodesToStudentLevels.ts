import {Code} from '../codes';

export class CodesToStudentLevels {
    static get():{[key:string]:Code[]} {
        return {
            0: [
                Code.FLACHCARDS,
                Code.AS_EASY
            ],
            1: [
                Code.FLACHCARDS,
                Code.AS_EASY,
                Code.AS_BR
            ],
            2: [
                Code.FLACHCARDS,
                Code.AS_EASY,
                Code.AS_BR,
                Code.AS_FR,
                Code.AS_CROSS
            ],
            3: [
                Code.FLACHCARDS,
                Code.AS_EASY,
                Code.AS_BR,
                Code.AS_FR,
                Code.AS_CROSS,
                Code.AS_BRFR,
                Code.ANZAN
            ],
            4: [
                Code.FLACHCARDS,
                Code.AS_EASY,
                Code.AS_BR,
                Code.AS_FR,
                Code.AS_CROSS,
                Code.AS_BRFR,
                Code.ANZAN,
                Code.MTABLE,
                Code.MULTIPLICATION
            ],
            5: [
                Code.FLACHCARDS,
                Code.AS_EASY,
                Code.AS_BR,
                Code.AS_FR,
                Code.AS_CROSS,
                Code.AS_BRFR,
                Code.ANZAN,
                Code.MTABLE,
                Code.MULTIPLICATION,
                Code.DIVISION
            ],
            6: [
                Code.FLACHCARDS,
                Code.AS_EASY,
                Code.AS_BR,
                Code.AS_FR,
                Code.AS_CROSS,
                Code.AS_BRFR,
                Code.ANZAN,
                Code.MTABLE,
                Code.MULTIPLICATION,
                Code.DIVISION
            ]
        };
    }
}