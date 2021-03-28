const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');


jokeBtn.addEventListener('click', getJokes);

getJokes();

async function getJokes() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  });
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}