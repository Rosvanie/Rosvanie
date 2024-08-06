document.getElementById('contactButton').addEventListener('click', function() {
    // Remplacez 'YourPhoneNumber' par votre numéro WhatsApp
    window.location.href = 'https://wa.me/+242069007635?text=Bonjour,%20je%20souhaite%20profiter%20de%20l%27offre%20exceptionnelle%20de%20votre%20site%20vitrine.';
});




document.getElementById('contact').addEventListener('click', function() {
    // Remplacez 'your-email@example.com' par votre adresse email
    var emailAddress = 'rosvanienk@gmail.com';
    var subject = 'Profiter de l\'offre exceptionnelle de votre site vitrine';
    var body = 'Bonjour,\n\nJe souhaite profiter de l\'offre exceptionnelle de votre site vitrine.\n\nCordialement,';
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        menu.classList.toggle('show');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && event.target !== menuToggle && !menuToggle.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

