function heavyTask() {
	const numbers: number[] = Array(55_000_000).fill(true).map(() => Math.random() * 11)
	return numbers.slice(0, 5).map(el => Math.floor(el))
}

self.onmessage = () => {
	const res = heavyTask();
	self.postMessage({ res });
}
