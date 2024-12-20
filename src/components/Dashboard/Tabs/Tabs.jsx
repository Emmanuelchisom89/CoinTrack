import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import Grid from '../Grid/Grid';
import "./style.css"
import List from '../List/List';

export default function Tabs({ coins }) {
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
    }
    );

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="grid" sx={style} />
            <Tab label="List" value="list" sx={style} />
        </TabList>
                  
        <TabPanel value="grid">
          <div className='grid-flex'>
            {coins.map((coin, i) => {
              return <Grid
                coin={coin}
                key={i}
              />
            })}
         </div>
        </TabPanel>

        <TabPanel value="list">
          <table className='list-table'>
            {coins.map((coin, i) => {
              return <List coin={coin} key={i} />
            })}
          </table>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
