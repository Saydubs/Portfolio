import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debugger:true,
    lng: "en",
    resources: {
        en: {
            translation: {
                home: "Home",
                projects: "Projects",
                about: "About",
                contact: "Contact",
                heroimg_content_header: "HI, I'M A FREELANCER.",
                heroimg_content_text: "Front-End Developer.",
                education: "Education",
                university: "09.2016 - 06.2019 Donetsk National Technical University, Degree Earned: Bachelor of Information and Communication Technology",
                polytech: "09.2012 - 05.2016 Donetsk Polytechnic School, Degree Earned: Computer Network",
                about_me: "About me",
                socialLinks: "You can find me on social media",
                yourName: "Your name",
                message: "Message",
                textareaText: "Type your message here",
                submit: "Submit",
                view: "View",
                source: "Source",
                heroimg2AboutText: "Im a friendly Front-End Developer",
                heroimg2ProjectsText: "Some of my most recent works",
                heroimg2ContactText: "Lets have a chat",
                projectsText: "hi",

            },
        },
        ge: {
            translation: {
                home: "Startseite",
                projects: "Projekte",
                about: "Über mich",
                contact: "Kontakt",
                heroimg_content_header: "HALL0, ICH BIN FREELANCER.",
                heroimg_content_text: "Front-End-Entwickler.",
                education: "Bildung",
                university: "09.2016 - 06.2019 Donetsk National Technische Universität, Abschluss des Studiums: Bachelor Informations- und Kommunikationstechnik",
                polytech: "09.2012 - 05.2016 Donetsk Polytechnische Berufsfachschule, Abschluss: Computernetzwerktechniker",
                about_me: "Über mich",
                socialLinks: "Sie können mich in sozialen Medien finden",
                yourName: "Ihr Name",
                message: "Nachricht",
                textareaText: "Bitte geben Sie hier Ihre Nachricht ein",
                submit: "Absenden",
                view: "Anschauen",
                source: "Quelle",
                heroimg2AboutText: "Ich bin ein freundlicher Front-End-Entwickler",
                heroimg2ProjectsText: "Einige meiner Arbeiten",
                heroimg2ContactText: "Lass uns chatten",
                
            },
        }
    }
})