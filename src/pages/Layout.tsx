import { Alert } from "@chakra-ui/react";
import { Outlet } from "react-router";

export default function Layout() {
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  return (
    <>
      {isMobile() && (
        <Alert.Root
          w={"80%"}
          alignContent={"center"}
          justifyContent={"center"}
          m={2}
          status="warning"
        >
          <Alert.Indicator />
          <Alert.Title>
            For the best experience, visit me on a laptop or PC !
          </Alert.Title>
        </Alert.Root>
      )}
      <Outlet />
    </>
  );
}
