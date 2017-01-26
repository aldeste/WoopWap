const DB_DEBTS = 'http://nuwn.net/schoolapi/debt.php';  //url to db

// function for getting all debts from db
export function getDebts() {
    const url = `${DB_DEBTS}?all`;

    return fetch(url, {
    })
        .then(response => response.json());
}

// function for posting one debt to db
export function postDebt(vad ,obj) {

    //set url
    const url = `${DB_DEBTS}?insert`;

    // format obj to be able to send to db
    var data = new FormData();
    data.append("json", JSON.stringify( obj ));

    return fetch(url, {
        method: "POST",
        header: {
            'Content-Type': 'x-www-form-urlencoded'
        },
        body: data
    })
    .then(response => response.json());
}

// function for updating one debt to db
export function destroyDebt(obj) {

    //set url
    const url = `${DB_DEBTS}?remove`;

    // format obj to be able to send to db
    var data = new FormData();
    data.append("json", JSON.stringify( obj ));

    return fetch(url, {
        method: "POST",
        header: {
            'Content-Type': 'x-www-form-urlencoded'
        },
        body: data
    })
    .then(response => response.json());
}