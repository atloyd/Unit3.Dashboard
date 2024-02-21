import './App.css';
import PrimaryDashboard from './components/PrimaryDashboard';
import Heading from './components/Heading';
import TransactionBar from './components/TransactionBar';
import SideBar from './components/Sidebar';
import { Grid, Paper } from '@mui/material';

function App() {
	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<Paper>
						<SideBar />
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper>
						<PrimaryDashboard />
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper>
						<Heading />
					</Paper>
				</Grid>
				<Grid item xs={8}>
					<Paper>
						<TransactionBar />
					</Paper>
				</Grid>
			</Grid>
		</>
	);
}

export default App;
