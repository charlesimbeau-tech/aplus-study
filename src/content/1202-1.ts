import type { Lesson } from './types'

// Core 2, Domain 1.0 Operating Systems
const lessons: Record<string, Lesson> = {
  '1202-1.1': {
    cards: [
      {
        title: 'Desktop and mobile OSes',
        bullets: [
          'Desktop: **Windows**, **macOS**, **Linux**, and **ChromeOS** (browser-focused, cloud-first).',
          'Mobile: **Android** (Google, open source base) and **iOS / iPadOS** (Apple).',
          'Every OS has an **end-of-life (EOL)** date. After that there are no security updates, so plan to upgrade.',
        ],
      },
      {
        title: 'File systems',
        bullets: [
          '**NTFS**: Windows default. Supports permissions, encryption, and large files.',
          '**FAT32**: works everywhere, but has a **4 GB max file size**.',
          '**exFAT**: for flash drives, works on Windows and Mac, with no 4 GB limit.',
          '**APFS**: macOS. **ext4**: Linux. **ReFS**: Windows resilient file system for servers.',
        ],
        tip: 'A 6 GB video won’t copy to a USB stick? It’s FAT32. Use exFAT.',
      },
    ],
    questions: [
      {
        q: 'A user can’t copy a 6 GB file to a USB drive that has plenty of free space. What’s the likely cause?',
        choices: ['The drive is FAT32', 'The drive is NTFS', 'The drive is exFAT', 'The file is encrypted'],
        answer: 0,
        why: '**FAT32** can’t store files bigger than **4 GB**. Reformat it as exFAT or NTFS.',
      },
      {
        q: 'Which file system is the default for modern macOS?',
        choices: ['NTFS', 'APFS', 'ext4', 'FAT32'],
        answer: 1,
        why: '**APFS** (Apple File System) is the macOS default.',
      },
      {
        q: 'What happens when an operating system reaches end-of-life?',
        choices: [
          'It stops booting',
          'It no longer gets security updates',
          'It becomes free',
          'It upgrades itself automatically',
        ],
        answer: 1,
        why: 'After **EOL**, the vendor stops releasing patches, so it gets riskier over time.',
      },
      {
        q: 'Which file system works well on a flash drive shared between Windows and Mac with large files?',
        choices: ['exFAT', 'ext4', 'APFS', 'FAT32'],
        answer: 0,
        why: '**exFAT** is supported by both and has no 4 GB file limit.',
      },
      {
        q: 'Which file system supports NTFS-style permissions on a Windows system drive?',
        choices: ['NTFS', 'FAT32', 'exFAT', 'CDFS'],
        answer: 0,
        why: '**NTFS** supports file permissions, encryption (EFS), and compression.',
      },
    ],
  },

  '1202-1.2': {
    cards: [
      {
        title: 'Ways to install',
        bullets: [
          'Boot from **USB**, **network (PXE)**, an **internal recovery partition**, or an **ISO** image.',
          '**Clean install**: wipe it and start fresh. **In-place upgrade**: keep apps and files.',
          '**Image deployment**: copy one prepared setup to many PCs.',
          '**Remote / zero-touch**: new PCs set themselves up from the cloud (like Windows Autopilot).',
        ],
        tip: 'PXE = boot from the network. Handy for imaging many PCs at once.',
      },
      {
        title: 'Partitions',
        bullets: [
          '**GPT**: modern, works with **UEFI**, supports huge drives and many partitions.',
          '**MBR**: older, max **2 TB** and 4 primary partitions.',
          'Formatting: **quick format** (fast, just clears the index) vs **full format** (checks for bad sectors).',
        ],
      },
      {
        title: 'Before upgrading',
        bullets: [
          'Check **hardware compatibility** and the minimum requirements (Windows 11 needs **TPM 2.0** and Secure Boot).',
          '**Back up** files first.',
          'Check that apps and drivers will still work.',
          'Make sure the **license** is valid.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which partition style is required for drives larger than 2 TB?',
        choices: ['MBR', 'GPT', 'FAT32', 'Dynamic'],
        answer: 1,
        why: '**GPT** supports drives far beyond MBR’s **2 TB** limit and is used with UEFI.',
      },
      {
        q: 'An admin wants to install Windows on 50 new PCs by booting them from the network. What’s used?',
        choices: ['PXE boot', 'A recovery partition', 'An in-place upgrade', 'BitLocker'],
        answer: 0,
        why: '**PXE** lets a PC boot and install over the network.',
      },
      {
        q: 'A user wants to move to a new Windows version but keep all their apps and files. What type of install?',
        choices: ['Clean install', 'In-place upgrade', 'Full format', 'PXE'],
        answer: 1,
        why: 'An **in-place upgrade** keeps apps, settings, and files.',
      },
      {
        q: 'An old PC fails the Windows 11 upgrade check. Which missing hardware is a common reason?',
        choices: ['TPM 2.0', 'A second monitor', 'An HDMI port', 'A DVD drive'],
        answer: 0,
        why: 'Windows 11 requires **TPM 2.0** (and Secure Boot / UEFI).',
      },
      {
        q: 'What should always happen before an OS upgrade?',
        choices: ['Back up the user’s data', 'Disable the firewall', 'Delete the recovery partition', 'Remove the RAM'],
        answer: 0,
        why: 'Upgrades can fail, so always **back up** first.',
      },
    ],
  },

  '1202-1.3': {
    cards: [
      {
        title: 'Windows editions',
        bullets: [
          '**Home**: for personal use. It **can’t join a domain** and has no BitLocker management or Group Policy editor.',
          '**Pro**: business features, including **domain join**, **BitLocker**, **Group Policy (gpedit)**, and **Remote Desktop host**.',
          '**Enterprise / Education**: everything in Pro plus advanced management, bought through volume licensing.',
        ],
        tip: 'Need to join the company domain or use BitLocker? Home won’t work. Upgrade to Pro.',
      },
      {
        title: 'Other differences',
        bullets: [
          'Home can **connect to** Remote Desktop but **can’t be** remotely controlled with RDP.',
          'RAM limits: Home supports up to 128 GB, Pro up to 2 TB.',
          'You can upgrade Home to Pro with a license key without reinstalling.',
          '**Workgroup**: peer computers with no central control. **Domain**: central control through Active Directory.',
        ],
      },
    ],
    questions: [
      {
        q: 'A user’s laptop with Windows Home can’t join the company domain. What’s the fix?',
        choices: ['Upgrade to Windows Pro', 'Update drivers', 'Turn on BitLocker', 'Change the DNS server'],
        answer: 0,
        why: '**Windows Home can’t join a domain.** Pro or higher is required.',
      },
      {
        q: 'Which Windows edition is the minimum to use the Group Policy Editor (gpedit.msc)?',
        choices: ['Home', 'Pro', 'S mode', 'Any edition'],
        answer: 1,
        why: '**gpedit** is available in **Pro**, Enterprise, and Education, but not Home.',
      },
      {
        q: 'Someone wants to remote into their Windows Home PC with RDP. What’s the problem?',
        choices: [
          'Home can’t act as an RDP host',
          'RDP needs a Mac',
          'Port 22 is blocked',
          'Home doesn’t have a firewall',
        ],
        answer: 0,
        why: 'Windows Home can **connect out** with RDP but **can’t be an RDP host**.',
      },
      {
        q: 'What is the difference between a workgroup and a domain?',
        choices: [
          'A domain has central management. A workgroup is peer to peer',
          'A workgroup is always bigger',
          'Domains are only for home networks',
          'There is no difference',
        ],
        answer: 0,
        why: 'A **domain** is managed centrally (Active Directory). A **workgroup** has each PC managing itself.',
      },
      {
        q: 'Which feature, used to encrypt the whole drive, is NOT fully available on Windows Home?',
        choices: ['BitLocker', 'Windows Update', 'Task Manager', 'File Explorer'],
        answer: 0,
        why: 'Full **BitLocker** management requires Pro or higher. Home only has simpler device encryption.',
      },
    ],
  },

  '1202-1.4': {
    cards: [
      {
        title: 'Task Manager',
        bullets: [
          '**Ctrl + Shift + Esc** opens it directly.',
          '**Processes**: see what’s using CPU, memory, disk, and network, and **end** frozen apps.',
          '**Performance**: live graphs. **Startup apps**: turn off programs that slow down boot.',
          '**Services** and **Users** tabs too.',
        ],
        tip: 'Slow boot? Turn things off in the Task Manager Startup tab.',
      },
      {
        title: 'MMC tools (the .msc ones)',
        bullets: [
          '**Event Viewer** (`eventvwr.msc`): logs of errors and warnings.',
          '**Disk Management** (`diskmgmt.msc`): partition, format, and assign drive letters.',
          '**Device Manager** (`devmgmt.msc`): drivers and hardware status.',
          '**Services** (`services.msc`): start, stop, and set services to automatic.',
          '**Task Scheduler** (`taskschd.msc`), **Local Users and Groups** (`lusrmgr.msc`), **Group Policy** (`gpedit.msc`), **Certificate Manager** (`certmgr.msc`).',
        ],
      },
      {
        title: 'Other tools',
        bullets: [
          '**System Information** (`msinfo32`): full hardware and software summary.',
          '**Resource Monitor** (`resmon`): detailed live resource usage.',
          '**System Configuration** (`msconfig`): boot options like **Safe Mode**.',
          '**Disk Cleanup** (`cleanmgr`) and **Defragment / Optimize Drives** (`dfrgui`).',
          '**Registry Editor** (`regedit`): edit settings directly. **Back it up first.**',
        ],
        tip: 'Need to boot into Safe Mode from inside Windows? msconfig, Boot tab.',
      },
    ],
    questions: [
      {
        q: 'Which tool shows a log of system errors and application crashes?',
        choices: ['Event Viewer', 'Disk Management', 'Task Scheduler', 'Device Manager'],
        answer: 0,
        why: '**Event Viewer** records system, application, and security events.',
      },
      {
        q: 'A device shows a yellow warning icon. Where would you see that and update its driver?',
        choices: ['Device Manager', 'Event Viewer', 'msconfig', 'Disk Cleanup'],
        answer: 0,
        why: '**Device Manager** shows hardware status and lets you update or roll back drivers.',
      },
      {
        q: 'A new drive was installed but doesn’t show in File Explorer. Where do you initialize and format it?',
        choices: ['Disk Management', 'Task Manager', 'regedit', 'Services'],
        answer: 0,
        why: '**Disk Management** initializes, partitions, formats, and assigns letters to drives.',
      },
      {
        q: 'What is the quickest keyboard shortcut to open Task Manager?',
        choices: ['Ctrl + Shift + Esc', 'Ctrl + Alt + T', 'Windows + R', 'Alt + F4'],
        answer: 0,
        why: '**Ctrl + Shift + Esc** opens Task Manager directly.',
      },
      {
        q: 'Which tool lets you set Windows to boot into Safe Mode next time?',
        choices: ['msconfig', 'msinfo32', 'cleanmgr', 'certmgr.msc'],
        answer: 0,
        why: '**msconfig** (System Configuration) has Safe Boot options on its Boot tab.',
      },
      {
        q: 'What should you do before editing the registry?',
        choices: ['Back up the registry', 'Disable the firewall', 'Run chkdsk', 'Uninstall antivirus'],
        answer: 0,
        why: 'Registry mistakes can stop Windows from working, so **back it up first**.',
      },
    ],
  },

  '1202-1.5': {
    cards: [
      {
        title: 'Navigating',
        bullets: [
          '`cd`: change directory. `dir`: list files. `md` / `mkdir`: make a folder. `rmdir`: remove a folder.',
          'Drive letters: type `D:` to switch drives.',
          '`[command] /?` shows help for any command.',
        ],
      },
      {
        title: 'Files and disks',
        bullets: [
          '`copy`, `xcopy`, and `robocopy` (the most powerful, best for big or resumed copies).',
          '`chkdsk`: check the disk (`/f` fixes errors, `/r` finds bad sectors).',
          '`format`: format a drive. `diskpart`: manage partitions from the command line.',
          '`sfc /scannow`: **System File Checker** repairs corrupted Windows files.',
          '`dism`: repairs the Windows image (try it if sfc can’t fix things).',
        ],
        tip: 'Windows files corrupted? Run sfc /scannow (as admin).',
      },
      {
        title: 'Network commands',
        bullets: [
          '`ipconfig` (`/all`, `/release`, `/renew`, `/flushdns`).',
          '`ping`, `tracert`, `pathping`, `nslookup`, `netstat`.',
          '`net use`: map a network drive. `net user`: manage user accounts.',
          '`hostname`: show the PC name.',
        ],
      },
      {
        title: 'Policy and system',
        bullets: [
          '`gpupdate /force`: apply new Group Policy right now.',
          '`gpresult /r`: show which policies are applied.',
          '`shutdown /r /t 0`: restart immediately.',
          '`winver`: show the Windows version.',
          '`whoami`: show the logged-in user.',
        ],
        tip: 'You changed a Group Policy and it isn’t applying yet? gpupdate /force.',
      },
    ],
    questions: [
      {
        q: 'Which command repairs corrupted Windows system files?',
        choices: ['sfc /scannow', 'chkdsk /f', 'gpupdate /force', 'ipconfig /renew'],
        answer: 0,
        why: '**sfc /scannow** checks and repairs protected Windows system files.',
      },
      {
        q: 'An admin just changed a Group Policy and wants it applied to a PC immediately. Which command?',
        choices: ['gpupdate /force', 'gpresult /r', 'sfc /scannow', 'net use'],
        answer: 0,
        why: '**gpupdate /force** re-applies all policies right away.',
      },
      {
        q: 'Which command maps a network share to a drive letter?',
        choices: ['net use', 'netstat', 'nslookup', 'diskpart'],
        answer: 0,
        why: '`net use Z: \\\\server\\share` maps a drive.',
      },
      {
        q: 'Which command is best for copying a huge folder and can resume if interrupted?',
        choices: ['robocopy', 'copy', 'move', 'md'],
        answer: 0,
        why: '**robocopy** (robust copy) handles large jobs, retries, and mirroring.',
      },
      {
        q: 'Which command shows which Group Policies are applied to a user?',
        choices: ['gpresult /r', 'gpupdate', 'whoami', 'winver'],
        answer: 0,
        why: '**gpresult /r** lists applied policies.',
      },
      {
        q: 'How do you get help on a Windows command, like xcopy?',
        choices: ['xcopy /?', 'help --xcopy', 'man xcopy', 'xcopy -help-me'],
        answer: 0,
        why: 'Adding `/?` shows a command’s help in Windows. (`man` is Linux.)',
      },
    ],
  },

  '1202-1.6': {
    cards: [
      {
        title: 'Settings app and Control Panel',
        bullets: [
          'The **Settings** app is the modern place for most things. The **Control Panel** still has older tools.',
          '**System**: display, sound, notifications, power, storage, and about this PC.',
          '**Apps**: uninstall programs and choose **default apps**.',
          '**Accounts**: add users, sign-in options (PIN, Windows Hello), and work or school accounts.',
        ],
      },
      {
        title: 'Settings you’ll get asked about',
        bullets: [
          '**Power options**: sleep, hibernate, **fast startup**, and what the lid or power button does.',
          '**File Explorer options**: **show hidden files** and **file extensions**.',
          '**Ease of Access / Accessibility**: magnifier, narrator, high contrast, captions.',
          '**Privacy**: camera, microphone, and location permissions per app.',
          '**Windows Update** and **Time & Language**.',
          '**Device / Hardware and Sound**: printers, Bluetooth, and devices.',
        ],
        tip: 'Need to see a hidden folder like AppData? File Explorer options, then show hidden files.',
      },
      {
        title: 'Sleep vs hibernate',
        bullets: [
          '**Sleep**: keeps the session in RAM using a little power, and wakes fast.',
          '**Hibernate**: saves the session to disk and powers off fully. It uses no power and is slower to resume.',
          '**Fast startup** is a partial hibernate. Turn it off if a full shutdown is needed for troubleshooting.',
        ],
      },
    ],
    questions: [
      {
        q: 'A user can’t see the AppData folder in their profile. What should they enable?',
        choices: ['Show hidden files', 'Fast startup', 'Narrator', 'BitLocker'],
        answer: 0,
        why: '**AppData is hidden** by default. Turn on hidden items in File Explorer options.',
      },
      {
        q: 'Which power state saves everything to disk and uses no power?',
        choices: ['Sleep', 'Hibernate', 'Screen off', 'Modern standby'],
        answer: 1,
        why: '**Hibernate** writes memory to disk, then fully powers off.',
      },
      {
        q: 'A user with low vision needs the screen enlarged. Which settings area helps?',
        choices: ['Accessibility (Ease of Access)', 'Privacy', 'Windows Update', 'Power options'],
        answer: 0,
        why: '**Accessibility** has Magnifier, text sizing, high contrast, and Narrator.',
      },
      {
        q: 'Where can a user stop one app from using the webcam?',
        choices: ['Privacy settings', 'Device Manager', 'Power options', 'Disk Management'],
        answer: 0,
        why: '**Privacy** settings control camera, microphone, and location access per app.',
      },
      {
        q: 'A user wants PDFs to always open in a specific app. Where do they change that?',
        choices: ['Apps, then Default apps', 'System, then Display', 'Accounts', 'Network & internet'],
        answer: 0,
        why: '**Default apps** controls which app opens each file type.',
      },
    ],
  },

  '1202-1.7': {
    cards: [
      {
        title: 'Network basics in Windows',
        bullets: [
          '**Public** network profile: hides your PC (coffee shop). **Private**: allows discovery and sharing (home or office).',
          'Set a **static IP** in the adapter’s IPv4 properties: IP, subnet mask, **gateway**, and **DNS**.',
          '**Windows Defender Firewall**: allow or block apps and ports for each profile.',
        ],
        tip: 'Can’t see other PCs to share files? The network is probably set to Public.',
      },
      {
        title: 'Sharing and domains',
        bullets: [
          '**File and printer sharing**, plus **mapping drives** (`net use` or File Explorer).',
          '**Domain join** (Pro and up) vs **workgroup**.',
          '**Proxy settings**: route web traffic through a proxy server.',
          '**VPN** connections in Settings.',
          '**Metered connection**: limits background data use.',
        ],
      },
    ],
    questions: [
      {
        q: 'A laptop at home can’t see other PCs on the network or share files. What’s a likely cause?',
        choices: [
          'The network profile is set to Public',
          'The display driver is old',
          'BitLocker is on',
          'Hibernate is on',
        ],
        answer: 0,
        why: 'The **Public** profile hides the PC and blocks discovery. Switch to **Private** on trusted networks.',
      },
      {
        q: 'When setting a static IP, which other settings are needed to reach the internet?',
        choices: [
          'Subnet mask, default gateway, and DNS server',
          'MAC address only',
          'Printer name',
          'Proxy and BitLocker key',
        ],
        answer: 0,
        why: 'A static setup needs **IP, subnet mask, gateway, and DNS**.',
      },
      {
        q: 'An app can’t accept incoming connections on a Windows PC. Where do you allow it?',
        choices: ['Windows Defender Firewall', 'Task Scheduler', 'Disk Management', 'Device Manager'],
        answer: 0,
        why: 'Create an allow rule in **Windows Defender Firewall**.',
      },
      {
        q: 'A user on a limited mobile hotspot wants Windows to use less background data. What should they set?',
        choices: ['Metered connection', 'Static IP', 'Private profile', 'Proxy'],
        answer: 0,
        why: 'A **metered connection** tells Windows to hold off on big background downloads.',
      },
      {
        q: 'A company routes all web traffic through a filtering server. Which Windows setting points the PC at it?',
        choices: ['Proxy settings', 'Default apps', 'Power options', 'Narrator'],
        answer: 0,
        why: '**Proxy** settings send web requests through a proxy server.',
      },
    ],
  },

  '1202-1.8': {
    cards: [
      {
        title: 'Finding your way around macOS',
        bullets: [
          '**Finder**: the file manager. **Dock**: app launcher at the bottom.',
          '**Spotlight** (Cmd + Space): search anything.',
          '**Mission Control**: see all windows and desktops.',
          '**System Settings** (formerly System Preferences): all settings.',
          '**Force Quit** (Cmd + Option + Esc): close a frozen app.',
        ],
      },
      {
        title: 'Built-in tools',
        bullets: [
          '**Time Machine**: automatic **backups** to an external drive.',
          '**Disk Utility**: repair (**First Aid**), erase, and partition drives.',
          '**FileVault**: full-disk **encryption**.',
          '**Keychain**: stores passwords and certificates.',
          '**Terminal**: the command line.',
          '**iCloud**: syncs files, photos, and passwords.',
        ],
        tip: 'Mac backups = Time Machine. Mac encryption = FileVault.',
      },
      {
        title: 'Apps and updates',
        bullets: [
          'Apps install from the **App Store** or as **.dmg** (drag to Applications) or **.pkg** (installer) files.',
          '**Gatekeeper** blocks apps from unknown developers.',
          'Updates come through **Software Update** in System Settings.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which built-in macOS tool makes automatic backups?',
        choices: ['Time Machine', 'FileVault', 'Spotlight', 'Keychain'],
        answer: 0,
        why: '**Time Machine** backs up a Mac to an external or network drive.',
      },
      {
        q: 'Which macOS feature encrypts the entire drive?',
        choices: ['FileVault', 'Gatekeeper', 'Disk Utility', 'Mission Control'],
        answer: 0,
        why: '**FileVault** is macOS full-disk encryption.',
      },
      {
        q: 'How do you force quit a frozen app on a Mac?',
        choices: ['Cmd + Option + Esc', 'Ctrl + Alt + Del', 'Cmd + Space', 'Cmd + Tab'],
        answer: 0,
        why: '**Cmd + Option + Esc** opens the Force Quit window.',
      },
      {
        q: 'A Mac’s drive is having errors. Which tool runs First Aid on it?',
        choices: ['Disk Utility', 'Time Machine', 'Finder', 'Keychain'],
        answer: 0,
        why: '**Disk Utility** has **First Aid** to check and repair disks.',
      },
      {
        q: 'Where does macOS store saved passwords and certificates?',
        choices: ['Keychain', 'Spotlight', 'Dock', 'Terminal'],
        answer: 0,
        why: '**Keychain Access** stores passwords, keys, and certificates.',
      },
      {
        q: 'You download an app as a .dmg file. How do you usually install it?',
        choices: [
          'Open it and drag the app into the Applications folder',
          'Run it from Terminal with sudo',
          'Copy it to the Desktop only',
          'Open it in Time Machine',
        ],
        answer: 0,
        why: 'A **.dmg** is a disk image. You drag the app to **Applications**.',
      },
    ],
  },

  '1202-1.9': {
    cards: [
      {
        title: 'Moving around and files',
        bullets: [
          '`ls`: list files. `cd`: change directory. `pwd`: show the current folder.',
          '`cp`: copy. `mv`: move or rename. `rm`: delete. `mkdir`: make a folder.',
          '`cat`: show a file. `nano` / `vi`: edit text files.',
          '`find` and `grep`: search for files and for text inside files.',
          '`man [command]`: the manual for any command.',
        ],
      },
      {
        title: 'Permissions and admin',
        bullets: [
          '`sudo`: run a command as admin (root). `su`: switch user.',
          '`chmod`: change permissions (read, write, execute). `chown`: change the owner.',
          'Permission numbers: **r=4, w=2, x=1**. So `755` means owner rwx, others r-x.',
          '`passwd`: change a password.',
        ],
        tip: '“Permission denied” when installing? Add sudo in front.',
      },
      {
        title: 'Software and system',
        bullets: [
          'Package managers: `apt` (Debian/Ubuntu) and `dnf` / `yum` (Red Hat/Fedora).',
          '`ps` and `top`: see running processes. `kill`: stop one.',
          '`df`: disk free space. `du`: how big folders are.',
          '`ip` / `ifconfig`: network settings. `ping`, `dig`, and `curl` also help.',
          'Important files: `/etc/passwd` (users), `/etc/shadow` (password hashes), `/etc/hosts`, `/etc/fstab` (mounts).',
        ],
      },
    ],
    questions: [
      {
        q: 'Which Linux command runs another command with administrator (root) rights?',
        choices: ['sudo', 'chmod', 'pwd', 'grep'],
        answer: 0,
        why: '**sudo** runs one command with elevated rights.',
      },
      {
        q: 'Which command changes a file’s permissions in Linux?',
        choices: ['chmod', 'chown', 'ls', 'mv'],
        answer: 0,
        why: '**chmod** changes read/write/execute permissions. **chown** changes the owner.',
      },
      {
        q: 'Which command installs software on Ubuntu?',
        choices: ['apt install', 'dnf install', 'msiexec', 'brew cask'],
        answer: 0,
        why: 'Ubuntu (Debian-based) uses **apt**.',
      },
      {
        q: 'You need to find every line containing “error” in a log file. Which command?',
        choices: ['grep', 'find', 'cat', 'ps'],
        answer: 0,
        why: '**grep** searches for text inside files.',
      },
      {
        q: 'Which command shows how much free space is on each mounted drive?',
        choices: ['df', 'du', 'top', 'ls'],
        answer: 0,
        why: '**df** (disk free) shows space per file system. **du** shows how much space folders use.',
      },
      {
        q: 'What does chmod 755 give the file owner?',
        choices: ['Read, write, and execute', 'Read only', 'Write only', 'No access'],
        answer: 0,
        why: '7 = 4 + 2 + 1 = **read + write + execute** for the owner.',
      },
    ],
  },

  '1202-1.10': {
    cards: [
      {
        title: 'Check before installing',
        bullets: [
          'Does the PC meet the **system requirements**: CPU, **RAM**, storage space, and graphics?',
          '**32-bit vs 64-bit**: a 64-bit app needs a 64-bit OS.',
          'Is the OS version supported? Any **dependencies** (like .NET or Visual C++ runtimes)?',
          'Check the **license** and where the software comes from (trusted sources only).',
        ],
        tip: 'A 64-bit app won’t install on a 32-bit OS. That’s a common exam scenario.',
      },
      {
        title: 'How apps get installed',
        bullets: [
          'Local installers: **.exe** and **.msi** on Windows.',
          'App stores: Microsoft Store, Mac App Store.',
          'Network installs pushed by IT (Group Policy, Intune, SCCM).',
          'Think about **impact**: on the device, the network (big downloads), operations (training, downtime), and the business.',
        ],
      },
    ],
    questions: [
      {
        q: 'A 64-bit application won’t install on a user’s computer. What’s a likely reason?',
        choices: ['The OS is 32-bit', 'The monitor is too small', 'The PC is on Wi-Fi', 'BitLocker is enabled'],
        answer: 0,
        why: '**64-bit apps need a 64-bit OS.**',
      },
      {
        q: 'Before installing new design software, what should you check?',
        choices: [
          'That RAM, storage, GPU, and OS meet the requirements',
          'The printer toner',
          'The DNS server',
          'The Wi-Fi channel',
        ],
        answer: 0,
        why: 'Always confirm the **system requirements** first.',
      },
      {
        q: 'An app installer fails, saying a Visual C++ runtime is missing. What is this an example of?',
        choices: ['A missing dependency', 'A licensing issue', 'A driver conflict', 'A RAID failure'],
        answer: 0,
        why: 'Many apps need **dependencies** like runtimes or frameworks installed first.',
      },
      {
        q: 'Which Windows installer file type is designed for managed, silent installs pushed by IT?',
        choices: ['.msi', '.dmg', '.apk', '.deb'],
        answer: 0,
        why: '**.msi** packages are built for managed and silent Windows deployment.',
      },
      {
        q: 'A 4 GB app will be installed on 300 PCs at once over the office network. What impact should be considered?',
        choices: [
          'Network bandwidth during the rollout',
          'Monitor brightness',
          'The printer queue',
          'The CMOS battery',
        ],
        answer: 0,
        why: 'Big rollouts affect the **network**, so schedule them or stagger them.',
      },
    ],
  },
}

export default lessons
