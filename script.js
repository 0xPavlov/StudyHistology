let idx = 0; // the current index of the url array
const urls = [
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/001/index.html",
    "Leber, Mensch - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/002/index.html",
    "Cornea - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/003/index.html",
    "Lippe, Mensch - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/004/index.html",
    "Fingerbeere, Mensch - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/005/index.html",
    "Nierenpapille - Azan",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/005b/index.html",
    "Nierenpapille - Azan",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/006/index.html",
    "Harnblase, Schwein - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/007_2016/index.html",
    "Koronararterie Mensch - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/008/index.html",
    "Colon, Mensch - Methylenblau-Fuchsin",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/009/index.html",
    "Pankreas, Mensch - Methylenblau-Fuchsin",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/010/index.html",
    "Mamma lactans, Ratte - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/011/index.html",
    "Nabelschnur, Mensch HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/012/index.html",
    "Mamma nonlactans, Mensch - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/013/index.html",
    "Braunes Fettgewebe, Ratte - HE",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/014/index.html",
    "Leber, retikuläre Fasern - Achucarro",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/015/index.html",
    "Milz, gespült, Schwein - Methylenblau-Eosin n. Mann",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/016/index.html",
    "Sehne, Mensch - Eisenhtx. Nach Heidenhain",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/017/index.html",
    "Elastisches Band, Rind - Methylenblau-Eosin",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/018/index.html",
    "Hyaliner Knorpel, Mensch - Hämalaun",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/019/index.html",
    "Elast. Knorpel, Ohr-Mensch neugeb. Res. Fuchs./v.G.",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/020/index.html",
    "Faserknorpel, Bandscheibe - Hämalaun",
  ],
  [
    "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/021/index.html",
    "Scheitelbein, Mensch foet. - HE",
  ],
];

randomizeUrls();

function openNewTab() {
  if (idx == urls.length - 1) {
    randomizeUrls();
  } else {
    idx++;
  }

  let nextUrl = urls[idx][0];
  window.open(nextUrl);
}

function randomizeUrls() {
  idx = 0;
  urls.sort(function () {
    return 0.5 - Math.random();
  });
}

function showSolution() {
  document.querySelector("h2").innerHTML = urls[idx][1];
}
