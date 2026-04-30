import { RouteData } from "./routeData";
const c = (a:string,p:string,t:string,j:string) => ({tipe:"MPU / CARRY",kapasitas:"12 Orang",kepemilikan:"Perseorangan",armada:a,sistem:"Tidak Terjadwal",tarif:"Rp 5.000,-",panjang:p,tunggu:t,jalan:j});

export const routesPart2: RouteData[] = [
{code:"HL",name:"Hamid Rusdi – Landungsari",slug:"hl",color:"#0ea5e9",chars:c("16 Unit","14,30 Km","5 menit","40 menit"),
depart:["Terminal Hamid Rusdi","Jl. Kolonel Sugiono","Jl. Gatot Subroto","Jl. Trunojoyo","Jl. Pattimura","Jl. Panglima Sudirman","Jl. Tugu","Jl. Kahuripan","Jl. Ijen","Jl. Veteran","Jl. Dinoyo","Jl. Tlogomas","Terminal Landungsari"],
ret:["Terminal Landungsari","Jl. Tlogomas","Jl. Dinoyo","Jl. Veteran","Jl. Ijen","Jl. Kahuripan","Jl. Tugu","Jl. Panglima Sudirman","Jl. Pattimura","Jl. Trunojoyo","Jl. Gatot Subroto","Jl. Kolonel Sugiono","Terminal Hamid Rusdi"],
desc:"Menghubungkan Terminal Hamid Rusdi langsung ke Terminal Landungsari melalui pusat kota dan Jl. Ijen."},

{code:"HM",name:"Hamid Rusdi – Mulyorejo",slug:"hm",color:"#d946ef",chars:c("8 Unit","7,50 Km","7 menit","22 menit"),
depart:["Terminal Hamid Rusdi","Jl. Kol. Sugiono","Jl. Susanto","Jl. Irian Jaya","Jl. Tanimbar","Jl. Sulawesi","Jl. Yulius Usman","Jl. Syarief Al Qodri","Jl. Ade Irma Suryani","Jl. Basuki Rahmat","Jl. Ir. Rais","Jl. Jupri","Jl. Bandulan","Jl. Raya Mulyorejo","Sub Terminal Mulyorejo"],
ret:["Sub Terminal Mulyorejo","Jl. Raya Mulyorejo","Jl. Bandulan","Jl. Jupri","Jl. Ir. Rais","Jl. Basuki Rahmat","Jl. Ade Irma Suryani","Jl. Syarief Al Qodri","Jl. Yulius Usman","Jl. Sulawesi","Jl. Tanimbar","Jl. Irian Jaya","Jl. Susanto","Jl. Kol. Sugiono","Terminal Hamid Rusdi"],
desc:"Menghubungkan Terminal Hamid Rusdi dengan Sub Terminal Mulyorejo via Jl. Basuki Rahmat dan Jl. Bandulan."},

{code:"HML",name:"Hamid Rusdi – Mergan – Landungsari",slug:"hml",color:"#a855f7",chars:c("14 Unit","15,00 Km","6 menit","42 menit"),
depart:["Terminal Hamid Rusdi","Jl. Satsuit Tubun","Jl. S. Supriyadi","Jl. Janti","Jl. Sonokeling","Jl. Niaga","Jl. Susanto","Jl. Halmahera","Jl. Tanimbar","Jl. Sulawesi","Jl. Nusakambangan","Jl. Arief Margono","Jl. Rajawali","Terminal Mergan Lori","Jl. Raya Langsep","Jl. Galunggung","Jl. Tidar","Jl. Simpang Candi","Jl. Candi","Jl. Terusan Sigura-gura","Jl. Mertojoyo","Jl. MT. Haryono","Terminal Landungsari"],
ret:["Terminal Landungsari","Jl. MT. Haryono","Jl. Mertojoyo","Jl. Terusan Sigura-gura","Jl. Candi","Jl. Simpang Candi","Jl. Tidar","Jl. Galunggung","Jl. Raya Langsep","Terminal Mergan Lori","Jl. Rajawali","Jl. Arief Margono","Jl. Nusakambangan","Jl. Sulawesi","Jl. Tanimbar","Jl. Halmahera","Jl. Susanto","Jl. Niaga","Jl. Sonokeling","Jl. Janti","Jl. S. Supriyadi","Jl. Satsuit Tubun","Terminal Hamid Rusdi"],
desc:"Menghubungkan Terminal Hamid Rusdi dengan Terminal Landungsari melalui Terminal Mergan Lori."},

{code:"LDH",name:"Landungsari – Dinoyo – Hamid Rusdi",slug:"ldh",color:"#059669",chars:c("15 Unit","14,30 Km","5 menit","40 menit"),
depart:["Terminal Landungsari","Jl. Tlogomas","Jl. MT. Haryono","Jl. Mayjen Panjaitan","Jl. Bandung","Jl. Bromo","Jl. Kyai Tamin","Jl. Laksda Martadinata","Jl. Kolonel Sugiono","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Kolonel Sugiono","Jl. Laksda Martadinata","Jl. Kyai Tamin","Jl. Bromo","Jl. Bandung","Jl. Mayjen Panjaitan","Jl. MT. Haryono","Jl. Tlogomas","Terminal Landungsari"],
desc:"Menghubungkan Terminal Landungsari ke Terminal Hamid Rusdi melalui Dinoyo dan Jl. Kyai Tamin."},

{code:"LH",name:"Landungsari – Hamid Rusdi",slug:"lh",color:"#3b82f6",chars:c("12 Unit","14,50 Km","5 menit","40 menit"),
depart:["Terminal Landungsari","Jl. Tlogomas","Jl. Mayjen Haryono","Jl. Sumbersari","Jl. Bendungan Sutami","Jl. Surabaya","Jl. Bondowoso","Jl. Gading","Jl. Wilis","Jl. Panderman","Jl. AR. Hakim","Jl. Merdeka Utara","Jl. Merdeka Selatan","Jl. Wiryopranoto","Jl. Sultan Syahrir","Jl. Kyai Tamin","Jl. Sartono S.H.","Jl. Peltu Sujono","Jl. Susanto","Jl. Niaga","Jl. Sonokeling","Jl. Janti","Jl. S. Supriyadi","Jl. Satsuit Tubun","Terminal Hamid Rusdi"],
ret:["Terminal Hamid Rusdi","Jl. Satsuit Tubun","Jl. S. Supriyadi","Jl. Janti","Jl. Sonokeling","Jl. Niaga","Jl. Susanto","Jl. Peltu Sujono","Jl. Sartono S.H.","Jl. Kyai Tamin","Jl. Sultan Syahrir","Jl. Wiryopranoto","Jl. Merdeka Selatan","Jl. Merdeka Utara","Jl. AR. Hakim","Jl. Panderman","Jl. Wilis","Jl. Gading","Jl. Bondowoso","Jl. Surabaya","Jl. Bendungan Sutami","Jl. Sumbersari","Jl. Mayjen Haryono","Jl. Tlogomas","Terminal Landungsari"],
desc:"Menghubungkan Terminal Landungsari ke Terminal Hamid Rusdi via Jl. Bendungan Sutami dan pusat kota."},

{code:"MK",name:"Madyopuro – Karangbesuki",slug:"mk",color:"#e11d48",chars:c("6 Unit","6,80 Km","8 menit","20 menit"),
depart:["Madyopuro","Jl. Ki Ageng Gribig","Jl. Mayjen Sungkono","Jl. Kolonel Sugiono","Jl. Satsuit Tubun","Jl. Arif Margono","Jl. KH. Hasyim Asyari","Jl. Merdeka Selatan","Jl. Kauman","Karangbesuki"],
ret:["Karangbesuki","Jl. Kauman","Jl. Merdeka Selatan","Jl. KH. Hasyim Asyari","Jl. Arif Margono","Jl. Satsuit Tubun","Jl. Kolonel Sugiono","Jl. Mayjen Sungkono","Jl. Ki Ageng Gribig","Madyopuro"],
desc:"Rute pendek menghubungkan Madyopuro dengan Karangbesuki melewati Pasar Besar Malang."},

{code:"MM",name:"Mulyorejo – Madyopuro",slug:"mm",color:"#ca8a04",chars:c("8 Unit","9,50 Km","7 menit","28 menit"),
depart:["Sub Terminal Mulyorejo","Jl. Raya Mulyorejo","Jl. Raya Bandulan","Jl. Jupri","Jl. Raya Langsep","Jl. Raya Dieng","Jl. Kawi Atas","Jl. Kawi","Jl. AR. Hakim","Jl. Merdeka Utara","Jl. MGR. Sugriwiryopranoto","Jl. Mojopahit","Jl. Tugu","Jl. Kertanegara","Jl. Trunojoyo","Jl. Pattimura","Jl. Urip Sumoharjo","Jl. Mayjen M. Wiyono","Jl. Ranu Grati","Jl. Danau Toba","Jl. Ki Ageng Gribig","Terminal Madyopuro"],
ret:["Terminal Madyopuro","Jl. Ki Ageng Gribig","Jl. Danau Toba","Jl. Ranu Grati","Jl. Mayjen M. Wiyono","Jl. Urip Sumoharjo","Jl. Pattimura","Jl. Trunojoyo","Jl. Kertanegara","Jl. Tugu","Jl. Mojopahit","Jl. MGR. Sugriwiryopranoto","Jl. Merdeka Utara","Jl. AR. Hakim","Jl. Kawi","Jl. Kawi Atas","Jl. Raya Dieng","Jl. Raya Langsep","Jl. Jupri","Jl. Raya Bandulan","Jl. Raya Mulyorejo","Sub Terminal Mulyorejo"],
desc:"Menghubungkan Sub Terminal Mulyorejo dengan Terminal Madyopuro melewati Jl. Kawi dan pusat kota."},

{code:"MT",name:"Mulyorejo – Tlogowaru",slug:"mt",color:"#6366f1",chars:c("10 Unit","11,20 Km","6 menit","32 menit"),
depart:["Sub Terminal Mulyorejo","Jl. Raya Mulyorejo","Jl. Raya Bandulan","Jl. Jupri","Jl. Ir. Rais","Jl. Basuki Rahmat","Jl. Merdeka Utara","Jl. Pattimura","Jl. Urip Sumoharjo","Jl. Mayjen Sungkono","Jl. Ki Ageng Gribig","Tlogowaru"],
ret:["Tlogowaru","Jl. Ki Ageng Gribig","Jl. Mayjen Sungkono","Jl. Urip Sumoharjo","Jl. Pattimura","Jl. Merdeka Utara","Jl. Basuki Rahmat","Jl. Ir. Rais","Jl. Jupri","Jl. Raya Bandulan","Jl. Raya Mulyorejo","Sub Terminal Mulyorejo"],
desc:"Menghubungkan Sub Terminal Mulyorejo dengan Tlogowaru melewati Jl. Basuki Rahmat dan Jl. Ki Ageng Gribig."},
];
