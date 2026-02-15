import { useEffect, useState } from "react";
 
export default function ContactSection() {
  const [showTop, setShowTop] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 250);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e) => {
  e.preventDefault();

  const firstName = e.target.firstName.value;
  const lastName = e.target.lastName.value;
  const email = e.target.email.value;
  const subject = e.target.subject.value;
  const message = e.target.message.value;

  const whatsappNumber = "9847589005"; // 👈 your WhatsApp number (NO +, NO spaces)

  const text = `Hello James Badminton Academy 👋%0A%0A
Name: ${firstName} ${lastName}%0A
Email: ${email}%0A
Subject: ${subject}%0A
Message: ${message}`;

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

  window.open(whatsappURL, "_blank");
};
  return (
    <section id="contact" className="w-full bg-[#f4f6fb] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* LEFT TEXT + CONTACT DETAILS */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-[64px] font-extrabold leading-[1.02] text-[#111827]">
                Get in Touch
              </h2>
 
              <p className="mt-5 text-[18px] leading-7 text-[#6b7280] max-w-md">
                We are here to help you with your badminton needs. Book a
                session or ask us anything.
              </p>
            </div>
 
            {/* CONTACT DETAILS CARD */}
              <div className="mt-12 w-full max-w-[520px] rounded-[22px] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)] border border-[#eef2ff]">
              <h3 className="text-[22px] font-bold text-[#111827]">
                Contact Details
              </h3>
 
              <div className="mt-7 space-y-5 text-[16px]">
                <div className="flex gap-4">
                  <span className="font-bold text-[#111827] w-[60px]">
                    Phone:
                  </span>
                  <span className="text-[#6b7280]">+91 98765 43210</span>
                </div>
 
                <div className="flex gap-4">
                  <span className="font-bold text-[#111827] w-[60px]">
                    Email:
                  </span>
                  <a
                    href="mailto:jamesbadmintonacademy@gmail.com"
                    className="text-[#6b7280] underline underline-offset-4"
                  >
                    jamesbadmintonacademy@gmail.com
                  </a>
                </div>
 
                <div className="flex gap-4">
                  <span className="font-bold text-[#111827] w-[60px]">
                    Web:
                  </span>
                  <a
                    href="#"
                    className="text-[#6b7280] underline underline-offset-4"
                  >
                    jamesbadmintonacademy.com
                  </a>
                </div>
              </div>
            </div>
          </div>
 
          {/* FORM CARD */}
          <div className="rounded-[22px] bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.10)] border border-[#eef2ff]">
            <form className="space-y-7" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-[14px] font-semibold text-[#111827]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="mt-2 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#111827] shadow-sm outline-none focus:border-[#cbd5e1]"
                  />
                </div>
 
                <div>
                  <label className="text-[14px] font-semibold text-[#111827]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="mt-2 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#111827] shadow-sm outline-none focus:border-[#cbd5e1]"
                  />
                </div>
              </div>
 
              <div>
                <label className="text-[14px] font-semibold text-[#111827]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#111827] shadow-sm outline-none focus:border-[#cbd5e1]"
                />
              </div>
 
              <div>
                <label className="text-[14px] font-semibold text-[#111827]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="mt-2 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#111827] shadow-sm outline-none focus:border-[#cbd5e1]"
                />
              </div>
 
              <div>
                <label className="text-[14px] font-semibold text-[#111827]">
                  Message
                </label>
                <textarea
                  placeholder="Type your message here..."
                  rows={6}
                  className="mt-2 w-full resize-none rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 text-[#111827] shadow-sm outline-none focus:border-[#cbd5e1]"
                />
              </div>
 
              <button
                type="button"
                className="w-full rounded-full bg-[#1f2937] py-3 text-[16px] font-semibold text-white shadow-[0_14px_25px_rgba(15,23,42,0.25)] hover:bg-[#111827] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* MAP CARD */}
          <div className="rounded-[22px] bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.10)] border border-[#eef2ff] overflow-hidden">
            <iframe
              title="Cochin Sports Arena"
              className="h-[560px] w-full rounded-[18px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=James%20Badminton%20Academy%20Kochi&z=16&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
 
      {/* SCROLL TO TOP BUTTON */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-7 right-7 h-14 w-14 rounded-full bg-[#1f2937] text-white shadow-[0_18px_35px_rgba(15,23,42,0.35)] hover:bg-[#111827] transition flex items-center justify-center text-xl"
        >
          ↑
        </button>
      )}
    </section>
  );
}