/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sectionCount = 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function createNavList() {
    const sectionsArray = document.querySelectorAll('section');
    const navbar = document.querySelector('ul');
    sectionsArray.forEach(element => {
        const temp = element.getAttribute('data-nav');
        const secbutton = `<li class="btn">${temp}</li>`;
        navbar.insertAdjacentHTML('beforeend', secbutton);
        sectionCount++;
    });
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active






// /**
//  * 
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Define Global Variables
//  * 
// */

// let sectionArray = [];
// let sectionCount = 1;
// /**
//  * End Global Variables
//  * Start Helper Functions
//  * 
// */
// // const newElement = document.createElement('section');
// function createSection() {
//     const newdiv = document.createElement('div');
//     newdiv.innerHTML = `
//     <section id="section${sectionCount}" data-nav="Section ${sectionCount}" class="your-active-class">
// <div class="landing__container">
//     <h2>Section ${sectionCount}</h2>
//     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus
//         pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
//         lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac
//         tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
//         nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis,
//         aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
//         vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et
//         odio sed euismod.</p>

//     <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit,
//         vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
//         consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
// </div>
// </section>
//     `;
//     const main = document.querySelector('main');
//     main.appendChild(newdiv);
// }

// function addNewSection() {
//     const navbar = document.querySelector('ul');
//     const secbutton = `<li class="btn">Section ${sectionCount}</li>`;
//     navbar.insertAdjacentHTML('beforeend',secbutton);
//     // const node = document.createElement("LI");
//     // const textnode = document.createTextNode(`Section ${sectionCount}`);
//     // node.appendChild(textnode);
//     // navbar.appendChild(node);
//     createSection();
//     sectionCount++;
// }



// /**
//  * End Helper Functions
//  * Begin Main Functions
//  *
// */

// // build the nav


// // Add class 'active' to section when near top of viewport


// // Scroll to anchor ID using scrollTO event


// /**
//  * End Main Functions
//  * Begin Events
//  *
// */

// // Build menu 

// // Scroll to section on link click

// // Set sections as active


