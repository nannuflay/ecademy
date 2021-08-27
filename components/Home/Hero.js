import Header from "../Header/Header";

export default function Hero() {
  return (
    <div>
      <Header />

      <div class='hero py-10'>
        <div class='flex-col hero-content lg:flex-row-reverse'>
          <img
            src='https://www.betterteam.com/images/web-developer-job-description-6494x4331-2020128.jpeg?crop=21:16,smart&width=420&dpr=2'
            class='max-w-sm rounded-lg shadow-2xl'
          />
          <div>
            <h1 class='mb-5 text-5xl font-bold font-Noto w-3/5'>
              Build Development Skills With Fcat Any Time, Anywhere
            </h1>
            <p class='mb-5 w-4/6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button class='btn btn-primary'>Nos Formations</button>
          </div>
        </div>
      </div>
    </div>
  );
}
