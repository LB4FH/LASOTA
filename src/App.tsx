import laSOTALogo from '/img/LASOTA.jpg'
import './App.css'

function App() {

  return (
    <>
      <div className="top">
        <table>
          <tr>
            <td width="50%"><img src={laSOTALogo} className="logo" alt="LA SOTA" height="200" /></td>
            <td>
              <h3>Foreningen Summits On The Air Norway arrangerer </h3>
              <h1>SOTA samling</h1>
              <h2>Venabygdsfjellet 16-17. september 2023</h2>
            </td>
          </tr>
        </table>


      </div>

      <br />
      <div className="card">

        <p>
          Foreløpig program:<br />
          <b>Lørdag 16. september</b><br />
          <ul>
            <li>Kl 12:00 Oppmøte ved hytta Marenbu i Lundegrenda på Venabygdfjellet</li>
            <li>Vi ser for oss to kjerneaktiviteter: S2S party og "super stasjonen" LA1SOTA på Trabelifjellet</li>
            <li>SOTA aktiviteter etter eget ønske, det er en rekke alternativer i dette området</li>
            <ul>
              <li><a href="https://sotl.as/summits/LA/OL-362" target="_blank">Trabelifjell</a>, <a href="https://sotl.as/summits/LA/OL-195" target="_blank">Bølhøgda, s</a>, <a href="https://sotl.as/summits/LA/HM-135" target="_blank">Muen</a> og <a href="https://sotl.as/map/coordinates/61.649191,10.130135/10.7#" target="_blank">mange flere</a> alternativer. Det blir muligheter for en rekke summit to summit QSO’er både på HF og VHF/UHF i løpet av dagen. Noen av toppene er veldig enkle med 10 – 20 minutters gange opp. Det blir også mulighet for de aller sprekeste til å ta en førstegangsaktivering sør i Rondane. </li>
              <li>Vi planlegger også å etablere en kraftig stasjon med det nylige godkjente kallesignalet LA1SOTA på <a href="https://sotl.as/summits/LA/OL-362" target="_blank">Trabelifjell</a> med 10 meter mast, Hexbeam(!) og windom antenne. Kontakter deltakerne kjører fra denne stasjonen, registreres via egen personlige SOTA logg iht SOTA-regelverket. De forskjellige aktivatorer vil demonstrere mange antennetyper og mye forskjellig utstyr. Det blir sikkert mulighet for litt DX fra toppen også.</li>
            </ul>
            <li>Kl 19:30 Felles middag på <a href="https://lundes.no/spise-handle/lundekroa/" target="_blank">Lundekroa</a> </li>
            <li>Uformell samling i stua på en av hyttene etter middag.</li>
          </ul>
          <b>Søndag 17. sept</b>
          <ul><li>
            Som på lørdag: S2S og aktiveringer fortsetter etter eget ønske.</li></ul>
        </p>
      </div>

      <br />
      <div className="card">
        <h2>Praktiske opplysninger</h2>
        <h4>Hvor:</h4> 
        <a href="https://goo.gl/maps/X5nJBvTTyHBr5kW1A" target="_blank">Venabygdsfjellet</a> ligger nordøst for Ringebu, og ligger på fjellet mellom Gudbrandsdalen og Østerdalen.<br />
        <h4>Overnatting:</h4> 
        Bestilles av den enkelte etter eget ønske. Det er muligheter for overnatting i moderne leiligheter i Lundegard, en hyggelig hytte i Lundegrenda, eller med bobil, campingvogn eller telt og for de som ønsker å overnatte i Lundecampen. Overnatting bestilles via <a href="https://lundes.no" target="_blank">Lundegrenda</a> og betales direkte av den enkelte deltager. 
        <h4>Måltider</h4>
        Det blir felles middag på Lundekroa lørdag kveld, utover dette må alle måltider besørges av den enkelte.
      </div>
      <br />

      <br />
      <div className="card">
        <h2>Påmeldingsinformasjon</h2>
        Påmeldingsavgift kr 280,- som dekker middag (biffsnadder) på Lundekroa lørdag kveld. Drikke til middag må bekostes av den enkelte. Bindende påmelding (pga middagsbestilling) gjøres via <a href="https://forms.gle/ZR8CbH8JEZUxN7VCA" target="_blank">dette</a> skjemaet. Beløpet betales på stedet. 
        <br />
        Deltakelse betinger medlemskap i Summits On The Air Norway (kr 200,- /pr år). Medlemskap tegnes under selve arrangementet. 

        <br />
        <br />
        Total kostnad er da kr 480,- 
        <br /><br />
        Påmeldingsfrist i løpet av <b>mandag 14.august</b>.
      </div>
      <br />
      <div className="card">
        <h2>Er det noe du lurer på?</h2>
        Spørsmål om arrangementet kan rettes til "la9dsa (&#97;t) gmail.com", eller via <a href="https://www.facebook.com/groups/190411958218889" target="_blank">Facebookgruppen</a> vår.
      </div>

      <br />
      <div className="card">
        <b>PS: dette er ikke den ferdige nettsiden vår, bare en invitasjon til turen. Følg med for mer spennende innhold!</b>
      </div>
    </>
  )
}

export default App
