import {
  SiFacebook,
  SiInstagram,
  SiSubstack,
  SiSoundcloud
} from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        ></nav>
        <div className="mt-10 flex justify-center space-x-10">
          <a href="#">
            <SiFacebook
              className="h-6 w-6 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
            />
          </a>
          <a href="#">
            <SiInstagram
              className="h-6 w-6 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
            />
          </a>
          <a href="#">
            <SiSubstack
              className="h-6 w-6 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
            />
          </a>
          <a href="#">
            <SiSoundcloud
              className="h-6 w-6 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
            />
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getFullYear()} Blossoming Bodhi, Inc. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
