function emailValidation(input) {
    let validvalue="@";
    if (input.match(validvalue)) {
        console.log("hii");
    }
    else {
        console.log("hu")
    }
}

let result = emailValidation("bushra@gmail.com");
console.log(result)
