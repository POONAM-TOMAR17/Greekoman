import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, QuestionMarkCircleIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import MapSection from '../src/components/Homepage/MapSection'
import TwoSectionComponent from '../src/components/Homepage/twoSectionComponent'
import BeardbuddySection from '../src/components/Homepage/BeardbuddySection'
import TrendingProductSection from '../src/components/Homepage/TrendingProductSection'
import GreekomanSection from '../src/components/Homepage/GreekomanSection'
import CraftedforManSection from '../src/components/Homepage/CraftedForManSection'
import BeardCareSection from '../src/components/Homepage/BeardCareSection'
import ShowerSection from '../src/components/Homepage/ShowerSection'
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'About Greeko',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Greekoman Range',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Skincare Advice', href: '#' },
    { name: 'Vasu HealthCare', href: '#' },
  ],
}

const trendingProducts = [
  {
    id: 1,
    name: 'Machined Pen',
    color: 'Black',
    price: '$35',
    href: '#',
    imageSrc: 'img/home/Long lasting Fresh.png',
    imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
    availableColors: [
      { name: 'Chrome', colorBg: '#E5E7EB' },
      { name: 'Brass', colorBg: '#FDE68A' },
      { name: 'Chrome', colorBg: '#E5E7EB' },
    ],
  },
  // More products...
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Homepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      {/* test */}


      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="absolute bg-opacity-10 inset-0 overflow-hidden">
          <img
            // src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg"
            src="img/home/herobanner.png"
            alt=""
            className="w-full h-full object-center object-cover"
          />

        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        {/* Navigation */}
        <header className="relative z-10">
          <nav aria-label="Top">


            {/* Secondary navigation */}
            <div className="backdrop-blur-md backdrop-filter bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div>
                  <div className="h-16 flex items-center justify-between">
                    {/* Logo (lg+) */}
                    <div className="hidden lg:flex-1 lg:flex lg:items-center">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-10 w-auto"
                          // src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                          src="/img/home/GreekoLogo.png"
                          alt=""
                        />

                      </a>
                    </div>

                    <div className="hidden h-full lg:flex">
                      {/* Flyout menus */}
                      <Popover.Group className="px-4 bottom-0 inset-x-0">
                        <div className="h-full flex justify-center space-x-8">
                          {navigation.categories.map((category) => (
                            <Popover key={category.name} className="flex">
                              {({ open }) => (
                                <>
                                  <div className="relative flex">
                                    <Popover.Button className="relative z-10 flex items-center justify-center transition-colors ease-out duration-200 text-sm font-medium text-black">
                                      {category.name}
                                      <span
                                        className={classNames(
                                          open ? 'bg-white' : '',
                                          'absolute -bottom-px inset-x-0 h-0.5 transition ease-out duration-200'
                                        )}
                                        aria-hidden="true"
                                      />
                                    </Popover.Button>
                                  </div>

                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                  >
                                    <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-500">
                                      {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                      <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                      <div className="relative bg-white">
                                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                          <div className="grid grid-cols-4 gap-y-10 gap-x-8 py-16">
                                            {category.featured.map((item) => (
                                              <div key={item.name} className="group relative">
                                                <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-center object-cover"
                                                  />
                                                </div>
                                                <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                  <span className="absolute z-10 inset-0" aria-hidden="true" />
                                                  {item.name}
                                                </a>
                                                <p aria-hidden="true" className="mt-1">
                                                  Shop now
                                                </p>

                                              </div>

                                            ))}
                                          </div>
                                        </div>
                                      </div>
                                    </Popover.Panel>
                                  </Transition>
                                </>
                              )}
                            </Popover>
                          ))}

                          {navigation.pages.map((page) => (
                            <a
                              key={page.name}
                              href={page.href}
                              className="flex items-center text-sm font-medium text-black"
                            >
                              {page.name}
                            </a>
                          ))}
                        </div>
                      </Popover.Group>
                    </div>

                    {/* Mobile menu and search (lg-) */}
                    <div className="flex-1 flex items-center lg:hidden">
                      <button type="button" className="-ml-2 p-2 text-white" onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Search */}
                      <a href="#" className="ml-2 p-2 text-white">
                        <span className="sr-only">Search</span>
                        <SearchIcon className="w-6 h-6" aria-hidden="true" />
                      </a>
                    </div>

                    {/* Logo (lg-) */}
                    <a href="#" className="lg:hidden">
                      <span className="sr-only">Workflow</span>
                      <img
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                        alt=""
                        className="h-8 w-auto"
                      />
                    </a>

                    <div className="flex-1 flex items-center justify-end">
                      <a href="#" className="hidden text-sm font-medium text-black lg:block">
                        Search
                      </a>

                      <div className="flex items-center lg:ml-8">
                        {/* Help */}
                        <a href="#" className="p-2 text-white lg:hidden">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon className="w-6 h-6" aria-hidden="true" />
                        </a>
                        <a href="#" className="hidden text-sm font-medium text-black lg:block">
                          Help
                        </a>

                        {/* Cart */}
                        <div className="ml-4 flow-root lg:ml-8">
                          <a href="#" className="group -m-2 p-2 flex items-center">
                            <ShoppingBagIcon className="flex-shrink-0 h-6 w-6 text-black" aria-hidden="true" />
                            <span className="ml-2 text-sm font-medium text-black">0</span>
                            <span className="sr-only">items in cart, view bag</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div className="relative max-w-3xl mx-auto py-32 bg-opacity-10 px-6 flex flex-col items-left text-left sm:py-64 lg:px-0">
          <img
            className="h-30 w-auto"

            src="/img/home/STRENGTH.png"
            alt=""
          />
          <p className="mt-4 text-xl text-white">
            Beard Care above styling with Greeko<br></br> Man Hair and Beard Wax
          </p>
          <a
            href="#"
            className="mt-8 inline-block w-3/12 text-center uppercase text-white border-white bg-black border border-transparent  py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
          >
            Shop Now
          </a>
          {trendingProducts.map((product) => (
            <ul role="list" className="mt-auto pt-8 flex items-center justify-left space-x-3">
              {product.availableColors.map((color) => (
                <li
                  key={color.name}
                  className="w-2 h-2 rounded-full border border-white border-opacity-10"
                  style={{ backgroundColor: color.colorBg }}
                >
                  <span className="sr-only">{color.name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <main>
        {/* Category section */}

        {/* <TwoSectionComponent /> */}
        <div className="bg-white">
          {/* Mobile menu */}
          <Transition.Root show={mobileMenuOpen}
          //   as={Fragment}
          >
            <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setMobileMenuOpen}>
              <Transition.Child
                // as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <Transition.Child
                // as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                  <div className="px-4 pt-5 pb-2 flex">
                    <button
                      type="button"
                      className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex px-4 space-x-8">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                                'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels
                    //  as={Fragment}
                    >
                      {navigation.categories.map((category, categoryIdx) => (
                        <Tab.Panel key={category.name} className="px-4 pt-10 pb-6 space-y-12">
                          <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                              <div>
                                <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                                  Featured
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                  className="mt-6 space-y-6"
                                >
                                  {category.featured.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a href={item.href} className="text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                  Categories
                                </p>
                                <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                                  {category.categories.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a href={item.href} className="text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                              <div>
                                <p id="mobile-collection-heading" className="font-medium text-gray-900">
                                  Collection
                                </p>
                                <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                                  {category.collection.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a href={item.href} className="text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <p id="mobile-brand-heading" className="font-medium text-gray-900">
                                  Brands
                                </p>
                                <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                                  {category.brands.map((item) => (
                                    <li key={item.name} className="flex">
                                      <a href={item.href} className="text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    {navigation.pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                          {page.name}
                        </a>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    <div className="flow-root">
                      <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                        Create an account
                      </a>
                    </div>
                    <div className="flow-root">
                      <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                        Sign in
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                    {/* Currency selector */}
                    <form>
                      <div className="inline-block">
                        <label htmlFor="mobile-currency" className="sr-only">
                          Currency
                        </label>
                        <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                          <select
                            id="mobile-currency"
                            name="currency"
                            className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                          >
                            {currencies.map((currency) => (
                              <option key={currency}>{currency}</option>
                            ))}
                          </select>
                          <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                            <svg
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                              className="w-5 h-5 text-gray-500"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M6 8l4 4 4-4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </Transition.Child>
            </Dialog>
          </Transition.Root>


          <main>
            {/* Hero */}
            <CraftedforManSection />

            <BeardbuddySection />

            {/* Trending products */}
            <TrendingProductSection />



            {/* Sale and testimonials */}
            <div className="relative overflow-hidden">
              {/* Decorative background image and gradient */}
              <div aria-hidden="true" className="absolute inset-0">
                <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-white bg-opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white" />
              </div>



            </div>
          </main>


        </div>

        <ShowerSection />
        <BeardCareSection />
      </main>
      <TwoSectionComponent />
      <GreekomanSection />
      <MapSection />

    </div>
  )
}
