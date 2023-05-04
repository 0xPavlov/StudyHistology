let idx = 0; // the current index of the url array
let urls = [
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/001/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/002/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/003/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/004/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/005/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/005b/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/006/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/007_2016/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/008/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/009/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/010/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/011/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/012/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/013/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/014/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/015/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/016/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/017/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/018/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/019/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/020/index.html",
  "https://virtuelle.anatomie.uni-marburg.de/vm/kurskasten/021/index.html",
];

randomizeUrls();

function openNewTab() {
  if (idx == urls.length - 1) {
    idx = 0;
    randomizeUrls();
  } else {
    idx++;
  }

  let nextUrl = urls[idx];
  console.log(nextUrl);
  window.open(nextUrl);
}

function randomizeUrls() {
  urls.sort(function () {
    return 0.5 - Math.random();
  });
}
