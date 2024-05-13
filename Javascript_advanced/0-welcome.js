function welcome(firstname,lastname) {
    const fullname =`${firstname} ${lastname}`;
    function displayFullName() {
        alert(`welcome ${fullname}!`)
    }
    displayFullName();
}



console.log(welcome('adib','bh'));

