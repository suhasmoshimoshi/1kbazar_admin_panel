import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Sidenav() {
  return (
    <div>
      <div className="sidenav px-2 ">
        <Link href="/">
          <img src="/Logo.png" alt="" />
        </Link>

        <div className="nav-list">
          <Link href="/Dashboared">
            <li className="">Dashboared</li>
          </Link>

          <Link href="/JobOpenings">
            <li>Job Openings !</li>
          </Link>
          <Link href="/ContactForm">
            <li>Contact Form</li>
          </Link>
          <Link href="/Teams">
            <li>Teams</li>
          </Link>
          <Link href="/Blogs">
            <li>Blogs</li>
          </Link>
          <Link href="/LifeAt1k">
            <li>Life At 1k</li>
          </Link>
          <Link href="/Founders">
            <li>Founders</li>
          </Link>
          <Link href="/Subscribe">
            <li>Subscribe</li>
          </Link>
          <Link href="/NewsRoom">
            <li>1k News Room</li>
          </Link>
          <Link href="/FAQ">
            <li>F.A.Q</li>
          </Link>
          <Link href="/Brands">
            <li>Brands</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;
