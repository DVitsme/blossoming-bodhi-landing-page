import {
  SiFacebook,
  SiInstagram,
  SiSubstack,
  SiSoundcloud
} from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
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
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Blossoming Bodhi, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
