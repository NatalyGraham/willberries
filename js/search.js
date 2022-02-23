const search = () => {
	const input = document.querySelector('.search-block > input');
	console.dir(input);
	
	const searchBtn = document.querySelector('.search-block > button');

	let inputText;
	input.addEventListener('input', (event) => {
		inputText = event.target.value;
	});
	searchBtn.addEventListener('click', () => {
		console.log(inputText);		
	})
};

search();