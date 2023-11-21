function changehomepagetheme(homepagetheme){
    try {
        document.getElementById('theme_css').href = "themes/" + homepagetheme;
    } catch (error) {
        try {
            document.getElementById('theme_css').href = "themes/ocean.css";
        } catch (error1) {
            console.error(error1);
        }
    }
}
