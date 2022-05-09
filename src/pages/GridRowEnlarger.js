import { TableContainer, Card, Table, TableBody, TableRow, TableCell } from "@mui/material"
export default function GridRowEnlarger(props) {
    return (
        <TableContainer component={Card}>
            <Table aria-label="simple table">
                <TableBody>
                    {props.selectedRow && Object.entries(props.selectedRow).map((entry) => (
                        <TableRow
                            key={entry[0]}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {entry[0]}
                            </TableCell>
                            <TableCell align="right">{entry[1]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
