import Head from 'next/head';
import Image from 'next/image';
import HeroImage from '../public/hero.svg';
import SkillLegend from '../public/skilllegend.svg';
import utilStyles from '../styles/utils.module.css';
import { projects, skills } from '../data/projects';

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>Venkatapathi Raju Gangiri</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <section className={utilStyles.heroContainer}>
          <div className={utilStyles.heroTextBlock}>
            <p className={`${utilStyles.headingXl} ${utilStyles.headerFont}`}>
              Hi, I'm Venkatapathi Raju. I love to build amazing web apps.
            </p>
            <p
              className={`${utilStyles.headingLg} ${utilStyles.subHeaderFont}`}
            >
              I speak JavaScript. I would buy you a ☕️ if you can explain me
              this. I am interested in Space tech. If you often watch the SpaceX
              launches, you got me! Sometimes I scribble my thoughts on my
              Medium blog.
            </p>
          </div>
          <div className={utilStyles.heroImageBlock}>
            <Image priority src={HeroImage} layout='responsive' />
          </div>
        </section>
        <section id='projects' className={utilStyles.projectContainer}>
          <p
            className={`${utilStyles.headingXl} ${utilStyles.headerFont} ${utilStyles.centerText}`}
          >
            Web apps I built for fun
          </p>
          <div className={utilStyles.projectGrid}>
            {projects.map(project => {
              return (
                <div
                  className={utilStyles.projectCard}
                  href={project.link}
                  target='_blank'
                >
                  <p
                    className={`${utilStyles.headingLg} ${utilStyles.headerFont} ${utilStyles.centerText}`}
                  >
                    {project.title}
                  </p>
                  <p>{project.subtitle}</p>
                  <p
                    className={`${utilStyles.headingMd} ${utilStyles.subHeaderFont}`}
                  >
                    {project.description}
                  </p>

                  <a
                    className={utilStyles.appLink}
                    href={project.link}
                    target='_blank'
                  >
                    View the app
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        <section id='skills' className={utilStyles.projectContainer}>
          <p
            className={`${utilStyles.headingXl} ${utilStyles.headerFont} ${utilStyles.centerText}`}
          >
            Skills in my arsenal
          </p>
          <div className={utilStyles.skillGrid}>
            {skills.map(skill => {
              return (
                <div
                  className={`${utilStyles.skillRow} ${utilStyles.centerText}`}
                >
                  <Image priority src={SkillLegend} width={60} height={60} />
                  <span>{skill}</span>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
