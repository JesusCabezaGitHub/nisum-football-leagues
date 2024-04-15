interface Paging {
    current: number;
    total: number;
}
  
export interface Errors {
    endpoint?: string;
    token?:string
}

export interface ApiResponse {
    parameters: unknown[];
    errors: unknown[] | Errors;
    results: number;
    paging: Paging;
}

export interface Country {
    name: string;
    code: string;
    flag: string;
}

export interface ApiCountryResponse extends ApiResponse {
    response: Country[];
}

//Leagues Models

export interface CountryLeague {
    name: string;
    code: null | string;
    flag: null | string;
}

export enum TypeLeague {
    Cup = "Cup",
    League = "League",
}

export interface LeagueInformation {
    id:   number;
    name: string;
    type: TypeLeague;
    logo: string;
}

export interface Season {
    year:     number;
    start:    Date;
    end:      Date;
    current:  boolean;
    coverage: Coverage;
}

export interface Coverage {
    fixtures:    Fixtures;
    standings:   boolean;
    players:     boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards:   boolean;
    injuries:    boolean;
    predictions: boolean;
    odds:        boolean;
}

export interface Fixtures {
    events:              boolean;
    lineups:             boolean;
    statistics_fixtures: boolean;
    statistics_players:  boolean;
}

export interface LeagueDto {
    league:  LeagueInformation;
    country: CountryLeague;
}

interface League extends LeagueDto {
    seasons: Season[];
}

export interface ApiLeagueResponse extends ApiResponse {
    response: League[];
}