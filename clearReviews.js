const url = 'https://natural-extracts-default-rtdb.firebaseio.com/reviews.json';
fetch(url, { method: 'DELETE' })
  .then(res => res.json())
  .then(data => console.log('Deleted reviews:', data))
  .catch(err => console.error(err));
