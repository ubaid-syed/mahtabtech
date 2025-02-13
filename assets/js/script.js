"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
// Open the modal when clicking on a project item
const projectItems = document.querySelectorAll(".project-item");
// const popupModal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");

// Show popup with details
projectItems.forEach((item) => {
  item.addEventListener("click", () => {
    popupModal.style.display = "block";
  });
});

// Close the popup when clicking the close button
closeModal.addEventListener("click", () => {
  popupModal.style.display = "none";
});

// Close the popup when clicking outside the content area
window.addEventListener("click", (e) => {
  if (e.target === popupModal) {
    popupModal.style.display = "none";
  }
});

// const images = [
//   "./assets/images/20.jpg",
//   "./assets/images/28.jpg",
//   // Add more images here if needed
// ];

// let currentImageIndex = 0;
// const popupImage = document.getElementById("popupImage");
// const prevImageBtn = document.getElementById("prevImage");
// const nextImageBtn = document.getElementById("nextImage");

// // Show the previous image
// prevImageBtn.addEventListener("click", () => {
//   currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // Loop back to the last image if at the beginning
//   popupImage.style.opacity = 0; // Fade out the current image

//   setTimeout(() => {
//     popupImage.src = images[currentImageIndex];
//     popupImage.style.opacity = 1; // Fade in the new image
//   }, 500); // Wait for 0.5s to match the opacity transition time
// });

// // Show the next image
// nextImageBtn.addEventListener("click", () => {
//   currentImageIndex = (currentImageIndex + 1) % images.length; // Loop back to the first image if at the end
//   popupImage.style.opacity = 0; // Fade out the current image

//   setTimeout(() => {
//     popupImage.src = images[currentImageIndex];
//     popupImage.style.opacity = 1; // Fade in the new image
//   }, 500); // Wait for 0.5s to match the opacity transition time
// });

// Project data
const projects = {
  "Digital Marketing Agency Website": {
    images: [
      "./assets/images/61.jpg",
      "./assets/images/62.jpg",
      "./assets/images/64.jpg",
      "./assets/images/vekstloop.jpg",
    ],
    description:
      "The user developed a clean, user-friendly website for Vekstloop, showcasing their SEO, Google Ads, and social media marketing services. The site features dynamic content, a custom service comparison tool, testimonial slider, and responsive design with SEO best practices for enhanced user experience.",
    liveLink: "https://www.vekstloop.no/",
  },
  "Custom E-Commerce Website for Furniture Products": {
    images: [
      "./assets/images/1.jpg",
      "./assets/images/3.jpg",
      "./assets/images/Willet.jpg",
    ],
    description:
      "The user developed a tailored online platform for Willett Furniture, showcasing their unique collection with high-quality visuals and an intuitive user experience. The site includes product catalogs, showrooms, custom orders, care guides, and an optimized shopping cart system for seamless purchases.",
    liveLink: "https://willettspace.com/",
  },
  "Influencer Marketing for Family & Female Audiences Website": {
    images: [
      "./assets/images/30.jpg",
      "./assets/images/31.jpg",
      "./assets/images/Wunder Studios.jpg",
    ],
    description:
      "The user developed a professional WordPress website for WunderStudios to showcase their expertise in influencer marketing targeting family and female audiences. The site features a dynamic Success Stories section, a White Panda initiative section, and a clean, visually engaging interface using custom code and Elementor.",
    liveLink: "https://www.wunderstudios.com/",
  },
  "Custom WordPress Website for Twinkly Smart Lighting": {
    images: [
      "./assets/images/47.jpg",
      "./assets/images/50.jpg",
      "./assets/images/Twinkly.jpg",
    ],
    description:
      "The user developed a sleek, user-friendly website for Twinkly, featuring a shopping cart, user login, and multilingual options. The site highlights their innovative app for creating personalized lighting displays, with a customized theme using WordPress, Divi, Oxygen, and Elementor for responsive design.",
    liveLink: "https://twinkly.com/",
  },
  "Comprehensive Real Estate Website": {
    images: [
      "./assets/images/118.jpg",
      "./assets/images/120.jpg",
      "./assets/images/Kormendy Trott.jpg",
    ],
    description:
      "The user designed a dynamic, user-friendly website for the Kormendy Trott Team to enhance their online presence, featuring property listings, a search bar, and sections for their podcast and blog. The site includes a Get Your FREE Property Valuation feature and accessible contact forms to foster client engagement.",
    liveLink: "https://www.realestateplatform.com/",
  },
  "Multisite WordPress Solution Website": {
    images: [
      "./assets/images/97.jpg",
      "./assets/images/98.jpg",
      "./assets/images/Cloud Spa.jpg",
    ],
    description:
      "The user developed a multisite WordPress website for Cloud9Spa, featuring six locations with unique pages for each and an integrated booking system for lead generation. Custom functionality was added for location-specific content and SEO optimization, enhancing local search visibility while maintaining consistency across all locations.",
    liveLink: "https://www.multisiteplatform.com/",
  },
  "Comprehensive Healthcare Platform Website": {
    images: [
      "./assets/images/106.jpg",
      "./assets/images/108.jpg",
      "./assets/images/Solution Reach.jpg",
    ],
    description:
      "The user developed a user-friendly WordPress website for Solutionreach, highlighting key features like appointment reminders, two-way texting, and online scheduling. The site showcases their Revenue Cycle Messaging™ solution, offering tailored content for dental, vision, and medical practices, with valuable resources and a responsive, interactive design.",
    liveLink: "https://www.healthcareplatform.com/",
  },
  "Interactive Website for Studio": {
    images: [
      "./assets/images/16.jpg",
      "./assets/images/18.jpg",
      "./assets/images/Skylight.jpg",
    ],
    description:
      "The user developed a custom WordPress website for Skylight Studios, showcasing their venues and collaborations with brands like Hermès and Sony. The site features interactive animations and custom JavaScript elements, with key sections like Venues and Services highlighting their expertise in placemaking and cultural experiences.",
    liveLink: "https://www.studiowebsite.com/",
  },
  "Medical SPA Website": {
    images: [
      "./assets/images/26.jpg",
      "./assets/images/27.jpg",
      "./assets/images/OLA.jpg",
    ],
    description:
      "Developed a modern, user-friendly website for Ola Aesthetics, showcasing their skincare services and commitment to inclusivity. Features include a prominent call-to-action for free consultations, a section for Ola Signature Services, and informative content about client care and safety. A blog offers valuable beauty insights. The site provides seamless navigation and booking options, positioning Ola Aesthetics as a trusted clinic for advanced skincare with a focus on personalized treatments and client education.",
    liveLink: "https://olaaestheticsla.com/",
  },
  "Vacation Rentals and Concierge Website": {
    images: [
      "./assets/images/94.jpg",
      "./assets/images/96.jpg",
      "./assets/images/Night Fall Group.jpg",
    ],
    description:
      "Designed a sophisticated WordPress website for The Nightfall Group, showcasing their luxury villa rentals, yacht charters, and concierge services. The site features high-quality images, interactive booking forms, and detailed service pages. Advanced animations and parallax scrolling enhance the user experience, while a responsive design ensures accessibility on all devices. Client testimonials build trust, and a streamlined contact form facilitates easy communication, positioning The Nightfall Group as a premier luxury service provider.",
    liveLink: "https://nightfallgroup.com/",
  },
  "Custom WordPress Website with Quotation System for Door Products": {
    images: [
      "./assets/images/21.jpg",
      "./assets/images/23.jpg",
      "./assets/images/Most innovative door.jpg",
    ],
    description:
      "Created a dynamic WordPress website for Most Innovative Doors, focusing on their Slide n Pivot® Curtain Wall Series. The site features an advanced product catalog with 15 configurations, customizable options, and real-time quote requests. Integrated Elementor for a sleek, responsive layout, while Divi and Oxygen enabled custom design elements. Key functionalities include a detailed care and maintenance guide, warranty information, quick product search, and easy contact forms to streamline customer inquiries and quotes.",
    liveLink: "https://mostinnovativedoors.com/",
  },
  "Holiday Light Installation Services Website": {
    images: [
      "./assets/images/110.jpg",
      "./assets/images/112.jpg",
      "./assets/images/Maxteriors.jpg",
    ],
    description:
      "Designed a tailored website for Maxteriors, showcasing their holiday light installation services in Oakland County, MI. The site highlights free custom design and quote offerings, featuring engaging visuals, customer testimonials, and seasonal themes. Integrated RankMath SEO for better search engine visibility, W3 Total Cache for fast performance, and Elementor for an attractive layout. This project elevated Maxteriors' brand and positioned them as a top choice for holiday lighting services.",
    liveLink: "https://maxteriorslighting.com/",
  },
  "Premium Real Estate Website": {
    images: [
      "./assets/images/89.jpg",
      "./assets/images/92.jpg",
      "./assets/images/Hitlon & Hyland.jpg",
    ],
    description:
      "Hilton & Hyland sought a sleek, modern website to showcase its luxury properties and reinforce its market position. I designed a visually stunning platform with high-quality images, an advanced property search, and sections for featured listings, market insights, and press coverage. The responsive site includes a media section, newsletter sign-up, and emphasizes Hilton & Hyland's global reach. This site elevates user engagement and effectively attracts high-end clients in the luxury real estate market.",
    liveLink: "https://www.hiltonhyland.com",
  },
  "Kids Learning and Behaviour Coaching Website": {
    images: [
      "./assets/images/38.jpg",
      "./assets/images/40.jpg",
      "./assets/images/Goally.jpg",
    ],
    description:
      "Goally required a website to showcase their unique tablet for neurodiverse children. I created a user-friendly site with engaging visuals and clear messaging about the product's benefits in fostering independence and managing emotions. Key features include optimized performance with WP Rocket, lead generation via OptinMonster, and SEO with Yoast. Using Elementor, I delivered a customized, visually appealing website that highlights Goally’s mission and supports neurodiverse families.",
    liveLink: "https://getgoally.com/",
  },
  "Blogging and Educational Resources Website": {
    images: [
      "./assets/images/43.jpg",
      "./assets/images/44.jpg",
      "./assets/images/Crowell + co.jpg",
    ],
    description:
      "Crowell + Co needed a website to showcase their health and wellness services focused on root cause healing. I created a user-friendly site featuring one-on-one consultations, educational resources, a podcast, blog, and client testimonials. Key features include email subscription, social media integration, and tailored health protocols. Using WordPress, Elementor, and essential plugins, I developed an engaging platform that enhances client trust and engagement, positioning Crowell + Co as a trusted wellness resource.",
    liveLink: "https://crowell.co/",
  },
  "Fertility Clinic & Wellness Website": {
    images: [
      "./assets/images/11.jpg",
      "./assets/images/12.jpg",
      "./assets/images/Clear Peak.jpg",
    ],
    description:
      "Clear Peak Fertility & Wellness needed a welcoming website to showcase their personalized fertility services. I created a user-friendly site featuring Dr. Stephanie’s bio, comprehensive service offerings, testimonials, and easy contact options. The site includes booking functionality, social media integration, online payment, and a subscription form. Using Elementor and key plugins, I designed a compassionate, functional platform that effectively communicates the clinic’s mission and enhances patient engagement.",
    liveLink: "https://clearpeakfertility.com/",
  },
  "Educational LMS and Community Website": {
    images: [
      "./assets/images/76.jpg",
      "./assets/images/80.jpg",
      "./assets/images/Class Dojo.jpg",
    ],
    description:
      "ClassDojo sought to improve communication and engagement among schools, teachers, families, and students. I developed a vibrant, user-friendly site that highlights key features like messaging, event management, and a reward system. The site emphasizes privacy, encourages sign-ups, and offers clear calls to action. Using custom plugins and responsive design, I enhanced the platform’s functionality and engagement, reinforcing ClassDojo as a leading tool for building positive school communities.",
    liveLink: "https://www.classdojo.com",
  },
  "Executive Search Firm Website, Diversity & Inclusion in Leadership": {
    images: [
      "./assets/images/66.jpg",
      "./assets/images/67.jpg",
      "./assets/images/Bridge Partners.jpg",
    ],
    description:
      "The client wanted a website highlighting their executive search firm’s commitment to diversity and inclusion. I delivered a modern, user-friendly site showcasing their 100% search completion rate, impactful legacy, client testimonials, research insights, and diverse client base. The responsive, SEO-optimized design features engaging content and an intuitive UX. Custom plugins and Elementor were used to create a tailored, high-impact site, effectively positioning the firm as a leader in inclusive leadership placements.",
    liveLink: "https://bridgepartnersllc.com/",
  },
  "Financial Services & Advisory Website": {
    images: [
      "./assets/images/58.jpg",
      "./assets/images/59.jpg",
      "./assets/images/Cerity Partners.jpg",
    ],
    description:
      "Cerity Partners requested a website overhaul to showcase their wealth management, financial planning, and business advisory services. I delivered a user-friendly site with dedicated sections for investment solutions, estate planning, workplace solutions, and educational resources. The site features dynamic content, a concierge program, and a focus on privacy and compliance. Using WordPress and Elementor, I created a responsive, flexible platform that effectively communicates Cerity's expertise and services to a wide audience.",
    liveLink: "https://ceritypartners.com/",
  },
  "Investment Company website, Secure, User-Centric Trading Experience": {
    images: [
      "./assets/images/54.jpg",
      "./assets/images/55.jpg",
      "./assets/images/Binarium.jpg",
    ],
    description:
      "The job was to develop a site for a smart investment platform offering diverse trading tools and options. I delivered a sleek, user-friendly site with essential features, including seamless registration, a demo account for practice trading, and a fast withdrawal process. The platform supports educational resources, a trading room with signals and analytics, and an economic calendar for tracking key events. Used custom plugin development, integration of trading tools, responsive UI/UX design, and strong security measures, resulting in a reliable, user-centric platform for informed investing.",
    liveLink: "https://binarium.com/",
  },
  "Real Estate Project": {
    images: [
      "./assets/images/81.jpg",
      "./assets/images/82.jpg",
      "./assets/images/ACME real estate.jpg",
    ],
    description:
      "When ACME Real Estate sought a site to strengthen its presence in Los Angeles, they wanted a platform showcasing their commitment to personalized service and authenticity. I designed a clean, engaging website that highlights property listings across LA, Orange, San Diego, and Ventura Counties. The site includes advanced search filters for tailored results, a blog for market insights, and dedicated sections for ACME’s values, community involvement, and testimonials. A responsive, user-focused design ensures easy navigation, helping ACME attract and connect with clients seeking the perfect home.",
    liveLink: "https://acme-re.com/",
  },
  "Website for bicycle ratings and reviews with WooCommerce Theme": {
    images: [
      "./assets/images/86.jpg",
      "./assets/images/88.jpg",
      "./assets/images/bike-test.jpg",
    ],
    description:
      "The goal was to create an engaging, accessible platform for bike enthusiasts to find, compare, and purchase bikes and e-bikes. The solution included a range of models with images and specs, a custom JavaScript comparison tool for real-time model comparisons, buying advice through informative guides, and MTB news along with exclusive offers. By utilizing WooCommerce Multilingual and WPML for translations, alongside Yoast SEO for visibility, I developed a dynamic, multilingual platform that enhanced user engagement and expanded market reach.",
    liveLink: "https://bike-test.com",
  },
  "Figma to WordPress": {
    images: [
      "./assets/images/image_original (1).JPG",
      "./assets/images/image_original (2).JPG",
      "./assets/images/image_original (3).JPG",
    ],
    description:
      "For Orchestra VOX, I completed a precise, pixel-perfect Figma-to-WordPress conversion that highlights my skills in WordPress website design and Elementor development. This website embodies the orchestra's mission to bring classical music to Oxford's diverse communities, breaking traditional concert boundaries.My client-centric approach led to high satisfaction, exceeding expectations by effectively translating the organization’s vision. This project underscores my capabilities in responsive WordPress development, design integrity, and client collaboration.",
    liveLink: "https://orchestravox.com/",
  },
};

const popupModal = document.getElementById("projectModal");
const popupTitle = document.getElementById("popupTitle");
const popupDescription = document.getElementById("popupDescription");
const popupImage = document.getElementById("popupImage");
const livePreviewBtn = document.getElementById("livePreviewBtn");
const prevImageBtn = document.getElementById("prevImage");
const nextImageBtn = document.getElementById("nextImage");

// Initialize variables
let currentProject = null;
let currentImageIndex = 0;

// Function to open the modal and load project data
function openPopup(projectName) {
  currentProject = projectName;
  currentImageIndex = 0;

  const projectData = projects[projectName];
  popupTitle.textContent = projectName;
  popupDescription.textContent = projectData.description;
  popupImage.src = projectData.images[currentImageIndex];
  livePreviewBtn.querySelector("a").href = projectData.liveLink;

  // Show the modal
  popupModal.style.display = "flex"; // Changed to use flex for centering
}

// Event listeners for project items
document.querySelectorAll(".project-item").forEach((item) => {
  item.addEventListener("click", () => {
    const projectName = item.getAttribute("data-project");
    openPopup(projectName);
  });
});

// Close modal on clicking the close button
document.getElementById("closeModal").addEventListener("click", () => {
  popupModal.style.display = "none";
});

// Change image on clicking buttons
prevImageBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents any default behavior like closing modal
  const projectData = projects[currentProject];
  currentImageIndex =
    (currentImageIndex - 1 + projectData.images.length) %
    projectData.images.length;
  popupImage.src = projectData.images[currentImageIndex];
});

nextImageBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents any default behavior like closing modal
  const projectData = projects[currentProject];
  currentImageIndex = (currentImageIndex + 1) % projectData.images.length;
  popupImage.src = projectData.images[currentImageIndex];
});

// Prevent closing modal by clicking outside (removes default behavior)
popupModal.addEventListener("click", (event) => {
  if (event.target === popupModal) {
    event.stopPropagation(); // Prevent closing when clicking outside
  }
});

// Prevent default modal behavior when no project is clicked
window.addEventListener("DOMContentLoaded", () => {
  popupModal.style.display = "none"; // Ensure modal is not open on initial load
});
