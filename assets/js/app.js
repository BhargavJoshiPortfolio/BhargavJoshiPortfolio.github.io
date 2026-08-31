(function () {
	'use strict';

	document.getElementById('year').textContent = new Date().getFullYear();

	/* ------------------------------------------------------------
	   Header scroll state + scroll progress bar
	   ------------------------------------------------------------ */
	var header = document.getElementById('siteHeader');
	var progress = document.getElementById('scrollProgress');
	var backToTop = document.getElementById('backToTop');

	function onScroll() {
		var y = window.scrollY || window.pageYOffset;
		header.classList.toggle('scrolled', y > 20);
		backToTop.classList.toggle('visible', y > 600);

		var docHeight = document.documentElement.scrollHeight - window.innerHeight;
		var pct = docHeight > 0 ? (y / docHeight) * 100 : 0;
		progress.style.width = pct + '%';
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	backToTop.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	/* ------------------------------------------------------------
	   Mobile nav toggle
	   ------------------------------------------------------------ */
	var navToggle = document.getElementById('navToggle');
	var mainNav = document.getElementById('mainNav');

	navToggle.addEventListener('click', function () {
		navToggle.classList.toggle('open');
		mainNav.classList.toggle('open');
	});

	document.querySelectorAll('.nav-link').forEach(function (link) {
		link.addEventListener('click', function () {
			navToggle.classList.remove('open');
			mainNav.classList.remove('open');
		});
	});

	/* ------------------------------------------------------------
	   Scrollspy: highlight active nav link
	   ------------------------------------------------------------ */
	var sections = Array.prototype.slice.call(document.querySelectorAll('section[id]'));
	var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));

	var spyObserver = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				var id = entry.target.id;
				navLinks.forEach(function (link) {
					link.classList.toggle('active', link.getAttribute('href') === '#' + id);
				});
			}
		});
	}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

	sections.forEach(function (section) { spyObserver.observe(section); });

	/* ------------------------------------------------------------
	   Reveal on scroll
	   ------------------------------------------------------------ */
	var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
	var revealObserver = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry, i) {
			if (entry.isIntersecting) {
				var el = entry.target;
				setTimeout(function () { el.classList.add('in-view'); }, (i % 4) * 70);
				revealObserver.unobserve(el);
			}
		});
	}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

	revealEls.forEach(function (el) { revealObserver.observe(el); });

	// Safety net: force-reveal anything the observer missed (e.g. zero-height
	// containers, or a tab that was backgrounded during the initial paint).
	setTimeout(function () {
		document.querySelectorAll('.reveal:not(.in-view)').forEach(function (el) {
			el.classList.add('in-view');
		});
	}, 2500);

	/* ------------------------------------------------------------
	   Animated stat counters
	   ------------------------------------------------------------ */
	function animateCount(el) {
		var target = parseFloat(el.getAttribute('data-count'));
		var prefix = el.getAttribute('data-prefix') || '';
		var suffix = el.getAttribute('data-suffix') || '';
		var isDecimal = target % 1 !== 0;
		var duration = 1400;
		var start = null;

		function step(ts) {
			if (!start) start = ts;
			var progressPct = Math.min((ts - start) / duration, 1);
			var eased = 1 - Math.pow(1 - progressPct, 3);
			var current = target * eased;
			el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
			if (progressPct < 1) requestAnimationFrame(step);
		}
		requestAnimationFrame(step);
	}

	var statObserver = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				animateCount(entry.target);
				statObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.5 });

	document.querySelectorAll('.stat-number').forEach(function (el) { statObserver.observe(el); });

	/* ------------------------------------------------------------
	   Hero role cycle
	   ------------------------------------------------------------ */
	var roles = [
		'INSEAD MBA Candidate, Class of ‘26',
		'Building toward Finance & Strategy',
		'Ex-Product Owner, XR & AI',
		'Engineer turned Strategist'
	];
	var roleEl = document.getElementById('roleCycle');
	var roleIndex = 0, charIndex = 0, deleting = false;

	function typeRole() {
		var current = roles[roleIndex];
		if (!deleting) {
			charIndex++;
			roleEl.textContent = current.slice(0, charIndex);
			if (charIndex === current.length) {
				deleting = true;
				setTimeout(typeRole, 1800);
				return;
			}
		} else {
			charIndex--;
			roleEl.textContent = current.slice(0, charIndex);
			if (charIndex === 0) {
				deleting = false;
				roleIndex = (roleIndex + 1) % roles.length;
			}
		}
		setTimeout(typeRole, deleting ? 28 : 45);
	}
	typeRole();

	/* ------------------------------------------------------------
	   Project card tilt + glow cursor
	   ------------------------------------------------------------ */
	var cards = document.querySelectorAll('.project-card');
	cards.forEach(function (card) {
		card.addEventListener('mousemove', function (e) {
			var rect = card.getBoundingClientRect();
			var x = e.clientX - rect.left;
			var y = e.clientY - rect.top;
			var cx = rect.width / 2, cy = rect.height / 2;
			var rotateX = ((y - cy) / cy) * -4;
			var rotateY = ((x - cx) / cx) * 4;
			card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-2px)';
			card.style.setProperty('--mx', x + 'px');
			card.style.setProperty('--my', y + 'px');
		});
		card.addEventListener('mouseleave', function () {
			card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
		});
	});

	/* ------------------------------------------------------------
	   Hero canvas: subtle constellation network
	   ------------------------------------------------------------ */
	var canvas = document.getElementById('heroCanvas');
	var ctx = canvas.getContext('2d');
	var particles = [];
	var mouse = { x: null, y: null };
	var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	function resizeCanvas() {
		var hero = canvas.closest('.hero');
		canvas.width = hero.offsetWidth;
		canvas.height = hero.offsetHeight;
		initParticles();
	}

	function initParticles() {
		var count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000));
		particles = [];
		for (var i = 0; i < count; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.35,
				vy: (Math.random() - 0.5) * 0.35,
				r: Math.random() * 1.6 + 0.6
			});
		}
	}

	function drawParticles() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var linkDist = 140;

		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			p.x += p.vx;
			p.y += p.vy;

			if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
			if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

			for (var j = i + 1; j < particles.length; j++) {
				var q = particles[j];
				var dx = p.x - q.x, dy = p.y - q.y;
				var dist = Math.sqrt(dx * dx + dy * dy);
				if (dist < linkDist) {
					ctx.strokeStyle = 'rgba(56, 189, 248, ' + (0.16 * (1 - dist / linkDist)) + ')';
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(p.x, p.y);
					ctx.lineTo(q.x, q.y);
					ctx.stroke();
				}
			}

			if (mouse.x !== null) {
				var mdx = p.x - mouse.x, mdy = p.y - mouse.y;
				var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
				if (mdist < 160) {
					ctx.strokeStyle = 'rgba(217, 180, 103, ' + (0.25 * (1 - mdist / 160)) + ')';
					ctx.lineWidth = 1;
					ctx.beginPath();
					ctx.moveTo(p.x, p.y);
					ctx.lineTo(mouse.x, mouse.y);
					ctx.stroke();
				}
			}

			ctx.fillStyle = 'rgba(238, 241, 246, 0.55)';
			ctx.beginPath();
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
			ctx.fill();
		}

		if (heroVisible) rafId = requestAnimationFrame(drawParticles);
	}

	var heroVisible = true;
	var rafId = null;
	var heroObserver = new IntersectionObserver(function (entries) {
		heroVisible = entries[0].isIntersecting;
		if (heroVisible && !prefersReducedMotion) {
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(drawParticles);
		} else {
			cancelAnimationFrame(rafId);
		}
	}, { threshold: 0 });

	canvas.closest('.hero').addEventListener('mousemove', function (e) {
		var rect = canvas.getBoundingClientRect();
		mouse.x = e.clientX - rect.left;
		mouse.y = e.clientY - rect.top;
	});
	canvas.closest('.hero').addEventListener('mouseleave', function () {
		mouse.x = null; mouse.y = null;
	});

	window.addEventListener('resize', resizeCanvas);

	if (!prefersReducedMotion) {
		resizeCanvas();
		heroObserver.observe(canvas.closest('.hero'));
	}

	/* ------------------------------------------------------------
	   Remove loading state
	   ------------------------------------------------------------ */
	window.addEventListener('load', function () {
		document.body.classList.remove('is-loading');
	});
})();
