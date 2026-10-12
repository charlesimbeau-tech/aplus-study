import type { Lesson } from './types'

// Core 1, Domain 2.0 Networking
const lessons: Record<string, Lesson> = {
  '1201-2.1': {
    cards: [
      {
        title: 'TCP vs UDP',
        bullets: [
          '**TCP** is **connection-oriented**: it sets up a session (the 3-way handshake), confirms delivery, and resends lost data. It’s reliable but slower.',
          '**UDP** is **connectionless**: it just sends, with no guarantees. It’s fast and good for streaming, gaming, voice, DNS lookups, and DHCP.',
        ],
        tip: 'TCP is like a phone call (“did you get that?”). UDP is like shouting across a room.',
      },
      {
        title: 'File and remote ports',
        bullets: [
          '**20/21 FTP**: file transfer (21 = control, 20 = data).',
          '**22 SSH**: secure remote command line (also used by SFTP).',
          '**23 Telnet**: old, **unencrypted** remote command line. Avoid it.',
          '**3389 RDP**: Windows Remote Desktop.',
        ],
        tip: '21, 22, 23 count up: FTP, SSH, Telnet.',
      },
      {
        title: 'Email ports',
        bullets: [
          '**25 SMTP**: sending mail.',
          '**110 POP3**: downloads mail to one device.',
          '**143 IMAP**: keeps mail synced on the server across devices.',
        ],
        tip: 'IMAP syncs everywhere. POP3 pulls it down to one place.',
      },
      {
        title: 'Web and network service ports',
        bullets: [
          '**53 DNS**: names to IP addresses.',
          '**67/68 DHCP**: hands out IP addresses automatically.',
          '**80 HTTP**: web, unencrypted. **443 HTTPS**: web, encrypted.',
          '**161/162 SNMP**: monitoring network devices.',
        ],
      },
      {
        title: 'Windows and directory ports',
        bullets: [
          '**137–139 NetBIOS** and **445 SMB**: Windows file and printer sharing.',
          '**389 LDAP**: directory lookups (like Active Directory).',
          '**88 Kerberos** is the Windows domain login protocol (good to know).',
        ],
        tip: 'Can’t reach a shared folder? Port 445 (SMB) might be blocked.',
      },
    ],
    questions: [
      {
        q: 'Which port does HTTPS use?',
        choices: ['80', '443', '8080', '22'],
        answer: 1,
        why: '**443** is HTTPS (encrypted web). 80 is plain HTTP.',
      },
      {
        q: 'Which protocol is best for live video streaming where speed matters more than perfect delivery?',
        choices: ['TCP', 'UDP', 'SMTP', 'FTP'],
        answer: 1,
        why: '**UDP** skips the handshakes and resends, so it’s faster. A dropped frame here and there is fine for live video.',
      },
      {
        q: 'An admin needs a secure, encrypted command-line session to a Linux server. Which port?',
        choices: ['23', '22', '3389', '21'],
        answer: 1,
        why: '**SSH on port 22** is encrypted. Telnet (23) sends everything, including passwords, in plain text.',
      },
      {
        q: 'A user wants their email to stay in sync on their phone, laptop, and tablet. Which protocol fits?',
        choices: ['POP3', 'IMAP', 'SMTP', 'SNMP'],
        answer: 1,
        why: '**IMAP (143)** keeps mail on the server so every device sees the same inbox.',
      },
      {
        q: 'Which port does Windows Remote Desktop use?',
        choices: ['3389', '445', '389', '53'],
        answer: 0,
        why: '**RDP is 3389**. 445 is SMB file sharing and 389 is LDAP.',
      },
      {
        q: 'Which service turns a name like google.com into an IP address, and on what port?',
        choices: ['DHCP on 67', 'DNS on 53', 'LDAP on 389', 'SNMP on 161'],
        answer: 1,
        why: '**DNS (port 53)** resolves names to IP addresses.',
      },
      {
        q: 'Users can’t open shared folders on a Windows file server. Which port is most likely being blocked?',
        choices: ['443', '445', '25', '110'],
        answer: 1,
        why: '**SMB uses 445** for Windows file and printer sharing.',
      },
    ],
  },

  '1201-2.2': {
    cards: [
      {
        title: 'Wi-Fi bands',
        bullets: [
          '**2.4 GHz**: longer range and goes through walls better, but slower and crowded (microwaves, Bluetooth).',
          '**5 GHz**: faster, less interference, shorter range.',
          '**6 GHz** (Wi-Fi 6E/7): even more space and speed, shortest range.',
        ],
        tip: 'Lower frequency = longer reach. Higher frequency = more speed.',
      },
      {
        title: 'Channels',
        bullets: [
          'On 2.4 GHz, only channels **1, 6, and 11** don’t overlap (in the US).',
          'Neighboring networks on overlapping channels cause **interference**.',
          '5 GHz has many more non-overlapping channels, and **channel bonding** combines them for more speed.',
        ],
        tip: '1, 6, 11. Memorize it.',
      },
      {
        title: 'Wi-Fi standards',
        bullets: [
          '**802.11a**: 5 GHz. **802.11b/g**: 2.4 GHz (older).',
          '**802.11n (Wi-Fi 4)**: 2.4 and 5 GHz, added MIMO (multiple antennas).',
          '**802.11ac (Wi-Fi 5)**: 5 GHz only.',
          '**802.11ax (Wi-Fi 6/6E)**: 2.4, 5, and 6 GHz (6E). **802.11be (Wi-Fi 7)** is the newest.',
        ],
      },
      {
        title: 'Other wireless tech',
        bullets: [
          '**Bluetooth**: short-range personal devices.',
          '**NFC**: a few centimeters, tap to pay or pair.',
          '**RFID**: tags read by radio, used for badges and inventory tracking.',
          'Long-range fixed wireless links buildings together with directional antennas.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which 2.4 GHz channels don’t overlap with each other?',
        choices: ['1, 5, 9', '1, 6, 11', '2, 7, 12', '3, 6, 9'],
        answer: 1,
        why: 'On 2.4 GHz only **1, 6, and 11** are non-overlapping in the US.',
      },
      {
        q: 'A user far from the router, with several walls in between, gets a weak 5 GHz signal. What may help?',
        choices: ['Switch to the 2.4 GHz band', 'Switch to 6 GHz', 'Turn off DHCP', 'Use NFC'],
        answer: 0,
        why: '**2.4 GHz** has longer range and gets through walls better, at the cost of speed.',
      },
      {
        q: 'Which Wi-Fi standard is also called Wi-Fi 6?',
        choices: ['802.11n', '802.11ac', '802.11ax', '802.11g'],
        answer: 2,
        why: '**802.11ax** is Wi-Fi 6 (and 6E on 6 GHz). 802.11ac is Wi-Fi 5 and 802.11n is Wi-Fi 4.',
      },
      {
        q: 'Which Wi-Fi standard works ONLY on 5 GHz?',
        choices: ['802.11n', '802.11ac', '802.11b', '802.11ax'],
        answer: 1,
        why: '**802.11ac (Wi-Fi 5)** is 5 GHz only. 802.11n and ax work on more than one band.',
      },
      {
        q: 'An office uses badges that are read when held near a door reader. What technology is this most likely?',
        choices: ['RFID', 'Bluetooth', '5 GHz Wi-Fi', 'Cellular'],
        answer: 0,
        why: '**RFID** tags are read by radio over short distances. That makes them common for badges and inventory.',
      },
    ],
  },

  '1201-2.3': {
    cards: [
      {
        title: 'Server roles',
        bullets: [
          '**DNS server**: turns names into IP addresses.',
          '**DHCP server**: hands out IP addresses automatically.',
          '**File server**: stores shared files. **Print server**: manages shared printers.',
          '**Mail server**: sends and receives email. **Web server**: hosts websites.',
          '**Syslog server**: collects logs from many devices in one place.',
          '**AAA server** (Authentication, Authorization, Accounting): checks logins, like **RADIUS** or **TACACS+**.',
        ],
      },
      {
        title: 'Internet appliances',
        bullets: [
          '**Spam gateway**: filters junk email before it reaches users.',
          '**UTM (Unified Threat Management)**: one box doing firewall, antivirus, content filtering, and IDS/IPS.',
          '**Load balancer**: spreads traffic across several servers.',
          '**Proxy server**: makes requests on behalf of clients, which can filter and cache web traffic.',
        ],
      },
      {
        title: 'Legacy and embedded systems',
        bullets: [
          '**SCADA / ICS**: systems that control industrial equipment (power plants, factories).',
          '**Embedded systems**: computers built into devices that often can’t be easily updated.',
          '**Legacy systems**: old but still needed. They’re often isolated from the network for safety.',
          '**IoT** (Internet of Things): smart devices like thermostats, cameras, and speakers.',
        ],
        tip: 'Old or IoT devices that can’t be patched should go on their own isolated network segment.',
      },
    ],
    questions: [
      {
        q: 'Which server automatically gives computers their IP addresses?',
        choices: ['DNS', 'DHCP', 'Syslog', 'Proxy'],
        answer: 1,
        why: '**DHCP** assigns IP addresses, subnet masks, gateways, and DNS servers automatically.',
      },
      {
        q: 'A company wants one appliance that does firewall, antivirus, and content filtering. What is it?',
        choices: ['Load balancer', 'UTM', 'Spam gateway', 'Syslog server'],
        answer: 1,
        why: 'A **UTM** combines many security functions in one device.',
      },
      {
        q: 'Where should logs from all routers and switches be sent for central review?',
        choices: ['A syslog server', 'A DHCP server', 'A print server', 'A load balancer'],
        answer: 0,
        why: 'A **syslog server** collects and stores logs from many devices.',
      },
      {
        q: 'A website gets so much traffic that it needs several servers. What spreads requests between them?',
        choices: ['A proxy server', 'A load balancer', 'A DNS server', 'A spam gateway'],
        answer: 1,
        why: 'A **load balancer** distributes incoming traffic across multiple servers.',
      },
      {
        q: 'A factory’s control system runs old software that can’t be patched. What’s the best protection?',
        choices: [
          'Connect it directly to the internet for updates',
          'Isolate it on its own network segment',
          'Replace its DNS server',
          'Disable its logs',
        ],
        answer: 1,
        why: 'Unpatchable **legacy/SCADA** systems should be **isolated** so attackers can’t reach them.',
      },
    ],
  },

  '1201-2.4': {
    cards: [
      {
        title: 'IP addresses',
        bullets: [
          '**IPv4**: four numbers 0–255, like `192.168.1.10`.',
          '**IPv6**: longer, hex, like `2001:db8::1`. `::` means a run of zeros was shortened.',
          '**Subnet mask** (like `255.255.255.0`) says which part is the network and which part is the device.',
          '**Default gateway**: the router address your device sends internet traffic to.',
        ],
      },
      {
        title: 'Private and special addresses',
        bullets: [
          'Private ranges (not routed on the internet): **10.x.x.x**, **172.16–31.x.x**, **192.168.x.x**.',
          '**APIPA 169.254.x.x**: Windows gives itself this when it **can’t reach a DHCP server**.',
          '**127.0.0.1**: loopback, meaning “this computer”.',
        ],
        tip: 'See 169.254.x.x? That’s a DHCP problem. It’s one of the most tested facts on A+.',
      },
      {
        title: 'DHCP',
        bullets: [
          'A **scope** is the range of addresses DHCP can hand out.',
          'A **lease** is how long a device keeps its address.',
          'A **reservation** always gives one device (by MAC address) the same IP.',
          '**Exclusions** are addresses in the scope DHCP won’t hand out, like ones used by printers set manually.',
        ],
      },
      {
        title: 'DNS records',
        bullets: [
          '**A**: name to IPv4. **AAAA**: name to IPv6.',
          '**MX**: which server receives **email** for the domain.',
          '**CNAME**: an alias, one name pointing to another name.',
          '**TXT**: text notes, used for email security: **SPF**, **DKIM**, **DMARC**.',
        ],
        tip: 'Email not arriving for a domain? Check the MX record.',
      },
      {
        title: 'VLANs and VPNs',
        bullets: [
          '**VLAN**: splits one physical switch into separate logical networks (for example, guests vs staff).',
          '**VPN**: an encrypted tunnel over the internet, so remote workers can safely reach the office network.',
        ],
      },
    ],
    questions: [
      {
        q: 'A PC shows the IP address 169.254.20.5. What does this tell you?',
        choices: [
          'It has a static IP',
          'It couldn’t reach a DHCP server',
          'It’s using IPv6',
          'DNS is broken but DHCP works',
        ],
        answer: 1,
        why: '**169.254.x.x is APIPA**: Windows assigns it to itself when **no DHCP server answers**.',
      },
      {
        q: 'Which DNS record tells the world where to deliver email for a domain?',
        choices: ['A', 'CNAME', 'MX', 'AAAA'],
        answer: 2,
        why: 'The **MX** (Mail eXchanger) record points to the domain’s mail server.',
      },
      {
        q: 'Which of these is a private IPv4 address?',
        choices: ['8.8.8.8', '172.20.4.1', '1.1.1.1', '64.10.5.3'],
        answer: 1,
        why: '**172.16.0.0 to 172.31.255.255** is a private range, so 172.20.4.1 is private.',
      },
      {
        q: 'A printer must always get the same IP from DHCP. What should you set up?',
        choices: ['A DHCP reservation', 'A shorter lease', 'An MX record', 'A VLAN'],
        answer: 0,
        why: 'A **reservation** ties an IP to the printer’s MAC address so it always gets the same one.',
      },
      {
        q: 'Which DNS record type maps a name to an IPv6 address?',
        choices: ['A', 'AAAA', 'MX', 'TXT'],
        answer: 1,
        why: '**AAAA** (“quad A”) is for IPv6. A plain **A** record is for IPv4.',
      },
      {
        q: 'An office wants guest Wi-Fi traffic kept separate from staff traffic on the same switches. What should they use?',
        choices: ['VPN', 'VLAN', 'APIPA', 'CNAME'],
        answer: 1,
        why: 'A **VLAN** splits one physical network into separate logical networks.',
      },
      {
        q: 'Which TXT-record-based email technologies help stop spoofed email?',
        choices: ['SPF, DKIM, and DMARC', 'DHCP, DNS, and APIPA', 'IMAP, POP3, and SMTP', 'A, AAAA, and MX'],
        answer: 0,
        why: '**SPF, DKIM, and DMARC** are published in DNS TXT records to prove which mail is genuinely from a domain.',
      },
    ],
  },

  '1201-2.5': {
    cards: [
      {
        title: 'The core devices',
        bullets: [
          '**Router**: connects **different networks** together, like your home network to the internet. It works with IP addresses.',
          '**Switch**: connects devices **within one network**. It works with **MAC addresses** and only sends traffic to the right port.',
          '**Unmanaged switch**: plug and play, no settings. **Managed switch**: configurable (VLANs, monitoring).',
          '**Access point (AP)**: adds Wi-Fi to a wired network.',
        ],
        tip: 'Router = between networks. Switch = inside a network.',
      },
      {
        title: 'Security and power',
        bullets: [
          '**Firewall**: allows or blocks traffic based on rules.',
          '**PoE (Power over Ethernet)**: one cable carries data AND power to APs, cameras, and VoIP phones.',
          '**PoE injector**: adds power to a cable when the switch doesn’t support PoE.',
        ],
      },
      {
        title: 'Cabling gear and others',
        bullets: [
          '**Patch panel**: where cables from the walls end up in the network closet, so they can be patched to the switch.',
          '**Cable modem** (coax) and **DSL modem** (phone line) connect you to the ISP.',
          '**ONT (Optical Network Terminal)**: the box where **fiber** internet enters the building.',
          '**NIC**: the network card in a computer.',
          '**SDN (Software-Defined Networking)**: managing the network centrally with software.',
        ],
      },
    ],
    questions: [
      {
        q: 'Which device forwards traffic within a local network using MAC addresses?',
        choices: ['Router', 'Switch', 'Modem', 'ONT'],
        answer: 1,
        why: 'A **switch** learns MAC addresses and sends frames only to the correct port.',
      },
      {
        q: 'A new security camera needs both network and power through one Ethernet cable. What’s needed?',
        choices: ['PoE', 'A patch panel', 'A DSL modem', 'An unmanaged hub'],
        answer: 0,
        why: '**Power over Ethernet** carries power and data on the same cable.',
      },
      {
        q: 'Which device connects your home network to the internet and works with IP addresses?',
        choices: ['Switch', 'Router', 'Patch panel', 'Access point'],
        answer: 1,
        why: 'A **router** moves traffic **between networks**, like your LAN and the ISP.',
      },
      {
        q: 'Fiber internet enters a home through which device?',
        choices: ['Cable modem', 'ONT', 'DSL modem', 'PoE injector'],
        answer: 1,
        why: 'An **ONT** (Optical Network Terminal) converts the fiber signal for your network.',
      },
      {
        q: 'An admin needs to set up VLANs on a switch. What kind of switch is required?',
        choices: ['Unmanaged', 'Managed', 'Any switch', 'A PoE injector'],
        answer: 1,
        why: '**Managed switches** can be configured with VLANs, port settings, and monitoring. Unmanaged ones can’t.',
      },
    ],
  },

  '1201-2.6': {
    cards: [
      {
        title: 'Setting up a small office router',
        bullets: [
          '**Change the default admin password** first.',
          'Set the **Wi-Fi name (SSID)** and a strong **WPA3** (or WPA2) password.',
          'Make sure **DHCP** is on so devices get addresses automatically.',
          '**Update the firmware**.',
        ],
        tip: 'Default passwords are the first thing attackers try. Changing them is always step one.',
      },
      {
        title: 'Addressing choices',
        bullets: [
          '**Dynamic (DHCP)**: easy and automatic, good for laptops and phones.',
          '**Static IP**: set by hand, good for **printers and servers** that must keep the same address.',
          'A static address needs: **IP, subnet mask, default gateway, DNS server**.',
        ],
      },
      {
        title: 'Letting things in from outside',
        bullets: [
          '**NAT**: lets many private devices share one public IP.',
          '**Port forwarding**: sends traffic on a specific port to one inside device (like a game server).',
          '**DMZ**: puts one device fully exposed to the internet. It’s risky, so use it sparingly.',
          '**UPnP**: lets apps open ports automatically. It’s convenient but a security risk, so often turn it off.',
        ],
      },
      {
        title: 'Guest and IoT networks',
        bullets: [
          'A **guest network** keeps visitors off your main network.',
          'Put **IoT devices** on their own network too.',
          '**Content filtering** blocks unwanted sites.',
        ],
      },
    ],
    questions: [
      {
        q: 'What is the FIRST thing you should change on a new SOHO router?',
        choices: ['The Wi-Fi channel', 'The default admin password', 'The DHCP lease time', 'The DNS server'],
        answer: 1,
        why: 'Default admin passwords are public knowledge. **Change them first.**',
      },
      {
        q: 'A user hosts a game server at home and friends need to reach it on port 25565. What should be set up?',
        choices: ['Port forwarding', 'APIPA', 'A guest network', 'MAC filtering'],
        answer: 0,
        why: '**Port forwarding** sends outside traffic on that port to the game server inside.',
      },
      {
        q: 'What lets several home devices share one public IP address?',
        choices: ['NAT', 'DNS', 'VLAN', 'PoE'],
        answer: 0,
        why: '**NAT** translates private addresses to the single public IP from the ISP.',
      },
      {
        q: 'Which device should usually get a static IP address?',
        choices: ['A visitor’s phone', 'A network printer', 'A laptop', 'A tablet'],
        answer: 1,
        why: 'Printers and servers should keep the **same address** so everyone can find them.',
      },
      {
        q: 'Which router feature lets apps open ports on their own and is often disabled for security?',
        choices: ['UPnP', 'WPA3', 'DHCP', 'NAT'],
        answer: 0,
        why: '**UPnP** opens ports automatically. Malware can abuse that, so many people turn it off.',
      },
    ],
  },

  '1201-2.7': {
    cards: [
      {
        title: 'Internet connection types',
        bullets: [
          '**Fiber**: fastest and most reliable, uses light.',
          '**Cable**: through the TV coax line. It’s fast, but shared with neighbors.',
          '**DSL**: over phone lines. It’s slower and gets worse with distance from the provider.',
          '**Satellite**: works anywhere but has **high latency** (delay). Low-orbit services like Starlink improve this.',
          '**Cellular (4G/5G)**: mobile data, also used for home internet.',
          '**WISP**: wireless internet from a local provider using antennas.',
        ],
        tip: 'Satellite = high latency. Good for browsing, bad for gaming and video calls.',
      },
      {
        title: 'Network sizes',
        bullets: [
          '**PAN**: personal, like Bluetooth around you.',
          '**LAN**: one building or home. **WLAN**: wireless LAN.',
          '**MAN**: a city. **WAN**: large areas, like the internet.',
          '**SAN**: a storage area network, high-speed storage for servers.',
        ],
        tip: 'Smallest to largest: PAN, LAN, MAN, WAN.',
      },
    ],
    questions: [
      {
        q: 'A rural customer’s only option is a connection with noticeable delay that makes video calls laggy. What type is it most likely?',
        choices: ['Fiber', 'Satellite', 'Cable', 'Ethernet'],
        answer: 1,
        why: 'Traditional **satellite** internet has **high latency** because signals travel to space and back.',
      },
      {
        q: 'Which network type covers an entire city?',
        choices: ['PAN', 'LAN', 'MAN', 'SAN'],
        answer: 2,
        why: 'A **MAN** (Metropolitan Area Network) spans a city.',
      },
      {
        q: 'Which internet type uses existing telephone lines?',
        choices: ['DSL', 'Cable', 'Fiber', 'WISP'],
        answer: 0,
        why: '**DSL** runs over phone lines. Its speed drops the farther you are from the provider.',
      },
      {
        q: 'A phone connected to wireless earbuds forms what kind of network?',
        choices: ['WAN', 'PAN', 'MAN', 'SAN'],
        answer: 1,
        why: 'A **PAN** (Personal Area Network) is the tiny network around one person.',
      },
      {
        q: 'Which network type gives servers high-speed access to shared storage?',
        choices: ['SAN', 'WLAN', 'PAN', 'MAN'],
        answer: 0,
        why: 'A **SAN** (Storage Area Network) is dedicated high-speed storage networking.',
      },
    ],
  },

  '1201-2.8': {
    cards: [
      {
        title: 'Cable tools',
        bullets: [
          '**Crimper**: attaches RJ45 connectors to the end of a cable.',
          '**Cable stripper**: removes the outer jacket.',
          '**Punchdown tool**: pushes wires into a **patch panel** or wall jack.',
          '**Cable tester**: checks the wires are connected in the right order.',
        ],
      },
      {
        title: 'Finding and checking',
        bullets: [
          '**Toner probe**: puts a tone on one end of a cable so you can **find the other end** in a bundle.',
          '**Loopback plug**: tests a network port by sending its signal back to itself.',
          '**Wi-Fi analyzer**: shows signal strength and which **channels** are crowded.',
          '**Network tap**: copies traffic so it can be monitored.',
        ],
        tip: 'Which of 50 cables in the closet is the one from room 12? Use a toner probe.',
      },
    ],
    questions: [
      {
        q: 'Which tool attaches an RJ45 connector to a network cable?',
        choices: ['Punchdown tool', 'Crimper', 'Toner probe', 'Loopback plug'],
        answer: 1,
        why: 'A **crimper** squeezes the RJ45 connector onto the cable.',
      },
      {
        q: 'You need to find which cable in a closet bundle goes to a specific office. What do you use?',
        choices: ['Wi-Fi analyzer', 'Toner probe', 'Cable stripper', 'Crimper'],
        answer: 1,
        why: 'A **toner probe** sends a tone down the cable so you can trace the other end.',
      },
      {
        q: 'Which tool seats wires into a patch panel?',
        choices: ['Punchdown tool', 'Crimper', 'Multimeter', 'Loopback plug'],
        answer: 0,
        why: 'A **punchdown tool** pushes each wire into the patch panel or keystone jack.',
      },
      {
        q: 'Users complain Wi-Fi is slow and you suspect neighbors are on the same channel. Which tool helps?',
        choices: ['Cable tester', 'Wi-Fi analyzer', 'Network tap', 'Toner probe'],
        answer: 1,
        why: 'A **Wi-Fi analyzer** shows nearby networks, their channels, and signal strength.',
      },
      {
        q: 'Which tool checks that a network port on a PC is working by sending its signal back to itself?',
        choices: ['Loopback plug', 'Punchdown tool', 'Crimper', 'Toner probe'],
        answer: 0,
        why: 'A **loopback plug** sends the signal straight back, which tests the port.',
      },
    ],
  },
}

export default lessons
