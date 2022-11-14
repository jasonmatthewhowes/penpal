import { fetchLetters, sendLetter } from "./dataaccess.js"
import { letterList } from "./letters.js"
import { peopleList, recepientList } from "./people.js"
import { topicsList } from "./topics.js"

export const mainHTML = () => {
    
    return `
    <h2>PenPal Society</h2>
    <div class="authorList">
    ${peopleList()}
    </div>
    <div class="letter">
            <label class="letterLabel">Letter</label>
            <textarea id="letterInput" name="letterarea" rows="10" cols="80"></textarea>
        </div>
        <div class="topics"><h3>Topics</h3>
        ${topicsList()}
        </div>
        <div class"recepient">
        ${recepientList()}
        </div>
        <div class="buttondiv">  
        <button class="button" id="sendLetter">Send Letter</button>
        </div>
        <div class="sentLetters">${letterList()}
        </div>
    `
}

const mainContainer = document.querySelector("#container")
mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        let letterBody = document.querySelector("textarea[name='letterarea']").value
        let letterAuthor = document.getElementById("authors")
        let letterAuthorId= letterAuthor.value
        let letterRecepient = document.getElementById("recepient")
        let letterRecepientId = letterRecepient.value
        let letterTopicId = document.querySelector('input[name="topics"]:checked').value
        
        let dataToSendToAPI = {
            
            authorId: parseInt(letterAuthorId),
            recepientId: parseInt(letterRecepientId),
            body: letterBody,
            topicId: parseInt(letterTopicId)
        }

        console.log(dataToSendToAPI)
        sendLetter(dataToSendToAPI)
    
    }
})

