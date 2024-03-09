import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-slate-500">
      <div>
        <h2 className="text-[20px] font-normal">Todo</h2>
      </div>
      <div>
        <Button variant="link">
          <Link className="text-[20px] font-normal" href={"/"}>
            Home
          </Link>
        </Button>
        <Button variant="link">
          <Link className="text-[20px] font-normal" href={"/About"}>
            About
          </Link>
        </Button>
        <Button variant="link">
          <Link className="text-[20px] font-normal" href={"/login"}>
            Login
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
