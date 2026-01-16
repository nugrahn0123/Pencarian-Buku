// --- 1. DATASET BUKU
const databaseBuku = [
    // --- 10 BUKU PERTAMA (Updated Covers) ---
    {
        title: "Laskar Pelangi", //done
        author: "Andrea Hirata",
        description: "Kisah perjuangan anak-anak Belitong mengejar mimpi.",
        cover: "https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg",
        link: "#"
    },
    {
        title: "Bumi Manusia",//done
        author: "Pramoedya Ananta Toer",
        description: "Roman sejarah pergerakan nasional di era kolonial Belanda.",
        cover: "https://books.google.com/books/content?id=9DA5DwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1",
        link: "#"
    },
    {
        title: "Filosofi Teras",
        author: "Henry Manampiring",
        description: "Penjelasan filsafat Stoisisme untuk mental yang tangguh.",
        cover: "https://books.google.com/books/content?id=hPIrEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1",
        link: "#"
    },
    {
        title: "Atomic Habits",
        author: "James Clear",
        description: "Perubahan kecil yang memberikan hasil luar biasa dalam hidup.",
        cover: "https://books.google.com/books/content?id&id=1bm0DwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1",
        link: "#"
    },
    {
        title: "Cantik Itu Luka",
        author: "Eka Kurniawan",
        description: "Novel realisme magis tentang sejarah dan hal-hal gaib.",
        cover: "https://books.google.com/books/content?id=YLo8DwAAQBAJ&printsec=copyright&hl=id&redir_esc=y&printsec=frontcover&img=1&zoom=1",
        link: "#"
    },
    { 
        title: "Laut Bercerita", //done
        author: "Leila S. Chudori", 
        description: "Kisah kelam persahabatan dan aktivis mahasiswa di era reformasi.", 
        cover: "https://cdn.gramedia.com/uploads/items/9786024246945_Laut-Bercerita.jpg", 
        link: "#"
    },
    { 
        title: "Hujan", //done
        author: "Tere Liye", 
        description: "Novel tentang persahabatan, cinta, dan perpisahan di masa depan.", 
        cover: "https://cdn.gramedia.com/uploads/items/9786020324784_Hujan-Cover-Baru-2018.jpg", 
        link: "#" 
    },
    { 
        title: "Dilan 1990", 
        author: "Pidi Baiq", 
        description: "Kisah romansa remaja SMA di Bandung tahun 90-an.", 
        cover: "https://books.google.com/books/content?id=U_-BBAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Aroma Karsa", 
        author: "Dee Lestari", 
        description: "Pencarian tanaman mitologis yang melibatkan indra penciuman tajam.", 
        cover: "https://books.google.com/books/content?id=2KTKtwEACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Gadis Kretek", //sampai sini
        author: "Ratih Kumala", 
        description: "Sejarah industri kretek Indonesia berbalut kisah cinta.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    // --- BUKU 11 - 20 (Updated Covers) ---
    { 
        title: "Ronggeng Dukuh Paruk", 
        author: "Ahmad Tohari", 
        description: "Kisah penari ronggeng di tengah gejolak sosial desa miskin.", 
        cover: "https://books.google.com/books/content?id=jGLrDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Negeri 5 Menara", 
        author: "A. Fuadi", 
        description: "Perjuangan santri mengejar mimpi dengan mantra Man Jadda Wajada.", 
        cover: "https://books.google.com/books/content?id=E-I8DwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Perahu Kertas", 
        author: "Dee Lestari",
        description: "Kisah pasang surut hubungan dua anak muda yang unik.", 
        cover: "https://books.google.com/books/content?id=kiqSCwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Supernova: Ksatria, Puteri...", 
        author: "Dee Lestari", 
        description: "Novel fiksi ilmiah berbalut filsafat yang mengguncang sastra.", 
        cover: "https://books.google.com/books/content?id=Wt2OCwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Tentang Kamu", //done
        author: "Tere Liye", 
        description: "Perjalanan menelusuri jejak kehidupan seorang wanita misterius.", 
        cover: "https://books.google.com/books/content?id=9DA5DwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1",
        link: "#" 
    },
    { 
        title: "Bumi", 
        author: "Tere Liye", 
        description: "Petualangan Raib di dunia paralel klan Bulan.", 
        cover: "https://books.google.com/books/content?id=PihyRWMB31YC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Pulang", 
        author: "Leila S. Chudori", 
        description: "Kisah eksil politik Indonesia yang ingin kembali ke tanah air.", 
        cover: "https://books.google.com/books/content?id=OKFOEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Saman", 
        author: "Ayu Utami", 
        description: "Novel pendobrak tabu tentang seksualitas dan agama.", 
        cover: "https://books.google.com/books/content?id=NLQ8DwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Orang-Orang Biasa", 
        author: "Andrea Hirata", 
        description: "Kisah jenaka tentang rencana perampokan demi pendidikan.", 
        cover: "https://books.google.com/books/content?id=x24nEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Sang Pemimpi", //done
        author: "Andrea Hirata", 
        description: "Kelanjutan Laskar Pelangi, tentang mimpi sekolah ke Sorbonne.", 
        cover: "https://books.google.com/books/content?id=FQ_xml4y71EC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
   // --- BUKU 21 - 30 (Updated Covers) ---
    { 
        title: "Psychology of Money", 
        author: "Morgan Housel", 
        description: "Pelajaran abadi mengenai kekayaan, ketamakan, dan kebahagiaan.", 
        cover: "https://books.google.com/books/content?id=TnrrDwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Rich Dad Poor Dad", 
        author: "Robert Kiyosaki", 
        description: "Apa yang diajarkan orang kaya pada anak mereka tentang uang.", 
        cover: "https://books.google.com/books/content?id=IiI6EAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Start with Why", 
        author: "Simon Sinek", 
        description: "Bagaimana pemimpin besar menginspirasi orang untuk bertindak.", 
        cover: "https://books.google.com/books/content?id=U46GEQAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Thinking, Fast and Slow", 
        author: "Daniel Kahneman", 
        description: "Sistem berpikir manusia: cepat intuitif vs lambat rasional.", 
        cover: "https://books.google.com/books/content?id=TYToDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Grit", 
        author: "Angela Duckworth", 
        description: "Kekuatan passion dan kegigihan dalam meraih kesuksesan.", 
        cover: "https://books.google.com/books/content?id=pOVcEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Sebuah Seni Bersikap Bodo Amat", 
        author: "Mark Manson", 
        description: "Pendekatan yang waras demi menjalani hidup yang baik.", 
        cover: "https://books.google.com/books/content?id=qJzuzwEACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Berani Tidak Disukai", 
        author: "Ichiro Kishimi", 
        description: "Filsafat Adlerian untuk kebebasan dan kebahagiaan sejati.", 
        cover: "https://books.google.com/books/content?id=GV68DwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Bicara Itu Ada Seninya", 
        author: "Oh Su Hyang", 
        description: "Rahasia komunikasi yang efektif dan memikat.", 
        cover: "https://books.google.com/books/content?id=7VkjEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Segala-galanya Ambyar", 
        author: "Mark Manson", 
        description: "Buku tentang harapan di dunia yang kacau.", 
        cover: "https://books.google.com/books/content?id=PIzuzwEACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Mindset", 
        author: "Carol S. Dweck", 
        description: "Perbedaan Fixed Mindset dan Growth Mindset.", 
        cover: "https://books.google.com/books/content?id=fdjqz0TPL2wC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
   // --- BUKU 31 - 40 (Updated Covers) ---
    { 
        title: "Harry Potter & Batu Bertuah", 
        author: "J.K. Rowling", 
        description: "Awal mula petualangan penyihir muda di Hogwarts.", 
        cover: "https://books.google.com/books/content?id=iQmPNDIAskUC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        description: "Perjalanan seorang gembala mencari harta karun impiannya.", 
        cover: "https://books.google.com/books/content?id=H4tI9nzXkQ0C&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Sherlock Holmes", 
        author: "Arthur Conan Doyle", 
        description: "Kumpulan kasus detektif legendaris dari Baker Street.", 
        cover: "https://books.google.com/books/content?id=8kdOEAAAQBAJ&printsec=frontcover&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        description: "Novel distopia tentang pengawasan totaliter Big Brother.", 
        cover: "https://books.google.com/books/content?id=JT_JDAAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "The Little Prince", 
        author: "Antoine de Saint-Exupéry", 
        description: "Kisah pangeran kecil yang penuh filosofi kehidupan.", 
        cover: "https://books.google.com/books/content?id=Zs-EDwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Norwegian Wood", 
        author: "Haruki Murakami", 
        description: "Kisah cinta yang melankolis dan penuh nostalgia.", 
        cover: "https://books.google.com/books/content?id=SqjYVYDx1NoC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Crazy Rich Asians", 
        author: "Kevin Kwan", 
        description: "Intrik keluarga super kaya di Singapura.", 
        cover: "https://books.google.com/books/content?id=ZVNwDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "The Da Vinci Code", 
        author: "Dan Brown", 
        description: "Misteri kode rahasia yang mengguncang sejarah agama.", 
        cover: "https://books.google.com/books/content?id=VxVr0lf1raQC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        description: "Drama hukum tentang rasisme di Amerika Selatan.", 
        cover: "https://books.google.com/books/content?id=_LyTCgAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "The Lord of the Rings", 
        author: "J.R.R. Tolkien", 
        description: "Perjalanan epik menghancurkan cincin kekuasaan.", 
        cover: "https://books.google.com/books/content?id=7MQ8DwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#"
    },
   // --- BUKU 41 - 50 (Updated Covers) ---
    { 
        title: "Clean Code", //done
        author: "Robert C. Martin", 
        description: "Panduan menulis kode yang rapi dan mudah dipelihara.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Eloquent JavaScript", //done
        author: "Marijn Haverbeke", 
        description: "Buku wajib untuk mendalami bahasa pemrograman JavaScript.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "You Don't Know JS", //done
        author: "Kyle Simpson", 
        description: "Mengupas tuntas mekanisme internal JavaScript.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "The Pragmatic Programmer", //done
        author: "Andrew Hunt & David Thomas", 
        description: "Tips menjadi programmer yang efisien dan profesional.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Introduction to Algorithms", //done
        author: "Thomas H. Cormen", 
        description: "Kitab suci algoritma dan struktur data.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Design Patterns", //done
        author: "Erich Gamma", 
        description: "Solusi umum untuk masalah desain perangkat lunak.", 
        cover: "https://books.google.com/books/content?id=jFFFDwAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Don't Make Me Think", 
        author: "Steve Krug", 
        description: "Prinsip dasar desain UI/UX yang intuitif.", 
        cover: "https://books.google.com/books/content?id=Q-VjCgAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Sapiens: Riwayat Singkat Umat Manusia", 
        author: "Yuval Noah Harari", 
        description: "Riwayat singkat umat manusia dari zaman batu.", 
        cover: "https://books.google.com/books/content?id=AuQsDwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Homo Deus", 
        author: "Yuval Noah Harari", 
        description: "Masa depan umat manusia dan teknologi.", 
        cover: "https://books.google.com/books/content?id=nK1iDwAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Cosmos", 
        author: "Carl Sagan", 
        description: "Menjelajahi alam semesta dan tempat kita di dalamnya.", 
        cover: "https://books.google.com/books/content?id=_-XhL6_xsVkC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    // --- BUKU 51 - SELESAI (Updated Covers) ---
    { 
        title: "Madilog", 
        author: "Tan Malaka", 
        description: "Materialisme, Dialektika, dan Logika pemikiran Indonesia.", 
        cover: "https://books.google.com/books/content?id=gNpXEAAAQBAJ&printsec=copyright&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Habibie & Ainun", 
        author: "B.J. Habibie", 
        description: "Kisah cinta abadi sang teknokrat dan ibu negara.", 
        cover: "https://books.google.com/books/content?id=h9BJygAACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Soekarno: Penyambung Lidah Rakyat", 
        author: "Cindy Adams", 
        description: "Otobiografi presiden pertama Indonesia penyambung lidah rakyat.", 
        cover: "https://books.google.com/books/content?id=qSXcXwAACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Panggil Aku Kartini Saja", 
        author: "Pramoedya A. Toer", 
        description: "Biografi intelektual R.A. Kartini.", 
        cover: "https://books.google.com/books/content?id=Z5SM0QEACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Tan Malaka: Bapak Republik", 
        author: "Harry A. Poeze", 
        description: "Kisah hidup misterius bapak republik yang terlupakan.", 
        cover: "https://books.google.com/books/content?id=df9VEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#"
    },
    { 
        title: "Max Havelaar", 
        author: "Multatuli", 
        description: "Kritik tajam terhadap sistem tanam paksa kolonial.", 
        cover: "https://books.google.com/books/content?id=gvizBAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Salah Asuhan", 
        author: "Abdoel Moeis", 
        description: "Konflik budaya timur dan barat di masa kolonial.", 
        cover: "https://books.google.com/books/content?id=q4P2wAEACAAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Sitti Nurbaya", 
        author: "Marah Rusli", 
        description: "Kisah klasik kasih tak sampai karena adat.", 
        cover: "https://books.google.com/books/content?id=a3RPEAAAQBAJ&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    },
    { 
        title: "Dunia Sophie", 
        author: "Jostein Gaarder", 
        description: "Novel pengantar sejarah filsafat yang ringan.", 
        cover: "https://books.google.com/books/content?id=45gF4vfALPcC&redir_esc=y&printsec=frontcover&img=1&zoom=1", 
        link: "#" 
    }
]; // Tutup array databaseBuku  
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