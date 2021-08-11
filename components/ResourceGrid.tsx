import { SimpleGrid } from "@chakra-ui/react";
import ResourceCard from "./ResourceCard";

const ResourceGrid = ({ data }) => (
  <SimpleGrid
    columns={{ base: 1, md: 2, lg: 3 }}
    spacing={{ base: "4", md: "12", lg: "20" }}
    margin={12}
    alignItems='center'
    justifyItems='center'
    fontSize='2xl'
  >
    {data.map((resource, idx) => (
      <ResourceCard
        key={idx}
        title={resource.fields["Title"]}
        url={resource.fields["URL"]}
        conference={resource.fields["Conference"]}
        year={resource.fields["Year"]}
        category={resource.fields["Category"]}
      />
    ))}
  </SimpleGrid>
);

export default ResourceGrid;
