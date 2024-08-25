import BreadcrumbCollapsed from "@/components/common/Breadcrumb";
import DataFetch from "@/components/common/dataFetch";
import ModeToggle from "@/components/common/ThemeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is very first page"
}

export default function Home() {
  const paths: Array<String> = ["Home", "Inventory", "Zonal", "headquarter", "selenium"];
  return (
    <>
      <div className="flex justify-between p-2">
        <div className="text-4xl font-bold">Logo</div>
        <ModeToggle />
      </div>
      <BreadcrumbCollapsed paths={paths} />
      <DataFetch/>
    </>
  );
}