function navSearch(cb, delay = 1000) {
	let timerId: NodeJS.Timeout;
	return () => {
		clearTimeout(timerId);
		timerId = setTimeout(() => {
			cb;
		}, delay);
	};
}
export default navSearch;
