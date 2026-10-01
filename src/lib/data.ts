export type Spec = { label: string; value: string };

export type ProductItem = {
  slug: string;
  name: string;
  image: string;
  spec?: string;
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  cover: string;
  specs: Spec[];
  items: ProductItem[];
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/infrastructure", label: "Capabilities" },
  { href: "/quality", label: "Quality" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
];

export const processSteps = [
  {
    n: "01",
    title: "Raw Material",
    text: "Carefully selected high-grade brass for consistent chemistry and superior quality.",
    image: "/images/process/raw-material.jpg",
  },
  {
    n: "02",
    title: "Forging",
    text: "Shaping brass with high precision for enhanced strength, grain flow and integrity.",
    image: "/images/process/forging.jpg",
  },
  {
    n: "03",
    title: "CNC Machining",
    text: "Advanced CNC machines for tight tolerances, complex geometry and repeatable quality.",
    image: "/images/process/cnc.jpg",
  },
  {
    n: "04",
    title: "Turning",
    text: "Precision turning to achieve exact dimensions, threads and a smooth finish.",
    image: "/images/process/turning.jpg",
  },
  {
    n: "05",
    title: "Inspection",
    text: "Rigorous checks at every stage to ensure dimensional accuracy and reliability.",
    image: "/images/process/inspection.jpg",
  },
  {
    n: "06",
    title: "Packing & Dispatch",
    text: "Safe packaging and timely dispatch for domestic and international customers.",
    image: "/images/process/packing.jpg",
  },
];

export const facilities = [
  {
    title: "CNC Machining Center",
    text: "Modern high-performance CNC machines for complex, close-tolerance work.",
    image: "/images/infrastructure/cnc-center.jpg",
  },
  {
    title: "Turning Section",
    text: "Experienced operators and automatic lathes for consistent turned parts.",
    image: "/images/infrastructure/turning-section.jpg",
  },
  {
    title: "Forging Section",
    text: "Forging capability for near-net-shape parts with strength and integrity.",
    image: "/images/infrastructure/forging-section.jpg",
  },
  {
    title: "Quality Control Lab",
    text: "Dimensional, thread, fitment and surface-finish inspection before dispatch.",
    image: "/images/infrastructure/quality-lab.jpg",
  },
];

export const industries = [
  {
    slug: "plumbing-sanitary",
    name: "Plumbing & Sanitary",
    text: "Durable brass fittings, sanitary parts and hardware for water and sanitary systems.",
    image: "/images/industry-plumbing.jpg",
  },
  {
    slug: "automotive",
    name: "Automotive",
    text: "Precision turned and machined parts for automotive systems that demand reliability.",
    image: "/images/industry-automotive.jpg",
  },
  {
    slug: "electrical-electronics",
    name: "Electrical & Electronics",
    text: "Terminals, contacts, energy-meter parts, cable glands and connector components.",
    image: "/images/industry-electrical.jpg",
  },
  {
    slug: "pneumatic-hydraulic",
    name: "Pneumatic & Hydraulic",
    text: "Machined brass components for pneumatic and hydraulic assemblies.",
    image: "/images/industry-pneumatic.jpg",
  },
  {
    slug: "industrial-machinery",
    name: "Industrial Machinery",
    text: "Engineered brass parts for industrial machinery and heavy-equipment applications.",
    image: "/images/industry-machinery.jpg",
  },
  {
    slug: "instrumentation",
    name: "Instrumentation",
    text: "High-precision components for measurement, control and process instrumentation.",
    image: "/images/industry-instrumentation.jpg",
  },
];

export const whyUs = [
  {
    title: "High-grade raw material",
    text: "Certified brass grades including CZ121, CW617N, CZ124 and CW614N.",
  },
  {
    title: "Advanced machinery",
    text: "CNC turning, milling, drilling, tapping and automatic lathe capability.",
  },
  {
    title: "Skilled workforce",
    text: "A dedicated team focused on accuracy, finish and on-time delivery.",
  },
  {
    title: "ISO 9001:2015 QMS",
    text: "Documented quality management for manufacturing and supply of precision brass parts.",
  },
  {
    title: "Made to drawing or sample",
    text: "Custom OEM components developed to customer drawings, samples or specified dimensions.",
  },
  {
    title: "Domestic & export supply",
    text: "Manufacturer, supplier and exporter serving industrial customers in India and overseas.",
  },
];

export const qualityChecks = [
  "Raw material test",
  "In-process inspection",
  "Dimensional accuracy check",
  "Thread & fitment check",
  "Surface finish check",
  "Final quality inspection",
];

export const categories: Category[] = [
  {
    slug: "forging-parts",
    name: "Brass Forging Parts",
    short: "High-strength forged components, then machined to drawing.",
    description:
      "Forged brass parts for robust industrial applications. Near-net-shape forging is followed by machining where required, giving strength, grain integrity and a clean finished part for plumbing, gas, valves, automotive and electrical use.",
    image: "/images/products/forged-tee.jpg",
    cover: "/images/products/forging-range.jpg",
    specs: [
      { label: "Material", value: "Brass CZ121, CW617N, CZ124, CW614N" },
      { label: "Process", value: "Forging + machining" },
      { label: "Size range", value: '1/4" to 4" as per drawing' },
      { label: "Weight range", value: "20 g to 2.5 kg" },
      { label: "Finish", value: "Natural / nickel / chrome / polish" },
      { label: "Tolerance", value: "As per drawing / IS / BS / ASTM" },
    ],
    items: [
      { slug: "forged-nut", name: "Forged Nut", image: "/images/products/forged-nut.jpg" },
      { slug: "forged-tee", name: "Forged Tee", image: "/images/products/forged-tee.jpg" },
      { slug: "forged-elbow", name: "Forged Elbow", image: "/images/products/forged-elbow.jpg" },
      { slug: "forged-coupling", name: "Forged Coupling", image: "/images/products/forged-coupling.jpg" },
      { slug: "forged-socket", name: "Forged Socket", image: "/images/products/forged-socket.jpg" },
      { slug: "forged-union", name: "Forged Union", image: "/images/products/forged-union.jpg" },
      { slug: "forged-flange", name: "Forged Flange", image: "/images/products/forged-flange.jpg" },
      { slug: "forged-plug", name: "Forged Plug", image: "/images/products/forged-plug.jpg" },
    ],
  },
  {
    slug: "cnc-machined-parts",
    name: "CNC Machined Parts",
    short: "Close-tolerance CNC components for critical applications.",
    description:
      "Precision CNC turning, milling, drilling and tapping for complex geometry. Typical tolerances of ±0.01 mm to ±0.05 mm, developed against customer drawings for automotive, electrical, pneumatic, hydraulic and instrumentation work.",
    image: "/images/products/cnc-adapter.jpg",
    cover: "/images/products/cnc-turning-range.jpg",
    specs: [
      { label: "Material", value: "Brass CZ121, CW617N, CZ124, CW614N" },
      { label: "Process", value: "CNC turning, milling, drilling, tapping" },
      { label: "Size range", value: "3 mm to 150 mm diameter" },
      { label: "Weight range", value: "5 g to 1.5 kg" },
      { label: "Finish", value: "Natural / nickel / chrome / polish" },
      { label: "Tolerance", value: "±0.01 mm to ±0.05 mm" },
    ],
    items: [
      { slug: "cnc-bush", name: "CNC Brass Bush", image: "/images/products/cnc-bush.jpg" },
      { slug: "cnc-adapter", name: "CNC Brass Adapter", image: "/images/products/cnc-adapter.jpg" },
      { slug: "cnc-block", name: "CNC Brass Block", image: "/images/products/cnc-block.jpg" },
      { slug: "cnc-insert", name: "CNC Brass Insert", image: "/images/products/cnc-insert.jpg" },
      { slug: "cnc-valve-body", name: "CNC Brass Valve Body", image: "/images/products/cnc-valve-body.jpg" },
      { slug: "cnc-connector", name: "CNC Brass Connector", image: "/images/products/cnc-connector.jpg" },
      { slug: "cnc-nozzle", name: "CNC Brass Nozzle", image: "/images/products/cnc-nozzle.jpg" },
      { slug: "cnc-pin", name: "CNC Brass Pin", image: "/images/products/cnc-pin.jpg" },
    ],
  },
  {
    slug: "turned-parts",
    name: "Turned Parts",
    short: "Automatic-lathe and CNC turned parts with a clean finish.",
    description:
      "High-precision turned components for electrical, automotive, hardware, furniture and general industrial assemblies. Produced on automatic lathes and CNC turning centres with repeatable threads, profiles and surface finish.",
    image: "/images/products/turned-knurled-nut.jpg",
    cover: "/images/products/precision-range.jpg",
    specs: [
      { label: "Material", value: "Brass CZ121, CW617N, CZ124, CW614N" },
      { label: "Process", value: "Automatic lathe, CNC turning" },
      { label: "Size range", value: "3 mm to 100 mm diameter" },
      { label: "Weight range", value: "3 g to 80 g" },
      { label: "Finish", value: "Natural / nickel / chrome / polish" },
      { label: "Tolerance", value: "±0.02 mm to ±0.1 mm" },
    ],
    items: [
      { slug: "turned-shaft", name: "Brass Turned Shaft", image: "/images/products/turned-shaft.jpg" },
      { slug: "turned-stud", name: "Brass Threaded Stud", image: "/images/products/turned-stud.jpg" },
      { slug: "turned-spacer", name: "Brass Spacer", image: "/images/products/turned-spacer.jpg" },
      { slug: "turned-sleeve", name: "Brass Sleeve", image: "/images/products/turned-sleeve.jpg" },
      { slug: "turned-collar", name: "Brass Collar", image: "/images/products/turned-collar.jpg" },
      { slug: "turned-plug", name: "Brass Plug", image: "/images/products/turned-plug.jpg" },
      { slug: "turned-knurled-nut", name: "Brass Knurled Nut", image: "/images/products/turned-knurled-nut.jpg" },
      { slug: "turned-ferrule", name: "Brass Ferrule", image: "/images/products/turned-ferrule.jpg" },
    ],
  },
  {
    slug: "electrical-electronic",
    name: "Electrical & Electronic Parts",
    short: "Contacts, terminals, meter parts and wiring components.",
    description:
      "Brass components for electrical, electronic and metering applications — including wiring parts, energy-meter components, PCB terminals, terminal blocks, HRC fuse contacts, earthing parts and cable glands. Sizes and profiles are finalised against drawing or sample.",
    image: "/images/products/hrc-fuse.jpg",
    cover: "/images/products/electrical-wiring.jpg",
    specs: [
      { label: "Applications", value: "Wiring, metering, PCB, earthing, fusegear" },
      { label: "Manufacturing", value: "As per drawing, sample or specified dimensions" },
      { label: "Focus", value: "Dimensional accuracy, finish and repeatability" },
    ],
    items: [
      { slug: "cable-gland", name: "Brass Cable Gland", image: "/images/products/cable-gland.jpg" },
      { slug: "electrical-wiring", name: "Brass Electrical Wiring Parts", image: "/images/products/electrical-wiring.jpg" },
      { slug: "earthing", name: "Brass Earthing Parts", image: "/images/products/earthing.jpg" },
      { slug: "electronic", name: "Brass Electronic Parts", image: "/images/products/electronic.jpg" },
      { slug: "energy-meter", name: "Brass Energy Meter Parts", image: "/images/products/energy-meter.jpg" },
      { slug: "hrc-fuse", name: "Brass HRC Fuse Contacts", image: "/images/products/hrc-fuse.jpg" },
      { slug: "neutral-links", name: "Brass Neutral Links", image: "/images/products/neutral-links.jpg" },
      { slug: "pcb-terminals", name: "Brass PCB Terminals", image: "/images/products/pcb-terminals.jpg" },
      { slug: "terminal-blocks", name: "Brass Terminal Blocks", image: "/images/products/terminal-blocks.jpg" },
      { slug: "strip-connector", name: "Brass Strip Connector", image: "/images/products/strip-connector.jpg" },
      { slug: "plug-pin", name: "Brass Plug Pins & Sockets", image: "/images/products/plug-pin.jpg" },
    ],
  },
  {
    slug: "sanitary-gas-hardware",
    name: "Sanitary, Gas & Hardware",
    short: "Fittings, hardware, inserts and plumbing-related brass parts.",
    description:
      "Brass gas parts and fittings, hardware components, sanitary and plumbing-related parts, hose nipples, male/female threaded parts, nuts, bolts, washers, inserts, spacers and anchors — manufactured for OEM and industrial requirements.",
    image: "/images/products/sanitary.jpg",
    cover: "/images/products/hardware.jpg",
    specs: [
      { label: "Range", value: "Gas fittings, sanitary parts, hardware, fasteners" },
      { label: "Custom", value: "Male/female parts, inserts, spacers, anchors" },
      { label: "Supply", value: "Standard and drawing-based OEM parts" },
    ],
    items: [
      { slug: "gas-parts", name: "Brass Gas Parts", image: "/images/products/gas-parts.jpg" },
      { slug: "hardware", name: "Brass Hardware Parts", image: "/images/products/hardware.jpg" },
      { slug: "sanitary", name: "Brass Sanitary Parts", image: "/images/products/sanitary.jpg" },
      { slug: "hose-nipple", name: "Brass Hose Nipple", image: "/images/products/hose-nipple.jpg" },
      { slug: "male-female", name: "Brass Male & Female Parts", image: "/images/products/male-female.jpg" },
      { slug: "inserts", name: "Brass Inserts", image: "/images/products/inserts.jpg" },
      { slug: "threaded-inserts", name: "Brass Threaded Inserts", image: "/images/products/threaded-inserts.jpg" },
      { slug: "anchors", name: "Brass Anchors", image: "/images/products/anchors.jpg" },
      { slug: "spacers", name: "Brass Spacers", image: "/images/products/spacers.jpg" },
      { slug: "nuts-bolts", name: "Brass Nuts & Bolts", image: "/images/products/nuts-bolts.jpg" },
      { slug: "file-screw", name: "Brass File Screws", image: "/images/products/file-screw.jpg" },
      { slug: "washers", name: "Brass Washers", image: "/images/products/washers.jpg" },
    ],
  },
  {
    slug: "stainless-steel",
    name: "Stainless Steel Flanges & Pipe",
    short: "SS 316 SORF, blind flanges and SA-312 pipe for process piping.",
    description:
      "Industrial stainless-steel flanges and pipe for process, chemical, petrochemical and general engineering service. Typical catalogue items include ASME B16.5 Class 150 SORF and blind flanges in SA-182 F316, and SA-312 TP316 pipe in specified schedules. Final dimensions, tolerances, inspection and certification follow the purchase specification.",
    image: "/images/products/sorf-4.jpg",
    cover: "/images/products/sorf-24.jpg",
    specs: [
      { label: "Materials", value: "SA-182 F316 flanges, SA-312 TP316 pipe" },
      { label: "Standards", value: "ASME B16.5, Class 150 RF / SORF" },
      { label: "Types", value: "Slip-on raised face, blind flanges, pipe" },
      { label: "Service", value: "Process, chemical, petrochemical, engineering" },
    ],
    items: [
      { slug: "sorf-24", name: '24" SORF Flange', spec: "SA-182 F316, ASME B16.5, Class 150 RF/SORF", image: "/images/products/sorf-24.jpg" },
      { slug: "sorf-20", name: '20" SORF Flange', spec: "SA-182 F316, ASME B16.5, Class 150 RF/SORF", image: "/images/products/sorf-20.jpg" },
      { slug: "blind-24", name: '24" Blind Flange', spec: "SA-182 F316, ASME B16.5, Class 150", image: "/images/products/blind-24.jpg" },
      { slug: "blind-20", name: '20" Blind Flange', spec: "SA-182 F316, ASME B16.5, Class 150", image: "/images/products/blind-20.jpg" },
      { slug: "sorf-4", name: '4" SORF Flange', spec: "SA-182 F316, ASME B16.5, Class 150 SORF", image: "/images/products/sorf-4.jpg" },
      { slug: "sorf-1", name: '1" SORF Flange', spec: "SA-182 F316, ASME B16.5, Class 150 SORF", image: "/images/products/sorf-1.jpg" },
      { slug: "sorf-half", name: '1/2" SORF Flange', spec: "SA-182 F316, ASME B16.5, Class 150 SORF", image: "/images/products/sorf-half.jpg" },
      { slug: "pipe-4", name: '4" SS 316 Pipe', spec: "SA-312 TP316, Sch 80S, 6 m", image: "/images/products/pipe-4.jpg" },
      { slug: "pipe-1", name: '1" SS 316 Pipe', spec: "SA-312 TP316, Sch 80S, 6 m", image: "/images/products/pipe-1.jpg" },
      { slug: "pipe-half", name: '1/2" SS 316 Pipe', spec: "SA-312 TP316, Sch 80S, 6 m", image: "/images/products/pipe-half.jpg" },
    ],
  },
  {
    slug: "aluminium-sheet-metal",
    name: "Aluminium & Sheet Metal",
    short: "Aluminium terminals, lugs and brass sheet-metal stampings.",
    description:
      "Alongside the core brass programme, Shree Brass Industries supplies aluminium parts such as lugs, terminals and connector blocks, plus brass sheet-metal stampings, clips, contacts and washers for electrical and industrial assemblies.",
    image: "/images/products/aluminium.jpg",
    cover: "/images/products/sheet-metal.jpg",
    specs: [
      { label: "Aluminium", value: "Lugs, terminals, connector blocks" },
      { label: "Sheet metal", value: "Stampings, clips, contacts, washers" },
    ],
    items: [
      { slug: "aluminium", name: "Aluminium Parts", image: "/images/products/aluminium.jpg" },
      { slug: "sheet-metal", name: "Brass Sheet Metal Parts", image: "/images/products/sheet-metal.jpg" },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
