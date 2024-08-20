import { Box, Button } from '@mui/material';

const Home = () => {
	return (
		<Box sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 5,
        }}>
			<img src="/gustav.jpg" alt="Gustav Tholén" style={{ maxWidth: '50%', maxHeight: '50%' }}/>
			<Button href="mailto:tyon.gustav.tholen@outlook.com" size="large" variant="contained">
                Kontakta mig!
            </Button>
		</Box>
	);
};

export default Home;
