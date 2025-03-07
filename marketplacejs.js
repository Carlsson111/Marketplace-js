const advertisementsData = [
    {
        title: 'Ad 1',
        description: 'This is the first advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'contact1@example.com'
    },
    {            
        title: 'Ad 2',
        description: 'This is the second advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'test@test.nu'
    },
    {
        title: 'Ad 3',
        description: 'This is the third advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'figgeferrum@example.com'
    },
    {
        title: 'Bell 4',
        description: 'This is the first advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'Anders@test.nu'
    },
    {
        title: 'Car 5',
        description: 'This is the first advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'randomemail@test.com'
    },
    {
        title: 'Ad 6',
        description: 'This is the first advertisement.',
        image: 'https://place-hold.it/150',
        contact: 'contact3@example.com'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const advertisementsContainer = document.getElementById('advertisements');
    const filterInput = document.getElementById('filterTitle');

    const displayAdvertisements = () => {
        advertisementsContainer.innerHTML = '';
        advertisementsData.forEach((ad, index) => {
            const card = document.createElement('div');
            card.className = 'card mb-4 col-md-4';
            card.innerHTML = `
                <img class="card-img-top" src="${ad.image}" alt="${ad.title}">
                <div class="card-body">
                    <h5 class="card-title">${ad.title}</h5>
                    <p class="card-text">${ad.description}</p>
                    <p class="card-text contact-info" id="contact-${index}">***</p>
                </div>
                <div class="card-footer text-center">
                    <button class="btn btn-info btn-block details" onclick="toggleContact(${index})">Details</button>
                </div>
            `;
            advertisementsContainer.appendChild(card);
        });
    };

    const filterAdvertisements = (e) => {
        const filterText = e.target.value.toLowerCase();
        const cards = advertisementsContainer.getElementsByClassName('card');
        Array.from(cards).forEach(card => {
            const title = card.getElementsByClassName('card-title')[0].textContent.toLowerCase();
            if (title.includes(filterText)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    };

    filterInput.addEventListener('input', filterAdvertisements);

    displayAdvertisements();
});

function toggleContact(index) {
    const contactInfo = document.getElementById(`contact-${index}`);
    if (contactInfo.textContent.includes('*')) {
        contactInfo.textContent = advertisementsData[index].contact;
        alert(`Contact Information: ${advertisementsData[index].contact}`);
    } else {
        contactInfo.textContent = '***';
    }
}