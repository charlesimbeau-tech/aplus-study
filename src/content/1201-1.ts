import type { Lesson } from './types'

// Core 1, Domain 1.0 Mobile Devices
const lessons: Record<string, Lesson> = {
  '1201-1.1': {
    cards: [
      {
        title: 'Laptop parts you can swap',
        bullets: [
          'Most laptops let you replace **RAM**, **storage**, the **battery**, the **keyboard**, and the **wireless card**.',
          'Laptop RAM uses the smaller **SO-DIMM** form factor, not full-size DIMMs.',
          'Laptop storage is usually an **M.2** SSD (a small stick) or a **2.5-inch** drive.',
          'Some ultrabooks **solder** RAM and storage to the board, so those can’t be upgraded.',
        ],
        tip: 'SO-DIMM = “Small Outline” DIMM. Small laptop, small memory stick.',
      },
      {
        title: 'Before you open it up',
        bullets: [
          '**Power off and unplug**, then disconnect the battery if you can.',
          'Use an **ESD strap** or mat so static doesn’t fry parts.',
          'Check the **manufacturer’s service manual** for the screw order and steps.',
          'Keep screws organized, because they’re often different lengths.',
        ],
      },
      {
        title: 'Batteries',
        bullets: [
          'Modern laptops and phones use **lithium-ion (Li-ion)** or **lithium-polymer** batteries.',
          'A **swollen battery** is a safety hazard. Stop using the device, don’t puncture it, and recycle it properly.',
          'Batteries lose capacity over time, so short battery life on an older device often just means it needs a new battery.',
        ],
        tip: 'Swollen battery means stop, don’t charge, and dispose of it safely. That’s a classic exam answer.',
      },
      {
        title: 'Screens and biometrics',
        bullets: [
          'The laptop **display assembly** includes the panel, the **Wi-Fi antennas** (in the lid), the webcam, and the microphone.',
          '**Digitizer**: the touch layer on top of a screen. A cracked digitizer means touch stops working right.',
          'Biometric parts like **fingerprint readers** and **facial recognition** cameras may need re-enrolling after a repair.',
        ],
        tip: 'Weak Wi-Fi after a screen replacement? The antenna cables in the lid probably weren’t reconnected.',
      },
      {
        title: 'Monitoring hardware health',
        bullets: [
          'Watch **battery health**, **storage health**, and **temperatures** with built-in OS tools or vendor utilities.',
          'Overheating often comes from **blocked vents** or dusty fans.',
          'Replace parts with **matching specs** (same battery model, compatible RAM speed).',
        ],
      },
    ],
    questions: [
      {
        q: 'What kind of RAM module does a typical laptop use?',
        choices: ['DIMM', 'SO-DIMM', 'SIMM', 'RIMM'],
        answer: 1,
        why: '**SO-DIMM** (Small Outline DIMM) is the compact form factor laptops use. Full-size DIMMs go in desktops.',
      },
      {
        q: 'A user’s laptop has a battery that is visibly bulging. What should you do first?',
        choices: [
          'Charge it fully to recalibrate it',
          'Stop using it and safely remove and dispose of the battery',
          'Press the case closed and keep using it',
          'Update the BIOS',
        ],
        answer: 1,
        why: 'A swollen lithium battery can catch fire. **Stop using it**, remove it carefully, and recycle it properly.',
      },
      {
        q: 'After replacing a laptop screen, the Wi-Fi signal is very weak. What’s the most likely cause?',
        choices: [
          'The wireless card failed',
          'The Wi-Fi antenna cables in the lid weren’t reconnected',
          'The router changed channels',
          'The RAM is loose',
        ],
        answer: 1,
        why: 'Laptop **Wi-Fi antennas run through the display lid**, so a screen swap can easily leave them disconnected.',
      },
      {
        q: 'Which part of a tablet screen detects touch input?',
        choices: ['Inverter', 'Backlight', 'Digitizer', 'Bezel'],
        answer: 2,
        why: 'The **digitizer** is the touch-sensing layer. The backlight and inverter are about lighting the display.',
      },
      {
        q: 'Which storage form factor is a small stick that plugs straight into a laptop’s motherboard?',
        choices: ['3.5-inch HDD', 'M.2', 'mSATA cable drive', 'Optical drive'],
        answer: 1,
        why: '**M.2** SSDs are small sticks that slot directly into the board. They’re standard in modern laptops.',
      },
      {
        q: 'What should you do before opening a laptop to replace RAM?',
        choices: [
          'Leave it plugged in so it stays grounded',
          'Power it off, unplug it, disconnect the battery, and use ESD protection',
          'Put it in sleep mode',
          'Remove the screen first',
        ],
        answer: 1,
        why: 'Always **power off, unplug, disconnect the battery**, and protect against static (ESD) before touching internal parts.',
      },
    ],
  },

  '1201-1.2': {
    cards: [
      {
        title: 'Wired connections',
        bullets: [
          '**USB-C**: reversible, carries data, video, and power. It’s the modern standard on laptops and Android phones.',
          '**Lightning**: Apple’s older 8-pin connector for iPhones (newer iPhones use USB-C).',
          '**Micro-USB**: older Android phones and cheap accessories. It’s not reversible.',
        ],
      },
      {
        title: 'Wireless connections',
        bullets: [
          '**Bluetooth**: short range (about 10 m), for headsets, keyboards, mice, and speakers. Devices must be **paired**.',
          '**NFC** (Near Field Communication): a few centimeters of range, used for **tap-to-pay** and quick pairing.',
          '**Hotspot**: your phone shares its cellular data over Wi-Fi.',
          '**Tethering**: sharing a phone’s data over a cable (USB) or Bluetooth.',
        ],
        tip: 'Range order: NFC (cm) < Bluetooth (~10 m) < Wi-Fi (tens of m).',
      },
      {
        title: 'Bluetooth pairing steps',
        bullets: [
          '1) Turn on Bluetooth. 2) Make the accessory **discoverable**. 3) Select it on the phone or laptop.',
          '4) Enter or confirm the **PIN code** if asked. 5) **Test** that it works.',
        ],
        tip: 'If pairing fails, the first check is “is Bluetooth on and is the device in pairing mode?”',
      },
      {
        title: 'Accessories',
        bullets: [
          '**Touch pens / styluses** for drawing on tablets.',
          '**Headsets**, **speakers**, and **webcams** for calls.',
          '**Trackpads/drawing pads** and external keyboards.',
          '**Docking station**: one connection gives a laptop power, monitors, network, and USB devices. A **port replicator** is a simpler version.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which wireless technology is used for tap-to-pay at a store?',
        choices: ['Bluetooth', 'NFC', 'Wi-Fi Direct', 'Infrared'],
        answer: 1,
        why: '**NFC** works over a few centimeters, which is perfect for tapping a phone on a payment terminal.',
      },
      {
        q: 'A user wants their laptop to use their phone’s cellular data over Wi-Fi. What feature do they turn on?',
        choices: ['NFC', 'Airplane mode', 'Mobile hotspot', 'Bluetooth pairing'],
        answer: 2,
        why: 'A **hotspot** turns the phone into a small Wi-Fi access point that shares its cellular connection.',
      },
      {
        q: 'Which connector is reversible and can carry power, data, and video?',
        choices: ['Micro-USB', 'USB-C', 'Mini-USB', 'USB-A'],
        answer: 1,
        why: '**USB-C** is reversible and supports power delivery, data, and video (like DisplayPort over USB-C).',
      },
      {
        q: 'What’s the step right after making a Bluetooth headset discoverable?',
        choices: [
          'Enter the Wi-Fi password',
          'Select the headset on the device to pair it',
          'Restart the phone',
          'Update the headset firmware',
        ],
        answer: 1,
        why: 'Once it’s **discoverable**, you **select it** from the device’s Bluetooth list, then confirm the PIN if asked, then test it.',
      },
      {
        q: 'A user wants to plug one cable into their laptop at their desk and get two monitors, Ethernet, and USB. What do they need?',
        choices: ['A docking station', 'An NFC reader', 'A KVM switch', 'A hotspot'],
        answer: 0,
        why: 'A **docking station** gives a laptop power, displays, networking, and peripherals through a single connection.',
      },
    ],
  },

  '1201-1.3': {
    cards: [
      {
        title: 'Getting a phone online',
        bullets: [
          '**Cellular**: 4G/LTE and **5G** data from the carrier. Turn data on or off in settings.',
          '**Wi-Fi**: usually faster and doesn’t use the data plan.',
          '**Airplane mode** turns off all radios (Wi-Fi and Bluetooth can be turned back on separately).',
          'Phones need **PRL** and **firmware/baseband** updates from the carrier to stay connected properly.',
        ],
        tip: 'Phone suddenly has no signal or data? Check whether airplane mode is on first.',
      },
      {
        title: 'Phone identifiers',
        bullets: [
          '**IMEI**: identifies the **phone hardware** itself. It’s used to block stolen phones.',
          '**IMSI**: identifies the **subscriber**, and it’s stored on the **SIM card**.',
          '**eSIM**: a built-in digital SIM that you activate without a physical card.',
        ],
        tip: 'IM**E**I = **E**quipment. IM**S**I = **S**ubscriber (SIM).',
      },
      {
        title: 'Syncing and email',
        bullets: [
          'Phones sync **contacts, calendar, email, photos** to the cloud (iCloud, Google, Microsoft 365).',
          'Corporate email often uses **Microsoft Exchange** / ActiveSync.',
          'Email setup needs the right **server names and ports** (IMAP/POP3 to receive, SMTP to send).',
        ],
      },
      {
        title: 'Managing company phones (MDM)',
        bullets: [
          '**MDM (Mobile Device Management)** lets IT push settings, apps, and policies, and **remotely wipe** lost devices.',
          '**MAM (Mobile Application Management)** manages just the work apps and data, which is good for personal phones.',
          '**BYOD** (Bring Your Own Device) vs **corporate-owned** phones decides how much control IT has.',
          'MDM can enforce **passcodes**, **encryption**, and **two-factor authentication**.',
        ],
      },
      {
        title: 'App support',
        bullets: [
          'Install apps from official stores: **Google Play** and the **Apple App Store**.',
          'Company apps can be pushed through MDM.',
          'If an app misbehaves: force close it, clear its cache, update it, or reinstall it.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which number identifies the physical phone hardware and can be used to block a stolen device?',
        choices: ['IMSI', 'IMEI', 'MAC address', 'PRL'],
        answer: 1,
        why: '**IMEI** identifies the **equipment** (the handset). IMSI identifies the subscriber on the SIM.',
      },
      {
        q: 'A company wants to remotely wipe lost employee phones and enforce passcodes. What should they use?',
        choices: ['VPN', 'MDM', 'NFC', 'A hotspot'],
        answer: 1,
        why: '**MDM** gives IT central control: policies, app pushes, encryption, passcodes, and **remote wipe**.',
      },
      {
        q: 'A user’s phone shows Wi-Fi and cellular are both off and the user can’t make calls. What should you check first?',
        choices: ['The IMEI', 'Airplane mode', 'The email server port', 'The SIM PIN'],
        answer: 1,
        why: '**Airplane mode** disables all radios at once. It’s the quickest, most common fix.',
      },
      {
        q: 'Which protocol does a phone use to SEND email?',
        choices: ['IMAP', 'POP3', 'SMTP', 'SNMP'],
        answer: 2,
        why: '**SMTP** sends mail. IMAP and POP3 receive it.',
      },
      {
        q: 'An employee uses their own phone for work. IT only wants to control the work apps and data, not the whole phone. What fits best?',
        choices: ['Full MDM with device wipe', 'MAM', 'A new SIM card', 'Disabling Bluetooth'],
        answer: 1,
        why: '**MAM** manages just the company apps and data, which respects a **BYOD** user’s personal stuff.',
      },
      {
        q: 'Which is stored on the SIM card and identifies the subscriber?',
        choices: ['IMEI', 'IMSI', 'Serial number', 'UUID'],
        answer: 1,
        why: '**IMSI** = International Mobile **Subscriber** Identity, stored on the **SIM**.',
      },
    ],
  },
}

export default lessons
