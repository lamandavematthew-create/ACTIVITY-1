(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive po?",
    "Behbyy pleaseT^T...",
    "Just think about it po! plssss",
    "If you say no, I will be really sad...",
    "Daveyy will be very sad...",
    "Daveyy will be very very very sad:(...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️",
    "I will not stop until you say yess! ❤️",
    "Whyy ayaww moo:((((",
    "Please Behbyy ako na to ohh",
    "Yess na yannnn!!!!",
    "This won't change naa, so say yess plss",
    "Yess na yannnn!!!!"
];

const gifs = [
    
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGR0MjhjcnlxYnYza3NncmFnMjg0eW10ZzFrbGNsc2xhYXl1aXZpeCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/h5WUsjFmE6329tkcAz/giphy.gif",

    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnk1ZGQ2bmJtYnc3aXhtdWgxbmxidDRkd2g3NXVrd2Y2MzZ6ZXB5cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/UmthO5muTl9jh0GcDQ/giphy.gif",

    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjU4d2hmbnF3NWxtYmU0Zmg0a3p0cG95dGRycHh5cDZheG11aDU3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/FF5i6JkK5BE83PU9K1/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Nmd3bDk4ZGowaWZvbHpjbTM5MDVzMjBsN2ZucmxiN3djZm9weWpmNCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/KaLRxzlE6ekrcrUhLb/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Nmd3bDk4ZGowaWZvbHpjbTM5MDVzMjBsN2ZucmxiN3djZm9weWpmNCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/uYf1efc3YJdV0vsvZN/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3Znd2YXQwMXFrbHdrbDE0YjBtNjhjNnkxcTBkdWprYXZ5YmNuMTUxMyZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/SVkhYVCi8fKPKvypi6/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eDFub21kamI0anAyeDZzNzY3dmR1MWE5MWdzaTIwM3piam9heXZ1MCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/uWzRXTQRoQzxDO9W0p/giphy.gif",

    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmpzcHFlNmpuZmEwaG8xbjRyeTZhNHJ3ZDNxbTUzendoenAxYmI4aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/QlQdLBS70XJcZY1fLF/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NHE3YmZzbGxqejk1c2MzMTIxeW83c3B5enY0ZjZzdWQwaHIydDN3MyZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/dEZKOYuY4oQhMOZGEU/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGR0MjhjcnlxYnYza3NncmFnMjg0eW10ZzFrbGNsc2xhYXl1aXZpeCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/m93WfeOUyZwH9wYfUV/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aDhrNzg0Z3RlaXUxcGhna3RiOXJwMWkxYjF1M3lobGxtZjdmbGt5NCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/GDKFgaD6n4TBVitoGu/giphy.gif",
    
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eWM3N3MzYTc3c205N2RydzhoYWQ1cHpyNzd4dTVvN3I3MmgwN2dociZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/14SGx6CtrLrj7dvOa3/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aDhrNzg0Z3RlaXUxcGhna3RiOXJwMWkxYjF1M3lobGxtZjdmbGt5NCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/5eFtKFqu5D34WNno9u/giphy.gif",

    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aDhrNzg0Z3RlaXUxcGhna3RiOXJwMWkxYjF1M3lobGxtZjdmbGt5NCZlcD12MV9zdGlja2Vyc19yZWxhdGVkJmN0PXM/9V5fArpd99fLoemwn3/giphy.gif",

];

let clickIndex = 0;


function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.getElementById('reactionGif');

    // Update text
    noButton.textContent = messages[Math.min(clickIndex, messages.length - 1)];

    // Update GIF (cap at last GIF)
    const gifIndex = Math.min(clickIndex, gifs.length - 1);
    gif.style.opacity = 0;

    setTimeout(() => {
        gif.src = gifs[gifIndex];
        gif.style.opacity = 1;
    }, 150);

    // Grow YES button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.4}px`;

    clickIndex++;
}

/* ================================
   YES BUTTON HANDLER
================================ */
function handleYesClick() {
    console.log("She said yes 💖");
    window.location.href = "yes_page.html";
}