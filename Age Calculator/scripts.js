document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');

    calculateBtn.addEventListener('click', () => {
        const dobInput = document.getElementById('dob').value;
        const dob = new Date(dobInput);
        if (!isNaN(dob.getTime())) {
            const { years, months, days } = calculateAge(dob);
            result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
        } else {
            result.textContent = 'Please enter a valid date of birth.';
        }
    });

    function calculateAge(dob) {
        const now = new Date();
        let years = now.getFullYear() - dob.getFullYear();
        let months = now.getMonth() - dob.getMonth();
        let days = now.getDate() - dob.getDate();

        if (days < 0) {
            months--;
            days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }
});