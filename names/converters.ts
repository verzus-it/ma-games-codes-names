import camelcase from 'camelcase';
import {StringUtils} from 'ts-data-structures-utils';

import {Name} from './Name';

export const toCamelCaseFull = (name:Name) => {
    const shred = toCamelCase(name);
    
    return StringUtils.ucfirst(shred);
};

export const toCamelCase = (name:Name) =>
    camelcase(name);

export const toUnderscores = (name:Name) => {
    const shreds = name.match(/([A-Z]+[a-z]*)/g);

    if (!shreds || shreds.length === 0)
        return name;

    const nameParsed =  shreds
        .map(s => s.toLowerCase())
        .join('_');

    return nameParsed === 'as_br_fr'
        ? 'as_brfr'
        : nameParsed;
};
