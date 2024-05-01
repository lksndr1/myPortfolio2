const btnDarkMode = document.querySelector('.dark-mode-btn');



// Checking is "dark mode" on (second-main step)
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}


// Checking "night mode" in System Settings on user's device (first-main step)
// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
//     btnDarkMode.classList.add('dark-mode-btn--active');
//     document.body.classList.add('dark');
// } else if (localStorage.getItem('darkMode') === 'light') {
//     btnDarkMode.classList.remove('dark-mode-btn--active');
//     document.body.classList.remove('dark');
// }

// If changed System Settings, change light/night mode
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('darkMode', 'dark');
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('darkMode', 'light')
    }
})


// Switching-on "dark mode" by button (third-main step)
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}