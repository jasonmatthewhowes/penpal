import { fetchLetters, fetchPeople, fetchTopics, getLetters, getPeople, getTopics } from "./dataaccess.js"

//generate html for letter display
export const letterList = () => {
    fetchLetters()
     const letters= getLetters()
     let html = `<ul style="list-style: none;">`
     let lettersHTML = letters.map(letters => {
         return `<li class="sentletters" value="${letters.id}">Dear ${findRecepientName(letters)} ${findRecepientEmail(letters)},
         <br><br>
         ${letters.body}
         <br><br>
         Sincerely, ${findAuthorName(letters)} ${findAuthorEmail(letters)}
         <br>
         <br>
         <button type="button">${findLetterTopic(letters)}</button>
         </li>`
    
     }).join("")
     html += lettersHTML
     html += `</ul>`
     return html
 }
 

 //function to find the author of the letter

 const findAuthorName = (letter) => {
    fetchPeople()
    let people = getPeople()
    for (const peoplex of people) {
        if (peoplex.id === letter.authorId)
        return peoplex.name
    }
 }

 //function to find the email address of the author
 const findAuthorEmail = (letter) => {
    fetchPeople()
    let people = getPeople()
    for (const peoplex of people) {
        if (peoplex.id === letter.authorId)
        return `(${peoplex.email})`
    }
 }
 const findRecepientName = (letter) => {
    fetchPeople()
    let people = getPeople()
    for (const peoplex of people) {
        if (peoplex.id === letter.recepientId)
        return peoplex.name
    }
 }

 //function to find the email address of the author
 const findRecepientEmail = (letter) => {
    fetchPeople()
    let people = getPeople()
    for (const peoplex of people) {
        if (peoplex.id === letter.recepientId)
        return `(${peoplex.email})`
    }
 }

 //function to find the topic
 const findLetterTopic = (letter) => {
    fetchTopics()
    let topics= getTopics()
    for (const topicsx of topics) {
        if (topicsx.id === letter.topicId)
        return topicsx.name
    }
 }




