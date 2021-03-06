
import {  useState } from 'react'

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

export default function TrendingProductSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
 <div className="">


                  <section aria-labelledby="trending-heading" className="bg-white">
              <div className="py-16 sm:py-24 lg:max-w-7xl lg:mx-auto lg:py-32 lg:px-8">
                <div className="px-4 flex items-center justify-between sm:px-6 lg:px-0">
                  <h2 id="trending-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Trending products
                  </h2>
                  <a href="#" className="hidden sm:block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    See everything<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>

                <div className="mt-8 relative">
                  <div className="relative w-full overflow-x-auto">
                    <ul
                      role="list"
                      className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:space-x-0 lg:grid lg:grid-cols-4 lg:gap-x-8"
                    >
                      {trendingProducts.map((product) => (
                        <li key={product.id} className="w-64 inline-flex flex-col text-center lg:w-auto">
                          <div className="group relative">
                            <div className="w-full bg-gray8 rounded-full overflow-hidden aspect-w-1 aspect-h-1">
                              <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="w-full h-full  object-center group-hover:opacity-75"
                                style={{ objectFit: "none" }}
                              />
                            </div>
                            <div className="mt-6">
                              <p className="text-sm text-gray-500">{product.color}</p>
                              <h3 className="mt-1 font-semibold text-gray-900">
                                <a href={product.href}>
                                  <span className="absolute inset-0" />
                                  {product.name}
                                </a>
                              </h3>
                              <p className="mt-1 text-gray-900">{product.price}</p>
                            </div>
                          </div>


                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-12 px-4 sm:hidden">
                  <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    See everything<span aria-hidden="true"> &rarr;</span>
                  </a>
                </div>
              </div>
            </section>
            </div>
  )
}
