  import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div className='max-w-4xl mx-auto min-h-screen px-10 py-20'>
      <div className='flex items-start justify-between gap-12'>

        <div className='flex-1 space-y-6'>
          <div className='space-y-4'>
            <h1 className='text-5xl font-bold font-[var(--font-archivo-black)]'>
              Hi, I'm Chetan Bhosale ✌️
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

      <div className='my-10'>
        <h2 className='text-xl mb-3 font-bold font-[var(--font-archivo-black)]'>
          Socials
        </h2>
        <div className='flex '>
          <a 
            href="https://linkedin.com/in/your-profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-12 mr-2 cursor-pointer h-12 bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 transition-colors flex items-center justify-center'
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a 
            href="https://github.com/your-username" 
            target="_blank" 
            rel="noopener noreferrer"
            className='w-12 cursor-pointer h-12 bg-primary/10 text-primary border border-primary/20 rounded-md hover:bg-primary/20 transition-colors flex items-center justify-center'
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
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
            <p className='text-foreground font-medium mb-2 font-[var(--font-montserrat)]'>TransErg LLP (Acquired by @Petpooja) </p>
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
              <li>Redesigned the SuperSalesMindAI frontend with Next.js and TailwindCSS, improving user engagement by 40% and reducing load time by 60%</li>
              <li>Built a cloud-native AI backend processing 1M+ website embeddings using LLMs and vector search</li>
              <li>Automated scraping pipelines on Cloudflare serverless, reducing processing time from hours to minutes</li>
              <li>Developed a GenAI website builder with Claude SDK, ChromaDB, and Redis queues, enabling 100+ websites per month</li>
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
              <li>Built 15+ REST APIs for CRM operations, handling 50K+ daily requests</li>
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
    </div>
  )
}

export default Page
