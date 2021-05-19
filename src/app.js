window.addEventListener('DOMContentLoaded', (event) => {
  import('./form.js')
    .then(({ handleFormSubmit }) => {
      const form = document.getElementById('form');

      form.addEventListener('submit', handleFormSubmit);
    })
    .catch((err) => {
      console.log(res);
    });
});
