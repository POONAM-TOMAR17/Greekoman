/* This example requires Tailwind CSS v2.0+ */
export default function MapSection() {
  return (
    <div className="bg-gray9 mt-10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white uppercase sm:text-4xl">Vasu Healthcare</h2>
          <p className="mt-3 text-xl text-white sm:mt-4">
           Our primary mission is to combine ancient Ayurvedic wisdom with Modern science, to give the gift of good health to millions of the world.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-row">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Caring since 1980</dt>
            <dd className="order-1 text-5xl font-extrabold text-white"> <img
                    src='img/home/Image1.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className=" object-center"
                  /></dd>
          </div>
          <div className="flex flex-row mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">40 years of Legacy</dt>
            <dd className="order-1 text-5xl font-extrabold text-white"> <img
                    src='img/home/Image2.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className=" object-center"
                  /></dd>
          </div>
          <div className="flex flex-row mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">200+ Products</dt>
            <dd className="order-1 text-5xl font-extrabold text-white"><img
                    src='img/home/Image6.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className=" object-center"
                  /></dd>
          </div>
                   <div className="flex flex-row mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">50+ Countries</dt>
            <dd className="order-1 text-5xl font-extrabold text-white"><img
                    src='img/home/Image3.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className=" object-center"
                  /></dd>
          </div>
                   <div className="flex flex-row mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">30+ Awards</dt>
            <dd className="order-1 text-5xl font-extrabold text-white"><img
                    src='img/home/Image4.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className=" object-center"
                  /></dd>
          </div>
                   <div className="flex flex-row mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white">Research-based Products</dt>
            <dd className="order-1 text-5xl font-extrabold text-white"><img
                    src='img/home/Image5.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className=" object-center"
                  /></dd>
          </div>
        </dl>
        <div>
         <img
                    src='img/home/Map.png'
                    alt='map'
                   // className="w-full h-full object-center object-cover"
            className="mt-6 object-center"
                  />
        </div>
      </div>
    </div>
  )
}
