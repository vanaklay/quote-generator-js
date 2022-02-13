const quoteContainer = document.getElementById('quote-container');
const french = document.getElementById('french');
const khmer = document.getElementById('khmer');
const facebookBtn = document.getElementById('facebook');
const newBtn = document.getElementById('new');

const getQuotes = async () => {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    const apiQuotes = await response.json();
    console.log(apiQuotes);
  } catch (error) {
    console.log('Error -> ', error);
  }
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

let index;
const getQuote = () => {
  index = getRandomInt(data.length);
  french.textContent = data[index].fr;
  khmer.textContent = data[index].kh;
};

getQuote();

facebookBtn.onclick = function () {
  FB.ui(
    {
      display: 'popup',
      method: 'share',
      quote: `${data[index].fr} - ${data[index].kh}`,
    },
    function (response) {}
  );
};
