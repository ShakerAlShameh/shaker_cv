import TreeProgress from "./TreeProgress";

const SkillsContainer = () => {
  const items = [
    {
      label: "Html",
      value: 90,
    },
    {
      label: "Css",
      value: 75,
    },
    {
      label: "Next-js",
      value: 80,
    },
  ];
  return <TreeProgress spacing="60px" items={items} label="Skills" />;
};

export default SkillsContainer;
