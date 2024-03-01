export function parseNationalId(id, lang = "en") {
  let century,
    birthYear,
    birthMonth,
    birthDay,
    birthDate,
    birthCity,
    birthOrder,
    gender;

  let citiesAr = {
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
  let cities = {
    "01": "Cairo",
    "02": "Alexandria",
    "03": "Port Said",
    "04": "Suez",
    11: "Damietta",
    12: "Dakahlia",
    13: "Sharqia",
    14: "Qalyubia",
    15: "Kafr El-Sheikh",
    16: "Gharbia",
    17: "Menoufia",
    18: "Beheira",
    19: "Ismailia",
    21: "Giza",
    22: "Bani Sweif",
    23: "Fayoum",
    24: "Minya",
    25: "Asyut",
    26: "Sohag",
    27: "Qena",
    28: "Aswan",
    29: "Luxor",
    31: "Red Sea",
    32: "El Wadi El Gedid",
    33: "Matrouh",
    34: "North Sinai",
    35: "South Sinai",
    88: "Out Of Egypt",
  };
  function extractData(id) {
    century = id.slice(0, 1) == 3 ? 20 : 19;
    birthYear = century + id.slice(1, 3);
    birthMonth = id.slice(3, 5);
    birthDay = id.slice(5, 7);
    birthDate = `${birthDay}/${birthMonth}/${birthYear}`;
    birthCity =
      lang.toLowerCase() == "ar"
        ? citiesAr[`${id.slice(7, 9)}`]
        : cities[`${id.slice(7, 9)}`];

    birthOrder =
      id.slice(9, 12) < 10
        ? id.slice(9, 12).slice(-1)
        : id.slice(9, 12) >= 11 && id.slice(9, 12) <= 99
        ? id.slice(9, 12).slice(-2)
        : id.slice(9, 12);
    if (lang.toLowerCase() == "ar") {
      gender = Number(id[id.length - 2]) % 2 == 0 ? "أنثى" : "ذكر";
    } else {
      gender = Number(id[id.length - 2]) % 2 == 0 ? "Female" : "Male";
    }
  }

  function output() {
    let data = {
      birthDay,
      birthMonth,
      birthYear,
      birthDate,
      birthOrder,
      gender,
      birthCity,
    };
    return data;
  }

  if (
    !(id.slice(7, 9) in cities) ||
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