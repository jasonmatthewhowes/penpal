import { fetchTopics, getTopics } from "./dataaccess.js";


export const topicsList = () => {
    fetchTopics()
     const topics= getTopics()
     let html = `<ul id="topicsList" style="list-style: none;">`
     let topicsHTML = topics.map(topics => {
         return `<li><input type="radio" name="topics" value="${topics.id}">${topics.name}</li>`
     }).join("")
     html += topicsHTML
     html += `</ul>`
     return html
     console.log(html)
 }
 
