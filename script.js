// Show the minimized tab when a scam is triggered
function showMiniTab(type) {
    const miniTab = document.getElementById("mini-tab");
    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");

    // Customize the content for the specific scam
    switch (type) {
        case 'phishing':
            modalTitle.innerText = "Phishing Attempt";
            modalMessage.innerText = "Enter your login credentials to resolve the issue:";
            break;
        case 'spyware':
            modalTitle.innerText = "Spyware Warning";
            modalMessage.innerText = "Download this software to remove spyware from your device:";
            break;
        case 'identity-theft':
            modalTitle.innerText = "Identity Verification";
            modalMessage.innerText = "Verify your identity by providing the requested details:";
            break;
        case 'bank-fraud':
            modalTitle.innerText = "Bank Account Locked";
            modalMessage.innerText = "Update your account information to regain access:";
            break;
        case 'spam':
            modalTitle.innerText = "Congratulations!";
            modalMessage.innerText = "Claim your prize by entering your email address:";
            break;
        case 'holiday-scam':
            modalTitle.innerText = "Holiday Deal";
            modalMessage.innerText = "Get 90% off! Enter your details to receive the discount:";
            break;
    }

    // Display the minimized tab
    miniTab.classList.remove("hidden");
}

// Maximize the mini-tab to show the modal
function maximizeTab() {
    const miniTab = document.getElementById("mini-tab");
    const miniModal = document.getElementById("mini-modal");

    miniTab.classList.add("hidden"); // Hide the tab
    miniModal.classList.remove("hidden"); // Show the modal
}

// Minimize the modal back to the mini-tab
function minimizeTab() {
    const miniTab = document.getElementById("mini-tab");
    const miniModal = document.getElementById("mini-modal");

    miniModal.classList.add("hidden"); // Hide the modal
    miniTab.classList.remove("hidden"); // Show the tab
}

// Function to randomize the order of examples
function randomizeExamples() {
    const main = document.querySelector('main');
    const examples = Array.from(main.querySelectorAll('.example'));
    examples.sort(() => Math.random() - 0.5);
    examples.forEach(example => main.appendChild(example));
}

// Function to show one example at a time
function showCarousel() {
    const examples = document.querySelectorAll('.example');
    let currentIndex = 0;

    function showExample(index) {
        examples.forEach((example, i) => {
            example.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextExample() {
        currentIndex = (currentIndex + 1) % examples.length;
        showExample(currentIndex);
    }

    function prevExample() {
        currentIndex = (currentIndex - 1 + examples.length) % examples.length;
        showExample(currentIndex);
    }

    document.getElementById('next-button').addEventListener('click', nextExample);
    document.getElementById('prev-button').addEventListener('click', prevExample);

    showExample(currentIndex);
}

// Call the functions on page load
document.addEventListener('DOMContentLoaded', () => {
    randomizeExamples();
    showCarousel();
});
