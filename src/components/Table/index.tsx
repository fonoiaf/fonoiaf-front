'use client'

import { Box } from '@mui/material'
import {
    DataGrid,
    GridColDef,
    GridRowsProp,
    GridToolbar,
} from '@mui/x-data-grid'

interface Props {
    rows: GridRowsProp[]
    columns: GridColDef[]
}

export default function Table({ rows, columns }: Props) {
    // const theme = useTheme()
    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <DataGrid
                sx={{
                    boxShadow: 1,
                }}
                autoHeight
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10, 20, 30]}
                slots={{ toolbar: GridToolbar }}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    )
}
