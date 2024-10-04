'use client'

import { Box } from '@mui/material'
// import { Box, TablePagination } from '@mui/material'
import {
    DataGrid,
    GridColDef,
    GridRowsProp,
    GridSlotsComponentsProps,
    GridToolbar,
} from '@mui/x-data-grid'
import { GridInitialStateCommunity } from '@mui/x-data-grid/models/gridStateCommunity'

interface Props {
    rows: GridRowsProp[]
    columns: GridColDef[]
}

export default function Table({ rows, columns }: Props) {
    const handleChangePage = (event: any, newPage: any) => {
        // setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: any) => {
        // setPage(0);
        // setRowsPerPage(parseInt(event.target.value, 10));
    };

    // const theme = useTheme()
    const initialState: GridInitialStateCommunity = {
        pagination: { paginationModel: { pageSize: 10 } },
    }

    const slotProps: GridSlotsComponentsProps = {
        toolbar: {
            showQuickFilter: true,
        },
        pagination: {
            labelRowsPerPage: 'Linhas por pagina'
        }
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', borderRadius: '8px', height: 400, width: 1 }}>
            <DataGrid
                sx={{ boxShadow: 1,  }}
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10, 20, 30, 50]}
                slots={{ toolbar: GridToolbar }}
                initialState={{ ...initialState }}
                slotProps={{ ...slotProps }}
            />
{/* 
            <TablePagination
                page={0}
                component="div"
                count={10}
                rowsPerPage={5}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 25]}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Box>
    )
}
