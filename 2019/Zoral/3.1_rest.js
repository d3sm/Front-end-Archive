document.getElementById('fetchAPI').addEventListener('click', fetchAPI);
function fetchAPI() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => { return res.json() })
        .then((data) => {
            let result = `<h2> Users </h2>`;
            data.forEach((user) => {
                const {id, name, email, address:{city,street}} = user
                result +=
                    `<card>
                        <h4> ${id} </h4>
                        <ul>
                            <li> Name : ${name} </li>
                            <li> Email : ${email} </li>
                            <li> Address : ${city}, ${street} </li>
                        </ul>
                     </card>`;
                document.getElementById('result').innerHTML = result;
            });
        })
}