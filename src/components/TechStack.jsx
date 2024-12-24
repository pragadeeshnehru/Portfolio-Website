import StackIcon from "tech-stack-icons";

export default function TechStack({ classes }) {
  return (
    <div className={`p-6 ${classes}`}>
      {/* Expertise Section */}
      <Section title="My Expertise">
        <div className="flex flex-wrap gap-12 w-full justify-evenly ">
          <StackInfo name="reactjs" info="ReactJS" />
          <StackInfo name="nextjs" info="NextJS" className="invert" />
          <StackInfo name="tailwindcss" info="Tailwind" />
          <StackInfo name="threejs" className="invert" info="Three.js" />
          <StackInfo name="nodejs" info="Node.js" />
        </div>
      </Section>

      {/* Languages Section */}
      <Section title="Languages">
        <div className="flex flex-wrap gap-12 w-full justify-evenly">
          <StackInfo name="bash" info="Shell" />
          <StackInfo name="python" info="Python" />
          <StackInfo name="c++" info="C++" />
          <StackInfo name="csharp" info="C#" />
          <StackInfo name="java" info="Java" />
          <StackInfo name="js" info="JavaScript" />
        </div>
      </Section>

      {/* Databases Section */}
      <Section title="Databases">
        <div className="flex flex-wrap gap-12 w-full justify-evenly">
          <StackInfo name="mysql" info="MySQL" />
          <StackInfo name="mongodb" info="MongoDB" />
        </div>
      </Section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-16">
      <h1 className="text-white text-center font-thin text-sm sm:text-base md:text-2xl lg:text-3xl mb-8">
        {title}
      </h1>
      {children}
    </div>
  );
}

function StackInfo({ name, info, className }) {
  return (
    <div className="flex flex-col items-center">
      <StackIcon name={name} className={`mb-4 ${className} scale-[0.75] hover:scale-100 delay-100 duration-200 ease-in-out`} />
      <p className="text-gray-500 text-center font-thin text-sm">
        {info}
      </p>
    </div>
  );
}

