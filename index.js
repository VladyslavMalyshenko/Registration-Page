const InputName = document.querySelector(".name");
const InputSurname = document.querySelector(".surname");
const InputSex = document.querySelector(".sex");
const InputAge = document.querySelector(".age");
const checkButton = document.querySelector(".check");
const errors = document.querySelector(".errors");

const user = {
    name: 0,
    surname: 0,
    sex: 0,
    age: 0,
}

checkButton.addEventListener("click", () => {
    const li = document.createElement('li');
    li.className = "errorArg"
    errors.innerHTML = '';
    let isValid = true;

    if (InputName.value === "" || InputSurname.value === "" || InputSex.value === "" || InputAge.value === "") {
        li.innerText = "Some fields are empty. Please fill all fields!";
        errors.appendChild(li);
        isValid = false;
    } else if (InputName.value < 1 || InputSurname.value < 1 || InputSex.value < 1 || InputAge.value < 1) {
        li.innerText = "Fill all fields!";
        errors.appendChild(li);
        isValid = false;
    } else if (InputSex.value !== "Female" && InputSex.value !== "Male") {
        li.innerText = "Please type Female or Male into Sex Field!";
        errors.appendChild(li);
        isValid = false;
    } else if (InputAge.value >= 200) {
        li.innerText = "Incorrect age!";
        errors.appendChild(li);
        isValid = false;
    }

    if (isValid) {
        user.name = _.upperFirst(InputName.value);
        user.surname = _.upperFirst(InputSurname.value);
        user.sex = InputSex.value;
        user.age = InputAge.value;

        const userDetails = document.createElement('li');
        userDetails.className = "Value";

        userDetails.innerText = "Name: " + user.name + "\n" +
            "Surname: " + user.surname + "\n" +
            "Sex: " + user.sex + "\n" +
            "Age: " + user.age;

        errors.appendChild(userDetails);
    }
});
