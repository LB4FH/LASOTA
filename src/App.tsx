import laSOTALogo from '/img/LASOTA.jpg'
import lundegaard from '/img/lundegaard.png'
import './App.css'

function App() {

  return (
    <>
      <div  className="card">
      <img src={laSOTALogo} className="logo" alt="LA SOTA"  />
        <h1>Velkommen til Summits on the air Norway</h1>
        <h2>Info om fellestur til Venabygd</h2>
      </div>

      <br />
      <div className="card">

        <p>
          Vi inviterer til fellestur til Venabygd, hvor dere får møte flotte fjell i ulike vanskelighetsgrader.
          Vi møtes på <a href="https://lundes.no" target="_blank">Lundegaard</a>, hvor det er mulig å leie rom, hytter eller overnatte i telt eller bobil.
          For de som ønsker villmarksfølelsen er det massevis av natur man kan overnatte gratis i.
          <br />
          <br />
          <a href="https://lundes.no" target="_blank"><img src={lundegaard} height="400" alt="Lundegaard" /></a><br />
          <i>Bilde fra Lundegaard</i><br/>
          <br />
          <br />Overnatting ordner dere selv. Er dere tidlig ute så bør det være gode muligheter til å få til felles hytter.
          <br />
          For å være med på arrangementet må du melde deg inn i foreningen. Dette gjøres når dere kommer opp. Medlemskontingenten er satt til <i>minst 200kr (sjekk dette)</i>.

        </p>
      </div>

      <br />
      <div className="card">
      <h2>Påmeldingsinformasjon</h2>
        Bindende påmelding innen 16 august<i>(sjekk)</i> via <a href="https://forms.gle/ZR8CbH8JEZUxN7VCA" target="_blank">dette</a> skjemaet.
      </div>
      <br />
      <div className="card">
      <h2>Er det noe du lurer på?</h2>
        Ta kontakt med oss i styret på e-post "styret (&#97;&#116;) sota.no", eller via <a href="https://www.facebook.com/groups/190411958218889" target="_blank">Facebookgruppen</a> vår.
      </div>

      <br />
      <div className="card">
        <b>PS: dette er ikke den ferdige nettsiden vår, bare en invitasjon til turen. Følg med for mer spennende innhold!</b>
      </div>
    </>
  )
}

export default App
