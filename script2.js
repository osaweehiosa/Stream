// 1. Dynamic Greeting
const user = "User"; 
document.getElementById('greeting').innerText = `Hello, ${user} 👋`;
document.getElementById('profileInitials').innerText = user.charAt(0);

// 2. Withdrawal Ticker
const feeds = [
    "Dami just withdrew ₦40,000",
    "Ife earned ₦5,000 via Referral",
    "Tolu processed ₦150,000 TikTok Salary",
    "Ngozi withdrew ₦22,000 to Moniepoint",
    "Solomon just withdrew ₦40,000",
    "Isaac earned ₦5,000 via Referral",
    "Efe processed ₦150,000 TikTok Salary",
    "Nihi withdrew ₦22,000 to Moniepoint",
    "Daniel just withdrew ₦40,000",
    "Isse earned ₦5,000 via Referral",
    "Tim processed ₦150,000 TikTok Salary",
    "Noble withdrew ₦22,000 to Moniepoint",
    "Damien just withdrew ₦40,000",
    "Timotie earned ₦5,000 via Referral",
    "Esosa processed ₦150,000 TikTok Salary",
    "Naza withdrew ₦22,000 to Moniepoint",
    "Dill just withdrew ₦40,000",
    "Zane earned ₦5,000 via Referral",
    "Tuesday processed ₦150,000 TikTok Salary",
    "Nnena withdrew ₦22,000 to Moniepoint",
    "Sandra just withdrew ₦40,000",
    "Jason earned ₦5,000 via Referral",
    "Jhon processed ₦150,000 TikTok Salary",
    "Chidi withdrew ₦22,000 to Moniepoint"
];
document.getElementById('withdrawalTicker').innerHTML = feeds.join(' &nbsp;&nbsp;&nbsp;&nbsp; • &nbsp;&nbsp;&nbsp;&nbsp; ');

// 3. Popup Logic
function showPopup() {
    document.getElementById('activationModal').style.display = "flex";
}

function closePopup() {
    document.getElementById('activationModal').style.display = "none";
}

function goToActivation() {
    // This sends the user to the next page
    window.location.href = "tran.html.html";
}

// 4. Random Notifications
const names = ["Abiola", "Kemi", "Chidi", "Sola", "Uche", "Tunde", "Emeka", "Bola", "Femi", "Issac", "Ngozi", "Esosa", "Rita", "Lola", "Yemi", "Brittney", "Ruth", "David", "Sam", "Monday", "Prince"];
function triggerNote() {
    const box = document.getElementById('notification-container');
    const n = names[Math.floor(Math.random() * names.length)];
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerText = `${n} just registered to stream!`;
    box.appendChild(t);
    setTimeout(() => { t.remove(); }, 3500);
}
setInterval(triggerNote, 6000);

// Close modal when clicking background
window.onclick = (e) => {
    if(e.target == document.getElementById('activationModal')) closePopup();
}