import { Helmet } from "react-helmet-async";
import Button from "../components/ui/Button";

export default function NotFound() {
  return <div className="container-shell grid min-h-[75vh] place-items-center pt-24 text-center">
    <Helmet><title>404 — Moonove</title></Helmet>
    <div><div className="display text-[9rem] font-extrabold leading-none">404</div><p className="muted mt-5">This page doesn't exist.</p><div className="mt-8"><Button to="/">Return Home</Button></div></div>
  </div>;
}
