const button = document.getElementById("callbacks");
const div = document.getElementById("dataDiv");


const setText = (text) => {
    div.textContent = text
}

const checkAuth = cb => {
    setText("Checking Auth...")
    setTimeout(() => {
        cb(true);
    }, 2000);
};
// const studentsArr = students.forEach((eachName, index) => {
//     return(index + 1 + "." + eachName);
// });

const fetchStudent = cb => {
    setText("Fetching Student...")
    setTimeout(() => {
        cb({name: "Martina"});
    }, 2000);
};


button.addEventListener("click", () => {
    checkAuth(auth => {
        if(auth) {
            fetchStudent(students => {
                setText(students.name)
            });
        }
    });
});