// Mapa de países para extracción de banderas sin API externa
const flagMap = {
  "Mexico": "mx", "South Africa": "za", "South Korea": "kr", "Czechia": "cz",
  "Canada": "ca", "Bosnia and Herzegovina": "ba", "USA": "us", "Paraguay": "py",
  "Qatar": "qa", "Switzerland": "ch", "Brazil": "br", "Morocco": "ma",
  "Haiti": "ht", "Scotland": "gb-sct", "Australia": "au", "Turkiye": "tr",
  "Germany": "de", "Curacao": "cw", "Netherlands": "nl", "Japan": "jp",
  "Ivory Coast": "ci", "Ecuador": "ec", "Sweden": "se", "Tunisia": "tn",
  "Spain": "es", "Cape Verde": "cv", "Belgium": "be", "Egypt": "eg",
  "Saudi Arabia": "sa", "Uruguay": "uy", "Iran": "ir", "New Zealand": "nz",
  "France": "fr", "Senegal": "sn", "Iraq": "iq", "Norway": "no",
  "Argentina": "ar", "Algeria": "dz", "Austria": "at", "Jordan": "jo",
  "Portugal": "pt", "DR Congo": "cd", "England": "gb-eng", "Croatia": "hr",
  "Ghana": "gh", "Panama": "pa", "Uzbekistan": "uz"
};

const getFlagUrl = (teamName) => {
  const code = flagMap[teamName];
  return code ? `https://flagcdn.com/w40/${code}.png` : `https://placehold.co/40x40/eae7e8/59413f?text=?`;
};

const stadiumMap = {
  "Mexico-South Africa": "Estadio Ciudad de México (Ciudad de México)",
  "South Korea-Czechia": "Estadio Guadalajara (Guadalajara)",
  "Canada-Bosnia and Herzegovina": "Estadio de Toronto (Toronto)",
  "USA-Paraguay": "Estadio Los Angeles (Los Ángeles)",
  "Qatar-Switzerland": "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
  "Brazil-Morocco": "Estadio Nueva York/Nueva Jersey (Nueva Jersey)",
  "Haiti-Scotland": "Estadio Boston (Boston)",
  "Australia-Turkiye": "Estadio BC Place Vancouver (Vancouver)",
  "Germany-Curacao": "Estadio Houston (Houston)",
  "Netherlands-Japan": "Estadio Dallas (Dallas)",
  "Ivory Coast-Ecuador": "Estadio Filadelfia (Filadelfia)",
  "Sweden-Tunisia": "Estadio Monterrey (Monterrey)",
  "Spain-Cape Verde": "Estadio Atlanta (Atlanta)",
  "Belgium-Egypt": "Estadio de Seattle (Seattle)",
  "Saudi Arabia-Uruguay": "Estadio Miami (Miami)",
  "Iran-New Zealand": "Estadio Los Angeles (Los Ángeles)",
  "France-Senegal": "Estadio Nueva York/Nueva Jersey (Nueva Jersey)",
  "Iraq-Norway": "Estadio Boston (Boston)",
  "Argentina-Algeria": "Estadio Kansas City (Kansas City)",
  "Austria-Jordan": "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
  "Portugal-DR Congo": "Estadio Houston (Houston)",
  "England-Croatia": "Estadio Dallas (Dallas)",
  "Ghana-Panama": "Estadio de Toronto (Toronto)",
  "Uzbekistan-Colombia": "Estadio Ciudad de México (Ciudad de México)",
  "Czechia-South Africa": "Estadio Atlanta (Atlanta)",
  "Switzerland-Bosnia and Herzegovina": "Estadio Los Angeles (Los Ángeles)",
  "Canada-Qatar": "Estadio BC Place Vancouver (Vancouver)",
  "Mexico-South Korea": "Estadio Guadalajara (Guadalajara)",
  "USA-Australia": "Estadio de Seattle (Seattle)",
  "Scotland-Morocco": "Estadio Boston (Boston)",
  "Brazil-Haiti": "Estadio Filadelfia (Filadelfia)",
  "Turkiye-Paraguay": "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
  "Netherlands-Sweden": "Estadio Houston (Houston)",
  "Germany-Ivory Coast": "Estadio de Toronto (Toronto)",
  "Ecuador-Curacao": "Estadio Kansas City (Kansas City)",
  "Tunisia-Japan": "Estadio Monterrey (Monterrey)",
  "Spain-Saudi Arabia": "Estadio Atlanta (Atlanta)",
  "Belgium-Iran": "Estadio Los Angeles (Los Ángeles)",
  "Uruguay-Cape Verde": "Estadio Miami (Miami)",
  "New Zealand-Egypt": "Estadio BC Place Vancouver (Vancouver)",
  "Argentina-Austria": "Estadio Dallas (Dallas)",
  "France-Iraq": "Estadio Filadelfia (Filadelfia)",
  "Norway-Senegal": "Estadio Nueva York/Nueva Jersey (Nueva Jersey)",
  "Jordan-Algeria": "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
  "Portugal-Uzbekistan": "Estadio Houston (Houston)",
  "England-Ghana": "Estadio Boston (Boston)",
  "Panama-Croatia": "Estadio de Toronto (Toronto)",
  "Colombia-DR Congo": "Estadio Guadalajara (Guadalajara)",
  "Switzerland-Canada": "Estadio BC Place Vancouver (Vancouver)",
  "Bosnia and Herzegovina-Qatar": "Estadio de Seattle (Seattle)",
  "Scotland-Brazil": "Estadio Miami (Miami)",
  "Morocco-Haiti": "Estadio Atlanta (Atlanta)",
  "Czechia-Mexico": "Estadio Ciudad de México (Ciudad de México)",
  "South Africa-South Korea": "Estadio Monterrey (Monterrey)",
  "Curacao-Ivory Coast": "Estadio Filadelfia (Filadelfia)",
  "Ecuador-Germany": "Estadio Nueva York/Nueva Jersey (Nueva Jersey)",
  "Japan-Sweden": "Estadio Dallas (Dallas)",
  "Tunisia-Netherlands": "Estadio Kansas City (Kansas City)",
  "Turkiye-USA": "Estadio Los Angeles (Los Ángeles)",
  "Paraguay-Australia": "Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)",
  "Norway-France": "Estadio Boston (Boston)",
  "Senegal-Iraq": "Estadio de Toronto (Toronto)",
  "Cape Verde-Saudi Arabia": "Estadio Houston (Houston)",
  "Uruguay-Spain": "Estadio Guadalajara (Guadalajara)",
  "Egypt-Iran": "Estadio de Seattle (Seattle)",
  "New Zealand-Belgium": "Estadio BC Place Vancouver (Vancouver)",
  "Panama-England": "Estadio Nueva York/Nueva Jersey (Nueva Jersey)",
  "Croatia-Ghana": "Estadio Filadelfia (Filadelfia)",
  "Colombia-Portugal": "Estadio Miami (Miami)",
  "DR Congo-Uzbekistan": "Estadio Atlanta (Atlanta)",
  "Algeria-Austria": "Estadio Kansas City (Kansas City)",
  "Jordan-Argentina": "Estadio Dallas (Dallas)"
};

const getStadium = (home, away, summary) => {
  const matchKey = `${home}-${away}`;
  if (stadiumMap[matchKey]) return stadiumMap[matchKey];

  if (summary.includes('2A - 2B')) return 'Estadio Los Angeles (Los Ángeles)';
  if (summary.includes('1C - 2F')) return 'Estadio Houston (Houston)';
  if (summary.includes('1E - 3ABCDF')) return 'Estadio Boston (Boston)';
  if (summary.includes('1F - 2C')) return 'Estadio Monterrey (Monterrey)';
  if (summary.includes('2E - 2I')) return 'Estadio Dallas (Dallas)';
  if (summary.includes('1I - 3CDFGH')) return 'Estadio Nueva York/Nueva Jersey (Nueva Jersey)';
  if (summary.includes('1A - 3CEFHI')) return 'Estadio Ciudad de México (Ciudad de México)';
  if (summary.includes('1L - 3EHIJK')) return 'Estadio Atlanta (Atlanta)';
  if (summary.includes('1G - 3AEHIJ')) return 'Estadio de Seattle (Seattle)';
  if (summary.includes('1D - 3BEFIJ')) return 'Estadio de la Bahía de San Francisco (Área de la Bahía de San Francisco)';
  if (summary.includes('1H - 2J')) return 'Estadio Los Angeles (Los Ángeles)';
  if (summary.includes('2K - 2L')) return 'Estadio de Toronto (Toronto)';
  if (summary.includes('1B - 3EFGIJ')) return 'Estadio BC Place Vancouver (Vancouver)';
  if (summary.includes('2D - 2G')) return 'Estadio Dallas (Dallas)';
  if (summary.includes('1J - 2H')) return 'Estadio Miami (Miami)';
  if (summary.includes('1K - 3DEIJL')) return 'Estadio Kansas City (Kansas City)';
  
  if (summary.includes('2A/2B - 1F/2C')) return 'Estadio Houston (Houston)';
  if (summary.includes('1E/3ABCDF - 1I/3CDFGH')) return 'Estadio Filadelfia (Filadelfia)';
  if (summary.includes('1C/2F - 2E/2I')) return 'Estadio Nueva York/Nueva Jersey (Nueva Jersey)';
  if (summary.includes('1A/3CEFHI - 1L/3EHIJK')) return 'Estadio Ciudad de México (Ciudad de México)';
  if (summary.includes('2K/2L - 1H/2J')) return 'Estadio Dallas (Dallas)';
  if (summary.includes('1D/3BEFIJ - 1G/3AEHIJ')) return 'Estadio de Seattle (Seattle)';
  if (summary.includes('1J/2H - 2D/2G')) return 'Estadio Atlanta (Atlanta)';
  if (summary.includes('1B/3EFGIJ - 1K/3DEIJL')) return 'Estadio BC Place Vancouver (Vancouver)';
  
  if (summary.includes('Winner EF 1 - Winner EF 2')) return 'Estadio Boston (Boston)';
  if (summary.includes('Winner EF 5 - Winner EF 6')) return 'Estadio Los Angeles (Los Ángeles)';
  if (summary.includes('Winner EF 3 - Winner EF 4')) return 'Estadio Miami (Miami)';
  if (summary.includes('Winner EF 7 - Winner EF 8')) return 'Estadio Kansas City (Kansas City)';
  
  if (summary.includes('Winner QF 1 - Winner QF 2')) return 'Estadio Dallas (Dallas)';
  if (summary.includes('Winner QF 3 - Winner QF 4')) return 'Estadio Atlanta (Atlanta)';
  
  if (summary.includes('Loser SF 1 - Loser SF 2')) return 'Estadio Miami (Miami)';
  if (summary.includes('Winner SF 1 - Winner SF 2')) return 'Estadio Nueva York/Nueva Jersey (Nueva Jersey)';

  return 'Sede por Definir';
};

// Función que parsea la estructura del Calendario ICS a un Arreglo plano para los componentes
const parseICS = (icsString) => {
  const events = [];
  const lines = icsString.split('\n');
  let currentEvent = null;

  for (let line of lines) {
    line = line.trim();
    if (line === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (line === 'END:VEVENT') {
      if (currentEvent && currentEvent.start) {
        events.push(currentEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith('DTSTART:')) {
        currentEvent.start = line.replace('DTSTART:', '');
      } else if (line.startsWith('SUMMARY:')) {
        currentEvent.summary = line.replace('SUMMARY:', '');
      }
    }
  }

  return events.map((ev, index) => {
    let summary = ev.summary || '';
    
    // 1. Extraer los goles de forma robusta (Ej: "3 - 1" o "3-1")
    const scoreMatch = summary.match(/(\d+)\s*-\s*(\d+)/);
    let homeScore = null;
    let awayScore = null;
    
    if (scoreMatch) {
      homeScore = parseInt(scoreMatch[1], 10);
      awayScore = parseInt(scoreMatch[2], 10);
    }
    
    // 2. Separar Local y Visitante dividiendo por el marcador o por el guion
    const parts = summary.split(scoreMatch ? scoreMatch[0] : '-');
    
    // 3. Identificar al equipo usando el diccionario oficial (ignora emojis automáticamente)
    const findTeam = (str) => {
      if (!str) return 'Por Definir';
      const match = Object.keys(flagMap).find(team => str.includes(team));
      return match || 'Por Definir';
    };

    const homeName = findTeam(parts[0]);
    const awayName = findTeam(parts[1]);

    let groupName = 'Fase de Grupos';
    if (summary.includes('Winner SF')) groupName = 'Final';
    else if (summary.includes('Loser SF')) groupName = 'Tercer Puesto';
    else if (summary.includes('Winner QF')) groupName = 'Semifinales';
    else if (summary.includes('Winner EF')) groupName = 'Cuartos de Final';
    else if (summary.includes('/')) groupName = 'Octavos de Final';
    else if (summary.match(/[1-2][A-L]/)) groupName = 'Dieciseisavos de Final';

    // Extracción cuidadosa de la fecha y hora desde el UTC del ICS (formato YYYYMMDDTHHMMSSZ)
    const year = parseInt(ev.start.substring(0, 4), 10);
    const month = parseInt(ev.start.substring(4, 6), 10);
    const day = parseInt(ev.start.substring(6, 8), 10);
    const hour = parseInt(ev.start.substring(9, 11), 10);
    const min = parseInt(ev.start.substring(11, 13), 10);
    const sec = parseInt(ev.start.substring(13, 15), 10);
    
    const dateObj = new Date(Date.UTC(year, month - 1, day, hour, min, sec));
    if (isNaN(dateObj.getTime())) return null;

    return {
      id: index + 1,
      isLive: false,
      status: 'NS', // Not Started
      minute: 0,
      time: dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      dateStr: dateObj.toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'long' }),
      group: groupName,
      stadium: getStadium(homeName, awayName, summary),
      homeTeam: { name: homeName, flag: getFlagUrl(homeName) },
      awayTeam: { name: awayName, flag: getFlagUrl(awayName) },
      homeScore: homeScore,
      awayScore: awayScore,
      rawDate: dateObj.toISOString()
    };
  }).filter(Boolean); // Filtra partidos corruptos
};

// FUNCIÓN INTELIGENTE PARA DESCARGAR EL CALENDARIO EN VIVO
const getCalendarData = async () => {
  // MODO DE PRUEBA: Cambia a "false" cuando empiece el mundial para usar datos de internet
  const TEST_MODE = false;
  if (TEST_MODE) {
    console.warn("Modo de prueba activado: Usando el calendario local manual.");
    return parseICS(rawICS);
  }

  try {
    // Enlace público del calendario (A modo de ejemplo usamos una URL simulada de FotMob)
    // Cuando el mundial esté cerca, puedes poner el enlace ICS oficial aquí.
    const ICS_URL = 'https://www.fotmob.com/api/ical?id=77';
    
    // Usamos corsproxy.io para saltarnos el bloqueo de CORS de manera gratuita
    const response = await fetch(`https://corsproxy.io/?${encodeURIComponent(ICS_URL)}`);
    if (!response.ok) throw new Error('Error al descargar el calendario en vivo');
    
    const liveText = await response.text();
    return parseICS(liveText);
  } catch (error) {
    console.warn("Usando calendario local (manual) como respaldo por fallo en la red.");
    return parseICS(rawICS);
  }
};

// LÓGICA EXPORTADA
export const fetchMatches = async () => {
  return await getCalendarData();
};

export const fetchResults = async (dateStr = null) => {
  const allMatches = await getCalendarData();
  const now = new Date();
  // Filtra y muestra solo los resultados que ya pasaron
  let pastMatches = allMatches.filter(m => new Date(m.rawDate) < now);

  if (dateStr) {
    pastMatches = pastMatches.filter(m => new Date(m.rawDate).toDateString() === dateStr);
  }

  if (pastMatches.length === 0) {
    return [{ date: dateStr ? 'No hay resultados para esta fecha' : 'Aún no hay resultados (Empieza en 2026)', matches: [] }];
  }

  // Agrupar los resultados reales por grupo (si hay filtro de fecha) o por fecha (si es general)
  const grouped = pastMatches.reduce((acc, match) => {
    const key = dateStr ? match.group : (match.dateStr.charAt(0).toUpperCase() + match.dateStr.slice(1));
    if (!acc[key]) acc[key] = [];
    acc[key].push(match);
    return acc;
  }, {});

  return Object.keys(grouped).map(date => ({ date, matches: grouped[date] }));
};

export const fetchStandings = async (dateStr = null) => {
  const baseGroups = [
    { name: 'Grupo A', teams: [{ name: 'México', flag: 'mx', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Sudáfrica', flag: 'za', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'República de Corea', flag: 'kr', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Chequia', flag: 'cz', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo B', teams: [{ name: 'Canadá', flag: 'ca', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Bosnia y Herzegovina', flag: 'ba', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Catar', flag: 'qa', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Suiza', flag: 'ch', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo C', teams: [{ name: 'Brasil', flag: 'br', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Marruecos', flag: 'ma', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Haití', flag: 'ht', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Escocia', flag: 'gb-sct', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo D', teams: [{ name: 'EE. UU.', flag: 'us', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Paraguay', flag: 'py', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Australia', flag: 'au', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Turquía', flag: 'tr', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo E', teams: [{ name: 'Alemania', flag: 'de', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Curazao', flag: 'cw', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Costa de Marfil', flag: 'ci', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Ecuador', flag: 'ec', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo F', teams: [{ name: 'Países Bajos', flag: 'nl', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Japón', flag: 'jp', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Suecia', flag: 'se', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Túnez', flag: 'tn', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo G', teams: [{ name: 'Bélgica', flag: 'be', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Egipto', flag: 'eg', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'RI de Irán', flag: 'ir', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Nueva Zelanda', flag: 'nz', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo H', teams: [{ name: 'España', flag: 'es', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Islas de Cabo Verde', flag: 'cv', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Arabia Saudí', flag: 'sa', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Uruguay', flag: 'uy', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo I', teams: [{ name: 'Francia', flag: 'fr', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Senegal', flag: 'sn', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Irak', flag: 'iq', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Noruega', flag: 'no', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo J', teams: [{ name: 'Argentina', flag: 'ar', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Argelia', flag: 'dz', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Austria', flag: 'at', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Jordania', flag: 'jo', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo K', teams: [{ name: 'Portugal', flag: 'pt', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'RD Congo', flag: 'cd', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Uzbekistán', flag: 'uz', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Colombia', flag: 'co', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] },
    { name: 'Grupo L', teams: [{ name: 'Inglaterra', flag: 'gb-eng', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Croacia', flag: 'hr', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Ghana', flag: 'gh', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }, { name: 'Panamá', flag: 'pa', pj: 0, g: 0, e: 0, p: 0, dg: 0, pts: 0 }] }
  ];

  const allMatches = await getCalendarData();
  
  allMatches.forEach(match => {
    // Solo procesamos si hay un resultado válido
    if (match.homeScore !== null && match.awayScore !== null) {
      
      // 1. Traducir los nombres en inglés a sus códigos de bandera para encontrarlos
      const homeCode = flagMap[match.homeTeam.name];
      const awayCode = flagMap[match.awayTeam.name];

      let homeTeamRef = null;
      let awayTeamRef = null;

      // 2. Buscar a los equipos en todos los grupos usando su código de bandera único (ej: "mx")
      baseGroups.forEach(group => {
        const h = group.teams.find(t => t.flag === homeCode);
        const a = group.teams.find(t => t.flag === awayCode);
        if (h) homeTeamRef = h;
        if (a) awayTeamRef = a;
      });

      // 3. Asignar las estadísticas matemáticas
      if (homeTeamRef && awayTeamRef) {
        homeTeamRef.pj += 1;
        awayTeamRef.pj += 1;
        
        homeTeamRef.dg += (match.homeScore - match.awayScore);
        awayTeamRef.dg += (match.awayScore - match.homeScore);
        
        if (match.homeScore > match.awayScore) {
          homeTeamRef.g += 1; homeTeamRef.pts += 3;
          awayTeamRef.p += 1;
        } else if (match.homeScore < match.awayScore) {
          awayTeamRef.g += 1; awayTeamRef.pts += 3;
          homeTeamRef.p += 1;
        } else {
          homeTeamRef.e += 1; homeTeamRef.pts += 1;
          awayTeamRef.e += 1; awayTeamRef.pts += 1;
        }
      }
    }
  });

  // 4. Ordenar los grupos automáticamente (Por Puntos, y si hay empate, por Diferencia de Goles)
  baseGroups.forEach(group => {
    group.teams.sort((a, b) => {
      if (b.pts !== a.pts) return b.pts - a.pts;
      return b.dg - a.dg;
    });
  });

  // 5. Mostrar solo los grupos que juegan en la fecha seleccionada
  if (dateStr) {
    const activeMatchesForDate = allMatches.filter(m => new Date(m.rawDate).toDateString() === dateStr);
    const activeGroups = new Set();
    
    activeMatchesForDate.forEach(match => {
      if (match.group.startsWith('Grupo')) {
        activeGroups.add(match.group);
      }
    });

    if (activeGroups.size > 0) {
      return baseGroups.filter(g => activeGroups.has(g.name));
    }
  }

  return baseGroups;
};

// ===== LÓGICA PARA NOTICIAS DE WORDPRESS =====
const WP_TAG_ID = 123; // ¡IMPORTANTE! Reemplaza '123' con el ID real de tu etiqueta

export const fetchNews = async () => {
  try {
    // Usamos _embed para incluir la imagen destacada y per_page para limitar a 3
    const response = await fetch(`https://radioamerica.com.ve/wp-json/wp/v2/posts?tags=${WP_TAG_ID}&per_page=3&_embed`);
    if (!response.ok) {
      throw new Error('La respuesta de WordPress no fue exitosa');
    }
    const posts = await response.json();

    return posts.map(post => {
      const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=200&h=150&auto=format&fit=crop';
      
      return {
        id: post.id,
        title: post.title.rendered,
        link: post.link,
        imageUrl: imageUrl,
      };
    });
  } catch (error) {
    console.error("Error al obtener las noticias de WordPress:", error);
    return []; // Devolvemos un array vacío para no romper la interfaz
  }
};

// ===== TEXTO CRUDO DEL CALENDARIO OFICIAL DE FOTMOB (.ICS) =====
const rawICS = `BEGIN:VCALENDAR
METHOD:PUBLISH
PRODID:-//FOTMOB//FOTMOB 1.0//EN
REFRESH-INTERVAL;VALUE=DURATION:PT6H
VERSION:2.0
X-PUBLISHED-TTL:PT6H
X-WR-CALDESC:World Cup fixtures
X-WR-CALNAME:World Cup
X-WR-TIMEZONE:UTC
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667751\\nWorld Cup 2026
DTEND:20260611T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260611T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY: 🇲🇽 Mexico  -  🇿🇦 South Africa 
TRANSP:TRANSPARENT
UID:4667751@fotmob.com
URL:https://www.fotmob.com/match/4667751
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667752\\nWorld Cup 2026
DTEND:20260612T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260612T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇰🇷 South Korea - 🇨🇿 Czechia
TRANSP:TRANSPARENT
UID:4667752@fotmob.com
URL:https://www.fotmob.com/match/4667752
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667757\\nWorld Cup 2026
DTEND:20260612T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260612T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇦 Canada - 🇧🇦 Bosnia and Herzegovina
TRANSP:TRANSPARENT
UID:4667757@fotmob.com
URL:https://www.fotmob.com/match/4667757
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667771\\nWorld Cup 2026
DTEND:20260613T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260613T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇺🇸 USA - 🇵🇾 Paraguay
TRANSP:TRANSPARENT
UID:4667771@fotmob.com
URL:https://www.fotmob.com/match/4667771
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667758\\nWorld Cup 2026
DTEND:20260613T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260613T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇶🇦 Qatar - 🇨🇭 Switzerland
TRANSP:TRANSPARENT
UID:4667758@fotmob.com
URL:https://www.fotmob.com/match/4667758
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667764\\nWorld Cup 2026
DTEND:20260613T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260613T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇧🇷 Brazil - 🇲🇦 Morocco
TRANSP:TRANSPARENT
UID:4667764@fotmob.com
URL:https://www.fotmob.com/match/4667764
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667765\\nWorld Cup 2026
DTEND:20260614T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260614T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇭🇹 Haiti - 🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland
TRANSP:TRANSPARENT
UID:4667765@fotmob.com
URL:https://www.fotmob.com/match/4667765
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667772\\nWorld Cup 2026
DTEND:20260614T054500Z
DTSTAMP:20260610T000317Z
DTSTART:20260614T040000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇦🇺 Australia - 🇹🇷 Turkiye
TRANSP:TRANSPARENT
UID:4667772@fotmob.com
URL:https://www.fotmob.com/match/4667772
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667777\\nWorld Cup 2026
DTEND:20260614T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260614T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇩🇪 Germany - 🇨🇼 Curacao
TRANSP:TRANSPARENT
UID:4667777@fotmob.com
URL:https://www.fotmob.com/match/4667777
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667783\\nWorld Cup 2026
DTEND:20260614T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260614T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇳🇱 Netherlands - 🇯🇵 Japan
TRANSP:TRANSPARENT
UID:4667783@fotmob.com
URL:https://www.fotmob.com/match/4667783
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667778\\nWorld Cup 2026
DTEND:20260615T004500Z
DTSTAMP:20260610T000317Z
DTSTART:20260614T230000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇮 Ivory Coast - 🇪🇨 Ecuador
TRANSP:TRANSPARENT
UID:4667778@fotmob.com
URL:https://www.fotmob.com/match/4667778
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667784\\nWorld Cup 2026
DTEND:20260615T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260615T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇸🇪 Sweden - 🇹🇳 Tunisia
TRANSP:TRANSPARENT
UID:4667784@fotmob.com
URL:https://www.fotmob.com/match/4667784
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667798\\nWorld Cup 2026
DTEND:20260615T174500Z
DTSTAMP:20260610T000317Z
DTSTART:20260615T160000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇪🇸 Spain - 🇨🇻 Cape Verde
TRANSP:TRANSPARENT
UID:4667798@fotmob.com
URL:https://www.fotmob.com/match/4667798
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667790\\nWorld Cup 2026
DTEND:20260615T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260615T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇧🇪 Belgium - 🇪🇬 Egypt
TRANSP:TRANSPARENT
UID:4667790@fotmob.com
URL:https://www.fotmob.com/match/4667790
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667799\\nWorld Cup 2026
DTEND:20260615T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260615T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇸🇦 Saudi Arabia - 🇺🇾 Uruguay
TRANSP:TRANSPARENT
UID:4667799@fotmob.com
URL:https://www.fotmob.com/match/4667799
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667791\\nWorld Cup 2026
DTEND:20260616T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260616T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇮🇷 Iran - 🇳🇿 New Zealand
TRANSP:TRANSPARENT
UID:4667791@fotmob.com
URL:https://www.fotmob.com/match/4667791
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667804\\nWorld Cup 2026
DTEND:20260616T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260616T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇫🇷 France - 🇸🇳 Senegal
TRANSP:TRANSPARENT
UID:4667804@fotmob.com
URL:https://www.fotmob.com/match/4667804
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667805\\nWorld Cup 2026
DTEND:20260616T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260616T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇮🇶 Iraq - 🇳🇴 Norway
TRANSP:TRANSPARENT
UID:4667805@fotmob.com
URL:https://www.fotmob.com/match/4667805
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667812\\nWorld Cup 2026
DTEND:20260617T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260617T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇦🇷 Argentina - 🇩🇿 Algeria
TRANSP:TRANSPARENT
UID:4667812@fotmob.com
URL:https://www.fotmob.com/match/4667812
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667813\\nWorld Cup 2026
DTEND:20260617T054500Z
DTSTAMP:20260610T000317Z
DTSTART:20260617T040000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇦🇹 Austria - 🇯🇴 Jordan
TRANSP:TRANSPARENT
UID:4667813@fotmob.com
URL:https://www.fotmob.com/match/4667813
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667819\\nWorld Cup 2026
DTEND:20260617T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260617T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇵🇹 Portugal - DR Congo
TRANSP:TRANSPARENT
UID:4667819@fotmob.com
URL:https://www.fotmob.com/match/4667819
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667825\\nWorld Cup 2026
DTEND:20260617T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260617T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🏴󠁧󠁢󠁥󠁮󠁧󠁿 England - 🇭🇷 Croatia
TRANSP:TRANSPARENT
UID:4667825@fotmob.com
URL:https://www.fotmob.com/match/4667825
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667826\\nWorld Cup 2026
DTEND:20260618T004500Z
DTSTAMP:20260610T000317Z
DTSTART:20260617T230000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇬🇭 Ghana - 🇵🇦 Panama
TRANSP:TRANSPARENT
UID:4667826@fotmob.com
URL:https://www.fotmob.com/match/4667826
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667820\\nWorld Cup 2026
DTEND:20260618T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260618T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇺🇿 Uzbekistan - 🇨🇴 Colombia
TRANSP:TRANSPARENT
UID:4667820@fotmob.com
URL:https://www.fotmob.com/match/4667820
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667753\\nWorld Cup 2026
DTEND:20260618T174500Z
DTSTAMP:20260610T000317Z
DTSTART:20260618T160000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇿 Czechia - 🇿🇦 South Africa
TRANSP:TRANSPARENT
UID:4667753@fotmob.com
URL:https://www.fotmob.com/match/4667753
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667759\\nWorld Cup 2026
DTEND:20260618T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260618T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇭 Switzerland - 🇧🇦 Bosnia and Herzegovina
TRANSP:TRANSPARENT
UID:4667759@fotmob.com
URL:https://www.fotmob.com/match/4667759
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667760\\nWorld Cup 2026
DTEND:20260618T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260618T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇦 Canada - 🇶🇦 Qatar
TRANSP:TRANSPARENT
UID:4667760@fotmob.com
URL:https://www.fotmob.com/match/4667760
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667754\\nWorld Cup 2026
DTEND:20260619T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260619T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇲🇽 Mexico - 🇰🇷 South Korea
TRANSP:TRANSPARENT
UID:4667754@fotmob.com
URL:https://www.fotmob.com/match/4667754
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667774\\nWorld Cup 2026
DTEND:20260619T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260619T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇺🇸 USA - 🇦🇺 Australia
TRANSP:TRANSPARENT
UID:4667774@fotmob.com
URL:https://www.fotmob.com/match/4667774
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667766\\nWorld Cup 2026
DTEND:20260619T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260619T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland - 🇲🇦 Morocco
TRANSP:TRANSPARENT
UID:4667766@fotmob.com
URL:https://www.fotmob.com/match/4667766
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667767\\nWorld Cup 2026
DTEND:20260620T021500Z
DTSTAMP:20260610T000317Z
DTSTART:20260620T003000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇧🇷 Brazil - 🇭🇹 Haiti
TRANSP:TRANSPARENT
UID:4667767@fotmob.com
URL:https://www.fotmob.com/match/4667767
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667773\\nWorld Cup 2026
DTEND:20260620T044500Z
DTSTAMP:20260610T000317Z
DTSTART:20260620T030000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇹🇷 Turkiye - 🇵🇾 Paraguay
TRANSP:TRANSPARENT
UID:4667773@fotmob.com
URL:https://www.fotmob.com/match/4667773
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667786\\nWorld Cup 2026
DTEND:20260620T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260620T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇳🇱 Netherlands - 🇸🇪 Sweden
TRANSP:TRANSPARENT
UID:4667786@fotmob.com
URL:https://www.fotmob.com/match/4667786
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667780\\nWorld Cup 2026
DTEND:20260620T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260620T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇩🇪 Germany - 🇨🇮 Ivory Coast
TRANSP:TRANSPARENT
UID:4667780@fotmob.com
URL:https://www.fotmob.com/match/4667780
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667779\\nWorld Cup 2026
DTEND:20260621T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260621T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇪🇨 Ecuador - 🇨🇼 Curacao
TRANSP:TRANSPARENT
UID:4667779@fotmob.com
URL:https://www.fotmob.com/match/4667779
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667785\\nWorld Cup 2026
DTEND:20260621T054500Z
DTSTAMP:20260610T000317Z
DTSTART:20260621T040000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇹🇳 Tunisia - 🇯🇵 Japan
TRANSP:TRANSPARENT
UID:4667785@fotmob.com
URL:https://www.fotmob.com/match/4667785
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667801\\nWorld Cup 2026
DTEND:20260621T174500Z
DTSTAMP:20260610T000317Z
DTSTART:20260621T160000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇪🇸 Spain - 🇸🇦 Saudi Arabia
TRANSP:TRANSPARENT
UID:4667801@fotmob.com
URL:https://www.fotmob.com/match/4667801
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667793\\nWorld Cup 2026
DTEND:20260621T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260621T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇧🇪 Belgium - 🇮🇷 Iran
TRANSP:TRANSPARENT
UID:4667793@fotmob.com
URL:https://www.fotmob.com/match/4667793
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667800\\nWorld Cup 2026
DTEND:20260621T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260621T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇺🇾 Uruguay - 🇨🇻 Cape Verde
TRANSP:TRANSPARENT
UID:4667800@fotmob.com
URL:https://www.fotmob.com/match/4667800
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667792\\nWorld Cup 2026
DTEND:20260622T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260622T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇳🇿 New Zealand - 🇪🇬 Egypt
TRANSP:TRANSPARENT
UID:4667792@fotmob.com
URL:https://www.fotmob.com/match/4667792
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667815\\nWorld Cup 2026
DTEND:20260622T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260622T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇦🇷 Argentina - 🇦🇹 Austria
TRANSP:TRANSPARENT
UID:4667815@fotmob.com
URL:https://www.fotmob.com/match/4667815
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667807\\nWorld Cup 2026
DTEND:20260622T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260622T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇫🇷 France - 🇮🇶 Iraq
TRANSP:TRANSPARENT
UID:4667807@fotmob.com
URL:https://www.fotmob.com/match/4667807
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667806\\nWorld Cup 2026
DTEND:20260623T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260623T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇳🇴 Norway - 🇸🇳 Senegal
TRANSP:TRANSPARENT
UID:4667806@fotmob.com
URL:https://www.fotmob.com/match/4667806
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667814\\nWorld Cup 2026
DTEND:20260623T044500Z
DTSTAMP:20260610T000317Z
DTSTART:20260623T030000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇯🇴 Jordan - 🇩🇿 Algeria
TRANSP:TRANSPARENT
UID:4667814@fotmob.com
URL:https://www.fotmob.com/match/4667814
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667822\\nWorld Cup 2026
DTEND:20260623T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260623T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇵🇹 Portugal - 🇺🇿 Uzbekistan
TRANSP:TRANSPARENT
UID:4667822@fotmob.com
URL:https://www.fotmob.com/match/4667822
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667828\\nWorld Cup 2026
DTEND:20260623T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260623T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🏴󠁧󠁢󠁥󠁮󠁧󠁿 England - 🇬🇭 Ghana
TRANSP:TRANSPARENT
UID:4667828@fotmob.com
URL:https://www.fotmob.com/match/4667828
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667827\\nWorld Cup 2026
DTEND:20260624T004500Z
DTSTAMP:20260610T000317Z
DTSTART:20260623T230000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇵🇦 Panama - 🇭🇷 Croatia
TRANSP:TRANSPARENT
UID:4667827@fotmob.com
URL:https://www.fotmob.com/match/4667827
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667821\\nWorld Cup 2026
DTEND:20260624T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260624T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇴 Colombia - DR Congo
TRANSP:TRANSPARENT
UID:4667821@fotmob.com
URL:https://www.fotmob.com/match/4667821
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667762\\nWorld Cup 2026
DTEND:20260624T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260624T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇧🇦 Bosnia and Herzegovina - 🇶🇦 Qatar
TRANSP:TRANSPARENT
UID:4667762@fotmob.com
URL:https://www.fotmob.com/match/4667762
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667761\\nWorld Cup 2026
DTEND:20260624T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260624T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇭 Switzerland - 🇨🇦 Canada
TRANSP:TRANSPARENT
UID:4667761@fotmob.com
URL:https://www.fotmob.com/match/4667761
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667769\\nWorld Cup 2026
DTEND:20260624T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260624T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇲🇦 Morocco - 🇭🇹 Haiti
TRANSP:TRANSPARENT
UID:4667769@fotmob.com
URL:https://www.fotmob.com/match/4667769
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667768\\nWorld Cup 2026
DTEND:20260624T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260624T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland - 🇧🇷 Brazil
TRANSP:TRANSPARENT
UID:4667768@fotmob.com
URL:https://www.fotmob.com/match/4667768
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667755\\nWorld Cup 2026
DTEND:20260625T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260625T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇿 Czechia - 🇲🇽 Mexico
TRANSP:TRANSPARENT
UID:4667755@fotmob.com
URL:https://www.fotmob.com/match/4667755
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667756\\nWorld Cup 2026
DTEND:20260625T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260625T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇿🇦 South Africa - 🇰🇷 South Korea
TRANSP:TRANSPARENT
UID:4667756@fotmob.com
URL:https://www.fotmob.com/match/4667756
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667782\\nWorld Cup 2026
DTEND:20260625T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260625T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇼 Curacao - 🇨🇮 Ivory Coast
TRANSP:TRANSPARENT
UID:4667782@fotmob.com
URL:https://www.fotmob.com/match/4667782
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667781\\nWorld Cup 2026
DTEND:20260625T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260625T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇪🇨 Ecuador - 🇩🇪 Germany
TRANSP:TRANSPARENT
UID:4667781@fotmob.com
URL:https://www.fotmob.com/match/4667781
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667788\\nWorld Cup 2026
DTEND:20260626T004500Z
DTSTAMP:20260610T000317Z
DTSTART:20260625T230000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇯🇵 Japan - 🇸🇪 Sweden
TRANSP:TRANSPARENT
UID:4667788@fotmob.com
URL:https://www.fotmob.com/match/4667788
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667787\\nWorld Cup 2026
DTEND:20260626T004500Z
DTSTAMP:20260610T000317Z
DTSTART:20260625T230000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇹🇳 Tunisia - 🇳🇱 Netherlands
TRANSP:TRANSPARENT
UID:4667787@fotmob.com
URL:https://www.fotmob.com/match/4667787
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667776\\nWorld Cup 2026
DTEND:20260626T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260626T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇵🇾 Paraguay - 🇦🇺 Australia
TRANSP:TRANSPARENT
UID:4667776@fotmob.com
URL:https://www.fotmob.com/match/4667776
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667775\\nWorld Cup 2026
DTEND:20260626T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260626T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇹🇷 Turkiye - 🇺🇸 USA
TRANSP:TRANSPARENT
UID:4667775@fotmob.com
URL:https://www.fotmob.com/match/4667775
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667808\\nWorld Cup 2026
DTEND:20260626T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260626T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇳🇴 Norway - 🇫🇷 France
TRANSP:TRANSPARENT
UID:4667808@fotmob.com
URL:https://www.fotmob.com/match/4667808
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667809\\nWorld Cup 2026
DTEND:20260626T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260626T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇸🇳 Senegal - 🇮🇶 Iraq
TRANSP:TRANSPARENT
UID:4667809@fotmob.com
URL:https://www.fotmob.com/match/4667809
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667803\\nWorld Cup 2026
DTEND:20260627T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇻 Cape Verde - 🇸🇦 Saudi Arabia
TRANSP:TRANSPARENT
UID:4667803@fotmob.com
URL:https://www.fotmob.com/match/4667803
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667802\\nWorld Cup 2026
DTEND:20260627T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇺🇾 Uruguay - 🇪🇸 Spain
TRANSP:TRANSPARENT
UID:4667802@fotmob.com
URL:https://www.fotmob.com/match/4667802
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667795\\nWorld Cup 2026
DTEND:20260627T044500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T030000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇪🇬 Egypt - 🇮🇷 Iran
TRANSP:TRANSPARENT
UID:4667795@fotmob.com
URL:https://www.fotmob.com/match/4667795
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667794\\nWorld Cup 2026
DTEND:20260627T044500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T030000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇳🇿 New Zealand - 🇧🇪 Belgium
TRANSP:TRANSPARENT
UID:4667794@fotmob.com
URL:https://www.fotmob.com/match/4667794
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667830\\nWorld Cup 2026
DTEND:20260627T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇭🇷 Croatia - 🇬🇭 Ghana
TRANSP:TRANSPARENT
UID:4667830@fotmob.com
URL:https://www.fotmob.com/match/4667830
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667829\\nWorld Cup 2026
DTEND:20260627T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇵🇦 Panama - 🏴󠁧󠁢󠁥󠁮󠁧󠁿 England
TRANSP:TRANSPARENT
UID:4667829@fotmob.com
URL:https://www.fotmob.com/match/4667829
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667823\\nWorld Cup 2026
DTEND:20260628T011500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T233000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇨🇴 Colombia - 🇵🇹 Portugal
TRANSP:TRANSPARENT
UID:4667823@fotmob.com
URL:https://www.fotmob.com/match/4667823
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667824\\nWorld Cup 2026
DTEND:20260628T011500Z
DTSTAMP:20260610T000317Z
DTSTART:20260627T233000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:DR Congo - 🇺🇿 Uzbekistan
TRANSP:TRANSPARENT
UID:4667824@fotmob.com
URL:https://www.fotmob.com/match/4667824
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667817\\nWorld Cup 2026
DTEND:20260628T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260628T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇩🇿 Algeria - 🇦🇹 Austria
TRANSP:TRANSPARENT
UID:4667817@fotmob.com
URL:https://www.fotmob.com/match/4667817
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4667816\\nWorld Cup 2026
DTEND:20260628T034500Z
DTSTAMP:20260610T000317Z
DTSTART:20260628T020000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:🇯🇴 Jordan - 🇦🇷 Argentina
TRANSP:TRANSPARENT
UID:4667816@fotmob.com
URL:https://www.fotmob.com/match/4667816
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653705\\nWorld Cup 2026
DTEND:20260628T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260628T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 2A - 2B
TRANSP:TRANSPARENT
UID:4653705@fotmob.com
URL:https://www.fotmob.com/match/4653705
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653711\\nWorld Cup 2026
DTEND:20260629T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260629T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1C - 2F
TRANSP:TRANSPARENT
UID:4653711@fotmob.com
URL:https://www.fotmob.com/match/4653711
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653703\\nWorld Cup 2026
DTEND:20260629T221500Z
DTSTAMP:20260610T000317Z
DTSTART:20260629T203000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1E - 3ABCDF
TRANSP:TRANSPARENT
UID:4653703@fotmob.com
URL:https://www.fotmob.com/match/4653703
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653706\\nWorld Cup 2026
DTEND:20260630T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260630T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1F - 2C
TRANSP:TRANSPARENT
UID:4653706@fotmob.com
URL:https://www.fotmob.com/match/4653706
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653712\\nWorld Cup 2026
DTEND:20260630T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260630T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 2E - 2I
TRANSP:TRANSPARENT
UID:4653712@fotmob.com
URL:https://www.fotmob.com/match/4653712
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653704\\nWorld Cup 2026
DTEND:20260630T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260630T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1I - 3CDFGH
TRANSP:TRANSPARENT
UID:4653704@fotmob.com
URL:https://www.fotmob.com/match/4653704
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653713\\nWorld Cup 2026
DTEND:20260701T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260701T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1A - 3CEFHI
TRANSP:TRANSPARENT
UID:4653713@fotmob.com
URL:https://www.fotmob.com/match/4653713
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653714\\nWorld Cup 2026
DTEND:20260701T174500Z
DTSTAMP:20260610T000317Z
DTSTART:20260701T160000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1L - 3EHIJK
TRANSP:TRANSPARENT
UID:4653714@fotmob.com
URL:https://www.fotmob.com/match/4653714
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653710\\nWorld Cup 2026
DTEND:20260701T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260701T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1G - 3AEHIJ
TRANSP:TRANSPARENT
UID:4653710@fotmob.com
URL:https://www.fotmob.com/match/4653710
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653709\\nWorld Cup 2026
DTEND:20260702T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260702T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1D - 3BEFIJ
TRANSP:TRANSPARENT
UID:4653709@fotmob.com
URL:https://www.fotmob.com/match/4653709
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653708\\nWorld Cup 2026
DTEND:20260702T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260702T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1H - 2J
TRANSP:TRANSPARENT
UID:4653708@fotmob.com
URL:https://www.fotmob.com/match/4653708
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653707\\nWorld Cup 2026
DTEND:20260703T004500Z
DTSTAMP:20260610T000317Z
DTSTART:20260702T230000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 2K - 2L
TRANSP:TRANSPARENT
UID:4653707@fotmob.com
URL:https://www.fotmob.com/match/4653707
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653717\\nWorld Cup 2026
DTEND:20260703T044500Z
DTSTAMP:20260610T000317Z
DTSTART:20260703T030000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1B - 3EFGIJ
TRANSP:TRANSPARENT
UID:4653717@fotmob.com
URL:https://www.fotmob.com/match/4653717
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653716\\nWorld Cup 2026
DTEND:20260703T194500Z
DTSTAMP:20260610T000317Z
DTSTART:20260703T180000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 2D - 2G
TRANSP:TRANSPARENT
UID:4653716@fotmob.com
URL:https://www.fotmob.com/match/4653716
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653715\\nWorld Cup 2026
DTEND:20260703T234500Z
DTSTAMP:20260610T000317Z
DTSTART:20260703T220000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1J - 2H
TRANSP:TRANSPARENT
UID:4653715@fotmob.com
URL:https://www.fotmob.com/match/4653715
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653718\\nWorld Cup 2026
DTEND:20260704T031500Z
DTSTAMP:20260610T000317Z
DTSTART:20260704T013000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1K - 3DEIJL
TRANSP:TRANSPARENT
UID:4653718@fotmob.com
URL:https://www.fotmob.com/match/4653718
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653843\\nWorld Cup 2026
DTEND:20260704T184500Z
DTSTAMP:20260610T000317Z
DTSTART:20260704T170000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 2A/2B - 1F/2C
TRANSP:TRANSPARENT
UID:4653843@fotmob.com
URL:https://www.fotmob.com/match/4653843
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653842\\nWorld Cup 2026
DTEND:20260704T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260704T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1E/3ABCDF - 1I/3CDFGH
TRANSP:TRANSPARENT
UID:4653842@fotmob.com
URL:https://www.fotmob.com/match/4653842
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653846\\nWorld Cup 2026
DTEND:20260705T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260705T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1C/2F - 2E/2I
TRANSP:TRANSPARENT
UID:4653846@fotmob.com
URL:https://www.fotmob.com/match/4653846
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653847\\nWorld Cup 2026
DTEND:20260706T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260706T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1A/3CEFHI - 1L/3EHIJK
TRANSP:TRANSPARENT
UID:4653847@fotmob.com
URL:https://www.fotmob.com/match/4653847
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653844\\nWorld Cup 2026
DTEND:20260706T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260706T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 2K/2L - 1H/2J
TRANSP:TRANSPARENT
UID:4653844@fotmob.com
URL:https://www.fotmob.com/match/4653844
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653845\\nWorld Cup 2026
DTEND:20260707T014500Z
DTSTAMP:20260610T000317Z
DTSTART:20260707T000000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1D/3BEFIJ - 1G/3AEHIJ
TRANSP:TRANSPARENT
UID:4653845@fotmob.com
URL:https://www.fotmob.com/match/4653845
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653848\\nWorld Cup 2026
DTEND:20260707T174500Z
DTSTAMP:20260610T000317Z
DTSTART:20260707T160000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1J/2H - 2D/2G
TRANSP:TRANSPARENT
UID:4653848@fotmob.com
URL:https://www.fotmob.com/match/4653848
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653849\\nWorld Cup 2026
DTEND:20260707T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260707T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ 1B/3EFGIJ - 1K/3DEIJL
TRANSP:TRANSPARENT
UID:4653849@fotmob.com
URL:https://www.fotmob.com/match/4653849
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653851\\nWorld Cup 2026
DTEND:20260709T214500Z
DTSTAMP:20260610T000317Z
DTSTART:20260709T200000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner EF 1 - Winner EF 2
TRANSP:TRANSPARENT
UID:4653851@fotmob.com
URL:https://www.fotmob.com/match/4653851
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653853\\nWorld Cup 2026
DTEND:20260710T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260710T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner EF 5 - Winner EF 6
TRANSP:TRANSPARENT
UID:4653853@fotmob.com
URL:https://www.fotmob.com/match/4653853
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653852\\nWorld Cup 2026
DTEND:20260711T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260711T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner EF 3 - Winner EF 4
TRANSP:TRANSPARENT
UID:4653852@fotmob.com
URL:https://www.fotmob.com/match/4653852
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653854\\nWorld Cup 2026
DTEND:20260712T024500Z
DTSTAMP:20260610T000317Z
DTSTART:20260712T010000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner EF 7 - Winner EF 8
TRANSP:TRANSPARENT
UID:4653854@fotmob.com
URL:https://www.fotmob.com/match/4653854
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653855\\nWorld Cup 2026
DTEND:20260714T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260714T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner QF 1 - Winner QF 2
TRANSP:TRANSPARENT
UID:4653855@fotmob.com
URL:https://www.fotmob.com/match/4653855
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653856\\nWorld Cup 2026
DTEND:20260715T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260715T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner QF 3 - Winner QF 4
TRANSP:TRANSPARENT
UID:4653856@fotmob.com
URL:https://www.fotmob.com/match/4653856
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653857\\nWorld Cup 2026
DTEND:20260718T224500Z
DTSTAMP:20260610T000317Z
DTSTART:20260718T210000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Loser SF 1 - Loser SF 2
TRANSP:TRANSPARENT
UID:4653857@fotmob.com
URL:https://www.fotmob.com/match/4653857
END:VEVENT
BEGIN:VEVENT
CLASS:PUBLIC
DESCRIPTION:https://www.fotmob.com/match/4653858\\nWorld Cup 2026
DTEND:20260719T204500Z
DTSTAMP:20260610T000317Z
DTSTART:20260719T190000Z
LAST-MODIFIED:20260610T000317Z
SEQUENCE:0
SUMMARY:⚽️ Winner SF 1 - Winner SF 2
TRANSP:TRANSPARENT
UID:4653858@fotmob.com
URL:https://www.fotmob.com/match/4653858
END:VEVENT
END:VCALENDAR`;