import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from '@heroicons/react/20/solid';
import {
  FaceSmileIcon,
  GlobeEuropeAfricaIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'You seek stress relief, flexibility, or balance.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: FaceSmileIcon
  },
  {
    name: 'Exploring somatic aspects or deepening your mind-body connection.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: GlobeEuropeAfricaIcon
  },
  {
    name: 'Emotional support and exploration.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: LightBulbIcon
  }
];

export default function VideoHalfSplit({ position }: { position: string }) {
  return (
    <div>
      {position === 'left' ? (
        <>
          <TextLeft />
        </>
      ) : (
        <>
          <TextRight />
        </>
      )}
    </div>
  );
}

const TextLeft = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-0-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600 capitalize">
                Individual Journey addressing specific concerns
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Personalized Path
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience the individual journey of yoga's transformative
                power. Whether addressing specific concerns or seeking spiritual
                growth, we tailor sessions to your needs. From managing pain to
                exploring somatic awareness, our coaching combines breathwork
                mindfulness and movement. Sessions available in-person (Maryland
                & DC) or virtually. Ideal for you if:
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    {/* <dd className="inline">{feature.description}</dd> */}
                  </div>
                ))}
              </dl>
              <div className="inline-flex">
                <a
                  href="#"
                  className="mt-8 rounded-md bg-orange-500 px-8 py-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book a Session <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
          <video
            src="/video/personalized_path.mp4"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

const TextRight = () => {
  return (
    <div className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600 capitalize">
                deepening your mind-body connection
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Guided Classes
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Immerse in Yin Yoga, harmonizing with the meridians of Chinese
                medicine. Gentle poses and extended holds promote relaxation and
                fltexibility. Dive into meridians, nurturing energy pathways,
                and deepening mind-body connection. Embrace the release of
                tension and increased vitality, harmonizing body's energy. Join
                us on this holistic journey toward inner balance and vitality.
              </p>
              <dl className="mt-14 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <a
                  href="#"
                  className="rounded-md bg-orange-500 px-8 py-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Book a Class <span aria-hidden="true">&rarr;</span>
                </a>
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <video
              src="/video/group_yoga_class.mp4"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
              autoPlay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </div>
  );
};
