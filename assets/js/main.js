lucide.createIcons();

// Country calling codes (contact.html phone field)
const countryCodes = [
  ['🇦🇫', 'Afghanistan', '+93'], ['🇦🇱', 'Albania', '+355'], ['🇩🇿', 'Algeria', '+213'],
  ['🇦🇩', 'Andorra', '+376'], ['🇦🇴', 'Angola', '+244'], ['🇦🇬', 'Antigua & Barbuda', '+1268'],
  ['🇦🇷', 'Argentina', '+54'], ['🇦🇲', 'Armenia', '+374'], ['🇦🇺', 'Australia', '+61'],
  ['🇦🇹', 'Austria', '+43'], ['🇦🇿', 'Azerbaijan', '+994'], ['🇧🇸', 'Bahamas', '+1242'],
  ['🇧🇭', 'Bahrain', '+973'], ['🇧🇩', 'Bangladesh', '+880'], ['🇧🇧', 'Barbados', '+1246'],
  ['🇧🇾', 'Belarus', '+375'], ['🇧🇪', 'Belgium', '+32'], ['🇧🇿', 'Belize', '+501'],
  ['🇧🇯', 'Benin', '+229'], ['🇧🇹', 'Bhutan', '+975'], ['🇧🇴', 'Bolivia', '+591'],
  ['🇧🇦', 'Bosnia & Herzegovina', '+387'], ['🇧🇼', 'Botswana', '+267'], ['🇧🇷', 'Brazil', '+55'],
  ['🇧🇳', 'Brunei', '+673'], ['🇧🇬', 'Bulgaria', '+359'], ['🇧🇫', 'Burkina Faso', '+226'],
  ['🇧🇮', 'Burundi', '+257'], ['🇰🇭', 'Cambodia', '+855'], ['🇨🇲', 'Cameroon', '+237'],
  ['🇨🇦', 'Canada', '+1'], ['🇨🇻', 'Cabo Verde', '+238'], ['🇨🇫', 'Central African Republic', '+236'],
  ['🇹🇩', 'Chad', '+235'], ['🇨🇱', 'Chile', '+56'], ['🇨🇳', 'China', '+86'],
  ['🇨🇴', 'Colombia', '+57'], ['🇰🇲', 'Comoros', '+269'], ['🇨🇬', 'Congo', '+242'],
  ['🇨🇩', 'Congo (DRC)', '+243'], ['🇨🇷', 'Costa Rica', '+506'], ['🇭🇷', 'Croatia', '+385'],
  ['🇨🇺', 'Cuba', '+53'], ['🇨🇾', 'Cyprus', '+357'], ['🇨🇿', 'Czechia', '+420'],
  ['🇩🇰', 'Denmark', '+45'], ['🇩🇯', 'Djibouti', '+253'], ['🇩🇲', 'Dominica', '+1767'],
  ['🇩🇴', 'Dominican Republic', '+1809'], ['🇪🇨', 'Ecuador', '+593'], ['🇪🇬', 'Egypt', '+20'],
  ['🇸🇻', 'El Salvador', '+503'], ['🇬🇶', 'Equatorial Guinea', '+240'], ['🇪🇷', 'Eritrea', '+291'],
  ['🇪🇪', 'Estonia', '+372'], ['🇸🇿', 'Eswatini', '+268'], ['🇪🇹', 'Ethiopia', '+251'],
  ['🇫🇯', 'Fiji', '+679'], ['🇫🇮', 'Finland', '+358'], ['🇫🇷', 'France', '+33'],
  ['🇬🇦', 'Gabon', '+241'], ['🇬🇲', 'Gambia', '+220'], ['🇬🇪', 'Georgia', '+995'],
  ['🇩🇪', 'Germany', '+49'], ['🇬🇭', 'Ghana', '+233'], ['🇬🇷', 'Greece', '+30'],
  ['🇬🇩', 'Grenada', '+1473'], ['🇬🇹', 'Guatemala', '+502'], ['🇬🇳', 'Guinea', '+224'],
  ['🇬🇼', 'Guinea-Bissau', '+245'], ['🇬🇾', 'Guyana', '+592'], ['🇭🇹', 'Haiti', '+509'],
  ['🇭🇳', 'Honduras', '+504'], ['🇭🇰', 'Hong Kong', '+852'], ['🇭🇺', 'Hungary', '+36'],
  ['🇮🇸', 'Iceland', '+354'], ['🇮🇳', 'India', '+91'], ['🇮🇩', 'Indonesia', '+62'],
  ['🇮🇷', 'Iran', '+98'], ['🇮🇶', 'Iraq', '+964'], ['🇮🇪', 'Ireland', '+353'],
  ['🇮🇱', 'Israel', '+972'], ['🇮🇹', 'Italy', '+39'], ['🇯🇲', 'Jamaica', '+1876'],
  ['🇯🇵', 'Japan', '+81'], ['🇯🇴', 'Jordan', '+962'], ['🇰🇿', 'Kazakhstan', '+7'],
  ['🇰🇪', 'Kenya', '+254'], ['🇰🇮', 'Kiribati', '+686'], ['🇽🇰', 'Kosovo', '+383'],
  ['🇰🇼', 'Kuwait', '+965'], ['🇰🇬', 'Kyrgyzstan', '+996'], ['🇱🇦', 'Laos', '+856'],
  ['🇱🇻', 'Latvia', '+371'], ['🇱🇧', 'Lebanon', '+961'], ['🇱🇸', 'Lesotho', '+266'],
  ['🇱🇷', 'Liberia', '+231'], ['🇱🇾', 'Libya', '+218'], ['🇱🇮', 'Liechtenstein', '+423'],
  ['🇱🇹', 'Lithuania', '+370'], ['🇱🇺', 'Luxembourg', '+352'], ['🇲🇴', 'Macao', '+853'],
  ['🇲🇬', 'Madagascar', '+261'], ['🇲🇼', 'Malawi', '+265'], ['🇲🇾', 'Malaysia', '+60'],
  ['🇲🇻', 'Maldives', '+960'], ['🇲🇱', 'Mali', '+223'], ['🇲🇹', 'Malta', '+356'],
  ['🇲🇭', 'Marshall Islands', '+692'], ['🇲🇷', 'Mauritania', '+222'], ['🇲🇺', 'Mauritius', '+230'],
  ['🇲🇽', 'Mexico', '+52'], ['🇫🇲', 'Micronesia', '+691'], ['🇲🇩', 'Moldova', '+373'],
  ['🇲🇨', 'Monaco', '+377'], ['🇲🇳', 'Mongolia', '+976'], ['🇲🇪', 'Montenegro', '+382'],
  ['🇲🇦', 'Morocco', '+212'], ['🇲🇿', 'Mozambique', '+258'], ['🇲🇲', 'Myanmar', '+95'],
  ['🇳🇦', 'Namibia', '+264'], ['🇳🇷', 'Nauru', '+674'], ['🇳🇵', 'Nepal', '+977'],
  ['🇳🇱', 'Netherlands', '+31'], ['🇳🇿', 'New Zealand', '+64'], ['🇳🇮', 'Nicaragua', '+505'],
  ['🇳🇪', 'Niger', '+227'], ['🇳🇬', 'Nigeria', '+234'], ['🇰🇵', 'North Korea', '+850'],
  ['🇲🇰', 'North Macedonia', '+389'], ['🇳🇴', 'Norway', '+47'], ['🇴🇲', 'Oman', '+968'],
  ['🇵🇰', 'Pakistan', '+92'], ['🇵🇼', 'Palau', '+680'], ['🇵🇸', 'Palestine', '+970'],
  ['🇵🇦', 'Panama', '+507'], ['🇵🇬', 'Papua New Guinea', '+675'], ['🇵🇾', 'Paraguay', '+595'],
  ['🇵🇪', 'Peru', '+51'], ['🇵🇭', 'Philippines', '+63'], ['🇵🇱', 'Poland', '+48'],
  ['🇵🇹', 'Portugal', '+351'], ['🇶🇦', 'Qatar', '+974'], ['🇷🇴', 'Romania', '+40'],
  ['🇷🇺', 'Russia', '+7'], ['🇷🇼', 'Rwanda', '+250'], ['🇰🇳', 'Saint Kitts & Nevis', '+1869'],
  ['🇱🇨', 'Saint Lucia', '+1758'], ['🇻🇨', 'Saint Vincent & the Grenadines', '+1784'],
  ['🇼🇸', 'Samoa', '+685'], ['🇸🇲', 'San Marino', '+378'], ['🇸🇹', 'Sao Tome & Principe', '+239'],
  ['🇸🇦', 'Saudi Arabia', '+966'], ['🇸🇳', 'Senegal', '+221'], ['🇷🇸', 'Serbia', '+381'],
  ['🇸🇨', 'Seychelles', '+248'], ['🇸🇱', 'Sierra Leone', '+232'], ['🇸🇬', 'Singapore', '+65'],
  ['🇸🇰', 'Slovakia', '+421'], ['🇸🇮', 'Slovenia', '+386'], ['🇸🇧', 'Solomon Islands', '+677'],
  ['🇸🇴', 'Somalia', '+252'], ['🇿🇦', 'South Africa', '+27'], ['🇰🇷', 'South Korea', '+82'],
  ['🇸🇸', 'South Sudan', '+211'], ['🇪🇸', 'Spain', '+34'], ['🇱🇰', 'Sri Lanka', '+94'],
  ['🇸🇩', 'Sudan', '+249'], ['🇸🇷', 'Suriname', '+597'], ['🇸🇪', 'Sweden', '+46'],
  ['🇨🇭', 'Switzerland', '+41'], ['🇸🇾', 'Syria', '+963'], ['🇹🇼', 'Taiwan', '+886'],
  ['🇹🇯', 'Tajikistan', '+992'], ['🇹🇿', 'Tanzania', '+255'], ['🇹🇭', 'Thailand', '+66'],
  ['🇹🇱', 'Timor-Leste', '+670'], ['🇹🇬', 'Togo', '+228'], ['🇹🇴', 'Tonga', '+676'],
  ['🇹🇹', 'Trinidad & Tobago', '+1868'], ['🇹🇳', 'Tunisia', '+216'], ['🇹🇷', 'Turkey', '+90'],
  ['🇹🇲', 'Turkmenistan', '+993'], ['🇹🇻', 'Tuvalu', '+688'], ['🇺🇬', 'Uganda', '+256'],
  ['🇺🇦', 'Ukraine', '+380'], ['🇦🇪', 'United Arab Emirates', '+971'], ['🇬🇧', 'United Kingdom', '+44'],
  ['🇺🇸', 'United States', '+1'], ['🇺🇾', 'Uruguay', '+598'], ['🇺🇿', 'Uzbekistan', '+998'],
  ['🇻🇺', 'Vanuatu', '+678'], ['🇻🇦', 'Vatican City', '+379'], ['🇻🇪', 'Venezuela', '+58'],
  ['🇻🇳', 'Vietnam', '+84'], ['🇾🇪', 'Yemen', '+967'], ['🇿🇲', 'Zambia', '+260'],
  ['🇿🇼', 'Zimbabwe', '+263'],
];

// Generic list-style custom dropdown (toggle button + scrollable option list)
function initListDropdown(root, { options, hiddenInputSelector, isSelected, formatOption, formatValue, onSelect }) {
  const toggle = root.querySelector('.code-select__toggle');
  const valueEl = root.querySelector('.code-select__value');
  const list = root.querySelector('.code-select__list');
  const hiddenInput = root.querySelector(hiddenInputSelector);

  list.innerHTML = options.map((opt) => {
    const selected = isSelected(opt);
    const { label, value } = formatOption(opt);
    if (selected) {
      hiddenInput.value = value;
      valueEl.textContent = formatValue(opt);
      if (onSelect) onSelect(opt);
    }
    return `<li class="code-select__option${selected ? ' active' : ''}" role="option" data-value="${value}">${label}</li>`;
  }).join('');

  function close() {
    root.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const isOpen = root.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  list.addEventListener('click', (e) => {
    const option = e.target.closest('.code-select__option');
    if (!option) return;
    list.querySelectorAll('.code-select__option').forEach(o => o.classList.remove('active'));
    option.classList.add('active');
    hiddenInput.value = option.dataset.value;
    valueEl.textContent = option.textContent;
    root.classList.remove('invalid');
    const opt = options.find((o) => formatOption(o).value === option.dataset.value);
    if (onSelect && opt !== undefined) onSelect(opt);
    close();
  });

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) close();
  });
}

// Typical national phone number length (digit count, excluding country code) by ISO code.
// Falls back to a broad 7–10 digit range for any country not listed.
const phoneLengths = {
  AF: [9, 9], AL: [9, 9], DZ: [9, 9], AD: [6, 6], AO: [9, 9], AG: [7, 7], AR: [10, 10],
  AM: [8, 8], AU: [9, 9], AT: [10, 13], AZ: [9, 9], BS: [7, 7], BH: [8, 8], BD: [10, 10],
  BB: [7, 7], BY: [9, 9], BE: [9, 9], BZ: [7, 7], BJ: [8, 8], BT: [7, 8], BO: [8, 8],
  BA: [8, 8], BW: [7, 8], BR: [10, 11], BN: [7, 7], BG: [9, 9], BF: [8, 8], BI: [8, 8],
  KH: [8, 9], CM: [9, 9], CA: [10, 10], CV: [7, 7], CF: [8, 8], TD: [8, 8], CL: [9, 9],
  CN: [11, 11], CO: [10, 10], KM: [7, 7], CG: [9, 9], CD: [9, 9], CR: [8, 8], HR: [8, 9],
  CU: [8, 8], CY: [8, 8], CZ: [9, 9], DK: [8, 8], DJ: [8, 8], DM: [7, 7], DO: [10, 10],
  EC: [9, 9], EG: [10, 10], SV: [8, 8], GQ: [9, 9], ER: [7, 7], EE: [7, 8], SZ: [8, 8],
  ET: [9, 9], FJ: [7, 7], FI: [9, 10], FR: [9, 9], GA: [7, 8], GM: [7, 7], GE: [9, 9],
  DE: [10, 11], GH: [9, 9], GR: [10, 10], GD: [7, 7], GT: [8, 8], GN: [9, 9], GW: [7, 7],
  GY: [7, 7], HT: [8, 8], HN: [8, 8], HK: [8, 8], HU: [9, 9], IS: [7, 7], IN: [10, 10],
  ID: [9, 12], IR: [10, 10], IQ: [10, 10], IE: [9, 9], IL: [9, 9], IT: [9, 10], JM: [7, 7],
  JP: [10, 10], JO: [9, 9], KZ: [10, 10], KE: [9, 9], KI: [8, 8], XK: [8, 8], KW: [8, 8],
  KG: [9, 9], LA: [9, 10], LV: [8, 8], LB: [7, 8], LS: [8, 8], LR: [8, 8], LY: [9, 9],
  LI: [7, 9], LT: [8, 8], LU: [9, 9], MO: [8, 8], MG: [9, 9], MW: [7, 9], MY: [9, 10],
  MV: [7, 7], ML: [8, 8], MT: [8, 8], MH: [7, 7], MR: [8, 8], MU: [7, 8], MX: [10, 10],
  FM: [7, 7], MD: [8, 8], MC: [8, 9], MN: [8, 8], ME: [8, 8], MA: [9, 9], MZ: [9, 9],
  MM: [7, 9], NA: [9, 9], NR: [7, 7], NP: [9, 10], NL: [9, 9], NZ: [8, 9], NI: [8, 8],
  NE: [8, 8], NG: [10, 10], KP: [6, 10], MK: [8, 8], NO: [8, 8], OM: [8, 8], PK: [10, 10],
  PW: [7, 7], PS: [9, 9], PA: [7, 8], PG: [8, 8], PY: [9, 9], PE: [9, 9], PH: [10, 10],
  PL: [9, 9], PT: [9, 9], QA: [8, 8], RO: [9, 9], RU: [10, 10], RW: [9, 9], KN: [7, 7],
  LC: [7, 7], VC: [7, 7], WS: [7, 7], SM: [6, 10], ST: [7, 7], SA: [9, 9], SN: [9, 9],
  RS: [8, 9], SC: [7, 7], SL: [8, 8], SG: [8, 8], SK: [9, 9], SI: [8, 8], SB: [7, 7],
  SO: [8, 8], ZA: [9, 9], KR: [9, 10], SS: [9, 9], ES: [9, 9], LK: [9, 9], SD: [9, 9],
  SR: [6, 7], SE: [7, 9], CH: [9, 9], SY: [9, 9], TW: [9, 9], TJ: [9, 9], TZ: [9, 9],
  TH: [9, 9], TL: [7, 8], TG: [8, 8], TO: [5, 7], TT: [7, 7], TN: [8, 8], TR: [10, 10],
  TM: [8, 8], TV: [5, 6], UG: [9, 9], UA: [9, 9], AE: [9, 9], GB: [10, 10], US: [10, 10],
  UY: [8, 8], UZ: [9, 9], VU: [7, 7], VA: [10, 10], VE: [10, 10], VN: [9, 10], YE: [9, 9],
  ZM: [9, 9], ZW: [9, 9],
};
const defaultPhoneLength = [7, 10];

const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phone-error');
let phoneRange = phoneLengths.BT;
let phoneISO = 'BT';

function validatePhone() {
  if (!phoneInput) return;
  const digits = phoneInput.value.replace(/\D/g, '');
  const [min, max] = phoneRange;
  const expected = min === max ? `${min} digits` : `${min}–${max} digits`;

  if (!digits) {
    phoneInput.setCustomValidity('');
    phoneInput.classList.remove('invalid');
    if (phoneError) phoneError.textContent = '';
    return;
  }
  if (digits.length < min || digits.length > max) {
    phoneInput.setCustomValidity(`Required: ${expected} for ${phoneISO}.`);
    phoneInput.classList.add('invalid');
    if (phoneError) phoneError.textContent = `Required: ${expected} for ${phoneISO}.`;
  } else {
    phoneInput.setCustomValidity('');
    phoneInput.classList.remove('invalid');
    if (phoneError) phoneError.textContent = '';
  }
}
if (phoneInput) {
  phoneInput.addEventListener('input', validatePhone);
}

const codeSelect = document.getElementById('code-select');
if (codeSelect) {
  const flagToISO = (flag) => [...flag].map(c => String.fromCharCode(c.codePointAt(0) - 0x1F1E6 + 65)).join('');
  initListDropdown(codeSelect, {
    options: countryCodes,
    hiddenInputSelector: '#phone-code',
    isSelected: ([flag]) => flagToISO(flag) === 'BT',
    formatOption: ([flag, name, code]) => ({ label: `${flagToISO(flag)} ${code}`, value: code }),
    formatValue: ([flag, name, code]) => `${flagToISO(flag)} ${code}`,
    onSelect: ([flag]) => {
      const iso = flagToISO(flag);
      phoneISO = iso;
      phoneRange = phoneLengths[iso] || defaultPhoneLength;
      if (phoneInput) {
        phoneInput.maxLength = phoneRange[1];
        validatePhone();
      }
    },
  });
}

const tourSelect = document.getElementById('tour-select');
if (tourSelect) {
  const tourOptions = [
    'Cultural Immersion Tour',
    'Himalayan Trekking',
    'Luxury Escape',
    'Wildlife & Nature',
    'Festival Tour',
    'Family Adventure',
    'Custom / Not sure yet',
  ];
  initListDropdown(tourSelect, {
    options: tourOptions,
    hiddenInputSelector: '#tour',
    isSelected: () => false,
    formatOption: (name) => ({ label: name, value: name }),
    formatValue: (name) => name,
  });
}

// Preferred Travel Date — block past dates, whether typed or picked
const datesInput = document.getElementById('dates');
if (datesInput) {
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
  datesInput.min = todayStr;
  datesInput.addEventListener('input', () => {
    if (datesInput.value && datesInput.value < todayStr) {
      datesInput.value = todayStr;
    }
  });
}

// Solid header background once the page scrolls past the hero
const header = document.querySelector('.site-header');
function updateHeader() {
  header.classList.toggle('scrolled', window.scrollY > 40);
}
updateHeader();
window.addEventListener('scroll', updateHeader);

// Mobile drawer toggle
const menuBtn = document.getElementById('menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const drawer = document.getElementById('mobile-drawer');
const overlay = document.getElementById('mobile-overlay');

function openMenu() {
  drawer.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  drawer.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Smooth scroll for nav links (native CSS scroll-behavior handles most,
// this ensures anchor offsets account for the fixed header)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - headerOffset, behavior: 'smooth' });
    }
  });
});

// Contact form (no backend — acknowledge the inquiry client-side)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    validatePhone();
    let valid = contactForm.reportValidity();

    const tourHidden = document.getElementById('tour');
    if (!tourHidden.value) {
      valid = false;
      tourSelect.classList.add('invalid');
      tourSelect.querySelector('.code-select__toggle').focus();
    } else {
      tourSelect.classList.remove('invalid');
    }

    if (!valid) return;

    document.getElementById('form-success').classList.remove('hidden');
    contactForm.reset();
    tourSelect.querySelector('.code-select__value').textContent = 'Select a tour…';
    tourSelect.querySelectorAll('.code-select__option').forEach(o => o.classList.remove('active'));
  });
}

// Tour filter pills (tours.html)
const tourFilters = document.querySelectorAll('.tour-filter');
const tourCards = document.querySelectorAll('.tour-card');
if (tourFilters.length && tourCards.length) {
  tourFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      tourFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      tourCards.forEach(card => {
        const categories = (card.dataset.category || '').split(' ');
        const show = filter === 'all' || categories.includes(filter);
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}

// Itinerary day accordion (itinerary.html)
document.querySelectorAll('.itinerary-day__toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const reveal = toggle.nextElementSibling;
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    reveal.classList.toggle('open', !isOpen);
  });
});

// Scroll-triggered fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
