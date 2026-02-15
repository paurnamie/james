import FlipCard from "./FlipCard";

const programData = [
  {
    icon: "🏸",
    title: "Beginner Program",
    features: [
      "Grip Correction and Basic Strokes",
      "Footwork and Movement",
      "Serve and Rally Control",
      "Court Positioning",
      "Basic Singles Game Play"
    ],
    details: [

      { label: "3 Days / Week", value: "₹2,500 / Month" },
      { label: "5 Days / Week", value: "₹3,000 / Month" }

      
    ],
    description:
      "This program builds the fundamentals and is ideal for beginners."
  },
  {
    icon: "🎯",
    title: "Intermediate Training",
    features: [
      "Improved stroke timing and control",
      "Faster footwork and recovery",
      "Shot variation and placement",
      "Basic tactical understanding",
    ],
    details: [
      { label: "Duration", value: "6 Days / weeks" },
      { label: "Price", value: "₹3,500 / month" }
    ],
    description:
      "For club-level players wanting to refine technique and tactics."
  },
  {
    icon: "🏆",
    title: "Adult Training",
    features: [
      "Structured training and Technical improvement",
      "Footwork and movement drills",
      "Tactical awareness and match strategy",
      "Guided matchplay and performance feedback"
    ],
    details: [
      { label: "Duration", value: "6 Days / Week" },
      { label: "Beginners", value: "₹3,000 / month" },
      { label: "Elites", value: "₹3,500 / month" }
    ],
    description:
      "Designed for athletes targeting national and international competition."
  },
  {
    icon: "⚡",
    title: "Weekend Sessions",
    features: [
      "Complete technical and footwork development",
      "Focused drill-based practice",
      "Guided matchplay sessions",
      "Designed for busy students and working professionals"
    ],
    details: [
      { label: "Price", value: "₹2000 / Month" }  
    ],
    description:
      "Focused weekend training designed to sharpen skills and boost performance efficiently."
  }
];

const Programs = () => {
  return (
    <section id="programs" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="text-5xl font-extrabold text-[#111827]">Our Programs</span>
        </h2>

        <div className="flip-grid">
          {programData.map((program) => (
            <FlipCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
