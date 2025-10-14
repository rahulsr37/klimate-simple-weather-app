import React, { type PropsWithChildren } from "react";
import Header from "./header";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      {/* header */}
      <Header />
      {/* main */}
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      {/* footer */}
      <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8 text-center text-gray-500">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Klimate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default layout;
