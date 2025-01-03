import { ctaItems } from "./lib/constants";

export default function App() {
  return (
    <main className="p-4 text-xl md:text-2xl md:flex md:items-center md:justify-center md:fixed md:top-0 md:left-0 md:w-full md:h-screen">
      <div className="flex flex-col gap-4 opacity-90 md:w-[500px]">
        <p>
          Marlon Martin is a Manila-based Developer passionate about crafting
          resilient and scalable software solutions.
        </p>

        <p>
          He's currently a Lead Developer at{" "}
          <span className="underline cursor-pointer">Binspire</span>, working on
          IoT, cloud computing, and developing{" "}
          <span className="underline cursor-pointer">Hiraya</span>, a
          Filipino-based programming language.
        </p>

        <p>
          Now working as a Freelance Software Developer on side projects,
          previously a Full-Stack Developer at{" "}
          <span className="underline cursor-pointer">Faithful Threads</span>.
        </p>

        <p>
          Marlon is currently pursuing a Bachelor of Science in Information
          Technology at the Pamantasan ng Lungsod ng Pasig, where he focuses on
          software engineering.
        </p>

        <div className="flex flex-row gap-4">
          {ctaItems.map((item, index) => (
            <a
              href={item.url}
              key={index + 1}
              target={index === 0 ? "_self" : "_blank"}
              className="cursor-pointer underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
