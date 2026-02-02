// Royal Mulch Team Registry
// TypeScript data for team members

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Humble D. Dow',
    role: 'Founder & CEO',
    image: '/assets/img/team/team-1.jpg',
    bio: 'Founded Royal Mulch over 25 years ago with a passion for quality landscaping materials.',
  },
  {
    id: 2,
    name: 'Rosalina D. William',
    role: 'Operations Manager',
    image: '/assets/img/team/team-2.jpg',
    bio: 'Ensures smooth operations and timely delivery of all our products.',
  },
  {
    id: 3,
    name: 'Jikson N. Nelson',
    role: 'Landscape Designer',
    image: '/assets/img/team/team-3.jpg',
    bio: 'Creates beautiful landscape designs tailored to Central Ohio\'s climate.',
  },
  {
    id: 4,
    name: 'Yokolili Y. Yanke',
    role: 'Lead Installer',
    image: '/assets/img/team/team-4.jpg',
    bio: 'Leads our installation team with expertise and precision.',
  },
  {
    id: 5,
    name: 'Miranda H. Halim',
    role: 'Gardener',
    image: '/assets/img/team/team-5.jpg',
    bio: 'Expert in plant care and garden maintenance.',
  },
  {
    id: 6,
    name: 'Yellow D. Asinta',
    role: 'Groundskeeper',
    image: '/assets/img/team/team-6.jpg',
    bio: 'Maintains our facilities and assists with deliveries.',
  },
  {
    id: 7,
    name: 'Double A. Action',
    role: 'Horticulturist',
    image: '/assets/img/team/team-7.jpg',
    bio: 'Provides expert plant and soil analysis for our customers.',
  },
  {
    id: 8,
    name: 'AOC M. Monitor',
    role: 'Farm Laborer',
    image: '/assets/img/team/team-8.jpg',
    bio: 'Helps process and prepare our quality mulch products.',
  },
];

// Helper functions
export const teamRegistry = {
  getAll: () => teamMembers,
  getByRole: (role: string) => teamMembers.filter(t => t.role.toLowerCase().includes(role.toLowerCase())),
  getById: (id: number) => teamMembers.find(t => t.id === id),
  getLeadership: () => teamMembers.filter(t => ['Founder', 'CEO', 'Manager', 'Lead'].some(r => t.role.includes(r))),
};

export default teamRegistry;
