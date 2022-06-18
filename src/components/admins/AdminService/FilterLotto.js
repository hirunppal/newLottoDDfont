exports.filterlot = (e) => {
  if (e.lottoNum && !isNaN(e.lottoNum) && !isNaN(e.lottoSet) && e.lottoSet) {
    console.log(e.lottoNum.length);
    if (e.lottoNum.length == 6) {
      return e;
    }
  }
};
