"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  signin,
  useSession,
  getProviders,
  signIn,
  signOut,
} from "next-auth/react";
import {
  faAlignLeft,
  faAlignRight,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleNavDropDown, setToggleNavDropDown] = useState(false);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link className="flex gap-2 flex-center" href="/">
        <Image
          src="/assets/images/vercel.svg"
          alt="Logo"
          width={60}
          height={50}
          className="object-contain"
        />
        <p className="logo_text">ACME Devs</p>
      </Link>

      {/* Desktop Nav */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link className="black_btn" href="/create-job">
              Create Job
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              {/* <Image
                src=""
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              /> */}
              <FontAwesomeIcon
                className=""
                size="2x"
                icon={faUserCircle}
                onClick={() => setToggleNavDropDown((prev) => !prev)}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  {`${provider.name} Sign In`}
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Nav */}
      {/* <div className="sm:hidden flex relative">
        {!session?.user ? (
          <div className="flex">
            <FontAwesomeIcon
              size="xl"
              rotation={180}
              icon={faAlignLeft}
              onClick={() => setToggleNavDropDown((prev) => !prev)}
            />
            {toggleNavDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleNavDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-job"
                  className="dropdown_link"
                  onClick={() => setToggleNavDropDown(false)}
                >
                  Create Job
                </Link>
                <button
                  type="button"
                  className="mt-5 w-full black_btn"
                  onClick={() => {
                    setToggleNavDropDown(false);
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div> */}
    </nav>
  );
};

export default Nav;
