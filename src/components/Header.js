import React from "react";
import nftHackLogo from "../assets/logo-nft.storage.svg";

const Header = () => {
  return (
    <>
      <a
        href="https://hackathons.filecoin.io/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="NFTHack Logo"
          style={{ height: "200px" }}
          src={nftHackLogo}
        ></img>
      </a>
      <p className="header gradient-text">FVM NFT Collection</p>
      <p className="sub-text">
       100x personalised NFT Collection on FVM hypserspace network.
      </p>
    </>
  );
};

export default Header;
