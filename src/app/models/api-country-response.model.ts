interface Paging {
    current: number;
    total: number;
}
  
export interface Country {
    name: string;
    code: string;
    flag: string;
}

export interface ApiCountryResponse {
    parameters: any[];
    errors: any[];
    results: number;
    paging: Paging;
    response: Country[];
}