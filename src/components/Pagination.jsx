import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";

const PaginationComponent = ({ limit, offset, totalCount, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / limit);

  const handlePrevPage = () => {
    onPageChange(offset - limit);
  };

  const handleNextPage = () => {
    onPageChange(offset + limit);
  };

  return (
    <div style={{ display: "flex", justifyContent: "end", margin: 20 }}>
      <ButtonGroup color="primary" aria-label="pagination">
        <Button disabled={offset === 0} onClick={handlePrevPage}>
          <Typography variant="body2" style={{ alignSelf: "center" }} fontWeight={700}>
            Prev
          </Typography>
        </Button>
        <Button disabled={offset + limit >= totalCount} onClick={handleNextPage}>
          <Typography variant="body2" style={{ alignSelf: "center" }} fontWeight={700}>
            Next
          </Typography>
        </Button>
      </ButtonGroup>
      <Typography variant="body2" style={{ marginLeft: 20, alignSelf: "center" }} fontWeight={600}>
        Page {Math.ceil(offset / limit) + 1} of {totalPages}
      </Typography>
    </div>
  );
};

export default PaginationComponent;
