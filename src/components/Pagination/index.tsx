'use client'

import { FormControl, Grid2 as Grid, InputLabel, MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import * as React from 'react';

export default function TablePagination() {
    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Grid container spacing={3}>
            <Grid size="grow">
                <FormControl variant="filled" size="small">
                    <InputLabel id="demo-simple-select-label">Linhas por pagina</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid size="grow">
                <Pagination count={10} variant="outlined" color="primary" />
            </Grid>
        </Grid>
    )
    // <Container >
    //     <FormControl variant="filled" size="small">
    //         <InputLabel id="demo-simple-select-label">Linhas por pagina</InputLabel>
    //         <Select
    //             labelId="demo-simple-select-label"
    //             id="demo-simple-select"
    //             value={age}
    //             label="Age"
    //             onChange={handleChange}
    //         >
    //             <MenuItem value={10}>Ten</MenuItem>
    //             <MenuItem value={20}>Twenty</MenuItem>
    //             <MenuItem value={30}>Thirty</MenuItem>
    //         </Select>
    //     </FormControl>

    //     <Pagination count={10} variant="outlined" color="primary" />
    // </Container>

}

// https://mui.com/material-ui/react-pagination/
// https://mui.com/x/react-data-grid/pagination/#custom-pagination-ui