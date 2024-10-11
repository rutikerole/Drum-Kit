// This listens for a key press on the keyboard
window.addEventListener('keydown', (e) => {
    // Find the corresponding audio and key element based on the pressed key's keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // If no audio is found for the key pressed, stop here
    if (!audio) return;

    // Play the audio and reset it if already playing
    audio.currentTime = 0;
    audio.play();

    // Add the 'playing' class to the key to show it's pressed
    key.classList.add('playing');
});

// Get all elements with the class 'key' (the drum buttons)
const keys = document.querySelectorAll('.key');

// Add a click event listener to each button
keys.forEach(button => {
    button.addEventListener('click', function () {
        // Add the 'playing' class when the button is clicked
        this.classList.add('playing');

        // Get the audio associated with this button
        const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);

        // Play the audio and reset it if already playing
        audio.currentTime = 0;
        audio.play();
    });

    // Remove the 'playing' class when the transition ends (after the animation)
    button.firstChild.addEventListener('transitionend', () => {
        button.classList.remove('playing');
    });
});
