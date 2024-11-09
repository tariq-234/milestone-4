// Get references to the form and display area
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement | null;
    const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement | null;

    // Handle form submission
    if (form) {
        form.addEventListener('submit', (event: Event) => {
            event.preventDefault(); // prevent page reload 

            // Collect values
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const education = (document.getElementById('education') as HTMLInputElement).value;
            const experience = (document.getElementById('experience') as HTMLInputElement).value;
            const skills = (document.getElementById('skills') as HTMLInputElement).value;

            // Generate the resume content dynamically
            const resumeHtml = `
                <h2><b>Editable Resume</b></h2>
                <h3><b>Personal Information</b></h3>
                <p><b>Name:</b><span contenteditable="true">${name}</span></p>
                <p><b>Email:</b><span contenteditable="true">${email}</span></p>
                <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

                <h3><b>Education</b></h3>
                <p contenteditable="true">${education}</p>

                <h3><b>Experience</b></h3>
                <p contenteditable="true">${experience}</p>

                <h3><b>Skills</b></h3>
                <p contenteditable="true">${skills}</p>
            `;

            // Display the generated resume 
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHtml;
            }
        });
    } else {
        console.error("The form element is missing");
    }
});