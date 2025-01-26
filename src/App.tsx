import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
	const state = useSelector((state) => state.counter.number);
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(increment(1));
	};
	const handleDecrement = () => {
		dispatch(decrement(1));
	};
	return (
		<>
			<div className="flex border-2 border-gray-700 h-screen w-full justify-center items-center ">
				<button
					onClick={handleIncrement}
					className="bg-green-500 p-2 text-2xl text-white rounded"
				>
					Increment
				</button>
				<div className="text-2xl bg-white m-5">{state}</div>
				<button
					onClick={handleDecrement}
					className="bg-red-500 p-2 text-2xl text-white rounded"
				>
					Decrement
				</button>
			</div>
		</>
	);
}

export default App;
