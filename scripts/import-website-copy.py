import json
import re
from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs" / "Website  content English - Arabic.docx"
TARGET = ROOT / "app" / "content.json"
WORD_NAMESPACE = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"
}

SOLUTION_TITLES = [
    ("Insurance Planning", "التخطيط التأميني"),
    ("Issuance Management", "إدارة الإصدار"),
    ("Accuracy and Adequacy", "الدقة والكفاية"),
    ("Ongoing Review", "المراجعة المستمرة"),
    ("Claim Management", "إدارة المطالبات"),
    ("Policy Renewal", "تجديد الوثائق"),
]

COVERAGE_TITLES = [
    ("Life insurance", "تأمين الحياة"),
    ("Medical Insurance", "التأمين الطبي"),
    ("Accident Insurance", "التأمين ضد الحوادث"),
    ("Investment Insurance", "التأمين الإستثماري"),
    ("Motor Insurance", "تأمين السيارات"),
    ("Cargo Insurance", "تأمين البضائع"),
    ("Hull Insurance", "تأمين أجسام السفن"),
    ("Aviation", "تأمين الطيران"),
    ("Engineering Insurance", "التأمين الهندسى"),
    ("Oil and gas insurance", "التأمين على النفط والغاز"),
    ("Fire and allied perils insurance", "تأمين الحريق والأخطار الإضافية"),
    ("Miscellaneous perils insurance", "تأمين الأخطار المتنوعة"),
    ("Agricultural insurance", "التأمين الزراعى"),
    ("Insurance against non-payment risks", "التأمين ضد مخاطر عدم السداد"),
    ("Cyber insurance", "التأمين ضد المخاطر الإلكترونية"),
]


def read_paragraphs():
    with ZipFile(SOURCE) as archive:
        document = ElementTree.fromstring(archive.read("word/document.xml"))

    paragraphs = []
    for paragraph in document.findall(".//w:p", WORD_NAMESPACE):
        text = "".join(
            node.text or "" for node in paragraph.findall(".//w:t", WORD_NAMESPACE)
        ).strip()
        if text:
            paragraphs.append(text)
    return paragraphs


def contains_arabic(text):
    return any("\u0600" <= character <= "\u06ff" for character in text)


def section(paragraphs, en_title, ar_title, en_end=None, ar_end=None):
    try:
        en_start = paragraphs.index(en_title)
        ar_start = paragraphs.index(ar_title)
    except ValueError as error:
        raise ValueError(f"Missing bilingual source heading: {error}") from error

    en_stop = paragraphs.index(en_end, en_start + 1) if en_end else len(paragraphs)
    ar_stop = paragraphs.index(ar_end, ar_start + 1) if ar_end else len(paragraphs)

    return {
        "en": [
            text
            for text in paragraphs[en_start + 1 : en_stop]
            if not contains_arabic(text)
        ],
        "ar": [
            text
            for text in paragraphs[ar_start + 1 : ar_stop]
            if contains_arabic(text)
        ],
    }


def entries(paragraphs, titles, final_en_heading=None, final_ar_heading=None):
    result = []
    for index, (en_title, ar_title) in enumerate(titles):
        if index + 1 < len(titles):
            next_en, next_ar = titles[index + 1]
        else:
            next_en, next_ar = final_en_heading, final_ar_heading
        result.append(
            {
                "title": {"en": en_title, "ar": ar_title},
                "paragraphs": section(
                    paragraphs, en_title, ar_title, next_en, next_ar
                ),
            }
        )
    return result


def validate(content):
    for key in ("hero", "about", "why"):
        for language in ("en", "ar"):
            if not content["home"][key]["paragraphs"][language]:
                raise ValueError(f"Missing {language} paragraphs for home/{key}")

    expected_counts = {"solutions": 6, "coverage": 15}
    for key, expected_count in expected_counts.items():
        items = content[key]["items"]
        if len(items) != expected_count:
            raise ValueError(f"Expected {expected_count} {key} items, found {len(items)}")
        for item in items:
            for language in ("en", "ar"):
                if not item["title"][language] or not item["paragraphs"][language]:
                    raise ValueError(
                        f"Missing {language} content for {item['title']}"
                    )


def main():
    paragraphs = read_paragraphs()
    home = section(paragraphs, "Secure Your Assets", "حماية أصولك", "About Us", "من نحن")
    about = section(paragraphs, "About Us", "من نحن", "Why People Choosing Us!", "لماذا يختارنا الناس!")
    why = section(paragraphs, "Why People Choosing Us!", "لماذا يختارنا الناس!", "Solutions Page", "التخطيط التأميني")
    company_name_en = re.search(
        r"Our team at (.+?) possess", about["en"][0]
    )
    company_name_ar = re.search(
        r"في (.+?) معرفة متخصصة", about["ar"][0]
    )
    if not company_name_en or not company_name_ar:
        raise ValueError("Could not read the company name from the About Us copy")

    content = {
        "companyName": {
            "en": company_name_en.group(1),
            "ar": company_name_ar.group(1),
        },
        "home": {
            "hero": {
                "title": {"en": "Secure Your Assets", "ar": "حماية أصولك"},
                "paragraphs": home,
            },
            "about": {"title": {"en": "About Us", "ar": "من نحن"}, "paragraphs": about},
            "why": {
                "title": {
                    "en": "Why People Choosing Us!",
                    "ar": "لماذا يختارنا الناس!",
                },
                "paragraphs": why,
            },
        },
        "solutions": {
            "title": {"en": "Solutions", "ar": "الحلول"},
            "items": entries(
                paragraphs,
                SOLUTION_TITLES,
                "Insurance & Coverage Page",
                "تأمين الحياة",
            ),
        },
        "coverage": {
            "title": {"en": "Insurance & Coverage", "ar": "التأمين والتغطية"},
            "items": entries(paragraphs, COVERAGE_TITLES),
        },
    }
    validate(content)
    TARGET.write_text(
        json.dumps(content, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(
        "Imported 3 home sections, "
        f"{len(content['solutions']['items'])} solutions, and "
        f"{len(content['coverage']['items'])} coverage categories in English and Arabic."
    )


if __name__ == "__main__":
    main()
