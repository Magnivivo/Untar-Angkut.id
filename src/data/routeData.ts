export interface RouteData {
  code: string; name: string; slug: string; color: string;
  chars: { tipe: string; kapasitas: string; kepemilikan: string; armada: string; sistem: string; tarif: string; panjang: string; tunggu: string; jalan: string; };
  depart: string[]; ret: string[]; desc: string;
}
const c = (a:string,p:string,t:string,j:string) => ({tipe:"MPU / CARRY",kapasitas:"12 Orang",kepemilikan:"Perseorangan",armada:a,sistem:"Tidak Terjadwal",tarif:"Rp 5.000,-",panjang:p,tunggu:t,jalan:j});

export const routesPart1: RouteData[] = [
{code:"ABB",name:"Arjosari – Borobudur – Bunulrejo",slug:"abb",color:"#10b981",chars:c("10 Unit","10,72 Km","4 menit","27 menit"),
depart:["Terminal Arjosari","Jl. R. Panji Suroso","Jl. Raden Intan","Jl. Jend. A. Yani","Jl. Borobudur","Jl. Candi Panggung","Jl. Soekarno Hatta","Jl. Cengkeh","Jl. Kalpataru","Jl. Melati","Jl. Mawar","Jl. Sarangan","Jl. Tawangmangu","Jl. Kaliurang","Jl. W.R. Supratman","Jl. Panglima Sudirman","Jl. Pattimura","Jl. Trunojoyo","Jl. Gatot Subroto","Jl. Kolonel Sugiono","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Kolonel Sugiono","Jl. Gatot Subroto","Jl. Trunojoyo","Jl. Pattimura","Jl. Panglima Sudirman","Jl. W.R. Supratman","Jl. Kaliurang","Jl. Tawangmangu","Jl. Sarangan","Jl. Mawar","Jl. Melati","Jl. Kalpataru","Jl. Cengkeh","Jl. Soekarno Hatta","Jl. Candi Panggung","Jl. Borobudur","Jl. Jend. A. Yani","Jl. Raden Intan","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Menghubungkan Terminal Arjosari dengan Terminal Hamid Rusdi melalui kawasan Borobudur dan Bunulrejo."},

{code:"ABH",name:"Arjosari – Borobudur – Hamid Rusdi",slug:"abh",color:"#8b5cf6",chars:c("12 Unit","11,30 Km","5 menit","30 menit"),
depart:["Terminal Arjosari","Jl. R. Panji Suroso","Jl. Raden Intan","Jl. Jend. A. Yani","Jl. Borobudur","Jl. Soekarno Hatta","Jl. Kalpataru","Jl. Mawar","Jl. W.R. Supratman","Jl. PB. Sudirman","Jl. Gatot Subroto","Jl. Laksda Martadinata","Jl. Kolonel Sugiono","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Kolonel Sugiono","Jl. Laksda Martadinata","Jl. Gatot Subroto","Jl. PB. Sudirman","Jl. W.R. Supratman","Jl. Mawar","Jl. Kalpataru","Jl. Soekarno Hatta","Jl. Borobudur","Jl. Jend. A. Yani","Jl. Raden Intan","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Menghubungkan Terminal Arjosari dengan Terminal Hamid Rusdi via Borobudur dan Jl. PB. Sudirman."},

{code:"ADL",name:"Arjosari – Dinoyo – Landungsari",slug:"adl",color:"#f59e0b",chars:c("20 Unit","15,20 Km","4 menit","40 menit"),
depart:["Terminal Arjosari","Jl. Simp. R. Panji Suroso","Jl. Raden Intan","Jl. Jend. A. Yani","Jl. Letjen S. Parman","Jl. Letjen Sutoyo","Jl. W.R. Supratman","Jl. Panglima Sudirman","Jl. Pattimura","Jl. Trunojoyo","Jl. Kertanegara","Jl. Tugu","Jl. Kahuripan","Jl. Semeru","Jl. Ijen","Jl. Bandung","Jl. Terusan Bogor","Jl. Mayjen Panjaitan","Jl. Mayjen Haryono","Terminal Landungsari"],
ret:["Terminal Landungsari","Jl. Mayjen Haryono","Jl. Mayjen Panjaitan","Jl. Terusan Bogor","Jl. Bandung","Jl. Ijen","Jl. Semeru","Jl. Kahuripan","Jl. Tugu","Jl. Kertanegara","Jl. Trunojoyo","Jl. Pattimura","Jl. Panglima Sudirman","Jl. W.R. Supratman","Jl. Letjen Sutoyo","Jl. Letjen S. Parman","Jl. Jend. A. Yani","Jl. Raden Intan","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Rute terpanjang menghubungkan Terminal Arjosari dengan Terminal Landungsari melalui Dinoyo dan Jl. Ijen."},

{code:"AH",name:"Arjosari – Hamid Rusdi",slug:"ah",color:"#ef4444",chars:c("25 Unit","8,40 Km","3 menit","25 menit"),
depart:["Terminal Arjosari","Jl. R. Panji Suroso","Jl. Raden Intan","Jl. Jend. A. Yani","Jl. Letjen S. Parman","Jl. Letjen Sutoyo","Jl. Basuki Rahmat","Jl. Merdeka Utara","Jl. KH. Hasyim Asyari","Jl. Arif Margono","Jl. Satsuit Tubun","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Satsuit Tubun","Jl. Arif Margono","Jl. KH. Hasyim Asyari","Jl. Merdeka Utara","Jl. Basuki Rahmat","Jl. Letjen Sutoyo","Jl. Letjen S. Parman","Jl. Jend. A. Yani","Jl. Raden Intan","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Rute langsung Arjosari–Hamid Rusdi via Jl. Basuki Rahmat. Armada terbanyak dan frekuensi tertinggi."},

{code:"AJH",name:"Arjosari – Janti – Hamid Rusdi",slug:"ajh",color:"#06b6d4",chars:c("12 Unit","11,50 Km","5 menit","30 menit"),
depart:["Terminal Arjosari","Jl. R. Panji Suroso","Jl. Raden Intan","Jl. Jend. A. Yani","Jl. Letjen S. Parman","Jl. Ciliwung","Jl. S. Priyosudarmo","Jl. R. Tumenggung Suryo","Jl. Panglima Sudirman","Jl. Gatot Subroto","Jl. Kolonel Sugiono","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Kolonel Sugiono","Jl. Gatot Subroto","Jl. Panglima Sudirman","Jl. R. Tumenggung Suryo","Jl. S. Priyosudarmo","Jl. Ciliwung","Jl. Letjen S. Parman","Jl. Jend. A. Yani","Jl. Raden Intan","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Menghubungkan Terminal Arjosari dengan Terminal Hamid Rusdi melalui kawasan Janti dan Jl. Ciliwung."},

{code:"AL",name:"Arjosari – Landungsari",slug:"al",color:"#ec4899",chars:c("18 Unit","14,00 Km","4 menit","38 menit"),
depart:["Terminal Arjosari","Jl. R. Panji Suroso","Jl. Laksda Adi Sucipto","Jl. Tenaga","Jl. Karya Timur","Jl. Mahakam","Jl. W.R. Supratman","Jl. Panglima Sudirman","Jl. Pattimura","Jl. Trunojoyo","Jl. Kertanegara","Jl. Tugu","Jl. Kahuripan","Jl. Semeru","Jl. Ijen","Jl. Retawu","Jl. Bondowoso","Jl. Jombang","Jl. Jakarta","Jl. Bogor","Jl. Veteran","Jl. Sumbersari","Terminal Landungsari"],
ret:["Terminal Landungsari","Jl. Tlogomas","Jl. Mayjen Haryono","Jl. Gajayana","Jl. Veteran","Jl. Bandung","Jl. Ijen","Jl. Semeru","Jl. Kahuripan","Jl. Tugu","Jl. Kertanegara","Jl. Trunojoyo","Jl. Pattimura","Jl. Panglima Sudirman","Jl. W.R. Supratman","Jl. Mahakam","Jl. Karya Timur","Jl. Tenaga","Jl. Laksda Adi Sucipto","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Menghubungkan Terminal Arjosari dengan Terminal Landungsari melalui Jl. Ijen dan boulevard bersejarah."},

{code:"AMH",name:"Arjosari – Mergosono – Hamid Rusdi",slug:"amh",color:"#14b8a6",chars:c("10 Unit","13,80 Km","6 menit","38 menit"),
depart:["Terminal Arjosari","Jl. Simp. R. Panji Suroso","Jl. S. Priyosudarmo","Jl. R. Tumenggung Suryo","Jl. Hamid Rusdi","Jl. Kesatriaan Terusan","Jl. Urip Sumoharjo","Jl. P. Sudirman","Jl. Ir. Juanda","Jl. Kebalen","Jl. Kolonel Sugiono","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Kolonel Sugiono","Jl. Kebalen","Jl. Ir. Juanda","Jl. P. Sudirman","Jl. Urip Sumoharjo","Jl. Kesatriaan Terusan","Jl. Hamid Rusdi","Jl. R. Tumenggung Suryo","Jl. S. Priyosudarmo","Jl. Simp. R. Panji Suroso","Terminal Arjosari"],
desc:"Menghubungkan Terminal Arjosari ke Terminal Hamid Rusdi melalui kawasan Mergosono dan Jl. Ir. Juanda."},

{code:"AT",name:"Arjosari – Tidar",slug:"at",color:"#f97316",chars:c("8 Unit","9,60 Km","6 menit","28 menit"),
depart:["Terminal Arjosari","Jl. R. Panji Suroso","Jl. Raden Intan","Jl. Jend. A. Yani","Jl. Letjen S. Parman","Jl. Ciliwung","Jl. S. Priyosudarmo","Jl. R. Tumenggung Suryo","Jl. P. Sudirman","Jl. Pattimura","Jl. Kahuripan","Jl. Semeru","Jl. Kawi","Jl. Tidar"],
ret:["Jl. Tidar","Jl. Kawi","Jl. Semeru","Jl. Kahuripan","Jl. Pattimura","Jl. P. Sudirman","Jl. R. Tumenggung Suryo","Jl. S. Priyosudarmo","Jl. Ciliwung","Jl. Letjen S. Parman","Jl. Jend. A. Yani","Jl. Raden Intan","Jl. R. Panji Suroso","Terminal Arjosari"],
desc:"Menghubungkan Terminal Arjosari dengan kawasan Tidar melalui Jl. Kahuripan, Semeru, dan Kawi."},

{code:"HA",name:"Hamid Rusdi – Arjosari",slug:"ha",color:"#84cc16",chars:c("20 Unit","8,40 Km","3 menit","25 menit"),
depart:["Terminal Hamid Rusdi","Jl. Satsuit Tubun","Jl. S. Supriyadi","Jl. Arif Margono","Jl. Ade Irma Suryani","Jl. KH. Wahid Hasyim","Jl. Kauman","Jl. KH. Hasyim Asyari","Jl. AR. Hakim","Jl. Merdeka Utara","Jl. S. Wiryopranoto","Jl. Mojopahit","Jl. Tugu","Jl. Untung Suropati","Jl. Pajajaran","Jl. Trunojoyo","Jl. Cokroaminoto","Terminal Arjosari"],
ret:["Terminal Arjosari","Jl. Cokroaminoto","Jl. Trunojoyo","Jl. Pajajaran","Jl. Untung Suropati","Jl. Tugu","Jl. Mojopahit","Jl. S. Wiryopranoto","Jl. Merdeka Utara","Jl. AR. Hakim","Jl. KH. Hasyim Asyari","Jl. Kauman","Jl. KH. Wahid Hasyim","Jl. Ade Irma Suryani","Jl. Arif Margono","Jl. S. Supriyadi","Jl. Satsuit Tubun","Terminal Hamid Rusdi"],
desc:"Menghubungkan Terminal Hamid Rusdi ke Terminal Arjosari via Jl. Kauman dan pusat kota."},
];
