const search = () => {
	const input = document.querySelector('.search-block > input');
	const searchBtn = document.querySelector('.search-block > button');

	input.addEventListener('click', (event) => {
		console.log(event.target.value);
		
	})
};

search();