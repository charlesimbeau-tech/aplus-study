import type { Lesson } from './types'

// Core 2, Domain 2.0 Security
const lessons: Record<string, Lesson> = {
  '1202-2.1': {
    cards: [
      {
        title: 'Physical security',
        bullets: [
          '**Access control vestibule** (mantrap): two doors, and only one can open at a time. It stops **tailgating**.',
          '**Badge readers**, **biometric locks**, **security guards**, **video surveillance**, **alarms**, **motion sensors**.',
          '**Bollards**: posts that stop vehicles. **Fences**, **lighting**, and **door locks**.',
        ],
        tip: 'Someone following an employee through a door? Use an access control vestibule.',
      },
      {
        title: 'Logical security',
        bullets: [
          '**Principle of least privilege**: give people only the access they need.',
          '**MFA**: two or more of: something you **know** (password), **have** (phone, key), or **are** (fingerprint).',
          '**ACLs**: lists of who can access what.',
          '**Zero Trust**: never trust automatically, always verify.',
          '**Email security**: SPF, DKIM, DMARC. **DLP (Data Loss Prevention)**: stops sensitive data from leaving.',
        ],
      },
      {
        title: 'Authentication tools',
        bullets: [
          '**Hard tokens** and **soft tokens** (authenticator apps) for codes.',
          '**SMS** and **voice call** codes are weaker options.',
          '**SSO (Single Sign-On)**: one login for many apps.',
          '**Active Directory**: domains, **Group Policy**, **security groups**, **OUs**, **home folders**, **folder redirection**, **login scripts**.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which physical control stops someone from following an employee through a secure door?',
        choices: ['Access control vestibule', 'Bollards', 'Motion sensor', 'Fence'],
        answer: 0,
        why: 'An **access control vestibule** lets only one person through at a time, which stops tailgating.',
      },
      {
        q: 'A password plus a code from an authenticator app is an example of what?',
        choices: ['Multifactor authentication', 'Single sign-on', 'Least privilege', 'An ACL'],
        answer: 0,
        why: 'Something you **know** plus something you **have** = **MFA**.',
      },
      {
        q: 'An intern only needs to read a shared folder, so they’re given read-only access. What principle is this?',
        choices: ['Least privilege', 'Zero Trust', 'SSO', 'DLP'],
        answer: 0,
        why: '**Least privilege**: grant only the access the job needs.',
      },
      {
        q: 'What stops a car from being driven into a building entrance?',
        choices: ['Bollards', 'A badge reader', 'A mantrap', 'Motion sensors'],
        answer: 0,
        why: '**Bollards** are sturdy posts that block vehicles.',
      },
      {
        q: 'Which technology tries to stop employees from emailing customer credit card numbers out of the company?',
        choices: ['DLP', 'SSO', 'VPN', 'MDM'],
        answer: 0,
        why: '**DLP** (Data Loss Prevention) detects and blocks sensitive data leaving.',
      },
      {
        q: 'A user logs in once and then gets into email, HR, and file storage without logging in again. What is this?',
        choices: ['SSO', 'MFA', 'ACL', 'RADIUS'],
        answer: 0,
        why: '**Single Sign-On** gives one login for many services.',
      },
    ],
  },

  '1202-2.2': {
    cards: [
      {
        title: 'Defender and the firewall',
        bullets: [
          '**Microsoft Defender Antivirus**: built-in protection. Keep its definitions **updated**.',
          '**Windows Defender Firewall**: allow or block apps and ports, with separate public and private rules.',
        ],
      },
      {
        title: 'Users and permissions',
        bullets: [
          'Account types: **Administrator**, **Standard user**, **Guest**. Use standard accounts day to day.',
          '**UAC (User Account Control)**: asks before admin-level changes.',
          '**NTFS permissions** (Full Control, Modify, Read, Write) vs **share permissions**. When both apply, **the most restrictive wins**.',
          '**Inheritance**: folders pass permissions down to what’s inside them.',
          'Moving a file **on the same drive keeps** its permissions. Copying (or moving to another drive) **takes the new folder’s** permissions.',
        ],
        tip: 'Share says Full Control but NTFS says Read? The user gets Read, because the most restrictive wins.',
      },
      {
        title: 'Encryption and logins',
        bullets: [
          '**BitLocker**: encrypts the whole drive (uses the TPM). **BitLocker To Go**: USB drives.',
          '**EFS**: encrypts individual files and folders on NTFS.',
          '**Windows Hello**: PIN, fingerprint, or face sign-in.',
          'Keep the **BitLocker recovery key** safe, or the data is lost if the TPM fails.',
        ],
      },
    ],
    questions: [
      {
        q: 'A user has Full Control share permission but Read NTFS permission on a folder accessed over the network. What can they do?',
        choices: ['Read only', 'Full Control', 'Modify', 'Nothing'],
        answer: 0,
        why: 'When share and NTFS permissions combine, **the most restrictive wins**, so it’s Read.',
      },
      {
        q: 'Which Windows feature encrypts an entire drive using the TPM?',
        choices: ['BitLocker', 'EFS', 'UAC', 'Defender'],
        answer: 0,
        why: '**BitLocker** encrypts full volumes and uses the TPM to protect the key.',
      },
      {
        q: 'Which feature asks for permission before a program makes system-level changes?',
        choices: ['UAC', 'BitLocker', 'EFS', 'Windows Hello'],
        answer: 0,
        why: '**User Account Control** prompts before admin-level actions.',
      },
      {
        q: 'Which tool encrypts a USB flash drive in Windows?',
        choices: ['BitLocker To Go', 'EFS', 'Defender Firewall', 'gpupdate'],
        answer: 0,
        why: '**BitLocker To Go** is for removable drives.',
      },
      {
        q: 'What type of account should a user use for everyday work?',
        choices: ['Standard user', 'Administrator', 'Guest', 'Domain admin'],
        answer: 0,
        why: 'Use a **standard account** daily. It limits the damage malware can do.',
      },
      {
        q: 'A file is copied to a different folder on the same NTFS drive. Which permissions does the copy have?',
        choices: [
          'It inherits the destination folder’s permissions',
          'It keeps its original permissions',
          'It has no permissions',
          'It becomes read-only',
        ],
        answer: 0,
        why: 'A **copy** is a new file, so it takes the **destination’s** permissions. Only a **move on the same volume** keeps them.',
      },
    ],
  },

  '1202-2.3': {
    cards: [
      {
        title: 'Wireless encryption',
        bullets: [
          '**WEP**: broken. Never use it.',
          '**WPA**: old (TKIP). Avoid it.',
          '**WPA2**: AES encryption, still common.',
          '**WPA3**: the newest and strongest (uses **SAE** instead of a pre-shared key handshake).',
          '**TKIP** is old and weak. **AES** is strong.',
        ],
        tip: 'Most secure choice on the exam? WPA3 with AES.',
      },
      {
        title: 'Authentication methods',
        bullets: [
          '**Personal / PSK**: everyone shares one Wi-Fi password, which is fine for home.',
          '**Enterprise**: each user logs in with their own credentials through a **RADIUS** server (802.1X).',
          '**RADIUS**: common for Wi-Fi and VPN logins. **TACACS+**: Cisco, used for network device admin logins.',
          '**Kerberos**: Windows domain login (uses tickets).',
          '**MFA** can be added on top.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which wireless security protocol is the most secure?',
        choices: ['WEP', 'WPA', 'WPA2', 'WPA3'],
        answer: 3,
        why: '**WPA3** is the newest and strongest Wi-Fi security standard.',
      },
      {
        q: 'A company wants each employee to log in to Wi-Fi with their own username and password. What do they need?',
        choices: ['WPA2/WPA3 Enterprise with RADIUS', 'WEP', 'WPA2 Personal', 'An open network'],
        answer: 0,
        why: '**Enterprise** mode authenticates each user against a **RADIUS** server.',
      },
      {
        q: 'Which encryption is used by WPA2 and is considered strong?',
        choices: ['AES', 'TKIP', 'WEP', 'MD5'],
        answer: 0,
        why: '**AES** is strong encryption. TKIP is old and weak.',
      },
      {
        q: 'Which protocol is used to log into Windows domains with tickets?',
        choices: ['Kerberos', 'RADIUS', 'TACACS+', 'TKIP'],
        answer: 0,
        why: '**Kerberos** handles Active Directory domain authentication.',
      },
      {
        q: 'Which protocol is commonly used to control who can log into routers and switches as admins (Cisco)?',
        choices: ['TACACS+', 'WEP', 'SMTP', 'FTP'],
        answer: 0,
        why: '**TACACS+** is used for device administration authentication.',
      },
    ],
  },

  '1202-2.4': {
    cards: [
      {
        title: 'Types of malware',
        bullets: [
          '**Virus**: attaches to files and needs a user to run it. **Worm**: spreads by itself across networks.',
          '**Trojan**: pretends to be useful software. **Ransomware**: encrypts files and demands payment.',
          '**Spyware** and **keyloggers**: steal your information and keystrokes.',
          '**Rootkit**: hides deep in the system, which makes it hard to find. **Boot sector virus**: infects startup.',
          '**Cryptominer**: secretly uses your CPU to mine crypto. **Fileless**: runs only in memory.',
          '**Stalkerware**: secretly monitors a person.',
        ],
        tip: 'Spreads on its own = worm. Pretends to be good = Trojan. Locks your files = ransomware.',
      },
      {
        title: 'Detecting and removing it',
        bullets: [
          '**Antivirus / anti-malware**, kept updated.',
          '**EDR** (Endpoint Detection and Response): watches behavior and responds. **MDR** is EDR as a managed service. **XDR** extends it across more systems.',
          '**Recovery console / Windows RE** and **boot from clean media** for stubborn infections like rootkits.',
          '**OS reinstallation** is the surest fix when nothing else works.',
          'Prevention: **user education**, **email filtering**, **software firewalls**, and updates.',
        ],
      },
    ],
    questions: [
      {
        q: 'A user’s files are suddenly encrypted and a message demands payment. What malware is this?',
        choices: ['Ransomware', 'Spyware', 'A worm', 'A rootkit'],
        answer: 0,
        why: '**Ransomware** encrypts data and demands a ransom.',
      },
      {
        q: 'Which malware spreads across a network by itself without any user action?',
        choices: ['Worm', 'Virus', 'Trojan', 'Keylogger'],
        answer: 0,
        why: 'A **worm** self-replicates over networks. A virus needs a user to run something.',
      },
      {
        q: 'A free “PDF converter” turned out to secretly install a backdoor. What type of malware is this?',
        choices: ['Trojan', 'Worm', 'Ransomware', 'Cryptominer'],
        answer: 0,
        why: 'A **Trojan** disguises itself as legitimate software.',
      },
      {
        q: 'A PC’s CPU is at 100% all the time with no visible program running, and the electric bill rose. What’s likely?',
        choices: ['A cryptominer', 'A keylogger', 'Adware', 'A boot sector virus'],
        answer: 0,
        why: 'A **cryptominer** quietly uses your CPU or GPU to mine cryptocurrency.',
      },
      {
        q: 'Which malware hides deep in the OS so it’s hard for antivirus to detect?',
        choices: ['Rootkit', 'Adware', 'A worm', 'Spyware'],
        answer: 0,
        why: 'A **rootkit** hides at a low level, often needing clean boot media or a reinstall to remove.',
      },
      {
        q: 'Which tool monitors endpoint behavior and can automatically respond to threats?',
        choices: ['EDR', 'DLP', 'SSO', 'RADIUS'],
        answer: 0,
        why: '**EDR** (Endpoint Detection and Response) watches behavior and responds.',
      },
    ],
  },

  '1202-2.5': {
    cards: [
      {
        title: 'Social engineering',
        bullets: [
          '**Phishing**: fake emails. **Spear phishing**: targets one person. **Whaling**: targets executives.',
          '**Vishing**: phone calls. **Smishing**: text messages. **QR code phishing**: malicious QR codes.',
          '**Impersonation**: pretending to be IT or a boss. **Pretexting**: a made-up story to get info.',
          '**Tailgating / piggybacking**: following someone through a secure door.',
          '**Shoulder surfing**: watching someone type. **Dumpster diving**: digging through trash.',
          '**Evil twin**: a fake Wi-Fi network with a real-looking name.',
        ],
        tip: 'Vishing = voice. Smishing = SMS.',
      },
      {
        title: 'Threats and attacks',
        bullets: [
          '**DoS / DDoS**: flooding a service so it goes down (DDoS uses many machines, like a **botnet**).',
          '**Zero-day**: an unknown vulnerability with no patch yet.',
          '**On-path (man-in-the-middle)**: secretly sitting between two parties.',
          '**Brute force** and **dictionary** password attacks.',
          '**SQL injection** and **XSS (cross-site scripting)**: website attacks.',
          '**Spoofing**: faking an identity (email, IP, MAC). **Insider threat**: a malicious employee.',
          '**Supply chain** attacks: compromising a vendor to reach its customers.',
        ],
      },
      {
        title: 'Vulnerabilities',
        bullets: [
          '**Unpatched** systems, **EOL** operating systems, and **non-compliant** devices.',
          '**Unprotected systems**: missing antivirus or firewall.',
          '**BYOD** devices with weaker security.',
        ],
      },
    ],
    questions: [
      {
        q: 'An attacker calls an employee pretending to be from IT and asks for their password. What is this?',
        choices: ['Vishing', 'Smishing', 'Whaling', 'Tailgating'],
        answer: 0,
        why: '**Vishing** is voice phishing over the phone.',
      },
      {
        q: 'A fake phishing email is sent specifically to the company CEO. What’s it called?',
        choices: ['Whaling', 'Spear phishing', 'Smishing', 'Pretexting'],
        answer: 0,
        why: 'Phishing aimed at executives (“big fish”) is **whaling**.',
      },
      {
        q: 'An attacker sets up Wi-Fi named “Airport_Free_WiFi” to capture travelers’ traffic. What attack is this?',
        choices: ['Evil twin', 'DDoS', 'SQL injection', 'Brute force'],
        answer: 0,
        why: 'An **evil twin** is a rogue access point pretending to be legitimate.',
      },
      {
        q: 'A website is knocked offline by traffic from thousands of infected computers. What is this?',
        choices: ['DDoS', 'Zero-day', 'Spoofing', 'Phishing'],
        answer: 0,
        why: 'Many sources flooding a target is a **Distributed Denial of Service** attack.',
      },
      {
        q: 'Attackers exploit a flaw the software vendor doesn’t know about yet. What is it called?',
        choices: ['Zero-day', 'Brute force', 'Insider threat', 'Evil twin'],
        answer: 0,
        why: 'A **zero-day** has no patch because the vendor has had “zero days” to fix it.',
      },
      {
        q: 'Someone watches an employee type their PIN at a keypad. What is this?',
        choices: ['Shoulder surfing', 'Dumpster diving', 'Tailgating', 'Vishing'],
        answer: 0,
        why: '**Shoulder surfing** means looking over someone’s shoulder to steal info.',
      },
      {
        q: 'An attacker types code into a website’s login form to dump the database. What attack is this?',
        choices: ['SQL injection', 'XSS', 'On-path', 'Spoofing'],
        answer: 0,
        why: '**SQL injection** sends database commands through input fields.',
      },
    ],
  },

  '1202-2.6': {
    cards: [
      {
        title: 'The 7 malware removal steps',
        bullets: [
          '1) **Investigate and verify** the malware symptoms.',
          '2) **Quarantine** the infected system (disconnect it from the network).',
          '3) **Disable System Restore** (in Windows), because restore points may be infected.',
          '4) **Remediate**: update anti-malware software, then scan and remove (use Safe Mode or a pre-boot environment if needed).',
          '5) **Schedule scans and run updates**.',
          '6) **Re-enable System Restore** and **create a new restore point**.',
          '7) **Educate the end user**.',
        ],
        tip: '“I Quietly Disable Restore, Scan, Restore, Educate.” Disable restore BEFORE cleaning, re-enable AFTER.',
      },
      {
        title: 'Why the order matters',
        bullets: [
          'Quarantine first so it **can’t spread**.',
          'Disable System Restore so the malware **can’t hide in restore points** and come back.',
          'Update the anti-malware tool **before** scanning so it knows the latest threats.',
          'Education stops the same thing happening again.',
        ],
      },
    ],
    questions: [
      {
        q: 'After verifying malware symptoms, what’s the next step?',
        choices: [
          'Quarantine the infected system',
          'Educate the user',
          'Create a restore point',
          'Re-enable System Restore',
        ],
        answer: 0,
        why: 'Step 2 is **quarantine**, which keeps it from spreading.',
      },
      {
        q: 'Why do you disable System Restore during malware removal?',
        choices: [
          'Restore points may contain the malware',
          'It speeds up the scan',
          'It removes the malware automatically',
          'It updates antivirus definitions',
        ],
        answer: 0,
        why: 'Malware can hide in **restore points** and come back if you restore later.',
      },
      {
        q: 'What is the LAST step of the malware removal process?',
        choices: [
          'Educate the end user',
          'Re-enable System Restore',
          'Quarantine the system',
          'Run updates',
        ],
        answer: 0,
        why: 'Step 7 is **educating the user** so it doesn’t happen again.',
      },
      {
        q: 'During remediation, what should you do before scanning?',
        choices: [
          'Update the anti-malware software',
          'Re-enable System Restore',
          'Reconnect to the network',
          'Educate the user',
        ],
        answer: 0,
        why: 'Update definitions first so the scan can find the newest threats.',
      },
      {
        q: 'Once the system is clean, what do you do with System Restore?',
        choices: [
          'Re-enable it and create a new restore point',
          'Leave it disabled',
          'Restore an old point',
          'Delete it from the registry',
        ],
        answer: 0,
        why: 'Step 6: **re-enable it and make a fresh, clean restore point**.',
      },
    ],
  },

  '1202-2.7': {
    cards: [
      {
        title: 'Passwords',
        bullets: [
          '**Long** passwords (length matters most), with complexity: upper, lower, numbers, symbols.',
          '**Expiration** and **no reuse** policies, and a **password manager**.',
          '**BIOS/UEFI passwords** stop people changing firmware settings or booting from USB.',
          'Change **default passwords** on everything.',
        ],
      },
      {
        title: 'Lockdown settings',
        bullets: [
          '**Screen lock / timeout** after inactivity. Lock it yourself with **Windows + L**.',
          '**Account lockout** after a number of failed logins, which stops brute force.',
          '**Disable the Guest account** and change the default Administrator account.',
          '**Disable AutoRun / AutoPlay**, so USB drives can’t run things automatically.',
          '**Encrypt** drives and keep everything **patched**.',
          'Restrict **login times** if needed.',
        ],
        tip: 'Leaving your desk? Windows + L, every time.',
      },
    ],
    questions: [
      {
        q: 'Which setting stops someone from booting a PC from a USB drive to bypass Windows security?',
        choices: ['A BIOS/UEFI password and boot order lock', 'Show hidden files', 'Fast startup', 'Night light'],
        answer: 0,
        why: 'A **BIOS/UEFI password** stops others from changing the boot device.',
      },
      {
        q: 'An attacker is trying thousands of passwords on one account. Which setting stops this?',
        choices: ['Account lockout policy', 'Screen saver', 'AutoPlay', 'Guest account'],
        answer: 0,
        why: '**Account lockout** locks the account after too many failed attempts.',
      },
      {
        q: 'What should be disabled so a USB drive can’t automatically run programs when plugged in?',
        choices: ['AutoRun / AutoPlay', 'BitLocker', 'Windows Update', 'UAC'],
        answer: 0,
        why: 'Turning off **AutoRun/AutoPlay** stops malicious USB drives from launching code.',
      },
      {
        q: 'Which keyboard shortcut quickly locks a Windows PC?',
        choices: ['Windows + L', 'Ctrl + C', 'Alt + Tab', 'Windows + D'],
        answer: 0,
        why: '**Windows + L** locks the screen right away.',
      },
      {
        q: 'What makes a password strongest?',
        choices: [
          'Length plus complexity',
          'Using the user’s birthday',
          'Changing just one character each month',
          'A short dictionary word',
        ],
        answer: 0,
        why: '**Length** is the biggest factor, plus a mix of character types.',
      },
    ],
  },

  '1202-2.8': {
    cards: [
      {
        title: 'Locking the phone',
        bullets: [
          'Screen locks: **PIN**, **password**, **pattern**, **fingerprint**, or **face**.',
          '**Failed-attempt restrictions**: wipe the phone or lock it after too many wrong tries.',
          '**Remote wipe** and **locator apps** (Find My, Find My Device) for lost phones.',
          '**Device encryption** (on by default on modern phones).',
        ],
      },
      {
        title: 'Keeping it safe',
        bullets: [
          '**OS updates** and **app updates**.',
          '**Antivirus / anti-malware** on Android.',
          'Only install apps from **official stores**.',
          '**Remote backups** (iCloud, Google).',
          '**Firewalls** and **MDM policies** for work phones.',
          '**BYOD vs corporate-owned**: who controls the device and its data.',
        ],
        tip: 'Lost company phone? Remote wipe through MDM.',
      },
    ],
    questions: [
      {
        q: 'An employee loses a company phone with sensitive email on it. What should IT do?',
        choices: ['Remote wipe it', 'Change the Wi-Fi password', 'Update the router', 'Disable Bluetooth'],
        answer: 0,
        why: 'A **remote wipe** erases the data so nobody else can read it.',
      },
      {
        q: 'Which setting erases a phone after too many wrong passcode attempts?',
        choices: ['Failed login attempts restriction', 'Airplane mode', 'A hotspot', 'Screen brightness'],
        answer: 0,
        why: 'A **failed-attempt restriction** can wipe or lock the device after X wrong tries.',
      },
      {
        q: 'Which feature helps find a lost phone on a map?',
        choices: ['A locator app (Find My)', 'NFC', 'Tethering', 'An eSIM'],
        answer: 0,
        why: '**Locator apps** show the device location, and can also lock or wipe it.',
      },
      {
        q: 'What’s the safest place to install mobile apps from?',
        choices: [
          'The official app store',
          'A link in a text message',
          'A random website',
          'A file shared over Bluetooth',
        ],
        answer: 0,
        why: '**Official stores** screen apps. Sideloaded apps are a common malware source.',
      },
      {
        q: 'Which of these is a biometric screen lock?',
        choices: ['Fingerprint', 'PIN', 'Pattern', 'Password'],
        answer: 0,
        why: '**Fingerprint** and **face** are biometrics: something you are.',
      },
    ],
  },

  '1202-2.9': {
    cards: [
      {
        title: 'Physical destruction',
        bullets: [
          '**Shredding** and **drilling** drives, or **incineration**.',
          '**Degaussing**: a strong magnet erases **magnetic** hard drives. It **does NOT work on SSDs**.',
          '**Certificate of destruction**: proof from a third-party vendor that it was done.',
        ],
        tip: 'Degaussing works on spinning HDDs and tapes only, not SSDs or flash.',
      },
      {
        title: 'Wiping to reuse or donate',
        bullets: [
          '**Erasing / wiping**: overwrite the drive so data can’t be recovered.',
          '**Low-level format** (factory) vs **standard format**. A standard format **does not securely erase** data.',
          '**Secure erase** for SSDs uses the drive’s built-in command.',
          'Follow **regulatory** and **company** retention rules before destroying anything.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which method does NOT work on SSDs?',
        choices: ['Degaussing', 'Shredding', 'Incineration', 'Drilling'],
        answer: 0,
        why: 'SSDs store data in flash chips, not magnetically, so **degaussing** doesn’t erase them.',
      },
      {
        q: 'A company uses a vendor to destroy old drives. What should they get as proof?',
        choices: ['A certificate of destruction', 'A restore point', 'A software license', 'A DHCP reservation'],
        answer: 0,
        why: 'A **certificate of destruction** documents that the media was destroyed.',
      },
      {
        q: 'Old PCs will be donated to a school. What’s the right way to handle the drives?',
        choices: [
          'Securely wipe them with an overwrite tool',
          'A quick format',
          'Delete the user folders',
          'Empty the Recycle Bin',
        ],
        answer: 0,
        why: 'To **reuse** a drive, **securely wipe** it. Quick formats and deletes leave data recoverable.',
      },
      {
        q: 'Does a standard (quick) format securely remove data?',
        choices: [
          'No, the data can often be recovered',
          'Yes, it’s permanent',
          'Only on SSDs',
          'Only on FAT32',
        ],
        answer: 0,
        why: 'A quick format only clears the file table. Recovery tools can still find the data.',
      },
      {
        q: 'Which method destroys a magnetic hard drive’s data using a powerful magnet?',
        choices: ['Degaussing', 'Drilling', 'Secure erase', 'Encryption'],
        answer: 0,
        why: '**Degaussing** scrambles magnetic media.',
      },
    ],
  },

  '1202-2.10': {
    cards: [
      {
        title: 'Router and Wi-Fi settings',
        bullets: [
          'Change the **default admin username and password**.',
          'Use **WPA3** (or WPA2-AES) with a strong passphrase.',
          'Keep the **firmware updated**.',
          '**Disable WPS** (the push-button or PIN setup), because its PIN is easy to crack.',
          'Changing the **SSID** from the default helps a little. **Disabling SSID broadcast** hides it only weakly.',
        ],
        tip: 'WPS is weak, so turn it off.',
      },
      {
        title: 'Network controls',
        bullets: [
          '**Guest network** separate from the main one, and isolate **IoT** devices.',
          '**Firewall** rules, **port forwarding** only where needed, and **disable UPnP**.',
          '**Content filtering** to block bad sites.',
          '**Static IPs** for important devices. **DHCP reservations**.',
          'Turn down **radio power levels** so the signal doesn’t leak far outside the building.',
          'Physically secure the router (locked closet).',
        ],
      },
    ],
    questions: [
      {
        q: 'Which router feature should be disabled because its PIN can be easily brute-forced?',
        choices: ['WPS', 'WPA3', 'DHCP', 'NAT'],
        answer: 0,
        why: '**WPS** PINs are weak and can be cracked quickly.',
      },
      {
        q: 'Visitors to a small office need internet but shouldn’t reach office computers. What should be set up?',
        choices: ['A guest network', 'Port forwarding', 'UPnP', 'A DMZ'],
        answer: 0,
        why: 'A **guest network** gives internet access while isolating the main network.',
      },
      {
        q: 'The office Wi-Fi signal can be picked up from the parking lot. What can reduce this?',
        choices: [
          'Lower the access point’s transmit power',
          'Switch to WEP',
          'Turn on UPnP',
          'Use the default SSID',
        ],
        answer: 0,
        why: 'Lowering **radio power** keeps the signal mostly inside the building.',
      },
      {
        q: 'What’s the first thing to change on a new SOHO router?',
        choices: ['The default admin password', 'The DHCP range', 'The LED color', 'The time zone'],
        answer: 0,
        why: 'Default credentials are public, so **change them first**.',
      },
      {
        q: 'Smart thermostats and cameras should be placed where?',
        choices: [
          'On a separate network from the main computers',
          'In the DMZ',
          'On the same network as servers',
          'With UPnP enabled',
        ],
        answer: 0,
        why: '**IoT** devices are often poorly secured, so keep them **isolated**.',
      },
    ],
  },

  '1202-2.11': {
    cards: [
      {
        title: 'Safe browsing',
        bullets: [
          'Download the browser from the **official source**. Check **hashes** for downloads if they’re provided.',
          'Only install **trusted extensions and plug-ins**, and remove the ones you don’t use.',
          'Look for **HTTPS** and a valid **certificate**. Certificate warnings can mean an attack.',
          '**Password managers** built into or added to the browser.',
        ],
      },
      {
        title: 'Browser settings',
        bullets: [
          '**Pop-up blocker** and **ad blocker**.',
          '**Clear browsing data**: cache, cookies, and history. Clearing the cache fixes many weird page problems.',
          '**Private / incognito** browsing: doesn’t save local history, but it’s **not anonymous**.',
          '**Proxy** settings and **secure DNS**.',
          '**Sync** settings across devices, and **trusted / untrusted sites**.',
        ],
        tip: 'A website looks broken only for one user? Clear their browser cache.',
      },
    ],
    questions: [
      {
        q: 'A browser shows a certificate warning on a banking site. What should the user do?',
        choices: [
          'Not continue, and report it',
          'Click through the warning',
          'Turn off the firewall',
          'Use incognito mode instead',
        ],
        answer: 0,
        why: 'Certificate warnings can mean an **on-path attack** or a fake site, so don’t proceed.',
      },
      {
        q: 'A website displays incorrectly only on one PC. What’s a good first step?',
        choices: ['Clear the browser cache', 'Replace the NIC', 'Reinstall Windows', 'Change the IP'],
        answer: 0,
        why: 'Old cached files often cause display problems, so **clear the cache**.',
      },
      {
        q: 'What does private / incognito mode do?',
        choices: [
          'Doesn’t save local history or cookies after closing',
          'Hides you from your ISP',
          'Encrypts all your traffic',
          'Blocks all malware',
        ],
        answer: 0,
        why: 'Incognito only avoids **saving data locally**. It doesn’t make you anonymous.',
      },
      {
        q: 'A browser suddenly has a new toolbar and the homepage changed to an unknown search site. What should you check?',
        choices: [
          'Installed extensions, and remove unknown ones',
          'The monitor resolution',
          'DHCP settings',
          'The RAM',
        ],
        answer: 0,
        why: 'Malicious **extensions** often hijack homepages and search.',
      },
      {
        q: 'How can you verify that a downloaded browser installer hasn’t been tampered with?',
        choices: [
          'Compare its hash with the one on the official site',
          'Check the file name',
          'Look at the file icon',
          'Run it as admin',
        ],
        answer: 0,
        why: 'A matching **hash** proves the file is unchanged.',
      },
    ],
  },
}

export default lessons
