const quote = document.querySelector('.quote-line');
const person = document.querySelector('.quote-person');
const btn = document.querySelector('.new-quote');

const quotes = [

    {
        "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
        "author": "Napoleon Hill"
    },
    {
        "quote": "Strive not to be a success, but rather to be of value.",
        "author": "Albert Einstein"
    },
    {
        "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
        "author": "Robert Frost"
    },
    {
        "quote": "I attribute my success to this: I never gave or took any excuse.",
        "author": "Florence Nightingale"
    },
    {
        "quote": "You miss 100% of the shots you don’t take.",
        "author": "Wayne Gretzky"
    },
    {
        "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
        "author": "Michael Jordan"
    },
    {
        "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
        "author": "Amelia Earhart"
    },
    {
        "quote": "Every strike brings me closer to the next home run.",
        "author": "Babe Ruth"
    },
    {
        "quote": "Definiteness of purpose is the starting point of all achievement.",
        "author": "W. Clement Stone"
    },
    {
        "quote": "We must balance conspicuous consumption with conscious capitalism.",
        "author": "Kevin Kruse"
    }
];

btn.addEventListener('click', function() {
    let random =  Math.floor(Math.random() * quotes.length);
    console.log('Math Random: ',Math.random())
    console.log('Random value: ',random)
    quote.innerText = quotes[random].quote;
    person.innerText = '- ' + quotes[random].author;
});