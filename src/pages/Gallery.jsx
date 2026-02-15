export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT – Tall image */}
          <div className="col-span-12 md:col-span-4 row-span-2">
            <img
              src="/1.jpg"
              className="w-full h-full object-cover rounded-3xl shadow-lg"
              alt=""
            />
          </div>

          {/* CENTER TOP – Wide image */}
          <div className="col-span-12 md:col-span-5">
            <img
              src="/2.jpg"
              className="w-full h-[260px] object-cover rounded-3xl shadow-lg"
              alt=""
            />
          </div>

          {/* RIGHT TOP – Medium image */}
          <div className="col-span-12 md:col-span-3">
            <img
              src="/3.jpg"
              className="w-full h-[260px] object-cover rounded-3xl shadow-lg"
              alt=""
            />
          </div>

          {/* CENTER FEATURED – Video / Highlight */}
          <div className="col-span-12 md:col-span-5 relative">
            <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl">
              <video
                src="public\lv_0_20251212215051.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                <h3 className="text-3xl font-bold mb-2">
                  JAMES BADMINTON ACADEMY
                </h3>
                <p className="text-sm mb-4">
                  Excellence in every rally
                </p>
                <a
  href="#contact"
  className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold inline-block"
>
  Join Now
</a>

              </div>
            </div>
          </div>

          {/* RIGHT CENTER – Small image */}
          <div className="col-span-12 md:col-span-3">
            <img
              src="/4.jpg"
              className="w-full h-[300px] object-cover rounded-3xl shadow-lg"
              alt=""
            />
          </div>

          {/* BOTTOM LEFT – Wide */}
          <div className="col-span-12 md:col-span-6">
            <img
              src="/5.jpg"
              className="w-full h-[260px] object-cover rounded-3xl shadow-lg"
              alt=""
            />
          </div>

          {/* BOTTOM RIGHT – Wide */}
          <div className="col-span-12 md:col-span-6">
            <img
              src="/6.jpg"
              className="w-full h-[260px] object-cover rounded-3xl shadow-lg"
              alt=""
            />
          </div>

        </div>
      </div>
    </section>
  );
}
