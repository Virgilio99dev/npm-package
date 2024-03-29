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

```js
NavBarMenu(".menu", () => {
    console.log("Clicked");
});
```

Add a customized hamburger menu with styles and a callback function to an element with the "menu" class:

```js
NavBarMenu(".menu", () => {
    console.log("Clicked");
}, "50px", "50px", "black", "10px");
```

## Installation
## CDN

```js
<script src="https://unpkg.com/npm-package-bir@1.1.2/npm-resource.js"></script>
```

## NPM

```bash
npm i npm-package-bir
```

## Browser Compatibility

The NavBarMenu function uses standard JavaScript and CSS methods and properties that are compatible with most modern browsers. However, it is recommended to test in different browsers to ensure full compatibility.


## SliderImage Function

The `SliderImage` function is used to create a simple image slider with dots navigation.

### Parameters:

- `select`: A string representing the selector for the container element where the slider will be appended.
- `SrcImages`: A function that returns an array of image URLs.
- `interval` (optional): An integer representing the interval in milliseconds for changing images. Default is `2000`.

### Example Usage:

```javascript
SliderImage('.slider-container', () => [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
], 3000);
```
### Functionality:

-   It dynamically creates an image element and appends it to the specified container.
-   Changes the image at the specified interval.
-   Adds dots navigation below the slider.
-   Changes the color of the dot corresponding to the active image.
-   Allows image change on dot click.
### Example:
```html
<div class="slider-container"></div>

<script>
    SliderImage('.slider-container', () => [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ], 3000);
</script>
```
### Notes:

-   Ensure the container has appropriate styling for proper display.
-   Make sure the `SrcImages` function returns an array of image URLs.

### Example Css Styling:
```css
.slider-container {
width:  100%;
height:  500px;
overflow:  hidden;
position:  relative;
img {
width:  100%;
height:  100%;
object-fit:  cover;
position:  absolute;
top:  0;
left:  0;
}
}
```