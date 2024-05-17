import { Button } from "./components/ui/button";
import { HiArrowNarrowRight } from "react-icons/hi";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center mt-5">
        <Button className="text-red-500">hello</Button>
        <HiArrowNarrowRight />
      </div>
    </>
  );
}

export default App;
