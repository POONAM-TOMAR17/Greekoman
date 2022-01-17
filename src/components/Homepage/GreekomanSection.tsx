
import {  useState } from 'react'

const collections = [
  {
   
    href: '#',
    imageSrc: 'img/home/Man1.png',
    imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.',
  
  },
  {
 
    href: '#',
    imageSrc: 'img/home/Man2.png',
    imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
   
  },
  {
  
    href: '#',
    imageSrc: 'img/home/Man3.png',
    imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
  
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function GreekomanSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <div className="">
        <section
          aria-labelledby="collection-heading"
          className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <h2 id="collection-heading" className="text-2xl font-extrabold tracking-tight text-gray-900">
            @GREEKOMAN
          </h2>


          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {collections.map((collection) => (
              <a  href={collection.href} className="group block">
                <div
                  aria-hidden="true"
                  className="aspect-w-3 aspect-h-2 overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                >
                  <img
                    src={collection.imageSrc}
                    alt={collection.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
             
              </a>
            ))}
          </div>
        </section>
      </div> 
  )
}
