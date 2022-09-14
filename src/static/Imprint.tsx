import { Box } from "@mui/system";
import AppHeader from "../components/AppHeader";

const Imprint: React.FC = () => (
    <>
        <AppHeader />

        <Box sx={{p: 5, mt: 15, maxWidth: '768px'}}>
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG:</h2>
            <p>hydrocode Reid &amp; Mälicke GbR<br /></p>
            <h3>Postanschrift:</h3>
            <p>Mombertstr. 2<br />76131 Karlsruhe<br /></p>
            <h3>Kontakt:</h3>
            <p>Telefon: 015156169657<br />E-Mail: info@hydrocode.de</p>
            <p></p><p><br /></p>
            <p></p><h2>Hinweise zur Website</h2>
            <p></p><h3>Urheberrechtliche Hinweise</h3>
            <p>
                Lucas Reid<br />
                Conrad Jackisch<br />
                Mirko Mälicke<br />
                BlackBoxGuild via shutterstock.com<br />
            </p>
            <p></p><h2>Information gemäß § 36 VSBG</h2>
            <p>Gemäß § 36 VSBG (Verbraucherstreitbeilegungsgesetz – Gesetz über die alternative Streitbeilegung in Verbrauchersachen) erklärt der Betreiber dieser Website:</p>
            <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <p></p><p><em>Das Impressum wurde mit dem <a href="https://www.activemind.de/datenschutz/impressums-generator/">Impressums-Generator der activeMind AG</a> erstellt.</em></p>
        </Box>
        
    </>
)

export default Imprint;