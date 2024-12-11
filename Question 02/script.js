// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed. 

document.getElementById('read-more-btn').addEventListener('click', function() {
    
    const moreText = document.getElementById('more-text');
    const button = document.getElementById('read-more-btn');
    
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      button.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      button.textContent = "Read More";
    }
  });
  