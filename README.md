## Web Project 4 - Zemira Kehati

## Project Name: Around The U.S.

### Project description and its functionality: 
* When you open the project, you can see the main page, that includes: header - logo, footer - copyright, main content - avatar image with name and job description, and an array of images of places and discription.
* There are a few elements you can click on:
1. Edit button - to edit profile name and description.
2. Edit profile - Button for editing the profile picture. This button will only appear when the mouse hovers on the image.
3. Add button - to add a place card with image and description.
4. Delete button - to delete a place card. Will appear only on images that were added by the user.
5. Like button - on each picture you can choose the like button to like or dislike, and change the amount of likes as well.
6. Clicking on an image will open a popup window with a large image.
7. Api request for: 
  * Loading User Information from the Server, 
  * Loading Cards from the Server, 
  * Editing the Profile, Adding a New Card, 
  * Adding and Removing Likes and Showing How Many Likes a Card Has, 
  * Deleting a Card, 
  * Updating Profile Picture
* all popups can be closed by clicking escape or by clicking on popup-overlay.
* all forms are validated.

### Technologies and techniques used: 
* BEM metodologi.
* Popup windows.
* Template elements.
* Settings object.
* Classes in JS.
* import and export.
* module type of script.
* setting and using Webpack.
* Api requests.

### In css I used - 
* Percentage width for block classes, so the page will be responsive. 
* Grid for the six elements of images. Arranged them with grid-template-column, grid-template-rows and grid gap. 
* Media queries for breaking points. 
* The pseudo class "hover" for all the links.
* Transition for opening and closing forms images etc.

### In JS I used - 
* An array of the first six pictures and description
* Function for opening, closing and submiting all the forms.
* A keyHandler for closing popups by clicking outside the popup or by clicking escape.
* Several JS classes, and instances for them.
* Api requests.

## Link to GitHub pages: https://zemira-k.github.io/web_project_4/