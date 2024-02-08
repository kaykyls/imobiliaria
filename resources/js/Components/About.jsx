import aboutImg from '/public/img/aboutSvg.svg';

export default function About() {
  return (
    <div name="about" id="about" className="container">
        <h2 className="text-2xl">Sobre Nós</h2>
        <span className="w-20 block h-1 bg-main-color"></span>
        <div className="mx-auto mt-8 flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
            <div className="mb-4">
                <p className="text-justify text-opacity-70 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                necessitatibus maiores non excepturi expedita magnam adipisci
                quis nesciunt dolores ut tempora soluta modi nostrum, labore
                voluptate cupiditate dolore itaque! Temporibus.
                </p>
            </div>

            <div className="mb-4">
                <p className="text-justify text-opacity-70 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                necessitatibus maiores non excepturi expedita magnam adipisci
                quis nesciunt dolores ut tempora soluta modi nostrum, labore
                voluptate cupiditate dolore itaque! Temporibus.
                </p>
            </div>

            <div className="mb-4">
                <p className="text-justify text-opacity-70 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                necessitatibus maiores non excepturi expedita magnam adipisci
                quis nesciunt dolores ut tempora soluta modi nostrum, labore
                voluptate cupiditate dolore itaque! Temporibus.
                </p>
            </div>
            </div>

            <div className="md:w-1/2">
            <img
                className="max-w-700 max-h-450 w-auto h-auto"
                src={aboutImg}
                alt="Sobre nós"
            />
            </div>
        </div>
    </div>
  );
}
