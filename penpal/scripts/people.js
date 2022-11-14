import { fetchPeople, getPeople } from "./dataaccess.js"

export const peopleList = () => {
   fetchPeople()
    const people= getPeople()
    let html = `<label id="authorlabel">Author</label>
  <select id="authors" name="authors">
  <option name="authors" value="defaultDropDown">choose author</option>`
    let peopleHTML = people.map(people => {
        return `<option value="${people.id}">${people.name}</option>`
    }).join("")
    html += peopleHTML
    html += `</select>`
    return html
}


export const recepientList = () => {
  fetchPeople()
   const people= getPeople()
   let html = `<label id="recepientlabel">Recepient</label>
 <select id="recepient" name="recepient">
 <option value="recepientDropDown">choose recepient</option>`
   let peopleHTML = people.map(people => {
       return `<option value="${people.id}">${people.name}</option>`
   }).join("")
   html += peopleHTML
   html += `</select>`
   return html
}
