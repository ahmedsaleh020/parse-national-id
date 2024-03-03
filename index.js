const NationalID = (function () {
  const GENDER = {
    MALE: {
      EN: "Male",
      AR: "ذكر"
    },
    FEMALE: {
      EN: "Female",
      AR: "أنثى"
    }
  };

  const CITIES = {
    ARABIC: {
      "01": "القاهرة",
      "02": "الإسكندرية",
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
      19: "الإسماعيلية",
      21: "الجيزة",
      22: "بنى سويف",
      23: "الفيوم",
      24: "المنيا",
      25: "أسيوط",
      26: "سوهاج",
      27: "قنا",
      28: "أسوان",
      29: "الأقصر",
      31: "البحر الأحمر",
      32: "الوادى الجديد",
      33: "مطروح",
      34: "شمال سيناء",
      35: "جنوب سيناء",
      88: "خارج الجمهورية",
    },
    ENGLISH: {
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
    }
  };

  function extractDataOf(person = {}, id, lang = "en") {
    person.century = id.slice(0, 1) == 3 ? 20 : 19;
    person.birth.year = person.century + id.slice(1, 3);
    person.birth.month = id.slice(3, 5);
    person.birth.day = id.slice(5, 7);
    person.birth.date = `${person.birth.day}/${person.birth.month}/${person.birth.year}`;
    person.birth.city =
      lang.toLowerCase() == "ar"
        ? CITIES.ARABIC[`${id.slice(7, 9)}`]
        : CITIES.ENGLISH[`${id.slice(7, 9)}`];

    person.birth.order =
      id.slice(9, 12) < 10
        ? id.slice(9, 12).slice(-1)
        : id.slice(9, 12) >= 11 && id.slice(9, 12) <= 99
          ? id.slice(9, 12).slice(-2)
          : id.slice(9, 12);

    if (lang.toLowerCase() == "ar") {
      person.gender = Number(id[id.length - 2]) % 2 == 0 ? GENDER.FEMALE.AR : GENDER.MALE.AR;
    } else if (lang.toLowerCase() == "en") {
      person.gender = Number(id[id.length - 2]) % 2 == 0 ? GENDER.FEMALE.EN : GENDER.MALE.EN;
    } else {
      return Error(`All languages available now are: English and Arabic`);
    }

    return person;
  }

  function parse(id, lang = "en") {
    let person = {
      century: "",
      birth: {
        year: "",
        month: "",
        day: "",
        date: "",
        city: "",
        order: "",
      },
      gender: ""
    };

    if (
      !(id.slice(7, 9) in CITIES.ENGLISH) ||
      Number(id[id.length - 1]) > 9 ||
      Number(id[id.length - 1]) < 1 ||
      id.length != 14
    ) {
      return null;
    } else {
      return extractDataOf(person, id, lang);
    }
  }

  return {
    parseNationalID: parse
  };
})();

export default NationalID.parseNationalID;
