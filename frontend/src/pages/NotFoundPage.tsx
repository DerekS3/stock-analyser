import { useNavigate } from "react-router-dom";
// import { CiWarning } from "react-icons/ci";
import Section from "../components/Section";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section
        title={"404 Page Not Found"}
        description="Please try another page"
      >
        <button
          onClick={() => navigate(-1)}
          className="text-white bg-gray-400 hover:bg-gray-800 hover:text-white rounded-md px-3 py-2"
        >
          Back
        </button>
      </Section>
    </>
  );
};

export default NotFoundPage;
