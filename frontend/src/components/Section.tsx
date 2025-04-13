import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  children: ReactNode;
}

const Section = ({ title, description, children }: Props) => {
  return (
    <section className="bg-blue-50 px-4 py-10 mb-4">
      <div className="container-xl lg:container m-auto text-center">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">
          {title}
        </h2>
        <p className="mb-6">{description}</p>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Section;
