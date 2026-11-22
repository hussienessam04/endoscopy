/* ============================================================
   Endoscopy Suite — site behavior
   1. Bilingual EN/AR engine (dictionary + dir/lang flip)
   2. Scroll reveals, sticky nav, mobile menu, FAQ
   Feature claims checked against the app source
   (colonoscopist @ v0.1.33 + main, audited 2026-10-28).
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Contact constants ---------- */

  var CONTACT_EMAIL = "hussienessam04@gmail.com";
  var MAIL_LICENSE =
    "mailto:" + CONTACT_EMAIL +
    "?subject=" + encodeURIComponent("Endoscopy Suite — license request / طلب ترخيص") +
    "&body=" + encodeURIComponent(
      "Hello,\n\nI would like to activate Endoscopy Suite for our clinic.\nClinic name:\nCity / Country:\n\nشكرًا،\nأرغب في تفعيل Endoscopy Suite لعيادتنا.\nاسم العيادة:\nالمدينة / الدولة:"
    );

  /* ---------- i18n dictionary ---------- */

  var I18N = {
    en: {
      _meta: {
        dir: "ltr",
        title: "Endoscopy Suite — Colonoscopy recording & reporting, 100% offline",
        desc: "Turn any USB capture card into an endoscopy workstation: record procedures, capture findings, and print clinic-branded PDF reports — no internet, no subscriptions. English & Arabic."
      },

      "a11y.skip": "Skip to content",
      "nav.features": "Features",
      "nav.how": "How it works",
      "nav.reports": "Reports",
      "nav.security": "Security",
      "nav.license": "License",
      "nav.faq": "FAQ",
      "nav.request": "Request license",

      "hero.kicker": "Colonoscopy recording & reporting",
      "hero.h1": 'Finish the report <em>before your patient is dressed</em>.',
      "hero.lead":
        "Record the case, capture every finding with one key, and print a signed report on your clinic's letterhead — on the PC and camera you already own. No internet, no PACS, no IT contract.",
      "hero.ctaPrimary": "Request your license",
      "hero.ctaSecondary": "See how it works",
      "hero.meta1": "Windows 10 / 11",
      "hero.meta2": "English + العربية built in",
      "hero.meta3": "Patient data never leaves your clinic",
      "hero.imgAlt": "The app's report editor: a finished colonoscopy report with findings, diagnosis, images, and the doctor's signature",


      "strip.1t": "100% offline",
      "strip.1d": "Daily use never touches the internet",
      "strip.2t": "One-time license",
      "strip.2d": "No subscriptions, no recurring fees",
      "strip.3t": "Any camera or capture card",
      "strip.3d": "EasyCap, HDMI capture, or webcam",
      "strip.4t": "English + العربية",
      "strip.4d": "Full right-to-left interface",

      "prob.kicker": "What changes in the first week",
      "prob.h2": "The load that lifts off your day",
      "prob.lead": "Not a feature list — the parts of the day the app takes over.",
      "prob.1p": "After every case, another hour of typing reports.",
      "prob.1g": "The report is nearly ready before you take off your gloves.",
      "prob.2p": "Procedure videos scattered across phones, USB sticks, and DVDs.",
      "prob.2g": "Every procedure filed under its patient — found in seconds.",
      "prob.3p": "Generic or handwritten reports that don't reflect your clinic.",
      "prob.3g": "Reports with your letterhead and your signature — hospital-grade.",
      "prob.4p": "PACS systems cost a fortune and need an IT department.",
      "prob.4g": "A simple capture card plus this app — no servers, no IT person.",
      "prob.5p": "The nightmare of losing patient files or a data leak.",
      "prob.5g": "Everything encrypted on your machine, backed up, and recoverable.",
      "prob.6p": "Cloud software that stops working when the internet drops.",
      "prob.6g": "Works with the internet off — every day, forever.",

      "journey.kicker": "The doctor's journey",
      "journey.h2": "A day in the app — from PIN to signed report",
      "journey.lead":
        "Every screen below is the real app, in the order you'll live it: sign in, add the patient, record, review, finalize, and keep the clinic running.",

      "journey.1t": "Sign in with your PIN — the app knows it's you",
      "journey.1d":
        "Every doctor on the team has a 4-digit PIN and a personal profile: degree, scanned signature, and permissions. No shared account, and every case is attributed to its doctor from the first second. Ten wrong attempts lock the PIN.",
      "journey.1a": "Your profile holds your degree and your signature image",
      "journey.1b": "Ten wrong attempts lock a PIN — identities stay protected",

      "journey.2t": "The patient file takes seconds — the room is already set",
      "journey.2d":
        "Type the name and the file number (MRN) is generated for you. Each machine remembers its capture card and quality preset, so the room opens configured every morning.",
      "journey.2a": "Works with EasyCap, HDMI capture cards, and webcams",
      "journey.2b": "Recording won't start unless 5 GB of disk is free — no mid-case surprises",

      "journey.3t": "Record for hours — shoot findings without looking away",
      "journey.3d":
        "One key starts the recording, another saves exactly what you're seeing — no mouse, no menus. Pause and resume freely; the PC stays awake on its own, and even a power cut doesn't lose the case: the fragmented recording survives and recovers on the next boot.",
      "journey.3a": "R to record · S for a screenshot · Esc to finish",
      "journey.3b": "Scope-freeze auto-capture can be calibrated per device",

      "journey.4t": "Review it — and add the screenshots you missed",
      "journey.4d":
        "Scrub the recording and jump between your screenshots. Spotted a moment you missed? “Add at 12:34” captures the exact frame under the playhead — crop it, undo it, keep going. The original video is never modified.",
      "journey.4a": "Click any screenshot on the timeline to jump straight to it",
      "journey.4b": "Trim only what you export — the original stays intact",

      "journey.5t": "The report carries YOUR signature — not the clinic's",
      "journey.5d":
        "Each doctor finalizes their own report with their own name, degree, and signature on the printed page — not one generic report for the whole clinic. Saved phrases fill the bilingual boxes, the case's frames drop in, and the preview shows the page exactly as it will print.",
      "journey.5a": "Draft → finalize → print preview, all inside the app",
      "journey.5b": "Arabic and English on one page, with your clinic's letterhead",

      "journey.6t": "And the clinic keeps running",
      "journey.6d":
        "Your team signs in with their own PINs and permissions, backups are encrypted and restorable in stages, and every action lands in a tamper-evident audit log. You run the clinic; the app runs the paperwork.",
      "journey.6a": "Encrypted backup with staged restore",
      "journey.6b": "Audit dashboard: who did what and when, with filters",

      "feat.kicker": "Features",
      "feat.h2": "A procedure room that fits in one window",
      "feat.lead":
        "One interface for everything — record, capture, review, share, and report — without juggling multiple programs.",

      "feat.rec.t": "Record for hours — never lose a case",
      "feat.rec.d":
        "Power cut? Cable pulled? The recording survives, and the PC stays awake until you stop it yourself. You will never have to explain a lost video to a patient.",
      "feat.rec.c1": "Recording blocked unless 5 GB disk is free",
      "feat.rec.c2": "Pause / resume with segment markers",
      "feat.rec.c3": "Hotkeys: R record · Space pause · Esc stop",

      "feat.shot.t": "Every finding captured — even with both hands busy",
      "feat.shot.d":
        "One keypress saves the frame, or the app detects the scope freeze and captures it for you. Missed one? Add it later in review at the exact moment you want.",
      "feat.shot.c1": "S key or the capture button, any time",
      "feat.shot.c2": "Auto-capture on scope freeze, calibrated per device",

      "feat.rev.t": "Review, trim, and add what you missed",
      "feat.rev.d":
        "Scrub the recording, jump between screenshots, and add any frame under the playhead. Trimming is non-destructive: the original video is never changed.",
      "feat.rev.c1": "Click any screenshot on the timeline to jump to it",
      "feat.rev.c2": "Trim the exported copy; restore the original anytime",

      "feat.share.t": "Share with the patient in one export",
      "feat.share.d":
        "Export the video, the screenshots, and the PDF report — as separate files, or as one zip bundle in a folder you choose.",
      "feat.share.c1": "Watermarked MP4 that opens on any computer",
      "feat.share.c2": "Bundle: video + screenshots + PDF in one zip",

      "feat.rep.t": "The report is ready before the patient dresses",
      "feat.rep.d":
        "The findings you captured during the case drop straight into the report's anatomy diagram — not into a blank page afterward. Pick the photos, sign, print: a hospital-grade report from a small clinic.",
      "feat.rep.l1": "Bilingual anatomy boxes: colon & upper GI",
      "feat.rep.l2": "Saved text templates per box",
      "feat.rep.l3": "You choose which screenshots print, and in what order",
      "feat.rep.l4": "In-app print preview: paper size, copies, black & white",
      "feat.rep.l5": "Every doctor signs their own report — name, degree, and signature",

      "feat.tpl.t": "Reports that look like YOUR clinic",
      "feat.tpl.d":
        "Your letterhead, your colors, your fields — set them once and every report carries them. The patient keeps that paper, so make sure it carries your name.",

      "feat.move.t": "Move to a new PC without losing a thing",
      "feat.move.d":
        "Restore the encrypted backup on the new machine and unlock it with your passphrase. The license is re-issued for the new hardware.",

      "feat.pat.t": "Find any patient, any procedure, in seconds",
      "feat.pat.d":
        "Search by name or file number. Every procedure a patient has had is one click away — no more digging through drawers and old CDs.",

      "feat.team.t": "Each doctor's work stays their own",
      "feat.team.d":
        "Own PIN, own signature, own patient list. Permissions decide who can view, edit, or export what.",

      "feat.backup.t": "Sleep well — your archive is safe",
      "feat.backup.d":
        "One click backs up everything — patients, videos, reports — encrypted. A stolen or dead PC costs you hardware, not your life's work.",

      "rep.kicker": "The deliverable",
      "rep.h2": "A report that looks like your clinic, not like software output",
      "rep.lead":
        "Set your letterhead once — a header and footer band on every page. Each report carries bilingual anatomy boxes, your findings, diagnosis, and recommendations, the screenshots you chose in your order, and your signature. Draft it, finalize it, print it. All inside the app.",
      "rep.chip1": "Colon & upper-GI anatomy boxes",
      "rep.chip2": "Draft → finalized workflow",
      "rep.chip3": "In-app print preview",
      "rep.chip4": "Bilingual EN + AR",

      "sec.kicker": "Security & privacy",
      "sec.h2": "Your patients' data never leaves your clinic",
      "sec.lead":
        "No cloud. No accounts. No internet requirement. Everything is encrypted on your machine — so a stolen PC means a lost computer, not a data-leak scandal. That is a promise you can make to your patients.",
      "sec.1t": "Encryption at rest",
      "sec.1d":
        "Patient names and dates of birth are encrypted field by field with <code>AES-256-GCM</code>, procedure videos are encrypted file by file, and the database itself is encrypted as a whole. A stolen disk is a pile of noise.",
      "sec.2t": "Encrypted playback",
      "sec.2d":
        "Videos are decrypted on the fly while you play and scrub. A plain copy is only created when you export on purpose.",
      "sec.3t": "Tamper-evident audit log",
      "sec.3d":
        "Every view, edit, export, and print lands in an append-only, hash-chained log, browsable in an audit dashboard with filters and activity charts.",
      "sec.4t": "Machine-bound licensing",
      "sec.4d":
        "Your license is signed with <code>Ed25519</code> and cryptographically bound to your workstation — copies on other machines simply refuse to activate.",
      "sec.5t": "Patient data portability",
      "sec.5d":
        "Any patient can receive their procedure video, screenshots, and report as plain files — GDPR / Egypt PDPL portability, built in.",
      "sec.6t": "Law-aligned retention",
      "sec.6d":
        "Records are kept 7 years by default — aligned with Egypt's PDPL — and configurable per clinic.",
      "sec.note":
        "A doctor-friendly data-protection summary is available for clinic procurement and DPOs on request.",

      "hw.kicker": "Works with what you already own",
      "hw.h2": "No proprietary hardware. No vendor lock-in.",
      "hw.1t": "Analog scopes — EasyCap",
      "hw.1d":
        "Legacy analog scope outputs connect through an inexpensive EasyCap-style USB stick — a clear picture despite the SD resolution, exactly what the scope sees.",
      "hw.1s": "DirectShow · 720×480",
      "hw.2t": "Digital HD — HDMI capture",
      "hw.2d":
        "Modern processors with HDMI output connect through any USB HDMI capture card — the recording keeps every line of 1080p.",
      "hw.2s": "1080p · USB 3.0",
      "hw.3t": "Any webcam",
      "hw.3d":
        "Teaching rooms and temporary setups work with any standard UVC webcam — plug in and go.",
      "hw.3s": "UVC · plug & play",
      "hw.4t": "Presets & live check",
      "hw.4d":
        "A separate quality preset per device — SD, HD, or custom — a framing guide on the live preview, and a device check page before every case. Weak machines drop to SD automatically.",
      "hw.4s": "SD · HD · custom",

      "lic.kicker": "Licensing",
      "lic.h2": "One payment — and the workstation is yours forever",
      "lic.lead":
        "Do the math your way: a PACS seat means a yearly subscription and an IT contract. This is one payment, once — and your records, reports, and archive stay yours with or without us.",
      "lic.1t": "Perpetual license",
      "lic.1p": "One-time",
      "lic.1p2": " · per workstation",
      "lic.1l1": "Yours forever — no subscriptions",
      "lic.1l2": "Bound to your machine, works offline",
      "lic.1l3": "Your clinic name & license ID on every export",
      "lic.1l4": "Support & updates included",
      "lic.1cta": "Request activation",
      "lic.1flag": "Most clinics",
      "lic.2t": "How activation works",
      "lic.2p": "By email",
      "lic.2p2": " · usually same day",
      "lic.2l1": "Copy your machine ID from Settings",
      "lic.2l2": "We reply with a signed .lic file",
      "lic.2l3": "Load it once — offline forever after",
      "lic.2l4": "Updates delivered inside the app",
      "lic.2cta": "Email support",
      "lic.3t": "Ownership that travels",
      "lic.3p": "Your clinic",
      "lic.3p2": " · for the years ahead",
      "lic.3l1": "Signed ownership transfer if the clinic is sold",
      "lic.3l2": "License re-issued when you replace the PC",
      "lic.3l3": "Your data unlocks with your own passphrase",
      "lic.3l4": "Your records stay yours — with or without us",
      "lic.3cta": "Ask about details",

      "faq.kicker": "FAQ",
      "faq.h2": "Questions doctors actually ask",
      "faq.q1": "Does it really work without internet?",
      "faq.a1":
        "Yes. Recording, screenshots, report editing, PDF generation, printing, and backup all run fully offline. When the PC is online, the app sends one small activation ping on launch — license ID, app version, and a hash of the device key, never patient data. If there is no connection, the ping is skipped silently and nothing else changes.",
      "faq.q2": "What capture hardware works with it?",
      "faq.a2":
        "Anything Windows sees as a camera: EasyCap-style analog sticks for legacy scopes, USB HDMI capture cards for HD processors, and standard webcams. The app detects what is plugged in, saves a preset per device, and shows a live preview with a framing guide before every case.",
      "faq.q3": "Where is my patients' data stored?",
      "faq.a3":
        "Only on your workstation, inside an encrypted database. There is no cloud account, no sync, and no telemetry carrying patient data. Backups are files you control — and their contents are already encrypted.",
      "faq.q4": "Can I export a procedure for a patient or a colleague?",
      "faq.a4":
        "Yes — the export flow produces the video (watermarked with your clinic name and license ID), the screenshot images, and the PDF report, each separately or together in a folder you choose. You can trim the exported copy's start and end without touching the original.",
      "faq.q5": "What happens if the clinic PC dies?",
      "faq.a5":
        "Two safety nets. Your data is protected by a passphrase you set on day one — restore your backup on the new machine and unlock it with that passphrase. And your license is re-issued bound to the new hardware, so nothing is lost but the hard drive.",
      "faq.q6": "Is it a DICOM / PACS system?",
      "faq.a6":
        "Deliberately not. DICOM brings integration fees and audit overhead that small clinics never recoup. Recordings are plain MP4, findings are plain JPEG, reports are plain PDF — openable everywhere, forever.",
      "faq.q7": "Which languages does it support?",
      "faq.a7":
        "English and Arabic, with a complete right-to-left interface and bilingual printing, from the very first version — not a bolted-on translation.",
      "faq.q8": "How much does it cost?",
      "faq.a8":
        "A single one-time payment per workstation — no subscriptions, no per-procedure fees, no annual renewals. Pricing is quoted when you request activation; email for a quote for your clinic.",

      "cta.h2": "Ready before your next scope is",
      "cta.p":
        "Email us to request your clinic's license. Activation is a single signed file you load on your own workstation.",
      "cta.primary": "Request your license",
      "cta.secondary": "Contact us",
      "cta.fine": "Windows 10 / 11 (x64) · one license per workstation",

      "foot.tag":
        "Offline-first colonoscopy recording and reporting, built for small clinics.",
      "foot.contact": "Contact",
      "foot.links": "Site",
      "foot.bottom": "© 2026 Colovista Medical · Endoscopy Suite. All rights reserved.",
      "foot.made": "Proudly built in Egypt · Windows · x64"
    },

    ar: {
      _meta: {
        dir: "rtl",
        title: "Endoscopy Suite — سجّل المناظير وطلّع التقرير من غير نت",
        desc: "بطاقة التقاط USB واحدة تحوّل جهازك لمحطة مناظير: سجّل الحالة، وخد اللقطة بزرار واحد، والتقرير يطلع باسم عيادتك وتوقيعك. شغّال من غير إنترنت، وبالعربي والإنجليزي."
      },

      "a11y.skip": "تخطَّ إلى المحتوى",
      "nav.features": "المميزات",
      "nav.how": "إزاي بيشتغل",
      "nav.reports": "التقارير",
      "nav.security": "الأمان",
      "nav.license": "الترخيص",
      "nav.faq": "أسئلة",
      "nav.request": "اطلب ترخيص",

      "hero.kicker": "تسجيل مناظير القولون والتقارير",
      "hero.h1": "خلّص التقرير <em>قبل ما المريض يلبس هدومه</em>",
      "hero.lead":
        "سجّل الحالة، وخد كل نتيجة بزرار واحد، والتقرير يطلع من الطباعة باسم عيادتك وتوقيعك — على الجهاز اللي عندك، والكاميرا اللي هتشتريها من أي محل. مفيش سيرفر ولا فنيّ تقنية يتابعك؛ الشغل كله جوه العيادة.",
      "hero.ctaPrimary": "اطلب ترخيص عيادتك",
      "hero.ctaSecondary": "شوف إزاي بيشتغل",
      "hero.meta1": "ويندوز 10 / 11",
      "hero.meta2": "عربي وإنجليزي جوه البرنامج",
      "hero.meta3": "بيانات المرضى مش بتطلع من العيادة",
      "hero.imgAlt": "محرر التقرير: تقرير منظار مكتمل فيه النتائج والتشخيص والصور وتوقيع الطبيب",

      "strip.1t": "شغّال من غير نت",
      "strip.1d": "الشغل اليومي مش محتاج اتصال",
      "strip.2t": "ترخيص مرة واحدة",
      "strip.2d": "مفيش اشتراك ولا رسوم كل سنة",
      "strip.3t": "أي كاميرا أو بطاقة التقاط",
      "strip.3d": "EasyCap أو HDMI أو كاميرا ويب",
      "strip.4t": "عربي وإنجليزي",
      "strip.4d": "واجهة كاملة من اليمين للشمال",

      "prob.kicker": "اللي بيتغيّر في أول أسبوع",
      "prob.h2": "مشاكل بنشيلها من يومك",
      "prob.lead": "دي مش قائمة مميزات. دي حاجات من يومك البرنامج بقى بيعملها بدالك.",
      "prob.1p": "بعد كل حالة، ساعة كمان بتكتب فيها التقرير.",
      "prob.1g": "التقرير بيبقى شبه جاهز قبل ما تقلع الجوانتي.",
      "prob.2p": "فيديوهات الحالات متفرّقة بين موبايلات وفلاشات وأسطوانات.",
      "prob.2g": "كل حالة محفوظة في ملف مريضها، وتلاقيها في ثواني.",
      "prob.3p": "تقارير بخط الإيد أو قوالب جاهزة مش شبه عيادتك.",
      "prob.3g": "تقرير باسم عيادتك وتوقيعك، يليق بالورقة اللي المريض بياخدها معاه.",
      "prob.4p": "أنظمة PACS مكلّفة، وعايزة قسم تقنية كامل يتابعها.",
      "prob.4g": "بطاقة التقاط بسيطة والبرنامج ده — من غير سيرفرات ولا مختص.",
      "prob.5p": "كابوس ضياع ملفات المرضى أو تسريبها.",
      "prob.5g": "كل حاجة مشفّرة على جهازك، وماخد لها نسخة، وتقدر ترجّعها بنفسك.",
      "prob.6p": "برنامج سحابي بيقف أول ما النت يقطع.",
      "prob.6g": "بيشتغل والنت مقطوع، كل يوم.",

      "journey.kicker": "رحلة الحالة",
      "journey.h2": "من كود الدخول للتقرير الموقّع",
      "journey.lead":
        "الصور دي متصوّرة من البرنامج نفسه، وواجهته إنجليزي. والترتيب هو ترتيب يومك: دخول، ثم ملف المريض، ثم التسجيل، ثم المراجعة، ثم التقرير، وآخر حاجة إدارة العيادة.",

      "journey.1t": "ادخل بكودك، والبرنامج عارف إنت مين",
      "journey.1d":
        "لكل طبيب كود من أربع أرقام وملف خاص بيه: الدرجة وصورة التوقيع والصلاحيات. مفيش حساب مشترك، وكل حالة بتتحمل باسم طبيبها من أول ثانية.",
      "journey.1a": "ملفك محفوظ فيه درجتك وصورة توقيعك",
      "journey.1b": "عشر محاولات غلط والكود بيتقفل",

      "journey.2t": "ملف المريض في ثواني، والغرفة جاهزة",
      "journey.2d":
        "اكتب الاسم، والبرنامج بيطلّع رقم الملف لوحده. ولكل جهاز بطاقة التقاطه وإعداد الجودة بتاعه، فالغرفة بتفتح كل صباح على نفس الإعداد.",
      "journey.2a": "EasyCap وبطاقات HDMI وكاميرات ويب",
      "journey.2b": "مش بيبدأ التسجيل لو فيه أقل من 5 جيجابايت فاضية — مفيش مفاجآت نص الحالة",

      "journey.3t": "سجّل ساعات، والتقط النتائج من غير ما تبص للكيبورد",
      "journey.3d":
        "زرار يبدأ التسجيل، والتاني بيحفظ اللي شايفه. وقّف وكمّل وقت ما تحب، والجهاز مش بينام لوحده. والكهربا لو قطعت، التسجيل بيكمّل من مكانه لما تفتح البرنامج تاني.",
      "journey.3a": "R للتسجيل · S للقطة · Esc للإنهاء",
      "journey.3b": "التقاط تلقائي لما الصورة تثبت، بمعايرة لكل جهاز",

      "journey.4t": "راجع الحالة، وضيف اللقطات اللي فاتتك",
      "journey.4d":
        "اتنقّل في التسجيل واقفز بين اللقطات. شفت لحظة وماخدتهاش؟ زرار «إضافة عند 12:34» بياخد الإطار اللي تحت المؤشر، وتقدر تقصّه أو ترجع عنه. الفيديو الأصلي مش بيتغير.",
      "journey.4a": "نقرة على أي لقطة في الشريط تنقلك عليها",
      "journey.4b": "القص على النسخة اللي بتطلع للمريض بس",

      "journey.5t": "التقرير بتوقيعك إنت",
      "journey.5d":
        "كل طبيب بيطلّع تقريره باسمه ودرجته وتوقيعه على الورقة. عباراتك المحفوظة بتملا المربعات بالعربي والإنجليزي، وصور الحالة بتدخل مكانها، والمعاينة بتوريك الصفحة زي ما هتطلع من الطابعة.",
      "journey.5a": "مسودة، وبعدها إصدار، وبعدها معاينة طباعة — كله جوه البرنامج",
      "journey.5b": "عربي وإنجليزي في صفحة واحدة، وباسم عيادتك",

      "journey.6t": "والعيادة ماشية",
      "journey.6d":
        "الفريق بيدخل بكوده وصلاحياته، والنسخ الاحتياطية مشفّرة وبتترجّع على مراحل، وكل إجراء في سجل تدقيق مش بيتمسح. إنت بتدير العيادة، والبرنامج بيدير الورق.",
      "journey.6a": "نسخة احتياطية مشفّرة واسترجاع على مراحل",
      "journey.6b": "لوحة تدقيق: مين عمل إيه وامتى، مع فلترة",

      "feat.kicker": "المميزات",
      "feat.h2": "غرفة إجراء كاملة في شاشة واحدة",
      "feat.lead":
        "التسجيل والالتقاط والمراجعة والإرسال والتقرير في واجهة واحدة، من غير ما تتنقل بين برامج.",

      "feat.rec.t": "سجّل ساعات من غير ما تخسر حالة",
      "feat.rec.d":
        "الكهربا قطعت أو الكابل اتشد؟ التسجيل بيفضل، والجهاز مش بينام غير لما توقفه بنفسك. مش هتشرح لمريض إن الفيديو ضاع.",
      "feat.rec.c1": "مش بيبدأ التسجيل لو المساحة الفاضية أقل من 5 جيجابايت",
      "feat.rec.c2": "إيقاف واستكمال بعلامات على المقاطع",
      "feat.rec.c3": "الاختصارات: R للتسجيل · Space للإيقاف · Esc للإنهاء",

      "feat.shot.t": "كل نتيجة محفوظة، وإيدك مشغولة",
      "feat.shot.d":
        "ضغطة بتحفظ اللقطة، أو البرنامج بياخدها لوحده لحظة ما الصورة تثبت. فاتتك واحدة؟ ضيفها في المراجعة عند نفس اللحظة.",
      "feat.shot.c1": "زرار S أو زرار الالتقاط، في أي وقت",
      "feat.shot.c2": "التقاط تلقائي لما الصورة تثبت، بمعايرة لكل جهاز",

      "feat.rev.t": "راجع، واقص، وضيف",
      "feat.rev.d":
        "اتنقّل في التسجيل، واقفز بين اللقطات، وضيف أي إطار تحت المؤشر. القص مش بيمس الأصل.",
      "feat.rev.c1": "نقرة على أي لقطة في الشريط تنقلك عليها",
      "feat.rev.c2": "اقص النسخة اللي بتطلع، والأصل زي ما هو",

      "feat.share.t": "ابعت للمريض بنقرة",
      "feat.share.d":
        "ابعت الفيديو واللقطات وملف PDF، كل واحد لوحده أو حزمة واحدة في مجلد تختاره.",
      "feat.share.c1": "فيديو MP4 بعلامة مائية بيفتح على أي جهاز",
      "feat.share.c2": "حزمة واحدة: فيديو + لقطات + PDF",

      "feat.rep.t": "التقرير جاهز وإنت لسه في الغرفة",
      "feat.rep.d":
        "النتائج اللي التقطتها بتنزل في مخطط التقرير على طول، مش في صفحة فاضية بعد كده. اختار الصور، ووقّع، واطبع.",
      "feat.rep.l1": "مربعات تشريحية بالعربي والإنجليزي: القولون والجهاز الهضمي العلوي",
      "feat.rep.l2": "نصوص محفوظة لكل مربع",
      "feat.rep.l3": "إنت اللي بتختار الصور اللي تتطبع وترتيبها",
      "feat.rep.l4": "معاينة طباعة: مقاس الورق، وعدد النسخ، وأبيض وأسود",
      "feat.rep.l5": "كل طبيب بيوقّع تقريره: الاسم، والدرجة، والتوقيع",

      "feat.tpl.t": "تقرير شبه عيادتك",
      "feat.tpl.d":
        "اسم عيادتك وشعارك وألوانك وحقولك، بتتظبط مرة واحدة وبتمشي مع كل تقرير. المريض بياخد الورقة معاه، فخلي اسمك عليها.",

      "feat.move.t": "انقل لجهاز جديد من غير ما تخسر حاجة",
      "feat.move.d":
        "رجّع النسخة المشفّرة على الجهاز الجديد، وافتحها بعبارة المرور، ونطلّع لك ترخيص مربوط بالجهاز الجديد.",

      "feat.pat.t": "لاقي أي مريض أو إجراء في ثواني",
      "feat.pat.d":
        "بالاسم أو برقم الملف. أي إجراء قديم على بعد نقرة، مفيش أدراج ولا أسطوانات قديمة.",

      "feat.team.t": "لكل طبيب ملفه",
      "feat.team.d":
        "كود وتوقيع وقائمة مرضاه، والصلاحيات بتحدد مين يشوف أو يعدّل أو يبعت.",

      "feat.backup.t": "نام مطمّن",
      "feat.backup.d":
        "نسخة واحدة فيها المرضى والفيديوهات والتقارير، مشفّرة. الجهاز لو اتسرق، تخسر جهاز، لا أرشيف عيادة.",

      "rep.kicker": "اللي بياخده المريض",
      "rep.h2": "تقرير باسم عيادتك، مش قالب جاهز",
      "rep.lead":
        "الاسم والشعار مرة واحدة، على كل صفحة. وكل تقرير فيه المربعات التشريحية بالعربي والإنجليزي، والنتائج والتشخيص والتوصيات، والصور اللي اخترتها بترتيبك، وتوقيعك. حرّره، وبعدها اعتمده، وبعدين اطبعه — كله هنا.",
      "rep.chip1": "مربعات القولون والجهاز الهضمي العلوي",
      "rep.chip2": "من المسودة للتقرير النهائي",
      "rep.chip3": "معاينة طباعة جوه البرنامج",
      "rep.chip4": "بالعربي والإنجليزي",

      "sec.kicker": "الأمان والخصوصية",
      "sec.h2": "بيانات مرضاك مش بتطلع من العيادة",
      "sec.lead":
        "مفيش سحابة ولا حساب على أي خدمة. كل حاجة مشفّرة على جهازك، فلو الجهاز اتسرق تخسر حاسوب، لا فضيحة بيانات. وعد تقدر تقوله لمريضك.",
      "sec.1t": "تشفير على القرص",
      "sec.1d":
        "الاسم وتاريخ الميلاد مشفّرين كل حقل لوحده بمعيار <code>AES-256-GCM</code>، وكل فيديو لوحده، وقاعدة البيانات كاملة. القرص المسروق مش بيطلّع غير رموز.",
      "sec.2t": "بيشتغل وهو مشفّر",
      "sec.2d":
        "البرنامج بيفك التشفير وقت العرض والتنقل بس، ومفيش نسخة مكشوفة بتطلع غير لما إنت تبعت.",
      "sec.3t": "سجل تدقيق مش بيتمسح",
      "sec.3d":
        "كل مرة تعرض أو تعدّل أو تبعت أو تطبع، بتتسجّل في سجل متسلسل بالتجزئة، بيتضاف له بس ومش بيتعدّل، وبتشوفه في لوحة فيها فلترة ورسوم للنشاط.",
      "sec.4t": "ترخيص مربوط بالجهاز",
      "sec.4d":
        "الترخيص موقّع بـ<code>Ed25519</code> ومربوط بجهازك تشفيريًا، فنسخة على جهاز تاني مش هتتفعّل.",
      "sec.5t": "بيانات المريض بتمشي معاه",
      "sec.5d":
        "أي مريض يقدر ياخد فيديو إجرائه ولقطاته وتقريره كملفات عادية، وفق GDPR وقانون حماية البيانات المصري.",
      "sec.6t": "مدة حفظ توافق القانون",
      "sec.6d":
        "سبع سنين افتراضيًا، وفق قانون حماية البيانات المصري، وكل عيادة تقدر تغيّرها.",
      "sec.note":
        "ملخص لحماية البيانات بلغة واضحة، جاهز لأقسام المشتريات ومسؤولي حماية البيانات، وبيتبعت لما تطلبه.",

      "hw.kicker": "بيشتغل باللي عندك",
      "hw.h2": "مفيش أجهزة خاصة ولا ارتباط بمورّد",
      "hw.1t": "مناظير تناظرية — EasyCap",
      "hw.1d":
        "المنظار التناظري القديم بيتوصل ببطاقة EasyCap على USB. الصورة بتطلع واضحة على قد ما المنظار يدّي، حتى لو الدقة SD.",
      "hw.1s": "DirectShow · 720×480",
      "hw.2t": "رقمي عالي الدقة — بطاقة HDMI",
      "hw.2d":
        "معالج حديث بمخرج HDMI بيتوصل بأي بطاقة التقاط USB، والتسجيل بيحفظ 1080p كاملة.",
      "hw.2s": "1080p · USB 3.0",
      "hw.3t": "أي كاميرا ويب",
      "hw.3d":
        "قاعات التدريب والتجهيزات المؤقتة بتشتغل مع أي كاميرا UVC. وصّل وابدأ.",
      "hw.3s": "UVC · تشغيل على طول",
      "hw.4t": "إعداد لكل جهاز وفحص مباشر",
      "hw.4d":
        "إعداد جودة لكل جهاز — SD أو HD أو مخصص — ودليل تأطير على المعاينة، وفحص للجهاز قبل كل حالة. والأجهزة الضعيفة بتنزل لـ SD لوحدها.",
      "hw.4s": "SD · HD · مخصص",

      "lic.kicker": "الترخيص",
      "lic.h2": "دفعة واحدة، والجهاز بتاعك",
      "lic.lead":
        "مقعد PACS واحد يعني اشتراك سنوي وعقد دعم. هنا دفعة واحدة، وسجلاتك وتقاريرك وأرشيفك بيفضلوا بتوعك، معانا أو من غيرنا.",
      "lic.1t": "ترخيص دائم",
      "lic.1p": "مرة واحدة",
      "lic.1p2": " · لكل جهاز",
      "lic.1l1": "ملكك، مفيش اشتراك",
      "lic.1l2": "مربوط بالجهاز وبيشتغل من غير نت",
      "lic.1l3": "اسم عيادتك ورقم الترخيص على كل ملف بتبعته",
      "lic.1l4": "الدعم والتحديثات داخلين",
      "lic.1cta": "اطلب التفعيل",
      "lic.1flag": "الأكثر طلبًا",
      "lic.2t": "خطوات التفعيل",
      "lic.2p": "بالإيميل",
      "lic.2p2": " · غالبًا في نفس اليوم",
      "lic.2l1": "انسخ معرّف الجهاز من الإعدادات",
      "lic.2l2": "نبعت لك ملف .lic موقّع",
      "lic.2l3": "حمّله مرة واحدة، وبعد كده بيشتغل من غير نت",
      "lic.2l4": "التحديثات بتجيلك من جوه البرنامج",
      "lic.2cta": "كلّم الدعم",
      "lic.3t": "ملكية بتتنقل مع العيادة",
      "lic.3p": "عيادتك",
      "lic.3p2": " · للسنين اللي جاية",
      "lic.3l1": "نقل ملكية موقّع لو العيادة اتباعت",
      "lic.3l2": "بنطلّع ترخيص جديد لو غيّرت الجهاز",
      "lic.3l3": "بياناتك بتتفتح بعبارة المرور بتاعتك",
      "lic.3l4": "سجلاتك ملفات على جهازك، مش عندنا",
      "lic.3cta": "اسأل عن التفاصيل",

      "faq.kicker": "أسئلة بتتكرر",
      "faq.h2": "أسئلة الأطباء بيسألوها فعلًا",
      "faq.q1": "بيشتغل فعلًا من غير نت؟",
      "faq.a1":
        "أيوه. التسجيل واللقطات وتحرير التقرير والـ PDF والطباعة والنسخ الاحتياطي كله بيشتغل من غير اتصال. ولما النت يبقى موجود، البرنامج بيبعت عند التشغيل إشارة صغيرة: رقم الترخيص وإصدار البرنامج وتجزئة مفتاح الجهاز، ومفيش أي حاجة من بيانات المرضى. ولو مفيش اتصال بيتجاهلها في هدوء، ومفيش أي حاجة بتتغير.",
      "faq.q2": "إيه أجهزة الالتقاط اللي بتشتغل معاه؟",
      "faq.a2":
        "أي حاجة ويندوز شايفها كاميرا: بطاقات EasyCap للمناظير القديمة، وبطاقات HDMI للمعالجات عالية الدقة، وكاميرات الويب العادية. البرنامج بيعرف الجهاز الموصول، وبيحفظ إعداد لكل جهاز، وبيعرض معاينة مباشرة بدليل تأطير قبل كل حالة.",
      "faq.q3": "بيانات مرضاي بتتحفظ فين؟",
      "faq.a3":
        "على جهازك بس، جوه قاعدة بيانات مشفّرة. مفيش حساب سحابي ولا مزامنة، وبيانات المرضى مش بتتبعت لأي حتة. والنسخ الاحتياطية ملفات تحت إيدك، ومحتواها مشفّر أصلًا.",
      "faq.q4": "أقدر أبعت إجراء لمريض أو لزميل؟",
      "faq.a4":
        "أيوه. لما تبعت، الفيديو بيطلع بعلامة مائية عليها اسم العيادة، وصور اللقطات، وتقرير PDF — كل واحد لوحده أو مع بعض في مجلد تختاره. وتقدر تقصّ أول وآخر النسخة اللي بتبعتها من غير ما تمس الأصل.",
      "faq.q5": "ولو جهاز العيادة باظ؟",
      "faq.a5":
        "فيه طبقتين حماية. بياناتك محمية بعبارة مرور إنت اخترتها أول يوم: رجّع النسخة على الجهاز الجديد وافتحها بيها. وبنطلّع ترخيصك مربوط بالجهاز الجديد، فمش بيضيع غير القرص.",
      "faq.q6": "ده نظام DICOM / PACS؟",
      "faq.a6":
        "لأ، وده عن قصد. DICOM بيجيب معاه رسوم تكامل وأعباء تدقيق مش بتستعيدها العيادات الصغيرة. التسجيلات MP4 عادية، واللقطات JPEG، والتقارير PDF — بتفتح على أي جهاز، للأبد.",
      "faq.q7": "إيه اللغات المدعومة؟",
      "faq.a7":
        "العربي والإنجليزي، بواجهة كاملة من اليمين للشمال وطباعة باللغتين، من أول إصدار ومش ترجمة اتضافت بعدين.",
      "faq.q8": "التكلفة كام؟",
      "faq.a8":
        "دفعة واحدة لكل جهاز: مفيش اشتراك، ولا رسم على كل إجراء، ولا تجديد سنوي. السعر بيبقى وقت طلب التفعيل، فكلّمنا ونبعتلك عرض لعيادتك.",

      "cta.h2": "جاهز قبل منظارك الجاي؟",
      "cta.p":
        "كلّمنا لترخيص عيادتك. التفعيل ملف موقّع بتحمّله على جهازك.",
      "cta.primary": "اطلب ترخيص عيادتك",
      "cta.secondary": "كلّمنا",
      "cta.fine": "ويندوز 10 / 11 (64 بت) · ترخيص لكل جهاز",

      "foot.tag":
        "تسجيل مناظير القولون وتقاريرها من غير نت، للعيادات الصغيرة.",
      "foot.contact": "التواصل",
      "foot.links": "الموقع",
      "foot.bottom": "© 2026 كولوفيستا الطبية · Endoscopy Suite. كل الحقوق محفوظة.",
      "foot.made": "اتعمل في مصر · ويندوز · 64 بت"
    }
  };

  /* ---------- Language engine ---------- */

  var html = document.documentElement;

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;

    html.setAttribute("lang", lang);
    html.setAttribute("dir", dict._meta.dir);
    document.title = dict._meta.title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict._meta.desc);

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      var val = dict[key];
      if (val !== undefined) nodes[i].innerHTML = val;
    }

    var alts = document.querySelectorAll("[data-i18n-alt]");
    for (var j = 0; j < alts.length; j++) {
      var altKey = alts[j].getAttribute("data-i18n-alt");
      var altVal = dict[altKey];
      if (altVal !== undefined) alts[j].setAttribute("alt", altVal);
    }

    var btns = document.querySelectorAll(".lang-switch button");
    for (var k = 0; k < btns.length; k++) {
      btns[k].setAttribute("aria-pressed", String(btns[k].dataset.lang === lang));
    }

    try { localStorage.setItem("es-lang", lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });

  var saved = null;
  try { saved = localStorage.getItem("es-lang"); } catch (e) { /* noop */ }
  var initial = saved || ((navigator.language || "en").toLowerCase().indexOf("ar") === 0 ? "ar" : "en");
  applyLang(initial);

  /* ---------- Wired links ---------- */

  document.querySelectorAll("[data-link='license']").forEach(function (a) { a.href = MAIL_LICENSE; });
  document.querySelectorAll("[data-link='email']").forEach(function (a) { a.href = "mailto:" + CONTACT_EMAIL; });
  document.querySelectorAll("[data-link='email-text']").forEach(function (a) {
    a.href = "mailto:" + CONTACT_EMAIL;
    if (!a.textContent.trim() || a.dataset.autofill === "1") a.textContent = CONTACT_EMAIL;
  });

  /* ---------- Sticky nav shadow ---------- */

  var nav = document.querySelector(".nav");
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */

  var burger = document.querySelector(".nav-burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { links.classList.remove("open"); });
    });
  }

  /* ---------- Scroll reveals ---------- */

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- FAQ: open the first question by default ---------- */

  var firstFaq = document.querySelector(".faq details");
  if (firstFaq) firstFaq.open = true;
})();
