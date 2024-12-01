import Image from "next/image";

function Footer() {
  return (
    <div className="pt-4 pb-4 bg-[#223c4b6b]">
    <footer className=" text-center ">
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src="/fb.png" alt="Facebook" width={24} height={24} className="bg-gradient-to-r from-cyan-200 to-[#731ea5]"  />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src="/insta.png" alt="Instagram" width={24} height={24} className="bg-gradient-to-r from-cyan-200 to-[#731ea5]" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src="/Group.png" alt="Twitter" width={24} height={24} className="bg-gradient-to-r from-cyan-200 to-[#731ea5]"/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Image src="/Linkedin.png" alt="LinkedIn" width={24} height={24} className="bg-gradient-to-r from-cyan-200 to-[#731ea5]"/>
        </a>
      </div>
      <p className="text-white text-sm ">
        Copyright ©2024 All rights reserved
      </p>
    </footer>
    </div>
  );
}

export default Footer;
