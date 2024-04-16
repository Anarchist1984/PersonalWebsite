import Link from "next/link";
export default function Footer() {
    return (
      <footer className="">
        <div className="container px-6 py-8 mx-auto">
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
  
          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">© Copyright 2023. All Rights Reserved Under Educational Use.</p>
  
            <div className="flex mt-3 -mx-2 sm:mt-0">
              <Link href="/About" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"> About </Link>
  
              <Link href="/Privacy" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"> Privacy </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  