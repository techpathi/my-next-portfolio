import Head from 'next/head';
import Image from 'next/image';
import HeroImage from '../public/hero.svg';
import SkillLegend from '../public/skilllegend.svg';
import SkillTag from '../public/skilltag.svg';
import InstaIcon from '../public/instagram.svg';
import TwitterIcon from '../public/twitter.svg';
import LinkedinIcon from '../public/linkedin.svg';
import MediumIcon from '../public/medium.svg';
import MailIcon from '../public/mail.svg';
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
              Medium{' '}
              <span>
                <a href='https://techpathi.medium.com' target='_blank'>
                  {' '}
                  blog.
                </a>
              </span>
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
            Apps I Built For Fun
          </p>
          <div className={utilStyles.projectGrid}>
            {projects.map(project => {
              return (
                <div className={utilStyles.projectCard}>
                  <p
                    className={`${utilStyles.headingLg} ${utilStyles.headerFont} ${utilStyles.centerText}`}
                  >
                    {project.title}
                  </p>
                  <p>
                    {project.subtitle}{' '}
                    <span>
                      <Image priority src={SkillTag} width={15} height={15} />
                    </span>
                  </p>
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
            Skills In My Arsenal
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

        <section id='skills' className={utilStyles.projectContainer}>
          <p
            className={`${utilStyles.headingXl} ${utilStyles.headerFont} ${utilStyles.centerText}`}
          >
            I am social!!! let's connect
          </p>
          <div className={utilStyles.socialGrid}>
            <a href='https://www.instagram.com/iamtechpathi/' target='_blank'>
              <Image priority src={InstaIcon} width={60} height={60} />{' '}
            </a>
            <a href='https://twitter.com/iamtechpathi' target='_blank'>
              <Image priority src={TwitterIcon} width={60} height={60} />
            </a>
            <a href='https://www.linkedin.com/in/gvpraju/' target='_blank'>
              <Image priority src={LinkedinIcon} width={60} height={60} />
            </a>
            <a href='https://www.techpathi.medium.com/' target='_blank'>
              <Image priority src={MediumIcon} width={60} height={60} />
            </a>
            <a href='mailto:venkat4coding@gmail.com' target='_blank'>
              <Image priority src={MailIcon} width={60} height={60} />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
