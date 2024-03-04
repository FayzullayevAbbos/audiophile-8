"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import { createPortal } from "react-dom";
import ModalCart from "./ModalCart";
import { useAppSelector } from "../redax/store";

function Header() {
  const products = useAppSelector((state) => state.productItem);
  const [menu, setMenu] = useState<boolean>(false);
  const [modal, setModal] = useState<boolean>(false);
  return (
    <header className="fixed z-20 w-full top-0 left-0 flex flex-col   bg-[#181818]">
      <div className="container mx-auto flex justify-between items-center px-6 py-8 border-b border-gray-800  bg-[#181818]">
        <div
          onClick={() => setMenu(!menu)}
          className="w-4 lg:hidden cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <rect width="16" height="3" fill="white" />
            <rect y="6" width="16" height="3" fill="white" />
            <rect y="12" width="16" height="3" fill="white" />
          </svg>
        </div>
        <div className="flex-1 flex justify-center md:justify-start md:pl-8 lg:pl-0 lg:flex-initial">
          <Link href={"/"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="143"
              height="25"
              viewBox="0 0 143 25"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M57.9755 4.10884V0H53.2131V4.10884H57.9755ZM41.8721 20.3997C43.5076 20.3997 44.9648 19.8429 46.1074 18.8803L46.5635 19.9241H50.1425V0.792094L45.3611 0.792093V6.38308C44.3548 5.75732 43.1686 5.40721 41.8721 5.40721C37.5634 5.40721 34.4943 8.52769 34.4943 12.896C34.4943 17.2644 37.5634 20.3997 41.8721 20.3997ZM7.36265 20.3849C8.99354 20.3849 10.4497 19.8476 11.5995 18.9152L12.0137 19.9093H15.7527V5.85311L12.1479 5.85285L11.6531 6.93986C10.4936 5.98222 9.01642 5.42934 7.36265 5.42934C3.06909 5.42934 0 8.52769 0 12.8809C0 17.2493 3.06909 20.3849 7.36265 20.3849ZM8.00933 16.098C6.19773 16.098 4.86614 14.7278 4.86614 12.8921C4.86614 11.0677 6.18681 9.69748 8.00933 9.69748C9.82094 9.69748 11.1525 11.0677 11.1525 12.8921C11.1525 14.7278 9.82094 16.098 8.00933 16.098ZM32.4542 13.8899C32.4542 17.823 29.6916 20.3849 25.544 20.3849C21.396 20.3849 18.6184 17.823 18.6184 13.8899V5.86794H23.4549V13.6793C23.4549 15.163 24.2516 16.0355 25.544 16.0355C26.836 16.0355 27.6177 15.1482 27.6177 13.6793V5.86794H32.4542V13.8899ZM39.3758 12.8963C39.3758 14.7317 40.7074 16.1128 42.519 16.1128C44.3306 16.1128 45.6622 14.7317 45.6622 12.8963C45.6622 11.0607 44.3306 9.67952 42.519 9.67952C40.7074 9.67952 39.3758 11.0607 39.3758 12.8963ZM58.0127 5.86768V19.9239H53.1762V5.86768H58.0127ZM68.1095 20.3849C72.6727 20.3849 75.9821 17.2384 75.9821 12.896C75.9821 8.53888 72.6727 5.40747 68.1095 5.40747C63.5315 5.40747 60.237 8.53888 60.237 12.896C60.237 17.2384 63.5315 20.3849 68.1095 20.3849ZM65.0812 12.8963C65.0812 14.7546 66.346 16.0355 68.1095 16.0358C69.873 16.0358 71.1378 14.7548 71.1378 12.8966C71.1378 11.0492 69.873 9.75709 68.1095 9.75709C66.346 9.75709 65.0812 11.038 65.0812 12.8963ZM82.9978 25V19.4663C83.9888 20.0655 85.1511 20.3997 86.4208 20.3997C90.7144 20.3997 93.7835 17.2753 93.7835 12.896C93.7835 8.51676 90.7144 5.40721 86.4208 5.40721C84.7523 5.40721 83.2662 5.98508 82.1114 6.98463L81.5056 5.86794H78.2165V25H82.9978ZM82.6307 12.8958C82.6307 14.7424 83.9623 16.1126 85.7739 16.1126C87.5743 16.1126 88.9171 14.7424 88.9171 12.8958C88.9171 11.0492 87.5855 9.679 85.7739 9.679C83.9623 9.679 82.6307 11.0492 82.6307 12.8958ZM100.839 19.9241V12.4181C100.839 10.6143 101.751 9.57462 103.215 9.57462C104.477 9.57462 105.046 10.4011 105.046 12.0222V19.9241H109.882V11.4597C109.882 7.81629 107.811 5.45225 104.587 5.45225C103.188 5.45225 101.873 5.95931 100.839 6.79279V0.792093H96.0023V19.9241H100.839ZM117.574 0V4.10884H112.811V0H117.574ZM117.611 5.86768H112.774V19.9239H117.611V5.86768ZM125.489 0.792093V19.9241H120.653V0.792093H125.489ZM135.34 20.3851C138.863 20.3851 141.704 18.3808 142.692 15.1729H137.879C137.414 15.9957 136.47 16.4911 135.34 16.4911C133.813 16.4911 132.79 15.6573 132.474 14.045H142.9C142.963 13.6103 143 13.1868 143 12.7633C143 8.63988 139.866 5.40747 135.34 5.40747C130.933 5.40747 127.714 8.57611 127.714 12.8854C127.714 17.1795 130.959 20.3851 135.34 20.3851ZM132.559 11.3639H138.236C137.811 9.95908 136.8 9.20109 135.34 9.20109C133.931 9.20109 132.951 9.96767 132.559 11.3639Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <ul className="hidden pr-28 gap-16 text-white uppercase font-bold text-xs lg:flex">
          <li className="hover:text-[#D87D4A]">
            <Link href="/">home</Link>
          </li>
          <li className="hover:text-[#D87D4A]">
            <Link href="/category/headphones">headphones</Link>
          </li>
          <li className="hover:text-[#D87D4A]">
            <Link href="/category/speakers">speakers</Link>
          </li>
          <li className="hover:text-[#D87D4A]">
            <Link href="/category/earphones">earphones</Link>
          </li>
        </ul>
        <div
          onClick={() =>  setModal(!modal)}
          className="w-6 cursor-pointer relative"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.41142 13.1946H7.41037C7.03959 13.1955 6.73829 13.491 6.73829 13.8542C6.73829 14.2179 7.04064 14.5139 7.41212 14.5139H19.6309C20.0031 14.5139 20.3047 14.8092 20.3047 15.1736C20.3047 15.538 20.0031 15.8333 19.6309 15.8333H18.4821H8.625H7.41212C6.2975 15.8333 5.39063 14.9455 5.39063 13.8542C5.39063 13.0421 5.89302 12.343 6.60914 12.0382L4.17634 1.31944H0.673829C0.301644 1.31944 0 1.02412 0 0.659722C0 0.295329 0.301644 0 0.673829 0H4.7168C5.03266 0 5.30605 0.214753 5.37467 0.516611L5.85635 2.63889H22.3262C22.5377 2.63889 22.7368 2.73613 22.8642 2.9014C22.9914 3.06668 23.0322 3.28074 22.9741 3.47986L20.2788 12.716C20.1961 12.9991 19.9317 13.1944 19.6309 13.1944H7.41405L7.41142 13.1946ZM8.625 15.8333C9.75732 15.8333 10.6786 16.7679 10.6786 17.9167C10.6786 19.0654 9.75732 20 8.625 20C7.49268 20 6.57143 19.0654 6.57143 17.9167C6.57143 16.7679 7.49268 15.8333 8.625 15.8333ZM18.4821 15.8333C19.6145 15.8333 20.5357 16.7679 20.5357 17.9167C20.5357 19.0654 19.6145 20 18.4821 20C17.3498 20 16.4286 19.0654 16.4286 17.9167C16.4286 16.7679 17.3498 15.8333 18.4821 15.8333ZM19.1225 11.875L21.4329 3.95833H6.15571L7.95259 11.875H19.1225ZM9.30952 17.9167C9.30952 17.5338 9.00238 17.2222 8.625 17.2222C8.24762 17.2222 7.94048 17.5338 7.94048 17.9167C7.94048 18.2995 8.24762 18.6111 8.625 18.6111C9.00238 18.6111 9.30952 18.2995 9.30952 17.9167ZM18.4821 17.2222C18.8595 17.2222 19.1667 17.5338 19.1667 17.9167C19.1667 18.2995 18.8595 18.6111 18.4821 18.6111C18.1048 18.6111 17.7976 18.2995 17.7976 17.9167C17.7976 17.5338 18.1048 17.2222 18.4821 17.2222Z"
              fill="white"
            />
          </svg>
          <div
            className={`text-[11px] px-1 bg-[#D87D4A] rounded-full absolute -right-1 -top-3 ${
              products.length > 1 ? "block" : "hidden"
            }`}
          >
            {products.length - 1}
          </div>
        </div>
      </div>
      {modal
        ? createPortal(
            <ModalCart setModal={setModal}></ModalCart>,
            document.body
          )
        : ""}

      {menu ? <Nav type={"navbar"} /> : ""}
    </header>
  );
}

export default Header;
