import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { supabaseConfig } from 'src/config-supabase';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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

function createData(no, project_name, project_location, project_type, owner, contractor, subcontractor) {
  return { no, project_name, project_location, project_type, owner, contractor, subcontractor };
}

const rows = [
  createData('1', 'Tuban 1', 'Jawa Timur', 'Plan', 'Pertamina', 'Wika'),
  createData('2', 'Tuban 2', 'Jawa Timur', 'Plan', 'Pertamina', 'Wika'),
  createData('3', 'Tuban 3', 'Jawa Timur', 'Plan', 'Pertamina', 'Wika'),
  createData('4', 'Tuban 4', 'Jawa Timur', 'Plan', 'Pertamina', 'Wika'),
  createData('5', 'Tuban 5', 'Jawa Timur', 'Plan', 'Pertamina', 'Wika'),
  
];

export default function CustomizedTables() {
  const [listproyek, setProyek] = React.useState([]);
  console.log(listproyek);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await supabaseConfig.from('t_proyek').select()
  //       console.log(response);
  //       setProyek(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);
 
  return (
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No</StyledTableCell>
            <StyledTableCell align="center">Project Name</StyledTableCell>
            <StyledTableCell align="center">Project Location</StyledTableCell>
            <StyledTableCell align="center">Project Type</StyledTableCell>
            <StyledTableCell align="center">Owner</StyledTableCell>
            <StyledTableCell align="center">Contractor</StyledTableCell>
            <StyledTableCell align="center">Subcontractor</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.no}</StyledTableCell>
              <StyledTableCell align="right">{row.project_name}</StyledTableCell>
              <StyledTableCell align="right">{row.project_location}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}