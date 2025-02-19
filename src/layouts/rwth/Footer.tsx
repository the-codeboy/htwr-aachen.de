"ise client";

import Link from "next/link";
import { type FC, useContext } from "react";

import InstituteSwitches from "@/components/InstituteSwitches";
import type { Institutes } from "@/models/institutes";

import { PushNotifyContext } from "../SharedPushNotify";

type FooterProps = {
  institute: Institutes;
};

const Footer: FC<FooterProps> = ({ institute }) => {
  const { setShow } = useContext(PushNotifyContext);
  return (
    <footer className="inset-x-0 mx-auto h-[220px] w-full border-t-1 bg-[#333] py-12 text-white lg:max-w-[1280px]">
      <InstituteSwitches institute={institute} />
      <div className="py-12 text-center">
        <Link href={"/updates"} className="text-white hover:border-b-1">
          Updates
        </Link>
        {" & "}
        <button
          className="hover:border-b-1"
          onClick={() => {
            setShow(true);
          }}
        >
          Benachrichtigungen aktivieren
        </button>
        {" & "}
        <Link href={"/impressum"} className="text-white hover:border-b-1">
          Impressum
        </Link>{" "}
        &{" "}
        <Link href={"/datenschutz"} className="text-white hover:border-b-1">
          Datenschutz
        </Link>{" "}
        & Bitte alles mit Humor nehmen.
      </div>
    </footer>
  );
};

export default Footer;
