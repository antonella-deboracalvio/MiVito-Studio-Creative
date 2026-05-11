import { motion } from 'motion/react';

function AnimatedHeroIntro({ image, backgroundImage, carImage, inviteImage, onComplete }) {
  const hasLayeredHero = backgroundImage && carImage && inviteImage;

  return (
    <section className="min-h-screen overflow-hidden bg-[#F8F5EF] px-5 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[430px] items-center justify-center overflow-hidden">
        <motion.div
          key="velvet-love-car"
          initial={{ opacity: 0, y: 24, scale: 0.96, filter: 'blur(8px)' }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [24, 0, -4, -18],
            scale: [0.96, 1, 1.015, 1.06],
            filter: ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(6px)'],
          }}
          transition={{
            duration: 3.2,
            times: [0, 0.28, 0.78, 1],
            ease: 'easeInOut',
          }}
          onAnimationComplete={() => onComplete?.()}
          className="w-full"
        >
          {hasLayeredHero ? (
            <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(17,17,17,0.10)]">
              <img
                src={backgroundImage}
                alt=""
                className="absolute inset-0 block h-full w-full object-cover"
              />
              <motion.img
                src={inviteImage}
                alt=""
                initial={{ opacity: 0, y: 34, scale: 1.1 }}
                animate={{ opacity: [0, 1, 1], y: [34, 0, -6], scale: [1.1, 1.05, 1.05] }}
                transition={{ duration: 2.1, times: [0, 0.36, 1], ease: 'easeOut' }}
                className="absolute inset-0 block h-full w-full object-cover"
              />
              <motion.img
                src={carImage}
                alt="Hero Velvet Wedding"
                initial={{ opacity: 0, y: 18, scale: 1.02 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.35, ease: 'easeOut' }}
                className="absolute inset-0 block h-full w-full object-cover"
              />
            </div>
          ) : image ? (
            <img
              src={image}
              alt="Hero Velvet Wedding"
              className="block h-auto w-full rounded-[28px] object-cover shadow-[0_24px_70px_rgba(17,17,17,0.10)]"
            />
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}

export default AnimatedHeroIntro;
