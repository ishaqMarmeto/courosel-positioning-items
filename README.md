
Published link : https://ishaq-courosel-inside-positioning.netlify.app/


## Pseudocode for Dynamic Splide Carousel

### HTML Structure
1. **Set up basic HTML document structure:**
   - Declare `DOCTYPE html`.
   - Define `<html>` with language attribute set to `en`.
   - Include metadata in the `<head>` section (charset, viewport, title).
   - Link external CSS for Splide and custom styles.

2. **Create dropdown for selecting content position:**
   - Add a `div` with id `position-selector`.
   - Inside the `div`, add a label and a `select` dropdown with options for different content positions.

3. **Set up the Splide carousel structure:**
   - Create a `div` with id `splide` and class `splide`.
   - Inside the `div`, add a `div` with class `splide__track` containing an unordered list (`ul`) with class `splide__list` to hold the slides.

4. **Include Splide and custom JavaScript files:**
   - Add a script tag for external Splide JS.
   - Add a script tag to link to custom JavaScript.

### CSS Styling
1. **Basic Carousel Styling:**
   - Set up styles for `.splide__slide` to display the slide with flex properties, define height, and set the image as background.
   - Style `.carousel-content` to arrange child elements vertically and align them with flexbox.

2. **Customize elements within the carousel content:**
   - Style the `<ul>` list to be inline-block with rounded borders.
   - Ensure the description (`h1`) text is aligned based on the selected position.
   - Customize the button with background color, border, and rounded corners.

3. **Style the dropdown and its options:**
   - Define styles for the dropdown `select` and its options to match the theme.

4. **Define Flexbox positioning classes:**
   - Create 9 classes (top, middle, bottom with start, center, end) to position the content using flexbox properties.
   - Randomly assign text alignment to the description within these classes.

5. **Add responsive adjustments (optional):**
   - Adjust font size for smaller screens if necessary.

### JavaScript Functionality
1. **Wait for the DOM content to be fully loaded.**

2. **Define JSON data structure:**
   - Create an object containing carousel settings and slides data.
   - Each slide includes title, description, button text, image URL, alt text, product URL, and position class.

3. **Select the Splide list element in the DOM.**

4. **Loop through the slides data:**
   - For each slide:
     - Create a list item (`li`) and set its background image.
     - Inside `li`, add a `div` with class `carousel-content` and position class from the data.
     - Add an unordered list (`ul`) containing a list item (`li`) for the title.
     - Add a heading (`h1`) for the description and a button linking to the product URL.
     - Append the constructed slide to the Splide list.

5. **Initialize Splide carousel with settings from JSON data.**

6. **Add event listener for dropdown selection:**
   - On change, update the class of each `carousel-content` to the selected position class, repositioning the content on the slide.
