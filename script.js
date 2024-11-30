document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        alert(`Terima kasih, ${name}. Pesan Anda telah dikirim!`);
        this.reset();
    } else {
        alert('Harap isi semua bidang!');
    }
});
