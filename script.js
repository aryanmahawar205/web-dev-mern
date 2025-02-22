function checkLoanApproval() {
    const age = parseInt(document.getElementById('age').value);
    const salary = parseInt(document.getElementById('salary').value);
    const creditScore = parseInt(document.getElementById('creditScore').value);
    let result = '';

    if (age >= 21 && age <= 60 && salary >= 50000) {
        if (creditScore > 700 || salary > 100000) {
            result = 'Loan Approved';
        } else {
            result = 'Loan Rejected due to credit score';
        }
    } else {
        result = 'Loan Rejected due to age or salary';
    }
    document.getElementById('loanResult').innerText = result;
}

function determineGreenLightDuration() {
    const time = document.getElementById('time').value;
    const vehicleCount = parseInt(document.getElementById('vehicleCount').value);
    let duration = 30;

    if ((time >= '07:00' && time <= '10:00') || (time >= '17:00' && time <= '20:00')) {
        duration = 60;
    }
    if (vehicleCount > 50) {
        duration += 20;
    }
    document.getElementById('trafficResult').innerText = `Green Light Duration: ${duration} sec`;
}

function calculateRoomPrice() {
    const month = document.getElementById('month').value.toLowerCase();
    const roomType = document.getElementById('roomType').value.toLowerCase();
    let price = 0;

    if (month === 'june' || month === 'july' || month === 'august' || month === 'december') {
        if (roomType === 'standard') price = 5000;
        else if (roomType === 'deluxe') price = 8000;
        else if (roomType === 'suite') price = 12000;
    } else {
        if (roomType === 'standard') price = 3000;
        else if (roomType === 'deluxe') price = 5000;
        else if (roomType === 'suite') price = 8000;
    }
    document.getElementById('roomPriceResult').innerText = `Room Price: $${price}/day`;
}

function calculateTicketPrice() {
    const age = parseInt(document.getElementById('ageTicket').value);
    const showTime = document.getElementById('showTime').value;
    let price = 200;

    if (age < 12) price = 100;
    else if (age >= 60) price = 120;

    if (showTime < '17:00') price *= 0.5;
    document.getElementById('ticketPriceResult').innerText = `Ticket Price: ₹${price}`;
}

function generatePyramid() {
    const rows = parseInt(document.getElementById('pyramidRows').value);
    let output = '';
    let currentNumber = 1;

    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= i; j++) {
            output += currentNumber + ' ';
            currentNumber++;
        }
        output += '\n';
    }
    document.getElementById('pyramidResult').innerText = output;
}

let totalEarnings = 0;

function addVehicle() {
    const vehicleType = document.getElementById('vehicleType').value.toLowerCase();
    const vipPass = document.getElementById('vipPass').value.toLowerCase();
    let tax = 0;

    if (vipPass === 'no') {
        if (vehicleType === 'car') tax = 150;
        else if (vehicleType === 'truck') tax = 1100;
        else if (vehicleType === 'bike') tax = 130;
    }
    totalEarnings += tax;
}

function calculateTotalEarnings() {
    document.getElementById('totalEarningsResult').innerText = `Total Earnings: ₹${totalEarnings}`;
}

function checkButton() {
    const selectedSeason = document.querySelector('input[name="season"]:checked');
    if (selectedSeason) {
        document.getElementById('disp').innerText = `You selected: ${selectedSeason.value}`;
        document.getElementById('error').innerText = '';
    } else {
        document.getElementById('error').innerText = 'Please select a season';
        document.getElementById('disp').innerText = '';
    }
}

function checkButtonById() {
    const summer = document.getElementById('summer2').checked;
    const winter = document.getElementById('winter2').checked;
    const rainy = document.getElementById('rainy2').checked;
    const autumn = document.getElementById('autumn2').checked;

    if (summer) {
        document.getElementById('disp2').innerText = 'You selected: Summer';
    } else if (winter) {
        document.getElementById('disp2').innerText = 'You selected: Winter';
    } else if (rainy) {
        document.getElementById('disp2').innerText = 'You selected: Rainy';
    } else if (autumn) {
        document.getElementById('disp2').innerText = 'You selected: Autumn';
    } else {
        document.getElementById('error2').innerText = 'Please select a season';
        document.getElementById('disp2').innerText = '';
    }
}