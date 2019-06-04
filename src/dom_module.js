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

            const logoSection = divFactory('col-1');
            const logoImage = document.createElement('img');
            logoImage.setAttribute('src', 'https://logo.clearbit.com/restaurant.com');
            logoImage.setAttribute('alt', 'Logo');
            logoSection.append(logoImage)


            const menuButton = divFactory('col-1');
            const actualMenuButton = document.createElement('button');
            actualMenuButton.setAttribute('id', 'menu-button');
            const actualMenuButtonContent = document.createTextNode('Menu');
            actualMenuButton.appendChild(actualMenuButtonContent);
            menuButton.append(actualMenuButton);

            const contactButton = divFactory('col-1');
            const actualContactButton = document.createElement('button');
            actualContactButton.setAttribute('id', 'contact-button');
            const actualContactuButtonContent = document.createTextNode('Contact');
            actualContactButton.appendChild(actualContactuButtonContent);
            contactButton.append(actualContactButton);


            firstRowElement.append(logoSection)
            firstRowElement.append(menuButton)
            firstRowElement.append(contactButton)

            const tabContent = divFactory('col-12');
            tabContent.setAttribute('id', 'tab-content')
            const tabTextContent = document.createTextNode('Blah');
            tabContent.appendChild(tabTextContent);
            secondRowElement.append(tabContent)

            body.append(containerDiv)
            containerDiv.append(firstRowElement, secondRowElement)
        },
        attachEvents: () => {
            document.getElementById('menu-button').addEventListener('click', () => {
                document.getElementById('contact-button').style.backgroundColor = "#FFF";
                document.getElementById('contact-button').style.color = "#000";

                document.getElementById('menu-button').style.backgroundColor = "#007bff";
                document.getElementById('menu-button').style.color = "#FFF";

                document.getElementById('tab-content').innerHTML = getHomeContent()
            })
            document.getElementById('contact-button').addEventListener('click', () => {
                document.getElementById('menu-button').style.backgroundColor = "#FFF";
                document.getElementById('menu-button').style.color = "#000";


                document.getElementById('contact-button').style.backgroundColor = "#007bff";
                document.getElementById('contact-button').style.color = "#FFF";


                document.getElementById('tab-content').innerHTML = getContactUsContent()
            })
        }
    }
})();

export default DomManipularor
