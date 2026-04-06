//?what is debouncing in js
//? Debouncing is a technique in js that  delays the execution of a function until the user stops triggering the event for a specified time.

function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// function we want to control
function searchData(value) {
  console.log("API call for:", value);
}

// create debounced version
const debouncedSearch = debounce(searchData, 1000);

// event listener
document.getElementById("searchInput").addEventListener("input", function (e) {
  debouncedSearch(e.target.value);
});
