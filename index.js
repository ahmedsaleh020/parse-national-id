export function parseNationalId(id) {
  let century, birthYear, birthMonth, birthDay, birthCity, birthOrder, gender;

  let cities = {
    "01": "القاهرة",
    "02": "الاسكندرية",
    "03": "بورسعيد",
    "04": "السويس",
    11: "دمياط",
    12: "الدقهلية",
    13: "الشرقية",
    14: "القليوبية",
    15: "كفر الشيخ",
    16: "الغربية",
    17: "المنوفية",
    18: "البحيرة",
    19: "الاسماعيلية",
    21: "الجيزة",
    22: "بنى سويف",
    23: "الفيوم",
    24: "المنيا",
    25: "اسيوط",
    26: "سوهاج",
    27: "قنا",
    28: "اسوان",
    29: "الاقصر",
    31: "البحر الاحمر",
    32: "الوادى الجديد",
    33: "مطروح",
    34: "شمال سيناء",
    35: "جنوب سيناء",
    88: "خارج الجمهورية",
  };

  function extractData(id) {
    century = id.slice(0, 1) == 3 ? 20 : 19;
    birthYear = century + id.slice(1, 3);
    birthMonth = id.slice(3, 5);
    birthDay = id.slice(5, 7);
    birthCity = cities[`${id.slice(7, 9)}`];
    birthOrder =
      id.slice(9, 12) < 10
        ? id.slice(9, 12).slice(-1)
        : id.slice(9, 12) >= 11 && id.slice(9, 12) <= 99
        ? id.slice(9, 12).slice(-2)
        : id.slice(9, 12);
    gender = Number(id[id.length - 2]) % 2 == 0 ? "أنثى" : "ذكر";
  }

  function output() {
    let data = {
      birthDay,
      birthMonth,
      birthYear,
      birthOrder,
      gender,
      birthCity,
    };
    return data;
  }

  if (
    Number(id[id.length - 1]) > 9 ||
    Number(id[id.length - 1]) < 1 ||
    id.length != 14
  ) {
    return null;
  } else {
    extractData(id);
    return output();
  }
}
