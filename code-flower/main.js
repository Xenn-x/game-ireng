onload = () =>{
        document.body.classList.remove("container");
};
let backBtn = document.getElementById("BackBtn");
let body = document.body;

// Fungsi untuk delay
const jeda = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function back() {
    // Kita buat variabel penanda warna saat ini
    let isBlack = false; 

    while (true) {
        if (isBlack) {
            body.style.backgroundColor = "white";
            console.log("white");
            isBlack = false; // Update penanda ke putih
        } else {
            body.style.backgroundColor = "black";
            console.log("black");
            isBlack = true; // Update penanda ke hitam
        }
        
        // Jeda 1 detik
        await jeda(10);
    }
}

backBtn.addEventListener("click", back);