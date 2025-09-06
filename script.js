const codeArea = document.getElementById('code-area');
const previewFrame = document.getElementById('preview');

previewFrame.addEventListener('load', () => {
    const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    codeArea.addEventListener('input', () => {
        const code = codeArea.value;
        if (doc) {
            doc.open();
            doc.write(code);
            doc.close();
        }
    });
});