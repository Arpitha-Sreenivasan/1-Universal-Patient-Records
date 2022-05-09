import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import GridRowEnlarger from "./GridRowEnlarger";
import GridRowEnlargerDialog from "./GridRowEnlargerDialog";

export default function DataGridHelper(props) {
    return (
        <Grid container justifyContent="center">
            <Grid item my={1} lg={10} xs={12} style={{flex:1}}>
                <DataGrid autoHeight disableColumnResize={true} rows={props.rows} columns={props.columns} />
                <GridRowEnlargerDialog
                    open={props.open}
                    onClose={props.handleClose}
                    title={props.title}
                    content = {
                    <GridRowEnlarger
                        selectedRow = {props.selectedRow}
                    >
                    </GridRowEnlarger>
                }>

                </GridRowEnlargerDialog>
            </Grid>
        </Grid>
    )
}