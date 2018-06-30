window.onload = function() {
    var pathDelay = 300;
    var currButton = 0;
    var addMoreButton = document.querySelector("#addMoreButton");
    var buttonNodes = document.querySelectorAll("button");
    // querySelectorAll returns DOM nodes, 
    // so we convert it to an array
    var buttonsOnPage = Array.from(buttonNodes);
    
    // Adds an event listener to each button on the page
    // that existed at page load
    buttonsOnPage.forEach( function(button) {
        button.addEventListener("click", function(event) {
            console.log("You clicked a button that existed on page load");
        });
    
    });
    
    // Adds a single event listener to an individual button
    addMoreButton.addEventListener("click", function(event) {
        console.log("You clicked the add more button");
        // Stops this event from 'bubbling' up 
        event.stopImmediatePropagation();
        var newButton = document.createElement("button");
        currButton++;
        // Set a unique id on each new button added to the page
        newButton.innerText = "Button #" + currButton;
        newButton.setAttribute("data-btn", currButton);
        document.querySelector(".button-holder").appendChild(newButton);
    });
    
    // This adds an event listener on the document
    // that listens to all click events that originate anywhere
    // on the document
    document.addEventListener("click", function(event) {
        console.log("A click event was caught by the document");
        showPath(event.path);
    });    

    /// Show an event path at an interval with borders
    function showPath(path) {
        var pathQueue = path;
        var curPathIndex = 0;
        var interval;
        interval = setInterval( function() {
            if (pathQueue[curPathIndex]) {
                showBorder(pathQueue[curPathIndex]);
            }
            if (curPathIndex >= pathQueue.length - 2) {
                clearInterval(interval);
                clearPathBorders();
            }
            curPathIndex++;
        }, pathDelay);

    }

    function clearPathBorders() {
        Array.from(document.querySelectorAll("*")).forEach( (element) => {
            element.style.border = "none";
        });
        document.body.style.border = "none";
        if (document.style) {
            document.style.border = "none";
        }
    }

    function showBorder(piece) {
        if (piece.style) {
            piece.style.border = "5px solid red";
        }
    }
}
