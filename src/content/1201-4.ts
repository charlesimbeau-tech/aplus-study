import type { Lesson } from './types'

// Core 1, Domain 4.0 Virtualization and Cloud Computing
const lessons: Record<string, Lesson> = {
  '1201-4.1': {
    cards: [
      {
        title: 'What virtualization is',
        bullets: [
          'A **virtual machine (VM)** is a whole computer running as software inside another computer.',
          'The **hypervisor** runs and manages the VMs.',
          'The real computer is the **host**. Each VM is a **guest**.',
        ],
      },
      {
        title: 'Two types of hypervisor',
        bullets: [
          '**Type 1 (bare metal)**: runs directly on the hardware. Used in data centers: **VMware ESXi, Hyper-V Server, Proxmox**.',
          '**Type 2 (hosted)**: runs as an app on top of a normal OS: **VirtualBox, VMware Workstation**.',
        ],
        tip: 'Type 1 is first on the hardware. Type 2 sits on top of an OS.',
      },
      {
        title: 'Why use VMs',
        bullets: [
          '**Sandbox**: safely test software or open suspicious files.',
          '**Test** a new OS or update before rolling it out.',
          'Run **legacy software** that needs an old OS.',
          '**Cross-platform**: run Linux on a Windows PC, for example.',
        ],
      },
      {
        title: 'Requirements and containers',
        bullets: [
          'Turn on **hardware virtualization** (Intel VT-x / AMD-V) in **BIOS/UEFI**.',
          'Enough **RAM**, **CPU cores**, and **storage** for the host AND all guests.',
          '**Containers** (like Docker) share the host OS kernel, so they’re lighter and faster to start than full VMs.',
          'VMs need **security** too: patch them and use antivirus like on any PC.',
        ],
        tip: 'VM software says virtualization isn’t supported? Turn on VT-x/AMD-V in the BIOS.',
      },
    ],
    questions: [
      {
        q: 'Which hypervisor type runs directly on the hardware without a host OS?',
        choices: ['Type 1', 'Type 2', 'Container', 'Emulator'],
        answer: 0,
        why: '**Type 1 (bare metal)** hypervisors run straight on the hardware.',
      },
      {
        q: 'A user installs VirtualBox on their Windows laptop to run Linux. What type of hypervisor is VirtualBox?',
        choices: ['Type 1', 'Type 2', 'A container engine', 'Firmware'],
        answer: 1,
        why: '**VirtualBox** runs as an app on top of an existing OS, so it’s **Type 2**.',
      },
      {
        q: 'VM software says hardware virtualization isn’t available. What should you check?',
        choices: [
          'That VT-x / AMD-V is enabled in BIOS/UEFI',
          'The monitor refresh rate',
          'The printer driver',
          'DNS settings',
        ],
        answer: 0,
        why: 'Hardware virtualization (**VT-x/AMD-V**) often ships turned off in the **BIOS/UEFI**.',
      },
      {
        q: 'What’s a good use of a VM for a security analyst?',
        choices: [
          'Sandboxing a suspicious file',
          'Speeding up their main OS',
          'Replacing the firewall',
          'Increasing Wi-Fi range',
        ],
        answer: 0,
        why: 'A VM is an isolated **sandbox**, so malware inside can’t easily harm the host.',
      },
      {
        q: 'What’s the main difference between containers and VMs?',
        choices: [
          'Containers share the host OS kernel and are lighter',
          'Containers need more RAM',
          'Containers need a Type 1 hypervisor',
          'Containers can’t run apps',
        ],
        answer: 0,
        why: '**Containers** share the host’s kernel, so they skip booting a full OS and use fewer resources.',
      },
    ],
  },

  '1201-4.2': {
    cards: [
      {
        title: 'Service models',
        bullets: [
          '**SaaS**: you just use the app, like **Microsoft 365, Gmail, Salesforce**.',
          '**PaaS**: a platform to build and run your own apps without managing servers.',
          '**IaaS**: you rent virtual servers, storage, and networks, and manage the OS yourself (AWS EC2, Azure VMs).',
        ],
        tip: 'SaaS = software. PaaS = platform for developers. IaaS = raw infrastructure. You manage more as you go from SaaS to IaaS.',
      },
      {
        title: 'Deployment models',
        bullets: [
          '**Public cloud**: shared provider infrastructure (AWS, Azure, Google Cloud).',
          '**Private cloud**: dedicated to one organization.',
          '**Hybrid**: a mix of public and private.',
          '**Community**: shared by organizations with common needs (like several hospitals).',
        ],
      },
      {
        title: 'Cloud features',
        bullets: [
          '**Elasticity / rapid elasticity**: automatically scale up and down with demand.',
          '**Metered / pay-as-you-go**: pay only for what you use.',
          '**Shared vs dedicated resources**, **high availability**, and **multitenancy** (many customers on the same hardware).',
          '**File synchronization**: files sync across devices (OneDrive, Dropbox).',
          '**VDI (Virtual Desktop Infrastructure)**: your desktop runs in the cloud or data center and you connect to it.',
        ],
      },
    ],
    questions: [
      {
        q: 'A company rents virtual servers and installs and manages its own OS on them. Which model is this?',
        choices: ['SaaS', 'PaaS', 'IaaS', 'DaaS'],
        answer: 2,
        why: 'With **IaaS** you rent raw infrastructure and manage the OS yourself.',
      },
      {
        q: 'Microsoft 365 email used through a web browser is an example of what?',
        choices: ['IaaS', 'PaaS', 'SaaS', 'Private cloud'],
        answer: 2,
        why: '**SaaS**: the whole app is provided and you just use it.',
      },
      {
        q: 'A web shop’s cloud servers automatically add capacity during holiday sales and shrink afterward. What feature is this?',
        choices: ['Multitenancy', 'Rapid elasticity', 'A community cloud', 'VDI'],
        answer: 1,
        why: '**Rapid elasticity** scales resources up and down with demand.',
      },
      {
        q: 'An organization keeps sensitive data in its own private cloud but uses AWS for its public website. What deployment model is this?',
        choices: ['Public', 'Private', 'Hybrid', 'Community'],
        answer: 2,
        why: 'Mixing private and public is a **hybrid** cloud.',
      },
      {
        q: 'Employees log in to a Windows desktop that actually runs in the data center. What is this?',
        choices: ['VDI', 'IaaS storage', 'A Type 2 hypervisor', 'File sync'],
        answer: 0,
        why: '**VDI** hosts desktops centrally, and users connect to them remotely.',
      },
    ],
  },
}

export default lessons
