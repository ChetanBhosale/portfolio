  import Image from 'next/image'
import React from 'react'

const Page = () => {
  // const projects = [
  //   {
  //     title: "DoviaAI",
  //     description:
  //       "Dovia AI is a no-code/low-code platform that lets you build apps and UI components instantly using prompts. Simply describe what you want, and the AI generates functional apps and components in real time.",
  //     image: "/image/dovia.png",
  //     isImageAvailable: true,
  //     link: "https://dovia-delta.vercel.app/",
  //     github: "https://github.com/ChetanBhosale/dovia",
  //     tech_stack: [
  //       "Next.js",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "React",
  //       "Redis",
  //       "AI/LLMs",
  //       "Inngest Server",
  //       "Docker",
  //       "E2B Sandbox",
  //       "Postgres"
  //     ],
  //   },
  //   {
  //     title: "TrafficMine",
  //     description:
  //       "TrafficMine helps you analyze and optimize website performance by tracking user behavior, traffic flow, and error patterns. It provides actionable insights to debug issues faster and improve overall user experience.",
  //     image: "",
  //     isImageAvailable: false,
  //     link: "",
  //     workDone: "90%",
  //     github: "https://github.com/ChetanBhosale/traffic-mine",
  //     tech_stack: ["Next.js", "TailwindCSS", "Shadcn UI", "Node.js", "Postgres"],
  //   },
  //   {
  //     title: "GenChat",
  //     description:
  //       "GenChat allows you to create custom AI-powered chatbots for your website in just a few minutes. These bots engage visitors, explain your products or services, and keep you informed about new leads and interactions.",
  //     image: "",
  //     isImageAvailable: false,
  //     link: "",
  //     workDone: "90%",
  //     github: "https://github.com/ChetanBhosale/GenChat",
  //     tech_stack: [
  //       "TurboRepo",
  //       "Next.js",
  //       "TailwindCSS",
  //       "Shadcn UI",
  //       "Node.js",
  //       "Postgres",
  //       "Redis",
  //       "WebSockets"
  //     ],
  //   },
  // ];
  
  return (
    <div className='max-w-4xl mx-auto min-h-screen px-10 py-20'>
      <div className='flex items-start justify-between gap-12'>

        <div className='flex-1 space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-5xl font-bold font-[var(--font-archivo-black)]'>
              Hi, I&apos;m Chetan Bhosale ✌️
            </h1>
            <p className='text-lg text-muted-foreground font-[var(--font-montserrat)] leading-relaxed max-w-2xl'>
              I am a Full Stack Software Developer, interested in building solutions that help people.
            </p>
          </div>

          <div className='flex flex-wrap gap-3'>
            <span className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
              Full Stack Developer
            </span>
            <span className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
              DevOps Engineer
            </span>
            <span className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
              AI Enthusiast
            </span>
            <span className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
              Indie Hacker
            </span>
          </div>
        </div>

        <div className='w-40 h-40 flex-shrink-0'>
          <Image 
            src="/image/gibli.png" 
            alt="Chetan Bhosale"  
            className='w-full h-full rounded-full object-cover border-4 border-border shadow-lg' 
            width={120} 
            height={120} 
          />
        </div>
      </div>


      <div className='my-10'>
        <h2 className='text-xl font-bold font-[var(--font-archivo-black)]'>
          About
        </h2>
        <p className='text-primary/70'>
          I’m Chetan Bhosale, a Full Stack Engineer with 1+ year full-time and 2 years internship experience, team leadership skills, 10+ freelance projects, and a passion for building scalable, AI-powered, and cloud-native solutions.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
        {/* Socials Section */}
        <div>
          <h2 className='text-xl mb-4 font-bold font-[var(--font-archivo-black)]'>
            Socials
          </h2>
          <div className='flex gap-3'>
            <a 
              href="https://www.linkedin.com/in/chetan-bhosale-092868231/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='group w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center hover:scale-105 hover:shadow-md'
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a 
              href="https://github.com/ChetanBhosale" 
              target="_blank" 
              rel="noopener noreferrer"
              className='group w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center hover:scale-105 hover:shadow-md'
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            {/* <a 
              href="https://twitter.com/ChetanBhosale_" 
              target="_blank" 
              rel="noopener noreferrer"
              className='group w-12 h-12 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center hover:scale-105 hover:shadow-md'
              aria-label="Twitter Profile"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a> */}
          </div>
          <div className='mt-3 text-sm text-muted-foreground font-[var(--font-montserrat)]'>
            Connect with me on social platforms
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h2 className='text-xl mb-4 font-bold font-[var(--font-archivo-black)]'>
            Contacts
          </h2>
          <div className='space-y-3'>
            <div className='flex items-center gap-3 group'>
              <div className='w-10 h-10 bg-primary/10 text-primary border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>Email</p>
                <a 
                  href="mailto:chetanbhosale810@gmail.com" 
                  className='text-foreground hover:text-primary transition-colors font-medium font-[var(--font-montserrat)]'
                >
                  chetanbhosale810@gmail.com
                </a>
              </div>
            </div>

            <div className='flex items-center gap-3 group'>
              <div className='w-10 h-10 bg-primary/10 text-primary border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>Phone</p>
                <a 
                  href="tel:+918857811443" 
                  className='text-foreground hover:text-primary transition-colors font-medium font-[var(--font-montserrat)]'
                >
                  +91 8857811443
                </a>
              </div>
            </div>

            <div className='flex items-center gap-3 group'>
              <div className='w-10 h-10 bg-primary/10 text-primary border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className='flex-1'>
                <p className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>Location</p>
                <p className='text-foreground font-medium font-[var(--font-montserrat)]'>
                  Pune, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='my-10'>
        <h2 className='text-xl font-bold font-[var(--font-archivo-black)] mb-6'>
          Experience
        </h2>
        <div className='space-y-8'>


          <div className='border-l-4 border-border pl-6'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1'>
              <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>Software Engineer</h3>
              <span className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>Jun 2024 – Sep 2025</span>
            </div>
            <p className='text-foreground font-medium mb-2 font-[var(--font-montserrat)]'>TransErg LLP @Petpooja </p>
            <p className='text-muted-foreground mb-4 font-[var(--font-montserrat)]'>Remote, India</p>
            

            <div className='flex flex-wrap gap-3 mb-4'>
              {['Node.js', 'React', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Next.js', 'AI/LLMs'].map((skill, idx) => (
                <span key={idx} className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
                  {skill}
                </span>
              ))}
            </div>

            <ul className='text-foreground space-y-3 text-sm font-[var(--font-montserrat)] leading-relaxed'>
              <li>Scaled a food ordering platform serving 10K+ daily users with 99.9% uptime using Node.js, React, MongoDB, Redis, Docker, and AWS</li>
              <li>Developed from the ground up the SuperSalesMindAI frontend with Next.js and TailwindCSS, integrating multiple backend APIs and constructing interactive dashboards utilizing Redux, Axios, and SWR for efficient, real-time data management.</li>
              <li>Built a backend AI platform leveraging Claude/OpenAI models and ChromaDB for advanced website data processing, embedding, and vector search.</li>
              <li>Created prompt-based website builder (OOW AI) powered by Claude SDK, integrating semantic search and scalable edge deployment, with streamlined CI/CD processes via GitHub Actions and Docker.</li>
              <li>Oversaw dev–manager collaboration on the Tvito project, shaping backend architecture, implementing modular SSR apps leveraging Next.js and Redis, and incorporating effective bot detection logic to maintain data integrity</li>
              <li>Introduced scalable scraping and embedding pipelines to get latest data from the web.</li>
            </ul>
          </div>

          <div className='border-l-4 border-border pl-6'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
              <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>Full Stack Developer ( Internship )</h3>
              <span className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>Jul 2023 – Apr 2024</span>
            </div>
            <p className='text-foreground font-medium mb-2 font-[var(--font-montserrat)]'>Shyam Sir Institute</p>
            <p className='text-muted-foreground mb-4 font-[var(--font-montserrat)]'>Ahmedabad, India</p>
            
            <div className='flex flex-wrap gap-3 mb-4'>
              {['REST APIs', 'CRM Systems', 'Caching', 'Custom IDE', 'RTK Query'].map((skill, idx) => (
                <span key={idx} className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
                  {skill}
                </span>
              ))}
            </div>

            <ul className='text-foreground space-y-3 text-sm font-[var(--font-montserrat)] leading-relaxed'>
              <li>Improved backend performance by 80% through Redis caching and query optimization</li>
              <li>Built REST APIs for CRM operations, handling 50K+ daily requests</li>
              <li>Developed a custom student IDE with real-time code editing, debugging, and peer review features</li>
              <li>Integrated RTK Query to reduce API calls by 70% and improve data fetching speed</li>
            </ul>
          </div>


          <div className='border-l-4 border-border pl-6'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3'>
              <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>Full Stack Developer ( Internship )</h3>
              <span className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>Dec 2022 – Jun 2023</span>
            </div>
            <p className='text-foreground font-medium mb-2 font-[var(--font-montserrat)]'>Your Assistant LLP</p>
            <p className='text-muted-foreground mb-4 font-[var(--font-montserrat)]'>Ahmedabad, India</p>
            
            <div className='flex flex-wrap gap-3 mb-4'>
              {['React.js', 'Redux Toolkit', 'Chart.js', 'D3.js', 'Agile'].map((skill, idx) => (
                <span key={idx} className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
                  {skill}
                </span>
              ))}
            </div>

            <ul className='text-foreground space-y-3 text-sm font-[var(--font-montserrat)] leading-relaxed'>
              <li>Built a portfolio management interface with React.js and Redux Toolkit, handling 1000+ portfolios with real-time updates</li>
              <li>Created interactive visualizations using Chart.js and D3.js, improving data insights by 65%</li>
              <li>Managed Agile development, leading 3 sprints and delivering 12 features on time</li>
              <li>Led technical documentation efforts, reducing onboarding time for new developers by 50%</li>
            </ul>
          </div>

        </div>
      </div>

      <div className='my-10'>
        <h2 className='text-xl font-bold font-[var(--font-archivo-black)] mb-6'>
          Projects
        </h2>
        <div className='space-y-8'>

          <div className='group bg-gradient-to-r from-background to-muted/30 rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg'>
            <div className='flex gap-6 items-start'>
              <div className='w-48 h-32 flex-shrink-0 relative overflow-hidden rounded-lg'>
                <Image 
                  src={'/project_image/dovia.png'} 
                  alt="DoviaAI Project"  
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
                  width={192} 
                  height={128} 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='flex-1 space-y-4'>
                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>DoviaAI</h3>
                    <span className='px-2 py-1 bg-green-500/20 text-green-600 border border-green-500/30 rounded-full text-xs font-medium'>Live</span>
                  </div>
                  <p className='text-muted-foreground text-sm font-[var(--font-montserrat)] leading-relaxed mb-3'>
                    Dovia AI is a no-code/low-code platform that lets you build apps and UI components instantly using prompts. Simply describe what you want, and the AI generates functional apps and components in real time.
                  </p>
                </div>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {['Next.js', 'TailwindCSS', 'Shadcn UI', 'Docker','React', 'Redis', 'AI/LLMs', 'Inngest Server', 'E2B Sandbox', 'Postgres'].map((skill, idx) => (
                    <span key={idx} className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors'>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a 
                    href="https://github.com/ChetanBhosale/dovia" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 text-sm font-medium flex items-center gap-2 group/btn'
                  >
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <a 
                    href="https://dovia-delta.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-all duration-200 text-sm font-medium flex items-center gap-2 group/btn shadow-sm hover:shadow-md'
                  >
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='group bg-gradient-to-r from-background to-muted/30 rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg'>
            <div className='flex gap-6 items-start'>
              <div className='w-48 h-32 flex-shrink-0 relative overflow-hidden rounded-lg'>
                <Image 
                  src="/project_image/trafficmine.png" 
                  alt="TrafficMine Project"  
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
                  width={192} 
                  height={128} 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='flex-1 space-y-4'>
                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>TrafficMine</h3>
                    <span className='px-2 py-1 bg-yellow-500/20 text-yellow-600 border border-yellow-500/30 rounded-full text-xs font-medium'>90% Done</span>
                  </div>
                  <p className='text-muted-foreground text-sm font-[var(--font-montserrat)] leading-relaxed mb-3'>
                    TrafficMine helps you analyze and optimize website performance by tracking user behavior, traffic flow, and error patterns. It provides actionable insights to debug issues faster and improve overall user experience.
                  </p>
                </div>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {['Next.js', 'TailwindCSS', 'Shadcn UI', 'Node.js', 'Postgres'].map((skill, idx) => (
                    <span key={idx} className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors'>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a 
                    href="https://github.com/ChetanBhosale/TrafficMine" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 text-sm font-medium flex items-center gap-2 group/btn'
                  >
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <span className='px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium flex items-center gap-2 opacity-60 cursor-not-allowed'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className='group bg-gradient-to-r from-background to-muted/30 rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg'>
            <div className='flex gap-6 items-start'>
              <div className='w-48 h-32 flex-shrink-0 relative overflow-hidden rounded-lg'>
                <Image 
                  src="/project_image/genchat.png" 
                  alt="GenChat Project"  
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300' 
                  width={192} 
                  height={128} 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
              <div className='flex-1 space-y-4'>
                <div>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>GenChat</h3>
                    <span className='px-2 py-1 bg-yellow-500/20 text-yellow-600 border border-yellow-500/30 rounded-full text-xs font-medium'>90% Done</span>
                  </div>
                  <p className='text-muted-foreground text-sm font-[var(--font-montserrat)] leading-relaxed mb-3'>
                    GenChat allows you to create custom AI-powered chatbots for your website in just a few minutes. These bots engage visitors, explain your products or services, and keep you informed about new leads and interactions.
                  </p>
                </div>
                
                <div className='flex flex-wrap gap-2 mb-4'>
                  {['TurboRepo', 'Next.js', 'TailwindCSS', 'Shadcn UI', 'Node.js', 'Postgres', 'Redis', 'WebSockets'].map((skill, idx) => (
                    <span key={idx} className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium hover:bg-primary/20 transition-colors'>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3'>
                  <a 
                    href="https://github.com/ChetanBhosale/GenChat" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 hover:border-primary/30 transition-all duration-200 text-sm font-medium flex items-center gap-2 group/btn'
                  >
                    <svg className="w-4 h-4 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  <span className='px-4 py-2 bg-muted text-muted-foreground rounded-md text-sm font-medium flex items-center gap-2 opacity-60 cursor-not-allowed'>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='my-10'>
        <h2 className='text-xl font-bold font-[var(--font-archivo-black)] mb-6'>
          Education
        </h2>
        <div className='border-l-4 border-border pl-6'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1'>
            <h3 className='text-lg font-semibold font-[var(--font-montserrat)]'>Bachelor of Computer Applications (BCA)</h3>
            <span className='text-sm text-muted-foreground font-[var(--font-montserrat)]'>2021 – 2024</span>
          </div>
          <p className='text-foreground font-medium mb-2 font-[var(--font-montserrat)]'>St. Xavier&apos;s College, Ahmedabad</p>
          <p className='text-muted-foreground mb-4 font-[var(--font-montserrat)]'>Ahmedabad, India</p>
          
          <div className='flex items-center gap-3 mb-4'>
            <span className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
              CGPA: 7.8
            </span>
            <span className='px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium'>
              Computer Applications
            </span>
          </div>

          <p className='text-muted-foreground text-sm font-[var(--font-montserrat)] leading-relaxed'>
            Completed Bachelor of Computer Applications with a strong foundation in programming, software development, and computer science fundamentals. 
            The program covered essential topics including web development, database management, programming languages, and software engineering principles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
