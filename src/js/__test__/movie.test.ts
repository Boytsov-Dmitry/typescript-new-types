import Movie from '../Movie'
import Card from '../Card'


test('created movie item', () => {
    const ideal = {
        name: 'The Avengers',
        year: 2012, 
        originCountry: 'USA', 
        tag: 'Avengers Assemble!', 
        genre: ['фантастика', 'боевик', 'фэнтези'], 
        duration: 137
    };

    const newMovie = new Movie('The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези'], 137);

    expect(newMovie).toEqual(ideal)
});

test('created movie item and adding to card', () => {
    const ideal = [{"duration": 137,
        "genre": ["фантастика", "боевик", "фэнтези"],
        "name": "The Avengers",
        "originCountry": "USA",
        "tag": "Avengers Assemble!",
        "year": 2012
    }];

    const newMovie = new Movie('The Avengers', 2012, 'USA', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези'], 137);
    const card = new Card();

    card.add(newMovie);

    expect(card.getAll()).toEqual(ideal)
});