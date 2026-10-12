import type { Lesson } from './types'

// Core 2, Domain 4.0 Operational Procedures
const lessons: Record<string, Lesson> = {
  '1202-4.1': {
    cards: [
      {
        title: 'Ticketing',
        bullets: [
          'Every issue gets a **ticket**: user info, device, **category**, **severity**, **description**, steps taken, and resolution.',
          '**Escalation levels** (Tier 1, 2, 3) when the problem is beyond your level.',
          'Write **clear, concise notes** so the next tech can pick it up.',
          'A **knowledge base (KB)** stores articles on how known problems were fixed.',
        ],
        tip: 'Good ticket notes = the next person never has to ask the user the same question.',
      },
      {
        title: 'Documents and asset tracking',
        bullets: [
          '**Asset management**: an inventory of devices with **asset tags**, owners, warranty, and licenses.',
          '**Network diagrams**: maps of how the network connects.',
          '**SOPs** (Standard Operating Procedures): step-by-step instructions for common tasks.',
          '**Acceptable Use Policy (AUP)**: what users may and may not do.',
          '**Onboarding / offboarding checklists**: set up and remove access for staff.',
          '**SLAs** (Service Level Agreements): promised response and fix times.',
        ],
      },
    ],
    questions: [
      {
        q: 'Where should a technician look first for a known fix to a common problem?',
        choices: ['The knowledge base', 'The AUP', 'The network diagram', 'The SLA'],
        answer: 0,
        why: 'A **knowledge base** stores documented solutions to known issues.',
      },
      {
        q: 'A Tier 1 tech can’t solve a server problem. What should they do?',
        choices: [
          'Escalate the ticket with good notes',
          'Close the ticket',
          'Tell the user to wait',
          'Reinstall the server OS',
        ],
        answer: 0,
        why: '**Escalate**, with clear documentation of what was already tried.',
      },
      {
        q: 'Which document defines what users can and can’t do with company computers?',
        choices: ['Acceptable Use Policy', 'SLA', 'Network diagram', 'Asset tag'],
        answer: 0,
        why: 'The **AUP** sets the rules for using company IT resources.',
      },
      {
        q: 'Which document promises how quickly IT will respond to and resolve issues?',
        choices: ['SLA', 'SOP', 'AUP', 'KB article'],
        answer: 0,
        why: 'A **Service Level Agreement** defines response and resolution times.',
      },
      {
        q: 'An employee is leaving the company. Which checklist ensures all their access is removed?',
        choices: ['The offboarding checklist', 'The onboarding checklist', 'The network diagram', 'The AUP'],
        answer: 0,
        why: '**Offboarding** removes accounts, access, and returns equipment.',
      },
    ],
  },

  '1202-4.2': {
    cards: [
      {
        title: 'Change management steps',
        bullets: [
          'Fill out a **request form** with the **purpose** of the change and its **scope**.',
          'Write a **risk analysis** and a **rollback (backout) plan**.',
          'Test it in a **sandbox** first.',
          'Get it approved by the **Change Advisory Board (CAB)**.',
          'Make the change in a scheduled **maintenance window**, then document it.',
          'Get **end-user acceptance** and communicate the change.',
        ],
        tip: 'Every change needs a backout plan: “how do we undo this if it breaks?”',
      },
      {
        title: 'Why bother',
        bullets: [
          'Unplanned changes cause outages.',
          'Change management makes sure the people affected know, and there’s a way back.',
          '**Responsible staff member** and **date and time** of the change are recorded.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which group reviews and approves proposed IT changes?',
        choices: ['Change Advisory Board', 'Help desk', 'End users', 'The ISP'],
        answer: 0,
        why: 'The **CAB** reviews risk and approves changes.',
      },
      {
        q: 'Which part of a change request explains how to undo the change if it fails?',
        choices: ['Rollback (backout) plan', 'Scope', 'Purpose', 'Risk level'],
        answer: 0,
        why: 'The **rollback plan** describes how to revert.',
      },
      {
        q: 'Where should a change be tested before going live?',
        choices: ['A sandbox / test environment', 'Production', 'The CEO’s laptop', 'Nowhere'],
        answer: 0,
        why: 'Test in a **sandbox** so problems don’t hit real users.',
      },
      {
        q: 'When should a major server change usually be made?',
        choices: [
          'During a scheduled maintenance window',
          'Whenever the tech has time',
          'During peak business hours',
          'Without telling anyone',
        ],
        answer: 0,
        why: 'Changes go in a **maintenance window** when impact is lowest.',
      },
      {
        q: 'What should be done after the change is implemented?',
        choices: [
          'Document it and confirm users accept it',
          'Delete the request form',
          'Skip testing',
          'Disable backups',
        ],
        answer: 0,
        why: 'Finish with **documentation** and **end-user acceptance**.',
      },
    ],
  },

  '1202-4.3': {
    cards: [
      {
        title: 'Backup types',
        bullets: [
          '**Full**: everything. Slowest to back up, fastest to restore.',
          '**Incremental**: only changes since the **last backup of any type**. Fastest backup, slowest restore (you need the full + every incremental).',
          '**Differential**: changes since the **last full**. Restore needs the full + the latest differential.',
          '**Synthetic full**: builds a new full from the old full + incrementals.',
        ],
        tip: 'Incremental = since the last backup. Differential = since the last full.',
      },
      {
        title: 'Rotation and testing',
        bullets: [
          '**3-2-1 rule**: **3** copies of data, on **2** different types of media, with **1** offsite.',
          '**GFS (Grandfather-Father-Son)**: daily, weekly, and monthly backup rotation.',
          '**Test your backups** by doing real restores regularly.',
          'Onsite vs **offsite / cloud** storage. Offsite protects against fire and theft.',
        ],
        tip: 'A backup you’ve never test-restored is just a hope.',
      },
    ],
    questions: [
      {
        q: 'Which backup type copies only what changed since the last FULL backup?',
        choices: ['Differential', 'Incremental', 'Full', 'Synthetic'],
        answer: 0,
        why: '**Differential** = everything since the last **full** backup.',
      },
      {
        q: 'Which backup type is fastest to run each night but slowest to restore?',
        choices: ['Incremental', 'Full', 'Differential', 'Mirror'],
        answer: 0,
        why: '**Incremental** saves the least each time, but a restore needs every incremental in the chain.',
      },
      {
        q: 'What does the 3-2-1 backup rule say?',
        choices: [
          '3 copies, 2 media types, 1 offsite',
          '3 drives, 2 servers, 1 cloud',
          'Back up 3 times a day',
          '3 users, 2 admins, 1 manager',
        ],
        answer: 0,
        why: '**3 copies, on 2 different media, 1 offsite.**',
      },
      {
        q: 'How do you know backups actually work?',
        choices: ['Regularly test restoring them', 'Check the file size', 'Trust the software', 'Look at the logs once'],
        answer: 0,
        why: 'Only a successful **test restore** proves a backup is good.',
      },
      {
        q: 'Which rotation scheme uses daily, weekly, and monthly backup sets?',
        choices: ['Grandfather-Father-Son', '3-2-1', 'Synthetic full', 'RAID 1'],
        answer: 0,
        why: '**GFS**: son = daily, father = weekly, grandfather = monthly.',
      },
    ],
  },

  '1202-4.4': {
    cards: [
      {
        title: 'Protecting equipment',
        bullets: [
          '**ESD** (electrostatic discharge) damages parts. Use an **ESD strap** and **ESD mat**, and keep parts in **antistatic bags**.',
          '**Equipment grounding**: properly grounded outlets and racks.',
          'Disconnect power before working inside a device.',
        ],
      },
      {
        title: 'Protecting yourself',
        bullets: [
          '**Lift with your legs**, not your back. Get help with heavy items.',
          '**Electrical safety**: never open a **power supply** or CRT, because they hold dangerous charge.',
          '**Fire safety**: use a **Class C** extinguisher (CO₂) on electrical fires. **Never water.**',
          '**Safety goggles**, an **air filter mask** (toner, dust), and **gloves**.',
          'Follow **OSHA** and local **government regulations**.',
        ],
        tip: 'Electrical fire = Class C. Water on electrical = never.',
      },
      {
        title: 'Hazardous materials',
        bullets: [
          'The **SDS (Safety Data Sheet)** explains how to handle, store, and dispose of a chemical safely (toner, batteries, cleaners).',
          'Follow local rules for disposing of **batteries**, **toner**, and **electronics** (e-waste).',
        ],
        tip: 'Toner spill or a battery leak? Check the SDS.',
      },
    ],
    questions: [
      {
        q: 'Where do you find instructions for safely handling and disposing of a toner cartridge?',
        choices: ['The Safety Data Sheet (SDS)', 'The AUP', 'The SLA', 'The KB'],
        answer: 0,
        why: 'The **SDS** covers handling, hazards, and disposal for materials.',
      },
      {
        q: 'Which fire extinguisher class is for electrical fires?',
        choices: ['Class C', 'Class A', 'Class B', 'Class K'],
        answer: 0,
        why: '**Class C** extinguishers are for **electrical** fires.',
      },
      {
        q: 'What protects computer parts from static electricity while you work on them?',
        choices: ['An ESD strap and mat', 'Rubber gloves only', 'A surge protector', 'A UPS'],
        answer: 0,
        why: 'An **ESD strap and mat** keep you and the parts at the same electrical potential.',
      },
      {
        q: 'Should a technician open a power supply unit to repair it?',
        choices: [
          'No, it can hold a dangerous charge, so replace the PSU',
          'Yes, after unplugging it',
          'Yes, with an ESD strap',
          'Only if it’s modular',
        ],
        answer: 0,
        why: 'PSU capacitors can hold a **dangerous charge**. Replace, don’t repair.',
      },
      {
        q: 'What’s the safe way to lift a heavy server?',
        choices: [
          'Bend your knees, lift with your legs, and get help if needed',
          'Bend at the waist',
          'Lift it quickly',
          'Twist while lifting',
        ],
        answer: 0,
        why: '**Lift with your legs** and team-lift heavy gear.',
      },
    ],
  },

  '1202-4.5': {
    cards: [
      {
        title: 'Temperature, humidity, and air',
        bullets: [
          'Keep equipment cool with good **ventilation** and airflow.',
          '**Humidity**: too low means **static** (ESD). Too high means **condensation** and corrosion.',
          'Keep dust down. Use enclosures and filters in dirty areas.',
          'Follow the manufacturer’s **placement** guidance and **proper disposal** rules.',
        ],
      },
      {
        title: 'Power protection',
        bullets: [
          '**Surge suppressor**: protects against **spikes** (lightning, surges).',
          '**UPS (Uninterruptible Power Supply)**: a battery that keeps things running during an **outage** so you can shut down safely.',
          'Problems: **surge/spike** (too much), **sag/brownout** (too little), **blackout** (none).',
          'Good **power management** saves energy.',
        ],
        tip: 'Power keeps flickering off? UPS. Lightning storms? Surge suppressor.',
      },
    ],
    questions: [
      {
        q: 'A server must stay up for 10 minutes during a power cut so it can shut down safely. What does it need?',
        choices: ['A UPS', 'A surge suppressor', 'A power strip', 'A bigger PSU'],
        answer: 0,
        why: 'A **UPS** provides battery power during outages.',
      },
      {
        q: 'Very dry air in a server room increases the risk of what?',
        choices: ['Static electricity (ESD)', 'Condensation', 'Overheating', 'Brownouts'],
        answer: 0,
        why: '**Low humidity** makes static discharge much more likely.',
      },
      {
        q: 'What protects equipment from a sudden voltage spike?',
        choices: ['A surge suppressor', 'An ESD strap', 'Ventilation', 'A KVM'],
        answer: 0,
        why: 'A **surge suppressor** absorbs spikes.',
      },
      {
        q: 'What’s a brownout?',
        choices: ['A drop in voltage', 'A total power loss', 'A voltage spike', 'Electrical noise'],
        answer: 0,
        why: 'A **brownout / sag** is a dip in voltage.',
      },
      {
        q: 'Very humid air in a closet raises the risk of what?',
        choices: ['Condensation and corrosion', 'ESD', 'Faster CPUs', 'Better Wi-Fi'],
        answer: 0,
        why: '**High humidity** can cause condensation on equipment.',
      },
    ],
  },

  '1202-4.6': {
    cards: [
      {
        title: 'Incident response',
        bullets: [
          'Found illegal content or a policy violation? **Don’t touch it**. **Report** it through proper channels.',
          '**Preserve the evidence** and **document** what you saw.',
          '**Chain of custody**: record everyone who handles the evidence.',
          '**Legal hold**: don’t delete data that may be needed for a lawsuit.',
        ],
        tip: 'Found something illegal? Stop, report, preserve, document. Don’t investigate it yourself.',
      },
      {
        title: 'Licensing',
        bullets: [
          '**EULA**: the license agreement you accept.',
          '**Personal vs corporate** licenses, **per-seat / per-user**, **subscription** vs **perpetual**.',
          '**Open source** (free to view and modify, with conditions) vs **commercial**.',
          '**DRM**: digital rights management that controls copying.',
        ],
      },
      {
        title: 'Privacy and regulated data',
        bullets: [
          '**PII**: personally identifiable info (name, SSN, address).',
          '**PHI**: protected health info (covered by **HIPAA** in the US).',
          '**PCI DSS**: rules for credit card data.',
          '**GDPR**: EU privacy law.',
          '**Data retention** rules: how long you must keep data.',
        ],
      },
    ],
    questions: [
      {
        q: 'A tech finds illegal content on a user’s PC during a repair. What should they do first?',
        choices: [
          'Stop and report it through the proper channel',
          'Delete it',
          'Copy it to a USB drive',
          'Ask the user about it',
        ],
        answer: 0,
        why: '**Report** it and **preserve the evidence**. Don’t alter or spread it.',
      },
      {
        q: 'What documents everyone who has handled a piece of evidence?',
        choices: ['Chain of custody', 'EULA', 'SLA', 'SOP'],
        answer: 0,
        why: '**Chain of custody** tracks who had the evidence and when.',
      },
      {
        q: 'Which standard covers how businesses handle credit card data?',
        choices: ['PCI DSS', 'HIPAA', 'GDPR', 'EULA'],
        answer: 0,
        why: '**PCI DSS** is the payment card security standard.',
      },
      {
        q: 'Medical records are an example of what type of data?',
        choices: ['PHI', 'PCI', 'Open source', 'DRM'],
        answer: 0,
        why: '**PHI** (Protected Health Information) is regulated by HIPAA.',
      },
      {
        q: 'A software license lets the company install the app on 25 computers. What licensing model is this?',
        choices: ['Per-seat', 'Open source', 'Personal', 'Unlicensed'],
        answer: 0,
        why: '**Per-seat** licensing allows a set number of installs or users.',
      },
      {
        q: 'Legal tells IT not to delete any email from a certain employee because of a lawsuit. What is this?',
        choices: ['A legal hold', 'A retention policy expiration', 'DRM', 'An AUP'],
        answer: 0,
        why: 'A **legal hold** preserves data that may be evidence.',
      },
    ],
  },

  '1202-4.7': {
    cards: [
      {
        title: 'How to act with users',
        bullets: [
          '**Be on time**, and call ahead if you’ll be late.',
          '**Proper language**: no jargon, slang, or acronyms the user won’t know.',
          '**Active listening**: let them finish, take notes, don’t interrupt.',
          '**Positive attitude** and confidence. Project professionalism.',
          '**Clarify** by restating the problem in your own words and asking open-ended questions.',
        ],
      },
      {
        title: 'Things not to do',
        bullets: [
          '**Avoid distractions**: no personal calls, texting, or social media.',
          '**Don’t argue** or get defensive with difficult customers. **Don’t dismiss** their problem.',
          '**Respect privacy**: don’t look at their files, desk, or printer output.',
          '**Set and meet expectations**: timeline, options, and follow-up.',
          'Don’t post about customers on social media.',
        ],
        tip: 'Angry customer? Stay calm, listen, don’t argue, and focus on fixing it.',
      },
    ],
    questions: [
      {
        q: 'A customer is angry and yelling about a broken laptop. What should you do?',
        choices: [
          'Stay calm, listen, and avoid arguing',
          'Argue to correct them',
          'Hang up',
          'Tell them it’s their fault',
        ],
        answer: 0,
        why: 'Stay professional: **listen**, don’t argue or get defensive.',
      },
      {
        q: 'While fixing a PC at a user’s desk, you get a personal text. What should you do?',
        choices: [
          'Ignore it until you’re done',
          'Reply quickly',
          'Take a quick call',
          'Ask the user to wait',
        ],
        answer: 0,
        why: '**Avoid distractions** like personal calls and texts while with a customer.',
      },
      {
        q: 'Which is an example of active listening?',
        choices: [
          'Restating the problem back to confirm you understand',
          'Interrupting with your solution',
          'Checking your phone',
          'Using lots of acronyms',
        ],
        answer: 0,
        why: '**Restating and clarifying** shows you heard them and avoids mistakes.',
      },
      {
        q: 'You’re running 20 minutes late to an appointment. What should you do?',
        choices: [
          'Contact the customer and let them know',
          'Just show up late',
          'Skip it',
          'Send someone else without telling them',
        ],
        answer: 0,
        why: 'Being **on time** or **communicating delays** is basic professionalism.',
      },
      {
        q: 'A user’s confidential documents are on the printer next to their PC. What should you do?',
        choices: ['Leave them alone and respect their privacy', 'Read them', 'Throw them away', 'Photograph them'],
        answer: 0,
        why: '**Respect privacy**: don’t look at customers’ materials.',
      },
    ],
  },

  '1202-4.8': {
    cards: [
      {
        title: 'Script file types',
        bullets: [
          '`.bat`: Windows batch file. `.ps1`: **PowerShell**.',
          '`.vbs`: VBScript. `.sh`: Linux/macOS shell script.',
          '`.js`: JavaScript. `.py`: **Python**.',
        ],
        tip: 'Extension match-ups are an easy exam point: .ps1 = PowerShell, .sh = shell, .py = Python.',
      },
      {
        title: 'What scripts are used for',
        bullets: [
          '**Automating** repeated tasks: backups, restarts, installing apps, **mapping network drives**, gathering info, **remapping printers**.',
          '**Initiating updates**.',
          'Basics: **variables** (store values), **loops** (repeat), **conditions** (if/else), and **comments** (notes for humans).',
        ],
      },
      {
        title: 'Risks of scripts',
        bullets: [
          'A script can accidentally **introduce malware**, **change system settings**, or **crash** a system by using too many resources.',
          'Only run scripts from **trusted sources**, and **test** them first.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which file extension is a PowerShell script?',
        choices: ['.ps1', '.bat', '.sh', '.vbs'],
        answer: 0,
        why: '**.ps1** is PowerShell.',
      },
      {
        q: 'Which file extension is a Linux shell script?',
        choices: ['.sh', '.ps1', '.py', '.js'],
        answer: 0,
        why: '**.sh** is a shell script.',
      },
      {
        q: 'What is a good use of a script for a help desk?',
        choices: [
          'Automatically mapping network drives at login',
          'Replacing a hard drive',
          'Talking to angry customers',
          'Cleaning toner',
        ],
        answer: 0,
        why: 'Scripts **automate** repeated tasks like **drive mapping**.',
      },
      {
        q: 'In a script, what repeats an action multiple times?',
        choices: ['A loop', 'A comment', 'A variable', 'A file extension'],
        answer: 0,
        why: 'A **loop** repeats code.',
      },
      {
        q: 'What’s a risk of running a script you found online?',
        choices: [
          'It could introduce malware or change system settings',
          'It will always speed up the PC',
          'It can’t run without internet',
          'It deletes itself',
        ],
        answer: 0,
        why: 'Untrusted scripts can **introduce malware** or **break settings**. Test first.',
      },
    ],
  },

  '1202-4.9': {
    cards: [
      {
        title: 'Remote access tools',
        bullets: [
          '**RDP**: Windows Remote Desktop (port **3389**).',
          '**SSH**: secure command line (port **22**).',
          '**VPN**: an encrypted tunnel into the company network.',
          '**VNC**: screen sharing across operating systems.',
          '**Remote Monitoring and Management (RMM)**: IT tools to watch and fix many PCs.',
          '**Third-party screen sharing / desktop management** tools, plus file transfer tools.',
          '**Microsoft Remote Assistance (MSRA)** and **Quick Assist**: help a user who invites you.',
        ],
      },
      {
        title: 'Security',
        bullets: [
          'Use **MFA**, strong passwords, and limit who can connect.',
          'Don’t expose RDP directly to the internet. Use a **VPN** or **gateway** instead.',
          'Ask the **user’s permission** before taking control of their screen.',
          'Watch out for **tech support scams** using remote tools.',
        ],
        tip: 'RDP open to the internet is a classic attack target. Put it behind a VPN.',
      },
    ],
    questions: [
      {
        q: 'Which tool gives a secure, encrypted command line on a remote Linux server?',
        choices: ['SSH', 'RDP', 'VNC', 'Telnet'],
        answer: 0,
        why: '**SSH** provides an encrypted remote shell (port 22).',
      },
      {
        q: 'Remote employees need encrypted access to internal company resources. What should they use?',
        choices: ['VPN', 'FTP', 'Telnet', 'An open Wi-Fi network'],
        answer: 0,
        why: 'A **VPN** creates an encrypted tunnel into the company network.',
      },
      {
        q: 'An IT team wants to monitor and patch hundreds of computers from one dashboard. What should they use?',
        choices: ['RMM', 'VNC', 'Telnet', 'A KVM'],
        answer: 0,
        why: '**RMM** (Remote Monitoring and Management) manages many endpoints centrally.',
      },
      {
        q: 'What’s the safest way to give employees RDP access from home?',
        choices: [
          'Through a VPN with MFA',
          'Open port 3389 on the firewall',
          'Disable passwords',
          'Use Telnet instead',
        ],
        answer: 0,
        why: 'Put RDP **behind a VPN** (or gateway) and require **MFA**.',
      },
      {
        q: 'Before remotely controlling a user’s screen, what should you do?',
        choices: ['Ask for their permission', 'Nothing, just connect', 'Disable their antivirus', 'Change their password'],
        answer: 0,
        why: 'Professional practice: **get the user’s consent**.',
      },
    ],
  },

  '1202-4.10': {
    cards: [
      {
        title: 'AI basics',
        bullets: [
          '**AI** systems learn patterns from data to make predictions or generate content.',
          '**Generative AI / LLMs** (large language models) write text, code, and more from a **prompt**.',
          'Uses in IT: drafting documentation, summarizing tickets, writing scripts, answering questions.',
        ],
      },
      {
        title: 'Risks and responsible use',
        bullets: [
          '**Hallucinations**: AI can confidently give **wrong** answers. Always **verify** the output.',
          '**Data privacy**: don’t paste **sensitive or confidential** company or customer data into public AI tools.',
          '**Bias**: AI can reflect bias in its training data.',
          '**Appropriate use policies**: follow your company’s AI rules.',
          '**Private / enterprise AI** keeps company data in-house. **Public** AI may use inputs for training.',
          'Watch for **intellectual property** and **plagiarism** issues.',
        ],
        tip: 'Never put passwords, customer data, or confidential info into a public AI chatbot.',
      },
    ],
    questions: [
      {
        q: 'An AI tool gives a confident but completely wrong command. What is this called?',
        choices: ['A hallucination', 'A zero-day', 'Phishing', 'Bias'],
        answer: 0,
        why: 'AI making up false information is called a **hallucination**.',
      },
      {
        q: 'A tech wants to use a public AI chatbot to fix a script. What should they avoid pasting in?',
        choices: [
          'Passwords and confidential company data',
          'Generic error messages',
          'Public documentation',
          'Their question',
        ],
        answer: 0,
        why: 'Public AI tools may store inputs, so **never share sensitive data**.',
      },
      {
        q: 'What should you always do with AI-generated scripts or answers?',
        choices: ['Verify and test them', 'Run them right away in production', 'Share them publicly', 'Delete them'],
        answer: 0,
        why: 'AI can be wrong, so **verify** before relying on it.',
      },
      {
        q: 'Why might a company choose a private AI solution instead of a public one?',
        choices: [
          'To keep company data from leaving its control',
          'Because it’s always free',
          'To make answers less accurate',
          'To avoid all updates',
        ],
        answer: 0,
        why: '**Private AI** keeps sensitive data within the company.',
      },
      {
        q: 'An AI tool favors certain groups because of its training data. What is this?',
        choices: ['Bias', 'Hallucination', 'Encryption', 'Latency'],
        answer: 0,
        why: 'Skewed training data leads to **biased** outputs.',
      },
    ],
  },
}

export default lessons
