import Link from "next/link";
import styled from "styled-components";
import { resourcesList } from "../data/resourcesList";
import ResourcesList from "../components/resourcesList";

const Resources = () => {
  const resources = resourcesList;
  console.log(resources);
  return (
    <div>
      <Headline>Hilfestellen und Beratungsangebote</Headline>
      <div>
        {resources.map((item) => (
          <ResourcesList key={item.id} item={item} />
        ))}
      </div>
      {/* <List>
        <ListItem>
          <h3>bff: Gewalt gegen Frauen e.V.</h3>
          <Link href="https://www.frauen-gegen-gewalt.de" passHref>
            bff: Gewalt gegen Frauen e.V.
          </Link>
        </ListItem>
        <ListItem>
          <h3>Hilfetelefon Gewalt gegen Frauen</h3>
          <Link href="https://www.hilfetelefon.de/" passHref>
            Hilfetelefon Gewalt gegen Frauen
          </Link>
          <br />
          <Link href="tel:08000 116 016">08000 116 016</Link>
        </ListItem>
        <ListItem>
          <h3>Hilfe-Telefon Sexueller Missbrauch</h3>
          <Link
            href="https://www.hilfe-portal-missbrauch.de/startseite"
            passHref
          >
            Hilfe-Telefon Sexueller Missbrauch
          </Link>
          <br />
          <Link href="tel:0800 30 50 750">0800 30 50 750</Link>
        </ListItem>
        <ListItem>
          <h3>Hilfe-Telefon berta</h3>
          <Link href="https://nina-info.de/berta" passHref>
            Hilfe-Telefon berta
          </Link>
          <br />
          <Link href="tel:0800 22 55 530">0800 22 55 530</Link>
        </ListItem>
        <ListItem>
          <h3>Suse Sicher und Selbstbestimmt</h3>
          <Link href="https://www.suse-hilft.de/de/" passHref>
            Suse Sicher und Selbstbestimmt
          </Link>
        </ListItem>
        <ListItem>
          <h3>Hilfetelefon Schwangere in Not</h3>
          <Link href="https://www.hilfetelefon-schwangere.de/" passHref>
            Hilfetelefon Schwangere in Not
          </Link>
          <br />
          <Link href="tel:08004040020">0800 40 40 020</Link>
        </ListItem>
        <ListItem>
          <h3>Landesverbände Frauenberatungsstellen</h3>
          <p>
            Die Landesverbände der Frauenfachberatungen bieten einen Überblick
            über Beratungsangebote vor Ort.
          </p>
          <h4>Baden-Württemberg</h4>
          <Link
            href="https://www.baden-wuerttemberg.de/fileadmin/redaktion/m-sm/intern/downloads/Downloads_Gegen_Gewalt_an_Frauen/Uebersicht_BW-Hilfeangebote-gewaltbetroffene-Frauen.pdf"
            passHref
          >
            Frauenberatungsstellen Baden-Würtemberg
          </Link>
          <h4>Bayern</h4>
          <Link
            href="https://bayern-gegen-gewalt.de/beratung-und-hilfe/hilfe-suche/?postal=&target-group=Keine%20Begrenzung&help-type=Fachberatungsstelle&search-focus=Alle%20Schwerpunkte"
            passHref
          >
            Bayern gegen Gewalt
          </Link>
          <h4>Berlin</h4>
          <Link
            href="https://www.berlin.de/willkommenszentrum/alltag/hilfe-fuer-frauen/"
            passHref
          >
            Frauenberatungsstellen Berlin
          </Link>
          <h4>Brandenburg</h4>
          <Link
            href="https://service.brandenburg.de/service/de/adressen/weitere-verzeichnisse/verzeichnisliste/~frauenhaeuser#"
            passHref
          >
            Frauenberatungsstellen Brandenburg
          </Link>
          <h4>Bremen</h4>
          <Link
            href="https://www.gewaltgegenfrauen.bremen.de/rat-und-hilfe/fachberatung-5560"
            passHref
          >
            Fachstellen für Gewalt gegen Frauen Bremen
          </Link>
          <h4>Hamburg</h4>
          <Link href="https://biff-frauenberatung.de/" passHref>
            biff Frauenberatungsstellen Hamburg
          </Link>
          <h4>Hessen</h4>
          <Link href="https://www.frauennotrufe-hessen.de/startseite" passHref>
            Frauennotrufe und Frauenberatungsstellen Hessen
          </Link>
          <h4>Mecklenburg-Vorpommern</h4>
          <Link
            href="https://www.regierung-mv.de/Landesregierung/jm/Zustaendigkeiten/Frauen-und-Gleichstellung/Krisensituationen/Frauen-und-M%C3%A4nner-in-Krisensituationen-%E2%80%93-Hier-finden-Sie-Hilfe/"
            passHref
          >
            Beratungs- und Hilfenetz in Mecklenburg-Vorpommern
          </Link>
          <h4>Niedersachsen</h4>
          <Link href="https://frauen-maedchen-beratung.de/" passHref>
            Verbund der niedersächsischen Frauen- und Mädchenberatungsstellen
          </Link>
          <h4>Nordrhein-Westfalen</h4>
          <Link
            href="https://www.mhkbd.nrw/themen/gleichstellung/exitnrw/unterstuetzung-fuer-frauen/angebote-zur-unterstuetzung"
            passHref
          >
            Frauenhilfenetz in Nordrhein-Westfalen
          </Link>
          <h4>Rheinland-Pfalz</h4>
          <Link href="https://mffki.rlp.de/de/themen/frauen/gewalt-gegen-frauen-und-maedchen/">
            Frauenberatungsstellen Rheinland-Pfalz
          </Link>
          <h4>Saarland</h4>
          <Link href="https://www.frauennotruf-saarland.de/" passHref>
            FrauenNotruf Saarland
          </Link>
          <h4>Sachsen</h4>
          <Link
            href="https://landesfrauenrat-sachsen.de/saechsische-frauenwoche/kampagne-2018/notfallnummern/"
            passHref
          >
            Sachsenweite Notfallkarte
          </Link>
          <h4>Sachsen-Anhalt</h4>
          <Link
            href="https://www.gewaltfreies-sachsen-anhalt.de/frauenhaeuser-frauenberatungsstellen/"
            passHref
          >
            Gewaltfreies Sachsen-Anhalt
          </Link>
          <h4>Schleswig-Holstein</h4>
          <Link href="https://www.lfsh.de/" passHref>
            Landesverband Frauenberatung Schleswig-Holstein
          </Link>
          <h4>Thüringen</h4>
          <Link
            href="https://atalante-thueringen.de/frauenzentren-in-thueringen/"
            passHref
          >
            Frauenzentren Thüringen
          </Link>
        </ListItem>
      </List> */}
    </div>
  );
};

export default Resources;

const Container = styled.div`
  text-align: center;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
`;

const Headline = styled.h1`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const List = styled.ul`
  text-align: center;
  padding: 10px;
  margin: 10px;
`;

const ListItem = styled.li`
  text-align: start;
  border: solid 1px #ddd;
  padding: 10px;
  margin: 10px;
  list-style: none;
`;
