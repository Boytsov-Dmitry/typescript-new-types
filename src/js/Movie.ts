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

// const a = new Movie('fdf', 2, 'fdf', 'fdf', ['fd', 'fdsfs'], 5);

// console.log(a)
