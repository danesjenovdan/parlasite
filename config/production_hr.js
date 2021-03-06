module.exports = {
  port: 7005,
  urls: {
    cdn: 'https://cdn.parlametar.hr/v1/parlassets',
    analize: 'https://analize.parlametar.hr/v1',
    data: 'https://data.parlametar.hr/v1',
    isci: 'https://isci.parlametar.hr',
    glej: 'https://glej.parlametar.hr',
    base: 'https://parlametar.hr',
  },
  siteLang: 'hr',
  siteMap: {
    landing: {
      legislation: 'glasanja',
      sessions: 'sjednice',
      members: 'zastupnice',
      parties: 'klubovi',
      tools: 'alati',
      about: 'https://parlameter.org/',
      media: 'za-medije',
      legal: 'pravne-napomene',
      thankYou: 'hvala',
      error: 'ups',
    },
    sessions: {
      search: {
        base: 'trazi',
        filter: 'filter',
      },
    },
    tools: {
      notifications: 'obavijesti',
      voteComparator: 'komparator-glasanja',
      discord: 'pretrazivac-razjedinjenosti',
      compass: 'saborski-kompas',
      wordGroups: 'grupe-rijeci',
    },
    member: {
      base: 'zastupnica',
      overview: 'pregled',
      votings: 'glasanja',
      speeches: 'govori',
    },
    party: {
      base: 'klub',
      overview: 'pregled',
      votings: 'glasanja',
      speeches: 'govori',
    },
    session: {
      base: 'sjednica',
      legislation: 'pregled', // doesn't exist
      otherVotings: 'glasanja',
      transcript: 'transkript',
      agenda: 'dnevni-red',
      vote: 'glasanje',
    },
  },
};
