import Image from 'next/image';

export default function ContentWithTitles() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              About Blossoming Bodhi
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Step into Blossoming Bodhi, where the journey toward a peaceful
              pivot unfolds, guided by the practice of yoga.
              <span className="text-orange-500 font-semibold">
                &nbsp;Our mission is to unlock liberation for every
                client.&nbsp;
              </span>
              We create a sanctuary where mind, body, and soul reunite through
              the connection of the breath, mindful movement and meditation.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              We honor deep roots in healing traditions, from those traditions
              we plant seeds of transformation in every practice. With each
              breath, each posture, the symphony of healing awakens—burdens
              dissipate, stress takes flight, and radiant spirits bloom with
              vitality. Embarking on the transformative path of yoga's Eight
              Limbs, as compiled by the sage Patanjali in his "Yoga Sutras,"
              offers a profound personal evolution. I extend a heartfelt
              invitation to embark on this journey of self-discovery, growth and
              transformation.
            </p>
            <div className="mt-10 flex">
              <a
                href="https://www.union.fit/orgs/blossoming-bodhi/passes"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                target="_blank"
              >
                See Our Classes <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                src="/images/group_yoga_house.jpg"
                alt="praticing yoga infront of house"
                width={500}
                height={600}
                className="aspect-[5/6] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <Image
                  src="/images/sound_bowl.jpg"
                  alt="image of older woman with sound bowl"
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <Image
                  src="/images/laying_out_on_mat.png"
                  alt="image of chair yoga"
                  width={700}
                  height={500}
                  className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <Image
                  src="/images/dog_dax.jpg"
                  alt="our favorite dog"
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
