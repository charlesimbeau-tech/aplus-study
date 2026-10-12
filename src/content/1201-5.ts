import type { Lesson } from './types'

// Core 1, Domain 5.0 Hardware and Network Troubleshooting
const lessons: Record<string, Lesson> = {
  '1201-5.1': {
    cards: [
      {
        title: 'The troubleshooting method',
        bullets: [
          '1) **Identify the problem**: ask the user, check what changed, and back up data first.',
          '2) **Establish a theory** of probable cause. Question the obvious.',
          '3) **Test the theory**. If it’s wrong, make a new theory or escalate.',
          '4) **Plan of action** to fix it. 5) **Implement** it (or escalate).',
          '6) **Verify** full system functionality and add **preventive measures**.',
          '7) **Document** findings, actions, and outcomes.',
        ],
        tip: 'Document is always LAST. Back up data before making changes.',
      },
      {
        title: 'Power and boot problems',
        bullets: [
          '**Nothing at all** (no fans, no lights): check the outlet, the power cable, the PSU switch, then the PSU itself.',
          '**Beep codes** or **POST codes** at startup point to the failing part (often RAM or video).',
          '**Random shutdowns** or reboots: overheating or a failing PSU.',
          '**Blue screen (BSOD)**: often bad RAM or drivers. Run a memory test.',
        ],
      },
      {
        title: 'Overheating and other signs',
        bullets: [
          'Overheating: clean the **dust**, check the **fans**, re-apply **thermal paste**.',
          '**Burning smell**: power off immediately. A part or the PSU is failing.',
          '**Swollen capacitors** on the board mean the board needs replacing.',
          '**Wrong date/time**: replace the CMOS battery.',
          '**Slow performance**: check RAM use, temperatures, and storage health.',
        ],
      },
    ],
    questions: [
      {
        q: 'What is the LAST step of the CompTIA troubleshooting methodology?',
        choices: [
          'Verify full system functionality',
          'Document findings, actions, and outcomes',
          'Establish a plan of action',
          'Test the theory',
        ],
        answer: 1,
        why: '**Document** is always the final step.',
      },
      {
        q: 'Before changing anything on a user’s computer, what should you do during the “identify the problem” step?',
        choices: ['Reinstall the OS', 'Back up the user’s data', 'Replace the RAM', 'Update the BIOS'],
        answer: 1,
        why: 'Part of step 1 is to **back up data** before making changes.',
      },
      {
        q: 'A PC shows no lights and no fan activity when the power button is pressed. What should you check first?',
        choices: ['The RAM', 'The power cable and outlet', 'The hard drive', 'The monitor cable'],
        answer: 1,
        why: 'Start simple: **outlet, cable, and PSU switch** before blaming internal parts.',
      },
      {
        q: 'A PC randomly reboots, especially when running games, and the fans are very loud. What’s the likely cause?',
        choices: ['Overheating', 'A bad monitor', 'A wrong DNS server', 'A missing printer driver'],
        answer: 0,
        why: 'Heavy load plus loud fans plus shutdowns points to **overheating**. Clean it and check cooling.',
      },
      {
        q: 'Your first theory about the problem turns out to be wrong. What’s the next step?',
        choices: [
          'Document and close the ticket',
          'Establish a new theory or escalate',
          'Replace the motherboard',
          'Tell the user it can’t be fixed',
        ],
        answer: 1,
        why: 'When a theory fails, **form a new theory or escalate**.',
      },
      {
        q: 'You notice bulging, leaking capacitors on a motherboard. What’s the right fix?',
        choices: ['Update drivers', 'Replace the motherboard', 'Add more RAM', 'Reset the BIOS'],
        answer: 1,
        why: '**Swollen capacitors** mean the board is failing. Replace the **motherboard**.',
      },
    ],
  },

  '1201-5.2': {
    cards: [
      {
        title: 'Drive warning signs',
        bullets: [
          '**Clicking or grinding** noises from an HDD: it’s failing. **Back up now.**',
          '**S.M.A.R.T. errors**: the drive’s own health check is warning you.',
          '**Slow performance**, **read/write failures**, and missing files.',
          '**“Bootable device not found”**: wrong boot order, a disconnected cable, or a dead drive.',
        ],
        tip: 'Clicking drive = back up immediately, then replace.',
      },
      {
        title: 'RAID problems',
        bullets: [
          'A **degraded** array means a drive failed. Replace it and let the array **rebuild**.',
          'In **RAID 0**, one drive failure means **all data is lost**.',
          'Check the RAID controller utility and the drive lights.',
        ],
      },
      {
        title: 'Useful tools',
        bullets: [
          '**chkdsk** checks and repairs file system errors on Windows.',
          'Vendor **diagnostic tools** and S.M.A.R.T. readers.',
          'Check the **boot order** in UEFI first if the system can’t find the drive.',
        ],
      },
    ],
    questions: [
      {
        q: 'A user’s hard drive is making a clicking noise. What should you do first?',
        choices: ['Defragment it', 'Back up the data immediately', 'Run a full antivirus scan', 'Reinstall Windows'],
        answer: 1,
        why: 'Clicking means **imminent failure**. Save the data first.',
      },
      {
        q: 'A PC says “No bootable device” after a new drive was installed. What should you check first?',
        choices: ['The boot order in UEFI', 'The monitor cable', 'The DNS server', 'The printer queue'],
        answer: 0,
        why: 'The **boot order** may point at the wrong drive. Also check the drive’s cables.',
      },
      {
        q: 'A RAID 5 array shows “degraded.” What does that mean?',
        choices: [
          'All data is lost',
          'One drive failed, but the data is still available',
          'The array is being created',
          'The RAID card needs a driver update',
        ],
        answer: 1,
        why: '**Degraded** means it lost a drive but is still working. Replace the drive and rebuild.',
      },
      {
        q: 'Which drive feature reports its own health and warns of failure?',
        choices: ['TRIM', 'S.M.A.R.T.', 'NVMe', 'RAID'],
        answer: 1,
        why: '**S.M.A.R.T.** monitors drive health and can predict failures.',
      },
      {
        q: 'Which Windows tool checks a disk for file system errors?',
        choices: ['chkdsk', 'ipconfig', 'tracert', 'gpupdate'],
        answer: 0,
        why: '**chkdsk** scans and fixes file system errors.',
      },
    ],
  },

  '1201-5.3': {
    cards: [
      {
        title: 'No picture',
        bullets: [
          'Check the **power**, the **cable**, and the monitor’s **input source** (HDMI 1 vs HDMI 2).',
          'Is the cable plugged into the **graphics card** rather than the motherboard port?',
          'Projector: check the **lamp**, the input, and that the laptop is set to **extend/duplicate** (Windows + P).',
        ],
        tip: 'Blank screen? Check the input source and the cable before anything else.',
      },
      {
        title: 'Picture problems',
        bullets: [
          '**Dim image**: a failing backlight (or inverter on old LCDs). Check the brightness setting too.',
          '**Dead pixels** (always black) and **stuck pixels** (always one color).',
          '**Flickering**: a loose cable, a bad refresh rate setting, or a failing backlight.',
          '**Burn-in / image ghosting**: an image stays faintly visible (OLED, plasma).',
          '**Incorrect color**: a bad cable, wrong settings, or color calibration.',
          '**Fuzzy image**: wrong (non-native) **resolution**.',
          '**Projector shuts off**: overheating. Clean the **filter** and vents.',
        ],
      },
    ],
    questions: [
      {
        q: 'A monitor is on but shows “No signal.” The PC is running. What should you check first?',
        choices: ['The input source and cable', 'The power supply wattage', 'The RAM', 'The CPU fan'],
        answer: 0,
        why: 'Wrong **input source** or a loose **cable** is the most common cause of “No signal.”',
      },
      {
        q: 'The image on a laptop is very dim but visible with a flashlight. What’s likely failing?',
        choices: ['The backlight', 'The digitizer', 'The GPU driver', 'The battery'],
        answer: 0,
        why: 'The image is there but unlit, so the **backlight** (or its inverter on old screens) has failed.',
      },
      {
        q: 'The display looks fuzzy and text is blurry. What should you check?',
        choices: [
          'That the resolution is set to the native resolution',
          'The DNS settings',
          'The CMOS battery',
          'The printer driver',
        ],
        answer: 0,
        why: 'LCDs look sharp only at their **native resolution**.',
      },
      {
        q: 'A projector keeps shutting off after 20 minutes. What’s the most likely cause?',
        choices: ['Overheating from a clogged filter or vents', 'The wrong input source', 'Low resolution', 'A bad HDMI cable'],
        answer: 0,
        why: 'Projectors run hot. A **clogged filter** causes thermal shutdowns.',
      },
      {
        q: 'A laptop is connected to a projector but only the laptop screen shows the image. What helps?',
        choices: ['Press Windows + P to duplicate or extend', 'Replace the lamp', 'Reinstall Windows', 'Change the DNS server'],
        answer: 0,
        why: '**Windows + P** chooses where the display goes: PC only, duplicate, extend, or second screen only.',
      },
    ],
  },

  '1201-5.4': {
    cards: [
      {
        title: 'Power and battery',
        bullets: [
          '**Poor battery life**: an aging battery, too many background apps, or high screen brightness.',
          '**Swollen battery**: the case or screen gets pushed apart. Stop using it and replace the battery safely.',
          '**Not charging**: try another cable and adapter, and clean the port.',
          '**Overheating**: blocked vents, a heavy workload, or a failing battery.',
        ],
      },
      {
        title: 'Input and screen',
        bullets: [
          '**Unresponsive touch screen**: restart, clean the screen, remove the screen protector, or replace the digitizer.',
          '**Cursor drift / ghost touches**: a damaged digitizer or calibration problem.',
          '**Broken screen**: replace the display assembly.',
          '**Physical damage** or **liquid damage**: power off immediately and don’t charge it.',
        ],
      },
      {
        title: 'Connectivity',
        bullets: [
          'No Wi-Fi or Bluetooth: check **airplane mode** and the radio toggles, then forget and re-pair.',
          'Laptop has **no wireless** after a repair: check the antenna cables in the lid.',
          '**Port damage**: debris or bent pins in charging ports.',
          '**Degraded performance**: low storage, too many apps, or thermal throttling.',
        ],
      },
    ],
    questions: [
      {
        q: 'A phone’s screen is lifting away from the body. What’s the most likely cause and action?',
        choices: [
          'A swollen battery. Stop using it and replace the battery safely',
          'A loose screw. Tighten it',
          'Too many apps. Close them',
          'A bad SIM. Replace it',
        ],
        answer: 0,
        why: 'A **swollen battery** pushes the screen out. It’s a fire risk, so stop using the phone.',
      },
      {
        q: 'A tablet’s touch screen doesn’t respond in one corner. What’s likely damaged?',
        choices: ['The backlight', 'The digitizer', 'The battery', 'The speaker'],
        answer: 1,
        why: 'The **digitizer** senses touch. Dead zones point to it.',
      },
      {
        q: 'A phone won’t charge. What should you try first?',
        choices: [
          'Try a different cable and adapter, and check the port for lint',
          'Factory reset',
          'Replace the screen',
          'Remove the SIM',
        ],
        answer: 0,
        why: 'Start with the simple stuff: **cable, adapter, and a dirty port**.',
      },
      {
        q: 'A laptop can’t see any Wi-Fi networks right after a keyboard replacement. What should you check?',
        choices: ['The antenna cables and the wireless card connection', 'The display resolution', 'The RAM', 'The printer settings'],
        answer: 0,
        why: 'Laptop repairs can disturb the **Wi-Fi card and its antenna cables**.',
      },
      {
        q: 'A phone was dropped in water. What should you do first?',
        choices: ['Power it off and don’t charge it', 'Charge it to test it', 'Put it in the sun', 'Blow-dry it on high heat'],
        answer: 0,
        why: 'With **liquid damage**, power and charging can short the circuits. Turn it off first.',
      },
    ],
  },

  '1201-5.5': {
    cards: [
      {
        title: 'Can’t connect at all',
        bullets: [
          'Check the **link lights** on the network port and the **cable**.',
          'Run `ipconfig`. A **169.254.x.x** address means **DHCP failed**.',
          '**IP conflict**: two devices have the same IP, so one or both lose connectivity.',
          'Wrong **default gateway**: local works, but there’s no internet.',
        ],
        tip: 'Can ping 8.8.8.8 but can’t open google.com? That’s DNS.',
      },
      {
        title: 'Slow or flaky',
        bullets: [
          '**Intermittent connectivity**: a bad cable, Wi-Fi interference, or weak signal.',
          '**Slow speeds**: interference, a crowded channel, or too many users.',
          '**Jitter**: delays vary, which makes calls choppy. **Latency**: overall delay.',
          '**Port flapping**: a switch port keeps going up and down, usually a bad cable or NIC.',
          '**Limited connectivity / no internet**: check the gateway, DNS, and ISP.',
        ],
      },
      {
        title: 'Command tools',
        bullets: [
          '`ping`: is the other side reachable?',
          '`tracert` (Windows) / `traceroute`: where along the path does it fail?',
          '`ipconfig /all`, `/release`, `/renew`, `/flushdns`: view and refresh IP and DNS.',
          '`nslookup`: test DNS. `netstat`: see active connections.',
        ],
      },
    ],
    questions: [
      {
        q: 'A user can ping 8.8.8.8 but can’t load any websites by name. What’s the likely problem?',
        choices: ['DNS', 'A bad cable', 'DHCP', 'The NIC is disabled'],
        answer: 0,
        why: 'IP connectivity works, but names don’t resolve, so it’s **DNS**.',
      },
      {
        q: 'A user’s PC got 169.254.10.4 and has no network access. What should you try?',
        choices: ['ipconfig /release then ipconfig /renew', 'tracert google.com', 'chkdsk', 'netstat'],
        answer: 0,
        why: 'APIPA means DHCP failed. **Release and renew** to ask DHCP again, then check the DHCP server or cable.',
      },
      {
        q: 'VoIP calls sound choppy even though download speed is fine. What’s the most likely issue?',
        choices: ['Jitter', 'APIPA', 'Wrong subnet mask', 'Port forwarding'],
        answer: 0,
        why: 'Voice is sensitive to **jitter** (uneven delay between packets).',
      },
      {
        q: 'Which command shows each hop between you and a destination?',
        choices: ['ping', 'tracert', 'ipconfig', 'nslookup'],
        answer: 1,
        why: '**tracert / traceroute** lists every router hop along the way.',
      },
      {
        q: 'Two computers keep losing network access and Windows warns about a duplicate address. What’s happening?',
        choices: ['An IP address conflict', 'DNS poisoning', 'Jitter', 'Port forwarding'],
        answer: 0,
        why: 'Two devices with the **same IP** cause a conflict.',
      },
      {
        q: 'Which command clears cached DNS entries on Windows?',
        choices: ['ipconfig /flushdns', 'ipconfig /renew', 'netstat -a', 'ping -t'],
        answer: 0,
        why: '`ipconfig /flushdns` clears the local DNS cache.',
      },
    ],
  },

  '1201-5.6': {
    cards: [
      {
        title: 'Print quality problems',
        bullets: [
          '**Faded prints**: low toner or ink.',
          '**Streaks / lines**: a dirty or scratched drum (laser), or clogged nozzles (inkjet).',
          '**Toner smears or rubs off**: a failing **fuser**.',
          '**Ghost images**: a drum or cleaning problem.',
          '**Speckling**: loose toner inside, so clean it.',
          '**Garbled characters**: the wrong or a corrupt **driver**.',
        ],
        tip: 'Garbage characters all over the page means a driver problem.',
      },
      {
        title: 'Paper and connection problems',
        bullets: [
          '**Paper jams**: wrong paper type, worn **pickup rollers**, or debris.',
          '**Not feeding** or **multiple pages** at once: worn rollers or humid paper.',
          '**Creased paper**: the wrong paper path or bad rollers.',
          '**Can’t print / offline**: check the network, the IP address, and the **print spooler**.',
          '**Stuck queue**: restart the **Print Spooler** service and clear the queue.',
          '**Grinding noise**: a gear or mechanism problem.',
        ],
        tip: 'Jobs stuck in the queue? Restart the Print Spooler service.',
      },
    ],
    questions: [
      {
        q: 'A laser printer prints pages full of random symbols and garbage text. What’s the most likely cause?',
        choices: ['A wrong or corrupt print driver', 'Low toner', 'A bad fuser', 'Damp paper'],
        answer: 0,
        why: '**Garbled output** almost always means a **driver** problem.',
      },
      {
        q: 'Print jobs are stuck in the queue and nothing prints. What should you do?',
        choices: [
          'Restart the Print Spooler service',
          'Replace the toner',
          'Replace the fuser',
          'Change the paper type',
        ],
        answer: 0,
        why: 'Restarting the **Print Spooler** and clearing the queue fixes stuck jobs.',
      },
      {
        q: 'A printer pulls in several sheets at once and jams. What part should you check?',
        choices: ['Pickup / feed rollers', 'The drum', 'The fuser', 'The driver'],
        answer: 0,
        why: 'Worn **pickup rollers** grab multiple sheets or none.',
      },
      {
        q: 'The same faint image repeats down every laser printout. What’s the likely cause?',
        choices: ['A ghosting problem with the drum or cleaning', 'A network problem', 'Low ink', 'The wrong paper size'],
        answer: 0,
        why: '**Ghost images** come from the **drum** not being cleaned properly between rotations.',
      },
      {
        q: 'Prints are very light and faded all over. What should you check first?',
        choices: ['The toner level', 'The print spooler', 'The IP address', 'The paper tray'],
        answer: 0,
        why: 'Faded prints usually mean **low toner** (or ink).',
      },
    ],
  },
}

export default lessons
