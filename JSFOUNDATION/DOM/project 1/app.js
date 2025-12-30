// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
    quote:'“We are what we repeatedly do. Excellence, then, is not an act, but a habit.”',
    person: 'Aristotle'
    },
    {
    quote:'“Discipline is the bridge between goals and accomplishment.”',
    person: 'Jim Rohn'
    },
    {
    quote:'“He who conquers himself is the mightiest warrior.”',
    person: 'Confucius'
    },
    {
    quote:'“The future depends on what you do today.”',
    person: 'Mahatma Gandhi'
    },
    {
    quote:'“Success is nothing more than a few simple disciplines, practiced every day.”',
    person: 'Jim Rohn'
    },
    {
    quote:'“Without self-discipline, success is impossible, period.”',
    person: 'Lou Holtz'
    },
    {
    quote:'“You will never always be motivated, so you must learn to be disciplined.”',
    person: 'Mel Robbins'
    },
    {
    quote:'“First we form habits, then they form us.”',
    person: 'John Dryden'
    },
    {
    quote:'“Freedom is not the absence of commitments, but the ability to choose—and commit—to what is best.”',
    person: 'Paulo Coelho'
    },
    {
    quote:'“The pain of discipline weighs ounces; the pain of regret weighs tons.”',
    person: 'Jim Rohn'
    },
]

btn.addEventListener('click',function(){

   // we use math.floor because it coverts a whole number into nearest downward integer
   let random = Math.floor(Math.random() * quotes.length);
 
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}) 