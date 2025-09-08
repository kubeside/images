import { useState } from 'react'
import { Calendar, Clock, Users, Mail, Phone, MapPin, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import './App.css'

// Import images
import produksjonIcon from './assets/icon_produksjon_historiefortelling.png'
import teknologiIcon from './assets/icon_teknologiforstaelse.png'
import konseptIcon from './assets/icon_konseptutvikling_programmering.png'
import yrkesfagligIcon from './assets/icon_yrkesfaglig_fordypning.png'
import logo1 from './assets/Logo_IM.jpg'
import mainpic1 from './assets/three_people_centered.png'
import bfklogo from './assets/buskerud.jpg'



function App() {
  const [currentMonth, setCurrentMonth] = useState(0) // 0 = August, 1 = September, etc.

  const months = [
    {
      name: 'August 2025',
      projects: [
        {
          week: 'Uke 34',
          title: 'Oppstart',
          subject: 'Alle fag',
          method: 'Individuelt arbeid med veiledning',
          assessment: 'Ingen vurdering'
        },
        {
          week: 'Uke 35',
          title: 'Oppstart',
          subject: 'Alle fag',
          method: 'Individuelt arbeid med veiledning',
          assessment: 'Ingen vurdering'
        }

        
      ]
    },
    {
      name: 'September 2025',
      projects: [
        {
          week: 'Uke 36',
          title: 'HTML',
          subject: 'Konseptutvikling og programmering',
          method: 'Gruppearbeid (2-3 elever)',
          assessment: 'Godkjent/Ikke godkjent'
        },
        {
          week: 'Uke 37',
          title: 'Grafisk design - Photoshop',
          subject: 'Produksjon oh historiefortelling',
          method: 'Individuelt, gruppearbeid',
          assessment: 'Godkjent/Ikke godkjent'
        },
        {
          week: 'Uke 38',
          title: 'AI - kunsting intelligens',
          subject: 'Teknologiforståelse',
          method: 'Individuell, gruppearbeid',
          assessment: 'Godkjent/Ikke god godkjent'
        },
        {
          week: 'Uke 39',
          title: 'Video 1',
          subject: 'Teknologiforståelse',
          method: 'Gruppearbeid',
          assessment: 'Godkjent/Ikke godkjent'
        },
        {
          week: 'Uke 40',
          title: 'Høstferie',
          subject: '-',
          method: '-',
          assessment: '-'
        }
      ]
    },
    {
      name: 'Oktober 2025',
      projects: [
        {
          week: 'Uke 41',
          title: 'CSS1 - webutvikling',
          subject: 'Konseptutvikling og programmering',
          method: 'Gruppearbeid',
          assessment: 'Godkjent/Ikke godkjent'
        }
        // {
        //   week: 'Uke 43',
        //   title: 'Fordypningsprosjekt - Valgfritt tema',
        //   subject: 'Yrkesfaglig fordypning',
        //   method: 'Individuelt eller gruppe',
        //   assessment: 'Godkjent/Ikke godkjent'
        // }
      ]
    },
    {
      name: 'November 2025',
      projects: [
        // {
        //   week: 'Uke 45',
        //   title: 'Tverrfaglig prosjekt - "Digital kampanje"',
        //   subject: 'Alle fag',
        //   method: 'Store grupper (4-5 elever)',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'Desember 2025',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'Januar 2026',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'Februar 2026',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'Mars 2026',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'April 2026',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'Mai 2026',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    },
    {
      name: 'Juni 2026',
      projects: [
        // {
        //   week: 'Uke 48',
        //   title: 'Eksamen og porteføljeinnlevering',
        //   subject: 'Alle fag',
        //   method: 'Individuell presentasjon',
        //   assessment: 'Karakter 1-6'
        // }
      ]
    }
    
  ]

  const meetings = [
    {
      dato: "23.September kl 1800 - 1900",
      icon: teknologiIcon,
      tema: 'Vi skal presentere appen for deling av informasjon og viktige datoer.',
      topics: ['Generell informasjon om skolen']
    }
  ]

  const subjects = [
    {
      title: 'Produksjon og historiefortelling',
      icon: produksjonIcon,
      description: 'I dette faget lærer elevene å skape engasjerende innhold gjennom ulike medier. Faget kombinerer kreativ produksjon med evnen til å fortelle meningsfulle historier.',
      topics: ['Digital storytelling og narrativteknikker', 'Video- og lydproduksjon', 'Grafisk design og visuell kommunikasjon', 'Prosjektplanlegging og produksjonsprosesser']
    },
    {
      title: 'Teknologiforståelse',
      icon: teknologiIcon,
      description: 'Dette faget gir elevene grunnleggende forståelse av hvordan teknologi fungerer og påvirker samfunnet. Elevene lærer å analysere og vurdere teknologiske løsninger.',
      topics: ['Digitale systemer og infrastruktur', 'Cybersikkerhet og personvern', 'Teknologiens samfunnspåvirkning', 'Fremtidige teknologitrender']
    },
    {
      title: 'Konseptutvikling og programmering',
      icon: konseptIcon,
      description: 'Faget fokuserer på kreativ problemløsning og utvikling av digitale løsninger. Elevene lærer både konseptuell tenkning og praktisk programmering.',
      topics: ['Designtenkning og idéutvikling', 'Grunnleggende programmering (Python, JavaScript)', 'Brukeropplevelse (UX) og grensesnittdesign (UI)', 'Prototyping og testing']
    },
    {
      title: 'Yrkesfaglig fordypning',
      icon: yrkesfagligIcon,
      description: 'Dette faget gir elevene mulighet til å fordype seg i spesifikke områder innen IKT og medier, tilpasset deres interesser og karrieremål.',
      topics: ['Spesialisering innen valgte fagområder', 'Praktisk prosjektarbeid', 'Samarbeid med næringsliv', 'Karriereveiledning og jobbforberedelse']
    }
  ]

  const contacts = [
    { role: 'Kontaktlærer A-klasse', name: 'Edgardo Daniel Vidal Salinas', email: 'edgardos@bfk.no' },
    { role: 'Kontaktlærer B-klasse / Teamleder IM VG1', name: 'Yngve Reime Erlandsen', email: 'yngveer@bfk.no' },
    { role: 'Kontaktlærer C-klasse', name: 'Ole Christian Slyngstad', email: 'olesl@bfk.no' },
    { role: 'Rågiver', name: 'Levi Malm Pettersen', email: 'levip@bfk.no' }
  ]

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev + 1) % months.length)
  }

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev - 1 + months.length) % months.length)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-4">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* <img src={logo1} alt="Åssiden VGS Logo" className="h-16 w-auto" /> */}
              {/* <h1 className="text-lg sm:text-xl lg:text-2xl text-black-600">InformasjonsPortalen VG1 IM</h1> */}
              <img src={bfklogo} alt="Buskerud fylkeskommune logo" class="h-12 w-auto" />
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#kalender" className="text-gray-700 hover:text-blue-600 transition-colors">Kalender</a>
              <a href="#fag" className="text-gray-700 hover:text-blue-600 transition-colors">Fag</a>
              <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
              <a href="#timeplan" className="text-gray-700 hover:text-blue-600 transition-colors">Timeplan</a>
            </nav>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-600 to-gray-800 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Velkommen til InformasjonsPortalen VG1 IM
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">
                Her finner du alt du trenger å vite om prosjekter, foreldremøter, kontaktinformasjon og mye mer.
                Denne appen er fortsatt under utvikling. 
              </p>
              {/*<Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                Utforsk prosjektene
              </Button> */}

            </div>
            <div className="flex justify-center order-first lg:order-last">
              <img src={logo1} alt="" className="w-full max-w-sm sm:max-w-md lg:max-w-full h-auto rounded-lg shadow-lg" />
              
            </div>
          </div>
        </div>
      </section>

      <section id="timeplan">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-8 sm:mb-12">
           
          </div>

        </div>

      </section>

      {/* Calendar Section */}
      <section id="kalender" className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Prosjektkalender</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Oversikt over alle prosjekter, arbeidsmetoder og vurderingsformer</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <Button variant="outline" onClick={prevMonth} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4">
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Forrige</span>
                <span className="sm:hidden">←</span>
              </Button>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 text-center">{months[currentMonth].name}</h3>
              <Button variant="outline" onClick={nextMonth} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4">
                <span className="hidden sm:inline">Neste</span>
                <span className="sm:hidden">→</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </Button>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {months[currentMonth].projects.map((project, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2 sm:pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-base sm:text-lg">{project.title}</CardTitle>
                      <span className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full self-start">
                        {project.week}
                      </span>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-gray-600">{project.subject}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 gap-2 sm:gap-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{project.method}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-500 flex-shrink-0" />
                        <span className="text-xs sm:text-sm text-gray-700">{project.assessment}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      

      <section id="ViktigInfo" className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Dato for foreldremøter 2025-2026</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600"></p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8">
            {meetings.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <img src={subject.icon} alt={subject.title} className="w-10 h-10 sm:w-12 sm:h-12" />
                    <CardTitle className="text-lg sm:text-xl">{subject.dato}</CardTitle>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {subject.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Aktuelle saker</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {subject.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                        <span className="text-xs sm:text-sm text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </section>


      {/* Contact Section */}
      <section id="kontakt" className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-4">Kontaktinformasjon</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Ta kontakt med faglærere og administrasjon</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Faglærere og kontaktinformasjon</h3>
              <div className="space-y-3 sm:space-y-4">
                {contacts.map((contact, index) => (
                  <Card key={index}>
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start sm:items-center gap-3">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mt-1 sm:mt-0 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900 text-sm sm:text-base">{contact.name}</h4>
                          <p className="text-xs sm:text-sm text-gray-600">{contact.role}</p>
                          <a href={`mailto:${contact.email}`} className="text-xs sm:text-sm text-blue-600 hover:text-blue-800 break-all">
                            {contact.email}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Praktisk informasjon</h3>
              <Card>
                <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-start sm:items-center gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 sm:mt-0 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">Avdelingsleder</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Kyrre Brekke Haakaas</p>
                      <p className="text-xs sm:text-sm text-blue-600 break-all">kyrreh@bfk.no</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start sm:items-center gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 mt-1 sm:mt-0 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm sm:text-base">Kontor</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Rom 201, 2. etasje - Bygg G</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">InformasjonsPortalen</h3>
            <p className="text-gray-400 mb-6">VG1 Informasjonsteknologi og mediekommunikasjon - Åssiden videregående skole</p>
            
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/imavgs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>

              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            
            <div className="text-sm text-gray-500 border-t border-gray-800 pt-4">
              <p>&copy; 2025 Åssiden videregående skole. Alle rettigheter reservert.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

