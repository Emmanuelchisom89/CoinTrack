import React from 'react';
import WatchGridItem from '../WatchGridItems/WatchGridItem';
import WatchListItems from '../WatchListItems/WatchListItems';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import { Link } from 'react-router-dom'; 
import "./style.css";

const WatchTabs = ({ coins }) => {
  const [value, setValue] = React.useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontFamily: "inter",
    textTransform: "capitalize",
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

   const emptyWatchList = (
    <div className="empty-watchlist">
      <p>No items in the Watchlist</p>
      <Link to="/dashboard">
        <button>
          Go to Dashboard
        </button>
      </Link>
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>

        {coins.length === 0 ? ( // Check if the watchlist is empty
          <div className="empty-container">{emptyWatchList}</div>
        ) : (
          <>
            <TabPanel value="grid">
              <div className="grid-flex">
                {coins.map((coin, i) => (
                  <WatchGridItem
                    coin={coin} key={i} />
                ))}
              </div>
            </TabPanel>

            <TabPanel value="list">
              <table className="list-table">
                {coins.map((coin, i) => (
                  <WatchListItems
                    coin={coin} key={i} />
                ))}
              </table>
            </TabPanel>
          </>
        )}
      </TabContext>
    </ThemeProvider>
  );
};

export default WatchTabs;
