document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('.flex-container-subjects li');

    fetch('jScripts/syndromes.json')
        .then(response => response.json())
        .then(data => {
            console.log('Syndromes data:', data);

            listItems.forEach(function (item, index) {
                item.addEventListener('click', function () {
                    console.log('Clicked on item:', index);
                    const syndromeName = data.syndromes[index].name;
                    const syndromeDescription = data.syndromes[index].description;
                    console.log('Description:', syndromeDescription);
                    displayPopup(syndromeName, syndromeDescription);

                    this.style.backgroundColor = 'green';

                });
            });
        })
        .catch(error => {
            console.error('Error fetching syndromes:', error);
        });
});

function displayPopup(name, description) {
    const popupContainer = document.getElementById('popup-container');
    const popupContent = document.getElementById('popup-content');
    const closeBtn = document.getElementById('close-btn');

    const popupHTML = `<h2>${name}</h2><br><h3>${description}</h3>`;

    popupContent.innerHTML = popupHTML;

    popupContainer.style.display = 'flex';

    closeBtn.addEventListener('click', function () {
        popupContainer.style.display = 'none';
    });
}
function toggleNav() {
    document.getElementById("main-nav").classList.toggle("hide-mobile");
}


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const syndromesList = document.getElementById('syndromesList');
    const listItems = document.querySelectorAll('.flex-container-subjects li');

    function filterSyndromes() {
        const searchText = searchInput.value.toLowerCase();
        listItems.forEach(function (item) {
            const syndromeName = item.textContent.toLowerCase();
            if (syndromeName.includes(searchText)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterSyndromes);
});


