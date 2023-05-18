const users = [
    {
      id: 1,
      username:'john_doe',
      name: 'John Doe',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      connections: 100,
      bio: 'Software Engineer | Coffee Lover | Travel Enthusiast',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?food',
        'https://source.unsplash.com/random/150x150/?travel',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 2,
      username:'jane_smith',
      name: 'Jane Smith',
      profilePicture: 'https://randomuser.me/api/portraits/women/1.jpg',
      connections: 50,
      bio: 'Photographer | Dog Lover | Outdoor Enthusiast',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?architecture',
        'https://source.unsplash.com/random/150x150/?pets',
        'https://source.unsplash.com/random/150x150/?adventure'
      ]
    },
    {
      id: 3,
      username:'david_johnson',
      name: 'David Johnson',
      profilePicture: 'https://randomuser.me/api/portraits/men/2.jpg',
      connections: 80,
      bio: 'Fitness Trainer | Musician | Foodie',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?fitness',
        'https://source.unsplash.com/random/150x150/?music',
        'https://source.unsplash.com/random/150x150/?food',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 4,
      username:'emily_davis',
      name: 'Emily Davis',
      profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg',
      connections: 70,
      bio: 'Artist | Nature Lover | Bookworm',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
        'https://source.unsplash.com/random/150x150/?coffee',
        'https://source.unsplash.com/random/150x150/?vacation',
        'https://source.unsplash.com/random/150x150/?interiors',
      
      ]
    },
    {
      id: 5,
      username:'michael_wilson',
      name: 'Michael Wilson',
      profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg',
      connections: 120,
      bio: 'Entrepreneur | Coffee Connoisseur | Travel Addict',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?business',
        'https://source.unsplash.com/random/150x150/?coffee',
        'https://source.unsplash.com/random/150x150/?vacation',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 6,
      username:'olivia_anderson',
      name: 'Olivia Anderson',
      profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg',
      connections: 90,
      bio: 'Fashion Designer | Cat Lover | Adventure Seeker',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?fashion',
        'https://source.unsplash.com/random/150x150/?cats',
        'https://source.unsplash.com/random/150x150/?adventure',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 7,
      username:'matthew_thompson',
      name: 'Matthew Thompson',
      profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
      connections: 60,
      bio: 'Gamer | Movie Buff | Tech Enthusiast',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?gaming',
        'https://source.unsplash.com/random/150x150/?movies',
        'https://source.unsplash.com/random/150x150/?technology',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 8,
      username:'sophia_wilson',
      name: 'Sophia Wilson',
      profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg',
      connections: 110,
      bio: 'Interior Designer | Dog Lover | Beachgoer',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?interiors',
        'https://source.unsplash.com/random/150x150/?dogs',
        'https://source.unsplash.com/random/150x150/?beach',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 9,
      username:'daniel_baker',
      name: 'Daniel Baker',
      profilePicture: 'https://randomuser.me/api/portraits/men/15.jpg',
      connections: 75,
      bio: 'Photographer | Hiker | Foodie',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?photography',
        'https://source.unsplash.com/random/150x150/?hiking',
        'https://source.unsplash.com/random/150x150/?food',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    },
    {
      id: 10,
      username:'ava_lewis',
      name: 'Ava Lewis',
      profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg',
      connections: 95,
      bio: 'Writer | Coffee Lover | Nature Enthusiast',
      recentPosts: [
        'https://source.unsplash.com/random/150x150/?writing',
        'https://source.unsplash.com/random/150x150/?coffee',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?art',
        'https://source.unsplash.com/random/150x150/?nature',
        'https://source.unsplash.com/random/150x150/?books',
        'https://source.unsplash.com/random/150x150/?business',
      ]
    }
  ];
  
  export default users;
  