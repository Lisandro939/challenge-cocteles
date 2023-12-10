export function handleSearch(searchInput, search, historySearch) {
  const addToSearchHistory = (searchInput, searchType) => {
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    if (!searchHistory.find(item => item.search === searchInput)) {
      searchHistory.push({ search: searchInput, type: searchType });
      localStorage.setItem("search", JSON.stringify(searchHistory));
    }
  };

  if (searchInput !== "") {
    addToSearchHistory(searchInput, search);

    if (search === "nombre") {
      return `/name/${searchInput.split(" ")[1]}`;
    } else if (search === "categorías") {
      return `/category/${searchInput}`;
    }

    return `/ingredient/${searchInput}`;
  } else if (historySearch) {
    if (historySearch.type === "nombre") {
      return `/name/${historySearch.search.split(" ")[1]}`;
    } else if (historySearch.type === "categorías") {
      return `/category/${historySearch.search}`;
    }

    return `/ingredient/${historySearch.search}`;
  }
}
