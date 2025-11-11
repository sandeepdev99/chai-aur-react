function custromRender(reactElement, container) {
    const domEelement = document.createElement(
        reactElement.type)
        domEelement.innerHTML = reactElement.children
        // problem for more tags it was hardcoded use loops
        // domEelement.setAttribute('href', reactElement.props.href)
        // domEelement.setAttribute('target', reactElement.props.target)   
        for (const prop in reactElement.props) {
            domEelement.setAttribute(prop, reactElement.props[prop])
            
        }

        container.appendChild(domEelement)
}

const mainContainer = document.getElementById("root");

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com/',
        target: '_blank',
    },
    children: 'click me to go to google'
}

custromRender(reactElement, mainContainer)
 
