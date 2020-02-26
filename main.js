'use strict';

window.addEventListener('DOMContentLoaded', function() {
  let wrapper = '.wrapper',
      tab = '.tab-item',
      content = '.content',
      tabHeader = document.querySelector(wrapper),
      tabs = document.querySelectorAll(tab),
      tabContent = document.querySelectorAll(content);
  
  function hideTabs(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabs(1);

  function showTabs(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  tabHeader.addEventListener('click', function(e) {
    let target = e.target;
    if (target && target.classList.contains('tab-item')) {
      for (let i = 0; i < tabs.length; i++) {
        if (target == tabs[i]) {
          hideTabs(0);
          showTabs(i);
          break;
        }
      }
    }
  });
});