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

      "hero.kicker": "Colonoscopy reporting workstation",
      "hero.h1": 'From the first frame of the scope to <em>the final report</em> — all in one place.',
      "hero.lead":
        "You record the procedure, capture every finding with one keypress, and hand the patient a clinic-branded report before they leave. Works with the camera you already own — no cloud, no IT, no subscriptions.",
      "hero.ctaPrimary": "Request your license",
      "hero.ctaSecondary": "See how it works",
      "hero.meta1": "Windows 10 / 11",
      "hero.meta2": "English + العربية built in",
      "hero.meta3": "Patient data never leaves your clinic",
      "hero.chip": "Interface preview",
      "hero.gifAlt": "Animated preview of the procedure room: recording, screenshots, and findings list",

      "mock.live": "REC",
      "mock.hotkey": "Screenshot",
      "mock.keys": "to capture this frame",
      "mock.rail": "Findings",
      "mock.f1": "Screenshot · ascending colon",
      "mock.f2": "Auto-capture · scope freeze",
      "mock.f3": "Screenshot · cecum",
      "mock.enc": "QSV encoder",
      "mock.disk": "Disk 212 GB free",
      "mock.patient": "MRN 0189",
      "mock.doctor": "Dr. Karim A.",
      "mock.degree": "Consultant",
      "mock.pinTitle": "Enter your 4-digit PIN",
      "mock.setupTitle": "New procedure",
      "mock.mrn": "MRN 0189",
      "mock.dev1": "EasyCap · analog",
      "mock.dev1s": "DirectShow · 720×480",
      "mock.dev2": "HDMI capture · digital",
      "mock.dev2s": "1080p · USB 3.0",
      "mock.presetSd": "SD",
      "mock.presetHd": "HD",
      "mock.chk1": "✓ Disk: 212 GB free",
      "mock.chk2": "✓ Encoder: QSV",
      "mock.chk3": "✓ Framing guide on",
      "mock.openRoom": "Open procedure room",
      "mock.stepDraft": "Draft",
      "mock.stepFinal": "Finalized",
      "mock.stepPrint": "Print",
      "mock.sheetTitle": "COLONOSCOPY REPORT",
      "mock.stamp": "Finalized",
      "mock.sigName": "Dr. Karim A. · Consultant",
      "mock.preview": "Print preview",
      "mock.printBtn": "Print",
      "mock.roleDoctor": "Doctor · full access",
      "mock.nurse": "Nurse N. S.",
      "mock.roleAssist": "Nurse · view & capture",
      "mock.active": "Active",
      "mock.limited": "Limited",
      "mock.backup": "Encrypted backup",
      "mock.verified": "Verified",
      "mock.backupMeta": "Last backup 02:00 · 2.4 GB · staged restore",
      "mock.auditTitle": "Audit log · hash-chained",
      "mock.a1": "viewed procedure",
      "mock.a2": "exported bundle",
      "mock.a3": "report finalized",

      "strip.1t": "100% offline",
      "strip.1d": "Daily use never touches the internet",
      "strip.2t": "One-time license",
      "strip.2d": "No subscriptions, no recurring fees",
      "strip.3t": "Any camera or capture card",
      "strip.3d": "EasyCap, HDMI capture, or webcam",
      "strip.4t": "English + العربية",
      "strip.4d": "Full right-to-left interface",

      "prob.kicker": "Why doctors choose it",
      "prob.h2": "The problems you know — solved",
      "prob.lead": "If any of these sound like your clinic, keep scrolling.",
      "prob.1p": "After every case, another hour of typing reports.",
      "prob.1g": "The report is nearly ready before you wash your hands.",
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
        "Each step is shown as it looks in the app, in the order you'll live it: sign in, set up, record, review, finalize, and keep the clinic running.",
      "journey.previewTag": "Interface preview",
      "journey.illusTag": "Illustration",
      "journey.sChip": "[S] screenshot",
      "journey.addBtn": "＋ Add at 12:34",

      "journey.1t": "Sign in with your PIN — the app knows it's you",
      "journey.1d":
        "Every doctor on the team has a 4-digit PIN and a personal profile: degree, scanned signature, and permissions. No shared account, and every case is attributed to its doctor from the first second. Ten wrong attempts lock the PIN.",
      "journey.1a": "Your profile holds your degree and your signature image",
      "journey.1b": "Ten wrong attempts lock a PIN — identities stay protected",

      "journey.2t": "The room is ready before the patient lies down",
      "journey.2d":
        "Add the patient in seconds — the file number (MRN) is generated for you — then open the procedure room. Your capture card, scope feed, and quality preset are remembered per device, so every morning starts configured.",
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
        title: "Endoscopy Suite — تسجيل وتقارير المناظير، تعمل دون إنترنت",
        desc: "حوّل أي بطاقة التقاط USB إلى محطة عمل متكاملة للمناظير: سجّل الإجراءات، والتقط النتائج، واطبع تقارير PDF بترويسة عيادتك — بلا إنترنت وبلا اشتراكات. بالعربية والإنجليزية."
      },

      "a11y.skip": "انتقل إلى المحتوى",
      "nav.features": "المزايا",
      "nav.how": "كيف يعمل",
      "nav.reports": "التقارير",
      "nav.security": "الأمان",
      "nav.license": "الترخيص",
      "nav.faq": "الأسئلة الشائعة",
      "nav.request": "طلب ترخيص",

      "hero.kicker": "محطة تقارير المناظير",
      "hero.h1": "من بداية المنظار حتى <em>التقرير النهائي</em> — كل شيء في مكان واحد",
      "hero.lead":
        "سجّل الإجراء، والتقط كل نتيجة بضغطة زر، وسلّم المريض تقريرًا رسميًا باسم عيادتك قبل أن يغادر. يعمل بالكاميرا التي تملكها بالفعل — بلا سحابة، ولا حاجة إلى فنيّ تقنية، ولا اشتراكات.",
      "hero.ctaPrimary": "اطلب ترخيصك",
      "hero.ctaSecondary": "كيف يعمل التطبيق",
      "hero.meta1": "ويندوز 10 / 11",
      "hero.meta2": "العربية والإنجليزية مدمجتان",
      "hero.meta3": "بيانات المرضى لا تغادر العيادة",
      "hero.chip": "معاينة الواجهة",
      "hero.gifAlt": "معاينة متحركة لغرفة الإجراء: التسجيل، واللقطات، وقائمة النتائج",

      "mock.live": "تسجيل",
      "mock.hotkey": "لقطة",
      "mock.keys": "لالتقاط هذه الصورة",
      "mock.rail": "النتائج",
      "mock.f1": "لقطة · القولون الصاعد",
      "mock.f2": "التقاط تلقائي · تجمّد صورة المنظار",
      "mock.f3": "لقطة · الأعور",
      "mock.enc": "المُرمِّز: QSV",
      "mock.disk": "المساحة الفارغة: 212 جيجابايت",
      "mock.patient": "رقم الملف 0189",
      "mock.doctor": "د. كريم ع.",
      "mock.degree": "استشاري",
      "mock.pinTitle": "أدخل رمز الدخول المكوّن من 4 أرقام",
      "mock.setupTitle": "إجراء جديد",
      "mock.mrn": "رقم الملف 0189",
      "mock.dev1": "EasyCap · تناظري",
      "mock.dev1s": "DirectShow · 720×480",
      "mock.dev2": "بطاقة HDMI · رقمي",
      "mock.dev2s": "1080p · USB 3.0",
      "mock.presetSd": "SD",
      "mock.presetHd": "HD",
      "mock.chk1": "✓ المساحة الفارغة: 212 جيجابايت",
      "mock.chk2": "✓ المُرمِّز: QSV",
      "mock.chk3": "✓ دليل التأطير مفعّل",
      "mock.openRoom": "فتح غرفة الإجراء",
      "mock.stepDraft": "مسودة",
      "mock.stepFinal": "نهائي",
      "mock.stepPrint": "طباعة",
      "mock.sheetTitle": "تقرير تنظير القولون",
      "mock.stamp": "نهائي",
      "mock.sigName": "د. كريم ع. · استشاري",
      "mock.preview": "معاينة الطباعة",
      "mock.printBtn": "طباعة",
      "mock.roleDoctor": "طبيب · صلاحيات كاملة",
      "mock.nurse": "ن. س.",
      "mock.roleAssist": "تمريض · عرض والتقاط",
      "mock.active": "نشط",
      "mock.limited": "صلاحيات محدودة",
      "mock.backup": "نسخة احتياطية مشفّرة",
      "mock.verified": "تم التحقق",
      "mock.backupMeta": "آخر نسخة: 02:00 · 2.4 جيجابايت · استعادة على مراحل",
      "mock.auditTitle": "سجل التدقيق · مترابط بالتجزئة",
      "mock.a1": "عرض إجراء",
      "mock.a2": "تصدير حزمة",
      "mock.a3": "إصدار تقرير",

      "strip.1t": "يعمل بلا إنترنت بنسبة 100%",
      "strip.1d": "الاستخدام اليومي لا يحتاج إلى الإنترنت أبدًا",
      "strip.2t": "ترخيص دائم بدفعة واحدة",
      "strip.2d": "بلا اشتراكات ولا رسوم متكررة",
      "strip.3t": "أي كاميرا أو بطاقة التقاط",
      "strip.3d": "EasyCap أو HDMI أو كاميرا ويب",
      "strip.4t": "العربية والإنجليزية",
      "strip.4d": "واجهة كاملة من اليمين إلى اليسار",

      "prob.kicker": "لماذا يختاره الأطباء",
      "prob.h2": "مشكلات تعرفها جيدًا — وحلولها",
      "prob.lead": "إن شابه أي من هذه الأمور وضع عيادتك، فتابع القراءة.",
      "prob.1p": "بعد كل حالة، ساعة أخرى لكتابة التقارير.",
      "prob.1g": "يصبح التقرير شبه جاهز قبل أن تغسل يديك.",
      "prob.2p": "فيديوهات الإجراءات مبعثرة بين الهواتف وفلاشات USB والأقراص المدمجة.",
      "prob.2g": "كل إجراء محفوظ في ملف مريضه، وتجده في ثوانٍ.",
      "prob.3p": "تقارير عامة أو مكتوبة بخط اليد لا تعبّر عن عيادتك.",
      "prob.3g": "تقارير بترويسة عيادتك وتوقيعك، وبمستوى المستشفيات.",
      "prob.4p": "أنظمة PACS باهظة الثمن، وتحتاج إلى قسم تقني كامل.",
      "prob.4g": "بطاقة التقاط بسيطة مع هذا البرنامج — بلا خوادم ولا مختص تقني.",
      "prob.5p": "كابوس فقدان ملفات المرضى أو تسرّب بياناتهم.",
      "prob.5g": "كل شيء مشفّر على جهازك، ومنسوخ احتياطيًا، وقابل للاستعادة.",
      "prob.6p": "برامج سحابية تتوقف فور انقطاع الإنترنت.",
      "prob.6g": "يعمل والإنترنت مقطوع — كل يوم، وإلى الأبد.",

      "journey.kicker": "رحلة الطبيب داخل التطبيق",
      "journey.h2": "يوم كامل مع التطبيق — من رمز الدخول إلى التقرير الموقَّع",
      "journey.lead":
        "كل خطوة كما تظهر داخل التطبيق، بالترتيب الذي ستعيشه: تسجيل الدخول، ثم الإعداد، والتسجيل، والمراجعة، والإصدار، ثم إدارة العيادة.",
      "journey.previewTag": "معاينة الواجهة",
      "journey.illusTag": "رسم توضيحي",
      "journey.sChip": "[S] لقطة شاشة",
      "journey.addBtn": "＋ إضافة عند 12:34",

      "journey.1t": "سجّل دخولك برمزك — التطبيق يعرف أنك أنت",
      "journey.1d":
        "لكل طبيب في الفريق رمز دخول من أربع خانات، وملف شخصي خاص به: الدرجة العلمية، وصورة التوقيع، والصلاحيات. لا حساب مشترك، وتُنسب كل حالة إلى طبيبها من أول لحظة. وعشر محاولات خاطئة تُوقف الرمز.",
      "journey.1a": "ملفك الشخصي يحفظ درجتك العلمية وصورة توقيعك",
      "journey.1b": "عشر محاولات خاطئة تُقفل الرمز — فالهويات محمية",

      "journey.2t": "الغرفة جاهزة قبل أن يستلقي المريض",
      "journey.2d":
        "أضِف المريض في ثوانٍ — ويُنشأ رقم الملف تلقائيًا — ثم افتح غرفة الإجراء. تُحفظ بطاقة الالتقاط ومصدر صورة المنظار وإعدادات الجودة لكل جهاز، فيبدأ كل صباح جاهزًا.",
      "journey.2a": "يعمل مع EasyCap وبطاقات HDMI وكاميرات الويب",
      "journey.2b": "لا يبدأ التسجيل ما لم تتوفر 5 جيجابايت من المساحة الفارغة — دون مفاجآت في منتصف الحالة",

      "journey.3t": "سجّل لساعات — والتقط النتائج دون أن تشيح بنظرك",
      "journey.3d":
        "مفتاح يبدأ التسجيل، وآخر يحفظ ما تراه الآن — بلا فأرة ولا قوائم. أوقف التسجيل واستأنفه متى شئت؛ يبقى الجهاز مستيقظًا من تلقاء نفسه، وحتى انقطاع الكهرباء لا يضيع الإجراء: يُحفظ التسجيل المُجزّأ ويُستعاد عند التشغيل التالي.",
      "journey.3a": "R للتسجيل · S للقطة · Esc للإنهاء",
      "journey.3b": "التقاط تلقائي عند تجمّد صورة المنظار، مع معايرة لكل جهاز",

      "journey.4t": "راجِع التسجيل — وأضِف اللقطات التي فاتتك",
      "journey.4d":
        "تنقّل داخل التسجيل، واقفز بين لقطاتك بنقرة واحدة. لمحت لحظة فاتتك؟ زر «إضافة عند 12:34» يلتقط الإطار الذي يشير إليه المؤشر بدقة، ويمكنك قصّه أو التراجع عنه. الفيديو الأصلي لا يتغير أبدًا.",
      "journey.4a": "انقر أي لقطة على الشريط الزمني لتنتقل إليها مباشرة",
      "journey.4b": "القص يُطبَّق عند التصدير فقط، والأصل يبقى سليمًا",

      "journey.5t": "التقرير يحمل توقيعك أنت، لا توقيع العيادة العام",
      "journey.5d":
        "يُصدر كل طبيب تقريره باسمه ودرجته وتوقيعه على الورقة المطبوعة، لا تقريرًا واحدًا عامًا للعيادة كلها. عباراتك المحفوظة تملأ المربعات ثنائية اللغة، وصور الحالة تُدرج تلقائيًا، ومعاينة الطباعة تُريك الصفحة كما ستُطبع تمامًا.",
      "journey.5a": "مسودة ← إصدار نهائي ← معاينة طباعة، كل ذلك داخل التطبيق",
      "journey.5b": "العربية والإنجليزية في صفحة واحدة، وبترويسة عيادتك",

      "journey.6t": "والعيادة تواصل العمل باطمئنان",
      "journey.6d":
        "يسجّل فريقك الدخول برموزه وصلاحياته، والنسخ الاحتياطية مشفّرة ويمكن استعادتها على مراحل، وكل إجراء يُسجَّل في سجل تدقيق يصعب التلاعب به. أنت تدير العيادة، والتطبيق يتولى الأوراق.",
      "journey.6a": "نسخ احتياطي مشفّر مع استعادة على مراحل",
      "journey.6b": "لوحة تدقيق: من فعل ماذا ومتى، مع إمكانية التصفية",

      "feat.kicker": "المزايا",
      "feat.h2": "غرفة إجراء كاملة في نافذة واحدة",
      "feat.lead":
        "واجهة واحدة تجمع كل ما تحتاجه: التسجيل، والالتقاط، والمراجعة، والمشاركة، والتقارير — دون التنقل بين عدة برامج.",

      "feat.rec.t": "سجّل لساعات — ولا تخسر حالة أبدًا",
      "feat.rec.d":
        "انقطعت الكهرباء؟ انفصل الكابل؟ التسجيل يبقى سليمًا، ويظل الجهاز مستيقظًا حتى توقفه بنفسك. لن تضطر أبدًا إلى شرح فيديو مفقود لمريض.",
      "feat.rec.c1": "لا يبدأ التسجيل إلا بوجود 5 جيجابايت من المساحة الفارغة",
      "feat.rec.c2": "إيقاف مؤقت واستئناف مع علامات على المقاطع",
      "feat.rec.c3": "اختصارات: R للتسجيل · Space للإيقاف المؤقت · Esc للإنهاء",

      "feat.shot.t": "كل نتيجة موثّقة — حتى وأنت مشغول اليدين",
      "feat.shot.d":
        "ضغطة واحدة تحفظ اللقطة، أو يلتقطها البرنامج بنفسه لحظة تجمّد صورة المنظار. فاتتك لقطة؟ أضفها لاحقًا أثناء المراجعة عند اللحظة التي تريدها.",
      "feat.shot.c1": "مفتاح S أو زر الالتقاط، في أي وقت",
      "feat.shot.c2": "التقاط تلقائي عند تجمّد الصورة، مع معايرة لكل جهاز",

      "feat.rev.t": "راجِع واقتطع وأضِف ما فاتك",
      "feat.rev.d":
        "تنقّل في التسجيل، واقفز بين اللقطات، وأضِف أي إطار تحت مؤشر التشغيل. والاقتطاع غير إتلافي: الفيديو الأصلي لا يتغير أبدًا.",
      "feat.rev.c1": "انقر أي لقطة على الشريط الزمني لتنتقل إليها",
      "feat.rev.c2": "اقتطع النسخة المُصدَّرة، وأعِد الأصل متى شئت",

      "feat.share.t": "شارِك الإجراء مع المريض بتصدير واحد",
      "feat.share.d":
        "صدّر الفيديو واللقطات وتقرير PDF — كملفات منفصلة، أو كحزمة مضغوطة واحدة في مجلد تختاره.",
      "feat.share.c1": "فيديو MP4 بعلامة مائية يُفتح على أي حاسوب",
      "feat.share.c2": "حزمة واحدة: فيديو + لقطات + PDF",

      "feat.rep.t": "التقرير جاهز قبل أن يرتدي المريض ملابسه",
      "feat.rep.d":
        "النتائج التي التقطتها أثناء الحالة تنتقل مباشرة إلى المخطط التشريحي داخل التقرير، لا إلى صفحة فارغة بعدها. اختر الصور، ووقّع، واطبع: تقرير بمستوى المستشفيات من عيادة صغيرة.",
      "feat.rep.l1": "مربعات تشريحية ثنائية اللغة: القولون والجهاز الهضمي العلوي",
      "feat.rep.l2": "نصوص محفوظة جاهزة لكل مربع",
      "feat.rep.l3": "أنت تختار اللقطات التي تُطبع وترتيبها",
      "feat.rep.l4": "معاينة طباعة مدمجة: حجم الورق، وعدد النسخ، والأبيض والأسود",
      "feat.rep.l5": "كل طبيب يوقّع تقريره — باسمه ودرجته وتوقيعه",

      "feat.tpl.t": "تقارير تشبه عيادتك أنت",
      "feat.tpl.d":
        "ترويسة عيادتك وألوانك وحقولك — تُضبط مرة واحدة فتحملها كل التقارير. والمريض سيحتفظ بهذه الورقة، فاجعل عليها اسمك.",

      "feat.move.t": "انتقل إلى جهاز جديد دون أن تفقد شيئًا",
      "feat.move.d":
        "استعِد النسخة الاحتياطية المشفّرة على الجهاز الجديد، وافتحها بعبارة المرور التي اخترتها. ويُعاد إصدار الترخيص للجهاز الجديد.",

      "feat.pat.t": "اعثر على أي مريض وأي إجراء في ثوانٍ",
      "feat.pat.d":
        "بالاسم أو برقم الملف. كل إجراء أجراه المريض من قبل على بعد نقرة واحدة، دون البحث في الأدراج والأقراص القديمة.",

      "feat.team.t": "عمل كل طبيب يبقى له",
      "feat.team.d":
        "رمز دخول وتوقيع وقائمة مرضى خاصة بكل طبيب. وتحدد الصلاحيات من يستطيع العرض أو التعديل أو التصدير.",

      "feat.backup.t": "نم مطمئنًا — أرشيفك في أمان",
      "feat.backup.d":
        "بنقرة واحدة يُنسخ كل شيء — المرضى والفيديوهات والتقارير — مشفّرًا. فالجهاز المسروق أو المتعطل يكلّفك قطعة إلكترونية فقط، لا عمرك المهني.",

      "rep.kicker": "المخرَج النهائي",
      "rep.h2": "تقرير يحمل هوية عيادتك، لا شكل البرامج الجاهزة",
      "rep.lead":
        "عرّف ترويسة التقارير وتذييلها مرة واحدة لتظهر في كل صفحة. يحتوي كل تقرير على المربعات التشريحية ثنائية اللغة، والنتائج والتشخيص والتوصيات، واللقطات التي اخترتها بالترتيب الذي حدّدته، وتوقيعك. حرّره كمسودة، ثم أنهِه، ثم اطبعه — كل ذلك داخل البرنامج.",
      "rep.chip1": "مربعات القولون والجهاز الهضمي العلوي",
      "rep.chip2": "من مسودة إلى تقرير نهائي",
      "rep.chip3": "معاينة طباعة مدمجة",
      "rep.chip4": "بالعربية والإنجليزية",

      "sec.kicker": "الأمان والخصوصية",
      "sec.h2": "بيانات مرضاك لا تغادر عيادتك",
      "sec.lead":
        "بلا سحابة، وبلا حسابات، وبلا اعتماد على الإنترنت. كل شيء مشفّر على جهازك، فالجهاز المسروق يعني خسارة قطعة إلكترونية لا فضيحة تسرّب بيانات. وهذا وعد يمكنك أن تقدّمه لمرضاك.",
      "sec.1t": "تشفير البيانات المخزنة",
      "sec.1d":
        "تُشفَّر أسماء المرضى وتواريخ ميلادهم كلٌّ على حدة بمعيار <code>AES-256-GCM</code>، وتُشفَّر فيديوهات الإجراءات ملفًا ملفًا، ويُشفَّر ملف قاعدة البيانات بالكامل. فالقرص المسروق لا يحوي إلا بيانات غير مقروءة.",
      "sec.2t": "تشغيل مشفّر",
      "sec.2d":
        "يُفكّ تشفير الفيديو أثناء التشغيل والتنقل فيه، لحظة بلحظة. ولا تُنشأ نسخة غير مشفّرة إلا عندما تختار التصدير بنفسك.",
      "sec.3t": "سجل تدقيق يصعب التلاعب به",
      "sec.3d":
        "يُسجَّل كل عرض أو تعديل أو تصدير أو طباعة في سجل «للإضافة فقط» مترابط بالتجزئة، ويمكن استعراضه في لوحة تدقيق بالتصفية ورسوم النشاط.",
      "sec.4t": "ترخيص مرتبط بالجهاز",
      "sec.4d":
        "الترخيص موقّع بخوارزمية <code>Ed25519</code> ومرتبط تشفيريًا بجهازك، فالنسخ المنقولة إلى أجهزة أخرى تُرفض ببساطة.",
      "sec.5t": "نقل بيانات المريض",
      "sec.5d":
        "يستطيع أي مريض استلام فيديو إجرائه ولقطاته وتقريره كملفات عادية — ميزة مدمجة تتوافق مع GDPR وقانون حماية البيانات الشخصية المصري.",
      "sec.6t": "مدة حفظ السجلات وفق القانون",
      "sec.6d":
        "تُحفظ السجلات 7 سنوات افتراضيًا تماشيًا مع قانون حماية البيانات الشخصية المصري، ويمكن للعيادة تعديلها.",
      "sec.note":
        "ملخص لحماية البيانات بلغة واضحة، مُعدّ لأقسام المشتريات ومسؤولي حماية البيانات، ويُقدَّم عند الطلب.",

      "hw.kicker": "يعمل مع ما تملكه بالفعل",
      "hw.h2": "بلا عتاد حصري، وبلا ارتباط بمورّد واحد",
      "hw.1t": "مناظير تناظرية — EasyCap",
      "hw.1d":
        "تتصل مخرجات المناظير التناظرية القديمة ببطاقة EasyCap رخيصة عبر USB، فتظهر صورة واضحة رغم انخفاض الدقة — وهي بالضبط ما يراه المنظار.",
      "hw.1s": "DirectShow · 720×480",
      "hw.2t": "رقمي عالي الدقة — بطاقة HDMI",
      "hw.2d":
        "تتصل المعالجات الحديثة ذات مخرج HDMI بأي بطاقة التقاط USB، ويحفظ التسجيل دقة 1080p كاملة.",
      "hw.2s": "1080p · USB 3.0",
      "hw.3t": "أي كاميرا ويب",
      "hw.3d":
        "تعمل قاعات التدريس والتجهيزات المؤقتة مع أي كاميرا ويب قياسية من نوع UVC — وصّلها وابدأ.",
      "hw.3s": "UVC · تشغيل فوري",
      "hw.4t": "إعدادات لكل جهاز وفحص مباشر",
      "hw.4d":
        "إعداد جودة مستقل لكل جهاز — SD أو HD أو مخصص — ودليل تأطير على المعاينة المباشرة، وصفحة فحص للجهاز قبل كل حالة. وتنتقل الأجهزة الضعيفة تلقائيًا إلى SD.",
      "hw.4s": "SD · HD · مخصص",

      "lic.kicker": "الترخيص",
      "lic.h2": "دفعة واحدة — وتبقى المحطة ملكك إلى الأبد",
      "lic.lead":
        "احسب بنفسك: مقعد PACS واحد يعني اشتراكًا سنويًا وعقد دعم فني. هنا دفعة واحدة فقط — وتبقى سجلاتك وتقاريرك وأرشيفك لك، سواء بقينا معك أم لا.",
      "lic.1t": "ترخيص دائم",
      "lic.1p": "لمرة واحدة",
      "lic.1p2": " · لكل جهاز",
      "lic.1l1": "ملكك إلى الأبد — بلا اشتراكات",
      "lic.1l2": "مرتبط بجهازك، ويعمل دون إنترنت",
      "lic.1l3": "اسم عيادتك ورقم الترخيص على كل تصدير",
      "lic.1l4": "الدعم والتحديثات مشمولة",
      "lic.1cta": "اطلب التفعيل",
      "lic.1flag": "الأكثر اختيارًا",
      "lic.2t": "كيف يتم التفعيل",
      "lic.2p": "عبر البريد",
      "lic.2p2": " · غالبًا في اليوم نفسه",
      "lic.2l1": "انسخ معرّف الجهاز من الإعدادات",
      "lic.2l2": "نرسل إليك ملف ترخيص .lic موقّعًا",
      "lic.2l3": "حمّله مرة واحدة، ويعمل بعدها دون إنترنت",
      "lic.2l4": "تصل التحديثات من داخل البرنامج",
      "lic.2cta": "راسل الدعم",
      "lic.3t": "ملكية تنتقل مع عيادتك",
      "lic.3p": "عيادتك",
      "lic.3p2": " · للسنوات القادمة",
      "lic.3l1": "نقل ملكية موقّع عند بيع العيادة",
      "lic.3l2": "إعادة إصدار الترخيص عند تغيير الجهاز",
      "lic.3l3": "تُفتح بياناتك بعبارة المرور التي تختارها",
      "lic.3l4": "سجلاتك تبقى لك، سواء بقينا معك أم لا",
      "lic.3cta": "اسأل عن التفاصيل",

      "faq.kicker": "الأسئلة الشائعة",
      "faq.h2": "إجابات عن الأسئلة التي يطرحها الأطباء فعلًا",
      "faq.q1": "هل يعمل فعلًا دون إنترنت؟",
      "faq.a1":
        "نعم — التسجيل ولقطات الشاشة والتقارير والطباعة والنسخ الاحتياطي كلها تعمل دون اتصال. وعند توفر الإنترنت يرسل البرنامج عند التشغيل إشعار تفعيل صغيرًا يتضمن رقم الترخيص ونسخة البرنامج وتجزئة مفتاح الجهاز، ولا يتضمن أي بيانات للمرضى. وإن لم يتوفر اتصال، يُتجاهل الإشعار بصمت ولا يتغير شيء آخر.",
      "faq.q2": "ما أجهزة الالتقاط المتوافقة؟",
      "faq.a2":
        "أي جهاز يتعرف عليه ويندوز كأنه كاميرا: بطاقات EasyCap للمناظير القديمة، وبطاقات التقاط HDMI لأجهزة المعالجة عالية الدقة، وكاميرات الويب العادية. يكتشف البرنامج الأجهزة المتصلة، ويحفظ إعدادات لكل جهاز، ويعرض معاينة مباشرة مع دليل تأطير قبل كل حالة.",
      "faq.q3": "أين تُحفظ بيانات مرضاي؟",
      "faq.a3":
        "على جهازك فقط، داخل قاعدة بيانات مشفّرة. لا يوجد حساب سحابي ولا مزامنة، ولا تُرسل بيانات المرضى إلى الخارج. والنسخ الاحتياطية ملفات تحت سيطرتك الكاملة، ومحتواها مشفّر أصلًا.",
      "faq.q4": "هل يمكن تصدير إجراء لمريض أو زميل؟",
      "faq.a4":
        "نعم — يُنتج التصدير الفيديو بعلامة مائية تحمل اسم العيادة، وصور اللقطات، وتقرير PDF، كلٌّ منها على حدة أو معًا في مجلد تختاره. ويمكنك قصّ بداية النسخة المُصدَّرة ونهايتها دون المساس بالأصل.",
      "faq.q5": "ماذا لو تعطّل جهاز العيادة؟",
      "faq.a5":
        "هناك طبقتا أمان. بياناتك محمية بعبارة مرور تختارها في أول يوم: استعد النسخة الاحتياطية على الجهاز الجديد وافتحها بعبارة المرور. ويُعاد إصدار ترخيصك مرتبطًا بالجهاز الجديد، فلا يضيع إلا القرص الصلب.",
      "faq.q6": "هل هو نظام DICOM / PACS؟",
      "faq.a6":
        "لا، وذلك عن قصد. فنظام DICOM يجلب رسوم تكامل وأعباء تدقيق لا تستطيع العيادات الصغيرة تحمّلها. التسجيلات ملفات MP4 عادية، واللقطات JPEG، والتقارير PDF — تُفتح على أي جهاز وإلى الأبد.",
      "faq.q7": "ما اللغات المدعومة؟",
      "faq.a7":
        "العربية والإنجليزية، بواجهة كاملة من اليمين إلى اليسار وطباعة ثنائية اللغة منذ الإصدار الأول — وليست ترجمة مُلحقة لاحقًا.",
      "faq.q8": "كم التكلفة؟",
      "faq.a8":
        "دفعة واحدة لكل جهاز، بلا اشتراكات ولا رسوم لكل إجراء ولا تجديد سنوي. يُحدَّد السعر عند طلب التفعيل، فراسلنا للحصول على عرض سعر لعيادتك.",

      "cta.h2": "هل أنت مستعد لمنظارك القادم؟",
      "cta.p":
        "راسلنا لطلب ترخيص عيادتك. يتم التفعيل بملف ترخيص موقّع تحمّله على جهازك.",
      "cta.primary": "اطلب ترخيصك",
      "cta.secondary": "تواصل معنا",
      "cta.fine": "ويندوز 10 / 11 (64 بت) · ترخيص لكل جهاز",

      "foot.tag":
        "تسجيل وتقارير المناظير التي تعمل دون إنترنت، صُمّمت للعيادات الصغيرة.",
      "foot.contact": "التواصل",
      "foot.links": "الموقع",
      "foot.bottom": "© 2026 كولوفيستا الطبية · Endoscopy Suite. جميع الحقوق محفوظة.",
      "foot.made": "صُنع بفخر في مصر · ويندوز · 64 بت"
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
