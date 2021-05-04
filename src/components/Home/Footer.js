import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Wrapper } from "../shared";

import location from "../../images/footer_icons/address.webp";
import email from "../../images/footer_icons/email.webp";
import whatsapp from "../../images/footer_icons/whatsapp.webp";
import linkedin from "../../images/footer_icons/linkedin.webp";
import facebook from "../../images/footer_icons/facebook.webp";

const FooterContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  padding: 1rem;
  gap: 12px;
  color: white;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  background-color: rgba(0, 0, 0, 0.33);
`;

const FooterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
  span {
    line-height: 1em;
  }
  p {
    font-size: 12px;
  }
  b {
    font-size: 16px;
    text-transform: uppercase;
  }
`;

const SocialNetContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  img {
    width: 55px;
    height: 55px;
    object-fit: contain;
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;

const directions = [
  {
    id: 1,
    redirect:
      "https://www.google.com/maps?ll=20.096941,-98.743961&z=15&t=m&hl=es-419&gl=US&mapclient=embed&q=Calle+Campo+de+Tiro+400+Privada+la+Paz+42094+Pachuca+de+Soto,+Hgo.+M%C3%A9xico",
    text: "Campo de tiro #402 Adolfo Lopez Mateos",
    boldText: "PACHUCA DE SOTO, HIDALGO.",
  },
  {
    id: 2,
    redirect: "https://goo.gl/maps/Q3v62ZMpAukh4pk67",
    text: "Blv. Zacatecas N° 245 piso 3.",
    boldText: "Aguascalientes, Ags.",
  },
  {
    id: 3,
    redirect: "https://goo.gl/maps/7MqEu8WT8jwA4y2F7",
    text: "Av. Chapultepec N° 1610 Piso 1 Int. 3, Col. Privadas del Pedregal.",
    boldText: "San Luis Potosi, SLP.",
  },
  {
    id: 4,
    redirect: "https://goo.gl/maps/ViEC76vMfNRw69128",
    text:
      "Av. Armando Birlain Shaffer N° 2001, Central Park Corporativo 1, Piso 5.",
    boldText: "Querétaro. Qro.",
  },
  {
    id: 5,
    redirect: "https://goo.gl/maps/kmEtJDvUSKyu6Vf96",
    text:
      "Torre nissan, Bulevar Vasco de Quiroga #101-piso 6, Los Gavilanes, 37266;",
    boldText: "León, Gto.",
  },
];

const Footer = () => {
  const [currentDirection, setCurrentDirection] = useState(directions[0]);
  const [footerData, setCurrentData] = useState([
    {
      imgSrc: location,
      imgAlt: "Ubicación",
      ...currentDirection,
    },
    {
      imgSrc: email,
      imgAlt: "Email",
      text: "Envíanos un email",
      boldText: "contacto@estam.mx",
      anchor: true,
    },
    {
      imgSrc: whatsapp,
      imgAlt: "Whatsapp",
      boldText: "Escríbenos por Whatsapp",
      redirect: "https://api.whatsapp.com/send?phone=527712958436",
    },
  ]);

  useEffect(() => {
    const data = [...footerData];
    data[0] = { imgSrc: location, imgAlt: "Ubicación", ...currentDirection };
    setCurrentData(data);
  }, [currentDirection]);

  const handleChange = (e) => {
    const direction = directions.find((dir) => dir.id == e.target.value);
    setCurrentDirection(direction);
  };
  return (
    <Wrapper>
      <FooterContainer>
        <select
          name="address"
          onBlur={handleChange}
          onChange={handleChange}
          defaultValue={currentDirection?.id}
        >
          {directions.map(({ id, boldText }, key) => (
            <option key={key} value={id}>
              {boldText}
            </option>
          ))}
        </select>
        {footerData.map((item, key) => {
          if (item.anchor) {
            return (
              <a href={`mailto:${item.boldText}`} key={key}>
                <FooterSection>
                  <img src={item.imgSrc} alt={item.imgAlt} />
                  <span>
                    <p className="hartwell-light">{item.text}</p>
                    <b className="hartwell-semibold">{item.boldText}</b>
                  </span>
                </FooterSection>
              </a>
            );
          }
          return (
            <a target="_blank" rel="noreferrer" href={item.redirect} key={key}>
              <FooterSection>
                <img src={item.imgSrc} alt={item.imgAlt} />
                <span>
                  <p className="hartwell-light">{item.text}</p>
                  <b className="hartwell-semibold">{item.boldText}</b>
                </span>
              </FooterSection>
            </a>
          );
        })}
        <SocialNetContainer>
          <a
            target="_blank"
            rel="noreferrer "
            href=" https://www.facebook.com/estamenergia"
          >
            <img
              src={facebook}
              alt="Facebook"
              placeholder="Visítanos en Facebook"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/estam-mx"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              placeholder="Visítanos en LinkedIn"
            />
          </a>
        </SocialNetContainer>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
