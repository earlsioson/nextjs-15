// REST Countries API response types
export interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [languageCode: string]: {
            official: string;
            common: string;
        };
    };
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface CountryIdd {
    root: string;
    suffixes: string[];
}

export interface Demonym {
    f: string;
    m: string;
}

export interface Translation {
    official: string;
    common: string;
}

export interface Country {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [code: string]: Currency;
    };
    idd: CountryIdd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [code: string]: string;
    };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
        [languageCode: string]: Demonym;
    };
    translations: {
        [languageCode: string]: Translation;
    };
}

// The API returns an array of countries
export type CountryResponse = Country[];

// REST Countries API response types
export interface CountryName {
    common: string;
    official: string;
    nativeName: {
        [languageCode: string]: {
            official: string;
            common: string;
        };
    };
}

export interface Currency {
    name: string;
    symbol: string;
}

export interface CountryIdd {
    root: string;
    suffixes: string[];
}

export interface Demonym {
    f: string;
    m: string;
}

export interface Translation {
    official: string;
    common: string;
}

export interface Country {
    name: CountryName;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: {
        [code: string]: Currency;
    };
    idd: CountryIdd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: {
        [code: string]: string;
    };
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: {
        [languageCode: string]: Demonym;
    };
    translations: {
        [languageCode: string]: Translation;
    };
}
