import React from "react";
import "./FutuTable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import { styled } from '@mui/material/styles';
import TablePagination from "@mui/material/TablePagination";
import TableFooter from "@mui/material/TableFooter" ;
let data = require("./data/Futu_final_output.json");

for( var i = 0 ; i < data.length ; i ++){
  data[i].rank = i+1 ;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#091353",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



const useStyles = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,
    margin: "10px 10px",
    maxWidth: 950,
  },
}));

function FutuTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="table-container">
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="headerText">
              <StyledTableCell className="headerCell">Rank</StyledTableCell>
              <StyledTableCell className="headerCell" align="right">
                Number of posts
              </StyledTableCell>
              <StyledTableCell className="headerCell" align="right">
                Total Engagement rate
              </StyledTableCell>
              <StyledTableCell className="headerCell" align="right">
                Market Attitude
              </StyledTableCell>
              <StyledTableCell className="headerCell" align="right">
                Overall Score
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <StyledTableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.rank} - {row.name}
                  </TableCell>
                  <TableCell align="right">{row.posts_sum}</TableCell>
                  <TableCell align="right">
                    {row.total_engagement_rate}
                  </TableCell>
                  <TableCell align="right">{row.market_attitude}</TableCell>
                  <TableCell align="right">{row.overall_score}</TableCell>
                </StyledTableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TablePagination
              rowsPerPageOptions={[5,10,15]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>

    </div>
  );
}

export default FutuTable;
