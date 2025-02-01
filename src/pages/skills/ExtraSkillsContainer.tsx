import TreeProgress from "./TreeProgress";

const ExtraSkillsContainer = () => {
  const items = [
    {
      label: "Dart",
      value: 90,
    },
    {
      label: "Flutter",
      value: 80,
    },
    {
      label: "GIT",
      value: 95,
    },
  ];
  return <TreeProgress items={items} label="Extra Skills" />;
};

export default ExtraSkillsContainer;
