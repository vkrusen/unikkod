import * as React from "react"
import Seo from "../../components/seo"

import {
  Button,
  Card,
  Divider,
  Page,
  StickyCallToAction,
} from "../../components/unikkod-components"

import ArrowRightMinor from "../../images/icons/ArrowRightMinor.svg"
import CoWorking from "../../images/CoWorking.jpg"

export default function Website() {
  return (
    <Page image={CoWorking} themeColor="#FFFFFF">
      <Card>
        <h1>Webbutveckling</h1>
        <Divider />
        <p>
          När du driver ett mindre eller nystartat företag vet du att varje
          investering måste ge utdelning. Du vill ha en hemsida som inte bara
          ser fantastisk ut, utan också levererar resultat. Det är därför du
          behöver ett team som förstår dina mål och behov. Unikkod är det
          svenska teamet som designar och kodar allt inhouse, utan mallar.
        </p>
        <p>
          Vi är dedikerade att hjälpa dig att skapa en unik, kostnadseffektiv
          hemsida som levererar resultat, oavsett om du vill sälja online, öka
          ditt varumärkesmedvetande eller bara bygga ditt digitala företag. Låt
          oss hjälpa dig att nå ditt mål med en hemsida du kan vara stolt över.
        </p>
      </Card>
      <Card>
        <h3>Hur är upplägget?</h3>
        <p>
          Vi delar upp processen i tre enkla steg. Det tar totalt mellan 2-4
          veckor från första steget tills att hemsidan är klar.
        </p>
        <p>
          Innan vi sätter igång behöver vi veta mer om ditt företag. Om du
          beställer direkt från vår hemsida har vårt team oftast redan allt vi
          behöver för att sätta igång. Annars har vi ett kort uppstartsmöte där
          vi går igenom och hjälper dig hitta vad du behöver.
        </p>
        <p>
          På detta möte lär vi känna dig och ditt företag bättre så vi kan
          säkerställa att hemsidan fångar rätt känsla och stil. Vi vill också
          säkerställa att vi har all den information vi behöver för att kunna
          börja designa din hemsida.
        </p>
      </Card>
      <Card>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard step={1} title="Design" current>
            <p>
              Vårt team använder de senaste verktygen och teknikerna, inklusive
              React, för att säkerställa att din hemsida är snabb, enkel att
              använda och har den rätta känslan och stilen för ditt företag.
            </p>
          </StepCard>
          <StepCard step={2} title="Kodning" current>
            <p>
              När designen är klar sätter vi igång med kodningen. Vi använder
              React för att göra hemsidan så effektiv som möjligt, vilket gör
              att den bara behöver laddas en gång och är snabb och smidig för
              besökarna.
            </p>
          </StepCard>
          <StepCard step={3} title="Publicering" animate>
            <p>
              När kodningen är klar och hemsidan har testats och är redo att gå
              live, ger vi dig information om hur du kan lansera hemsidan. Om du
              önskar, kan du också boka ett kort möte med oss för att vi ska
              hjälpa dig att publicera hemsidan.
            </p>
          </StepCard>
        </div>
      </Card>
      <Card>
        <p>
          Efter att hemsidan har gått live, står vi alltid redo att hjälpa dig
          om du behöver support. Du kan nå oss via samtal, mejl eller
          chattmeddelande när som helst, och vi ser till att hemsidan fortsätter
          att fungera på våra servrar.
        </p>
        <p>
          Så där har du det, en enkel beskrivning av vår webbutvecklingsprocess
          från bokning till eftersupport. Vi levererar hemsidan inom 1-4 veckor
          och våra priser baseras på vår prislista. En hemsida från oss kostar
          mellan 5000-10 000 kr. Vi ser fram emot att hjälpa dig att skapa den
          perfekta hemsidan för ditt företag!
        </p>
        <Divider position="center"/>
      </Card>
      <Card>
        <h3>Använder ni WordPress?</h3>
        <p>
          Vi förstår att många kunder vill ha möjligheten att själva hantera och
          uppdatera sin hemsida efter lansering.
        </p>
        <p>
          Därför har vi erfarenhet av och utbildning i att utveckla hemsidor i
          WordPress. Vi kan lägga till en WordPress-administratör så att du
          enkelt kan uppdatera innehållet på din hemsida, inklusive text, bilder
          och filer, så att din hemsida alltid är uppdaterad och relevant. Vårt
          mål är att ge dig full kontroll över din hemsida, så att du inte är
          beroende av oss eller någon annan för att göra ändringar. Vi stöder
          också dig efter lanseringen för att säkerställa att du har all den
          hjälp du behöver för att hantera din hemsida i WordPress.
        </p>
        <p>
          Vi erbjuder ett brett utbud av Content Management Systems (CMS).
          Utöver WordPress erbjuder vi även bland annat Strapi, GraphCMS och
          Contentful. Oavsett om du vill ha en lättanvänd plattform för att
          hantera din hemsida eller en mer avancerad lösning med större
          möjligheter, har vi det du behöver.
        </p>
      </Card>
      <Card>
        <h3>Vad kostar det?</h3>
        <p>
          När det gäller priser för våra webbutvecklingstjänster så har vi en
          prislista som vi arbetar efter. Generellt sett ligger priset för en
          hemsida mellan 5000-10 000 kr. Men vi erbjuder också möjligheten att
          få ett fast pris direkt när du lägger en beställning på vår hemsida.
          Det är viktigt för oss att alltid vara öppna och transparenta med våra
          kunder när det gäller priser, så du vet precis vad du får för
          pengarna. Vi vill också poängtera att du alltid får en högkvalitativ
          hemsida från oss, oavsett pris.
        </p>
      </Card>
      <Card>
        <h3>
          Kan ni hjälpa mig med integrationer med andra plattformar jag
          använder?
        </h3>
        <p>
          Vi har erfarenhet av att integrera olika plattformar och tjänster med
          våra hemsidor. Vi hjälper dig att ansluta andra tjänster, som
          exempelvis bokningssystem, så att dina kunder kan boka möten direkt
          från din hemsida. Vi strävar alltid efter att göra så att alla delar
          av din verksamhet fungerar så smidigt och enkelt som möjligt, och
          integreringar med andra plattformar spelar en stor roll i det. Vi
          jobbar noga med att se till att alla integreringar fungerar korrekt
          och säkerställer att ditt företag har den bästa möjliga upplevelsen.
        </p>
      </Card>
      <Card>
        <h3>Hur ofta kommer ni att ha kontakt med mig under projektet?</h3>
        <p>
          Vi förstår att det är viktigt för dig som kund att ha kontroll över
          projektet. Därför ser vi till att ha regelbunden kontakt med dig för
          att säkerställa att allt går enligt planen. Vi hör bara av oss om vi
          behöver någon form av information från dig, men du kan när som helst
          nå oss via telefon, e-post eller vår chat. Vi är alltid här för att
          hjälpa och stödja dig under hela projektet.
        </p>
      </Card>
      <Card>
        <Button
          type="plain"
          icon={ArrowRightMinor}
          onClick={() => console.log("Click")}
        >
          Se prislista
        </Button>
        <Button
          type="plain"
          icon={ArrowRightMinor}
          onClick={() => console.log("Click")}
        >
          Snacka med oss
        </Button>
      </Card>
      <StickyCallToAction
        title="Beställ med fast pris"
        onClick={() => console.log("Clicked")}
        icon={ArrowRightMinor}
      />
    </Page>
  )
}

function StepCard({ step, title, current = false, animate = false, children }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 border-2 border-solid border-gray-100 rounded-lg ">
        <div
          className={`w-100% h-1 rounded mb-4 ${
            current || animate ? "bg-primary" : "bg-gray-200"
          } ${animate ? "animate-pulse" : null}`}
        />
        <h4
          className={`${
            current || animate ? "text-primary" : "text-gray-400"
          } ${animate ? "animate-pulse" : null}`}
        >
          Steg {step}
        </h4>
        <p>{title}</p>
      </div>
      {children}
    </div>
  )
}

export const Head = () => <Seo title="Tjänster" />
