
import { Box,Typography } from "@material-ui/core";


export default function Balance() {
    return (
        <Box sx={{ pb: 5 }}>
            <Typography variant="h3" sx={{color:'primary.main'}}>$ 5,234.54</Typography>
            <Typography variant="subtitle1" sx={{color:'common.white'}}>+ 10.4%($207.65)</Typography>
        </Box>
    );
}