// const translatedStrings = {
//     "From": {
//         fr: "From (FR)",
//         nl: "Van"
//     },
//     "To": {
//         fr: "To (FR)",
//         nl: "Naar"
//     },
//     "Leave": {
//         fr: "Leave (FR)",
//         nl: "Vertrek"
//     },
//     "Arrive": {
//         fr: "Arrive (FR)",
//         nl: "Aankomst"
//     },
//     "Plan Route": {
//         fr: "Plan Route (FR)",
//         nl: "Plan Route"
//     },
//     "Plan a route": {
//         fr: "Plan a route (FR)",
//         nl: "Plan route"
//     },
//     "Search a stop": {
//         fr: "Search a stop (FR)",
//         nl: "Zoek station"
//     },
//     "About": {
//         fr: "About (FR)",
//         nl: "Info"
//     }
// };

// function getString(en, lang) {
//     var translations = translatedStrings[en];
//     if (translations) {
//         return translations[lang];
//     }
//     return undefined;
// }

// function translate(lang) {
//     $('.translate-this').each(function (i, obj) {
//         if (obj) {
//             if (obj.tagName == "LABEL") {
//                 var val = getString(obj.innerHTML, lang);
//                 if (val) {
//                     $(obj).html(val);
//                 }
//             } else if (obj.tagName == "OPTION") {
//                 var val = getString(obj.innerHTML, lang);
//                 if (val) {
//                     $(obj).html(val);
//                 }
//             } else if (obj.tagName == "DIV") {
//                 var val = getString(obj.innerHTML, lang);
//                 if (val) {
//                     $(obj).html(val);
//                 }
//             } else {
//                 var val = getString(obj.innerHTML, lang);
//                 if (val) {
//                     $(obj).html(val);
//                 }
//             }
//         }
//     });
// }

// //set the correct language
// var language = 'nl';
// var userLang = navigator.language || navigator.userLanguage;
// if (userLang === 'nl' || userLang === 'fr') {
//     language = userLang;
// }
// translate(language);