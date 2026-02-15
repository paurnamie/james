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
      "Advanced strokes",
      "Match strategies",
      "Fitness training",
      "3 sessions / week"
    ],
    details: [
      { label: "Duration", value: "12 weeks" },
      { label: "Coach", value: "Coach Marcus" },
      { label: "Price", value: "₹9,500 / month" }
    ],
    description:
      "For club-level players wanting to refine technique and tactics."
  },
  {
    icon: "🏆",
    title: "Advanced Track",
    features: [
      "Elite coaching",
      "Competition planning",
      "Sports science",
      "Daily training"
    ],
    details: [
      { label: "Duration", value: "Seasonal" },
      { label: "Coach", value: "Performance Team" },
      { label: "Price", value: "Custom plan" }
    ],
    description:
      "Designed for athletes targeting national and international competition."
  },
  {
    icon: "⚡",
    title: "Private Sessions",
    features: [
      "1-on-1 coaching",
      "Personalised plans",
      "Video feedback",
      "Flexible scheduling"
    ],
    details: [
      { label: "Duration", value: "Per session" },
      { label: "Coach", value: "Assigned Coach" },
      { label: "Price", value: "₹1,200 / session" }
    ],
    description:
      "Rapid improvement through personalised one-on-one coaching."
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
