const DB_DEBTS = 'http://nuwn.net/schoolapi/debt.php';  //url to db

// function for getting all debts from db
export function getDebts() {
    const url = `${DB_DEBTS}?all`;

    return fetch(url)
        .then(response => response.json());
}

// function for posting one debt to db
export function postDebt(obj) {

    //set url
    const url = `${DB_DEBTS}?insert`;

    // format obj to be able to send to db
    var data = new FormData();
    data.append("json", JSON.stringify( obj ));

    return fetch(url, {
        method: "POST",
        body: data
    })
    .then(response => response.json());
}

// function for updating one debt to db
export function updateDebt(obj) {

    //set url
    const url = `${DB_DEBTS}?update`;

    // format obj to be able to send to db
    var data = new FormData();
    data.append("json", JSON.stringify( obj ));

    return fetch(url, {
        method: "POST",
        body: data
    })
    .then(response => response.json());
}
