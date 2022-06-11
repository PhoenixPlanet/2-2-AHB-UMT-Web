import './App.css';
import PageButton from './Components/Page-Comp/PageButton';
import Button from './Components/UI/Button';
import Header from './Components/Page-Comp/Header';
import InfoCard from './Components/Page-Comp/InfoCard';

function App() {
	return (
		<div className="App">
			<Header></Header>
			
			<Button>
				hello
			</Button>
			
			<InfoCard>
			</InfoCard>
			
			<PageButton>
			</PageButton>
		</div>
	);
}

export default App;