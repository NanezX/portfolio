<script lang="ts">
	// Portfolio page component
</script>

<main>
	<!-- Hero Section -->
	<section id="hero" class="hero">
		<div class="container">
			<h1 class="hero-title">Hi, I'm <span class="highlight">Your Name</span></h1>
			<p class="hero-subtitle">Full Stack Developer | Creative Problem Solver</p>
			<p class="hero-description">
				Building amazing web experiences with modern technologies
			</p>
			<div class="hero-buttons">
				<a href="#projects" class="btn btn-primary">View My Work</a>
				<a href="#contact" class="btn btn-secondary">Get In Touch</a>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section id="about" class="about">
		<div class="container">
			<h2 class="section-title">About Me</h2>
			<div class="about-content">
				<p>
					I'm a passionate developer who loves creating elegant solutions to complex problems.
					With expertise in modern web technologies, I focus on building responsive and user-friendly
					applications that make a difference.
				</p>
				<p>
					When I'm not coding, you can find me exploring new technologies, contributing to open
					source projects, or sharing knowledge with the developer community.
				</p>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section id="skills" class="skills">
		<div class="container">
			<h2 class="section-title">Skills & Technologies</h2>
			<div class="skills-grid">
				<div class="skill-card">
					<h3>Frontend</h3>
					<ul>
						<li>SvelteKit</li>
						<li>React</li>
						<li>TypeScript</li>
						<li>CSS/Sass</li>
					</ul>
				</div>
				<div class="skill-card">
					<h3>Backend</h3>
					<ul>
						<li>Node.js</li>
						<li>Python</li>
						<li>REST APIs</li>
						<li>Databases</li>
					</ul>
				</div>
				<div class="skill-card">
					<h3>Tools & Other</h3>
					<ul>
						<li>Git/GitHub</li>
						<li>Docker</li>
						<li>CI/CD</li>
						<li>Agile/Scrum</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="projects">
		<div class="container">
			<h2 class="section-title">Featured Projects</h2>
			<div class="projects-grid">
				<article class="project-card">
					<h3>Project One</h3>
					<p>A modern web application built with SvelteKit and TypeScript</p>
					<div class="project-tags">
						<span class="tag">SvelteKit</span>
						<span class="tag">TypeScript</span>
						<span class="tag">CSS</span>
					</div>
					<div class="project-links">
						<a href="https://example.com/demo" class="project-link">View Demo</a>
						<a href="https://github.com/yourusername/project-one" class="project-link">Source Code</a>
					</div>
				</article>

				<article class="project-card">
					<h3>Project Two</h3>
					<p>Full-stack application with real-time features and modern UI</p>
					<div class="project-tags">
						<span class="tag">React</span>
						<span class="tag">Node.js</span>
						<span class="tag">MongoDB</span>
					</div>
					<div class="project-links">
						<a href="https://example.com/demo" class="project-link">View Demo</a>
						<a href="https://github.com/yourusername/project-two" class="project-link">Source Code</a>
					</div>
				</article>

				<article class="project-card">
					<h3>Project Three</h3>
					<p>Responsive portfolio website showcasing creative design</p>
					<div class="project-tags">
						<span class="tag">HTML</span>
						<span class="tag">CSS</span>
						<span class="tag">JavaScript</span>
					</div>
					<div class="project-links">
						<a href="https://example.com/demo" class="project-link">View Demo</a>
						<a href="https://github.com/yourusername/project-three" class="project-link">Source Code</a>
					</div>
				</article>
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section id="contact" class="contact">
		<div class="container">
			<h2 class="section-title">Get In Touch</h2>
			<p class="contact-intro">
				I'm always interested in hearing about new projects and opportunities.
			</p>
			<div class="contact-links">
				<a href="mailto:your.email@example.com" class="contact-link">
					<span>📧</span> Email
				</a>
				<a href="https://github.com/yourusername" class="contact-link">
					<span>💻</span> GitHub
				</a>
				<a href="https://linkedin.com/in/yourusername" class="contact-link">
					<span>💼</span> LinkedIn
				</a>
				<a href="https://twitter.com/yourusername" class="contact-link">
					<span>🐦</span> Twitter
				</a>
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="footer">
		<div class="container">
			<p>&copy; 2026 Your Name. Built with SvelteKit 💚</p>
		</div>
	</footer>
</main>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			sans-serif;
		line-height: 1.6;
		color: #333;
	}

	:global(*) {
		box-sizing: border-box;
	}

	main {
		min-height: 100vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		text-align: center;
	}

	.hero-title {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		font-weight: 700;
	}

	.highlight {
		color: #ffd700;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		opacity: 0.9;
	}

	.hero-description {
		font-size: 1.2rem;
		margin-bottom: 2rem;
		opacity: 0.8;
	}

	.hero-buttons {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 0.875rem 2rem;
		border-radius: 50px;
		text-decoration: none;
		font-weight: 600;
		transition: all 0.3s ease;
		display: inline-block;
	}

	.btn-primary {
		background: white;
		color: #667eea;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: white;
		color: #667eea;
		transform: translateY(-2px);
	}

	/* Section Styles */
	section {
		padding: 5rem 0;
	}

	.section-title {
		font-size: 2.5rem;
		text-align: center;
		margin-bottom: 3rem;
		color: #333;
	}

	/* About Section */
	.about {
		background: #f8f9fa;
	}

	.about-content {
		max-width: 800px;
		margin: 0 auto;
		font-size: 1.1rem;
		line-height: 1.8;
	}

	.about-content p {
		margin-bottom: 1.5rem;
	}

	/* Skills Section */
	.skills {
		background: white;
	}

	.skills-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.skill-card {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 10px;
		transition: transform 0.3s ease;
	}

	.skill-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.skill-card h3 {
		color: #667eea;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.skill-card ul {
		list-style: none;
		padding: 0;
	}

	.skill-card li {
		padding: 0.5rem 0;
		border-bottom: 1px solid #e0e0e0;
	}

	.skill-card li:last-child {
		border-bottom: none;
	}

	/* Projects Section */
	.projects {
		background: #f8f9fa;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.project-card {
		background: white;
		padding: 2rem;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease;
	}

	.project-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
	}

	.project-card h3 {
		color: #667eea;
		margin-bottom: 1rem;
		font-size: 1.5rem;
	}

	.project-card p {
		margin-bottom: 1.5rem;
		color: #666;
	}

	.project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1.5rem;
	}

	.tag {
		background: #e7eaf6;
		color: #667eea;
		padding: 0.25rem 0.75rem;
		border-radius: 20px;
		font-size: 0.875rem;
		font-weight: 500;
	}

	.project-links {
		display: flex;
		gap: 1rem;
	}

	.project-link {
		color: #667eea;
		text-decoration: none;
		font-weight: 600;
		transition: color 0.3s ease;
	}

	.project-link:hover {
		color: #764ba2;
		text-decoration: underline;
	}

	/* Contact Section */
	.contact {
		background: white;
	}

	.contact-intro {
		text-align: center;
		font-size: 1.2rem;
		margin-bottom: 3rem;
		color: #666;
	}

	.contact-links {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1.5rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.contact-link {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		background: #f8f9fa;
		border-radius: 10px;
		text-decoration: none;
		color: #333;
		transition: all 0.3s ease;
		font-weight: 600;
	}

	.contact-link span {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	.contact-link:hover {
		background: #667eea;
		color: white;
		transform: translateY(-5px);
		box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
	}

	/* Footer */
	.footer {
		background: #333;
		color: white;
		padding: 2rem 0;
		text-align: center;
	}

	.footer p {
		margin: 0;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.2rem;
		}

		.section-title {
			font-size: 2rem;
		}

		.container {
			padding: 0 1rem;
		}

		section {
			padding: 3rem 0;
		}
	}
</style>
