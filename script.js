replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/korona/gi)) {
            const newElement = document.createElement('div')
            const newImage = document.createElement('img')
            newElement.appendChild(newImage)
            newImage.src = chrome.runtime.getURL("icons/logo_128.png")
            newImage.classList.add('logoClass')
            const oldText = document.createElement('span')
            newElement.appendChild(oldText)
            oldText.innerHTML = element.textContent.replace(/(korona)/gi,
                '<span></span>')
            element.replaceWith(newElement)
        }
    }
}