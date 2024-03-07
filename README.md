# NavBarMenu Function

The `NavBarMenu` function allows you to add an animated hamburger menu to a specific HTML element on a web page. This hamburger menu can be customized with different styles and behaviors and can be linked to a callback function to handle click events.

## Syntax

```javascript
NavBarMenu(select, callback, ...rest);
```

## Parameters

- select (string): Selector of the HTML element to which the hamburger menu will be added. This parameter is required.

- callback (function): Callback function that will be executed when the hamburger menu is clicked. This parameter is required.

- ...rest (varargs): Additional optional parameters to customize the hamburger menu, such as width, height, color, bar height, etc.

## Usage Examples

Add a hamburger menu to an element with the "menu" class and log a message to the console when clicked:

```
NavBarMenu(".menu", () => {
    console.log("Clicked");
});
```

Add a customized hamburger menu with styles and a callback function to an element with the "menu" class:

```
NavBarMenu(".menu", () => {
    console.log("Clicked");
}, "50px", "50px", "black", "10px");
```

## Installation
## CDN

```
<script src="https://unpkg.com/npm-package-bir@1.1.1/npm-resource.js"></script>
```

## NPM

```
npm i npm-package-bir
```

## Browser Compatibility

The NavBarMenu function uses standard JavaScript and CSS methods and properties that are compatible with most modern browsers. However, it is recommended to test in different browsers to ensure full compatibility.
