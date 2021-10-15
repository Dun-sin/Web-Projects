let Quotes = {
    quote1: {
        quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
        by: 'Mother Teresa'
    },
    quote2: {
        quote: 'When you reach the end of your rope, tie a knot in it and hang on',
        by: 'Franklin D. Roosevelt'
    },
    quote3: {
        quote: 'Always remember that you are absolutely unique. Just like everyone else',
        by: 'Margaret Mead'
    },
    quote4: {
        quote: `Don't judge each day by the harvest you reap but by the seeds that you plant`,
        by: 'Robert Louis Stevenson'
    },
    quote5: {
        quote: 'The future belongs to those who believe in the beauty of their dreams',
        by: 'Eleanor Roosevelt'
    },
    quote6: {
        quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn',
        by: 'Benjamin Franklin'
    },
    quote7: {
        quote: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.',
        by: 'Helen Keller'
    },
    quote8: {
        quote: 'It is during our darkest moments that we must focus to see the light.',
        by: 'Aristotle'
    },
    quote9: {
        quote: 'Whoever is happy will make others happy too',
        by: 'Anne Frank'
    },
    quote10: {
        quote: 'Do not go where the path may lead, go instead where there is no path and leave a trail.',
        by: 'Ralph Waldo'
    }
}

const quote = document.getElementById("quote");
const saidBy = document.getElementById("by");
const button = document.getElementById("button")

function getRandomQuote(quotes) {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

        const key = Object.keys(quotes);
    if (key.length === 1) {
        const chosen = quotes[key[1]]
        const chosenQuote = chosen.quote;
        const chosenSaidBy = chosen.by;
        quote.innerHTML = chosenQuote;
        saidBy.innerHTML = chosenSaidBy;
    }  else if (key.length > 1) {
        const randomIndex = getRandomNumber(1, key.length);
        const chosen = quotes[key[randomIndex]];
        const chosenQuote = chosen.quote;
        const chosenSaidBy = chosen.by;
        quote.innerHTML = chosenQuote;
        saidBy.innerHTML = chosenSaidBy;
    }
}

button.addEventListener('click', () => {
    getRandomQuote(Quotes);
});