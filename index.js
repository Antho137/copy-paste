const btnCopy = document.getElementById('btn-copy');
const resetBtn = document.getElementById('reset-btn');

btnCopy.addEventListener('click', async () => {
    const copyContent = document.getElementById('copy-content').value;

    try {
        await navigator.clipboard.writeText(copyContent);
        alert('Content copied to clipboard: ' + copyContent);
        copyContent.value = "";
    } catch (err) {
        alert.error('Failed to copy: ', err);
    }
});

resetBtn.addEventListener('click', () => {
    location.reload();
})

document.getElementById("copy-content").focus();