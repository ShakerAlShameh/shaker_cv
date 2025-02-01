import TreeProgress from "./TreeProgress";

const LanguagesContainer = () => {
  const items = [
    {
      label: "Arabic",
      value: 100,
    },
    {
      label: "English",
      value: 70,
    },
    {
      label: "Germany",
      value: 20,
    },
  ];

  return <TreeProgress items={items} label="Languages" />;
};

export default LanguagesContainer;
