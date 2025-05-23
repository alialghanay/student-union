import Departments from "./departments";
import Questions from "./questions";
import Services from "./services";
import Slider from "./slider";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Slider />
      <Departments />
      <Services />
      <Questions />
    </div>
  );
};

export default Main;
