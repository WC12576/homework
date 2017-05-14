window.$ = function(selector) {
    let array = []
    if (typeof selector === 'string') {
        let items = document.querySelectorAll(selector)
        for (var i = 0; i < items.length; i++) {
            array.push(items[i])
        }
    } else if (selector instanceof Element) {
        array.push(selector)
    } else if (selector instanceof Array) {
        for (var i = 0; i < selector.length; i++) {
            array.push(selector[i])
        }
    }

    array.on = function(eventType, fn) {
        for (var i = 0; i < array.length; i++) {
            array[i].addEventListener(eventType, fn)
        }
    }
    array.addClass = function(className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.add(className)
        }
        return array
    }
    array.removeClass = function(className) {
        for (var i = 0; i < array.length; i++) {
            array[i].classList.remove(className)
        }
        return array
    }
    array.text = function(value) {
        if (value != undefined) {
            for (var i = 0; i < array.length; i++) {
                array[i].innerHTML = value
            }
            return array
        } else {
            let result = []
            for (var i = 0; i < array.length; i++) {
                result.push(array[i].innerHTML)
            }
            return result
        }
    }
    array.get = function(index) {
        return array[index]
    }
    array.end = function() {
        return array.previousSelection
    }
    array.siblings = function() {
        let children = array[0].parentNode.children
        let resultArray = []
        for (var i = 0; i < children.length; i++) {
            if (children[i] !== array[0]) {
                resultArray.push(children[i])
            }
        }
        console.log(array[0])
        let items = $(resultArray)
        items.previousSelection = array
        return items
    }

    return array
}
