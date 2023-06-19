import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from  './canvas'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className='text-[#915eff] flex'>Deividas Skirgaila</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As a front-end web development graduate from CodeAcademy courses, I am equipped with solid skills in HTML, CSS, and JavaScript. Additionally, I have hands-on experience with Node.js, MongoDB, and React.js, enabling me to develop robust and responsive web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas className='sm:h-80 w-80 xs:w-40 xs:h-40' />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='mt-3 w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.dev
              animate= {{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;