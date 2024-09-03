'use client'

import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
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
    const theme = useTheme()
    return (
        <Box sx={{ bgcolor: theme.palette.background.paper }}>
            <DataGrid
                sx={{ bgcolor: theme.palette.background.paper }}
                autoHeight
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: { paginationModel: { pageSize: 5 } },
                }}
                pageSizeOptions={[5, 10, 20, 30]}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    )
}
