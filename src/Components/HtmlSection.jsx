import {Html} from '@react-three/drei'

const HtmlSection = () => {
  return (
    <Html fullscreen>
        <div className='sections'>
            <section className ='panel'>
                <h1>Welcome to Space</h1>
                <p>A Cinematic React Three Fiber experience</p>
            </section>

            <section className ='panel'>
                <h1>Floating Through</h1>
                <p>Object drift as the camera moves</p>
            </section>

            <section className ='panel'>
                <h1>Core Focus</h1>
                <p>The journey ends at the focal object</p>
            </section>
        </div>
    </Html>
  )
}

export default HtmlSection