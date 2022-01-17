
export default function ShowerSection() {
  return (
    <div className="">
      <section
          aria-labelledby="social-impact-heading"
          className=" mx-auto pt-24 sm:pt-32 "
        >
          <div className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="img/home/Shower.png"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
              <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center">
                <h2
                  id="social-impact-heading"
                  className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                >
                  <span className="block text-black text-left uppercase sm:inline">Shower</span>

                </h2>
                <p className="mt-3 text-left text-xl text-black">
                  Rich Combination of Plant actives, Vitamins and Essential Minerals, to address your skin and hair needs
                </p>

              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
