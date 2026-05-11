import CanvaImageSection from './CanvaImageSection';

function Hero({ image, alt = 'hero' }) {
  return <CanvaImageSection image={image} alt={alt} />;
}

export default Hero;
