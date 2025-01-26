import { decrement, increment } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
	const state = useAppSelector((state) => state.counter.number);
	const dispatch = useAppDispatch();

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
