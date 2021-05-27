//attributes of the course

export interface Icourse {
  name: string;
  slug: string;
  participantRoles?: [
    {
      name: String;
      steps: [
        {
          slug: String;
          prerequisites: [
            {
              dataType: String;
            }
          ];
          components: [
            {
              type: String;
              dataType: String;
              slug: String;
            }
          ];
        }
      ];
    }
  ];
}
