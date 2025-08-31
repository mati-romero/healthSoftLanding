import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className="w-100">
      <Banner
        title={"Gestión y Telemedicina para la Clínica Moderna"} 
        text={"Centraliza agendas y pacientes, y conecta con ellos a través de videollamadas seguras. Todo en un solo lugar."} 
      >
          <div className="w-100 text-center mt-5">
            <Button type={"action"}>Empieza Gratis</Button>
            <Button type={"classic-cream"}>Ver Soluciones</Button>
          </div>
      </Banner>
    </div>
  );
}
