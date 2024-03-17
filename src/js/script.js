const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const textToCopy = button.dataset.text;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard!');
      })
      .catch(() => {
        console.error('Failed to copy text to clipboard!');
      });
  });
});