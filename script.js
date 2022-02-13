const quoteContainer = document.getElementById('quote-container');
const french = document.getElementById('french');
const khmer = document.getElementById('khmer');
const facebookBtn = document.getElementById('facebook');
const newBtn = document.getElementById('new');
const loader = document.getElementById('loader');

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

const loading = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};

const complete = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};

const getRandomInt = (max) => Math.floor(Math.random() * max);

let index;
const getQuote = () => {
  loading();
  index = getRandomInt(data.length);
  french.textContent = data[index].fr;
  khmer.textContent = data[index].kh;
  complete();
};

const shareOnFacebook = () => {
  // TODO: create a account FB developer
  // FB.ui(
  //   {
  //     display: 'popup',
  //     method: 'share',
  //     quote: `${data[index].fr} - ${data[index].kh}`,
  //   },
  //   function (response) {}
  // );
  alert('OOOUUUUPS, problèmes !');
};

newBtn.addEventListener('click', getQuote);

facebookBtn.addEventListener('click', shareOnFacebook);

getQuote();
