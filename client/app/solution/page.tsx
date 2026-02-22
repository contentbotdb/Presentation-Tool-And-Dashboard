import Image from "next/image";
import { SectionTitle, SimpleChoiceSection, FiveMainQuestionsSection, NextStepsSection } from "./components";

const IMAGE_SECTIONS = [
  { src: "/solutions/customer-experience-survey.png", primary: "Customer Experience", secondary: "Survey", alt: "Customer experience survey" },
  { src: "/solutions/families-helping-families.png", primary: "Families Helping", secondary: "Families", alt: "Families helping families" },
  { src: "/solutions/lets-design-yours.png", primary: "Let's Design", secondary: "Yours", alt: "Let's design yours" },
];

export default function SolutionPage() {
  return (
    <div className="min-h-screen bg-[#e8e8e8] text-[#1a365d]">
      <main className="flex flex-col gap-2 px-16 py-8 lg:px-24">
        {/* <h1 className="mb-8 max-w-[60.2rem] text-4xl font-bold">
          <span className="text-[#3b82f6]">Our</span>
          <br />
          <span className="text-[#1a365d]">Solution</span>
        </h1> */}

        <section>
          <SectionTitle primary="A Simple" secondary="Choice" className="mb-6" />
          <SimpleChoiceSection />
        </section>

        <section className="mt-14">
          <SectionTitle primary="Five Main" secondary="Questions" className="mb-6" />
          <FiveMainQuestionsSection />
        </section>

        <section className="mt-14">
          <SectionTitle primary="Next" secondary="Steps" className="mb-6" />
          <NextStepsSection />
        </section>

        {/* {IMAGE_SECTIONS.map((section, i) => (
          <section key={section.src} className="mt-14">
            <SectionTitle
              primary={section.primary}
              secondary={section.secondary}
              className="mb-6"
            />
            <div className="relative w-full overflow-hidden rounded-xl bg-white shadow-md">
              <Image
                src={section.src}
                alt={section.alt}
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>
          </section>
        ))} */}
      </main>
    </div>
  );
}
