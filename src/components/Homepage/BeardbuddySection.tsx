
import {  useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BeardbuddySection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
 <div className="flex mt-8 flex-col border-b border-gray-200 lg:border-0">


              <div className="relative">
                <div aria-hidden="true" className="hidden absolute w-1/2 h-full bg-gray-100 lg:block" />

                <div className="relative bg-gray-100 lg:bg-transparent">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
                    <img
                      src="img/home/BeardBuddy.png"
                      alt=""
                      className="w-full h-full object-center object-cover"
                    />

                  </div>
                </div>
                <div className="w-full h-48 sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:w-1/2 lg:h-full">
                  <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
                    <div className="lg:pr-16">
                      <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-2xl">
                        Beard buddy
                      </h1>
                      <p className="mt-4 text-xl text-gray-600">
                        All the charts, datepickers, and notifications in the world can't beat checking off some items on
                        a paper card.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-block bg-indigo-600 border border-transparent py-3 px-8 rounded-md font-medium text-white hover:bg-indigo-700"
                        >
                          Shop Productivity
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
  )
}
