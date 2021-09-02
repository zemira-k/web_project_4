## Web Project 4 - Zemira Kehati

## Project Name: Around The U.S.

### Project description and its functionality: 
* When you open the project, you can see the main page, that includes: header - logo, footer - copyright, main content - avatar image with name and job description, and six pictures of places and discription.
* There are a few elements you can click on:
1. Edit button - to edit profile name and description.
2. Add button - to add a place card with image and description.
3. Like button - on each picture you can choose the like button wich will change to a full black heart.
4. Clicking on an image will open a popup window with a large image.
* all popups can be closed by clicking escape or by clicking on popup-overlay.
* all forms are validated.

### Technologies and techniques used: 
* BEM metodologi.
* Popup windows.
* Template elements.
* settings object

### In css I used - 
* Percentage width for block classes, so the page will be responsive. 
* Grid for the six elements of images. Arranged them with grid-template-column, grid-template-rows and grid gap. 
* Media queries for breaking points. 
* The pseudo class "hover" for all the links.
* Transition for opening and closing forms images etc.

### In JS I used - 
* An array of the first six pictures and description
* Function for opening, closing and submiting all the forms.
* A function for all the cards events.
* A function to check input validity - calls hide error/show error functions, as needed.
* A toggle button function which makes the button disabled or non-disabled.
* A keyHandler for closing popups by clicking outside the popup or by clicking escape.

## Link to GitHub pages: https://zemira-k.github.io/web_project_4/