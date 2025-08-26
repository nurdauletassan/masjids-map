import shafranImage from '../../assets/shafran.jpg';

export const mockPlaces = [
  {
    id: 1,
    name: "Mega Center Prayer Room",
    lat: 43.2367,
    lng: 76.9091,
    address: "Mega Center, Almaty",
    description: "Spacious and clean prayer room inside Mega shopping mall. This modern facility offers separate prayer areas for men and women, with comfortable seating and proper ventilation. The prayer room is located on the second floor near the food court, making it easily accessible for shoppers and visitors. The facility is open during mall hours and provides a peaceful environment for prayer. There are also ablution facilities available nearby. The prayer room is well-maintained and regularly cleaned to ensure a hygienic environment for all worshippers.",
    photo: shafranImage,
    details: {
      address: "Mega Center, Almaty",
      operatingHours: "Everyday, 10:00 AM – 22:00 PM",
      built: "Constructed in 2010 as part of Mega Center shopping complex, designed for modern urban lifestyle",
      facilities: "Provides separate prayer areas for men and women, modern ablution facilities, air conditioning, and comfortable seating. Wheelchair accessible with elevator access.",
      capacity: "Serves 50-100 worshippers daily, with capacity for 200 during peak hours",
      architecture: "Modern minimalist design with clean lines, large windows for natural light, and contemporary Islamic geometric patterns. Features a prayer hall with acoustic design for clear audio."
    },
    facts: [
      { number: "2010", label: "CONSTRUCTION YEAR" },
      { number: "200", label: "MAX CAPACITY" },
      { number: "24/7", label: "SECURITY ACCESS" },
      { number: "100%", label: "WHEELCHAIR ACCESSIBLE" }
    ],
    members: [
      { name: "Imam Kairat Nurmagambetov", role: "Main Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam1" },
      { name: "Aidar Zhumabayev", role: "Assistant Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam2" },
      { name: "Bekzat Tolegenov", role: "Qur'an Teacher", photo: "https://via.placeholder.com/60x60.png?text=Imam3" },
      { name: "Daulet Kenzhebayev", role: "Community Coordinator", photo: "https://via.placeholder.com/60x60.png?text=Imam4" }
    ]
  },
  {
    id: 2,
    name: "Nur-Mubarak University Educational Mosque",
    lat: 43.2350,
    lng: 76.9200,
    address: "Dostyk Ave, Almaty",
    description: "Traditional mosque with separate male/female areas. This historic mosque features beautiful Islamic architecture and is one of the most prominent religious buildings in the city. The mosque has a large prayer hall that can accommodate hundreds of worshippers. The building includes a minaret and traditional dome design. The mosque offers regular prayer services and is particularly busy during Friday prayers. The facility includes parking space and is easily accessible by public transportation. The mosque also hosts religious education classes and community events.",
    photo: shafranImage,
    details: {
      address: "Dostyk Ave, Almaty",
      operatingHours: "Everyday, 5:00 AM – 22:00 PM",
      built: "Constructed in 1997 as a gift from Egypt to Kazakhstan, it's integrated within a multifunctional Islamic center",
      facilities: "Provides separate prayer areas for women and ablution areas (wudu accessible to all. On-site parking and full wheelchair accessibility.",
      capacity: "The complex includes several thousand students and serves around 300–400 regular worshippers, rising to 1,300–1,500 during major events",
      architecture: "Features a white dome with colorful stained-glass windows that cast warm, atmospheric light inside. The minaret is elegant and refined, reflecting oriental design traditions. Inside, you'll find copper chandeliers and mosaic-decorated windows, particularly on the western wall."
    },
    facts: [
      { number: "1997", label: "GIFT FROM EGYPT" },
      { number: "2001", label: "OFFICIALLY OPENED" },
      { number: "~60%", label: "TRAINS OF KAZAKHSTAN'S IMAMS" },
      { number: "~200", label: "ANNUAL GRADUATES" }
    ],
    members: [
      { name: "Sheikh Erzhan Suleimenov", role: "Main imam", photo: "https://via.placeholder.com/60x60.png?text=Imam1" },
      { name: "Nurlan Abdirahman", role: "Naib Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam2" },
      { name: "Marat Zhandosuly", role: "Imam, Qur'an Lessons", photo: "https://via.placeholder.com/60x60.png?text=Imam3" },
      { name: "Damir Akhmetov", role: "Imam, Qur'an Lessons", photo: "https://via.placeholder.com/60x60.png?text=Imam4" }
    ]
  },
  {
    id: 3,
    name: "Al-Farabi Business Center Mosque",
    lat: 43.2390,
    lng: 76.9120,
    address: "Al-Farabi Business Center",
    description: "Small private prayer room for office workers. This compact prayer facility is designed specifically for employees working in the business center. The prayer room is located on the ground floor and is accessible 24/7 with building access cards. The facility includes basic amenities like prayer mats and a small ablution area. The room is designed to be quiet and peaceful, providing a perfect environment for prayer breaks during work hours. The facility is maintained by the building management and is kept clean and well-lit at all times.",
    photo: shafranImage,
    details: {
      address: "Al-Farabi Business Center",
      operatingHours: "Everyday, 6:00 AM – 23:00 PM",
      built: "Established in 2015 as part of the business center development, designed for corporate employees",
      facilities: "Compact prayer room with basic amenities, separate areas for men and women, modern ablution facilities, and secure access with building cards.",
      capacity: "Serves 20-50 worshippers daily, primarily office workers from surrounding businesses",
      architecture: "Contemporary office building design with clean, professional aesthetic. Features soundproofing for quiet prayer environment and modern lighting systems."
    },
    facts: [
      { number: "2015", label: "ESTABLISHED" },
      { number: "50", label: "MAX CAPACITY" },
      { number: "24/7", label: "BUILDING ACCESS" },
      { number: "100+", label: "DAILY VISITORS" }
    ],
    members: [
      { name: "Imam Serik Baimukhanov", role: "Main Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam1" },
      { name: "Askar Toleubayev", role: "Assistant Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam2" },
      { name: "Ruslan Karimov", role: "Community Liaison", photo: "https://via.placeholder.com/60x60.png?text=Imam3" },
      { name: "Zhanat Kenzhebayev", role: "Facility Manager", photo: "https://via.placeholder.com/60x60.png?text=Imam4" }
    ]
  },
  {
    id: 4,
    name: "Almaty Airport Prayer Room",
    lat: 43.3540,
    lng: 77.0370,
    address: "Almaty International Airport",
    description: "Available 24/7 in international terminal, 2nd floor. This prayer room serves travelers and airport staff, providing a quiet space for prayer regardless of flight schedules. The facility is located near the international departure gates and is easily accessible from both domestic and international terminals. The prayer room includes separate areas for men and women, with prayer mats and copies of the Quran available. The room is maintained by airport staff and is kept clean and well-lit. There are also ablution facilities nearby. The prayer room is particularly useful for travelers with long layovers or early morning flights.",
    photo: shafranImage,
    details: {
      address: "Almaty International Airport",
      operatingHours: "24/7 - Available for all flights",
      built: "Opened in 2018 as part of airport modernization, designed for international travelers",
      facilities: "International-standard prayer facilities with separate areas for men and women, modern ablution rooms, prayer mats, and Quran copies in multiple languages.",
      capacity: "Serves 100-300 travelers daily, with capacity for 50 worshippers simultaneously",
      architecture: "Modern airport design with soundproofing, international signage, and comfortable seating. Features large windows with views of aircraft and runways."
    },
    facts: [
      { number: "2018", label: "OPENED" },
      { number: "24/7", label: "AVAILABLE" },
      { number: "50", label: "SIMULTANEOUS CAPACITY" },
      { number: "300+", label: "DAILY TRAVELERS" }
    ],
    members: [
      { name: "Imam Maksat Zhumabekov", role: "Airport Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam1" },
      { name: "Amanzhol Kenzhebayev", role: "Assistant Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam2" },
      { name: "Baurzhan Toleubayev", role: "Multilingual Support", photo: "https://via.placeholder.com/60x60.png?text=Imam3" },
      { name: "Daniyar Nurmagambetov", role: "Facility Coordinator", photo: "https://via.placeholder.com/60x60.png?text=Imam4" }
    ]
  },
  {
    id: 5,
    name: "SDU Campus Mosque",
    lat: 43.2520,
    lng: 76.8900,
    address: "SDU Campus",
    description: "Modern mosque on campus for students and faculty. This contemporary mosque serves the university community and is designed with modern architectural elements while maintaining traditional Islamic design principles. The mosque can accommodate several hundred worshippers and includes separate prayer areas for men and women. The facility is open daily and is particularly busy during prayer times and Friday prayers. The mosque also serves as a community center, hosting religious education classes, study groups, and cultural events. The building includes a library with Islamic literature and study rooms for students. The mosque is easily accessible from all parts of the campus and includes parking facilities.",
    photo: shafranImage,
    details: {
      address: "SDU Campus",
      operatingHours: "Everyday, 6:00 AM – 23:00 PM",
      built: "Constructed in 2012 as part of SDU campus development, designed for student community",
      facilities: "Modern campus mosque with separate prayer areas, study rooms, Islamic library, and student lounge. Full accessibility and parking available.",
      capacity: "Serves 200-500 students daily, with capacity for 300 worshippers during Friday prayers",
      architecture: "Contemporary campus architecture blending modern design with Islamic elements. Features large prayer hall, study areas, and community spaces with natural lighting."
    },
    facts: [
      { number: "2012", label: "CAMPUS ESTABLISHED" },
      { number: "300", label: "FRIDAY CAPACITY" },
      { number: "500+", label: "STUDENT VISITORS" },
      { number: "15+", label: "STUDY ROOMS" }
    ],
    members: [
      { name: "Imam Almas Zhumabayev", role: "Campus Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam1" },
      { name: "Erlan Kenzhebayev", role: "Student Imam", photo: "https://via.placeholder.com/60x60.png?text=Imam2" },
      { name: "Bekzat Tolegenov", role: "Qur'an Teacher", photo: "https://via.placeholder.com/60x60.png?text=Imam3" },
      { name: "Aidar Nurmagambetov", role: "Student Coordinator", photo: "https://via.placeholder.com/60x60.png?text=Imam4" }
    ]
  }
];

export const calculateMapCenter = (places) => ({
  lat: places.reduce((sum, place) => sum + place.lat, 0) / places.length,
  lng: places.reduce((sum, place) => sum + place.lng, 0) / places.length
});
