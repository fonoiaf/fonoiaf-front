'use client'

import { Pagination } from "@mui/material"

export default function Loader() {
    return <Pagination count={10} variant="outlined" color="primary" />
}

// https://mui.com/material-ui/react-pagination/
// https://mui.com/x/react-data-grid/pagination/#custom-pagination-ui