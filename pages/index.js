import NavItem from "../components/NavItem";
import SectionDownload from "../components/SectionDownload";
import SectionHarga from "../components/SectionHarga";
import SectionHero from "../components/SectionHero";
import SectionProfil from "../components/SectionProfil";
import SectionService from "../components/SectionService";
import SectionTestimoni from "../components/SectionTestimoni";

export default function Home() {
  return (
    <>
      <div className=" mx-auto">
        <NavItem />
        <SectionHero />
        <SectionProfil />
        <SectionService />
        <SectionHarga />
        <SectionTestimoni />
        <SectionDownload />
      </div>
    </>
  );
}
