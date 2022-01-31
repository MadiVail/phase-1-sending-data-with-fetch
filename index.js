function submitData(name, email) {
    const subData = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        }),
    };

    return fetch("http://localhost:3000/users", subData)
    .then((response) => response.json())
    .then((body) => addNewContact(body.id))

    .catch((err) => addNewContact(err.message))

};

function addNewContact (newID) {
    document.getElementsByTagName("body")[0].innerHTML = newID;
}

submitData("name", "name@name.com")