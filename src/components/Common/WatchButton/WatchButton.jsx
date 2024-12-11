import React, { useState } from "react";
import ReactDOM from "react-dom";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { Tooltip } from "@mui/material";
import { toast } from "react-toastify";
import { addToWatchlist, removeFromWatchlist } from "../../../functions/watchlist";
import "./style.css"


const WatchButton = ({ coin }) => {
  const [isWatchlisted, setIsWatchlisted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isHiding, setIsHiding] = useState(false); 

  // Initialize watchlist status
  React.useEffect(() => {
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setIsWatchlisted(watchlist.includes(coin.id));
  }, [coin.id]);

  // Handle add/remove toggle
  const handleWatchlistToggle = (e) => {
    e.preventDefault();
    if (isWatchlisted) {
      setShowConfirmDialog(true); 
    } else {
      const success = addToWatchlist(coin.id);
      if (success.success) {
        setIsWatchlisted(true);
        toast.success(`${coin.name} has been added to the watchlist.`);
      } else {
        toast.warning(success.message);
      }
    }
  };

    // Confirm removal
    const confirmRemove = () => {
  const success = removeFromWatchlist(coin.id);
  if (success.success) {
    setIsWatchlisted(false);
    toast.info(`${coin.name} has been removed from the watchlist.`);
  } else {
    toast.warning(success.message);
  }
  startClosingModal(); 
};

  // Cancel removal
  const cancelRemove = () => {
    startClosingModal(); 
  };

  // Close modal with bounce-out animation
  const startClosingModal = () => {
    setIsHiding(true); 
    setTimeout(() => {
      setShowConfirmDialog(false);
      setIsHiding(false); 
    }, 500); 
  };

  return (
    <>
      <Tooltip
        title={isWatchlisted ? "Remove from Watchlist" : "Add to Watchlist"}
        placement="bottom-end"
      >
        <div
          className={`${
            coin.price_change_percentage_24h > 0 ? "watchlist" : "watchlist-red"
          }`}
          onClick={handleWatchlistToggle}
        >
          {isWatchlisted ? <StarIcon /> : <StarOutlineIcon />}
        </div>
      </Tooltip>

      {/* Modal */}
      {showConfirmDialog &&
        ReactDOM.createPortal(
          <>
            
            <div className="overlay" onClick={cancelRemove}></div>

            <div
              className={`confirm-dialog ${isHiding ? "hidden" : ""}`}
              onClick={(e) => e.stopPropagation()} 
            >
              <p>
                Are you sure you want to remove <strong>{coin.name}</strong> from
                the watchlist?
              </p>
                    <button
                        onClick={confirmRemove}
                        className="btn_yes"
                    >Yes</button>
                    <button
                        onClick={cancelRemove}
                        className="btn_no"
                    >No</button>
            </div>
          </>,
          document.body // Render modal in the root of the DOM
        )}
    </>
  );
};

export default WatchButton;
