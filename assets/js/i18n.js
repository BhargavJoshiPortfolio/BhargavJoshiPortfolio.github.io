(function () {
	'use strict';

	var STORAGE_KEY = 'bj-lang';

	var translations = {
		en: {
			roles: [
				'INSEAD MBA Candidate, Class of ‘26',
				'Finance, Strategy & AI for Fintech',
				'Building toward Finance & Strategy',
				'Ex-Product Owner, XR & AI',
				'Engineer turned Strategist'
			],

			'nav.about': 'About',
			'nav.experience': 'Experience',
			'nav.projects': 'Projects',
			'nav.skills': 'Skills',
			'nav.education': 'Education',
			'nav.contact': 'Contact',
			'nav.resume': 'Resume',

			'hero.eyebrow': 'Fontainebleau, France · Open to full-time roles',
			'hero.greeting': 'Hi, I’m',
			'hero.rolePrefix': 'Currently',
			'hero.summary': 'I’ve spent the last five years turning ambitious tech ideas into products people actually used, including an AR/VR platform reaching 50,000+ students. Now at INSEAD, I’m learning to ask the strategic and financial questions that come before the build.',
			'hero.ctaWork': 'View my work',
			'hero.ctaContact': 'Get in touch',
			'hero.stat1': 'Market GTM strategy led',
			'hero.stat2': 'Students reached via product',
			'hero.stat3': 'Cost reduction delivered',
			'hero.stat4': 'Languages spoken',

			'about.kicker': 'About',
			'about.title': 'A bit about me',
			'about.photoBadge': 'INSEAD MBA<br>Class of Dec 2026',
			'about.p1': 'I have a background in Robotics and Automation and spent the last five years building AR and VR applications in Unity, across roles at Siemens, LUCE Stiftung and Reiser Simulation and Training. Somewhere along the way I moved from writing the code to owning the product: leading an e-learning platform used by 50,000+ students, then a VR training tool for aviation maintenance that cut training costs by an estimated 75%.',
			'about.p2': 'That shift toward the business side of the work is what brought me to INSEAD, where I’m studying corporate strategy, financial analysis and negotiations. I’m also a fairly active investor on the side, applying bottom-up fundamental analysis to tech companies (up 87% on my personal portfolio since 2023).',
			'about.p3': 'I’m looking for a role in <strong>finance, consulting or strategy</strong> where I can put that mix of technical background and financial thinking to use.',
			'about.pillar1.title': 'Strategic & Financial Analysis',
			'about.pillar1.desc': 'Corporate strategy, financial modelling, GTM & market sizing',
			'about.pillar2.title': 'Cross-functional Leadership',
			'about.pillar2.desc': 'Led teams of up to 25 across 10+ nationalities, agile delivery',
			'about.pillar3.title': 'Applied Technology',
			'about.pillar3.desc': 'Agentic AI & automation, product engineering background',

			'exp.kicker': 'Career so far',
			'exp.title': 'Experience',

			'exp.insead.role': 'MBA Candidate',
			'exp.insead.org': 'INSEAD · Fontainebleau, France',
			'exp.insead.b1': 'Awarded the INSEAD Diversity Fund Scholarship',
			'exp.insead.b2': 'Active contributor in the PE & VC, TMT and Football clubs',
			'exp.insead.b3': 'Coursework in Corporate Strategy, Financial Analysis, Corporate Finance Policy, Investment & Asset Management and Negotiations',

			'exp.infosys.role': 'Financial Services GTM Strategist & AI Evangelist',
			'exp.infosys.org': 'Infosys Ltd · Düsseldorf, Germany',
			'exp.infosys.b1': 'Led market intelligence and GTM strategy for Infosys’s financial services business across Luxembourg’s €8.3T wealth management sector, scoring and prioritising 13 target firms',
			'exp.infosys.b2': 'Built and deployed sales intelligence dashboards in React and TypeScript using an agentic Claude workflow, delivering 10+ interactive demos that replaced static pitch decks for client presentations',

			'exp.reiser.role': 'Product Owner, XR Integrator',
			'exp.reiser.org': 'Reiser Simulation and Training GmbH · Berg, Germany',
			'exp.reiser.b1': 'Spotted a gap in the defence maintenance training market and led a VR helicopter maintenance trainer from concept to client demo, cutting costs by an estimated 75% (about €600K saved on an €800K asset)',
			'exp.reiser.b2': 'Self-taught Unreal Engine and C++ within three weeks with no team precedent, then built 15+ reusable VR templates that became the internal development standard',
			'exp.reiser.b3': 'Led a team of 4 inside a 25-person agile organisation spanning 10+ nationalities, delivering certified simulation experiences for aviation and defence clients',

			'exp.luce.role': 'Product Owner, Software Developer',
			'exp.luce.org': 'LUCE Stiftung · Nuremberg, Germany',
			'exp.luce.b1': 'Co-led product vision for LUMIS Campus, an award-winning e-learning platform used by 50,000+ students, turning client requirements into a roadmap across a 3-year project',
			'exp.luce.b2': 'Delivered an AR remote maintenance app for BHS Corrugated, showcased to 100+ prospective clients at industry exhibitions',
			'exp.luce.b3': 'Turned around a failing VR deployment in 48 hours ahead of a major industry expo, and separately taught a 2-week VR curriculum in German',
			'exp.luce.b4': 'Led a team of 3, introducing structured workflows that halved onboarding time and increased delivery reliability',

			'exp.siemens.role': 'Intern & Master’s Thesis',
			'exp.siemens.org': 'Siemens AG · Nuremberg, Germany',
			'exp.siemens.desc': 'Built an early proof of concept for AR in industrial automation, connecting HoloLens 2 to live machine data. It was later adopted as a framework by the R&D team.',

			'exp.automation.role': 'Automation Engineer',
			'exp.automation.org': 'Richfield Automation Ltd · Nashik, India',
			'exp.automation.desc': 'Designed and commissioned custom conveyor systems and special-purpose machines for industrial clients, from customer brief through to delivery.',

			'proj.kicker': 'Selected work',
			'proj.title': 'Projects',
			'proj.lede': 'A mix of finance and strategy work from INSEAD, plus the XR projects I built before it.',
			'proj.sub1': 'Finance & Strategy',
			'proj.badgeSoon': 'In progress',
			'proj.sub2': 'Engineering Foundations',
			'proj.comingSoon': 'Coming soon, link to follow',
			'proj.viewLive': 'View live',
			'proj.viewCode': 'View code',

			'proj.equity.title': 'Equity Research Portfolio',
			'proj.equity.desc': 'Independent research on 7 public companies across AI, defence and semiconductors: bull and bear cases, valuation, and 3-year price charts for each. Same bottom-up approach behind my personal portfolio (up 87% since 2023).',

			'proj.market.title': 'Market-Entry Strategy Case Study',
			'proj.market.desc': 'A consulting-style case study working through a market-entry decision end to end: market sizing, competitive analysis and a final recommendation, laid out as a strategy deck.',

			'proj.pevc.title': 'PE & VC: Pre-Seed Research',
			'proj.pevc.desc': 'Diligence-style research into pre-seed startups, evaluating founding teams, market thesis and early traction the way an investor would. Ties back to my work with INSEAD’s PE & VC club.',

			'proj.vat.title': 'Virtual Apartment Tour',
			'proj.vat.desc': 'A low-cost mobile VR experience letting prospective tenants tour an apartment remotely. Built in Unity with Google’s Cardboard XR plugin and teleport-based navigation.',

			'proj.aipa.title': 'AIPA, a Personal AI Assistant',
			'proj.aipa.desc': 'A talking avatar that answers questions about me in real time. Built with a Ready Player Me avatar, the Convai plugin and a custom knowledge base in Unity.',
			'proj.aipa.tryLive': 'Try it live',

			'skills.kicker': 'Toolkit',
			'skills.title': 'Skills & Certifications',
			'skills.block1': 'Business & Strategy',
			'skills.block2': 'Technology',
			'skills.block3': 'Languages',
			'skills.block4': 'Certifications',
			'skills.lang.en': 'English (Native)',
			'skills.lang.de': 'German (Business)',
			'skills.lang.mr': 'Marathi (Native)',
			'skills.lang.hi': 'Hindi (Fluent)',
			'skills.lang.kn': 'Kannada (Fluent)',

			'edu.kicker': 'Academics',
			'edu.title': 'Education',
			'edu.insead.org': 'INSEAD, Fontainebleau, France',
			'edu.insead.date': 'Class of December 2026',
			'edu.insead.detail': 'INSEAD Diversity Fund Scholarship recipient.',
			'edu.rwth.org': 'RWTH Aachen University, Germany',
			'edu.rwth.detail': 'Thesis on the commercial viability of AR in industrial workflows, at Siemens AG.',
			'edu.bvb.org': 'B.V.B College of Engineering & Technology, KLE University, India',
			'edu.bvb.detail': 'Graduated top 5 in class, 8.89/10 CGPA.',

			'contact.kicker': 'Let’s talk',
			'contact.title': 'Recruiting for finance, consulting or strategy?',
			'contact.lede': 'Reach out directly, or connect with me on LinkedIn.',
			'contact.location': 'Fontainebleau, France',
			'contact.downloadCV': 'Download CV',

			'a11y.toggleMenu': 'Toggle menu',
			'a11y.scrollDown': 'Scroll down',
			'a11y.backToTop': 'Back to top'
		},

		de: {
			roles: [
				'INSEAD MBA-Kandidat, Jahrgang ‘26',
				'Finance, Strategie & KI für Fintech',
				'Auf dem Weg in Finance & Strategie',
				'Ex-Product Owner, XR & KI',
				'Vom Ingenieur zum Strategen'
			],

			'nav.about': 'Über mich',
			'nav.experience': 'Werdegang',
			'nav.projects': 'Projekte',
			'nav.skills': 'Fähigkeiten',
			'nav.education': 'Ausbildung',
			'nav.contact': 'Kontakt',
			'nav.resume': 'Lebenslauf',

			'hero.eyebrow': 'Fontainebleau, Frankreich · Offen für Festanstellungen',
			'hero.greeting': 'Hallo, ich bin',
			'hero.rolePrefix': 'Aktuell',
			'hero.summary': 'In den letzten fünf Jahren habe ich ambitionierte Techideen in Produkte verwandelt, die auch wirklich genutzt wurden, darunter eine AR/VR-Plattform mit über 50.000 Studierenden. Am INSEAD lerne ich jetzt, die strategischen und finanziellen Fragen zu stellen, die einer Entwicklung vorausgehen.',
			'hero.ctaWork': 'Meine Projekte',
			'hero.ctaContact': 'Kontakt aufnehmen',
			'hero.stat1': 'GTM-Strategie geleitet',
			'hero.stat2': 'Studierende über Produkt erreicht',
			'hero.stat3': 'Erzielte Kostenreduktion',
			'hero.stat4': 'Gesprochene Sprachen',

			'about.kicker': 'Über mich',
			'about.title': 'Ein bisschen über mich',
			'about.photoBadge': 'INSEAD MBA<br>Jahrgang Dez. 2026',
			'about.p1': 'Mein Hintergrund liegt in Robotik und Automatisierung, und in den letzten fünf Jahren habe ich AR- und VR-Anwendungen in Unity entwickelt, unter anderem bei Siemens, der LUCE Stiftung und Reiser Simulation and Training. Irgendwann habe ich mich vom Programmieren zur Produktverantwortung hin entwickelt: Ich habe eine E-Learning-Plattform mit über 50.000 Studierenden geleitet und danach ein VR-Trainingstool für die Luftfahrtwartung, das die Trainingskosten um geschätzt 75 % gesenkt hat.',
			'about.p2': 'Diese Verschiebung hin zur unternehmerischen Seite der Arbeit hat mich ans INSEAD gebracht, wo ich Corporate Strategy, Finanzanalyse und Verhandlungsführung studiere. Nebenbei bin ich auch ein recht aktiver Investor und wende einen Bottom-up-Fundamentalanalyse-Ansatz auf Technologieunternehmen an (mein persönliches Portfolio ist seit 2023 um 87 % gestiegen).',
			'about.p3': 'Ich suche eine Position in <strong>Finance, Consulting oder Strategie</strong>, in der ich diese Mischung aus technischem Hintergrund und finanzwirtschaftlichem Denken einbringen kann.',
			'about.pillar1.title': 'Strategische & Finanzanalyse',
			'about.pillar1.desc': 'Unternehmensstrategie, Finanzmodellierung, GTM & Marktbewertung',
			'about.pillar2.title': 'Funktionsübergreifende Führung',
			'about.pillar2.desc': 'Führung von Teams mit bis zu 25 Personen aus über 10 Nationalitäten, agile Umsetzung',
			'about.pillar3.title': 'Angewandte Technologie',
			'about.pillar3.desc': 'Agentische KI & Automatisierung, Hintergrund in Produktentwicklung',

			'exp.kicker': 'Werdegang bisher',
			'exp.title': 'Berufserfahrung',

			'exp.insead.role': 'MBA-Kandidat',
			'exp.insead.org': 'INSEAD · Fontainebleau, Frankreich',
			'exp.insead.b1': 'INSEAD Diversity Fund Stipendium erhalten',
			'exp.insead.b2': 'Aktives Mitglied im PE & VC-, TMT- und Fußball-Club',
			'exp.insead.b3': 'Kursinhalte: Corporate Strategy, Finanzanalyse, Corporate Finance Policy, Investment & Asset Management sowie Verhandlungsführung',

			'exp.infosys.role': 'Financial Services GTM Strategist & KI-Evangelist',
			'exp.infosys.org': 'Infosys Ltd · Düsseldorf, Deutschland',
			'exp.infosys.b1': 'Marktanalyse und GTM-Strategie für den Financial-Services-Bereich von Infosys im 8,3 Billionen Euro schweren Wealth-Management-Sektor Luxemburgs geleitet, inklusive Bewertung und Priorisierung von 13 Zielunternehmen',
			'exp.infosys.b2': 'Sales-Intelligence-Dashboards in React und TypeScript mithilfe eines agentischen Claude-Workflows entwickelt und implementiert, mit über 10 interaktiven Demos, die statische Pitch-Decks bei Kundenpräsentationen ersetzt haben',

			'exp.reiser.role': 'Product Owner, XR Integrator',
			'exp.reiser.org': 'Reiser Simulation and Training GmbH · Berg, Deutschland',
			'exp.reiser.b1': 'Eine Lücke im Markt für Wartungstrainings im Verteidigungsbereich erkannt und einen VR-Trainer für die Hubschrauberwartung von der Konzeption bis zur Kundenpräsentation geleitet, mit einer geschätzten Kostenreduktion von 75 % (rund 600.000 € Einsparung bei einem 800.000-€-Gerät)',
			'exp.reiser.b2': 'Unreal Engine und C++ innerhalb von drei Wochen im Selbststudium erlernt, ohne bestehende Teamerfahrung, und anschließend über 15 wiederverwendbare VR-Vorlagen entwickelt, die zum internen Entwicklungsstandard wurden',
			'exp.reiser.b3': 'Ein 4-köpfiges Team innerhalb einer 25-köpfigen agilen Organisation mit über 10 Nationalitäten geleitet und zertifizierte Simulationslösungen für Kunden aus Luftfahrt und Verteidigung geliefert',

			'exp.luce.role': 'Product Owner, Softwareentwickler',
			'exp.luce.org': 'LUCE Stiftung · Nürnberg, Deutschland',
			'exp.luce.b1': 'Produktvision für LUMIS Campus mitgestaltet, eine preisgekrönte E-Learning-Plattform mit über 50.000 Studierenden, und Kundenanforderungen über ein dreijähriges Projekt hinweg in eine Roadmap übersetzt',
			'exp.luce.b2': 'Eine AR-App für Fernwartung für BHS Corrugated entwickelt und über 100 potenziellen Kunden auf Branchenmessen vorgestellt',
			'exp.luce.b3': 'Einen gefährdeten VR-Einsatz innerhalb von 48 Stunden vor einer großen Branchenmesse gerettet und außerdem einen zweiwöchigen VR-Kurs auf Deutsch unterrichtet',
			'exp.luce.b4': 'Ein 3-köpfiges Team geleitet und strukturierte Arbeitsabläufe eingeführt, die die Einarbeitungszeit halbiert und die Zuverlässigkeit der Umsetzung erhöht haben',

			'exp.siemens.role': 'Praktikum & Masterarbeit',
			'exp.siemens.org': 'Siemens AG · Nürnberg, Deutschland',
			'exp.siemens.desc': 'Einen frühen Proof of Concept für AR in der industriellen Automatisierung entwickelt, der HoloLens 2 mit Echtzeit-Maschinendaten verbindet. Wurde später vom F&E-Team als Framework übernommen.',

			'exp.automation.role': 'Automatisierungsingenieur',
			'exp.automation.org': 'Richfield Automation Ltd · Nashik, Indien',
			'exp.automation.desc': 'Individuelle Förderanlagen und Sondermaschinen für Industriekunden entworfen und in Betrieb genommen, von der Kundenanfrage bis zur Auslieferung.',

			'proj.kicker': 'Ausgewählte Projekte',
			'proj.title': 'Projekte',
			'proj.lede': 'Eine Mischung aus Finance- und Strategieprojekten vom INSEAD sowie den XR-Projekten, die ich davor realisiert habe.',
			'proj.sub1': 'Finance & Strategie',
			'proj.badgeSoon': 'In Arbeit',
			'proj.sub2': 'Technisches Fundament',
			'proj.comingSoon': 'Demnächst verfügbar, Link folgt',
			'proj.viewLive': 'Live ansehen',
			'proj.viewCode': 'Code ansehen',

			'proj.equity.title': 'Equity-Research-Portfolio',
			'proj.equity.desc': 'Unabhängige Recherche zu 7 börsennotierten Unternehmen aus KI, Verteidigung und Halbleitern: Bull- und Bear-Case, Bewertung und 3-Jahres-Kurscharts für jedes Unternehmen. Gleicher Bottom-up-Ansatz wie bei meinem persönlichen Portfolio (seit 2023 um 87 % gestiegen).',

			'proj.market.title': 'Markteintritts-Strategie: Fallstudie',
			'proj.market.desc': 'Eine Fallstudie im Consulting-Stil, die eine Markteintrittsentscheidung von Anfang bis Ende durcharbeitet: Marktbewertung, Wettbewerbsanalyse und eine abschließende Empfehlung, aufbereitet als Strategie-Deck.',

			'proj.pevc.title': 'PE & VC: Pre-Seed-Recherche',
			'proj.pevc.desc': 'Due-Diligence-artige Recherche zu Pre-Seed-Startups, bei der Gründerteams, Marktthese und frühe Traktion aus Investorensicht bewertet werden. Knüpft an meine Arbeit im PE & VC Club des INSEAD an.',

			'proj.vat.title': 'Virtuelle Wohnungsbesichtigung',
			'proj.vat.desc': 'Eine kostengünstige mobile VR-Erfahrung, mit der Mietinteressenten eine Wohnung aus der Ferne besichtigen können. Entwickelt in Unity mit Googles Cardboard-XR-Plugin und teleportbasierter Navigation.',

			'proj.aipa.title': 'AIPA, ein persönlicher KI-Assistent',
			'proj.aipa.desc': 'Ein sprechender Avatar, der in Echtzeit Fragen zu mir beantwortet. Entwickelt mit einem Ready-Player-Me-Avatar, dem Convai-Plugin und einer eigenen Wissensdatenbank in Unity.',
			'proj.aipa.tryLive': 'Live ausprobieren',

			'skills.kicker': 'Kompetenzen',
			'skills.title': 'Fähigkeiten & Zertifikate',
			'skills.block1': 'Business & Strategie',
			'skills.block2': 'Technologie',
			'skills.block3': 'Sprachen',
			'skills.block4': 'Zertifikate',
			'skills.lang.en': 'Englisch (Muttersprache)',
			'skills.lang.de': 'Deutsch (Verhandlungssicher)',
			'skills.lang.mr': 'Marathi (Muttersprache)',
			'skills.lang.hi': 'Hindi (Fließend)',
			'skills.lang.kn': 'Kannada (Fließend)',

			'edu.kicker': 'Akademisches',
			'edu.title': 'Ausbildung',
			'edu.insead.org': 'INSEAD, Fontainebleau, Frankreich',
			'edu.insead.date': 'Jahrgang Dezember 2026',
			'edu.insead.detail': 'Empfänger des INSEAD Diversity Fund Stipendiums.',
			'edu.rwth.org': 'RWTH Aachen, Deutschland',
			'edu.rwth.detail': 'Abschlussarbeit zur kommerziellen Anwendbarkeit von AR in industriellen Arbeitsabläufen, bei Siemens AG.',
			'edu.bvb.org': 'B.V.B College of Engineering & Technology, KLE University, Indien',
			'edu.bvb.detail': 'Abschluss unter den Top 5 des Jahrgangs, 8,89/10 CGPA.',

			'contact.kicker': 'Kontakt',
			'contact.title': 'Auf der Suche nach Finance, Consulting oder Strategie?',
			'contact.lede': 'Melden Sie sich gerne direkt, oder vernetzen Sie sich mit mir auf LinkedIn.',
			'contact.location': 'Fontainebleau, Frankreich',
			'contact.downloadCV': 'Lebenslauf herunterladen',

			'a11y.toggleMenu': 'Menü umschalten',
			'a11y.scrollDown': 'Nach unten scrollen',
			'a11y.backToTop': 'Nach oben'
		}
	};

	var htmlEl = document.documentElement;

	function applyLang(lang) {
		var dict = translations[lang];
		if (!dict) return;

		document.querySelectorAll('[data-i18n]').forEach(function (el) {
			var val = dict[el.getAttribute('data-i18n')];
			if (val !== undefined) el.textContent = val;
		});

		document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
			var val = dict[el.getAttribute('data-i18n-html')];
			if (val !== undefined) el.innerHTML = val;
		});

		document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
			var val = dict[el.getAttribute('data-i18n-aria')];
			if (val !== undefined) el.setAttribute('aria-label', val);
		});

		htmlEl.setAttribute('lang', lang);

		document.querySelectorAll('.lang-btn').forEach(function (btn) {
			btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
		});

		if (window.__setHeroRoles && dict.roles) {
			window.__setHeroRoles(dict.roles.slice());
		}

		try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
	}

	document.querySelectorAll('.lang-btn').forEach(function (btn) {
		btn.addEventListener('click', function () {
			applyLang(btn.getAttribute('data-lang'));
		});
	});

	var saved = null;
	try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
	if (saved === 'de') applyLang('de');
})();
