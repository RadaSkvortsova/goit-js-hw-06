const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(title => {
    console.log(`Category: ${title.firstElementChild.textContent}
      Elements: ${title.lastElementChild.childElementCount}`);
});
