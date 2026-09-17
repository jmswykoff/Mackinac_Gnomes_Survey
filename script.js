
// Send survey data to Google Sheets
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwRi_78DOPWFygC7vY0cxvWRnQnyJaH8uYneLihgbZFjlk1S_1d-sF0v0hPGKOD_4cg/exec";

document.getElementById("mgSurvey").addEventListener("submit", function(e) 
{
    e.preventDefault();

    const formData = 
    {
        timestamp: new Date().toISOString(),
        Q1: this.Q1.value,
        Q2: this.Q2.value,
        Q3: this.Q3.value,
        Q4: this.Q4.value,
        Q5: this.Q5.value,
        Q6: this.Q6.value,
        Q7: this.Q7.value,
        Q8: this.Q8.value,
        Q9: this.Q9.value,
        Q10: this.Q10.value,
    };


    fetch(WEB_APP_URL, 
        {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(data => 
    {
        alert("Thank you for your input!");
        this.reset();
    })
    .catch(err => 
    {
        alert("Error submitting survey.");
        console.error(err);
    });
});