// Create the button element as before
var button = document.createElement("button");
button.type = "button";
button.id = "searchWidgetTrigger";
button.textContent = "Search";

// Create the search widget element
var searchWidget = document.createElement("gen-search-widget");
searchWidget.setAttribute("configId", "51fbc12e-2e7c-4610-bdf4-f20009985492");
searchWidget.setAttribute("triggerId", "searchWidgetTrigger");

// Append the search widget to the button
button.appendChild(searchWidget);

// Create a new style element (optional, for positioning)
var style = document.createElement("style");
var css = `
  body {
    margin: 0;
    padding: 0;
  }
  #searchWidgetTrigger {
    position: fixed;
    bottom: 0;
    left: 0;
    min-height: 96px;
    min-width: 100px;
    width: 100px !important;
    height: 120px !important;
    display: initial !important;
    border: none !important;
    position: absolute !important;
    bottom: 0 !important;
    left: 0 !important;
    background: transparent !important;        
  }
`;
style.appendChild(document.createTextNode(css)); // Add CSS if needed

// Append the style element to the head (optional)
document.head.appendChild(style);

// Append the button with widget to the body
document.body.appendChild(button);
