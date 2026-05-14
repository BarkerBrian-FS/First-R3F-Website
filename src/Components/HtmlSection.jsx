import {Html, useScroll} from '@react-three/drei'

const HtmlSection = () => {
    const scroll = useScroll()
    const t = scroll.offset
  return (
    <Html fullscreen>
        <div className='sections'>
            <section className ={`panel ${t < 0.33 ? 'active' : ''}`}>
                <h1>Welcome to Space</h1>
                <p>A Cinematic React Three Fiber experience</p>
            </section>

            <section className ={`panel ${t < 0.33 && t < 0.66 ? 'active' : ''}`}>
                <h1>Floating Through</h1>
                <p>Object drift as the camera moves</p>
            </section>

            <section className ={`panel ${t >= 0.66 ? 'active' : ''}`}>
                <h1>Core Focus</h1>
                <p>The journey ends at the focal object</p>
            </section>
        </div>
    </Html>
  )
}

export default HtmlSection