import React, { useState } from 'react';

const NameGenerator = () => {
  // State variables to track user selections and generated results
  const [selectedCulture, setSelectedCulture] = useState('anbennarian');
  const [selectedSurnameCulture, setSelectedSurnameCulture] = useState('anbennarian');
  const [selectedSocialClass, setSelectedSocialClass] = useState('commoner');
  const [selectedGender, setSelectedGender] = useState('female');
  const [generatedName, setGeneratedName] = useState('');
  const [generatedSurname, setGeneratedSurname] = useState('');

  // Database containing all names organized by culture and type
  const nameDatabase = {
    // I shoved all anbennar adjecent and related cultures into this one for now but might add the separate cultures later
    anbennarian: {
      female: [
        'Adra', 'Marianne', 'Adelina', 'Verina', 'Alara', 'Varina', 'Aldresia', 'Damevira', 'Laurentine', 'Alisanna', 'Damelina', 'Athara',
        'Lunarona', 'Amina', 'Amarien', 'Maria', 'Marionna', 'Marian', 'Marina', 'Aria', 'Aucanna', 'Auci', 'Arabella', 'Calassa', 'Casténnia',
        'Castínna', 'Moruith', 'Cella', 'Moruen', 'Celadora', 'Morganne', 'Claria', 'Eilís', 'Eilísabet', 'Erela', 'Galinda', 'Alina', 'Lauranna',
        'Lianne', 'Madaléin', 'Riánna', 'Thalia', 'Margary', 'Cecilie', 'Isabel', 'Isobella', 'Bella', 'Willamina', 'Sophia', 'Sybille', 'Constance',
        'Eléanor', 'Valence', 'Emilie', 'Gisela', 'Cara', 'Carina', 'Corina', 'Lisolona', 'Nara', 'Riannón'
      ],
      male: [
        'Ademar', 'Adénn', 'Adran', 'Adrian', 'Adrien', 'Aecill', 'Alec', 'Alain', 'Aldres', 'Alos', 'Alphonse', 'Alvar', 'Andrel', 'Ardan', 'Ardor', 'Aril', 'Armian', 'Arrel', 'Artorian', 'Artur', 'Aucan', 'Austan', 'Avery', 'Awen',
        'Brayan', 'Brendan', 'Borian',
        'Cailan', 'Calas', 'Carlián', 'Castén', 'Castín', 'Cecill', 'Corin', 'Cressen', 'Crege', 'Cristof',
        'Daras', 'Damian', 'Damien', 'Darus', 'Denar', 'Devand', 'Devan', 'Dominic', 'Dustyn',
        'Elran', 'Emil', 'Emond', 'Erel', 'Eren', 'Erlan', 'Eustace', 'Evin',
        'Frederic', 'Galin', 'Galien', 'Gelman',
        'Laurens', 'Lorran', 'Lothane', 'Lucius',
        'Marion', 'Marlen', 'Marven', 'Maurise', 'Munerin',
        'Olor', 'Otó',
        'Rián', 'Ricain', 'Ricard', 'Rión', 'Robbin', 'Rogier',
        'Sandur', 'Silvard', 'Silverin', 'Sulgen', 'Sylvester',
        'Taelar', 'Taliesin', 'Teagan', 'Thal', 'Thiren', 'Tomar', 'Tomás', 'Trian', 'Tristian',
        'Valen', 'Valeran', 'Varian', 'Varilor', 'Varion', 'Vernel', 'Vincen',
        'Willam',
      ],
      neutral: [
        // This is highly subjective, I did my best
        'Andrel', 'Armian', 'Avery',
        'Cailan', 'Corin',
        'Dustyn',
        'Erel', 'Eren',
        'Laurens', 'Lorran', 'Lothane',
        'Morganne',
        'Nara',
        'Teagan',
        'Valence',

      ],
      commoner: [
        'Abjurer', 'Alderman', 'Adrans', 'Adeanic', 'Adventurer', 'Alainman', 'Alvars', 'Araite', 'Arcanist', 'Arkwright', 'Arrowsmith', 'Artificer', 'Artorman', 'Awens',
        'Balgarite', 'Banister', 'Bannerman', 'Barbarian', 'Barber', 'Bard', 'Banner', 'Beadle', 'Beggan', 'Black', 'Blacksmith', 'Bloomer', 'Blower', 'Blue', 'Boarman', 'Boatman', 'Boatwright', 'Bolter', 'Booker', 'Borians', 'Borande', 'Brayan', 'Brewer', 'Bridgeland', 'Brown', 'Butcher', 'Butler',
        'Cailer', 'Calasman', 'Candler', 'Canner', 'Carpenter', 'Carter', 'Castellosian', 'Caster', 'Chandler', 'Chapman', 'Clark', 'Cleric', 'Clerk', 'Conjurer', 'Cook', 'Cooper', 'Coppersmith', 'Corinite', 'Count', 'Crowner', 'Cutthroat',
        'Dameish', 'Dancer', 'Dean', 'Dempster', 'Dorward', 'Draper', 'Druid', 'Duke', 'Dyer',
        'Earl', 'Enchanter', 'Erelsman', 'Esmaryalan', 'Evins', 'Evoker',
        'Falconer', 'Falahite', 'Farrier', 'Fiddler', 'Fighter', 'Fisher', 'Fletcher', 'Foreman', 'Fowler', 'Freeman',
        'Gardener', 'Garland', 'Glasser', 'Glazer', 'Goldsmith', 'Green', 'Groom',
        'Haberdasher', 'Harper', 'Hatmaker', 'Holdman', 'Hooper', 'Horder', 'Horner', 'Horseman', 'Hunter',
        'Illusionist', 'Ironmonger',
        'Judge', 'Justice',
        'Keeper', 'Kitchener', 'King', 'Knight',
        'Lardiner', 'Lark', 'Leech', 'Lord',
        'Mage', 'Maison', 'Marions', 'Marshal', 'Masters', 'Mason', 'Messier', 'Messenger', 'Midwife', 'Minaran', 'Moneymaker', 'Monk', 'Moonsinger', 'Munasite',
        'Naismith', 'Napier', 'Nathalynic', 'Neratic',
        'Paige', 'Paladin', 'Painter', 'Pedler', 'Pegg', 'Piper', 'Pledger', 'Porter', 'Poulter', 'Prentice', 'Priest', 'Proctor', 'Purser',
        'Quilter',
        'Ranger', 'Rector', 'Red', 'Reeves', 'Ricards', 'Rider', 'Rogierman', 'Rogue', 'Roper', 'Ryalan',
        'Sadler', 'Sangster', 'Sargeant', 'Scarlett', 'Seaman', 'Senescall', 'Server', 'Shoemaker', 'Silk', 'Silversmith', 'Singer', 'Skinner', 'Smith', 'Soper', 'Sorcerer', 'Spearman', 'Spears', 'Spicer', 'Squire', 'Steele', 'Steward', 'Stoddard', 'Stringer', 'Sumpter',
        'Tailor', 'Tanner', 'Tapper', 'Taelarman', 'Tavenner', 'Taverner', 'Tearman', 'Tennant', 'Tinker', 'Tinner', 'Travers',
        'Usher',
        'Valens', 'Varils', 'Vincens',
        'Wagoner', 'Wainwright', 'Waite', 'Walker', 'Ward', 'Warden', 'Warlock', 'Waterworth', 'Weaver', 'Webber', 'Wheelwright', 'White', 'Wizard', 'Writer',
        'Yeoman', 'Yellow'

      ],
      noble: [
        'Blackroot',
        'Cliffman', 'Cursewood',
        'Escin',
        'Freetower',
        'Konwell', 
        'Lonesfield', 
        'Meléthsel', 
        'of Ainway', 'of Athana', 'of Beastsfall', 'of Brickhut', 'of Casnafort', 'of Corpsecliff', 'of Dovesroost', 'of Ettashall', 'of Fowlbarn', 'of Heartsridge', 'of Lichyard', 'of Maidens Hill', 'of Marked Tree', 'of Merrill', 'of Paredocks', 'of Patton', 'of Rigsby', 'of Rottenbank', 'of Selby', 'of Sentinel Hill', 'of Stoneford', 'of Twoflower', 'of Vanbury', 
        'Plumwall', 
        'Seinpírártharn', 
        'Silcalas', 'Silebor', 'Silgarion', 'Silistra', 'Silmuna', 'Silnara', 'Silurion', 'Stagborn', 
        'Taxwick', 
        'Whistlehill', 'Woodwell', 
        'síl Acrom', 'síl Aranth', 'síl Auraire', 'síl Bennon', 'síl Cestir', 'síl Carneter', 'síl Crothán', 'síl Cúniacaire', 'síl Deamóine', 'síl Ebenaire', 'síl Estallen', 'síl Galéinn', 'síl Gabelaire', 'síl Gabmórionn', 'síl Ilvan', 'síl Jexisthíl', 'síl Menibór', 'síl Munascestir', 'síl Obaithuan', 'síl Ordóin', 'síl Píraire', 'síl Ricancas', 'síl Silvelar', 'síl Thanallen', 'síl Themarenn', 'síl Triancóst', 'síl Verne', 'síl Vivin', 'síl Wesdam', 
        'sílna Gol', 'sílna Lence', 
        'sína Cóst', 'sína Cymainé', 'sína Lans', 'sína Dameston', 'sína Dhanvar', 'sína Gabciobis', 'sína Lakebór', 'sína Pantheonia', 'sína Petagvar', 'sína Pírgab', 'sína Pírrahe of Steepcliff'
      ]
    // },
    // japanese: {
    //   female: [
    //     'Sakura', 'Yuki', 'Akiko', 'Emiko', 'Mayumi', 'Naomi', 'Haruka', 'Michiko',
    //     'Ayaka', 'Yui', 'Rei', 'Miku', 'Aina', 'Kana', 'Saki', 'Yuna'
    //   ],
    //   male: [
    //     'Hiroshi', 'Takeshi', 'Kenji', 'Masato', 'Daisuke', 'Ryosuke', 'Shinji', 'Taro',
    //     'Akira', 'Koji', 'Hideo', 'Satoshi', 'Yuto', 'Riku', 'Sora', 'Kaito'
    //   ],
    //   neutral: [
    //     'Aki', 'Yuki', 'Nao', 'Ren', 'Shin', 'Kei', 'Jun', 'Haru',
    //     'Mio', 'Rio', 'Sho', 'Tomo', 'Yu', 'Ryo', 'Zen', 'Kai'
    //   ],
    //   commoner: [
    //     'Tanaka', 'Sato', 'Suzuki', 'Takahashi', 'Watanabe', 'Ito', 'Yamamoto', 'Nakamura',
    //     'Kobayashi', 'Kato', 'Yoshida', 'Yamada', 'Sasaki', 'Yamaguchi', 'Saito', 'Matsumoto'
    //   ],
    //   noble: [
    //     'Fujiwara', 'Minamoto', 'Taira', 'Tachibana', 'Ashikaga', 'Tokugawa', 'Oda', 'Takeda',
    //     'Uesugi', 'Shimazu', 'Mori', 'Hosokawa', 'Hatakeyama', 'Imagawa', 'Matsudaira', 'Ii'
    //   ]
    // },
    // spanish: {
    //   female: [
    //     'María', 'Carmen', 'Isabel', 'Ana', 'Elena', 'Sofía', 'Lucía', 'Gabriela',
    //     'Pilar', 'Rosa', 'Esperanza', 'Dolores', 'Inmaculada', 'Amparo', 'Remedios', 'Soledad'
    //   ],
    //   male: [
    //     'Carlos', 'Diego', 'Antonio', 'Rafael', 'Miguel', 'José', 'Francisco', 'Fernando',
    //     'Manuel', 'Alejandro', 'Pablo', 'Javier', 'Sergio', 'Andrés', 'Gonzalo', 'Emilio'
    //   ],
    //   neutral: [
    //     'Alex', 'Cris', 'Dani', 'Gabi', 'Isa', 'Javi', 'Lupe', 'Nati',
    //     'Pili', 'Rafa', 'Santi', 'Toni', 'Vale', 'Yago', 'Maxi', 'Beni'
    //   ],
    //   commoner: [
    //     'García', 'Rodríguez', 'González', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez',
    //     'Gómez', 'Martín', 'Jiménez', 'Ruiz', 'Hernández', 'Díaz', 'Moreno', 'Álvarez'
    //   ],
    //   noble: [
    //     'de Castilla', 'de León', 'de Aragón', 'de Mendoza', 'de Toledo', 'de Guzmán', 'de Alba', 'de Osuna',
    //     'de Medina', 'de Córdoba', 'de Velasco', 'de Enríquez', 'de la Cerda', 'de Sandoval', 'de Manrique', 'de Lara'
    //   ]
    // },
    // arabic: {
    //   female: [
    //     'Fatima', 'Aisha', 'Zahra', 'Amina', 'Nour', 'Layla', 'Maryam', 'Khadija',
    //     'Yasmin', 'Salma', 'Zara', 'Leila', 'Samira', 'Farah', 'Dina', 'Hala'
    //   ],
    //   male: [
    //     'Ahmad', 'Omar', 'Ali', 'Hassan', 'Khalid', 'Youssef', 'Ibrahim', 'Saeed',
    //     'Mohammed', 'Rashid', 'Tariq', 'Amr', 'Karim', 'Faisal', 'Nasser', 'Waleed'
    //   ],
    //   neutral: [
    //     'Noor', 'Jana', 'Rami', 'Salam', 'Farid', 'Rana', 'Samir', 'Tala',
    //     'Amin', 'Dana', 'Reem', 'Zain', 'Laith', 'Maya', 'Nada', 'Rayan'
    //   ],
    //   commoner: [
    //     'Al-Ahmad', 'Al-Hassan', 'Al-Omar', 'Al-Ali', 'Al-Mahmoud', 'Al-Salem', 'Al-Rashid', 'Al-Khalil',
    //     'Al-Nasser', 'Al-Mansour', 'Al-Faraj', 'Al-Qasim', 'Al-Zahra', 'Al-Hamid', 'Al-Saeed', 'Al-Kareem'
    //   ],
    //   noble: [
    //     'Al-Hashemi', 'Al-Qureshi', 'Al-Abbasi', 'Al-Umayyad', 'Al-Fatimi', 'Al-Ayyubi', 'Al-Mamluki', 'Al-Sharif',
    //     'Ibn Sina', 'Ibn Rushd', 'Al-Andalusi', 'Al-Baghdadi', 'Al-Dimashqi', 'Al-Misri', 'Al-Maghribi', 'Al-Yamani'
    //   ]
    // },
    // norse: {
    //   female: [
    //     'Astrid', 'Ingrid', 'Sigrid', 'Freydis', 'Helga', 'Brunhilde', 'Solveig', 'Gudrun',
    //     'Thora', 'Ragnhild', 'Signe', 'Liv', 'Greta', 'Kari', 'Inga', 'Brynhild'
    //   ],
    //   male: [
    //     'Erik', 'Bjorn', 'Magnus', 'Olaf', 'Ragnar', 'Thor', 'Leif', 'Harald',
    //     'Gunnar', 'Sven', 'Nils', 'Ulf', 'Ivar', 'Sigurd', 'Torstein', 'Hakon'
    //   ],
    //   neutral: [
    //     'Ari', 'Rune', 'Storm', 'Björk', 'Frost', 'Vale', 'Ash', 'River',
    //     'Stone', 'Wolf', 'Raven', 'Bear', 'Sky', 'Winter', 'Dawn', 'North'
    //   ],
    //   commoner: [
    //     'Erikson', 'Bjornsson', 'Magnusson', 'Olafsson', 'Ragnarsson', 'Thorsson', 'Leifsson', 'Haraldsson',
    //     'Andersson', 'Jonsson', 'Larsson', 'Nielsson', 'Gunnarsson', 'Svenson', 'Karlsson', 'Petersson'
    //   ],
    //   noble: [
    //     'Ironside', 'Bloodaxe', 'Fairhair', 'Bluetooth', 'Forkbeard', 'the Bold', 'the Great', 'Dragonslayer',
    //     'Wolfsbane', 'Stormborn', 'Goldbeard', 'Ravenclaw', 'Ironwill', 'Strongarm', 'Battleborn', 'Kingmaker'
    //   ]
    // },
    // irish: {
    //   female: [
    //     'Aoife', 'Niamh', 'Siobhan', 'Róisín', 'Aisling', 'Maeve', 'Brigid', 'Ciara',
    //     'Orla', 'Sinead', 'Deirdre', 'Fiona', 'Grainne', 'Nuala', 'Mairead', 'Sorcha'
    //   ],
    //   male: [
    //     'Cian', 'Oisín', 'Tadgh', 'Finn', 'Cormac', 'Sean', 'Conor', 'Declan',
    //     'Eoin', 'Ruairi', 'Darragh', 'Cillian', 'Seamus', 'Padraig', 'Colm', 'Donal'
    //   ],
    //   neutral: [
    //     'Rian', 'Saoirse', 'Rowan', 'River', 'Sage', 'Quinn', 'Rory', 'Casey',
    //     'Kerry', 'Shannon', 'Peyton', 'Emery', 'Finley', 'Riley', 'Cary', 'Blair'
    //   ],
    //   commoner: [
    //     "O'Brien", "O'Connor", "O'Sullivan", "O'Neill", "McCarthy", "Murphy", "Kelly", "Ryan",
    //     "Walsh", "Byrne", "Quinn", "Doyle", "Flanagan", "Gallagher", "Fitzgerald", "Brennan"
    //   ],
    //   noble: [
    //     "O'Neill of Tyrone", "MacCarthy Mór", "O'Brien of Thomond", "O'Connor of Connacht", "MacMurrough Kavanagh", "Fitzgerald of Desmond",
    //     "O'Donnell of Tyrconnell", "MacCarthy of Muskerry", "O'Sullivan Mór", "O'Callaghan", "MacGillycuddy", "The O'Rahilly",
    //     "O'Grady of Kilballyowen", "MacDermot of Moylurg", "O'Kelly of Ui Maine", "MacNamara of Clancullen"
    //   ]
    // }
  };

  // Function to generate random names based on user selections
  const generateName = () => {
    // Get the appropriate name arrays based on user choices
    const firstNames = nameDatabase[selectedCulture][selectedGender];
    const surnames = nameDatabase[selectedSurnameCulture][selectedSocialClass];
    
    // Generate random indices to pick names from arrays
    const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
    const randomSurnameIndex = Math.floor(Math.random() * surnames.length);
    
    // Update state with the randomly selected names
    setGeneratedName(firstNames[randomFirstIndex]);
    setGeneratedSurname(surnames[randomSurnameIndex]);
  };

  // Extract culture names from database keys for dropdown options
  const cultures = Object.keys(nameDatabase);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Cultural Name Generator
      </h1>
      
      <div className="space-y-4">
        {/* First dropdown: selects culture for first names */}
        <div>
          <label htmlFor="culture-select" className="block text-sm font-medium text-gray-700 mb-2">
            First Name Culture:
          </label>
          <select
            id="culture-select"
            value={selectedCulture}
            onChange={(e) => setSelectedCulture(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {/* Map through cultures array to create option elements */}
            {cultures.map(culture => (
              <option key={culture} value={culture}>
                {culture.charAt(0).toUpperCase() + culture.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Second dropdown: selects culture for surnames */}
        <div>
          <label htmlFor="surname-culture-select" className="block text-sm font-medium text-gray-700 mb-2">
            Surname Culture:
          </label>
          <select
            id="surname-culture-select"
            value={selectedSurnameCulture}
            onChange={(e) => setSelectedSurnameCulture(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {cultures.map(culture => (
              <option key={culture} value={culture}>
                {culture.charAt(0).toUpperCase() + culture.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Third dropdown: selects gender for first names */}
        <div>
          <label htmlFor="gender-select" className="block text-sm font-medium text-gray-700 mb-2">
            Gender:
          </label>
          <select
            id="gender-select"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="neutral">Gender Neutral</option>
          </select>
        </div>

        {/* Fourth dropdown: selects social class (commoner vs noble) */}
        <div>
          <label htmlFor="social-class-select" className="block text-sm font-medium text-gray-700 mb-2">
            Social Class:
          </label>
          <select
            id="social-class-select"
            value={selectedSocialClass}
            onChange={(e) => setSelectedSocialClass(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="commoner">Commoner</option>
            <option value="noble">Noble</option>
          </select>
        </div>

        {/* Button that triggers name generation */}
        <button
          onClick={generateName}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
        >
          Generate Name
        </button>

        {/* Conditional rendering: only show results if names have been generated */}
        {(generatedName || generatedSurname) && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md border">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Generated Name:</h2>
            <p className="text-xl font-bold text-blue-600">{generatedName} {generatedSurname}</p>
            <div className="text-sm text-gray-500 mt-1">
              <p>{selectedGender.charAt(0).toUpperCase() + selectedGender.slice(1)} name from {selectedCulture.charAt(0).toUpperCase() + selectedCulture.slice(1)} culture</p>
              <p>Surname from {selectedSurnameCulture.charAt(0).toUpperCase() + selectedSurnameCulture.slice(1)} culture ({selectedSocialClass})</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameGenerator;