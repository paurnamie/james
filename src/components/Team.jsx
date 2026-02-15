import { useEffect, useRef, useState } from "react";

const coaches = [
  {
    name: "Jenson James",
    role: "Head Coach",
    experience: "Prakash Padukone Certified Coach",
    specialty: "Sports & Child Psychology",
    image: "/coach1.jpg",
  },
  {
    name: "Sandhya Menon",
    role: "Assistant Coach",
    experience: "Certified Fitness & Nutrition Expert",
    specialty: "Nutrition, Strength & Conditioning, Sports Psychology",
    image: "/coach2.jpeg",
  },
  {
    name: "Athul Anand",
    role: "Assistant Coach",
    experience: "10+ Years Coaching Experience",
    specialty: "Advanced Match Strategy & Skill Development",
    image: "/coach3.jpg",
  },
];

export default function Team() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="coaches" ref={sectionRef} className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING ABOVE */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-[#111827]">
            Meet Our Team
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Our coaches are dedicated professionals committed to building
            champions on and off the court.
          </p>
        </div>

        {/* COACH CARDS – SINGLE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {coaches.map((c, i) => (
            <div
              key={i}
              className={`
                group relative h-[420px]
                rounded-[28px]
                overflow-hidden
                bg-black
                shadow-xl
                transform-gpu
                transition-transform transition-shadow
                duration-600 ease-in-out
                hover:-translate-y-2 hover:shadow-2xl

              `}
            >
              {/* IMAGE WRAPPER */}
              <div
                className="
                  absolute inset-0

                  group-hover:scale-[1.04]

                "
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent" />

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                {c.experience && (
                  <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur">
                    {c.experience}
                  </span>
                )}

                <h3 className="mt-3 text-xl font-bold">
                  {c.name}
                </h3>

                <p className="text-sm text-white/80">
                  {c.role}
                </p>

                <p className="mt-2 text-sm text-white/70">
                  {c.specialty}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
