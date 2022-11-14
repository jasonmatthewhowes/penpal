let applicationState = { people: [], topics: [], letters: [] };
const API = "http://localhost:8088";

//fetch the people data
export const fetchPeople = () => {
  return fetch(`${API}/people`)
    .then((response) => response.json())
    .then((peoplex) => {
      // Store the external state in application state
      applicationState.people = peoplex;
    });
};
//call to get the people data
export const getPeople = () => {
  return applicationState.people.map((people) => ({ ...people }));
};
//fetch the topics data
export const fetchTopics = () => {
  return fetch(`${API}/topics`)
    .then((response) => response.json())
    .then((topicsx) => {
      // Store the external state in application state
      applicationState.topics = topicsx;
    });
};
//call to get the topics data
export const getTopics = () => {
  return applicationState.topics.map((topics) => ({ ...topics }));
};
//fetch the letters data
export const fetchLetters = () => {
  return fetch(`${API}/letters`)
    .then((response) => response.json())
    .then((lettersx) => {
      // Store the external state in application state
      applicationState.letters = lettersx;
    });
};
//call to get the topics data
export const getLetters = () => {
  return applicationState.letters.map((letters) => ({ ...letters }));
};


export const sendLetter = (letterObject) => {
    const fetchSendCompletions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(letterObject)
    }

    const mainContainer = document.querySelector("#container")
    return fetch(`${API}/letters`, fetchSendCompletions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
    }


