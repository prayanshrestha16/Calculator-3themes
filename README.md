Introduction
This project implements a web-based calculator with theme switching capabilities and a calculation history feature. It's built using HTML, CSS, and JavaScript, demonstrating front-end web development practices.

Features
Basic arithmetic operations: addition, subtraction, multiplication, division
Theme switching (3 themes available)
Calculation history
Responsive design
Delete and reset functionality
Technical Overview
HTML: Structures the calculator and history layout
CSS: Styles the calculator and implements theme variations
JavaScript: Handles calculator logic, theme switching, and history management
File Structure
calculator-project/
│
├── index.html
├── style.css
└── script.js
Implementation Details
HTML (index.html)
Defines the structure of the calculator and history section
Includes theme switching controls
Links to external CSS and JavaScript files
CSS (style.css)
Uses CSS variables for easy theme switching
Implements grid layout for calculator buttons
Provides styles for three distinct themes
Ensures responsive design for various screen sizes
JavaScript (script.js)
Manages calculator operations
Implements theme switching logic
Handles history tracking and display
Provides delete and reset functionality
Customization and Extension
Adding New Themes
In style.css, create a new theme class (e.g., body.theme-4)
Define new color variables within this class
Update the theme switching logic in script.js
Extending Calculator Functionality
To add new operations:
Update the HTML to include new operation buttons
Modify the JavaScript to handle these new operations
Modifying History Feature
Adjust the number of history entries displayed by changing the condition in the addToHistory function in script.js
Troubleshooting
Common Issues
Theme not switching: Check browser console for JavaScript errors
Calculations not working: Verify button click event listeners in script.js
Styling issues: Ensure CSS file is properly linked and check for syntax errors
FAQs
Q: How do I add more themes? A: Add new theme classes in the CSS file and extend the theme switching logic in JavaScript.

Q: Can I change the calculator layout? A: Yes, modify the HTML structure and update the CSS grid layout accordingly.

Q: How to add more complex mathematical operations? A: Extend the calculate function in JavaScript to include new operations.

Q: Is the calculator accessible? A: Basic accessibility is implemented, but further improvements like keyboard support could be added.

Q: How does the theme switching work? A: It uses CSS variables and JavaScript to dynamically change the applied theme class on the body element.

Q: Can the history be saved between sessions? A: Currently, it's not persistent. Implement local storage to save history between sessions.

Q: How to change the number of buttons or their arrangement? A: Modify the HTML structure for buttons and adjust the CSS grid layout in style.css.

Q: Is the calculator mobile-responsive? A: Yes, it uses responsive design principles, but testing on various devices is recommended.

Q: How can I implement keyboard input support? A: Add event listeners for keydown events in JavaScript and map them to calculator functions.

Q: Can I use this calculator in my own project? A: Yes, but ensure you understand and comply with any licensing requirements if applicable.
