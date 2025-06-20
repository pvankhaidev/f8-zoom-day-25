const tabItems = document.querySelectorAll(".tab-item");
const tabs = document.querySelectorAll(".tabs");

tabItems.forEach((tabItem) => {
  tabItem.addEventListener("click", function () {
    const tabList = tabItem.parentElement;
    const tab = tabList.parentElement;
    const thisTabItems = Array.from(tabList.querySelectorAll(".tab-item"));
    const thisTabContents = tab.querySelectorAll(".tab-content");
    const index = thisTabItems.indexOf(tabItem);

    thisTabItems.forEach((item) => {
      if (item === tabItem) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    thisTabContents.forEach((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key >= "1" && event.key <= "9") {
    const index = event.key - 1;
    tabs.forEach((tab) => {
      const tabList = tab.querySelector(".tab-list");
      const thisTabItems = Array.from(tabList.querySelectorAll(".tab-item"));
      const thisTabContents = tab.querySelectorAll(".tab-content");

      thisTabItems.forEach((item, itemIndex) => {
        if (index >= thisTabItems.length) return;
        if (itemIndex === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      thisTabContents.forEach((tab, tabIndex) => {
        if (index >= thisTabItems.length) return;
        if (tabIndex === index) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    });
  }
});

tabs.forEach((tab) => {
  const tabList = tab.querySelector(".tab-list");
  const thisTabItems = Array.from(tabList.querySelectorAll(".tab-item.active"));
  const thisTabContents = tab.querySelectorAll(".tab-content.active");
  if (thisTabItems.length > 1) {
    thisTabItems.forEach((item, index) => {
      if (index < thisTabItems.length - 1) {
        item.classList.remove("active");
      }
    });
  }

  if (thisTabContents.length > 1) {
    thisTabContents.forEach((item, index) => {
      if (index < thisTabContents.length - 1) {
        item.classList.remove("active");
      }
    });
  }
});
