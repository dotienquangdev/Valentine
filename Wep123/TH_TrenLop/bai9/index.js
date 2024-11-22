function check(options) {

    const username = document.querySelector("username");
    const password = document.querySelector("password");
    var selector = {};
    function getparrent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }


}
