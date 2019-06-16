import { getContactUsContent } from "./contact_us_module";
import { getHomeContent } from "./home_module";

const DomManipularor = (function () {
    const divFactory = (classes) => {
        const divElement = document.createElement('div');
        divElement.setAttribute('class', classes);
        return divElement;
    }
    return {
        init: () => {
            const body = document.getElementById('content');
            const containerDiv = divFactory('container');
            const firstRowElement = divFactory('row');


            const secondRowElement = divFactory('row');
            firstRowElement.innerHTML = `<ul>
                  <li id="menu-button"><a href="#">Menu</a></li>
                  <li id="contact-button"><a href="#">Contact</a></li>
                </ul>`


            const tabContent = divFactory('col-12');
            tabContent.setAttribute('id', 'tab-content')
            const tabTextContent = document.createTextNode('Default Content');
            tabContent.appendChild(tabTextContent);
            secondRowElement.append(tabContent)

            body.append(containerDiv)
            containerDiv.append(firstRowElement, secondRowElement)
        },
        attachEvents: () => {
            document.getElementById('menu-button').addEventListener('click', () => {
                document.getElementById('contact-button').style.backgroundColor = "#333";

                document.getElementById('menu-button').style.backgroundColor = "#4CAF50";

                document.getElementById('tab-content').innerHTML = getHomeContent()
            })
            document.getElementById('contact-button').addEventListener('click', () => {
                document.getElementById('menu-button').style.backgroundColor = "#333";


                document.getElementById('contact-button').style.backgroundColor = "#4CAF50";


                document.getElementById('tab-content').innerHTML = getContactUsContent()
            })
        }
    }
})();

export default DomManipularor
