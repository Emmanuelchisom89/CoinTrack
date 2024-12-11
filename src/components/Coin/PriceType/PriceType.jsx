import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css"

export default function TogglePriceType({ priceType, handlePriceTypeChange }) {

    return (
      <div className="toggle-prices">
    <ToggleButtonGroup
        sx={{
          "&.Mui-selected": {
            color: "var(--blue) !important",
              },
            fontSize: ".3rem",
          borderColor: "var(--blue)",
          border: "unset !important",
          "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
            color: "var(--blue) !important ",
          },
          "& .MuiToggleButton-standard": {
            color: "var(--blue) !important",
          },
        }}
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
    >
      <ToggleButton value="prices">      
        Price
      </ToggleButton>
      <ToggleButton value="market_caps">      
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes">      
        Total Volume
      </ToggleButton>
            </ToggleButtonGroup>
     </div>
  );
}
