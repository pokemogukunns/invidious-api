
const limit = process.env.LIMIT || 50;

app.use(bodyParser.json());
app.use(cors());

const invidiousapis = [
  "https://cal1.iv.ggtyler.dev",
  "https://lekker.gay",
  "https://pol1.iv.ggtyler.dev",
  "https://iv.melmac.space",
  "https://nyc1.iv.ggtyler.dev",
  "https://invidious.lunivers.trade",
  "https://iv.ggtyler.dev",
  "https://eu-proxy.poketube.fun",
  "https://invidious.f5.si",
  "https://invidious.reallyaweso.me",
  "https://invidious.dhusch.de",
  "https://yewtu.be",
  "https://usa-proxy2.poketube.fun",
  "https://id.420129.xyz",
  "https://invidious.materialio.us",
  "https://invidious.darkness.service",
  "https://iv.datura.network",
  "https://invidious.jing.rocks",
  "https://invidious.private.coffee",
  "https://youtube.mosesmang.com",
  "https://invidious.projectsegfau.lt",
  "https://invidious.perennialte.ch",
  "https://invidious.einfachzocken.eu",
  "https://invidious.adminforge.de",
  "https://iv.duti.dev",
  "https://invid-api.poketube.fun",
  "https://inv.nadeko.net",
  "https://invidious.esmailelbob.xyz",
  "https://invidious.0011.lt",
  "https://invidious.ducks.party",
  "https://invidious.privacyredirect.com",
  "https://youtube.privacyplz.org",
  "https://yt.artemislena.eu",
  "https://invidious.schenkel.eti.br",
]; 

app.get("/", (req, res) => {
   console.log("OK");
   res.sendStatus(200);
});

app.all('/apis', (req, res) => {
  console.log("api");
  res.json(invidiousapis);
});
