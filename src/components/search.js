import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export function Search(){
    return(
        <div className='search'>
            <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField fullWidth label="Search" id="fullWidth" />
    </Box>
        </div>
    )
}

