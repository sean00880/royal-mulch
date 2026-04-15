// Royal Mulch Team Registry
// Role-based team display (locally owned and operated)

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Owner & Operator',
    role: 'Management',
    image: '/assets/img/team/team-1.jpg',
    bio: 'Founded Royal Mulch with a commitment to quality mulch products and reliable service for Central Ohio.',
  },
  {
    id: 2,
    name: 'Delivery Team',
    role: 'Logistics',
    image: '/assets/img/team/team-2.jpg',
    bio: 'Our drivers ensure same-day delivery across Lancaster and Fairfield County, rain or shine.',
  },
  {
    id: 3,
    name: 'Yard Crew',
    role: 'Operations',
    image: '/assets/img/team/team-3.jpg',
    bio: 'Handles loading, quality control, and keeps our 3503 Ruble Park Ave yard running smoothly.',
  },
  {
    id: 4,
    name: 'Customer Service',
    role: 'Support',
    image: '/assets/img/team/team-4.jpg',
    bio: 'Ready to help with quotes, scheduling, and making sure every order is right.',
  },
];

// Helper functions
export const teamRegistry = {
  getAll: () => teamMembers,
  getByRole: (role: string) => teamMembers.filter(t => t.role.toLowerCase().includes(role.toLowerCase())),
  getById: (id: number) => teamMembers.find(t => t.id === id),
  getLeadership: () => teamMembers.filter(t => ['Management', 'Lead'].some(r => t.role.includes(r))),
};

export default teamRegistry;
