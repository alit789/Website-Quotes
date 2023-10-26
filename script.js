async function getQuotes() {
  const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5b56e76766msh7d6c5d00f3a1dcap14031fjsn4bdd19800a0a",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const showQuotes = document.getElementById('QuotesShow');
    showQuotes.innerHTML = result.content;
    const nameQuotes = document.getElementById('nameQuote');
    nameQuotes.innerHTML = result.originator.name;
  } catch (error) {
    console.error(error);
  }
}
