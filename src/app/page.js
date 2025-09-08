import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Title from "@/components/Title/Title";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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

      <div className="container-fuid mt-5">
        <Title 
          title={"Todo lo que tu clínica necesita para crecer"}
          text={"Nuestra plataforma está diseñada para ser tu aliado tecnológico integral."}
        />

        <div className="row justify-content-evenly">
          <Card 
            icon={faUser}
            title={"Gestión Centralizada"}
            text={"Agendas, pacientes, facturación e historial clínico en una única plataforma en la nube, accesible desde cualquier lugar."}
          />

          <Card 
            title={"Gestión Centralizada"}
            text={"Agendas, pacientes, facturación e historial clínico en una única plataforma en la nube, accesible desde cualquier lugar."}
          />

          <Card 
            title={"Gestión Centralizada"}
            text={"Agendas, pacientes, facturación e historial clínico en una única plataforma en la nube, accesible desde cualquier lugar."}
          />

          <Card 
            title={"Gestión Centralizada"}
            text={"Agendas, pacientes, facturación e historial clínico en una única plataforma en la nube, accesible desde cualquier lugar."}
          />

          <Card 
            title={"Gestión Centralizada"}
            text={"Agendas, pacientes, facturación e historial clínico en una única plataforma en la nube, accesible desde cualquier lugar."}
          />

          <Card 
            title={"Gestión Centralizada"}
            text={"Agendas, pacientes, facturación e historial clínico en una única plataforma en la nube, accesible desde cualquier lugar."}
          />

        </div>
      </div>
      
    </div>
  );
}
