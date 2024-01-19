// Jokes you've been 'awaiting' for 
// https://www.codewars.com/kata/5a353a478f27f244a1000076/train/javascript


// Here are some classic Christmas cracker jokes.

// There is a made up API URL (http://great.jokes/christmas) that you can call to a get list of Christmas jokes in JSON format.
// Your challenge

//     Write an async function which takes an apiUrl and jokeId which returns a promise.
//     The data will need to be filtered to get the specified joke by id.
//     When you got the joke it should be accessible through a simple API of saySetup and sayPunchLine methods.

// Handle error cases

//     If a joke can't be found throw an error message in this format new Error('No jokes found id: {jokeId}').
//     Getting jokes from a another API URL may return a different data shape, throw this error message new Error('No jokes at url: {url}') for an unexpected shape.

// Throw error in a promise style
// Info

// Get the data using the mocked fetch(url) function, which implements the basics of the fetch api. Learn about fetch. Learn about async/await.

// Joke data shape:

// {
//   jokes: [{ 
//     id: 101,
//     setup: "Who is Santa's favorite singer?",
//     punchLine: "Elf-is Presley!"
//   },
// ...moreJokes]
// Use for your tests ^^



const sayJoke = async (apiUrl, jokeId) => {
  const res = await fetch(apiUrl)
  const data = await res.json()
  let joke, jokes = data.jokes
  if (!data.jokes) {
    throw new Error(`No jokes at url: ${apiUrl}`)
  }
  joke = jokes.find(j => j.id === jokeId)

  if (joke) {
    joke.sayPunchLine = function () {
      return this.punchLine
    }

    joke.saySetup = function () {
      return this.setup
    }
    return joke
  } else {
    throw new Error(`No jokes found id: ${jokeId}`)
  }
}