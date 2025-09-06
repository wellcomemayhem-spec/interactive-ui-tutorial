const codeArea = document.getElementById('code-area');
const previewFrame = document.getElementById('preview');

codeArea.addEventListener('input', () => {
    const code = codeArea.value;
    const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
    if (doc) {
        doc.open();
        doc.write(code);
        doc.close();
    }
});