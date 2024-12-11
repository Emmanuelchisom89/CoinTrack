import * as React from "react";
import Pagination from "@mui/material/Pagination";
import "./style.css";

export default function PaginationControlled({ page, handlePageChange }) {

  return (
    <div className="pagination-div">
      <Pagination
        sx={{
          "& .MuiPaginationItem-root": {
            color: "var(--white)", 
            border: "1px solid var(--grey)",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", 
          },
          "& .Mui-selected": {
            backgroundColor: "var(--blue)", 
            color: "var(--white)", 
            borderColor: "var(--blue)",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "none", 
            color: "#ccc", 
          },
        }}
        count={10}
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
      />
    </div>
  );
}
