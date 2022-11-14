import { fetchLetters, fetchPeople, fetchTopics, getLetters, getPeople, getTopics } from "./dataaccess.js"
import { mainHTML } from "./penpalHTML.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPeople()
    fetchTopics()
    fetchLetters()
    .then(() => getPeople())
    .then(() => getTopics())
    .then(() => getLetters())

    .then(
        () => {
            mainContainer.innerHTML = mainHTML()
        }
    )
}

render()


mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    })

