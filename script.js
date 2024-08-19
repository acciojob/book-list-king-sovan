document.getElementById('submit').addEventListener('click', function() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const isbn = document.getElementById('isbn').value;

	if (title === '' || author === '' || isbn === '') {
		alert('Please fill in all fields');
		return;
	}

	const row = document.createElement('tr');
	row.innerHTML = `
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete btn btn-danger btn-sm">X</button></td>
	`;

	document.getElementById('book-list').appendChild(row);

	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
});

document.getElementById('book-list').addEventListener('click', function(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure you want to delete this book?')) {
			e.target.parentElement.parentElement.remove();
		}
	}
});
