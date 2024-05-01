document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

const menus = document.querySelectorAll(".menu > ul > li");

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    const isActive = menu.classList.contains("active");

    // Remove active class from all menus
    menus.forEach((m) => m.classList.remove("active"));

    // Hide all sub-menus
    document.querySelectorAll(".sub-menu").forEach((subMenu) => {
      subMenu.style.display = "none";
    });

    if (!isActive) {
      menu.classList.add("active");
      const subMenu = menu.querySelector(".sub-menu");
      if (subMenu) {
        subMenu.style.display = "block";
      }
    } else {
      menu.classList.remove("active");
    }
  });

  // Handle sub-menu clicks
  const subMenus = menu.querySelectorAll(".sub-menu li");
  subMenus.forEach((subMenu) => {
    subMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      // Remove active class from all sub-menus
      document.querySelectorAll(".sub-menu li").forEach((subMenu) => {
        subMenu.classList.remove("active");
      });
      // Add active class to clicked sub-menu
      subMenu.classList.add("active");
      // Remove active class from all parent menus
      menus.forEach((m) => m.classList.remove("active"));
      // Add active class to clicked parent menu
      menu.classList.add("active");
    });
  });
});


const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const toggleButton = document.querySelector(".bx-menu");

toggleButton.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const target = event.target;

  // Check if the clicked element is the toggle button
  if (target !== toggleButton) {
    // Check if the clicked element is not a descendant of the sidebar or its toggle button
    if (!sidebar.contains(target) && !target.classList.contains("bx-menu")) {
      // Check if the clicked element is not a descendant of the header
      if (!target.closest(".header")) {
        // Close the sidebar
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    }
  }
});

// Add event listener to sidebar links
sidebar.querySelectorAll(".main-nav .menu > ul > li > a").forEach((link) => {
    link.addEventListener("click", (event) => {
        const submenu = link.nextElementSibling;
        if (submenu && submenu.classList.contains("sub-menu")) {
            // If the clicked link has a submenu, prevent sidebar from closing
            // event.preventDefault();
            // event.stopPropagation();
        } else {
            // If the clicked link does not have a submenu, close the sidebar
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        }
    });
});

// Add event listener to dropdown menu links
sidebar.querySelectorAll(".sub-menu a").forEach((submenuLink) => {
    submenuLink.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    });
});


// Enable the seach keyboard shortcut

// Select the input field
const inputField = document.querySelector("#search-terms");

// Add event listener to the document
document.addEventListener("keydown", (event) => {
    // Check if the Ctrl (or Command) key and "K" key are pressed simultaneously
    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        // Prevent the default browser behavior
        event.preventDefault();
        if (inputField) {
            inputField.focus();
        }
    }
});


document.getElementById("expand-icon").addEventListener("click", () => {
  const expandInfo = document.querySelector("#expand-info");
  expandInfo.classList.toggle("active");
  document.getElementById("expand-icon").classList.toggle("rotated");
});

document.querySelector("#dismiss-btn").addEventListener("click", () => {
  document.querySelector("#quick-tips-tab").style.display = "none";
});