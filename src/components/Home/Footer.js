import React from "react";
import styled from "@emotion/styled";
import { Wrapper } from "../shared";

import location from "../../images/footer_icons/address.png";
import email from "../../images/footer_icons/email.png";
import whatsapp from "../../images/footer_icons/whatsapp.png";
import linkedin from "../../images/footer_icons/linkedin.png";
import facebook from "../../images/footer_icons/facebook.png";

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

const footerData = [
  {
    imgSrc: location,
    imgAlt: "Ubicación",
    text: "Campo de tiro #402 Adolfo Lopez Mateos",
    boldText: "Pachuca de Soto, Hidalgo.",
    redirect:
      "https://www.google.com/maps?ll=20.096941,-98.743961&z=15&t=m&hl=es-419&gl=US&mapclient=embed&q=Calle+Campo+de+Tiro+400+Privada+la+Paz+42094+Pachuca+de+Soto,+Hgo.+M%C3%A9xico",
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
    text: "Escríbenos por Whatsapp",
    boldText: "7712958436",
    redirect: "https://api.whatsapp.com/send?phone=527712958436",
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
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
