// Katılımcılar
let participants = [];

// Kullanıcı Girdileri
const form = document.getElementsByTagName("form")[0];

const successAlert = document.getElementById("alert-box");
successAlert.style.display = "none";

let submitButton = document.getElementById("submitbtn");
submitButton.addEventListener("click", AddParticipant);


function Participant(name, surname, email, phone, dateofbirth, gender, educationstatus, department) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.dateofbirth = dateofbirth;
    this.gender = gender;
    this.educationstatus = educationstatus;
    this.department = department;
}


function AddParticipant() {

    console.clear();

    if (form.checkValidity()) {
        const participant = new Participant(
            form[0].value,
            form[1].value,
            form[2].value,
            form[3].value,
            form[4].value,
            form[5].value,
            form[6].value,
            form[7].value
        );

        successAlert.style.display = "block";

        setTimeout(() => {
            successAlert.style.display = "none";
        }, 1000);

        participants.push(participant);

        console.log(participants);
    }


}