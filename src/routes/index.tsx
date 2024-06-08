import { createBrowserRouter } from "react-router-dom";
import { Path } from "./config";
import SignInAndSignUp from "@/pages/mobile/kyc/signInAndSignUp";

const router = createBrowserRouter([
    {
      path: Path.KYC._,
      element: <SignInAndSignUp />
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);
  
export default router