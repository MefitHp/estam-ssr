import React from "react";
import styled from "@emotion/styled";
import { Wrapper } from "../components/shared";
import Footer from "../components/Home/Footer";

const PrivacyPolicyContainer = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: calc(3em + 1vw);
  }
  .privacy-policy {
    p.p1 {
      margin: 0px 0px 0px 0px;
      font: 12px "Times New Roman";
      color: #000000;
    }

    p.p2 {
      margin: 0px 0px 0px 0px;
      font: 12px "Times New Roman";
      color: #000000;
      min-height: 15px;
    }

    p.p3 {
      margin: 0px 0px 0px 0px;
      line-height: 48.8px;
      font: 52.5px Helvetica;
      color: #ffffff;
    }

    p.p4 {
      margin: 0px 0px 0px 0px;
      line-height: 22.5px;
      font: 15px Helvetica;
      color: var(---blue);
    }

    p.p5 {
      margin: 0px 0px 0px 0px;
      line-height: 22.5px;
      font: 15px Helvetica;
      color: var(--blue);

      min-height: 18px;
    }

    p.p6 {
      margin: 0px 0px 0px 0px;
      font: 15px "Times New Roman";
      color: #000000;
    }

    p.p7 {
      margin: 0px 0px 0px 0px;
      font: 15px "Times New Roman";
      color: #000000;
      min-height: 17px;
    }

    p.p9 {
      margin: 0px 0px 5px 0px;
      line-height: 18.8px;
      font: 13.5px Helvetica;
      color: var(--blue);
    }

    p.p10 {
      margin: 0px 0px 0px 0px;
      line-height: 18.8px;
      font: 11.5px Helvetica;
      color: var(--blue);
    }

    li.li8 {
      margin: 0px 0px 0px 0px;
      line-height: 24.8px;
      font: 15px Helvetica;
      color: var(--blue);
    }

    span.s1 {
      letter-spacing: 0.4px;
    }

    span.s2 {
      font: 15px Helvetica;
      letter-spacing: 0.4px;
      color: var(--blue);
    }

    span.s3 {
      font: 10px Symbol;
    }

    span.s4 {
      letter-spacing: 0.4px;
    }

    span.s5 {
      font: 15px Helvetica;
      text-decoration: underline;
      letter-spacing: 0.4px;
      color: #0000ff;
    }

    table.t1 {
      border-collapse: collapse;
    }

    td.td1 {
      width: 635px;
      height: 16px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td2 {
      width: 247px;
      height: 16px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td3 {
      width: 635px;
      height: 14px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td4 {
      width: 247px;
      height: 14px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td5 {
      width: 635px;
      height: 13px;
      background-color: var(--blue);
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td6 {
      width: 247px;
      height: 13px;
      background-color: var(--blue);
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td7 {
      width: 635px;
      height: 52px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td8 {
      width: 247px;
      height: 52px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td9 {
      width: 635px;
      height: 32px;
      background-color: var(--blue);
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td10 {
      width: 247px;
      height: 32px;
      background-color: var(--blue);
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td11 {
      width: 635px;
      height: 108px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td12 {
      width: 247px;
      height: 108px;
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #d9d9d9 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td13 {
      width: 635px;
      height: 88px;
      background-color: var(--blue);
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #000000 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    td.td14 {
      width: 247px;
      height: 88px;
      background-color: var(--blue);
      border-style: solid;
      border-width: 1px 1px 1px 1px;
      border-color: #d9d9d9 #d9d9d9 #000000 #d9d9d9;
      padding: 4px 4px 4px 4px;
    }

    ul.ul1 {
      list-style-type: disc;
    }
    p {
      font-size: 18px !important;
      color: var(--blue) !important;
      span {
        color: white !important;
      }
    }
  }
`;
const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyContainer>
      <Wrapper>
        <section className="privacy-policy">
          <h1>Política de Privacidad</h1>
          <PrivacyContent />
        </section>
        <Footer />
      </Wrapper>
    </PrivacyPolicyContainer>
  );
};

const PrivacyContent = () => {
  return (
    <>
      <p class="p4">
        <span class="s1">
          <strong>
            1. Titular y responsable del procesamiento de los datos personales
          </strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          1.1. Cualquier dato personal proporcionado o recogido a trav&eacute;s
          de las operaciones llevadas a cabo en&nbsp;www.estam.mx en adelante,
          el &quot;Sitio&quot;) ser&aacute; procesado por:
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          &nbsp;STEVE TORT RODRIGUEZ TORS871128DB8 CAMPO DE TIRO 402 COL. ADOLFO
          LOPEZ MATEOS
        </span>
      </p>
      <p class="p5">
        <br />
      </p>
      <p class="p6">
        AGENCIA DE ENERG&Iacute;A ESTAM SA DE CV AEE2009142V9 BENEFICIO DE PATIO
        300, COLONIA REAL DE MINAS, PACHUCA DE SOTO HGO. C.P. 42090.
      </p>
      <p class="p7">
        <br />
      </p>
      <p class="p6">
        ECOEFICIENCIA E INFRAESTRUCTURA MEXICANA SA DE CV EIM170223K49{" "}
        <span class="s2">CAMPO DE TIRO 402 COL. ADOLFO LOPEZ MATEOS</span>
      </p>
      <p class="p2">
        <br />
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          (en adelante,&nbsp;el &quot;<strong>Titular</strong>&quot;), en
          calidad de Titulares independientes del procesamiento,
          procesar&aacute;n sus datos personales de acuerdo con las
          disposiciones de la legislaci&oacute;n aplicable sobre privacidad y
          protecci&oacute;n de datos personales y este aviso sobre privacidad.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          1.2. Con motivo de la suscripci&oacute;n de varios servicios o de
          acceso a los mismos, se comunicar&aacute;n los nombres de los otros
          eventuales titulares y responsables del tratamiento.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>
            2. Responsable de la protecci&oacute;n de datos personales (RPD)
          </strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          El Titular ha designado un Responsable de la Protecci&oacute;n de los
          Datos Personales (RPD) con el que es posible contactar en la siguiente
          direcci&oacute;n de correo electr&oacute;nico: contacto@estam.mx
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>3. Objeto y modalidades del tratamiento</strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          3.1. &nbsp;El Titular procesar&aacute; los datos personales que usted
          haya comunicado o que el Titular haya obtenido leg&iacute;timamente (
          <strong>&quot;Datos Personales</strong>
          &quot;). En concreto, se procesan los siguientes datos personales:
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          3.1.1. <strong>Datos de contacto</strong>: nombre, apellido,
          direcci&oacute;n de correo electr&oacute;nico, n&uacute;mero de
          tel&eacute;fono y el contenido del mensaje que usted ha enviado, y
          otros datos personales que puedan habernos sido proporcionados durante
          las comunicaciones mantenidas. Procesaremos estos Datos Personales en
          caso de que nos haga consultas, solicite informaci&oacute;n o nos
          env&iacute;e comunicaciones de diverso tipo.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          3.1.2. <strong>Datos de navegaci&oacute;n</strong>: los sistemas
          inform&aacute;ticos y telem&aacute;ticos, y los procedimientos de
          software utilizados para operar el Sitio adquieren, durante su
          funcionamiento normal, algunos datos (p. ej., la fecha y hora de
          acceso, las p&aacute;ginas visitadas, el nombre del Proveedor de
          Servicios de Internet y la direcci&oacute;n del Protocolo de Internet
          o IP a trav&eacute;s de la cual accede a Internet, la direcci&oacute;n
          de Internet desde la cual se conect&oacute; a nuestro Sitio, etc.),
          cuya transmisi&oacute;n est&aacute; impl&iacute;cita en el uso de
          protocolos de comunicaci&oacute;n web o es &uacute;til para una mejor
          gesti&oacute;n y optimizaci&oacute;n del sistema de transmisi&oacute;n
          de datos y de correo electr&oacute;nico.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          3.2. Por tratamiento de Datos Personales para los fines de esta
          declaraci&oacute;n se debe entender cualquier operaci&oacute;n o
          conjunto de operaciones, realizadas con la ayuda de procesos
          automatizados y aplicados a Datos Personales, como
          recopilaci&oacute;n, registro, organizaci&oacute;n,
          estructuraci&oacute;n, almacenamiento, adaptaci&oacute;n o
          modificaci&oacute;n, extracci&oacute;n, consulta, uso,
          comunicaci&oacute;n por transmisi&oacute;n, difusi&oacute;n o
          cualquier otra forma de uso, comparaci&oacute;n o
          interconexi&oacute;n, limitaci&oacute;n, cancelaci&oacute;n o
          destrucci&oacute;n.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          3.3. &nbsp;Le informamos de que dichos Datos Personales se
          procesar&aacute;n manualmente y/o con el apoyo de medios
          inform&aacute;ticos o telem&aacute;ticos.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>4. Finalidad y base jur&iacute;dica del tratamiento</strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          4.1. El Titular procesar&aacute; sus Datos Personales para la
          consecuci&oacute;n de fines espec&iacute;ficos y solo a partir de una
          base legal espec&iacute;fica prevista por la ley aplicable sobre
          privacidad y protecci&oacute;n de datos personales. Concretamente, El
          Titular procesar&aacute; sus Datos Personales solo cuando concurran
          una o m&aacute;s de las siguientes bases legales:
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <ul class="ul1">
        <li class="li8">
          <span class="s4">
            usted ha dado su consentimiento libre, espec&iacute;fico, informado,
            inequ&iacute;voco y expreso al tratamiento;
          </span>
        </li>
        <li class="li8">
          <span class="s4">
            el procesamiento es necesario para la ejecuci&oacute;n de un
            contrato del cual usted es parte o para la ejecuci&oacute;n de
            medidas precontractuales adoptadas por petici&oacute;n suya;
          </span>
        </li>
        <li class="li8">
          <span class="s4">
            en caso de inter&eacute;s leg&iacute;timo de el Titular;
          </span>
        </li>
        <li class="li8">
          <span class="s4">
            cuando el Titular est&eacute; sujeta a obligaci&oacute;n legal de
            procesar Datos Personales.
          </span>
        </li>
      </ul>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          4.2. La siguiente tabla enumera los prop&oacute;sitos para los cuales
          el Titular de los datos procesa sus Datos personales y la base legal
          en la que se basa el procesamiento.
        </span>
      </p>
      <table cellpadding="0" cellspacing="0" class="t1">
        <tbody>
          <tr>
            <td class="td1" valign="bottom">
              <p class="p9">
                <span class="s1">
                  <strong>Fines del tratamiento</strong>
                </span>
              </p>
            </td>
            <td class="td2" valign="bottom">
              <p class="p9">
                <span class="s1">
                  <strong>Base jur&iacute;dica</strong>
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="td3" valign="top">
              <p class="p10">
                <span class="s1">
                  Permitir el uso de todas las caracter&iacute;sticas del Sitio
                </span>
              </p>
            </td>
            <td class="td4" valign="top">
              <p class="p10">
                <span class="s1">Ejecuci&oacute;n de un contrato</span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="td5" valign="top">
              <p class="p10">
                <span class="s1">
                  Verificar el correcto funcionamiento del Sitio
                </span>
              </p>
            </td>
            <td class="td6" valign="top">
              <p class="p10">
                <span class="s1">Ejecuci&oacute;n de un contrato</span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="td7" valign="top">
              <p class="p10">
                <span class="s1">
                  Verificaci&oacute;n de responsabilidad en caso de delitos
                  inform&aacute;ticos contra el Sitio; detecci&oacute;n,
                  prevenci&oacute;n, mitigaci&oacute;n y comprobaci&oacute;n de
                  actividades fraudulentas o ilegales en relaci&oacute;n con los
                  servicios prestados en el sitio web; realizaci&oacute;n de los
                  controles de seguridad requeridos por la ley
                </span>
              </p>
            </td>
            <td class="td8" valign="top">
              <p class="p10">
                <span class="s1">Inter&eacute;s leg&iacute;timo</span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="td9" valign="top">
              <p class="p10">
                <span class="s1">
                  Dar respuesta a una consulta o solicitud realizada por el
                  interesado
                </span>
              </p>
            </td>
            <td class="td10" valign="top">
              <p class="p10">
                <span class="s1">
                  Aplicaci&oacute;n de las medidas precontractuales adoptadas a
                  petici&oacute;n de la parte interesada
                </span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="td11" valign="top">
              <p class="p10">
                <span class="s1">
                  Desempe&ntilde;o por parte de el Titular, de una
                  compa&ntilde;&iacute;a del ESTAM, de sociedades matrices,
                  subsidiarias o afiliadas o de socios comerciales de el Titular
                  para llevar a cabo estudios de mercado, ventas directas,
                  incluidas llamadas telef&oacute;nicas, para la
                  colocaci&oacute;n de productos o servicios, para
                  comunicaciones comerciales o actividades de marketing. Estas
                  actividades pueden llevarse a cabo mediante el env&iacute;o de
                  material publicitario, informativo, promocional o de
                  invitaci&oacute;n, utilizando m&eacute;todos tradicionales (p.
                  ej., correo ordinario) o sistemas de contacto automatizados
                  (p. ej., SMS, correo electr&oacute;nico)
                </span>
              </p>
            </td>
            <td class="td12" valign="top">
              <p class="p10">
                <span class="s1">Consentimiento del interesado</span>
              </p>
            </td>
          </tr>
          <tr>
            <td class="td13" valign="top">
              <p class="p10">
                <span class="s1">
                  An&aacute;lisis de la propensi&oacute;n a usar los productos y
                  servicios ofrecidos por el Titular, o por
                  compa&ntilde;&iacute;as del ESTAM por sociedades matrices,
                  subsidiarias o afiliadas o por socios comerciales de el
                  Titular, la definici&oacute;n de perfiles individuales y de
                  grupo, la proposici&oacute;n de ofertas individuales
                  elaboradas tambi&eacute;n mediante el uso de instrumentos y
                  aplicaciones dise&ntilde;adas para registrar el consumo total
                  de energ&iacute;a, as&iacute; como su distribuci&oacute;n por
                  hora o correlacionada con dispositivos de usuario separados.
                </span>
              </p>
            </td>
            <td class="td14" valign="top">
              <p class="p10">
                <span class="s1">Consentimiento del interesado</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          4.3. El suministro de sus Datos Personales es necesario en todos los
          casos en que el procesamiento se lleva a cabo sobre la base de una
          obligaci&oacute;n legal o para ejecutar un contrato del que usted es
          parte o para la implementaci&oacute;n de medidas precontractuales
          tomadas a petici&oacute;n suya. Una eventual denegaci&oacute;n
          podr&iacute;a implicar la imposibilidad para el Titular de llevar a
          cabo el fin para el que se recopilan los Datos Personales
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          4.4. La provisi&oacute;n de sus Datos personales es voluntaria para la
          b&uacute;squeda de prop&oacute;sitos adicionales y el no proporcionar
          su consentimiento en relaci&oacute;n con ellos no tendr&aacute;
          consecuencias sobre la celebraci&oacute;n del contrato. La naturaleza
          obligatoria u opcional del consentimiento se especificar&aacute; en el
          momento de la recogida.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>5. Destinatarios de los Datos Personales</strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          5.1. Sus Datos Personales pueden ser accesibles para los fines
          mencionados anteriormente:
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          a) por parte de los empleados y colaboradores del Titular, designados
          para este fin, o de las empresas del ESTAM, para la realizaci&oacute;n
          de actividades organizativas, administrativas, financieras y
          contables;
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          b) por parte de empresas terceras u otras entidades que llevan a cabo
          actividades subcontratadas en nombre del Titular para permitir que el
          sitio web funcione, en su calidad de responsables externos del
          tratamiento.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>6. Transferencia de datos personales</strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>&nbsp;</strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">
          6.1 &nbsp;Sus datos personales ser&aacute;n tratados dentro de
          M&eacute;xico y almacenados en servidores ubicados dentro de
          M&eacute;xico.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          Cualquier transferencia de datos personales a otros pa&iacute;ses,
          solo ser&aacute; posible si los Responsable y Encargado del
          tratamiento involucrados brindan garant&iacute;as adecuadas de
          naturaleza contractual o contractual, incluidas las Normas
          corporativas vinculantes y Cl&aacute;usulas Contractuales tipo de
          protecci&oacute;n de datos.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          La transferencia de sus Datos personales a terceros fuera de
          M&eacute;xico, en ausencia de una decisi&oacute;n por la que se
          constate la adecuaci&oacute;n de la protecci&oacute;n de los datos u
          otras medidas apropiadas como se describe anteriormente, se
          realizar&aacute; solo si usted lo ha consentido y ser&aacute; tratado
          en su inter&eacute;s. En estos casos, le informamos que, aunque ESTAM
          adopta instrucciones de operaci&oacute;n comunes en d&oacute;nde, la
          transferencia de sus Datos personales puede estar expuesta a riesgos
          relacionados con las peculiaridades de la legislaci&oacute;n local con
          respecto al procesamiento de Datos personales.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>
            7. Per&iacute;odo de conservaci&oacute;n de los Datos Personales
          </strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          7.1. Los Datos personales procesados para los fines establecidos
          anteriormente se conservar&aacute;n de conformidad con los principios
          de proporcionalidad y necesidad, y en cualquier caso mientras
          persistan los fines del procesamiento.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          7.2. Sus Datos Personales se conservar&aacute;n normalmente mientras
          usted no revoque su consentimiento y, en cualquier caso, se
          eliminar&aacute;n autom&aacute;ticamente transcurridos doce meses.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          <strong>8. Derechos de los interesados</strong>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.1. En virtud de los art. 15-21 del Reglamento UE 2016/679 (RGPD), en
          relaci&oacute;n con los Datos Personales comunicados, usted tiene
          derecho a:
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">a) acceder y solicitar una copia;</span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">b) solicitar su correcci&oacute;n;</span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">c) solicitar su cancelaci&oacute;n;</span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          d) obtener una limitaci&oacute;n del tratamiento;
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">e) oponerse al tratamiento;</span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          f) &nbsp;recibir en un formato estructurado, com&uacute;nmente
          utilizado y legible por un dispositivo autom&aacute;tico y para
          transmitir dichos datos a otro titular del tratamiento, cuando ello
          sea t&eacute;cnicamente posible, sin impedimento alguno.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.2. Le informamos de que tiene derecho a oponerse en cualquier
          momento al procesamiento de los Datos Personales que le conciernen,
          realizado sobre la base del inter&eacute;s leg&iacute;timo de el
          Titular.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.3. Si se opone al procesamiento de sus Datos personales como se
          indica en el art&iacute;culo 8.2, el Titular se abstendr&aacute; de
          seguir procesando Datos Personales, a menos que demuestre la
          existencia de razones leg&iacute;timas vinculantes para continuar con
          el procesamiento, o para la verificaci&oacute;n, cumplimiento o
          defensa de un derecho ante un tribunal.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.4. Para ejercer sus derechos y retirar su consentimiento, puede
          enviar una comunicaci&oacute;n a la direcci&oacute;n de correo
          electr&oacute;nico&nbsp;contacto@estam.mx
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.5. Para obtener m&aacute;s informaci&oacute;n sobre sus Datos
          Personales, puede ponerse en contacto con el Responsable de
          Protecci&oacute;n de Datos Personales de ESTAM, con el que puede
          contactar a trav&eacute;s de la siguiente direcci&oacute;n de correo
          electr&oacute;nico: contacto@estam.mx, indicando obligatoriamente en
          el asunto &quot;[Privacidad]&quot;.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.6. Le recordamos que tiene derecho a presentar una queja ante la
          autoridad competente para la protecci&oacute;n de los datos
          personales.
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          8.7. &nbsp;En caso de que decida dirigirse a la Autoridad para la
          Protecci&oacute;n de los Datos Personales, podr&aacute; presentar su
          reclamaci&oacute;n mediante:
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;&nbsp;</span>
      </p>
      <p class="p4">
        <span class="s1">
          a) &nbsp;por correo electr&oacute;nico a las direcciones:{" "}
          <a href="mailto:contacto@estam.mx">
            <span class="s5">contacto@estam.mx</span>
          </a>
        </span>
      </p>
      <p class="p4">
        <span class="s1">&nbsp;</span>
      </p>
    </>
  );
};

export default PrivacyPolicy;
