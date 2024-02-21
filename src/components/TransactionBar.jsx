import { mockTransactions } from '../mockData';

export default function TransactionBar() {
	// const [transactions, setTransactions] = useState(null);

	const transactions = mockTransactions.map((transaction) => {
		return <>${transaction.cost} <br/></>;
	});
	return <div>{transactions}</div>
}
