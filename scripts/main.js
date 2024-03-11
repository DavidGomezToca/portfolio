let optionsMenuVisible = false;
let languagesMenuVisible = false;

document.addEventListener('DOMContentLoaded', function () {
    const toggleThemeButton = document.getElementById('toggletheme');
    const body = document.body;
    const copyrightElement = document.getElementById("copyright");
    const copyrightText = "COPYRIGHT 2024";
    const portfolioVersionElement = document.getElementById("portfolio-version");
    const portfolioVersionNumber = "v1.0.0"
    const portfolioVersionText = "PORTFOLIO " + portfolioVersionNumber;
    const backToTopButton = document.querySelector("#back-to-top-button");

    copyrightElement.textContent = copyrightText;
    portfolioVersionElement.textContent = portfolioVersionText;

    let favoriteTheme = localStorage.getItem('favorite-theme');
    switch (favoriteTheme) {
        case 'dark-theme':
        case 'light-theme':
            break;
        default:
            favoriteTheme = 'dark-theme';
            localStorage.setItem('favorite-theme', favoriteTheme);
            break;
    }

    body.classList.add(favoriteTheme);
    toggleIcon(toggleThemeButton);

    let favoriteLanguage = localStorage.getItem('favorite-language');
    switch (favoriteLanguage) {
        case 'ES':
            translate_espanol();
            break;
        case 'FR':
            translate_frances();
            break;
        case 'EN':
            translate_ingles();
            break;
        case 'PT':
            translate_portugues();
            break;
        default:
            translate_espanol();
            storeFavoriteLanguage('ES');
            break;
    }

    toggleThemeButton.addEventListener('click', function () {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');
        toggleIcon(toggleThemeButton);
        let currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        localStorage.setItem('favorite-theme', currentTheme);
    });

    document.getElementById('espanol').addEventListener('click', function () {
        translate_espanol();
        storeFavoriteLanguage('ES');
    });

    document.getElementById('frances').addEventListener('click', function () {
        translate_frances();
        storeFavoriteLanguage('FR');
    });

    document.getElementById('ingles').addEventListener('click', function () {
        translate_ingles();
        storeFavoriteLanguage('EN');
    });

    document.getElementById('portugues').addEventListener('click', function () {
        translate_portugues();
        storeFavoriteLanguage('PT');
    });

    window.addEventListener("scroll", () => {
        const doc = document.querySelector("html");
        if (doc.scrollTop > 400) {
            backToTopButton.classList.add("back-to-top-block");
        } else {
            backToTopButton.classList.remove("back-to-top-block");
        }
    })

});

function storeFavoriteLanguage(favoriteLanguage) {
    localStorage.setItem('favorite-language', favoriteLanguage);
}

function toggleIcon(button) {
    const body = document.body;
    if (body.classList.contains('dark-theme')) {
        button.classList.remove('fa-sun');
        button.classList.add('fa-moon');
    }
    else if (body.classList.contains('light-theme')) {
        button.classList.remove('fa-moon');
        button.classList.add('fa-sun');
    }
};

function toggleOptionsMenu() {
    document.getElementById("languages-menu").classList = "";
    if (optionsMenuVisible) {
        document.getElementById("nav").classList = "";
        optionsMenuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        optionsMenuVisible = true;
    }
};

function toggleLanguagesMenu() {
    document.getElementById("nav").classList = "";
    if (languagesMenuVisible) {
        document.getElementById("languages-menu").classList = "";
        languagesMenuVisible = false;
    } else {
        document.getElementById("languages-menu").classList = "active";
        languagesMenuVisible = true;
    }
};

function selectOption() {
    document.getElementById("nav").classList = "";
    optionsMenuVisible = false;
};

window.onscroll = function () {
    effectsSkills();
};

function effectsSkills() {
    let skills = document.getElementById("skills");
    let skills_distance = window.innerHeight - skills.getBoundingClientRect().top;
    if (skills_distance >= 300) {
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("react")
        habilidades[1].classList.add("laravel")
        habilidades[2].classList.add("javascript")
        habilidades[3].classList.add("wordpress")
        habilidades[4].classList.add("mySQL")
        habilidades[5].classList.add("php")
        habilidades[6].classList.add("python")
        habilidades[7].classList.add("kotlin")
        habilidades[8].classList.add("java")
        habilidades[9].classList.add("cSharp")
        habilidades[10].classList.add("htmlCss")
        habilidades[11].classList.add("androidStudio")
        habilidades[12].classList.add("unity")
        habilidades[13].classList.add("git")
        habilidades[14].classList.add("communication")
        habilidades[15].classList.add("teamwork")
        habilidades[16].classList.add("creativity")
        habilidades[17].classList.add("dedication")
    }
};