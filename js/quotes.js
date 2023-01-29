const quotes = [
    {
        quote: "The only way not to think about money is to have a great deal of it.",
        author: " - Edith Wharton",
    },
    {
        quote: "To believe with certainty we must begin with doubting.",
        author: " - Stanislaw Leszczynski",
    },
    {
        quote: "Aim for success, not perfection. Never give up your right to be wrong, because then you will lose the ability to learn new things and move forward with your life.",
        author: " - Dr. David M. Burns",
    },
    {
        quote: "What else is love but understanding and rejoicing in the fact that another person lives, acts, and experiences otherwise than we do?",
        author: " - Friedrich Nietzsche",
    },
    {
        quote: "Nature gives you the face you have at twenty; it is up to you to merit the face you have at fifty.",
        author: " - Gabriel Coco Chanel",
    },
    {
        quote: "Do not do to others what angers you if done to you by others.",
        author: " - Socrates",
    },
    {
        quote: "Nothing is as far away as one minute ago.",
        author: " - Jim Bishop",
    },
    {
        quote: "I do not want to die... until I have faithfully made the most of my talent and cultivated the seed that was placed in me until the last small twig has grown.",
        author: " - Kathe Kollwitz",
    },
    {
        quote: "If you don't learn to laugh at trouble, you won't have anything to laugh at when you're old.",
        author: " - Edgar Watson Howe",
    },
    {
        quote: "Everything has its wonders, even darkness and silence, and I learn, whatever state I am in, therein to be content.",
        author: " - Helen Keller",
    },
    {
        quote: "Convictions are more dangerous enemies of truth than lies.",
        author: " - Friedrich Nietzsche",
    },
    {
        quote: "Before I was shot, I always thought that I was more half-there than all-there - I always suspected that I was watching TV instead of living life. Right when I was being shot and ever since, I knew that I was watching television.",
        author: " - Andy Warhol",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;