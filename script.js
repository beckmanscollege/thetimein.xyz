const input = document.getElementById('city-input');
const clock = document.getElementById('clock');
const body = document.body;
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

// Lista över huvudstäder
const capitals = [
  { city: 'Abu Dhabi', timezone: 'Asia/Dubai' },
  { city: 'Amsterdam', timezone: 'Europe/Amsterdam' },
  { city: 'Ankara', timezone: 'Europe/Istanbul' },
  { city: 'Athens', timezone: 'Europe/Athens' },
  { city: 'Baghdad', timezone: 'Asia/Baghdad' },
  { city: 'Baku', timezone: 'Asia/Baku' },
  { city: 'Bangkok', timezone: 'Asia/Bangkok' },
  { city: 'Bogotá', timezone: 'America/Bogota' },
  { city: 'Brasilia', timezone: 'America/Sao_Paulo' },
  { city: 'Bratislava', timezone: 'Europe/Bratislava' },
  { city: 'Brussels', timezone: 'Europe/Brussels' },
  { city: 'Bucharest', timezone: 'Europe/Bucharest' },
  { city: 'Budapest', timezone: 'Europe/Budapest' },
  { city: 'Canberra', timezone: 'Australia/Sydney' },
  { city: 'Caracas', timezone: 'America/Caracas' },
  { city: 'Casablanca', timezone: 'Africa/Casablanca' },
  { city: 'Chicago', timezone: 'America/Chicago' },
  { city: 'Copenhagen', timezone: 'Europe/Copenhagen' },
  { city: 'Dhaka', timezone: 'Asia/Dhaka' },
  { city: 'Dublin', timezone: 'Europe/Dublin' },
  { city: 'Helsinki', timezone: 'Europe/Helsinki' },
  { city: 'Islamabad', timezone: 'Asia/Karachi' },
  { city: 'Kabul', timezone: 'Asia/Kabul' },
  { city: 'Kigali', timezone: 'Africa/Kigali' },
  { city: 'Kiev', timezone: 'Europe/Kiev' },
  { city: 'Kingston', timezone: 'America/Jamaica' },
  { city: 'Kinshasa', timezone: 'Africa/Kinshasa' },
  { city: 'Lisbon', timezone: 'Europe/Lisbon' },
  { city: 'London', timezone: 'Europe/London' },
  { city: 'Manila', timezone: 'Asia/Manila' },
  { city: 'Minsk', timezone: 'Europe/Minsk' },
  { city: 'Nairobi', timezone: 'Africa/Nairobi' },
  { city: 'New Delhi', timezone: 'Asia/Kolkata' },
  { city: 'New York', timezone: 'America/New_York' },
  { city: 'Oslo', timezone: 'Europe/Oslo' },
  { city: 'Ottawa', timezone: 'America/Toronto' },
  { city: 'Prague', timezone: 'Europe/Prague' },
  { city: 'Riyadh', timezone: 'Asia/Riyadh' },
  { city: 'San José', timezone: 'America/Costa_Rica' },
  { city: 'São Paulo', timezone: 'America/Sao_Paulo' },
  { city: 'Seoul', timezone: 'Asia/Seoul' },
  { city: 'Singapore', timezone: 'Asia/Singapore' },
  { city: 'Stockholm', timezone: 'Europe/Stockholm' },
  { city: 'Taipei', timezone: 'Asia/Taipei' },
  { city: 'Tehran', timezone: 'Asia/Tehran' },
  { city: 'Tokyo', timezone: 'Asia/Tokyo' },
  { city: 'Vancouver', timezone: 'America/Vancouver' },
  { city: 'Vienna', timezone: 'Europe/Vienna' },
  { city: 'Vilnius', timezone: 'Europe/Vilnius' },
  { city: 'Warsaw', timezone: 'Europe/Warsaw' },
  { city: 'Washington, D.C.', timezone: 'America/New_York' },
  { city: 'Wellington', timezone: 'Pacific/Auckland' },
  { city: 'Zagreb', timezone: 'Europe/Zagreb' },
  { city: 'Zurich', timezone: 'Europe/Zurich' },
  { city: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { city: 'San Francisco', timezone: 'America/Los_Angeles' },
  { city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo' },
  { city: 'Lagos', timezone: 'Africa/Lagos' },
  { city: 'Mumbai', timezone: 'Asia/Kolkata' },
  { city: 'Beijing', timezone: 'Asia/Shanghai' },
  { city: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { city: 'Dubai', timezone: 'Asia/Dubai' },
  { city: 'Shenzhen', timezone: 'Asia/Shanghai' },
  { city: 'Lahore', timezone: 'Asia/Karachi' },
  { city: 'Delhi', timezone: 'Asia/Kolkata' },
  { city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur' },
  { city: 'Jakarta', timezone: 'Asia/Jakarta' },
  { city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
  { city: 'Istanbul', timezone: 'Europe/Istanbul' },
  { city: 'Paris', timezone: 'Europe/Paris' },
  { city: 'Berlin', timezone: 'Europe/Berlin' },
  { city: 'Madrid', timezone: 'Europe/Madrid' },
  { city: 'Mexico City', timezone: 'America/Mexico_City' },
  { city: 'Toronto', timezone: 'America/Toronto' },
  { city: 'Sydney', timezone: 'Australia/Sydney' },
  { city: 'Moscow', timezone: 'Europe/Moscow' },
  { city: 'Rome', timezone: 'Europe/Rome' },
  { city: 'Cairo', timezone: 'Africa/Cairo' },
  { city: 'Lima', timezone: 'America/Lima' },
  { city: 'Addis Ababa', timezone: 'Africa/Addis_Ababa' },
  { city: 'Algiers', timezone: 'Africa/Algiers' },
  { city: 'Antananarivo', timezone: 'Indian/Antananarivo' },
  { city: 'Asunción', timezone: 'America/Asuncion' },
  { city: 'Bamako', timezone: 'Africa/Bamako' },
  { city: 'Banjul', timezone: 'Africa/Banjul' },
  { city: 'Beirut', timezone: 'Asia/Beirut' },
  { city: 'Belgrade', timezone: 'Europe/Belgrade' },
  { city: 'Cayenne', timezone: 'America/Cayenne' },
  { city: 'Damascus', timezone: 'Asia/Damascus' },
  { city: 'Dodoma', timezone: 'Africa/Dar_es_Salaam' },
  { city: 'Doha', timezone: 'Asia/Qatar' },
  { city: 'Freetown', timezone: 'Africa/Freetown' },
  { city: 'Gaborone', timezone: 'Africa/Gaborone' },
  { city: 'Georgetown', timezone: 'America/Guyana' },
  { city: 'Havana', timezone: 'America/Havana' },
  { city: 'Harare', timezone: 'Africa/Harare' },
  { city: 'Honiara', timezone: 'Pacific/Guadalcanal' },
  { city: 'Johannesburg', timezone: 'Africa/Johannesburg' },
  { city: 'Libreville', timezone: 'Africa/Libreville' },
  { city: 'Lusaka', timezone: 'Africa/Lusaka' },
  { city: 'Malabo', timezone: 'Africa/Malabo' },
  { city: 'Maputo', timezone: 'Africa/Maputo' },
  { city: 'Monrovia', timezone: 'Africa/Monrovia' },
  { city: 'Niamey', timezone: 'Africa/Niamey' },
  { city: 'Port Louis', timezone: 'Indian/Mauritius' },
  { city: 'Porto-Novo', timezone: 'Africa/Porto-Novo' },
  { city: 'Reykjavik', timezone: 'Atlantic/Reykjavik' },
  { city: 'Tashkent', timezone: 'Asia/Tashkent' },
  { city: 'Windhoek', timezone: 'Africa/Windhoek' },
{ city: 'Andorra la Vella', timezone: 'Europe/Andorra' },
{ city: 'Belgrade', timezone: 'Europe/Belgrade' },
{ city: 'Bergen', timezone: 'Europe/Oslo' },
{ city: 'Bern', timezone: 'Europe/Zurich' },
{ city: 'Brno', timezone: 'Europe/Prague' },
{ city: 'Cardiff', timezone: 'Europe/London' },
{ city: 'Cologne', timezone: 'Europe/Berlin' },
{ city: 'Cork', timezone: 'Europe/Dublin' },
{ city: 'Dresden', timezone: 'Europe/Berlin' },
{ city: 'Edinburgh', timezone: 'Europe/London' },
{ city: 'Geneva', timezone: 'Europe/Zurich' },
{ city: 'Gibraltar', timezone: 'Europe/Gibraltar' },
{ city: 'Hamburg', timezone: 'Europe/Berlin' },
{ city: 'Innsbruck', timezone: 'Europe/Vienna' },
{ city: 'Lausanne', timezone: 'Europe/Zurich' },
{ city: 'Leeds', timezone: 'Europe/London' },
{ city: 'Leipzig', timezone: 'Europe/Berlin' },
{ city: 'Liverpool', timezone: 'Europe/London' },
{ city: 'Lyon', timezone: 'Europe/Paris' },
{ city: 'Marseille', timezone: 'Europe/Paris' },
{ city: 'Naples', timezone: 'Europe/Rome' },
{ city: 'Nuremberg', timezone: 'Europe/Berlin' },
{ city: 'Porto', timezone: 'Europe/Lisbon' },
{ city: 'Rotterdam', timezone: 'Europe/Amsterdam' },
{ city: 'Salzburg', timezone: 'Europe/Vienna' },
{ city: 'Seville', timezone: 'Europe/Madrid' },
{ city: 'Thessaloniki', timezone: 'Europe/Athens' },
{ city: 'Turin', timezone: 'Europe/Rome' },
{ city: 'Valencia', timezone: 'Europe/Madrid' },
{ city: 'Zaragoza', timezone: 'Europe/Madrid' },
{ city: 'Anchorage', timezone: 'America/Anchorage' },
{ city: 'Baltimore', timezone: 'America/New_York' },
{ city: 'Boston', timezone: 'America/New_York' },
{ city: 'Calgary', timezone: 'America/Edmonton' },
{ city: 'Charlotte', timezone: 'America/New_York' },
{ city: 'Denver', timezone: 'America/Denver' },
{ city: 'Detroit', timezone: 'America/Detroit' },
{ city: 'Houston', timezone: 'America/Chicago' },
{ city: 'Kansas City', timezone: 'America/Chicago' },
{ city: 'Philadelphia', timezone: 'America/New_York' },
];

let clockInterval;

// Funktion för att uppdatera klockan och webbläsarens titel
const updateClock = (timezone) => {
  const now = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
  const formattedTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
  const formattedDate = now.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
  });
  clock.textContent = `${formattedTime} ${formattedDate}`;
  document.title = `${formattedTime} ${formattedDate}`;
};

// Funktion för att starta klockan
const startClock = (timezone) => {
  if (clockInterval) clearInterval(clockInterval);
  updateClock(timezone);
  clockInterval = setInterval(() => updateClock(timezone), 1000);
};

// Hämta tiden för vald stad och uppdatera färger
const fetchTimeForCapital = (city) => {
  const capital = capitals.find((c) => c.city.toLowerCase() === city.toLowerCase());
  if (!capital) {
    alert('City not found. Please try a capital city.');
    return;
  }
  updateColors(); // Uppdatera färger när en stad väljs
  startClock(capital.timezone);
};

// Slumpmässig färgändring
const randomColor = () => {
  const randomHex = () => Math.floor(Math.random() * 256);
  return `rgb(${randomHex()}, ${randomHex()}, ${randomHex()})`;
};

const updateColors = () => {
  const bgColor = randomColor();
  const textColor = randomColor();

  body.style.backgroundColor = bgColor;
  body.style.color = textColor;
  input.style.backgroundColor = textColor;
  input.style.color = bgColor;
  leftArrow.style.color = textColor;
  rightArrow.style.color = textColor;

  // Uppdatera färgen för h1
  const pageTitle = document.getElementById('page-title'); // Lägg till detta
  if (pageTitle) {
    pageTitle.style.color = textColor; // H1 får samma färg som pilarna
  }
};


// Autocomplete
const handleAutocomplete = () => {
  const suggestions = document.getElementById('suggestions');
  const query = input.value.toLowerCase();

  const matches = capitals
    .filter((c) => c.city.toLowerCase().startsWith(query))
    .slice(0, 5);

  suggestions.innerHTML = '';
  matches.forEach((match) => {
    const option = document.createElement('div');
    option.textContent = match.city;
    option.className = 'suggestion-item';
    option.onclick = () => {
      input.value = match.city;
      fetchTimeForCapital(match.city);
      suggestions.innerHTML = '';
    };
    suggestions.appendChild(option);
  });
};

input.addEventListener('input', handleAutocomplete);
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const city = input.value.trim();
    if (city) fetchTimeForCapital(city);
  }
});

clock.textContent = ''; // Döljer klockan tills en stad väljs
