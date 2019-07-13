import IMask from "imask";

const firstNameMask = IMask(
    document.getElementById("first-name"), {
        mask: /^[A-Za-zА-Яа-я]+$/
    }
);

const lastNameMask = IMask(
    document.getElementById("last-name"), {
        mask: /^[A-Za-zА-Яа-я]+$/
    }
);

const phoneMask = IMask(
    document.getElementById("phone"), {
        mask: "+{7} (000) 000-00-00"
    }
);