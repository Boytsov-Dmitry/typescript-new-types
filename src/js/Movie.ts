export default class Movie {
    constructor(
        readonly name: string,
        readonly year: number, 
        readonly originCountry: string, 
        readonly tag: string, 
        readonly genre: any, 
        readonly duration: number
        ){
    };
};