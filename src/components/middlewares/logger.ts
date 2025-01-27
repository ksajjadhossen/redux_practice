const logger = (state) => (next) => (action) => {
	console.log("old State", action.getState);
	console.log("action =>", action);
	next(action);
	console.log("new state", state.getState);
};

export default logger;
