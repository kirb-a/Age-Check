// Ne radi ovaj prvi dio ne znam sto

// document.addEventListener("DOMContentLoaded", function ( ) {
//     const dayInput = document.getElementById("dayInput");
//     const monthSelect = document.getElementById("monthSelect");
//     const yearInput = document.getElementById("yearInput");
//     const livedForElement = document.getElementById("livedfor");
//     const calculateButton = document.getElementById("calculateButton");
//     function calculateDaysBetweenDates(birthDate, currentDate) {
//         const timeDiff = currentDate - birthDate;
//         return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
//     }
//     calculateButton.addEventListener("click", function ( ) {
//         const birthDay = parseInt(dayInput.value);
//         const birthMonth = parseInt(monthSelect.value);
//         const birthYear = parseInt(yearInput.value);
//         const birthDate = new Date(birthYear, birthMonth, birthDay);
//         const currentDate = new Date();
//         const daysLived = calculateDaysBetweenDates(birthDate, currentDate);
//         livedForElement.textContent = ` ${daysLived} days`;
//         const booksRead = daysLived * 4;
//         readBooksElement.textContent = "${booksRead} books";
//     });
// });

document.addEventListener("DOMContentLoaded", function ( ) {
    const dayInput = document.getElementById("dayInput");
    const monthSelect = document.getElementById("monthSelect");
    const yearInput = document.getElementById("yearInput");
    const livedForElement = document.getElementById("livedfor");
    const calculateButton = document.getElementById("calculateButton");
    const readBooksElement = document.getElementById("readbooks");
    const walkedElement = document.getElementById("walked");

    function calculateDaysBetweenDates(birthDate, currentDate) {
        const timeDiff = currentDate - birthDate;
        return Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    }

    calculateButton.addEventListener("click", function ( ) {
        const birthDay = parseInt(dayInput.value);
        const birthMonth = parseInt(monthSelect.value);
        const birthYear = parseInt(yearInput.value);
        const birthDate = new Date(birthYear, birthMonth, birthDay);
        const currentDate = new Date();

        const daysLived = calculateDaysBetweenDates(birthDate, currentDate);
        livedForElement.textContent = `${daysLived} days.`;

        //za knjige , prosjek je 4 knjige/dan Ali mjenjam ovdje radi boljeg rada
        const booksRead = daysLived * 0.8;
        readBooksElement.textContent = `${booksRead} books.`;

        //prosjek 30 km
        const walking = daysLived * 30;
        walkedElement.textContent = `${walking} km`;
        
    });
});


// kopirano sa chat gpt ovaj 


document.addEventListener("DOMContentLoaded", function () {
    // Get the element to update
    const changeEverydayElement = document.getElementById("change+1everyday");

    // Function to update the content with the current day
    function updateContent() {
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000) + 1;
        changeEverydayElement.textContent = `Today is #${dayOfYear} day of ${today.getFullYear()}`;
    }

    // Initial update
    updateContent();

    // Schedule daily updates
    setInterval(updateContent, 24 * 60 * 60 * 1000); // Update every 24 hours
});

