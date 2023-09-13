import Image from 'next/image';

export default function SplitWithImage() {
  return (
    <div className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/images/Dawn_Valentine_gray_sitting.jpg"
          alt="picture of Dawn"
          width={1000}
          height={800}
        />
        <svg
          viewBox="0 0 926 676"
          aria-hidden="true"
          className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
        >
          <path
            fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
            fillOpacity=".4"
            d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
          />
          <defs>
            <linearGradient
              id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
              x1="926.392"
              x2="-109.635"
              y1=".176"
              y2="321.024"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#776FFF" />
              <stop offset={1} stopColor="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Certified Yoga Instructor
          </h2>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Dawn
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Peace Peace Peace my name is Dawn` Valentine—a guide on your journey
            to self-discovery through the practice of yoga.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            With a passion for stories, tea, and my yoga mat, I've been
            exploring balanced living for over two decades. Yoga's
            transformative power ignited shifts—releasing stress, igniting
            confidence, and awakening self-awareness for three decades.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            In 2017, my path transformed. From practitioner to teacher, I
            discovered my mission to heal and empower. Exploring moving
            meditations and holistic healing, I journeyed into herbalism, reiki,
            reflexology, and Thai yoga. My quest led me to therapeutic yoga,
            aiding healing, evolution, and self-discovery.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Today, my focus is on you. Through personalized sessions, I address
            addiction, grief, and trauma. Merging classical yoga with reflective
            practices, I guide you toward intertwined body, mind, and spirit.
            Let's embark on transformation, unveili0..ng the secrets within and
            nurturing peace.
          </p>
          <div className="mt-8">
            <p className="inline-flex text-lg font-semibold text-orange-500 shadow-sm hover:text-orange-700">
              Excited to meet on the mat,
              <br /> Dawn
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
