// "use client";

// // Extend the Window interface to include google
// declare global {
//   interface Window {
//     google: any;
//     googleTranslateElementInit?: () => void;
//   }
// }

// import React, { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// type Props = {};

// const allowedLanguages = [
//   { code: "id", label: "Bahasa Indonesia" },
//   { code: "ms", label: "Bahasa Malaysia" },
//   { code: "da", label: "Dansk" },
//   { code: "de", label: "Deutsch" },
//   { code: "en", label: "English" },
//   { code: "es", label: "Español" },
//   { code: "es-419", label: "Español Latinoamericano" }, // Latin America
//   { code: "fr", label: "Français" },
//   { code: "it", label: "Italiano" },
//   { code: "lt", label: "Lietuvių" },
//   { code: "nl", label: "Nederlands" },
//   { code: "no", label: "Norsk" },
//   { code: "pl", label: "Polski" },
//   { code: "pt", label: "Português" },
//   { code: "pt-BR", label: "Português Brasileiro" },
//   { code: "fi", label: "Suomi" },
//   { code: "sv", label: "Svenska" },
//   { code: "tr", label: "Türkçe" },
//   { code: "ru", label: "Русский" },
//   { code: "uk", label: "Українська" },
//   { code: "iw", label: "עברית" }, // Hebrew
//   { code: "ko", label: "한국어" },
//   { code: "ar", label: "العربية" },
//   { code: "ja", label: "日本語" },
//   { code: "zh-CN", label: "简体中文" },
//   { code: "zh-TW", label: "繁體中文 (台灣)" },
//   { code: "zh-HK", label: "繁體中文 (香港)" },
// ];

// const LanguageDropdown = (props: Props) => {
//   const [language, setLanguage] = useState("en");

//   const handleChangeLanguage = (lang: string) => {
//     document.cookie = `googtrans=/en/${lang};expires=Thu, 07-Mar-2047 20:22:40 GMT;path=/`;
//     if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
//       document.cookie = `googtrans=/en/${lang};expires=Thu, 07-Mar-2047 20:22:40 GMT;path=/;domain=.novixvpn.com`;
//     }
//     setLanguage(lang);
//     window.location.reload();
//   };

//   useEffect(() => {
//     const existingCookie = document.cookie
//       .split("; ")
//       .find((row) => row.startsWith("googtrans="));

//     const cookieLang = existingCookie?.split("/")[2] || null;

//     if (cookieLang) {
//       setLanguage(cookieLang);
//     }

//     if (typeof window !== "undefined") {
//       window.googleTranslateElementInit = () => {
//         new window.google.translate.TranslateElement(
//           {
//             pageLanguage: "en",
//             includedLanguages: allowedLanguages.map((l) => l.code).join(","),
//           },
//           "google_translate_element"
//         );
//       };
//       const script = document.createElement("script");
//       script.src =
//         "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div>
//       <div id="google_translate_element" style={{ display: "none" }}></div>
//       <Select value={language} onValueChange={handleChangeLanguage}>
//         <SelectTrigger className="notranslate outline-none border-none !bg-transparent focus:ring-0">
//           <SelectValue placeholder="Select Language" />
//         </SelectTrigger>
//         <SelectContent>
//           {allowedLanguages.map((lang) => (
//             <SelectItem
//               value={lang.code}
//               className="flex items-center gap-2"
//               key={lang.code}
//             >
//               <p className="notranslate text-sm font-normal text-gray-900 dark:text-gray-100">
//                 {lang.label}
//               </p>
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default LanguageDropdown;

"use client";

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit?: () => void;
  }
}

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const allowedLanguages = [
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ms", label: "Bahasa Malaysia" },
  { code: "da", label: "Dansk" },
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "es-419", label: "Español Latinoamericano" }, // Latin America
  { code: "fr", label: "Français" },
  { code: "it", label: "Italiano" },
  { code: "lt", label: "Lietuvių" },
  { code: "nl", label: "Nederlands" },
  { code: "no", label: "Norsk" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "pt-BR", label: "Português Brasileiro" },
  { code: "fi", label: "Suomi" },
  { code: "sv", label: "Svenska" },
  { code: "tr", label: "Türkçe" },
  { code: "ru", label: "Русский" },
  { code: "uk", label: "Українська" },
  { code: "iw", label: "עברית" }, // Hebrew
  { code: "ko", label: "한국어" },
  { code: "ar", label: "العربية" },
  { code: "ja", label: "日本語" },
  { code: "zh-CN", label: "简体中文" },
  { code: "zh-TW", label: "繁體中文 (台灣)" },
  { code: "zh-HK", label: "繁體中文 (香港)" },
];

const LanguageDropdown = () => {
  const [language, setLanguage] = useState("en");

  const handleChangeLanguage = (lang: string) => {
    console.log("Changing language to:", lang);
    document.cookie = `googtrans=/en/${lang};expires=Thu, 07-Mar-2047 20:22:40 GMT;path=/;SameSite=Lax;Secure`;
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "production") {
      document.cookie = `googtrans=/en/${lang};expires=Thu, 07-Mar-2047 20:22:40 GMT;path=/;domain=novixvpn.com;SameSite=Lax;Secure`;
    }
    console.log("Cookie set:", document.cookie);
    setLanguage(lang);

    // Programmatically change language if possible
    if (window.google && window.google.translate) {
      const translateSelect = document.querySelector(
        ".goog-te-combo"
      ) as HTMLSelectElement;
      if (translateSelect) {
        translateSelect.value = lang;
        translateSelect.dispatchEvent(new Event("change"));
      }
    } else {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  useEffect(() => {
    const existingCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="));
    const cookieLang = existingCookie?.split("/")[2] || "en";
    setLanguage(cookieLang);

    if (typeof window !== "undefined") {
      window.googleTranslateElementInit = () => {
        const translateElement = document.getElementById(
          "google_translate_element"
        );
        if (translateElement) {
          translateElement.innerHTML = "";
        }

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: allowedLanguages.map((l) => l.code).join(","),
          },
          "google_translate_element"
        );
      };

      const existingScript = document.querySelector(
        'script[src*="translate.google.com"]'
      );
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(script);

      return () => {
        if (script) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div>
      <div id="google_translate_element" style={{ display: "none" }}></div>
      <Select value={language} onValueChange={handleChangeLanguage}>
        <SelectTrigger className="notranslate outline-none border-none !bg-transparent focus:ring-0">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          {allowedLanguages.map((lang) => (
            <SelectItem
              value={lang.code}
              className="flex items-center gap-2"
              key={lang.code}
            >
              <p className="notranslate text-sm font-normal text-gray-900 dark:text-gray-100">
                {lang.label}
              </p>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageDropdown;
