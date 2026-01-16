// --- 1. DATASET BUKU
const databaseBuku = [
    {
        title: "Laskar Pelangi",
        author: "Andrea Hirata",
        description: "Kisah perjuangan anak-anak Belitong mengejar mimpi.",
        cover: "https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg",
        link: "#"
    },
    {
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Toer",
        description: "Roman sejarah pergerakan nasional di era kolonial Belanda.",
        cover: "https://upload.wikimedia.org/wikipedia/id/4/44/Bumi_Manusia.jpg",
        link: "#"
    },
    {
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        description: "Penjelasan filsafat Stoisisme untuk mental yang tangguh.",
        cover: "https://cdn.gramedia.com/uploads/items/9786024125189_Filosofi-Teras.jpg",
        link: "#"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        description: "Perubahan kecil yang memberikan hasil luar biasa dalam hidup.",
        cover: "https://upload.wikimedia.org/wikipedia/en/a/a3/Atomic_Habits_by_James_Clear.jpg",
        link: "#"
    },
    {
        title: "Cantik Itu Luka",
        author: "Eka Kurniawan",
        description: "Novel realisme magis tentang sejarah dan hal-hal gaib.",
        cover: "https://via.placeholder.com/128x192?text=Cantik+Luka",
        link: "#"
    },
    { 
        title: "Laut Bercerita", 
        author: "Leila S. Chudori", 
        description: "Kisah kelam persahabatan dan aktivis mahasiswa di era reformasi.", 
        cover: "https://via.placeholder.com/128x192?text=Laut+Bercerita", 
        link: "#"
    },
    { 
        title: "Hujan", 
        author: "Tere Liye", 
        description: "Novel tentang persahabatan, cinta, dan perpisahan di masa depan.", 
        cover: "https://via.placeholder.com/128x192?text=Hujan", 
        link: "#" 
    },
    { 
        title: "Dilan 1990", 
        author: "Pidi Baiq", 
        description: "Kisah romansa remaja SMA di Bandung tahun 90-an.", 
        cover: "https://via.placeholder.com/128x192?text=Dilan+1990", 
        link: "#" 
    },
    { 
        title: "Aroma Karsa", 
        author: "Dee Lestari", 
        description: "Pencarian tanaman mitologis yang melibatkan indra penciuman tajam.", 
        cover: "https://via.placeholder.com/128x192?text=Aroma+Karsa", 
        link: "#" 
    },
    { 
        title: "Gadis Kretek", 
        author: "Ratih Kumala", 
        description: "Sejarah industri kretek Indonesia berbalut kisah cinta.", 
        cover: "https://via.placeholder.com/128x192?text=Gadis+Kretek", 
        link: "#" 
    },
    { 
        title: "Ronggeng Dukuh Paruk", 
        author: "Ahmad Tohari", 
        description: "Kisah penari ronggeng di tengah gejolak sosial desa miskin.", 
        cover: "https://via.placeholder.com/128x192?text=Ronggeng", 
        link: "#" 
    },
    { 
        title: "Negeri 5 Menara", 
        author: "A. Fuadi", 
        description: "Perjuangan santri mengejar mimpi dengan mantra Man Jadda Wajada.", 
        cover: "https://via.placeholder.com/128x192?text=Negeri+5+Menara", 
        link: "#" 
    },
    { 
        title: "Perahu Kertas", 
        author: "Dee Lestari",
        description: "Kisah pasang surut hubungan dua anak muda yang unik.", 
        cover: "https://via.placeholder.com/128x192?text=Perahu+Kertas", 
        link: "#" 
    },
    { 
        title: "Supernova: Ksatria, Puteri", 
        author: "Dee Lestari", 
        description: "Novel fiksi ilmiah berbalut filsafat yang mengguncang sastra.", 
        cover: "https://via.placeholder.com/128x192?text=Supernova", 
        link: "#" 
    },
    { 
        title: "Tentang Kamu", 
        author: "Tere Liye", 
        description: "Perjalanan menelusuri jejak kehidupan seorang wanita misterius.", 
        cover: "https://via.placeholder.com/128x192?text=Tentang+Kamu", 
        link: "#" 
    },
    { 
        title: "Bumi", 
        author: "Tere Liye", 
        description: "Petualangan Raib di dunia paralel klan Bulan.", 
        cover: "https://via.placeholder.com/128x192?text=Bumi+TL", 
        link: "#" 
    },
    { 
        title: "Pulang", 
        author: "Leila S. Chudori", 
        description: "Kisah eksil politik Indonesia yang ingin kembali ke tanah air.", 
        cover: "https://via.placeholder.com/128x192?text=Pulang", 
        link: "#" 
    },
    { 
        title: "Saman", 
        author: "Ayu Utami", 
        description: "Novel pendobrak tabu tentang seksualitas dan agama.", 
        cover: "https://via.placeholder.com/128x192?text=Saman", 
        link: "#" 
    },
    { 
        title: "Orang-Orang Biasa", 
        author: "Andrea Hirata", 
        description: "Kisah jenaka tentang rencana perampokan demi pendidikan.", 
        cover: "https://via.placeholder.com/128x192?text=Orang+Biasa", 
        link: "#" 
    },
    { 
        title: "Sang Pemimpi", 
        author: "Andrea Hirata", 
        description: "Kelanjutan Laskar Pelangi, tentang mimpi sekolah ke Sorbonne.", 
        cover: "https://via.placeholder.com/128x192?text=Sang+Pemimpi", 
        link: "#" 
    },
    { 
        title: "Psychology of Money", 
        author: "Morgan Housel", 
        description: "Pelajaran abadi mengenai kekayaan, ketamakan, dan kebahagiaan.", 
        cover: "https://via.placeholder.com/128x192?text=Psychology+Money", 
        link: "#" 
    },
    { 
        title: "Rich Dad Poor Dad", 
        author: "Robert Kiyosaki", 
        description: "Apa yang diajarkan orang kaya pada anak mereka tentang uang.", 
        cover: "https://via.placeholder.com/128x192?text=Rich+Dad", 
        link: "#" 
    },
    { 
        title: "Start with Why", 
        author: "Simon Sinek", 
        description: "Bagaimana pemimpin besar menginspirasi orang untuk bertindak.", 
        cover: "https://via.placeholder.com/128x192?text=Start+Why", 
        link: "#" 
    },
    { 
        title: "Thinking, Fast and Slow", 
        author: "Daniel Kahneman", 
        description: "Sistem berpikir manusia: cepat intuitif vs lambat rasional.", 
        cover: "https://via.placeholder.com/128x192?text=Thinking", 
        link: "#" 
    },
    { 
        title: "Grit", 
        author: "Angela Duckworth", 
        description: "Kekuatan passion dan kegigihan dalam meraih kesuksesan.", 
        cover: "https://via.placeholder.com/128x192?text=Grit", 
        link: "#" 
    },
    { 
        title: "Sebuah Seni Bersikap Bodo Amat", 
        author: "Mark Manson", 
        description: "Pendekatan yang waras demi menjalani hidup yang baik.", 
        cover: "https://via.placeholder.com/128x192?text=Bodo+Amat", 
        link: "#" 
    },
    { 
        title: "Berani Tidak Disukai", 
        author: "Ichiro Kishimi", 
        description: "Filsafat Adlerian untuk kebebasan dan kebahagiaan sejati.", 
        cover: "https://via.placeholder.com/128x192?text=Berani", 
        link: "#" 
    },
    { 
        title: "Bicara Itu Ada Seninya", 
        author: "Oh Su Hyang", 
        description: "Rahasia komunikasi yang efektif dan memikat.", 
        cover: "https://via.placeholder.com/128x192?text=Bicara+Seni", 
        link: "#" 
    },
    { 
        title: "Segala-galanya Ambyar", 
        author: "Mark Manson", 
        description: "Buku tentang harapan di dunia yang kacau.", 
        cover: "https://via.placeholder.com/128x192?text=Ambyar", 
        link: "#" 
    },
    { 
        title: "Mindset", 
        author: "Carol S. Dweck", 
        description: "Perbedaan Fixed Mindset dan Growth Mindset.", 
        cover: "https://via.placeholder.com/128x192?text=Mindset", 
        link: "#" 
    },
    { 
        title: "Harry Potter & Batu Bertuah", 
        author: "J.K. Rowling", 
        description: "Awal mula petualangan penyihir muda di Hogwarts.", 
        cover: "https://via.placeholder.com/128x192?text=Harry+Potter", 
        link: "#" 
    },
    { 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        description: "Perjalanan seorang gembala mencari harta karun impiannya.", 
        cover: "https://via.placeholder.com/128x192?text=Alchemist", 
        link: "#" 
    },
    { 
        title: "Sherlock Holmes", 
        author: "Arthur Conan Doyle", 
        description: "Kumpulan kasus detektif legendaris dari Baker Street.", 
        cover: "https://via.placeholder.com/128x192?text=Sherlock", 
        link: "#" 
    },

    { 
        title: "1984", 
        author: "George Orwell", 
        description: "Novel distopia tentang pengawasan totaliter Big Brother.", 
        cover: "https://via.placeholder.com/128x192?text=1984", 
        link: "#" 
    },
    { 
        title: "The Little Prince", 
        author: "Antoine de Saint-Exupéry", 
        description: "Kisah pangeran kecil yang penuh filosofi kehidupan.", 
        cover: "https://via.placeholder.com/128x192?text=Little+Prince", 
        link: "#" 
    },
    { 
        title: "Norwegian Wood", 
        author: "Haruki Murakami", 
        description: "Kisah cinta yang melankolis dan penuh nostalgia.", 
        cover: "https://via.placeholder.com/128x192?text=Norwegian", 
        link: "#" 
    },
    { 
        title: "Crazy Rich Asians", 
        author: "Kevin Kwan", 
        description: "Intrik keluarga super kaya di Singapura.", 
        cover: "https://via.placeholder.com/128x192?text=Crazy+Rich", 
        link: "#" 
    },
    { 
        title: "Da Vinci Code", 
        author: "Dan Brown", 
        description: "Misteri kode rahasia yang mengguncang sejarah agama.", 
        cover: "https://via.placeholder.com/128x192?text=Da+Vinci", 
        link: "#" 
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        description: "Drama hukum tentang rasisme di Amerika Selatan.", 
        cover: "https://via.placeholder.com/128x192?text=Mockingbird", 
        link: "#" 
    },
    { 
        title: "Lord of the Rings", 
        author: "J.R.R. Tolkien", 
        description: "Perjalanan epik menghancurkan cincin kekuasaan.", 
        cover: "https://via.placeholder.com/128x192?text=LOTR", 
        link: "#"
    },
    { 
        title: "Clean Code", 
        author: "Robert C. Martin", 
        description: "Panduan menulis kode yang rapi dan mudah dipelihara.", 
        cover: "https://via.placeholder.com/128x192?text=Clean+Code", 
        link: "#" 
    },
    { 
        title: "Eloquent JavaScript", 
        author: "Marijn Haverbeke", 
        description: "Buku wajib untuk mendalami bahasa pemrograman JavaScript.", 
        cover: "https://via.placeholder.com/128x192?text=Eloquent+JS", 
        link: "#" 
    },
    { 
        title: "You Don't Know JS", 
        author: "Kyle Simpson", 
        description: "Mengupas tuntas mekanisme internal JavaScript.", 
        cover: "https://via.placeholder.com/128x192?text=YDKJS", 
        link: "#" 
    },
    { 
        title: "Pragmatic Programmer", 
        author: "Andrew Hunt", 
        description: "Tips menjadi programmer yang efisien dan profesional.", 
        cover: "https://via.placeholder.com/128x192?text=Pragmatic", 
        link: "#" 
    },
    { 
        title: "Introduction to Algorithms", 
        author: "Thomas H. Cormen", 
        description: "Kitab suci algoritma dan struktur data.", 
        cover: "https://via.placeholder.com/128x192?text=Algorithms", 
        link: "#" 
    },
    { 
        title: "Design Patterns", 
        author: "Erich Gamma", 
        description: "Solusi umum untuk masalah desain perangkat lunak.", 
        cover: "https://via.placeholder.com/128x192?text=Design+Patterns", 
        link: "#" 
    },
    { 
        title: "Don't Make Me Think", 
        author: "Steve Krug", 
        description: "Prinsip dasar desain UI/UX yang intuitif.", 
        cover: "https://via.placeholder.com/128x192?text=UI+UX", 
        link: "#" 
    },
    { 
        title: "Sapiens", 
        author: "Yuval Noah Harari", 
        description: "Riwayat singkat umat manusia dari zaman batu.", 
        cover: "https://via.placeholder.com/128x192?text=Sapiens", 
        link: "#" 
    },
    { 
        title: "Homo Deus", 
        author: "Yuval Noah Harari", 
        description: "Masa depan umat manusia dan teknologi.", 
        cover: "https://via.placeholder.com/128x192?text=Homo+Deus", 
        link: "#" 
    },
    { 
        title: "Cosmos", 
        author: "Carl Sagan", 
        description: "Menjelajahi alam semesta dan tempat kita di dalamnya.", 
        cover: "https://via.placeholder.com/128x192?text=Cosmos", 
        link: "#" 
    },
    { 
        title: "Madilog", 
        author: "Tan Malaka", 
        description: "Materialisme, Dialektika, dan Logika pemikiran Indonesia.", 
        cover: "https://via.placeholder.com/128x192?text=Madilog", 
        link: "#" 
    },
    { 
        title: "Habibie & Ainun", 
        author: "B.J. Habibie", 
        description: "Kisah cinta abadi sang teknokrat dan ibu negara.", 
        cover: "https://via.placeholder.com/128x192?text=Habibie", 
        link: "#" 
    },
    { 
        title: "Soekarno", 
        author: "Cindy Adams", 
        description: "Otobiografi presiden pertama Indonesia penyambung lidah rakyat.", 
        cover: "https://via.placeholder.com/128x192?text=Soekarno", 
        link: "#" 
    },
    { 
        title: "Panggil Aku Kartini Saja", 
        author: "Pramoedya A. Toer", 
        description: "Biografi intelektual R.A. Kartini.", 
        cover: "https://via.placeholder.com/128x192?text=Kartini", 
        link: "#" 
    },
    { 
        title: "Tan Malaka: Bapak Republik", 
        author: "Harry A. Poeze", 
        description: "Kisah hidup misterius bapak republik yang terlupakan.", 
        cover: "https://via.placeholder.com/128x192?text=Tan+Malaka", 
        link: "#"
    },
    { 
        title: "Max Havelaar", 
        author: "Multatuli", 
        description: "Kritik tajam terhadap sistem tanam paksa kolonial.", 
        cover: "https://via.placeholder.com/128x192?text=Max+Havelaar", 
        link: "#" 
    },
    { 
        title: "Salah Asuhan", 
        author: "Abdoel Moeis", 
        description: "Konflik budaya timur dan barat di masa kolonial.", 
        cover: "https://via.placeholder.com/128x192?text=Salah+Asuhan", 
        link: "#" 
    },
    { 
        title: "Sitti Nurbaya", 
        author: "Marah Rusli", 
        description: "Kisah klasik kasih tak sampai karena adat.", 
        cover: "https://via.placeholder.com/128x192?text=Sitti+Nurbaya", 
        link: "#" 
    },
    { 
        title: "Dunia Sophie", 
        author: "Jostein Gaarder", 
        description: "Novel pengantar sejarah filsafat yang ringan.", 
        cover: "https://via.placeholder.com/128x192?text=Dunia+Sophie", 
        link: "#" 
    }
];
// --- 2. FUNGSI BUKA DETAIL GOOGLE BOOKS ---
async function bukaDetailGoogle(judul, penulis) {
    // Tampilkan status loading sederhana (opsional)
    const btnText = event.target.innerText;
    event.target.innerText = "Memuat...";
    
    try {
        // Gabungkan judul dan penulis untuk query
        const query = `${judul} ${penulis}`;
        // Encode agar karakter spasi/khusus aman untuk URL
        const safeQuery = encodeURIComponent(query);
        
        // Fetch ke Google Books API (Public, tidak wajib API Key untuk baca dasar)
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${safeQuery}`);
        const data = await response.json();

        // Cek apakah Google menemukan buku tersebut
        if (data.totalItems > 0) {
            // Ambil link info dari hasil pencarian pertama (paling relevan)
            const linkGoogle = data.items[0].volumeInfo.infoLink;
            
            // Buka di tab baru
            window.open(linkGoogle, '_blank');
        } else {
            alert("Maaf, detail buku ini tidak ditemukan di Google Books.");
        }
    } catch (error) {
        console.error("Error fetching Google Books:", error);
        alert("Terjadi kesalahan koneksi ke Google Books.");
    } finally {
        // Kembalikan teks tombol
        event.target.innerText = btnText;
    }
}

// --- 3. FUNGSI PENCARIAN BUKU LOKAL DENGAN HIGHLIGHTING ---
function searchLocalBooks() {
    const inputVal = document.getElementById('searchInput').value;
    const container = document.getElementById('resultList');
    const statusMsg = document.getElementById('statusMsg');

    if (!inputVal) {
        alert("Silakan ketik kata kunci pencarian!");
        return;
    }

    container.innerHTML = "";
    statusMsg.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sedang mencari...';

    setTimeout(() => {
        const keyword = inputVal.toLowerCase();
        const hasil = databaseBuku.filter(buku => {
            return buku.title.toLowerCase().includes(keyword) ||
                   buku.author.toLowerCase().includes(keyword) ||
                   buku.description.toLowerCase().includes(keyword);
        });

        if (hasil.length === 0) {
            statusMsg.innerText = "Buku tidak ditemukan di database kami.";
            return;
        }

        statusMsg.innerText = `Ditemukan ${hasil.length} buku.`;

        hasil.forEach(item => {
            const titleHTML = highlightText(item.title, inputVal);
            const authorHTML = highlightText(item.author, inputVal);
            const descHTML = highlightText(item.description, inputVal);

            const card = document.createElement('div');
            card.className = "book-card";
            const safeTitle = item.title.replace(/'/g, "\\'");
            const safeAuthor = item.author.replace(/'/g, "\\'");

            card.innerHTML = `
                <img src="${item.cover}" alt="Cover" class="book-cover">
                <div class="book-info">
                    <h3 class="book-title">${titleHTML}</h3>
                    <div class="book-author"><i class="fa-solid fa-pen-nib"></i> ${authorHTML}</div>
                    <p class="book-desc">${descHTML}</p>
                    
                    <button 
                        class="btn-preview" 
                        onclick="bukaDetailGoogle('${safeTitle}', '${safeAuthor}')">
                        Lihat Detail Buku
                    </button>
                    
                </div>
            `;
            container.appendChild(card);
        });

    }, 300);
}
function highlightText(text, keyword) {
    if (!text || !keyword) return text;
    const regex = new RegExp(`(${keyword})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}