;
class Card {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    ;
    getAll() {
        return [...this.items];
    }
    ;
}
;
class Movie {
    constructor(name, year, originCountry, tag, genre, duration) {
        this.name = name;
        this.year = year;
        this.originCountry = originCountry;
        this.tag = tag;
        this.genre = genre;
        this.duration = duration;
    }
    ;
}
;
const a = new Movie('fdf', 2, 'fdf', 'fdf', ['fd', 'fdsfs'], 5);
console.log(a);
//# sourceMappingURL=app.js.map