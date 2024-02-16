const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
let username = document.querySelector("#name");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
// login
let emailLogin = document.querySelector("#email-l");
let passwordLogin = document.querySelector("#password-l");
// login


function SocialMedia() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 500000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        title: "Custom width, padding, Animate.css, color, background,",
        icon: "info",
        title: "Sorry, it is not available now",
        color: "#0B6EFD",
        background: "#bdcfeb",
        width: "370px",
        showClass: {
            popup: `
                animate__animated
                animate__fadeInRight
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
        }
    });

}


function Password() {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        title: "Custom width, padding, Animate.css, color, background. ",
        icon: "info",
        title: "Sorry, it is not available now",
        color: "#0B6EFD",
        background: "#bdcfeb ",
        width: "370px",
        showClass: {
            popup: `
                animate__animated
                animate__fadeInRight
                animate__faster
            `
        },
        hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
        }
    });

}


let db = JSON.parse(localStorage.getItem("db"));

if (!db) {
    db = {
        users: []
    };
    localStorage.setItem("db", JSON.stringify(db));
}

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


document.forms[0].onsubmit = function (e) {
    e.preventDefault()
    let userVal;
    let emailVal;
    let passVal;

    if (username.value != "" && username.value.length <= 15) {
        userVal;
    }
    if (email.value != "") {
        emailVal;
    }

    if (password.value != "" && password.value.length <= 50) {
        passVal;
    }
    if (username.value == 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "info",
            title: "Type your username",
            color: "#0B6EFD",
            background: "#c3d1e8",
            width: "370px",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return;
    }
    if (email.value == 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "info",
            title: "Type your email",
            color: "#0B6EFD",
            background: "#bdcfeb",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return;
    }
    if (password.value == 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "info",
            title: "Type your password",
            color: "#0B6EFD",
            background: "#bdcfeb ",
            width: "370px",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return;
    }
    else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Your account has been created successfully",
            color: "#4ca305",
            background: "#d9e4d9 ",
            showClass: {
                width: "370px",
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
    }
}

function join() {
    let userObj = {
        username: username.value,
        email: email.value,
        password: password.value,
    };
    db.users.push(userObj)
    localStorage.setItem("db", JSON.stringify(db))
}


document.forms[1].onsubmit = function (e) {
    e.preventDefault()
    let emailVal;
    let passVal;


    if (email.value != "") {
        emailVal;
    }

    if (password.value != "" && password.value.length <= 50) {
        passVal;
    }
}


async function login() {
    let db = JSON.parse(localStorage.getItem("db"));
    let email = emailLogin.value;
    let password = passwordLogin.value;

    if (email.length == 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "error",
            title: "Type your email",
            title: "Invalid password or email",
            color: "#FF0000",
            width: "370px",
            background: "#e3c4c4",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        return;
    }
    // Invalid password or email
    if (passwordLogin.value == 0) {

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            },
            title: "Invalid password or email",
            color: "#0B6EFD",
            background: "#bdcfeb",
            width: "370px",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
        Toast.fire({
            icon: "info",
            title: "Type your password"
        });
        return;

    }

    let check = await db.users.find((user) => {
        return user.email == email && user.password == password
    })
    // Invalid password or email
    if (check == undefined) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            title: "Custom width, padding, Animate.css, color, background. ",
            icon: "error",
            title: "Invalid password or email",
            color: "#FF0000",
            background: "#e3bdbd ",
            width: "370px",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInRight
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
    } else {
        window.location.href = "/index.html"
    }
};