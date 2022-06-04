import './App.css';
import PageButton from './Components/Page-Comp/PageButton';
import Button from './Components/UI/Button';
import Header from './Components/Page-Comp/Header';

function App() {
	return (
		<div className="App">
			<Header></Header>
			
			<Button>
				hello
			</Button>
			
			<PageButton>
			</PageButton>
		</div>
	);
}

export default App;