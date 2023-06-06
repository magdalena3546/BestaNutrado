import styles from "./BestaSummary.module.scss";

const BestaSummary = ({setColor}) => {
  setColor("#fff");
  return (
    <>
      <div className={styles.bannerBesta}>
        <h3>Besta Nutrado</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.aside}>
          <div className={styles.photo}></div>
          <img
            className={styles.photoBesta}
            src="/images/besta1.png"
            alt="besta nutrado opakowanie karmy"></img>
        </div>
        <div className={styles.text}>
          <h4>Besta Nutrado - doskonała Karma dla Twojego Psa i Kota</h4>
          <p>
            Besta Nutrado to renomowana marka specjalizująca się w produkcji
            wysokiej jakości karmy dla psów i kotów. Od lat zdobywamy uznanie i
            zaufanie właścicieli zwierząt w Polsce, oferując im produkty o
            doskonałej jakości i wartości odżywczej.
          </p>
          <p>
            Kładziemy duży nacisk na składniki odżywcze w produktach. Nasze
            karmy są opracowywane przy użyciu najnowszych badań i innowacyjnych
            technologii, aby zapewnić optymalne żywienie i wsparcie dla zdrowia
            zwierząt. Wszystkie produkty są starannie wyważone pod względem
            wartości odżywczych, zawierają składniki niezbędne do utrzymania
            energii, wzmocnienia odporności oraz utrzymania zdrowej skóry i
            sierści.
          </p>
          <p>
            Co wyróżnia Besta Nutrado spośród innych marek na rynku to podejście
            do jakości. Korzystamy z surowców najwyższej jakości, starannie
            wybierając składniki i eliminując sztuczne dodatki oraz konserwanty.
            Wszystkie produkty są poddawane rygorystycznym testom i kontroli
            jakości, aby spełniać najwyższe standardy żywieniowe i
            bezpieczeństwa.
          </p>
          <p>
            Nie tylko jakość, ale również różnorodność produktów stanowi nasz
            znak rozpoznawczy. Oferujemy szeroki wybór karm suchych i mokrych,
            dopasowanych do różnorodnych potrzeb żywieniowych i preferencji
            zwierząt.
          </p>
          <h4>Dbałość o zdrowie</h4>
          <p>
            Jeśli jesteś odpowiedzialnym właścicielem psa lub kota, z pewnością
            zależy Ci na tym, aby zapewnić swojemu pupilowi zdrową i
            pełnowartościową dietę. Wybór odpowiedniej karmy stanowi kluczowy
            element dbania o dobre samopoczucie i zdrowie twojego przyjaciela.
            Wśród wielu dostępnych na rynku marek, Besta Nutrado wyróżnia się
            jako renomowany producent wysokiej jakości karmy. Koncentrujemy się
            na zdrowiu i dobrostanie zwierząt. Naszą misją jest zapewnienie
            twojemu pupilowi pełnowartościowej i smacznej diety.
          </p>
          <h4>Zaawansowane badania i innowacje</h4>
          <p>
            Opieramy swoje produkty na najnowszych badaniach naukowych oraz
            innowacyjnych rozwiązaniach żywieniowych. Zespół specjalistów ds.
            żywienia zwierząt pracuje nad opracowywaniem formuł karm, które
            dostarczają niezbędnych składników odżywczych, witamin i minerałów.
            Dzięki temu nasza karma może dostarczyć właścicielom zwierząt
            produkty, które nie tylko smakują ich pupilowi, ale również służą
            jako kompletna i zrównoważona dieta.
          </p>
          <h4>Dostosowane do indywidualnych potrzeb</h4>
          <p>
            Wszystkie nasze składniki są starannie wyselekcjonowane, aby
            dostarczać zwierzętom niezbędnych substancji odżywczych, które
            wspierają ich zdrowie oraz dobre samopoczucie. Oferujemy szeroki
            wybór karm, które są dostosowane do indywidualnych potrzeb psów i
            kotów. Bez względu na wiek, rasę, rozmiar lub ewentualne specjalne
            wymagania zdrowotne, posiadamy produkty, które sprostają tym
            wymaganiom. Od karm dla szczeniąt i młodych kotów, po karmy dla
            seniorów i zwierząt z alergiami, Besta Nutrado oferuje różnorodność
            opcji, które umożliwiają właścicielom dobranie odpowiedniej karmy
            dla swojego zwierzaka.
          </p>
          <h4>Bezpieczeństwo i jakość</h4>
          <p>
            Przykładamy ogromną wagę do bezpieczeństwa i jakości swoich
            produktów. Proces produkcji odbywa się w zaawansowanych i
            bezpiecznych warunkach, zgodnie z najwyższymi standardami
            branżowymi. Stosujemy rygorystyczne procedury kontroli jakości, aby
            zapewnić, że każda partia karmy jest wolna od zanieczyszczeń i
            spełnia najwyższe standardy żywieniowe.
          </p>
          <h4>Opinie zadowolonych właścicieli</h4>
          <p>
            Wielu właścicieli psów i kotów, którzy zdecydowali się na karmę
            marki Besta Nutrado, podkreśla korzyści, jakie przynosi ich
            zwierzakom. Opinie te dotyczą poprawy zdrowia, kondycji, sierści i
            ogólnego samopoczucia ich pupili.
          </p>
          <h4>
            Wybierz Besta Nutrado dla zdrowia i szczęścia Twojego przyjaciela!
          </h4>
          <p>
            Karma Besta Nutrado nie tylko dostarcza niezbędnych składników
            odżywczych, ale także smakuje i przynosi korzyści zdrowotne. Dbamy o
            to, aby Twój pupil otrzymywał kompletną i zrównoważoną dietę, która
            wspiera jego ogólne samopoczucie, zdrową sierść, mocne kości, układ
            odpornościowy oraz układ trawienny. Podejmując decyzję o wyborze
            karmy dla swojego przyjaciela, pamiętaj, że jest to jedno z
            najważniejszych czynników wpływających na jego zdrowie oraz jakość
            życia. Decydując się na Besta Nutrado, wybierasz nie tylko wysoką
            jakość i bezpieczeństwo, ale również zdrowie i szczęście swojego
            zwierzaka. Znajdź idealny produkt, który spełni potrzeby Twojego
            pupila i daj mu to co najlepsze. Zapewnij mu zdrowie, dobre
            samopoczucie i długie lata radości, jakie mogą wyniknąć z właściwej
            i zbilansowanej diety.
          </p>
        </div>
      </div>
    </>
  );
};

export default BestaSummary;
