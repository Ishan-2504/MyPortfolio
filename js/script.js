//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll section
// Sticky header
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for Animation on scroll
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer onscroll 
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate',this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// const form = document.querySelector("form");
// // const fullName = document.getElementById;

// function sendEmail() {
//     Email.send({
//         Host: "smtp.elasticemail.com",
//         Port: 2525, // Or 587 or 465, depending on your setup
//         Username: "ishanmangotra25@gmail.com",
//         Password: "0FB3D92651EE041C28925015E94A40708E37", // Ensure this is your SMTP API key, not your account password
//         To: 'ishanmangotra25@gmail.com',
//         From: document.getElementById("email").value, // Sender's email from the form
//         Subject: document.getElementById("subject").value, // Subject from the form
//         Body: `
//             Name: ${document.getElementById("name").value} <br>
//             Email: ${document.getElementById("email").value} <br>
//             Phone: ${document.getElementById("phone").value} <br>
//             Message: ${document.getElementById("message").value}
//         `
//     }).then(
//         message => {
//             alert("Message sent successfully: " + message);
//             form.reset(); // Reset the form after successful submission
//         }
//     ).catch(error => {
//         alert("Failed to send email: " + error);
//     });
// }
// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     sendEmail();
// });


