export function handleDeleteSearch(historySearch, setHistory, history) {
    let searchHistory = history;
    searchHistory = searchHistory.filter(item => item !== historySearch)
    localStorage.setItem("search", JSON.stringify(searchHistory))
    setHistory(searchHistory)
}