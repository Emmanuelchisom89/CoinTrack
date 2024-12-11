export const addToWatchlist = (coinId) => {
  try {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (!watchlist.includes(coinId)) {
      const updatedWatchlist = [...watchlist, coinId];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return { success: true, message: "Coin added to watchlist." };
    }
    return { success: false, message: "Coin is already in the watchlist." };
  } catch (error) {
    console.error("Error adding to watchlist:", error);
    return { success: false, message: "Error adding to watchlist." };
  }
};

export const removeFromWatchlist = (coinId) => {
  try {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    if (watchlist.includes(coinId)) {
      const updatedWatchlist = watchlist.filter((id) => id !== coinId);
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      return { success: true, message: "Coin removed from watchlist." };
    }
    return { success: false, message: "Coin not found in the watchlist." };
  } catch (error) {
    console.error("Error removing from watchlist:", error);
    return { success: false, message: "Error removing from watchlist." };
  }
};
