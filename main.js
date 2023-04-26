const runBtn = document.getElementById('runbtn');
const showOutput = document.getElementById('show-output');

function updateOutput() {
  const html = htmlEditor.getValue();
  const css = cssEditor.getValue();
  const js = jsEditor.getValue();

  const output = showOutput.contentWindow.document;
  output.open();
  output.write(`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>
          try {
            ${js}
          } catch (error) {
            console.error(error);
            const errorMessage = document.createElement('p');
            errorMessage.textContent = error.message;
            document.body.appendChild(errorMessage);
          }
        </script>
      </body>
    </html>
  `);
  output.close();
}

runBtn.addEventListener('click', updateOutput);




