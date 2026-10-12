// CompTIA A+ V15 exam objectives (220-1201 Core 1, 220-1202 Core 2).
// Each objective is one checkpoint. `short` is the plain-language name shown on the map;
// `official` is CompTIA's wording, shown on the checkpoint screen.

export type Checkpoint = {
  id: string // e.g. "1201-2.4"
  number: string // e.g. "2.4"
  short: string
  official: string
}

export type Domain = {
  id: string // e.g. "1201-2"
  number: string
  name: string
  weight: number // percent of the exam
  checkpoints: Checkpoint[]
}

export type Exam = {
  id: '1201' | '1202'
  name: string
  code: string
  domains: Domain[]
}

type Raw = [number: string, short: string, official: string]

function domain(examId: string, number: string, name: string, weight: number, items: Raw[]): Domain {
  return {
    id: `${examId}-${number}`,
    number,
    name,
    weight,
    checkpoints: items.map(([n, short, official]) => ({ id: `${examId}-${n}`, number: n, short, official })),
  }
}

export const exams: Exam[] = [
  {
    id: '1201',
    name: 'Core 1',
    code: '220-1201',
    domains: [
      domain('1201', '1', 'Mobile Devices', 13, [
        ['1.1', 'Fixing laptop & phone hardware', 'Given a scenario, monitor mobile device hardware and use appropriate replacement techniques.'],
        ['1.2', 'Mobile accessories & ports', 'Compare and contrast accessories and connectivity options for mobile devices.'],
        ['1.3', 'Mobile networking & app support', 'Given a scenario, configure basic mobile device network connectivity and provide application support.'],
      ]),
      domain('1201', '2', 'Networking', 23, [
        ['2.1', 'Ports & protocols', 'Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols, and their purposes.'],
        ['2.2', 'Wi-Fi & wireless tech', 'Explain wireless networking technologies.'],
        ['2.3', 'Network servers & services', 'Summarize services provided by networked hosts.'],
        ['2.4', 'IP addresses, DNS & DHCP', 'Explain common network configuration concepts.'],
        ['2.5', 'Routers, switches & friends', 'Compare and contrast common networking hardware devices.'],
        ['2.6', 'Setting up a home/office network', 'Given a scenario, configure basic wired/wireless small office/home office (SOHO) networks.'],
        ['2.7', 'Internet connection & network types', 'Compare and contrast internet connection types, network types, and their characteristics.'],
        ['2.8', 'Network tools', 'Explain networking tools and their purposes.'],
      ]),
      domain('1201', '3', 'Hardware', 25, [
        ['3.1', 'Displays', 'Compare and contrast display components and attributes.'],
        ['3.2', 'Cables & connectors', 'Summarize basic cable types and their connectors, features, and purposes.'],
        ['3.3', 'RAM', 'Compare and contrast RAM characteristics.'],
        ['3.4', 'Storage drives', 'Compare and contrast storage devices.'],
        ['3.5', 'Motherboards, CPUs & add-on cards', 'Given a scenario, install and configure motherboards, central processing units (CPUs), and add-on cards.'],
        ['3.6', 'Power supplies', 'Given a scenario, install the appropriate power supply.'],
        ['3.7', 'Setting up printers', 'Given a scenario, deploy and configure multifunction devices/printers and settings.'],
        ['3.8', 'Printer maintenance', 'Given a scenario, perform appropriate printer maintenance.'],
      ]),
      domain('1201', '4', 'Virtualization & Cloud', 11, [
        ['4.1', 'Virtual machines', 'Explain virtualization concepts.'],
        ['4.2', 'Cloud computing', 'Summarize cloud computing concepts.'],
      ]),
      domain('1201', '5', 'Hardware & Network Troubleshooting', 28, [
        ['5.1', 'Troubleshoot motherboard, RAM, CPU & power', 'Given a scenario, troubleshoot motherboards, RAM, CPUs, and power.'],
        ['5.2', 'Troubleshoot drives & RAID', 'Given a scenario, troubleshoot drive and RAID issues.'],
        ['5.3', 'Troubleshoot displays & projectors', 'Given a scenario, troubleshoot video, projector, and display issues.'],
        ['5.4', 'Troubleshoot mobile devices', 'Given a scenario, troubleshoot common mobile device issues.'],
        ['5.5', 'Troubleshoot networks', 'Given a scenario, troubleshoot network issues.'],
        ['5.6', 'Troubleshoot printers', 'Given a scenario, troubleshoot printer issues.'],
      ]),
    ],
  },
  {
    id: '1202',
    name: 'Core 2',
    code: '220-1202',
    domains: [
      domain('1202', '1', 'Operating Systems', 28, [
        ['1.1', 'Types of operating systems', 'Explain common operating system (OS) types and their purposes.'],
        ['1.2', 'Installing & upgrading an OS', 'Given a scenario, perform OS installations and upgrades in a diverse environment.'],
        ['1.3', 'Windows editions', 'Compare and contrast basic features of Microsoft Windows editions.'],
        ['1.4', 'Windows tools', 'Given a scenario, use Microsoft Windows operating system features and tools.'],
        ['1.5', 'Windows command line', 'Given a scenario, use the appropriate Microsoft command-line tools.'],
        ['1.6', 'Windows settings', 'Given a scenario, use the appropriate Windows settings.'],
        ['1.7', 'Windows networking', 'Given a scenario, configure Microsoft Windows networking features on a client/desktop.'],
        ['1.8', 'macOS', 'Explain common features and tools of the macOS/desktop operating system.'],
        ['1.9', 'Linux', 'Identify common features and tools of the Linux client/desktop operating system.'],
        ['1.10', 'Installing apps', 'Given a scenario, install applications according to requirements.'],
      ]),
      domain('1202', '2', 'Security', 28, [
        ['2.1', 'Security measures', 'Summarize various security measures and their purposes.'],
        ['2.2', 'Windows security settings', 'Given a scenario, configure and apply basic Microsoft Windows OS security settings.'],
        ['2.3', 'Wireless security & logins', 'Compare and contrast wireless security protocols and authentication methods.'],
        ['2.4', 'Malware', 'Summarize types of malware and tools/methods for detection, removal, and prevention.'],
        ['2.5', 'Social engineering & threats', 'Compare and contrast common social engineering attacks, threats, and vulnerabilities.'],
        ['2.6', 'Removing malware step by step', 'Given a scenario, implement procedures for basic small office/home office (SOHO) malware removal.'],
        ['2.7', 'Locking down workstations', 'Given a scenario, apply workstation security options and hardening techniques.'],
        ['2.8', 'Securing phones & tablets', 'Given a scenario, apply common methods for securing mobile devices.'],
        ['2.9', 'Data destruction', 'Compare and contrast common data destruction and disposal methods.'],
        ['2.10', 'Securing home/office networks', 'Given a scenario, apply security settings on SOHO wireless and wired networks.'],
        ['2.11', 'Browser security', 'Given a scenario, configure relevant security settings in a browser.'],
      ]),
      domain('1202', '3', 'Software Troubleshooting', 23, [
        ['3.1', 'Troubleshoot Windows', 'Given a scenario, troubleshoot common Windows OS issues.'],
        ['3.2', 'Troubleshoot mobile apps & OS', 'Given a scenario, troubleshoot common mobile OS and application issues.'],
        ['3.3', 'Mobile security problems', 'Given a scenario, troubleshoot common mobile OS and application security issues.'],
        ['3.4', 'PC security problems', 'Given a scenario, troubleshoot common personal computer (PC) security issues.'],
      ]),
      domain('1202', '4', 'Operational Procedures', 21, [
        ['4.1', 'Documentation & ticketing', 'Given a scenario, implement best practices associated with documentation and support systems information management.'],
        ['4.2', 'Change management', 'Given a scenario, apply change management procedures.'],
        ['4.3', 'Backups & recovery', 'Given a scenario, implement workstation backup and recovery methods.'],
        ['4.4', 'Safety', 'Given a scenario, use common safety procedures.'],
        ['4.5', 'Environment & power', 'Summarize environmental impacts and local environmental controls.'],
        ['4.6', 'Privacy, licensing & policy', 'Explain the importance of prohibited content/activity and privacy, licensing, and policy concepts.'],
        ['4.7', 'Talking to customers', 'Given a scenario, use proper communication techniques and professionalism.'],
        ['4.8', 'Scripting basics', 'Explain the basics of scripting.'],
        ['4.9', 'Remote access', 'Given a scenario, use remote access technologies.'],
        ['4.10', 'AI basics', 'Explain basic concepts related to artificial intelligence (AI).'],
      ]),
    ],
  },
]

export const allCheckpoints: Checkpoint[] = exams.flatMap((e) => e.domains.flatMap((d) => d.checkpoints))

export function findCheckpoint(id: string) {
  for (const exam of exams)
    for (const d of exam.domains) {
      const c = d.checkpoints.find((c) => c.id === id)
      if (c) return { exam, domain: d, checkpoint: c }
    }
  return undefined
}
