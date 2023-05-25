import { useState } from "react";

const Section = ({ title, description, isVisible, setSection }) => {
  return (
    <div className="p-5 m-2 border-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      {isVisible ? (
        <button className="p-1 bg-slate-200" onClick={() => setSection(false)}>
          Hide
        </button>
      ) : (
        <button className="p-1 bg-slate-200" onClick={() => setSection(true)}>
          Show
        </button>
      )}

      {isVisible && <h1>{description}</h1>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <>
      <Section
        title={"About"}
        description={
          "Lorem ipsum dolor sia commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "about"}
        setSection={(show) => {
          show ? setVisibleSection("about") : setVisibleSection("");
        }}
      />

      <Section
        title={"Team"}
        description={
          "Lorem ipsum dolor sia commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "team"}
        setSection={(show) => {
          show ? setVisibleSection("team") : setVisibleSection("");
        }}
      />

      <Section
        title={"Products"}
        description={
          "Lorem ipsum dolor sia commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={visibleSection === "product"}
        setSection={(show) => {
          show ? setVisibleSection("product") : setVisibleSection("");
        }}
      />
    </>
  );
};

export default Instamart;
