import type { Lesson } from './types'

// Core 2, Domain 3.0 Software Troubleshooting
const lessons: Record<string, Lesson> = {
  '1202-3.1': {
    cards: [
      {
        title: 'Crashes and boot problems',
        bullets: [
          '**BSOD** (blue screen): bad drivers, RAM, or updates. Note the **stop code**.',
          '**Boot loops / won’t boot**: use **Startup Repair** in Windows RE, or **Safe Mode**.',
          '**Services not starting**: check `services.msc` and Event Viewer.',
          '**Sluggish performance**: check Task Manager, startup apps, free disk space, and malware.',
          '**Low memory warnings**: close apps, add RAM, or check for memory leaks.',
        ],
      },
      {
        title: 'Fix tools, from gentle to drastic',
        bullets: [
          '**Restart** (seriously). Then **roll back the driver** or **uninstall the recent update**.',
          '**Safe Mode**: loads only basic drivers, which isolates the problem.',
          '`sfc /scannow` and `dism` to repair system files.',
          '**System Restore**: go back to an earlier restore point (keeps personal files).',
          '**Reset this PC** (keep or remove files), and finally a **reimage / reinstall**.',
        ],
        tip: 'Problem started right after a driver update? Roll back the driver.',
      },
      {
        title: 'Profiles and other quirks',
        bullets: [
          '**Corrupted user profile**: the user logs into a temporary profile. Create a new profile and copy the data over.',
          '**Time drift**: wrong clock, which breaks domain logins. Sync time or check the CMOS battery.',
          '**USB / app not working after an update**: roll back or reinstall.',
          '**Frequent shutdowns**: check overheating, power, and Event Viewer.',
        ],
      },
    ],
    questions: [
      {
        q: 'Windows started blue-screening right after a graphics driver update. What should you try first?',
        choices: ['Roll back the driver', 'Reinstall Windows', 'Replace the RAM', 'Format the drive'],
        answer: 0,
        why: 'Undo the recent change first: **roll back the driver**.',
      },
      {
        q: 'Which mode loads Windows with only essential drivers to help isolate a problem?',
        choices: ['Safe Mode', 'Hibernate', 'Airplane mode', 'S mode'],
        answer: 0,
        why: '**Safe Mode** starts with minimal drivers and services.',
      },
      {
        q: 'A user logs in and their desktop is empty with a message about a temporary profile. What’s the likely issue?',
        choices: ['A corrupted user profile', 'A bad monitor', 'A failed DHCP lease', 'A full printer queue'],
        answer: 0,
        why: 'A **corrupted profile** makes Windows load a temporary one. Rebuild the profile.',
      },
      {
        q: 'Which tool takes Windows back to an earlier state without deleting personal files?',
        choices: ['System Restore', 'Disk Cleanup', 'Reset this PC (remove everything)', 'diskpart'],
        answer: 0,
        why: '**System Restore** rolls back system files and settings, not your documents.',
      },
      {
        q: 'A domain PC can’t log in and reports a time mismatch. What should you fix?',
        choices: ['The system time sync', 'The screen resolution', 'The printer driver', 'The Wi-Fi channel'],
        answer: 0,
        why: 'Domain logins (Kerberos) fail when clocks are too far apart, so **fix the time**.',
      },
      {
        q: 'A PC is very slow to start up. What should you check first?',
        choices: ['Startup apps in Task Manager', 'The monitor cable', 'The BitLocker key', 'DNS records'],
        answer: 0,
        why: 'Too many **startup apps** is the most common cause of slow boots.',
      },
    ],
  },

  '1202-3.2': {
    cards: [
      {
        title: 'Common phone app problems',
        bullets: [
          '**App won’t launch or crashes**: force stop it, clear the cache, update it, reinstall it, or restart the phone.',
          '**App fails to update**: check storage space and the network.',
          '**Slow phone**: low storage, too many apps, or an old OS.',
          '**Battery drains fast**: check the battery usage screen for a misbehaving app.',
          '**Screen won’t rotate**: rotation lock is on.',
          '**Apps not loading / no internet**: Wi-Fi or cellular data is off, or airplane mode is on.',
        ],
        tip: 'Screen stuck in portrait? Check the rotation lock first.',
      },
      {
        title: 'Bigger problems',
        bullets: [
          '**OS won’t update**: low storage, low battery, or the device is too old for the update.',
          '**Random reboots**: overheating, a bad app, or a bad battery.',
          '**Connectivity problems** (Bluetooth, Wi-Fi, NFC): toggle the radio, forget and re-pair, restart.',
          '**Can’t broadcast to an external screen**: check AirPlay / Cast settings and that both are on the same Wi-Fi.',
          'Last resort: **factory reset** (back up first).',
        ],
      },
    ],
    questions: [
      {
        q: 'An app crashes every time it opens on a phone. What should you try first?',
        choices: [
          'Force stop and clear the app cache',
          'Factory reset the phone',
          'Replace the battery',
          'Change the carrier',
        ],
        answer: 0,
        why: 'Start small: **force stop and clear the cache**, then update or reinstall.',
      },
      {
        q: 'A user’s screen won’t turn sideways when the phone is rotated. What’s likely?',
        choices: ['Rotation lock is on', 'The digitizer is broken', 'The OS is out of date', 'Low storage'],
        answer: 0,
        why: '**Rotation lock** stops the screen from rotating.',
      },
      {
        q: 'A phone can’t install its OS update. What should you check?',
        choices: [
          'Free storage space and battery level',
          'Screen brightness',
          'The Bluetooth name',
          'Rotation lock',
        ],
        answer: 0,
        why: 'Updates need **free space** and enough **battery** (or to be plugged in).',
      },
      {
        q: 'A phone’s battery suddenly drains in a few hours. Where should you look first?',
        choices: [
          'The battery usage screen, to find the app using power',
          'The SIM tray',
          'Camera settings',
          'Rotation lock',
        ],
        answer: 0,
        why: 'The **battery usage** screen shows which app is draining power.',
      },
      {
        q: 'Before a factory reset to fix a phone, what must you do?',
        choices: ['Back up the user’s data', 'Turn on airplane mode', 'Remove the case', 'Lower the brightness'],
        answer: 0,
        why: 'A factory reset erases everything, so **back up first**.',
      },
    ],
  },

  '1202-3.3': {
    cards: [
      {
        title: 'Warning signs on a phone',
        bullets: [
          '**High network traffic** or **data use** you can’t explain.',
          '**Sluggish response** and **battery drain**.',
          '**Fake security warnings** and pop-ups.',
          '**Unexpected app behavior**, or apps you didn’t install.',
          '**Leaked personal files or data**, or **unauthorized account access**.',
        ],
      },
      {
        title: 'Common causes',
        bullets: [
          '**Sideloading**: installing apps from outside the official store (APK files on Android).',
          '**Developer mode** turned on unnecessarily.',
          '**Root access (Android) / jailbreak (iOS)**: removes built-in protections.',
          '**Bootleg / malicious apps** that look like real ones.',
          'Fix: remove the bad apps, run anti-malware, update the OS, change passwords, and factory reset if needed.',
        ],
        tip: 'Rooted or jailbroken phone = security protections are off. Company MDM usually blocks them.',
      },
    ],
    questions: [
      {
        q: 'A phone uses huge amounts of mobile data while idle and shows fake virus pop-ups. What’s likely?',
        choices: ['Malware', 'A bad screen', 'Rotation lock', 'A full SIM'],
        answer: 0,
        why: 'Strange **data use** and **fake warnings** are classic signs of mobile **malware**.',
      },
      {
        q: 'Installing an Android app from an APK file found on a website is called what?',
        choices: ['Sideloading', 'Jailbreaking', 'Tethering', 'Pairing'],
        answer: 0,
        why: '**Sideloading** installs apps from outside the official store.',
      },
      {
        q: 'Removing Apple’s built-in restrictions from an iPhone is called what?',
        choices: ['Jailbreaking', 'Rooting', 'Sideloading', 'Developer mode'],
        answer: 0,
        why: 'On iOS it’s called **jailbreaking**. On Android it’s **rooting**.',
      },
      {
        q: 'A user’s social media account posts things they didn’t write, from their phone. What’s a good first step?',
        choices: [
          'Change passwords and scan the phone for malware',
          'Lower the screen brightness',
          'Turn off rotation lock',
          'Clear the browser cache only',
        ],
        answer: 0,
        why: '**Unauthorized account access**: secure the account (new password, MFA) and check the device.',
      },
      {
        q: 'Why does company MDM often block rooted or jailbroken phones?',
        choices: [
          'Their security protections are bypassed',
          'They have smaller screens',
          'They can’t use Wi-Fi',
          'They use more battery',
        ],
        answer: 0,
        why: 'Rooting or jailbreaking **removes OS security controls**.',
      },
    ],
  },

  '1202-3.4': {
    cards: [
      {
        title: 'Signs a PC is infected',
        bullets: [
          '**Pop-ups**, **browser redirects**, and a changed **homepage**.',
          '**Security alerts** from fake “antivirus” programs.',
          '**Slow performance**, **lockups**, and high CPU use.',
          '**Internet connectivity issues** and **OS update failures**.',
          '**Missing, renamed, or encrypted files**.',
          '**Altered system or personal files**, and **email**: spam sent from the user’s account, or **invalid certificates**.',
        ],
      },
      {
        title: 'What to do',
        bullets: [
          'Follow the **7-step malware removal** process (see the malware removal checkpoint).',
          '**Browser redirects**: check extensions, the **hosts file**, DNS settings, and the proxy.',
          '**Certificate warnings** on trusted sites: possible on-path attack or bad DNS.',
          '**Antivirus disabled**: malware often turns it off, which is a strong sign.',
        ],
        tip: 'Users sent to fake sites even when typing the right address? Check the hosts file and DNS settings.',
      },
    ],
    questions: [
      {
        q: 'A user types their bank’s correct web address but lands on a lookalike site. What should you check?',
        choices: ['The hosts file and DNS settings', 'The monitor cable', 'The print spooler', 'The power plan'],
        answer: 0,
        why: 'Malware can edit the **hosts file** or DNS to **redirect** sites.',
      },
      {
        q: 'Friends say they’re getting spam from a user’s email address. What does this suggest?',
        choices: [
          'The account or PC may be compromised',
          'The mailbox is full',
          'The printer is offline',
          'Wi-Fi is weak',
        ],
        answer: 0,
        why: 'Unexpected outgoing spam is a sign of a **hijacked account** or **infected PC**.',
      },
      {
        q: 'A user’s antivirus has been turned off and won’t turn back on. What’s the likely reason?',
        choices: ['Malware disabled it', 'The display driver', 'Low disk space', 'Time drift'],
        answer: 0,
        why: 'Malware often **disables security software** to protect itself.',
      },
      {
        q: 'A PC shows constant pop-ups and its browser homepage changed to an unknown site. What is this most likely?',
        choices: ['Adware / browser hijacker', 'A failing PSU', 'A RAID problem', 'A bad cable'],
        answer: 0,
        why: 'Pop-ups plus homepage changes point to **adware or a browser hijacker**.',
      },
      {
        q: 'You confirm a PC has malware. What’s the next step in the removal process?',
        choices: ['Quarantine it from the network', 'Educate the user', 'Create a restore point', 'Reinstall the printer'],
        answer: 0,
        why: 'After verifying, **quarantine** it so it can’t spread.',
      },
    ],
  },
}

export default lessons
