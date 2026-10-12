import type { Lesson } from './types'

// Core 1, Domain 3.0 Hardware
const lessons: Record<string, Lesson> = {
  '1201-3.1': {
    cards: [
      {
        title: 'Panel types',
        bullets: [
          '**LCD** screens need a **backlight**. Most modern ones use LEDs for it.',
          '**IPS**: best colors and viewing angles. **TN**: fastest and cheapest, but poor viewing angles. **VA**: in between, with great contrast.',
          '**OLED**: each pixel makes its own light, so blacks are truly black and no backlight is needed. Watch for **burn-in**.',
          '**Mini-LED**: an LCD with many tiny backlight zones for better contrast.',
        ],
        tip: 'Graphic designer? IPS (colors). Competitive gamer on a budget? TN (speed).',
      },
      {
        title: 'Display specs',
        bullets: [
          '**Resolution**: pixel count, like 1920×1080 (1080p) or 3840×2160 (4K).',
          '**Refresh rate** (Hz): how many times per second the image updates. 60 Hz is normal, 144 Hz+ is for gaming.',
          '**Response time**: how fast a pixel changes. Lower is better.',
          '**Color gamut**: how many colors it can show, like **sRGB** or **DCI-P3**.',
          '**Touch screen / digitizer** and **inverter** (only on old CCFL-backlit LCDs).',
        ],
      },
    ],
    questions: [
      {
        q: 'Which display type has pixels that make their own light and doesn’t need a backlight?',
        choices: ['IPS LCD', 'TN LCD', 'OLED', 'VA LCD'],
        answer: 2,
        why: '**OLED** pixels are self-emissive, so there’s no backlight and blacks are truly black.',
      },
      {
        q: 'A photo editor needs the most accurate colors and wide viewing angles. Which LCD panel type is best?',
        choices: ['TN', 'IPS', 'CCFL', 'CRT'],
        answer: 1,
        why: '**IPS** panels have the best color accuracy and viewing angles of the LCD types.',
      },
      {
        q: 'What does a monitor’s refresh rate measure?',
        choices: [
          'How many pixels it has',
          'How many times per second the image updates',
          'How bright it gets',
          'How many colors it shows',
        ],
        answer: 1,
        why: '**Refresh rate (Hz)** is how many times per second the screen redraws the image.',
      },
      {
        q: 'Which is a known risk of OLED screens showing the same image for a long time?',
        choices: ['Burn-in', 'Backlight bleed', 'Inverter failure', 'Low resolution'],
        answer: 0,
        why: 'OLED pixels can wear unevenly, which leaves a ghost image called **burn-in**.',
      },
      {
        q: 'Which part is only found in older LCDs with CCFL backlights?',
        choices: ['Digitizer', 'Inverter', 'OLED panel', 'HDMI port'],
        answer: 1,
        why: 'An **inverter** powered old **CCFL** backlights. LED-backlit screens don’t need one.',
      },
    ],
  },

  '1201-3.2': {
    cards: [
      {
        title: 'Network cables',
        bullets: [
          '**Cat 5e**: 1 Gbps. **Cat 6**: 1 Gbps (10 Gbps up to about 55 m). **Cat 6a**: 10 Gbps up to 100 m.',
          'Copper Ethernet max length is **100 m**.',
          '**UTP** is unshielded. **STP** is shielded against interference.',
          '**Plenum**-rated cable is fire-resistant and required in air-handling spaces (above ceilings).',
          '**T568A / T568B**: the two wiring orders. Same on both ends is a straight-through cable.',
        ],
        tip: 'Running cable above the ceiling where air flows? It must be plenum.',
      },
      {
        title: 'Fiber and coax',
        bullets: [
          '**Fiber** uses light, so it isn’t affected by electrical interference and can run long distances.',
          '**Single-mode**: very long distance (km). **Multimode**: shorter runs inside buildings.',
          'Fiber connectors: **SC** (square), **LC** (small), **ST** (round twist-lock).',
          '**Coax** with **F-type** connectors is used for cable internet and TV.',
        ],
      },
      {
        title: 'Video cables',
        bullets: [
          '**HDMI**: video + audio, the TV and monitor standard.',
          '**DisplayPort**: video + audio, common on PCs. It can daisy-chain monitors.',
          '**DVI**: older, video only. **VGA**: oldest, **analog**, blue 15-pin.',
          '**USB-C** can carry DisplayPort video too.',
        ],
      },
      {
        title: 'Peripheral and drive cables',
        bullets: [
          '**USB 2.0**: 480 Mbps. **USB 3.x**: 5–20 Gbps. **USB4 / Thunderbolt**: up to 40 Gbps+.',
          '**Thunderbolt** uses the USB-C connector shape.',
          '**SATA**: the cable for internal hard drives and SSDs. **eSATA** is the external version.',
          '**Lightning**: Apple’s older connector. **Serial (DB9)**: old console cables for network gear.',
        ],
      },
    ],
    questions: [
      {
        q: 'What is the maximum length of a copper Ethernet cable run?',
        choices: ['30 m', '55 m', '100 m', '500 m'],
        answer: 2,
        why: 'Twisted-pair copper Ethernet is limited to **100 meters**.',
      },
      {
        q: 'Cable is being run above a drop ceiling that’s used for air circulation. What type is required?',
        choices: ['STP', 'Plenum-rated', 'Coax', 'Multimode fiber'],
        answer: 1,
        why: '**Plenum** cable resists fire and gives off less toxic smoke, which fire codes require in air-handling spaces.',
      },
      {
        q: 'Which video connector is analog?',
        choices: ['HDMI', 'DisplayPort', 'VGA', 'USB-C'],
        answer: 2,
        why: '**VGA** is the old 15-pin analog connector. The others are digital.',
      },
      {
        q: 'A factory floor has heavy electrical interference near the network cables. Which cable is immune to it?',
        choices: ['UTP Cat 6', 'Fiber optic', 'Coax', 'Cat 5e'],
        answer: 1,
        why: '**Fiber** carries light, not electricity, so electromagnetic interference doesn’t affect it.',
      },
      {
        q: 'Which connector is used for cable TV and cable internet?',
        choices: ['RJ45', 'F-type', 'LC', 'DB9'],
        answer: 1,
        why: 'Coaxial cable uses the screw-on **F-type** connector.',
      },
      {
        q: 'Which cable category supports 10 Gbps for the full 100 meters?',
        choices: ['Cat 5e', 'Cat 6', 'Cat 6a', 'Cat 3'],
        answer: 2,
        why: '**Cat 6a** handles 10 Gbps at 100 m. Plain Cat 6 only manages 10 Gbps for about 55 m.',
      },
    ],
  },

  '1201-3.3': {
    cards: [
      {
        title: 'RAM basics',
        bullets: [
          'RAM is **temporary** working memory, and it’s wiped when power is off.',
          '**DIMM** is the desktop stick and **SO-DIMM** is the laptop stick.',
          'Generations: **DDR3, DDR4, DDR5**. They’re **not interchangeable**, because the notch is in a different place.',
          'DDR5 is faster and puts power management on the stick itself.',
        ],
      },
      {
        title: 'Channels',
        bullets: [
          '**Dual-channel**: two matching sticks in the right slots double the bandwidth.',
          'Use **matched pairs** in the slots the motherboard manual says (often the same color).',
          'Triple- and quad-channel exist on workstation and server boards.',
        ],
        tip: 'Two 8 GB sticks beat one 16 GB stick because of dual-channel.',
      },
      {
        title: 'Error correction and virtual RAM',
        bullets: [
          '**ECC RAM** detects and fixes memory errors. It’s used in **servers** and needs a board that supports it.',
          '**Virtual memory** (the page file) uses disk space when RAM runs out, which is much slower.',
          'Lots of disk activity plus slowness with many apps open usually means **not enough RAM**.',
        ],
      },
    ],
    questions: [
      {
        q: 'A server needs memory that can detect and correct errors. What should be installed?',
        choices: ['SO-DIMM', 'ECC RAM', 'DDR3 non-ECC', 'Virtual memory'],
        answer: 1,
        why: '**ECC** (Error-Correcting Code) RAM fixes single-bit errors. It’s standard in servers.',
      },
      {
        q: 'Can a DDR4 stick be installed in a DDR5 slot?',
        choices: [
          'Yes, it just runs slower',
          'No, the notch is in a different spot',
          'Yes, with a BIOS update',
          'Only in laptops',
        ],
        answer: 1,
        why: 'Each DDR generation has the **notch in a different place**, so they physically won’t fit.',
      },
      {
        q: 'What’s the benefit of installing two matching RAM sticks in the correct slots?',
        choices: ['ECC support', 'Dual-channel bandwidth', 'Lower voltage', 'More storage space'],
        answer: 1,
        why: 'Matched pairs enable **dual-channel** mode, which increases memory bandwidth.',
      },
      {
        q: 'A PC slows down a lot with many programs open and the drive light is always busy. What’s the most likely fix?',
        choices: ['Add more RAM', 'Replace the PSU', 'Install a new NIC', 'Change the monitor'],
        answer: 0,
        why: 'When RAM fills up, Windows uses the slow **page file** on disk. **More RAM** fixes it.',
      },
      {
        q: 'What happens to data in RAM when the computer is turned off?',
        choices: ['It’s saved to the BIOS', 'It’s lost', 'It moves to the CPU cache', 'It stays until overwritten'],
        answer: 1,
        why: 'RAM is **volatile**: it needs power to hold data.',
      },
    ],
  },

  '1201-3.4': {
    cards: [
      {
        title: 'Hard drives vs SSDs',
        bullets: [
          '**HDD**: spinning platters measured in **RPM** (5400, 7200, 10K, 15K). Cheap per GB, but slower and fragile.',
          '**SSD**: flash memory with no moving parts. It’s much faster and silent.',
          'Sizes: **3.5-inch** (desktop HDD) and **2.5-inch** (laptop HDD or SATA SSD).',
        ],
      },
      {
        title: 'SSD connections',
        bullets: [
          '**SATA SSD**: up to about 600 MB/s.',
          '**NVMe**: uses **PCIe** lanes, so it’s several times faster than SATA.',
          '**M.2** is a **shape**, not a speed. An M.2 drive can be **SATA or NVMe**.',
          '**mSATA**: an older small form factor.',
        ],
        tip: 'M.2 is the shape. NVMe is the fast language. Check that the slot supports the type you buy.',
      },
      {
        title: 'RAID',
        bullets: [
          '**RAID 0**: striping. Fast, but **no redundancy**: if one drive dies, everything’s lost. Needs 2+ drives.',
          '**RAID 1**: mirroring. Two copies, so it survives 1 drive failure. Needs 2 drives.',
          '**RAID 5**: striping with parity. Survives **1** drive failure. Needs **3+** drives.',
          '**RAID 6**: double parity. Survives **2** failures. Needs 4+ drives.',
          '**RAID 10**: mirrors plus stripes. Fast and redundant. Needs **4+** drives.',
        ],
        tip: 'RAID 0 has zero redundancy. RAID 1 is one mirror.',
      },
      {
        title: 'Removable storage',
        bullets: [
          '**Flash drives** and **SD / microSD** cards.',
          '**Optical**: CD (700 MB), DVD (4.7 GB), Blu-ray (25 GB+).',
        ],
      },
    ],
    questions: [
      {
        q: 'Which RAID level gives speed but NO protection if a drive fails?',
        choices: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
        answer: 0,
        why: '**RAID 0** stripes data across drives. One failure loses everything.',
      },
      {
        q: 'What’s the minimum number of drives for RAID 5?',
        choices: ['2', '3', '4', '5'],
        answer: 1,
        why: '**RAID 5** needs at least **3 drives** to stripe data with parity.',
      },
      {
        q: 'A user buys an M.2 drive. What does “M.2” tell you?',
        choices: [
          'It’s always NVMe',
          'Its physical shape and connector',
          'It spins at 7200 RPM',
          'It’s a RAID array',
        ],
        answer: 1,
        why: '**M.2 is a form factor.** The drive could use SATA or NVMe underneath.',
      },
      {
        q: 'Which is the fastest type of storage connection here?',
        choices: ['SATA HDD', 'SATA SSD', 'NVMe SSD', 'USB 2.0 flash drive'],
        answer: 2,
        why: '**NVMe** runs over PCIe lanes and is several times faster than SATA.',
      },
      {
        q: 'An admin wants a simple exact copy of the OS drive on a second drive in case one fails. Which RAID?',
        choices: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6'],
        answer: 1,
        why: '**RAID 1** mirrors one drive to another.',
      },
      {
        q: 'Which RAID level can survive TWO drive failures?',
        choices: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 6'],
        answer: 3,
        why: '**RAID 6** uses double parity, so any two drives can fail.',
      },
    ],
  },

  '1201-3.5': {
    cards: [
      {
        title: 'Motherboard sizes',
        bullets: [
          '**ATX**: full-size desktop board, lots of slots.',
          '**microATX (mATX)**: smaller, fewer slots, fits most ATX cases.',
          '**ITX (Mini-ITX)**: tiny boards for small builds.',
        ],
        tip: 'Biggest to smallest: ATX, microATX, ITX.',
      },
      {
        title: 'Slots and connectors',
        bullets: [
          '**PCIe** slots (x1, x4, x8, x16) hold add-on cards. **x16** is for graphics cards.',
          '**M.2** slots hold SSDs (and sometimes Wi-Fi cards).',
          '**SATA** ports connect drives. A **24-pin** connector powers the board, and a **4/8-pin** connector powers the CPU.',
          'Front-panel headers connect the case’s power button, LEDs, USB, and audio.',
        ],
      },
      {
        title: 'BIOS / UEFI',
        bullets: [
          '**UEFI** is the modern replacement for **BIOS**. It supports big drives (GPT), mouse menus, and **Secure Boot**.',
          'Settings include **boot order**, **passwords**, **virtualization support**, fan speeds, and enabling the **TPM**.',
          '**Secure Boot** blocks unsigned bootloaders (like some malware).',
          'The **CMOS battery** (CR2032) keeps settings and the clock. Wrong time after shutdown means replace the battery.',
        ],
        tip: 'Clock keeps resetting? Replace the CMOS battery.',
      },
      {
        title: 'TPM and HSM',
        bullets: [
          '**TPM** (Trusted Platform Module): a chip that stores encryption keys. It’s needed for **BitLocker** and **Windows 11**.',
          '**HSM** (Hardware Security Module): a dedicated device for managing lots of keys, usually in data centers.',
        ],
      },
      {
        title: 'CPUs and cooling',
        bullets: [
          'The CPU must match the board’s **socket** (Intel LGA, AMD AM5, and so on).',
          '**Cores** do work in parallel. **Hyperthreading/SMT** lets each core handle two threads.',
          '**x64** (64-bit) vs **ARM** (phones, Apple Silicon, some laptops).',
          'Cooling: **heat sink + fan**, **thermal paste** between CPU and cooler, or **liquid cooling**.',
        ],
        tip: 'Overheating right after a CPU install? Thermal paste is missing or the cooler isn’t seated.',
      },
    ],
    questions: [
      {
        q: 'Which chip is required for BitLocker and Windows 11 and stores encryption keys?',
        choices: ['CMOS', 'TPM', 'BIOS', 'PCIe'],
        answer: 1,
        why: 'The **TPM** securely stores keys for BitLocker and is a Windows 11 requirement.',
      },
      {
        q: 'A PC’s date and time reset every time it’s unplugged. What should be replaced?',
        choices: ['The PSU', 'The CMOS battery', 'The RAM', 'The TPM'],
        answer: 1,
        why: 'The **CMOS battery** keeps the clock and BIOS settings when power is off.',
      },
      {
        q: 'Which motherboard form factor is the smallest?',
        choices: ['ATX', 'microATX', 'Mini-ITX', 'E-ATX'],
        answer: 2,
        why: '**Mini-ITX** is the smallest common form factor.',
      },
      {
        q: 'Which slot is used for a modern graphics card?',
        choices: ['PCIe x1', 'PCIe x16', 'SATA', 'M.2'],
        answer: 1,
        why: 'Graphics cards use the full-bandwidth **PCIe x16** slot.',
      },
      {
        q: 'A newly built PC shuts down after a few minutes and the CPU is very hot. What was likely missed?',
        choices: ['Thermal paste or proper cooler mounting', 'A CMOS battery', 'An M.2 drive', 'TPM activation'],
        answer: 0,
        why: 'Without **thermal paste** and a properly seated cooler, heat can’t leave the CPU.',
      },
      {
        q: 'Which UEFI feature stops a computer from loading an unsigned (possibly malicious) bootloader?',
        choices: ['Secure Boot', 'Fast Boot', 'Boot order', 'Fan control'],
        answer: 0,
        why: '**Secure Boot** only lets signed, trusted bootloaders run.',
      },
    ],
  },

  '1201-3.6': {
    cards: [
      {
        title: 'Power supply basics',
        bullets: [
          'A PSU turns wall **AC** into **DC** for the computer: **+12V** (CPU, GPU), **+5V**, and **+3.3V**.',
          '**Wattage** must cover all parts with headroom. Big graphics cards need the most.',
          'Input voltage: **110–120V** (North America) or **220–240V** (Europe). Many PSUs switch automatically.',
        ],
      },
      {
        title: 'Connectors and features',
        bullets: [
          '**24-pin** motherboard, **4/8-pin** CPU, **6/8-pin** or **12V-2x6** for graphics cards, plus **SATA** power.',
          '**Modular** PSUs let you attach only the cables you need, which means less clutter.',
          '**Redundant** PSUs (two in one server) keep it running if one fails.',
          '**80 Plus** ratings (Bronze, Gold, Platinum) show how efficient it is.',
        ],
        tip: 'Server can’t ever go down from a PSU failure? Use redundant power supplies.',
      },
    ],
    questions: [
      {
        q: 'What does a computer power supply do?',
        choices: [
          'Converts DC to AC',
          'Converts wall AC to DC voltages for components',
          'Stores backup power',
          'Cools the CPU',
        ],
        answer: 1,
        why: 'A PSU converts **AC from the wall into DC** at 12V, 5V, and 3.3V.',
      },
      {
        q: 'Which component usually needs the most power in a gaming PC?',
        choices: ['RAM', 'The graphics card', 'The SSD', 'The network card'],
        answer: 1,
        why: 'Modern **graphics cards** can draw hundreds of watts, so size the PSU for them.',
      },
      {
        q: 'A server must stay up even if a power supply fails. What should it have?',
        choices: ['A modular PSU', 'Redundant power supplies', 'A higher-wattage PSU', 'An 80 Plus Bronze PSU'],
        answer: 1,
        why: '**Redundant PSUs** let one take over when the other fails.',
      },
      {
        q: 'What is the advantage of a modular power supply?',
        choices: [
          'It’s always more powerful',
          'You only attach the cables you need',
          'It works without a wall outlet',
          'It converts DC to AC',
        ],
        answer: 1,
        why: '**Modular** PSUs have detachable cables, which reduces clutter and improves airflow.',
      },
      {
        q: 'Which voltage rail powers the CPU and graphics card?',
        choices: ['+3.3V', '+5V', '+12V', '-12V'],
        answer: 2,
        why: 'The **+12V** rail feeds the hungriest parts: the CPU and the GPU.',
      },
    ],
  },

  '1201-3.7': {
    cards: [
      {
        title: 'Getting a printer set up',
        bullets: [
          'Unbox it, remove **all packing tape and shipping locks**, and install toner or ink.',
          'Connect by **USB**, **Ethernet**, or **Wi-Fi**.',
          'Install the right **driver**: **PCL** (common, fast) or **PostScript** (precise graphics).',
          'Print a **test page**.',
        ],
        tip: 'A brand-new printer jams or prints badly? Check for leftover packing material.',
      },
      {
        title: 'Settings',
        bullets: [
          '**Duplex**: print on both sides. **Collate**: print full copies in order.',
          '**Orientation** (portrait/landscape), **tray**, and **quality** settings.',
          '**Print server / shared printer** so many users can use one printer.',
        ],
      },
      {
        title: 'Security',
        bullets: [
          '**User authentication** and **badging**: you walk up and badge in to release your job, so nobody grabs your document.',
          '**Audit logs** track who printed what.',
          '**Secure print**: hold the job until a PIN is entered.',
          'Scanners send files via **email**, **SMB** (shared folder), or **cloud**.',
        ],
      },
    ],
    questions: [
      {
        q: 'An office wants print jobs held until the user badges in at the printer. What feature is this?',
        choices: ['Duplex', 'Secure print / badging', 'Collate', 'Orientation'],
        answer: 1,
        why: '**Secure print with badging** releases jobs only when the right person is at the printer.',
      },
      {
        q: 'Which setting prints on both sides of the paper?',
        choices: ['Collate', 'Duplex', 'Landscape', 'Draft mode'],
        answer: 1,
        why: '**Duplex** prints on both sides.',
      },
      {
        q: 'A brand-new laser printer’s first pages come out with streaks and jams. What should you check first?',
        choices: [
          'Whether all packing tape and shipping material was removed',
          'Replace the fuser',
          'Update the OS',
          'Change the IP address',
        ],
        answer: 0,
        why: 'Leftover **packing material** is the classic cause of problems on a new printer.',
      },
      {
        q: 'A user prints 10 copies of a 5-page report and wants each copy in page order. Which setting?',
        choices: ['Duplex', 'Collate', 'Orientation', 'Tray select'],
        answer: 1,
        why: '**Collate** prints complete sets (1-2-3-4-5, 1-2-3-4-5, …).',
      },
      {
        q: 'Which scan destination saves files to a shared network folder?',
        choices: ['Scan to SMB', 'Scan to fax', 'Scan to USB', 'Scan to NFC'],
        answer: 0,
        why: '**SMB** is Windows file sharing, so “scan to SMB” saves to a shared folder.',
      },
    ],
  },

  '1201-3.8': {
    cards: [
      {
        title: 'Laser printers: 7 steps',
        bullets: [
          '**Processing**: build the page image. **Charging**: the drum gets a negative charge.',
          '**Exposing**: a laser draws the image on the drum. **Developing**: toner sticks to the drawn areas.',
          '**Transferring**: toner moves to the paper. **Fusing**: heat and pressure melt it on.',
          '**Cleaning**: leftover toner is removed from the drum.',
        ],
        tip: '“Please Can Every Developer Test Fast Code” = Processing, Charging, Exposing, Developing, Transferring, Fusing, Cleaning.',
      },
      {
        title: 'Laser maintenance',
        bullets: [
          'Replace **toner**, and use a **maintenance kit** (fuser, rollers) at the page count the printer asks for.',
          'Toner smears or rubs off? Suspect the **fuser**. It’s **hot**, so let it cool first.',
          'Clean toner with a **toner vacuum**, not a regular vacuum.',
        ],
      },
      {
        title: 'Inkjet',
        bullets: [
          'Ink cartridges and a **print head** spray tiny drops.',
          'Streaks or missing colors: run **print head cleaning** and **alignment**.',
          'Paper moves with **rollers** and a **duplexing assembly**.',
        ],
      },
      {
        title: 'Thermal and impact',
        bullets: [
          '**Thermal**: heat on **special heat-sensitive paper**, like receipts. Clean the heating element.',
          '**Impact** (dot matrix): pins hit an **ink ribbon**. It’s used for **multipart forms** (carbon copies).',
          'Replace the **ribbon** and the **print head** on impact printers.',
        ],
        tip: 'Need to print carbon-copy forms? Only an impact printer can.',
      },
    ],
    questions: [
      {
        q: 'Laser printouts smear and toner rubs off when touched. Which part is most likely failing?',
        choices: ['Fuser', 'Drum', 'Toner cartridge', 'Pickup roller'],
        answer: 0,
        why: 'The **fuser** melts toner onto the paper. If it fails, toner doesn’t stick.',
      },
      {
        q: 'Which printer type is needed to print multipart carbon-copy forms?',
        choices: ['Laser', 'Inkjet', 'Impact (dot matrix)', 'Thermal'],
        answer: 2,
        why: '**Impact printers** physically strike the page, which pushes through to the copies underneath.',
      },
      {
        q: 'In the laser printing process, which step comes right after Developing?',
        choices: ['Charging', 'Transferring', 'Fusing', 'Exposing'],
        answer: 1,
        why: 'Order: Processing, Charging, Exposing, Developing, **Transferring**, Fusing, Cleaning.',
      },
      {
        q: 'How should spilled toner be cleaned up?',
        choices: ['A regular household vacuum', 'A toner vacuum', 'Compressed air indoors', 'A damp paper towel only'],
        answer: 1,
        why: 'Toner is very fine powder. A **toner vacuum** filters it safely.',
      },
      {
        q: 'Receipt printers at a cash register usually use which technology?',
        choices: ['Laser', 'Thermal', 'Impact', '3D'],
        answer: 1,
        why: '**Thermal** printers use heat on special paper, which is perfect for receipts.',
      },
      {
        q: 'An inkjet printer has streaks and a missing color. What should you try first?',
        choices: ['Replace the fuser', 'Run print head cleaning', 'Replace the drum', 'Change the ribbon'],
        answer: 1,
        why: 'Clogged nozzles cause streaks. **Print head cleaning** is the first step.',
      },
    ],
  },
}

export default lessons
