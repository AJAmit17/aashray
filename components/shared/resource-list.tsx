import { Resource } from "@/types";
import ResourceCard from "./resource-card";

interface ResourceListProps {
  resources: Resource[];
  onUpdate: () => void;
}

export default function ResourceList({ resources, onUpdate }: ResourceListProps) {
  return (
    <div className="space-y-4">
      {resources.map((resource) => (
        <ResourceCard key={resource.id} resource={resource} />
      ))}
      {resources.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No resources found
        </div>
      )}
    </div>
  );
}